var i = (function (s) {
    return (
      (s[(s.State = 0)] = 'State'),
      (s[(s.Transition = 1)] = 'Transition'),
      (s[(s.Sequence = 2)] = 'Sequence'),
      (s[(s.Group = 3)] = 'Group'),
      (s[(s.Animate = 4)] = 'Animate'),
      (s[(s.Keyframes = 5)] = 'Keyframes'),
      (s[(s.Style = 6)] = 'Style'),
      (s[(s.Trigger = 7)] = 'Trigger'),
      (s[(s.Reference = 8)] = 'Reference'),
      (s[(s.AnimateChild = 9)] = 'AnimateChild'),
      (s[(s.AnimateRef = 10)] = 'AnimateRef'),
      (s[(s.Query = 11)] = 'Query'),
      (s[(s.Stagger = 12)] = 'Stagger'),
      s
    );
  })(i || {}),
  c = '*';
function f(s, t) {
  return { type: i.Trigger, name: s, definitions: t, options: {} };
}
function _(s, t = null) {
  return { type: i.Animate, styles: t, timings: s };
}
function d(s, t = null) {
  return { type: i.Sequence, steps: s, options: t };
}
function y(s) {
  return { type: i.Style, styles: s, offset: null };
}
function p(s, t, e) {
  return { type: i.State, name: s, styles: t, options: e };
}
function m(s, t, e = null) {
  return { type: i.Transition, expr: s, animation: t, options: e };
}
var a = class {
    constructor(t = 0, e = 0) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this._started = !1),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._position = 0),
        (this.parentPlayer = null),
        (this.totalTime = t + e);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    onStart(t) {
      this._originalOnStartFns.push(t), this._onStartFns.push(t);
    }
    onDone(t) {
      this._originalOnDoneFns.push(t), this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        (this._started = !0);
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this.hasStarted() || this._onStart(),
        this.finish(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      (this._started = !1),
        (this._finished = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    setPosition(t) {
      this._position = this.totalTime ? t * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(t) {
      let e = t == 'start' ? this._onStartFns : this._onDoneFns;
      e.forEach((n) => n()), (e.length = 0);
    }
  },
  l = class {
    constructor(t) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._onDestroyFns = []),
        (this.parentPlayer = null),
        (this.totalTime = 0),
        (this.players = t);
      let e = 0,
        n = 0,
        o = 0,
        h = this.players.length;
      h == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach((r) => {
            r.onDone(() => {
              ++e == h && this._onFinish();
            }),
              r.onDestroy(() => {
                ++n == h && this._onDestroy();
              }),
              r.onStart(() => {
                ++o == h && this._onStart();
              });
          }),
        (this.totalTime = this.players.reduce(
          (r, u) => Math.max(r, u.totalTime),
          0,
        ));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      this.players.forEach((t) => t.init());
    }
    onStart(t) {
      this._onStartFns.push(t);
    }
    _onStart() {
      this.hasStarted() ||
        ((this._started = !0),
        this._onStartFns.forEach((t) => t()),
        (this._onStartFns = []));
    }
    onDone(t) {
      this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach((t) => t.play());
    }
    pause() {
      this.players.forEach((t) => t.pause());
    }
    restart() {
      this.players.forEach((t) => t.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach((t) => t.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._onFinish(),
        this.players.forEach((t) => t.destroy()),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      this.players.forEach((t) => t.reset()),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1);
    }
    setPosition(t) {
      let e = t * this.totalTime;
      this.players.forEach((n) => {
        let o = n.totalTime ? Math.min(1, e / n.totalTime) : 1;
        n.setPosition(o);
      });
    }
    getPosition() {
      let t = this.players.reduce(
        (e, n) => (e === null || n.totalTime > e.totalTime ? n : e),
        null,
      );
      return t != null ? t.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach((t) => {
        t.beforeDestroy && t.beforeDestroy();
      });
    }
    triggerCallback(t) {
      let e = t == 'start' ? this._onStartFns : this._onDoneFns;
      e.forEach((n) => n()), (e.length = 0);
    }
  },
  g = '!';
export {
  i as a,
  c as b,
  f as c,
  _ as d,
  d as e,
  y as f,
  p as g,
  m as h,
  a as i,
  l as j,
  g as k,
};
//# sourceMappingURL=chunk-FPVPJWI4.js.map
