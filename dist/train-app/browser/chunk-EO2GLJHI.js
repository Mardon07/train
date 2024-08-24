var Gd = Object.create;
var uo = Object.defineProperty,
  Wd = Object.defineProperties,
  qd = Object.getOwnPropertyDescriptor,
  Zd = Object.getOwnPropertyDescriptors,
  Yd = Object.getOwnPropertyNames,
  yn = Object.getOwnPropertySymbols,
  Qd = Object.getPrototypeOf,
  co = Object.prototype.hasOwnProperty,
  Xs = Object.prototype.propertyIsEnumerable;
var Kd = (e, t) => ((t = Symbol[e]) ? t : Symbol.for('Symbol.' + e));
var Js = (e, t, n) =>
    t in e
      ? uo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Fe = (e, t) => {
    for (var n in (t ||= {})) co.call(t, n) && Js(e, n, t[n]);
    if (yn) for (var n of yn(t)) Xs.call(t, n) && Js(e, n, t[n]);
    return e;
  },
  ke = (e, t) => Wd(e, Zd(t));
var GD = (e, t) => {
  var n = {};
  for (var r in e) co.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && yn)
    for (var r of yn(e)) t.indexOf(r) < 0 && Xs.call(e, r) && (n[r] = e[r]);
  return n;
};
var WD = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Jd = (e, t, n, r) => {
  if ((t && typeof t == 'object') || typeof t == 'function')
    for (let o of Yd(t))
      !co.call(e, o) &&
        o !== n &&
        uo(e, o, {
          get: () => t[o],
          enumerable: !(r = qd(t, o)) || r.enumerable,
        });
  return e;
};
var qD = (e, t, n) => (
  (n = e != null ? Gd(Qd(e)) : {}),
  Jd(
    t || !e || !e.__esModule
      ? uo(n, 'default', { value: e, enumerable: !0 })
      : n,
    e,
  )
);
var Xd = (e, t, n) =>
    new Promise((r, o) => {
      var i = (u) => {
          try {
            a(n.next(u));
          } catch (c) {
            o(c);
          }
        },
        s = (u) => {
          try {
            a(n.throw(u));
          } catch (c) {
            o(c);
          }
        },
        a = (u) => (u.done ? r(u.value) : Promise.resolve(u.value).then(i, s));
      a((n = n.apply(e, t)).next());
    }),
  ef = function (e, t) {
    (this[0] = e), (this[1] = t);
  },
  ZD = (e, t, n) => {
    var r = (s, a, u, c) => {
        try {
          var l = n[s](a),
            d = (a = l.value) instanceof ef,
            p = l.done;
          Promise.resolve(d ? a[0] : a)
            .then((f) =>
              d
                ? r(
                    s === 'return' ? s : 'next',
                    a[1] ? { done: f.done, value: f.value } : f,
                    u,
                    c,
                  )
                : u({ value: f, done: p }),
            )
            .catch((f) => r('throw', f, u, c));
        } catch (f) {
          c(f);
        }
      },
      o = (s) => (i[s] = (a) => new Promise((u, c) => r(s, a, u, c))),
      i = {};
    return (
      (n = n.apply(e, t)),
      (i[Kd('asyncIterator')] = () => i),
      o('next'),
      o('throw'),
      o('return'),
      i
    );
  };
function ea(e, t) {
  return Object.is(e, t);
}
var P = null,
  vn = !1,
  Dn = 1,
  ge = Symbol('SIGNAL');
function b(e) {
  let t = P;
  return (P = e), t;
}
function ta() {
  return P;
}
var $t = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function po(e) {
  if (vn) throw new Error('');
  if (P === null) return;
  P.consumerOnSignalRead(e);
  let t = P.nextProducerIndex++;
  if ((Cn(P), t < P.producerNode.length && P.producerNode[t] !== e && Bt(P))) {
    let n = P.producerNode[t];
    wn(n, P.producerIndexOfThis[t]);
  }
  P.producerNode[t] !== e &&
    ((P.producerNode[t] = e),
    (P.producerIndexOfThis[t] = Bt(P) ? ia(e, P, t) : 0)),
    (P.producerLastReadVersion[t] = e.version);
}
function tf() {
  Dn++;
}
function na(e) {
  if (!(Bt(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Dn)) {
    if (!e.producerMustRecompute(e) && !go(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = Dn);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = Dn);
  }
}
function ra(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = vn;
  vn = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || nf(n);
  } finally {
    vn = t;
  }
}
function oa() {
  return P?.consumerAllowSignalWrites !== !1;
}
function nf(e) {
  (e.dirty = !0), ra(e), e.consumerMarkedDirty?.(e);
}
function En(e) {
  return e && (e.nextProducerIndex = 0), b(e);
}
function ho(e, t) {
  if (
    (b(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (Bt(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        wn(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function go(e) {
  Cn(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (na(n), r !== n.version)) return !0;
  }
  return !1;
}
function mo(e) {
  if ((Cn(e), Bt(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      wn(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function ia(e, t, n) {
  if ((sa(e), e.liveConsumerNode.length === 0 && aa(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = ia(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function wn(e, t) {
  if ((sa(e), e.liveConsumerNode.length === 1 && aa(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      wn(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let r = e.liveConsumerIndexOfThis[t],
      o = e.liveConsumerNode[t];
    Cn(o), (o.producerIndexOfThis[r] = t);
  }
}
function Bt(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function Cn(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function sa(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function aa(e) {
  return e.producerNode !== void 0;
}
function yo(e) {
  let t = Object.create(rf);
  t.computation = e;
  let n = () => {
    if ((na(t), po(t), t.value === In)) throw t.error;
    return t.value;
  };
  return (n[ge] = t), n;
}
var lo = Symbol('UNSET'),
  fo = Symbol('COMPUTING'),
  In = Symbol('ERRORED'),
  rf = ke(Fe({}, $t), {
    value: lo,
    dirty: !0,
    error: null,
    equal: ea,
    producerMustRecompute(e) {
      return e.value === lo || e.value === fo;
    },
    producerRecomputeValue(e) {
      if (e.value === fo) throw new Error('Detected cycle in computations.');
      let t = e.value;
      e.value = fo;
      let n = En(e),
        r;
      try {
        r = e.computation();
      } catch (o) {
        (r = In), (e.error = o);
      } finally {
        ho(e, n);
      }
      if (t !== lo && t !== In && r !== In && e.equal(t, r)) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function of() {
  throw new Error();
}
var ua = of;
function ca() {
  ua();
}
function la(e) {
  ua = e;
}
var sf = null;
function da(e) {
  let t = Object.create(pa);
  t.value = e;
  let n = () => (po(t), t.value);
  return (n[ge] = t), n;
}
function vo(e, t) {
  oa() || ca(), e.equal(e.value, t) || ((e.value = t), af(e));
}
function fa(e, t) {
  oa() || ca(), vo(e, t(e.value));
}
var pa = ke(Fe({}, $t), { equal: ea, value: void 0 });
function af(e) {
  e.version++, tf(), ra(e), sf?.();
}
function D(e) {
  return typeof e == 'function';
}
function pt(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var bn = pt(
  (e) =>
    function (n) {
      e(this),
        (this.message = n
          ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}`
          : ''),
        (this.name = 'UnsubscriptionError'),
        (this.errors = n);
    },
);
function Ge(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var k = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n)
        if (((this._parentage = null), Array.isArray(n)))
          for (let i of n) i.remove(this);
        else n.remove(this);
      let { initialTeardown: r } = this;
      if (D(r))
        try {
          r();
        } catch (i) {
          t = i instanceof bn ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            ha(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof bn ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new bn(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) ha(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || (Array.isArray(n) && n.includes(t));
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? (this._parentage = null) : Array.isArray(n) && Ge(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && Ge(n, t), t instanceof e && t._removeParent(this);
  }
};
k.EMPTY = (() => {
  let e = new k();
  return (e.closed = !0), e;
})();
var Do = k.EMPTY;
function Mn(e) {
  return (
    e instanceof k ||
    (e && 'closed' in e && D(e.remove) && D(e.add) && D(e.unsubscribe))
  );
}
function ha(e) {
  D(e) ? e() : e.unsubscribe();
}
var ae = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var ht = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = ht;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = ht;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function _n(e) {
  ht.setTimeout(() => {
    let { onUnhandledError: t } = ae;
    if (t) t(e);
    else throw e;
  });
}
function Ht() {}
var ga = Io('C', void 0, void 0);
function ma(e) {
  return Io('E', void 0, e);
}
function ya(e) {
  return Io('N', e, void 0);
}
function Io(e, t, n) {
  return { kind: e, value: t, error: n };
}
var We = null;
function gt(e) {
  if (ae.useDeprecatedSynchronousErrorHandling) {
    let t = !We;
    if ((t && (We = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = We;
      if (((We = null), n)) throw r;
    }
  } else e();
}
function va(e) {
  ae.useDeprecatedSynchronousErrorHandling &&
    We &&
    ((We.errorThrown = !0), (We.error = e));
}
var qe = class extends k {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), Mn(t) && t.add(this))
          : (this.destination = lf);
    }
    static create(t, n, r) {
      return new Ce(t, n, r);
    }
    next(t) {
      this.isStopped ? wo(ya(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? wo(ma(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? wo(ga, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  uf = Function.prototype.bind;
function Eo(e, t) {
  return uf.call(e, t);
}
var Co = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          xn(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          xn(r);
        }
      else xn(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          xn(n);
        }
    }
  },
  Ce = class extends qe {
    constructor(t, n, r) {
      super();
      let o;
      if (D(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && ae.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && Eo(t.next, i),
              error: t.error && Eo(t.error, i),
              complete: t.complete && Eo(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new Co(o);
    }
  };
function xn(e) {
  ae.useDeprecatedSynchronousErrorHandling ? va(e) : _n(e);
}
function cf(e) {
  throw e;
}
function wo(e, t) {
  let { onStoppedNotification: n } = ae;
  n && ht.setTimeout(() => n(e, t));
}
var lf = { closed: !0, next: Ht, error: cf, complete: Ht };
var mt = (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
function H(e) {
  return e;
}
function df(...e) {
  return bo(e);
}
function bo(e) {
  return e.length === 0
    ? H
    : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
}
var S = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = pf(n) ? n : new Ce(n, r, o);
      return (
        gt(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i),
          );
        }),
        i
      );
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return (
        (r = Da(r)),
        new r((o, i) => {
          let s = new Ce({
            next: (a) => {
              try {
                n(a);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [mt]() {
      return this;
    }
    pipe(...n) {
      return bo(n)(this);
    }
    toPromise(n) {
      return (
        (n = Da(n)),
        new n((r, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => r(i),
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function Da(e) {
  var t;
  return (t = e ?? ae.Promise) !== null && t !== void 0 ? t : Promise;
}
function ff(e) {
  return e && D(e.next) && D(e.error) && D(e.complete);
}
function pf(e) {
  return (e && e instanceof qe) || (ff(e) && Mn(e));
}
function Mo(e) {
  return D(e?.lift);
}
function I(e) {
  return (t) => {
    if (Mo(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
function E(e, t, n, r, o) {
  return new _o(e, t, n, r, o);
}
var _o = class extends qe {
  constructor(t, n, r, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (u) {
              t.error(u);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (u) {
              t.error(u);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = r
        ? function () {
            try {
              r();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function xo() {
  return I((e, t) => {
    let n = null;
    e._refCount++;
    let r = E(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection,
        i = n;
      (n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}
var So = class extends S {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Mo(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new k();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          E(
            n,
            void 0,
            () => {
              this._teardown(), n.complete();
            },
            (r) => {
              this._teardown(), n.error(r);
            },
            () => this._teardown(),
          ),
        ),
      ),
        t.closed && ((this._connection = null), (t = k.EMPTY));
    }
    return t;
  }
  refCount() {
    return xo()(this);
  }
};
var Ia = pt(
  (e) =>
    function () {
      e(this),
        (this.name = 'ObjectUnsubscribedError'),
        (this.message = 'object unsubscribed');
    },
);
var ne = (() => {
    class e extends S {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(n) {
        let r = new Sn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new Ia();
      }
      next(n) {
        gt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        gt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        gt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length; ) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var n;
        return (
          ((n = this.observers) === null || n === void 0 ? void 0 : n.length) >
          0
        );
      }
      _trySubscribe(n) {
        return this._throwIfClosed(), super._trySubscribe(n);
      }
      _subscribe(n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? Do
          : ((this.currentObservers = null),
            i.push(n),
            new k(() => {
              (this.currentObservers = null), Ge(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new S();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new Sn(t, n)), e;
  })(),
  Sn = class extends ne {
    constructor(t, n) {
      super(), (this.destination = t), (this.source = n);
    }
    next(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    error(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.error) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    complete() {
      var t, n;
      (n =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        n === void 0 ||
        n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r =
        (n = this.source) === null || n === void 0
          ? void 0
          : n.subscribe(t)) !== null && r !== void 0
        ? r
        : Do;
    }
  };
var Ut = class extends ne {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var zt = {
  now() {
    return (zt.delegate || Date).now();
  },
  delegate: void 0,
};
var Tn = class extends ne {
  constructor(t = 1 / 0, n = 1 / 0, r = zt) {
    super(),
      (this._bufferSize = t),
      (this._windowTime = n),
      (this._timestampProvider = r),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = n === 1 / 0),
      (this._bufferSize = Math.max(1, t)),
      (this._windowTime = Math.max(1, n));
  }
  next(t) {
    let {
      isStopped: n,
      _buffer: r,
      _infiniteTimeWindow: o,
      _timestampProvider: i,
      _windowTime: s,
    } = this;
    n || (r.push(t), !o && r.push(i.now() + s)),
      this._trimBuffer(),
      super.next(t);
  }
  _subscribe(t) {
    this._throwIfClosed(), this._trimBuffer();
    let n = this._innerSubscribe(t),
      { _infiniteTimeWindow: r, _buffer: o } = this,
      i = o.slice();
    for (let s = 0; s < i.length && !t.closed; s += r ? 1 : 2) t.next(i[s]);
    return this._checkFinalizedStatuses(t), n;
  }
  _trimBuffer() {
    let {
        _bufferSize: t,
        _timestampProvider: n,
        _buffer: r,
        _infiniteTimeWindow: o,
      } = this,
      i = (o ? 1 : 2) * t;
    if ((t < 1 / 0 && i < r.length && r.splice(0, r.length - i), !o)) {
      let s = n.now(),
        a = 0;
      for (let u = 1; u < r.length && r[u] <= s; u += 2) a = u;
      a && r.splice(0, a + 1);
    }
  }
};
var Nn = class extends k {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var Gt = {
  setInterval(e, t, ...n) {
    let { delegate: r } = Gt;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = Gt;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var An = class extends Nn {
  constructor(t, n) {
    super(t, n), (this.scheduler = t), (this.work = n), (this.pending = !1);
  }
  schedule(t, n = 0) {
    var r;
    if (this.closed) return this;
    this.state = t;
    let o = this.id,
      i = this.scheduler;
    return (
      o != null && (this.id = this.recycleAsyncId(i, o, n)),
      (this.pending = !0),
      (this.delay = n),
      (this.id =
        (r = this.id) !== null && r !== void 0
          ? r
          : this.requestAsyncId(i, this.id, n)),
      this
    );
  }
  requestAsyncId(t, n, r = 0) {
    return Gt.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && Gt.clearInterval(n);
  }
  execute(t, n) {
    if (this.closed) return new Error('executing a cancelled action');
    this.pending = !1;
    let r = this._execute(t, n);
    if (r) return r;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, n) {
    let r = !1,
      o;
    try {
      this.work(t);
    } catch (i) {
      (r = !0), (o = i || new Error('Scheduled action threw falsy error'));
    }
    if (r) return this.unsubscribe(), o;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: n } = this,
        { actions: r } = n;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        Ge(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var yt = class e {
  constructor(t, n = e.now) {
    (this.schedulerActionCtor = t), (this.now = n);
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
yt.now = zt.now;
var On = class extends yt {
  constructor(t, n = yt.now) {
    super(t, n), (this.actions = []), (this._active = !1);
  }
  flush(t) {
    let { actions: n } = this;
    if (this._active) {
      n.push(t);
      return;
    }
    let r;
    this._active = !0;
    do if ((r = t.execute(t.state, t.delay))) break;
    while ((t = n.shift()));
    if (((this._active = !1), r)) {
      for (; (t = n.shift()); ) t.unsubscribe();
      throw r;
    }
  }
};
var Ea = new On(An);
var Ze = new S((e) => e.complete());
function wa(e) {
  return e && D(e.schedule);
}
function To(e) {
  return e[e.length - 1];
}
function Rn(e) {
  return D(To(e)) ? e.pop() : void 0;
}
function me(e) {
  return wa(To(e)) ? e.pop() : void 0;
}
function Ca(e, t) {
  return typeof To(e) == 'number' ? e.pop() : t;
}
function Ma(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function ba(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
  );
}
function Ye(e) {
  return this instanceof Ye ? ((this.v = e), this) : new Ye(e);
}
function _a(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = {}),
    a('next'),
    a('throw'),
    a('return', s),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(f) {
    return function (h) {
      return Promise.resolve(h).then(f, d);
    };
  }
  function a(f, h) {
    r[f] &&
      ((o[f] = function (m) {
        return new Promise(function (A, x) {
          i.push([f, m, A, x]) > 1 || u(f, m);
        });
      }),
      h && (o[f] = h(o[f])));
  }
  function u(f, h) {
    try {
      c(r[f](h));
    } catch (m) {
      p(i[0][3], m);
    }
  }
  function c(f) {
    f.value instanceof Ye
      ? Promise.resolve(f.value.v).then(l, d)
      : p(i[0][2], f);
  }
  function l(f) {
    u('next', f);
  }
  function d(f) {
    u('throw', f);
  }
  function p(f, h) {
    f(h), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}
function xa(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof ba == 'function' ? ba(e) : e[Symbol.iterator]()),
      (n = {}),
      r('next'),
      r('throw'),
      r('return'),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, u) {
          (s = e[i](s)), o(a, u, s.done, s.value);
        });
      };
  }
  function o(i, s, a, u) {
    Promise.resolve(u).then(function (c) {
      i({ value: c, done: a });
    }, s);
  }
}
var Fn = (e) => e && typeof e.length == 'number' && typeof e != 'function';
function kn(e) {
  return D(e?.then);
}
function Pn(e) {
  return D(e[mt]);
}
function Ln(e) {
  return Symbol.asyncIterator && D(e?.[Symbol.asyncIterator]);
}
function jn(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == 'object' ? 'an invalid object' : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function hf() {
  return typeof Symbol != 'function' || !Symbol.iterator
    ? '@@iterator'
    : Symbol.iterator;
}
var Vn = hf();
function Bn(e) {
  return D(e?.[Vn]);
}
function $n(e) {
  return _a(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield Ye(n.read());
        if (o) return yield Ye(void 0);
        yield yield Ye(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function Hn(e) {
  return D(e?.getReader);
}
function O(e) {
  if (e instanceof S) return e;
  if (e != null) {
    if (Pn(e)) return gf(e);
    if (Fn(e)) return mf(e);
    if (kn(e)) return yf(e);
    if (Ln(e)) return Sa(e);
    if (Bn(e)) return vf(e);
    if (Hn(e)) return Df(e);
  }
  throw jn(e);
}
function gf(e) {
  return new S((t) => {
    let n = e[mt]();
    if (D(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      'Provided object does not correctly implement Symbol.observable',
    );
  });
}
function mf(e) {
  return new S((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function yf(e) {
  return new S((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n),
    ).then(null, _n);
  });
}
function vf(e) {
  return new S((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function Sa(e) {
  return new S((t) => {
    If(e, t).catch((n) => t.error(n));
  });
}
function Df(e) {
  return Sa($n(e));
}
function If(e, t) {
  var n, r, o, i;
  return Ma(this, void 0, void 0, function* () {
    try {
      for (n = xa(e); (r = yield n.next()), !r.done; ) {
        let s = r.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function Y(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function Un(e, t = 0) {
  return I((n, r) => {
    n.subscribe(
      E(
        r,
        (o) => Y(r, e, () => r.next(o), t),
        () => Y(r, e, () => r.complete(), t),
        (o) => Y(r, e, () => r.error(o), t),
      ),
    );
  });
}
function zn(e, t = 0) {
  return I((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function Ta(e, t) {
  return O(e).pipe(zn(t), Un(t));
}
function Na(e, t) {
  return O(e).pipe(zn(t), Un(t));
}
function Aa(e, t) {
  return new S((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Oa(e, t) {
  return new S((n) => {
    let r;
    return (
      Y(n, t, () => {
        (r = e[Vn]()),
          Y(
            n,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = r.next());
              } catch (s) {
                n.error(s);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0,
          );
      }),
      () => D(r?.return) && r.return()
    );
  });
}
function Gn(e, t) {
  if (!e) throw new Error('Iterable cannot be null');
  return new S((n) => {
    Y(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      Y(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function Ra(e, t) {
  return Gn($n(e), t);
}
function Fa(e, t) {
  if (e != null) {
    if (Pn(e)) return Ta(e, t);
    if (Fn(e)) return Aa(e, t);
    if (kn(e)) return Na(e, t);
    if (Ln(e)) return Gn(e, t);
    if (Bn(e)) return Oa(e, t);
    if (Hn(e)) return Ra(e, t);
  }
  throw jn(e);
}
function ye(e, t) {
  return t ? Fa(e, t) : O(e);
}
function Ef(...e) {
  let t = me(e);
  return ye(e, t);
}
function wf(e, t) {
  let n = D(e) ? e : () => e,
    r = (o) => o.error(n());
  return new S(t ? (o) => t.schedule(r, 0, o) : r);
}
function Cf(e) {
  return !!e && (e instanceof S || (D(e.lift) && D(e.subscribe)));
}
var be = pt(
  (e) =>
    function () {
      e(this),
        (this.name = 'EmptyError'),
        (this.message = 'no elements in sequence');
    },
);
function bf(e, t) {
  let n = typeof t == 'object';
  return new Promise((r, o) => {
    let i = !1,
      s;
    e.subscribe({
      next: (a) => {
        (s = a), (i = !0);
      },
      error: o,
      complete: () => {
        i ? r(s) : n ? r(t.defaultValue) : o(new be());
      },
    });
  });
}
function Me(e, t) {
  return I((n, r) => {
    let o = 0;
    n.subscribe(
      E(r, (i) => {
        r.next(e.call(t, i, o++));
      }),
    );
  });
}
var { isArray: Mf } = Array;
function _f(e, t) {
  return Mf(t) ? e(...t) : e(t);
}
function Wn(e) {
  return Me((t) => _f(e, t));
}
var { isArray: xf } = Array,
  { getPrototypeOf: Sf, prototype: Tf, keys: Nf } = Object;
function qn(e) {
  if (e.length === 1) {
    let t = e[0];
    if (xf(t)) return { args: t, keys: null };
    if (Af(t)) {
      let n = Nf(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function Af(e) {
  return e && typeof e == 'object' && Sf(e) === Tf;
}
function Zn(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function Of(...e) {
  let t = me(e),
    n = Rn(e),
    { args: r, keys: o } = qn(e);
  if (r.length === 0) return ye([], t);
  let i = new S(Rf(r, t, o ? (s) => Zn(o, s) : H));
  return n ? i.pipe(Wn(n)) : i;
}
function Rf(e, t, n = H) {
  return (r) => {
    ka(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let u = 0; u < o; u++)
          ka(
            t,
            () => {
              let c = ye(e[u], t),
                l = !1;
              c.subscribe(
                E(
                  r,
                  (d) => {
                    (i[u] = d), l || ((l = !0), a--), a || r.next(n(i.slice()));
                  },
                  () => {
                    --s || r.complete();
                  },
                ),
              );
            },
            r,
          );
      },
      r,
    );
  };
}
function ka(e, t, n) {
  e ? Y(n, e, t) : t();
}
function Pa(e, t, n, r, o, i, s, a) {
  let u = [],
    c = 0,
    l = 0,
    d = !1,
    p = () => {
      d && !u.length && !c && t.complete();
    },
    f = (m) => (c < r ? h(m) : u.push(m)),
    h = (m) => {
      i && t.next(m), c++;
      let A = !1;
      O(n(m, l++)).subscribe(
        E(
          t,
          (x) => {
            o?.(x), i ? f(x) : t.next(x);
          },
          () => {
            A = !0;
          },
          void 0,
          () => {
            if (A)
              try {
                for (c--; u.length && c < r; ) {
                  let x = u.shift();
                  s ? Y(t, s, () => h(x)) : h(x);
                }
                p();
              } catch (x) {
                t.error(x);
              }
          },
        ),
      );
    };
  return (
    e.subscribe(
      E(t, f, () => {
        (d = !0), p();
      }),
    ),
    () => {
      a?.();
    }
  );
}
function Qe(e, t, n = 1 / 0) {
  return D(t)
    ? Qe((r, o) => Me((i, s) => t(r, i, o, s))(O(e(r, o))), n)
    : (typeof t == 'number' && (n = t), I((r, o) => Pa(r, o, e, n)));
}
function Wt(e = 1 / 0) {
  return Qe(H, e);
}
function La() {
  return Wt(1);
}
function Yn(...e) {
  return La()(ye(e, me(e)));
}
function Ff(e) {
  return new S((t) => {
    O(e()).subscribe(t);
  });
}
function kf(...e) {
  let t = Rn(e),
    { args: n, keys: r } = qn(e),
    o = new S((i) => {
      let { length: s } = n;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        u = s,
        c = s;
      for (let l = 0; l < s; l++) {
        let d = !1;
        O(n[l]).subscribe(
          E(
            i,
            (p) => {
              d || ((d = !0), c--), (a[l] = p);
            },
            () => u--,
            void 0,
            () => {
              (!u || !d) && (c || i.next(r ? Zn(r, a) : a), i.complete());
            },
          ),
        );
      }
    });
  return t ? o.pipe(Wn(t)) : o;
}
function Pf(...e) {
  let t = me(e),
    n = Ca(e, 1 / 0),
    r = e;
  return r.length ? (r.length === 1 ? O(r[0]) : Wt(n)(ye(r, t))) : Ze;
}
function Ke(e, t) {
  return I((n, r) => {
    let o = 0;
    n.subscribe(E(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function No(e) {
  return I((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      E(n, void 0, void 0, (s) => {
        (i = O(e(s, No(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      }),
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function ja(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      u = t,
      c = 0;
    i.subscribe(
      E(
        s,
        (l) => {
          let d = c++;
          (u = a ? e(u, l, d) : ((a = !0), l)), r && s.next(u);
        },
        o &&
          (() => {
            a && s.next(u), s.complete();
          }),
      ),
    );
  };
}
function Lf(e, t) {
  return D(t) ? Qe(e, t, 1) : Qe(e, 1);
}
function jf(e, t = Ea) {
  return I((n, r) => {
    let o = null,
      i = null,
      s = null,
      a = () => {
        if (o) {
          o.unsubscribe(), (o = null);
          let c = i;
          (i = null), r.next(c);
        }
      };
    function u() {
      let c = s + e,
        l = t.now();
      if (l < c) {
        (o = this.schedule(void 0, c - l)), r.add(o);
        return;
      }
      a();
    }
    n.subscribe(
      E(
        r,
        (c) => {
          (i = c), (s = t.now()), o || ((o = t.schedule(u, e)), r.add(o));
        },
        () => {
          a(), r.complete();
        },
        void 0,
        () => {
          i = o = null;
        },
      ),
    );
  });
}
function qt(e) {
  return I((t, n) => {
    let r = !1;
    t.subscribe(
      E(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => {
          r || n.next(e), n.complete();
        },
      ),
    );
  });
}
function Ao(e) {
  return e <= 0
    ? () => Ze
    : I((t, n) => {
        let r = 0;
        t.subscribe(
          E(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          }),
        );
      });
}
function Vf(e) {
  return Me(() => e);
}
function Bf(e, t = H) {
  return (
    (e = e ?? $f),
    I((n, r) => {
      let o,
        i = !0;
      n.subscribe(
        E(r, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
        }),
      );
    })
  );
}
function $f(e, t) {
  return e === t;
}
function Qn(e = Hf) {
  return I((t, n) => {
    let r = !1;
    t.subscribe(
      E(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e())),
      ),
    );
  });
}
function Hf() {
  return new be();
}
function Uf(e) {
  return I((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function Oo(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? Ke((o, i) => e(o, i, r)) : H,
      Ao(1),
      n ? qt(t) : Qn(() => new be()),
    );
}
function Ro(e) {
  return e <= 0
    ? () => Ze
    : I((t, n) => {
        let r = [];
        t.subscribe(
          E(
            n,
            (o) => {
              r.push(o), e < r.length && r.shift();
            },
            () => {
              for (let o of r) n.next(o);
              n.complete();
            },
            void 0,
            () => {
              r = null;
            },
          ),
        );
      });
}
function zf(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? Ke((o, i) => e(o, i, r)) : H,
      Ro(1),
      n ? qt(t) : Qn(() => new be()),
    );
}
function Gf(e, t) {
  return I(ja(e, t, arguments.length >= 2, !0));
}
function ko(e = {}) {
  let {
    connector: t = () => new ne(),
    resetOnError: n = !0,
    resetOnComplete: r = !0,
    resetOnRefCountZero: o = !0,
  } = e;
  return (i) => {
    let s,
      a,
      u,
      c = 0,
      l = !1,
      d = !1,
      p = () => {
        a?.unsubscribe(), (a = void 0);
      },
      f = () => {
        p(), (s = u = void 0), (l = d = !1);
      },
      h = () => {
        let m = s;
        f(), m?.unsubscribe();
      };
    return I((m, A) => {
      c++, !d && !l && p();
      let x = (u = u ?? t());
      A.add(() => {
        c--, c === 0 && !d && !l && (a = Fo(h, o));
      }),
        x.subscribe(A),
        !s &&
          c > 0 &&
          ((s = new Ce({
            next: (te) => x.next(te),
            error: (te) => {
              (d = !0), p(), (a = Fo(f, n, te)), x.error(te);
            },
            complete: () => {
              (l = !0), p(), (a = Fo(f, r)), x.complete();
            },
          })),
          O(m).subscribe(s));
    })(i);
  };
}
function Fo(e, t, ...n) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let r = new Ce({
    next: () => {
      r.unsubscribe(), e();
    },
  });
  return O(t(...n)).subscribe(r);
}
function Wf(e, t, n) {
  let r,
    o = !1;
  return (
    e && typeof e == 'object'
      ? ({
          bufferSize: r = 1 / 0,
          windowTime: t = 1 / 0,
          refCount: o = !1,
          scheduler: n,
        } = e)
      : (r = e ?? 1 / 0),
    ko({
      connector: () => new Tn(r, t, n),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: o,
    })
  );
}
function qf(e) {
  return Ke((t, n) => e <= n);
}
function Zf(...e) {
  let t = me(e);
  return I((n, r) => {
    (t ? Yn(e, n, t) : Yn(e, n)).subscribe(r);
  });
}
function Yf(e, t) {
  return I((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      E(
        r,
        (u) => {
          o?.unsubscribe();
          let c = 0,
            l = i++;
          O(e(u, l)).subscribe(
            (o = E(
              r,
              (d) => r.next(t ? t(u, d, l, c++) : d),
              () => {
                (o = null), a();
              },
            )),
          );
        },
        () => {
          (s = !0), a();
        },
      ),
    );
  });
}
function Qf(e) {
  return I((t, n) => {
    O(e).subscribe(E(n, () => n.complete(), Ht)), !n.closed && t.subscribe(n);
  });
}
function Kf(e, t, n) {
  let r = D(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? I((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          E(
            i,
            (u) => {
              var c;
              (c = r.next) === null || c === void 0 || c.call(r, u), i.next(u);
            },
            () => {
              var u;
              (a = !1),
                (u = r.complete) === null || u === void 0 || u.call(r),
                i.complete();
            },
            (u) => {
              var c;
              (a = !1),
                (c = r.error) === null || c === void 0 || c.call(r, u),
                i.error(u);
            },
            () => {
              var u, c;
              a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)),
                (c = r.finalize) === null || c === void 0 || c.call(r);
            },
          ),
        );
      })
    : H;
}
var Mu = 'https://g.co/ng/security#xss',
  M = class extends Error {
    constructor(t, n) {
      super(_u(t, n)), (this.code = t);
    }
  };
function _u(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ': ' + t : ''}`;
}
function sn(e) {
  return { toString: e }.toString();
}
var Kn = '__parameters__';
function Jf(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function xu(e, t, n) {
  return sn(() => {
    let r = Jf(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(u, c, l) {
        let d = u.hasOwnProperty(Kn)
          ? u[Kn]
          : Object.defineProperty(u, Kn, { value: [] })[Kn];
        for (; d.length <= l; ) d.push(null);
        return (d[l] = d[l] || []).push(s), u;
      }
    }
    return (
      n && (o.prototype = Object.create(n.prototype)),
      (o.prototype.ngMetadataName = e),
      (o.annotationCls = o),
      o
    );
  });
}
var fr = globalThis;
function N(e) {
  for (let t in e) if (e[t] === N) return t;
  throw Error('Could not find renamed property on target object.');
}
function Xf(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function G(e) {
  if (typeof e == 'string') return e;
  if (Array.isArray(e)) return '[' + e.map(G).join(', ') + ']';
  if (e == null) return '' + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return '' + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function Ko(e, t) {
  return e == null || e === ''
    ? t === null
      ? ''
      : t
    : t == null || t === ''
      ? e
      : e + ' ' + t;
}
var ep = N({ __forward_ref__: N });
function Su(e) {
  return (
    (e.__forward_ref__ = Su),
    (e.toString = function () {
      return G(this());
    }),
    e
  );
}
function U(e) {
  return Tu(e) ? e() : e;
}
function Tu(e) {
  return (
    typeof e == 'function' && e.hasOwnProperty(ep) && e.__forward_ref__ === Su
  );
}
function F(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function Nu(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Ur(e) {
  return Va(e, Au) || Va(e, Ou);
}
function P0(e) {
  return Ur(e) !== null;
}
function Va(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function tp(e) {
  let t = e && (e[Au] || e[Ou]);
  return t || null;
}
function Ba(e) {
  return e && (e.hasOwnProperty($a) || e.hasOwnProperty(np)) ? e[$a] : null;
}
var Au = N({ ɵprov: N }),
  $a = N({ ɵinj: N }),
  Ou = N({ ngInjectableDef: N }),
  np = N({ ngInjectorDef: N }),
  T = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = 'InjectionToken'),
        (this.ɵprov = void 0),
        typeof n == 'number'
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = F({
              token: this,
              providedIn: n.providedIn || 'root',
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function Ru(e) {
  return e && !!e.ɵproviders;
}
var rp = N({ ɵcmp: N }),
  op = N({ ɵdir: N }),
  ip = N({ ɵpipe: N }),
  sp = N({ ɵmod: N }),
  pr = N({ ɵfac: N }),
  Yt = N({ __NG_ELEMENT_ID__: N }),
  Ha = N({ __NG_ENV_ID__: N });
function zr(e) {
  return typeof e == 'string' ? e : e == null ? '' : String(e);
}
function ap(e) {
  return typeof e == 'function'
    ? e.name || e.toString()
    : typeof e == 'object' && e != null && typeof e.type == 'function'
      ? e.type.name || e.type.toString()
      : zr(e);
}
function up(e, t) {
  let n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
  throw new M(-200, e);
}
function Ji(e, t) {
  throw new M(-201, !1);
}
var C = (function (e) {
    return (
      (e[(e.Default = 0)] = 'Default'),
      (e[(e.Host = 1)] = 'Host'),
      (e[(e.Self = 2)] = 'Self'),
      (e[(e.SkipSelf = 4)] = 'SkipSelf'),
      (e[(e.Optional = 8)] = 'Optional'),
      e
    );
  })(C || {}),
  Jo;
function Fu() {
  return Jo;
}
function re(e) {
  let t = Jo;
  return (Jo = e), t;
}
function ku(e, t, n) {
  let r = Ur(e);
  if (r && r.providedIn == 'root')
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & C.Optional) return null;
  if (t !== void 0) return t;
  Ji(e, 'Injector');
}
var cp = {},
  Qt = cp,
  Xo = '__NG_DI_FLAG__',
  hr = 'ngTempTokenPath',
  lp = 'ngTokenPath',
  dp = /\n/gm,
  fp = '\u0275',
  Ua = '__source',
  wt;
function pp() {
  return wt;
}
function Pe(e) {
  let t = wt;
  return (wt = e), t;
}
function hp(e, t = C.Default) {
  if (wt === void 0) throw new M(-203, !1);
  return wt === null
    ? ku(e, void 0, t)
    : wt.get(e, t & C.Optional ? null : void 0, t);
}
function $(e, t = C.Default) {
  return (Fu() || hp)(U(e), t);
}
function y(e, t = C.Default) {
  return $(e, Gr(t));
}
function Gr(e) {
  return typeof e > 'u' || typeof e == 'number'
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function ei(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = U(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new M(900, !1);
      let o,
        i = C.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          u = gp(a);
        typeof u == 'number' ? (u === -1 ? (o = a.token) : (i |= u)) : (o = a);
      }
      t.push($(o, i));
    } else t.push($(r));
  }
  return t;
}
function Pu(e, t) {
  return (e[Xo] = t), (e.prototype[Xo] = t), e;
}
function gp(e) {
  return e[Xo];
}
function mp(e, t, n, r) {
  let o = e[hr];
  throw (
    (t[Ua] && o.unshift(t[Ua]),
    (e.message = yp(
      `
` + e.message,
      o,
      n,
      r,
    )),
    (e[lp] = o),
    (e[hr] = null),
    e)
  );
}
function yp(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == fp
      ? e.slice(2)
      : e;
  let o = G(t);
  if (Array.isArray(t)) o = t.map(G).join(' -> ');
  else if (typeof t == 'object') {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ':' + (typeof a == 'string' ? JSON.stringify(a) : G(a)));
      }
    o = `{${i.join(', ')}}`;
  }
  return `${n}${r ? '(' + r + ')' : ''}[${o}]: ${e.replace(
    dp,
    `
  `,
  )}`;
}
var L0 = Pu(xu('Optional'), 8);
var j0 = Pu(xu('SkipSelf'), 4);
function bt(e, t) {
  let n = e.hasOwnProperty(pr);
  return n ? e[pr] : null;
}
function vp(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function Dp(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function Xi(e, t) {
  e.forEach((n) => (Array.isArray(n) ? Xi(n, t) : t(n)));
}
function Lu(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function gr(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function Ip(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function Ep(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) e.push(r, e[0]), (e[0] = n);
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      (e[o] = e[i]), o--;
    }
    (e[t] = n), (e[t + 1] = r);
  }
}
function es(e, t, n) {
  let r = an(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), Ep(e, r, t, n)), r;
}
function Po(e, t) {
  let n = an(e, t);
  if (n >= 0) return e[n | 1];
}
function an(e, t) {
  return wp(e, t, 1);
}
function wp(e, t, n) {
  let r = 0,
    o = e.length >> n;
  for (; o !== r; ) {
    let i = r + ((o - r) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (o = i) : (r = i + 1);
  }
  return ~(o << n);
}
var Mt = {},
  B = [],
  Kt = new T(''),
  ju = new T('', -1),
  Vu = new T(''),
  mr = class {
    get(t, n = Qt) {
      if (n === Qt) {
        let r = new Error(`NullInjectorError: No provider for ${G(t)}!`);
        throw ((r.name = 'NullInjectorError'), r);
      }
      return n;
    }
  },
  Bu = (function (e) {
    return (e[(e.OnPush = 0)] = 'OnPush'), (e[(e.Default = 1)] = 'Default'), e;
  })(Bu || {}),
  Jt = (function (e) {
    return (
      (e[(e.Emulated = 0)] = 'Emulated'),
      (e[(e.None = 2)] = 'None'),
      (e[(e.ShadowDom = 3)] = 'ShadowDom'),
      e
    );
  })(Jt || {}),
  je = (function (e) {
    return (
      (e[(e.None = 0)] = 'None'),
      (e[(e.SignalBased = 1)] = 'SignalBased'),
      (e[(e.HasDecoratorInputTransform = 2)] = 'HasDecoratorInputTransform'),
      e
    );
  })(je || {});
function Cp(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
function ti(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let o = n[r];
    if (typeof o == 'number') {
      if (o !== 0) break;
      r++;
      let i = n[r++],
        s = n[r++],
        a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = n[++r];
      bp(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function $u(e) {
  return e === 3 || e === 4 || e === 6;
}
function bp(e) {
  return e.charCodeAt(0) === 64;
}
function Xt(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == 'number'
          ? (n = o)
          : n === 0 ||
            (n === -1 || n === 2
              ? za(e, n, o, null, t[++r])
              : za(e, n, o, null, null));
      }
    }
  return e;
}
function za(e, t, n, r, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == 'number') {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == 'number') break;
    if (a === n) {
      if (r === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (r === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, r !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    r !== null && e.splice(i++, 0, r),
    o !== null && e.splice(i++, 0, o);
}
var Hu = 'ng-template';
function Mp(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == 'string'; o += 2)
      if (t[o] === 'class' && Cp(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (ts(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == 'string'; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function ts(e) {
  return e.type === 4 && e.value !== Hu;
}
function _p(e, t, n) {
  let r = e.type === 4 && !n ? Hu : e.value;
  return t === r;
}
function xp(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? Np(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == 'number') {
      if (!s && !ue(r) && !ue(u)) return !1;
      if (s && ue(u)) continue;
      (s = !1), (r = u | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (u !== '' && !_p(e, u, n)) || (u === '' && t.length === 1))
        ) {
          if (ue(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !Mp(e, o, u, n)) {
          if (ue(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a],
          l = Sp(u, o, ts(e), n);
        if (l === -1) {
          if (ue(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== '') {
          let d;
          if (
            (l > i ? (d = '') : (d = o[l + 1].toLowerCase()), r & 2 && c !== d)
          ) {
            if (ue(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return ue(r) || s;
}
function ue(e) {
  return (e & 1) === 0;
}
function Sp(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == 'string'; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return Ap(t, e);
}
function Uu(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (xp(e, t[r], n)) return !0;
  return !1;
}
function Tp(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function Np(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if ($u(n)) return t;
  }
  return e.length;
}
function Ap(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == 'number') return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function Op(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function Ga(e, t) {
  return e ? ':not(' + t.trim() + ')' : t;
}
function Rp(e) {
  let t = e[0],
    n = 1,
    r = 2,
    o = '',
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == 'string')
      if (r & 2) {
        let a = e[++n];
        o += '[' + s + (a.length > 0 ? '="' + a + '"' : '') + ']';
      } else r & 8 ? (o += '.' + s) : r & 4 && (o += ' ' + s);
    else
      o !== '' && !ue(s) && ((t += Ga(i, o)), (o = '')),
        (r = s),
        (i = i || !ue(r));
    n++;
  }
  return o !== '' && (t += Ga(i, o)), t;
}
function Fp(e) {
  return e.map(Rp).join(',');
}
function kp(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == 'string')
      o === 2 ? i !== '' && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!ue(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function V0(e) {
  return sn(() => {
    let t = Zu(e),
      n = ke(Fe({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === Bu.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || Jt.Emulated,
        styles: e.styles || B,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: '',
      });
    Yu(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = qa(r, !1)), (n.pipeDefs = qa(r, !0)), (n.id = Vp(n)), n
    );
  });
}
function Pp(e) {
  return Ve(e) || Gu(e);
}
function Lp(e) {
  return e !== null;
}
function zu(e) {
  return sn(() => ({
    type: e.type,
    bootstrap: e.bootstrap || B,
    declarations: e.declarations || B,
    imports: e.imports || B,
    exports: e.exports || B,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function Wa(e, t) {
  if (e == null) return Mt;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a = je.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((n[i] = a !== je.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
    }
  return n;
}
function ns(e) {
  return sn(() => {
    let t = Zu(e);
    return Yu(t), t;
  });
}
function Ve(e) {
  return e[rp] || null;
}
function Gu(e) {
  return e[op] || null;
}
function Wu(e) {
  return e[ip] || null;
}
function jp(e) {
  let t = Ve(e) || Gu(e) || Wu(e);
  return t !== null ? t.standalone : !1;
}
function qu(e, t) {
  let n = e[sp] || null;
  if (!n && t === !0)
    throw new Error(`Type ${G(e)} does not have '\u0275mod' property.`);
  return n;
}
function Zu(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || Mt,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || B,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: Wa(e.inputs, t),
    outputs: Wa(e.outputs),
    debugInfo: null,
  };
}
function Yu(e) {
  e.features?.forEach((t) => t(e));
}
function qa(e, t) {
  if (!e) return null;
  let n = t ? Wu : Pp;
  return () => (typeof e == 'function' ? e() : e).map((r) => n(r)).filter(Lp);
}
function Vp(e) {
  let t = 0,
    n = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      e.consts,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ].join('|');
  for (let o of n) t = (Math.imul(31, t) + o.charCodeAt(0)) << 0;
  return (t += 2147483648), 'c' + t;
}
function Qu(e) {
  return { ɵproviders: e };
}
function Bp(...e) {
  return { ɵproviders: Ku(!0, e), ɵfromNgModule: !0 };
}
function Ku(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    Xi(t, (s) => {
      let a = s;
      ni(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && Ju(o, i),
    n
  );
}
function Ju(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    rs(o, (i) => {
      t(i, r);
    });
  }
}
function ni(e, t, n, r) {
  if (((e = U(e)), !e)) return !1;
  let o = null,
    i = Ba(e),
    s = !i && Ve(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (((i = Ba(u)), i)) o = u;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let u =
        typeof s.dependencies == 'function' ? s.dependencies() : s.dependencies;
      for (let c of u) ni(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        Xi(i.imports, (l) => {
          ni(l, t, n, r) && ((c ||= []), c.push(l));
        });
      } finally {
      }
      c !== void 0 && Ju(c, t);
    }
    if (!a) {
      let c = bt(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: B }, o),
        t({ provide: Vu, useValue: o, multi: !0 }, o),
        t({ provide: Kt, useValue: () => $(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      rs(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function rs(e, t) {
  for (let n of e)
    Ru(n) && (n = n.ɵproviders), Array.isArray(n) ? rs(n, t) : t(n);
}
var $p = N({ provide: String, useValue: N });
function Xu(e) {
  return e !== null && typeof e == 'object' && $p in e;
}
function Hp(e) {
  return !!(e && e.useExisting);
}
function Up(e) {
  return !!(e && e.useFactory);
}
function _t(e) {
  return typeof e == 'function';
}
function zp(e) {
  return !!e.useClass;
}
var ec = new T(''),
  sr = {},
  Gp = {},
  Lo;
function os() {
  return Lo === void 0 && (Lo = new mr()), Lo;
}
var Be = class {},
  en = class extends Be {
    get destroyed() {
      return this._destroyed;
    }
    constructor(t, n, r, o) {
      super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = o),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        oi(t, (s) => this.processProvider(s)),
        this.records.set(ju, vt(void 0, this)),
        o.has('environment') && this.records.set(Be, vt(void 0, this));
      let i = this.records.get(ec);
      i != null && typeof i.value == 'string' && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(Vu, B, C.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let t = b(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          b(t);
      }
    }
    onDestroy(t) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      this.assertNotDestroyed();
      let n = Pe(this),
        r = re(void 0),
        o;
      try {
        return t();
      } finally {
        Pe(n), re(r);
      }
    }
    get(t, n = Qt, r = C.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(Ha))) return t[Ha](this);
      r = Gr(r);
      let o,
        i = Pe(this),
        s = re(void 0);
      try {
        if (!(r & C.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = Qp(t) && Ur(t);
            c && this.injectableDefInScope(c)
              ? (u = vt(ri(t), sr))
              : (u = null),
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & C.Self ? os() : this.parent;
        return (n = r & C.Optional && n === Qt ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === 'NullInjectorError') {
          if (((a[hr] = a[hr] || []).unshift(G(t)), i)) throw a;
          return mp(a, t, 'R3InjectorError', this.source);
        } else throw a;
      } finally {
        re(s), Pe(i);
      }
    }
    resolveInjectorInitializers() {
      let t = b(null),
        n = Pe(this),
        r = re(void 0),
        o;
      try {
        let i = this.get(Kt, B, C.Self);
        for (let s of i) s();
      } finally {
        Pe(n), re(r), b(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(G(r));
      return `R3Injector[${t.join(', ')}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new M(205, !1);
    }
    processProvider(t) {
      t = U(t);
      let n = _t(t) ? t : U(t && t.provide),
        r = qp(t);
      if (!_t(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = vt(void 0, sr, !0)),
          (o.factory = () => ei(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = b(null);
      try {
        return (
          n.value === sr && ((n.value = Gp), (n.value = n.factory())),
          typeof n.value == 'object' &&
            n.value &&
            Yp(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        b(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = U(t.providedIn);
      return typeof n == 'string'
        ? n === 'any' || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function ri(e) {
  let t = Ur(e),
    n = t !== null ? t.factory : bt(e);
  if (n !== null) return n;
  if (e instanceof T) throw new M(204, !1);
  if (e instanceof Function) return Wp(e);
  throw new M(204, !1);
}
function Wp(e) {
  if (e.length > 0) throw new M(204, !1);
  let n = tp(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function qp(e) {
  if (Xu(e)) return vt(void 0, e.useValue);
  {
    let t = tc(e);
    return vt(t, sr);
  }
}
function tc(e, t, n) {
  let r;
  if (_t(e)) {
    let o = U(e);
    return bt(o) || ri(o);
  } else if (Xu(e)) r = () => U(e.useValue);
  else if (Up(e)) r = () => e.useFactory(...ei(e.deps || []));
  else if (Hp(e)) r = () => $(U(e.useExisting));
  else {
    let o = U(e && (e.useClass || e.provide));
    if (Zp(e)) r = () => new o(...ei(e.deps));
    else return bt(o) || ri(o);
  }
  return r;
}
function vt(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function Zp(e) {
  return !!e.deps;
}
function Yp(e) {
  return (
    e !== null && typeof e == 'object' && typeof e.ngOnDestroy == 'function'
  );
}
function Qp(e) {
  return typeof e == 'function' || (typeof e == 'object' && e instanceof T);
}
function oi(e, t) {
  for (let n of e)
    Array.isArray(n) ? oi(n, t) : n && Ru(n) ? oi(n.ɵproviders, t) : t(n);
}
function Kp(e, t) {
  e instanceof en && e.assertNotDestroyed();
  let n,
    r = Pe(e),
    o = re(void 0);
  try {
    return t();
  } finally {
    Pe(r), re(o);
  }
}
function nc() {
  return Fu() !== void 0 || pp() != null;
}
function rc(e) {
  if (!nc()) throw new M(-203, !1);
}
function Jp(e) {
  return typeof e == 'function';
}
var X = 0,
  v = 1,
  g = 2,
  j = 3,
  de = 4,
  J = 5,
  pe = 6,
  yr = 7,
  ie = 8,
  xt = 9,
  Ie = 10,
  R = 11,
  tn = 12,
  Za = 13,
  kt = 14,
  K = 15,
  et = 16,
  Dt = 17,
  _e = 18,
  Wr = 19,
  oc = 20,
  Le = 21,
  jo = 22,
  oe = 23,
  L = 25,
  ic = 1,
  nn = 6,
  xe = 7,
  vr = 8,
  St = 9,
  W = 10,
  Dr = (function (e) {
    return (
      (e[(e.None = 0)] = 'None'),
      (e[(e.HasTransplantedViews = 2)] = 'HasTransplantedViews'),
      e
    );
  })(Dr || {});
function fe(e) {
  return Array.isArray(e) && typeof e[ic] == 'object';
}
function Ee(e) {
  return Array.isArray(e) && e[ic] === !0;
}
function sc(e) {
  return (e.flags & 4) !== 0;
}
function un(e) {
  return e.componentOffset > -1;
}
function is(e) {
  return (e.flags & 1) === 1;
}
function $e(e) {
  return !!e.template;
}
function Ir(e) {
  return (e[g] & 512) !== 0;
}
var ii = class {
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function ac(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
function ss() {
  return uc;
}
function uc(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = eh), Xp;
}
ss.ngInherit = !0;
function Xp() {
  let e = lc(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === Mt) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function eh(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = lc(e) || th(e, { previous: Mt, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  (a[i] = new ii(c && c.currentValue, n, u === Mt)), ac(e, t, o, n);
}
var cc = '__ngSimpleChanges__';
function lc(e) {
  return e[cc] || null;
}
function th(e, t) {
  return (e[cc] = t);
}
var Ya = null;
var ve = function (e, t, n) {
    Ya?.(e, t, n);
  },
  nh = 'svg',
  rh = 'math';
function he(e) {
  for (; Array.isArray(e); ) e = e[X];
  return e;
}
function dc(e, t) {
  return he(t[e]);
}
function ee(e, t) {
  return he(t[e.index]);
}
function as(e, t) {
  return e.data[t];
}
function oh(e, t) {
  return e[t];
}
function Ue(e, t) {
  let n = t[e];
  return fe(n) ? n : n[X];
}
function ih(e) {
  return (e[g] & 4) === 4;
}
function us(e) {
  return (e[g] & 128) === 128;
}
function sh(e) {
  return Ee(e[j]);
}
function Er(e, t) {
  return t == null ? null : e[t];
}
function fc(e) {
  e[Dt] = 0;
}
function pc(e) {
  e[g] & 1024 || ((e[g] |= 1024), us(e) && qr(e));
}
function ah(e, t) {
  for (; e > 0; ) (t = t[kt]), e--;
  return t;
}
function rn(e) {
  return !!(e[g] & 9216 || e[oe]?.dirty);
}
function si(e) {
  e[Ie].changeDetectionScheduler?.notify(7),
    e[g] & 64 && (e[g] |= 1024),
    rn(e) && qr(e);
}
function qr(e) {
  e[Ie].changeDetectionScheduler?.notify(0);
  let t = tt(e);
  for (; t !== null && !(t[g] & 8192 || ((t[g] |= 8192), !us(t))); ) t = tt(t);
}
function hc(e, t) {
  if ((e[g] & 256) === 256) throw new M(911, !1);
  e[Le] === null && (e[Le] = []), e[Le].push(t);
}
function uh(e, t) {
  if (e[Le] === null) return;
  let n = e[Le].indexOf(t);
  n !== -1 && e[Le].splice(n, 1);
}
function tt(e) {
  let t = e[j];
  return Ee(t) ? t[j] : t;
}
var w = { lFrame: bc(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var gc = !1;
function ch() {
  return w.lFrame.elementDepthCount;
}
function lh() {
  w.lFrame.elementDepthCount++;
}
function dh() {
  w.lFrame.elementDepthCount--;
}
function mc() {
  return w.bindingsEnabled;
}
function Pt() {
  return w.skipHydrationRootTNode !== null;
}
function fh(e) {
  return w.skipHydrationRootTNode === e;
}
function ph(e) {
  w.skipHydrationRootTNode = e;
}
function hh() {
  w.skipHydrationRootTNode = null;
}
function _() {
  return w.lFrame.lView;
}
function V() {
  return w.lFrame.tView;
}
function B0(e) {
  return (w.lFrame.contextLView = e), e[ie];
}
function $0(e) {
  return (w.lFrame.contextLView = null), e;
}
function q() {
  let e = yc();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function yc() {
  return w.lFrame.currentTNode;
}
function gh() {
  let e = w.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function cn(e, t) {
  let n = w.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function vc() {
  return w.lFrame.isParent;
}
function Dc() {
  w.lFrame.isParent = !1;
}
function mh() {
  return w.lFrame.contextLView;
}
function Ic() {
  return gc;
}
function Qa(e) {
  gc = e;
}
function yh(e) {
  return (w.lFrame.bindingIndex = e);
}
function ln() {
  return w.lFrame.bindingIndex++;
}
function Ec(e) {
  let t = w.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function vh() {
  return w.lFrame.inI18n;
}
function Dh(e, t) {
  let n = w.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), ai(t);
}
function Ih() {
  return w.lFrame.currentDirectiveIndex;
}
function ai(e) {
  w.lFrame.currentDirectiveIndex = e;
}
function Eh(e) {
  let t = w.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function cs() {
  return w.lFrame.currentQueryIndex;
}
function Zr(e) {
  w.lFrame.currentQueryIndex = e;
}
function wh(e) {
  let t = e[v];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[J] : null;
}
function wc(e, t, n) {
  if (n & C.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & C.Host); )
      if (((o = wh(i)), o === null || ((i = i[kt]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (w.lFrame = Cc());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function ls(e) {
  let t = Cc(),
    n = e[v];
  (w.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function Cc() {
  let e = w.lFrame,
    t = e === null ? null : e.child;
  return t === null ? bc(e) : t;
}
function bc(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function Mc() {
  let e = w.lFrame;
  return (w.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var _c = Mc;
function ds() {
  let e = Mc();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function Ch(e) {
  return (w.lFrame.contextLView = ah(e, w.lFrame.contextLView))[ie];
}
function ut() {
  return w.lFrame.selectedIndex;
}
function nt(e) {
  w.lFrame.selectedIndex = e;
}
function fs() {
  let e = w.lFrame;
  return as(e.tView, e.selectedIndex);
}
function xc() {
  return w.lFrame.currentNamespace;
}
var Sc = !0;
function ps() {
  return Sc;
}
function ze(e) {
  Sc = e;
}
function bh(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = uc(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function hs(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: u,
        ngAfterViewChecked: c,
        ngOnDestroy: l,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      u && (e.viewHooks ??= []).push(-n, u),
      c &&
        ((e.viewHooks ??= []).push(n, c), (e.viewCheckHooks ??= []).push(n, c)),
      l != null && (e.destroyHooks ??= []).push(n, l);
  }
}
function ar(e, t, n) {
  Tc(e, t, 3, n);
}
function ur(e, t, n, r) {
  (e[g] & 3) === n && Tc(e, t, n, r);
}
function Vo(e, t) {
  let n = e[g];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[g] = n));
}
function Tc(e, t, n, r) {
  let o = r !== void 0 ? e[Dt] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++)
    if (typeof t[u + 1] == 'number') {
      if (((a = t[u]), r != null && a >= r)) break;
    } else
      t[u] < 0 && (e[Dt] += 65536),
        (a < i || i == -1) &&
          (Mh(e, n, t, u), (e[Dt] = (e[Dt] & 4294901760) + u + 2)),
        u++;
}
function Ka(e, t) {
  ve(4, e, t);
  let n = b(null);
  try {
    t.call(e);
  } finally {
    b(n), ve(5, e, t);
  }
}
function Mh(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[g] >> 14 < e[Dt] >> 16 &&
      (e[g] & 3) === t &&
      ((e[g] += 16384), Ka(a, i))
    : Ka(a, i);
}
var Ct = -1,
  rt = class {
    constructor(t, n, r) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r);
    }
  };
function _h(e) {
  return e instanceof rt;
}
function xh(e) {
  return (e.flags & 8) !== 0;
}
function Sh(e) {
  return (e.flags & 16) !== 0;
}
var Bo = {},
  ui = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = Gr(r);
      let o = this.injector.get(t, Bo, r);
      return o !== Bo || n === Bo ? o : this.parentInjector.get(t, n, r);
    }
  };
function Nc(e) {
  return e !== Ct;
}
function wr(e) {
  return e & 32767;
}
function Th(e) {
  return e >> 16;
}
function Cr(e, t) {
  let n = Th(e),
    r = t;
  for (; n > 0; ) (r = r[kt]), n--;
  return r;
}
var ci = !0;
function Ja(e) {
  let t = ci;
  return (ci = e), t;
}
var Nh = 256,
  Ac = Nh - 1,
  Oc = 5,
  Ah = 0,
  De = {};
function Oh(e, t, n) {
  let r;
  typeof n == 'string'
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(Yt) && (r = n[Yt]),
    r == null && (r = n[Yt] = Ah++);
  let o = r & Ac,
    i = 1 << o;
  t.data[e + (o >> Oc)] |= i;
}
function br(e, t) {
  let n = Rc(e, t);
  if (n !== -1) return n;
  let r = t[v];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    $o(r.data, e),
    $o(t, null),
    $o(r.blueprint, null));
  let o = gs(e, t),
    i = e.injectorIndex;
  if (Nc(o)) {
    let s = wr(o),
      a = Cr(o, t),
      u = a[v].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return (t[i + 8] = o), i;
}
function $o(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function Rc(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function gs(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = jc(o)), r === null)) return Ct;
    if ((n++, (o = o[kt]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return Ct;
}
function li(e, t, n) {
  Oh(e, t, n);
}
function Rh(e, t) {
  if (t === 'class') return e.classes;
  if (t === 'style') return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length,
      o = 0;
    for (; o < r; ) {
      let i = n[o];
      if ($u(i)) break;
      if (i === 0) o = o + 2;
      else if (typeof i == 'number')
        for (o++; o < r && typeof n[o] == 'string'; ) o++;
      else {
        if (i === t) return n[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function Fc(e, t, n) {
  if (n & C.Optional || e !== void 0) return e;
  Ji(t, 'NodeInjector');
}
function kc(e, t, n, r) {
  if (
    (n & C.Optional && r === void 0 && (r = null), !(n & (C.Self | C.Host)))
  ) {
    let o = e[xt],
      i = re(void 0);
    try {
      return o ? o.get(t, r, n & C.Optional) : ku(t, r, n & C.Optional);
    } finally {
      re(i);
    }
  }
  return Fc(r, t, n);
}
function Pc(e, t, n, r = C.Default, o) {
  if (e !== null) {
    if (t[g] & 2048 && !(r & C.Self)) {
      let s = Lh(e, t, n, r, De);
      if (s !== De) return s;
    }
    let i = Lc(e, t, n, r, De);
    if (i !== De) return i;
  }
  return kc(t, n, r, o);
}
function Lc(e, t, n, r, o) {
  let i = kh(n);
  if (typeof i == 'function') {
    if (!wc(t, e, r)) return r & C.Host ? Fc(o, n, r) : kc(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & C.Optional))) Ji(n);
      else return s;
    } finally {
      _c();
    }
  } else if (typeof i == 'number') {
    let s = null,
      a = Rc(e, t),
      u = Ct,
      c = r & C.Host ? t[K][J] : null;
    for (
      (a === -1 || r & C.SkipSelf) &&
      ((u = a === -1 ? gs(e, t) : t[a + 8]),
      u === Ct || !eu(r, !1)
        ? (a = -1)
        : ((s = t[v]), (a = wr(u)), (t = Cr(u, t))));
      a !== -1;

    ) {
      let l = t[v];
      if (Xa(i, a, l.data)) {
        let d = Fh(a, t, n, s, r, c);
        if (d !== De) return d;
      }
      (u = t[a + 8]),
        u !== Ct && eu(r, t[v].data[a + 8] === c) && Xa(i, a, t)
          ? ((s = l), (a = wr(u)), (t = Cr(u, t)))
          : (a = -1);
    }
  }
  return o;
}
function Fh(e, t, n, r, o, i) {
  let s = t[v],
    a = s.data[e + 8],
    u = r == null ? un(a) && ci : r != s && (a.type & 3) !== 0,
    c = o & C.Host && i === a,
    l = cr(a, s, n, u, c);
  return l !== null ? ot(t, s, l, a) : De;
}
function cr(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    u = e.directiveStart,
    c = e.directiveEnd,
    l = i >> 20,
    d = r ? a : a + l,
    p = o ? a + l : c;
  for (let f = d; f < p; f++) {
    let h = s[f];
    if ((f < u && n === h) || (f >= u && h.type === n)) return f;
  }
  if (o) {
    let f = s[u];
    if (f && $e(f) && f.type === n) return u;
  }
  return null;
}
function ot(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if (_h(o)) {
    let s = o;
    s.resolving && up(ap(i[n]));
    let a = Ja(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      c = s.injectImpl ? re(s.injectImpl) : null,
      l = wc(e, r, C.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && bh(n, i[n], t);
    } finally {
      c !== null && re(c), Ja(a), (s.resolving = !1), _c();
    }
  }
  return o;
}
function kh(e) {
  if (typeof e == 'string') return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(Yt) ? e[Yt] : void 0;
  return typeof t == 'number' ? (t >= 0 ? t & Ac : Ph) : t;
}
function Xa(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> Oc)] & r);
}
function eu(e, t) {
  return !(e & C.Self) && !(e & C.Host && t);
}
var Xe = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return Pc(this._tNode, this._lView, t, Gr(r), n);
  }
};
function Ph() {
  return new Xe(q(), _());
}
function H0(e) {
  return sn(() => {
    let t = e.prototype.constructor,
      n = t[pr] || di(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[pr] || di(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function di(e) {
  return Tu(e)
    ? () => {
        let t = di(U(e));
        return t && t();
      }
    : bt(e);
}
function Lh(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[g] & 2048 && !(s[g] & 512); ) {
    let a = Lc(i, s, n, r | C.Self, De);
    if (a !== De) return a;
    let u = i.parent;
    if (!u) {
      let c = s[oc];
      if (c) {
        let l = c.get(n, De, r);
        if (l !== De) return l;
      }
      (u = jc(s)), (s = s[kt]);
    }
    i = u;
  }
  return o;
}
function jc(e) {
  let t = e[v],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[J] : null;
}
function jh(e) {
  return Rh(q(), e);
}
function tu(e, t = null, n = null, r) {
  let o = Vc(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function Vc(e, t = null, n = null, r, o = new Set()) {
  let i = [n || B, Bp(e)];
  return (
    (r = r || (typeof e == 'object' ? void 0 : G(e))),
    new en(i, t || os(), r || null, o)
  );
}
var Je = class Je {
  static create(t, n) {
    if (Array.isArray(t)) return tu({ name: '' }, n, t, '');
    {
      let r = t.name ?? '';
      return tu({ name: r }, t.parent, t.providers, r);
    }
  }
};
(Je.THROW_IF_NOT_FOUND = Qt),
  (Je.NULL = new mr()),
  (Je.ɵprov = F({ token: Je, providedIn: 'any', factory: () => $(ju) })),
  (Je.__NG_ELEMENT_ID__ = -1);
var Se = Je;
var Vh = new T('');
Vh.__NG_ELEMENT_ID__ = (e) => {
  let t = q();
  if (t === null) throw new M(204, !1);
  if (t.type & 2) return t.value;
  if (e & C.Optional) return null;
  throw new M(204, !1);
};
var Bh = 'ngOriginalError';
function Ho(e) {
  return e[Bh];
}
var ms = (() => {
    let t = class t {};
    (t.__NG_ELEMENT_ID__ = $h), (t.__NG_ENV_ID__ = (r) => r);
    let e = t;
    return e;
  })(),
  fi = class extends ms {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return hc(this._lView, t), () => uh(this._lView, t);
    }
  };
function $h() {
  return new fi(_());
}
var Yr = (() => {
  let t = class t {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new Ut(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let r = this.taskId++;
      return this.pendingTasks.add(r), r;
    }
    remove(r) {
      this.pendingTasks.delete(r),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
  };
  t.ɵprov = F({ token: t, providedIn: 'root', factory: () => new t() });
  let e = t;
  return e;
})();
var pi = class extends ne {
    constructor(t = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = t),
        nc() &&
          ((this.destroyRef = y(ms, { optional: !0 }) ?? void 0),
          (this.pendingTasks = y(Yr, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = b(null);
      try {
        super.next(t);
      } finally {
        b(n);
      }
    }
    subscribe(t, n, r) {
      let o = t,
        i = n || (() => null),
        s = r;
      if (t && typeof t == 'object') {
        let u = t;
        (o = u.next?.bind(u)),
          (i = u.error?.bind(u)),
          (s = u.complete?.bind(u));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return t instanceof k && t.add(a), a;
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          t(n), r !== void 0 && this.pendingTasks?.remove(r);
        });
      };
    }
  },
  le = pi;
function Mr(...e) {}
function Bc(e) {
  let t, n;
  function r() {
    e = Mr;
    try {
      n !== void 0 &&
        typeof cancelAnimationFrame == 'function' &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      e(), r();
    })),
    typeof requestAnimationFrame == 'function' &&
      (n = requestAnimationFrame(() => {
        e(), r();
      })),
    () => r()
  );
}
function nu(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = Mr;
    }
  );
}
var ys = 'isAngularZone',
  _r = ys + '_ID',
  Hh = 0,
  Q = class e {
    constructor({
      enableLongStackTrace: t = !1,
      shouldCoalesceEventChangeDetection: n = !1,
      shouldCoalesceRunChangeDetection: r = !1,
    }) {
      if (
        ((this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new le(!1)),
        (this.onMicrotaskEmpty = new le(!1)),
        (this.onStable = new le(!1)),
        (this.onError = new le(!1)),
        typeof Zone > 'u')
      )
        throw new M(908, !1);
      Zone.assertZonePatched();
      let o = this;
      (o._nesting = 0),
        (o._outer = o._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
        t &&
          Zone.longStackTraceZoneSpec &&
          (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
        (o.shouldCoalesceEventChangeDetection = !r && n),
        (o.shouldCoalesceRunChangeDetection = r),
        (o.callbackScheduled = !1),
        Gh(o);
    }
    static isInAngularZone() {
      return typeof Zone < 'u' && Zone.current.get(ys) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new M(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new M(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask('NgZoneEvent: ' + o, t, Uh, Mr, Mr);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  Uh = {};
function vs(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function zh(e) {
  e.isCheckStableRunning ||
    e.callbackScheduled ||
    ((e.callbackScheduled = !0),
    Zone.root.run(() => {
      Bc(() => {
        (e.callbackScheduled = !1),
          hi(e),
          (e.isCheckStableRunning = !0),
          vs(e),
          (e.isCheckStableRunning = !1);
      });
    }),
    hi(e));
}
function Gh(e) {
  let t = () => {
      zh(e);
    },
    n = Hh++;
  e._inner = e._inner.fork({
    name: 'angular',
    properties: { [ys]: !0, [_r]: n, [_r + n]: !0 },
    onInvokeTask: (r, o, i, s, a, u) => {
      if (Wh(u)) return r.invokeTask(i, s, a, u);
      try {
        return ru(e), r.invokeTask(i, s, a, u);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === 'eventTask') ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          ou(e);
      }
    },
    onInvoke: (r, o, i, s, a, u, c) => {
      try {
        return ru(e), r.invoke(i, s, a, u, c);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !qh(u) &&
          t(),
          ou(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == 'microTask'
            ? ((e._hasPendingMicrotasks = s.microTask), hi(e), vs(e))
            : s.change == 'macroTask' &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function hi(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function ru(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function ou(e) {
  e._nesting--, vs(e);
}
var gi = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new le()),
      (this.onMicrotaskEmpty = new le()),
      (this.onStable = new le()),
      (this.onError = new le());
  }
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};
function Wh(e) {
  return $c(e, '__ignore_ng_zone__');
}
function qh(e) {
  return $c(e, '__scheduler_tick__');
}
function $c(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var Tt = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error('ERROR', t),
        n && this._console.error('ORIGINAL ERROR', n);
    }
    _findOriginalError(t) {
      let n = t && Ho(t);
      for (; n && Ho(n); ) n = Ho(n);
      return n || null;
    }
  },
  Zh = new T('', {
    providedIn: 'root',
    factory: () => {
      let e = y(Q),
        t = y(Tt);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function Yh() {
  return Lt(q(), _());
}
function Lt(e, t) {
  return new jt(ee(e, t));
}
var jt = (() => {
  let t = class t {
    constructor(r) {
      this.nativeElement = r;
    }
  };
  t.__NG_ELEMENT_ID__ = Yh;
  let e = t;
  return e;
})();
function Hc(e) {
  return e instanceof jt ? e.nativeElement : e;
}
function Qh() {
  return this._results[Symbol.iterator]();
}
var mi = class e {
    get changes() {
      return (this._changes ??= new le());
    }
    constructor(t = !1) {
      (this._emitDistinctChangesOnly = t),
        (this.dirty = !0),
        (this._onDirty = void 0),
        (this._results = []),
        (this._changesDetected = !1),
        (this._changes = void 0),
        (this.length = 0),
        (this.first = void 0),
        (this.last = void 0);
      let n = e.prototype;
      n[Symbol.iterator] || (n[Symbol.iterator] = Qh);
    }
    get(t) {
      return this._results[t];
    }
    map(t) {
      return this._results.map(t);
    }
    filter(t) {
      return this._results.filter(t);
    }
    find(t) {
      return this._results.find(t);
    }
    reduce(t, n) {
      return this._results.reduce(t, n);
    }
    forEach(t) {
      this._results.forEach(t);
    }
    some(t) {
      return this._results.some(t);
    }
    toArray() {
      return this._results.slice();
    }
    toString() {
      return this._results.toString();
    }
    reset(t, n) {
      this.dirty = !1;
      let r = Dp(t);
      (this._changesDetected = !vp(this._results, r, n)) &&
        ((this._results = r),
        (this.length = r.length),
        (this.last = r[this.length - 1]),
        (this.first = r[0]));
    }
    notifyOnChanges() {
      this._changes !== void 0 &&
        (this._changesDetected || !this._emitDistinctChangesOnly) &&
        this._changes.emit(this);
    }
    onDirty(t) {
      this._onDirty = t;
    }
    setDirty() {
      (this.dirty = !0), this._onDirty?.();
    }
    destroy() {
      this._changes !== void 0 &&
        (this._changes.complete(), this._changes.unsubscribe());
    }
  },
  Kh = 'ngSkipHydration',
  Jh = 'ngskiphydration';
function Uc(e) {
  let t = e.mergedAttrs;
  if (t === null) return !1;
  for (let n = 0; n < t.length; n += 2) {
    let r = t[n];
    if (typeof r == 'number') return !1;
    if (typeof r == 'string' && r.toLowerCase() === Jh) return !0;
  }
  return !1;
}
function zc(e) {
  return e.hasAttribute(Kh);
}
function xr(e) {
  return (e.flags & 128) === 128;
}
function Xh(e) {
  if (xr(e)) return !0;
  let t = e.parent;
  for (; t; ) {
    if (xr(e) || Uc(t)) return !0;
    t = t.parent;
  }
  return !1;
}
var Gc = new Map(),
  eg = 0;
function tg() {
  return eg++;
}
function ng(e) {
  Gc.set(e[Wr], e);
}
function rg(e) {
  Gc.delete(e[Wr]);
}
var iu = '__ngContext__';
function it(e, t) {
  fe(t) ? ((e[iu] = t[Wr]), ng(t)) : (e[iu] = t);
}
function Wc(e) {
  return Zc(e[tn]);
}
function qc(e) {
  return Zc(e[de]);
}
function Zc(e) {
  for (; e !== null && !Ee(e); ) e = e[de];
  return e;
}
var yi;
function U0(e) {
  yi = e;
}
function Qr() {
  if (yi !== void 0) return yi;
  if (typeof document < 'u') return document;
  throw new M(210, !1);
}
var og = new T('', { providedIn: 'root', factory: () => ig }),
  ig = 'ng',
  sg = new T(''),
  Kr = new T('', { providedIn: 'platform', factory: () => 'unknown' });
var z0 = new T(''),
  G0 = new T('', {
    providedIn: 'root',
    factory: () =>
      Qr().body?.querySelector('[ngCspNonce]')?.getAttribute('ngCspNonce') ||
      null,
  });
function ag() {
  let e = new Ds();
  return y(Kr) === 'browser' && (e.store = ug(Qr(), y(og))), e;
}
var Ds = (() => {
  let t = class t {
    constructor() {
      (this.store = {}), (this.onSerializeCallbacks = {});
    }
    get(r, o) {
      return this.store[r] !== void 0 ? this.store[r] : o;
    }
    set(r, o) {
      this.store[r] = o;
    }
    remove(r) {
      delete this.store[r];
    }
    hasKey(r) {
      return this.store.hasOwnProperty(r);
    }
    get isEmpty() {
      return Object.keys(this.store).length === 0;
    }
    onSerialize(r, o) {
      this.onSerializeCallbacks[r] = o;
    }
    toJson() {
      for (let r in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(r))
          try {
            this.store[r] = this.onSerializeCallbacks[r]();
          } catch (o) {
            console.warn('Exception in onSerialize callback: ', o);
          }
      return JSON.stringify(this.store).replace(/</g, '\\u003C');
    }
  };
  t.ɵprov = F({ token: t, providedIn: 'root', factory: ag });
  let e = t;
  return e;
})();
function ug(e, t) {
  let n = e.getElementById(t + '-state');
  if (n?.textContent)
    try {
      return JSON.parse(n.textContent);
    } catch (r) {
      console.warn('Exception while restoring TransferState for app ' + t, r);
    }
  return {};
}
var Yc = 'h',
  Qc = 'b',
  vi = (function (e) {
    return (e.FirstChild = 'f'), (e.NextSibling = 'n'), e;
  })(vi || {}),
  cg = 'e',
  lg = 't',
  Is = 'c',
  Kc = 'x',
  Sr = 'r',
  dg = 'i',
  fg = 'n',
  Jc = 'd';
var pg = '__nghData__',
  Xc = pg,
  Uo = 'ngh',
  hg = 'nghm',
  el = () => null;
function gg(e, t, n = !1) {
  let r = e.getAttribute(Uo);
  if (r == null) return null;
  let [o, i] = r.split('|');
  if (((r = n ? i : o), !r)) return null;
  let s = i ? `|${i}` : '',
    a = n ? o : s,
    u = {};
  if (r !== '') {
    let l = t.get(Ds, null, { optional: !0 });
    l !== null && (u = l.get(Xc, [])[Number(r)]);
  }
  let c = { data: u, firstChild: e.firstChild ?? null };
  return (
    n && ((c.firstChild = e), Jr(c, 0, e.nextSibling)),
    a ? e.setAttribute(Uo, a) : e.removeAttribute(Uo),
    c
  );
}
function mg() {
  el = gg;
}
function Es(e, t, n = !1) {
  return el(e, t, n);
}
function yg(e) {
  let t = e._lView;
  return t[v].type === 2 ? null : (Ir(t) && (t = t[L]), t);
}
function vg(e) {
  return e.textContent?.replace(/\s/gm, '');
}
function Dg(e) {
  let t = Qr(),
    n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, {
      acceptNode(i) {
        let s = vg(i);
        return s === 'ngetn' || s === 'ngtns'
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    }),
    r,
    o = [];
  for (; (r = n.nextNode()); ) o.push(r);
  for (let i of o)
    i.textContent === 'ngetn'
      ? i.replaceWith(t.createTextNode(''))
      : i.remove();
}
function Jr(e, t, n) {
  (e.segmentHeads ??= {}), (e.segmentHeads[t] = n);
}
function Di(e, t) {
  return e.segmentHeads?.[t] ?? null;
}
function Ig(e, t) {
  let n = e.data,
    r = n[cg]?.[t] ?? null;
  return r === null && n[Is]?.[t] && (r = ws(e, t)), r;
}
function tl(e, t) {
  return e.data[Is]?.[t] ?? null;
}
function ws(e, t) {
  let n = tl(e, t) ?? [],
    r = 0;
  for (let o of n) r += o[Sr] * (o[Kc] ?? 1);
  return r;
}
function Eg(e) {
  if (typeof e.disconnectedNodes > 'u') {
    let t = e.data[Jc];
    e.disconnectedNodes = t ? new Set(t) : null;
  }
  return e.disconnectedNodes;
}
function dn(e, t) {
  if (typeof e.disconnectedNodes > 'u') {
    let n = e.data[Jc];
    e.disconnectedNodes = n ? new Set(n) : null;
  }
  return !!Eg(e)?.has(t);
}
var Jn = new T(''),
  nl = !1,
  rl = new T('', { providedIn: 'root', factory: () => nl });
var Xn;
function wg() {
  if (Xn === void 0 && ((Xn = null), fr.trustedTypes))
    try {
      Xn = fr.trustedTypes.createPolicy('angular', {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return Xn;
}
function Xr(e) {
  return wg()?.createHTML(e) || e;
}
var er;
function Cg() {
  if (er === void 0 && ((er = null), fr.trustedTypes))
    try {
      er = fr.trustedTypes.createPolicy('angular#unsafe-bypass', {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return er;
}
function su(e) {
  return Cg()?.createScriptURL(e) || e;
}
var Te = class {
    constructor(t) {
      this.changingThisBreaksApplicationSecurity = t;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Mu})`;
    }
  },
  Ii = class extends Te {
    getTypeName() {
      return 'HTML';
    }
  },
  Ei = class extends Te {
    getTypeName() {
      return 'Style';
    }
  },
  wi = class extends Te {
    getTypeName() {
      return 'Script';
    }
  },
  Ci = class extends Te {
    getTypeName() {
      return 'URL';
    }
  },
  bi = class extends Te {
    getTypeName() {
      return 'ResourceURL';
    }
  };
function fn(e) {
  return e instanceof Te ? e.changingThisBreaksApplicationSecurity : e;
}
function ol(e, t) {
  let n = bg(e);
  if (n != null && n !== t) {
    if (n === 'ResourceURL' && t === 'URL') return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Mu})`);
  }
  return n === t;
}
function bg(e) {
  return (e instanceof Te && e.getTypeName()) || null;
}
function W0(e) {
  return new Ii(e);
}
function q0(e) {
  return new Ei(e);
}
function Z0(e) {
  return new wi(e);
}
function Y0(e) {
  return new Ci(e);
}
function Q0(e) {
  return new bi(e);
}
function Mg(e) {
  let t = new _i(e);
  return _g() ? new Mi(t) : t;
}
var Mi = class {
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = '<body><remove></remove>' + t;
      try {
        let n = new window.DOMParser().parseFromString(Xr(t), 'text/html').body;
        return n === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (n.firstChild?.remove(), n);
      } catch {
        return null;
      }
    }
  },
  _i = class {
    constructor(t) {
      (this.defaultDoc = t),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            'sanitization-inert',
          ));
    }
    getInertBodyElement(t) {
      let n = this.inertDocument.createElement('template');
      return (n.innerHTML = Xr(t)), n;
    }
  };
function _g() {
  try {
    return !!new window.DOMParser().parseFromString(Xr(''), 'text/html');
  } catch {
    return !1;
  }
}
var xg = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function il(e) {
  return (e = String(e)), e.match(xg) ? e : 'unsafe:' + e;
}
function Ne(e) {
  let t = {};
  for (let n of e.split(',')) t[n] = !0;
  return t;
}
function pn(...e) {
  let t = {};
  for (let n of e) for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}
var sl = Ne('area,br,col,hr,img,wbr'),
  al = Ne('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
  ul = Ne('rp,rt'),
  Sg = pn(ul, al),
  Tg = pn(
    al,
    Ne(
      'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul',
    ),
  ),
  Ng = pn(
    ul,
    Ne(
      'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video',
    ),
  ),
  au = pn(sl, Tg, Ng, Sg),
  cl = Ne('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
  Ag = Ne(
    'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width',
  ),
  Og = Ne(
    'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext',
  ),
  Rg = pn(cl, Ag, Og),
  Fg = Ne('script,style,template'),
  xi = class {
    constructor() {
      (this.sanitizedSomething = !1), (this.buf = []);
    }
    sanitizeChildren(t) {
      let n = t.firstChild,
        r = !0,
        o = [];
      for (; n; ) {
        if (
          (n.nodeType === Node.ELEMENT_NODE
            ? (r = this.startElement(n))
            : n.nodeType === Node.TEXT_NODE
              ? this.chars(n.nodeValue)
              : (this.sanitizedSomething = !0),
          r && n.firstChild)
        ) {
          o.push(n), (n = Lg(n));
          continue;
        }
        for (; n; ) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = Pg(n);
          if (i) {
            n = i;
            break;
          }
          n = o.pop();
        }
      }
      return this.buf.join('');
    }
    startElement(t) {
      let n = uu(t).toLowerCase();
      if (!au.hasOwnProperty(n))
        return (this.sanitizedSomething = !0), !Fg.hasOwnProperty(n);
      this.buf.push('<'), this.buf.push(n);
      let r = t.attributes;
      for (let o = 0; o < r.length; o++) {
        let i = r.item(o),
          s = i.name,
          a = s.toLowerCase();
        if (!Rg.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let u = i.value;
        cl[a] && (u = il(u)), this.buf.push(' ', s, '="', cu(u), '"');
      }
      return this.buf.push('>'), !0;
    }
    endElement(t) {
      let n = uu(t).toLowerCase();
      au.hasOwnProperty(n) &&
        !sl.hasOwnProperty(n) &&
        (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
    }
    chars(t) {
      this.buf.push(cu(t));
    }
  };
function kg(e, t) {
  return (
    (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function Pg(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw ll(t);
  return t;
}
function Lg(e) {
  let t = e.firstChild;
  if (t && kg(e, t)) throw ll(t);
  return t;
}
function uu(e) {
  let t = e.nodeName;
  return typeof t == 'string' ? t : 'FORM';
}
function ll(e) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`,
  );
}
var jg = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  Vg = /([^\#-~ |!])/g;
function cu(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(jg, function (t) {
      let n = t.charCodeAt(0),
        r = t.charCodeAt(1);
      return '&#' + ((n - 55296) * 1024 + (r - 56320) + 65536) + ';';
    })
    .replace(Vg, function (t) {
      return '&#' + t.charCodeAt(0) + ';';
    })
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
var tr;
function K0(e, t) {
  let n = null;
  try {
    tr = tr || Mg(e);
    let r = t ? String(t) : '';
    n = tr.getInertBodyElement(r);
    let o = 5,
      i = r;
    do {
      if (o === 0)
        throw new Error(
          'Failed to sanitize html because the input is unstable',
        );
      o--, (r = i), (i = n.innerHTML), (n = tr.getInertBodyElement(r));
    } while (r !== i);
    let a = new xi().sanitizeChildren(lu(n) || n);
    return Xr(a);
  } finally {
    if (n) {
      let r = lu(n) || n;
      for (; r.firstChild; ) r.firstChild.remove();
    }
  }
}
function lu(e) {
  return 'content' in e && Bg(e) ? e.content : null;
}
function Bg(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === 'TEMPLATE';
}
var Cs = (function (e) {
  return (
    (e[(e.NONE = 0)] = 'NONE'),
    (e[(e.HTML = 1)] = 'HTML'),
    (e[(e.STYLE = 2)] = 'STYLE'),
    (e[(e.SCRIPT = 3)] = 'SCRIPT'),
    (e[(e.URL = 4)] = 'URL'),
    (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
    e
  );
})(Cs || {});
function $g(e) {
  let t = dl();
  return t ? t.sanitize(Cs.URL, e) || '' : ol(e, 'URL') ? fn(e) : il(zr(e));
}
function Hg(e) {
  let t = dl();
  if (t) return su(t.sanitize(Cs.RESOURCE_URL, e) || '');
  if (ol(e, 'ResourceURL')) return su(fn(e));
  throw new M(904, !1);
}
function Ug(e, t) {
  return (t === 'src' &&
    (e === 'embed' ||
      e === 'frame' ||
      e === 'iframe' ||
      e === 'media' ||
      e === 'script')) ||
    (t === 'href' && (e === 'base' || e === 'link'))
    ? Hg
    : $g;
}
function J0(e, t, n) {
  return Ug(t, n)(e);
}
function dl() {
  let e = _();
  return e && e[Ie].sanitizer;
}
var zg = /^>|^->|<!--|-->|--!>|<!-$/g,
  Gg = /(<|>)/g,
  Wg = '\u200B$1\u200B';
function qg(e) {
  return e.replace(zg, (t) => t.replace(Gg, Wg));
}
function Zg(e) {
  return e.ownerDocument.body;
}
function fl(e) {
  return e instanceof Function ? e() : e;
}
function It(e) {
  return (e ?? y(Se)).get(Kr) === 'browser';
}
var Tr = (function (e) {
    return (
      (e[(e.Important = 1)] = 'Important'),
      (e[(e.DashCase = 2)] = 'DashCase'),
      e
    );
  })(Tr || {}),
  Yg;
function bs(e, t) {
  return Yg(e, t);
}
function Et(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    Ee(r) ? (i = r) : fe(r) && ((s = !0), (r = r[X]));
    let a = he(r);
    e === 0 && n !== null
      ? o == null
        ? vl(t, n, a)
        : Ar(t, n, a, o || null, !0)
      : e === 1 && n !== null
        ? Ar(t, n, a, o || null, !0)
        : e === 2
          ? Ts(t, a, s)
          : e === 3 && t.destroyNode(a),
      i != null && um(t, e, i, n, o);
  }
}
function pl(e, t) {
  return e.createText(t);
}
function Qg(e, t, n) {
  e.setValue(t, n);
}
function hl(e, t) {
  return e.createComment(qg(t));
}
function Ms(e, t, n) {
  return e.createElement(t, n);
}
function Kg(e, t) {
  gl(e, t), (t[X] = null), (t[J] = null);
}
function Jg(e, t, n, r, o, i) {
  (r[X] = o), (r[J] = t), eo(e, r, n, 1, o, i);
}
function gl(e, t) {
  t[Ie].changeDetectionScheduler?.notify(8), eo(e, t, t[R], 2, null, null);
}
function Xg(e) {
  let t = e[tn];
  if (!t) return zo(e[v], e);
  for (; t; ) {
    let n = null;
    if (fe(t)) n = t[tn];
    else {
      let r = t[W];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[de] && t !== e; ) fe(t) && zo(t[v], t), (t = t[j]);
      t === null && (t = e), fe(t) && zo(t[v], t), (n = t && t[de]);
    }
    t = n;
  }
}
function em(e, t, n, r) {
  let o = W + r,
    i = n.length;
  r > 0 && (n[o - 1][de] = t),
    r < i - W ? ((t[de] = n[o]), Lu(n, W + r, t)) : (n.push(t), (t[de] = null)),
    (t[j] = n);
  let s = t[et];
  s !== null && n !== s && ml(s, t);
  let a = t[_e];
  a !== null && a.insertView(e), si(t), (t[g] |= 128);
}
function ml(e, t) {
  let n = e[St],
    r = t[j];
  if (fe(r)) e[g] |= Dr.HasTransplantedViews;
  else {
    let o = r[j][K];
    t[K] !== o && (e[g] |= Dr.HasTransplantedViews);
  }
  n === null ? (e[St] = [t]) : n.push(t);
}
function _s(e, t) {
  let n = e[St],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function Nr(e, t) {
  if (e.length <= W) return;
  let n = W + t,
    r = e[n];
  if (r) {
    let o = r[et];
    o !== null && o !== e && _s(o, r), t > 0 && (e[n - 1][de] = r[de]);
    let i = gr(e, W + t);
    Kg(r[v], r);
    let s = i[_e];
    s !== null && s.detachView(i[v]),
      (r[j] = null),
      (r[de] = null),
      (r[g] &= -129);
  }
  return r;
}
function xs(e, t) {
  if (!(t[g] & 256)) {
    let n = t[R];
    n.destroyNode && eo(e, t, n, 3, null, null), Xg(t);
  }
}
function zo(e, t) {
  if (t[g] & 256) return;
  let n = b(null);
  try {
    (t[g] &= -129),
      (t[g] |= 256),
      t[oe] && mo(t[oe]),
      nm(e, t),
      tm(e, t),
      t[v].type === 1 && t[R].destroy();
    let r = t[et];
    if (r !== null && Ee(t[j])) {
      r !== t[j] && _s(r, t);
      let o = t[_e];
      o !== null && o.detachView(e);
    }
    rg(t);
  } finally {
    b(n);
  }
}
function tm(e, t) {
  let n = e.cleanup,
    r = t[yr];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == 'string') {
        let s = n[i + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
      } else {
        let s = r[n[i + 1]];
        n[i].call(s);
      }
  r !== null && (t[yr] = null);
  let o = t[Le];
  if (o !== null) {
    t[Le] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function nm(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof rt)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              u = i[s + 1];
            ve(4, a, u);
            try {
              u.call(a);
            } finally {
              ve(5, a, u);
            }
          }
        else {
          ve(4, o, i);
          try {
            i.call(o);
          } finally {
            ve(5, o, i);
          }
        }
      }
    }
}
function yl(e, t, n) {
  return rm(e, t.parent, n);
}
function rm(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[X];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === Jt.None || i === Jt.Emulated) return null;
    }
    return ee(r, n);
  }
}
function Ar(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function vl(e, t, n) {
  e.appendChild(t, n);
}
function du(e, t, n, r, o) {
  r !== null ? Ar(e, t, n, r, o) : vl(e, t, n);
}
function Dl(e, t) {
  return e.parentNode(t);
}
function om(e, t) {
  return e.nextSibling(t);
}
function Il(e, t, n) {
  return sm(e, t, n);
}
function im(e, t, n) {
  return e.type & 40 ? ee(e, n) : null;
}
var sm = im,
  fu;
function Ss(e, t, n, r) {
  let o = yl(e, r, t),
    i = t[R],
    s = r.parent || t[J],
    a = Il(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let u = 0; u < n.length; u++) du(i, o, n[u], a, !1);
    else du(i, o, n, a, !1);
  fu !== void 0 && fu(i, r, t, n, o);
}
function Zt(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return ee(t, e);
    if (n & 4) return Si(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return Zt(e, r);
      {
        let o = e[t.index];
        return Ee(o) ? Si(-1, o) : he(o);
      }
    } else {
      if (n & 128) return Zt(e, t.next);
      if (n & 32) return bs(t, e)() || he(e[t.index]);
      {
        let r = El(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = tt(e[K]);
          return Zt(o, r);
        } else return Zt(e, t.next);
      }
    }
  }
  return null;
}
function El(e, t) {
  if (t !== null) {
    let r = e[K][J],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function Si(e, t) {
  let n = W + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[v].firstChild;
    if (o !== null) return Zt(r, o);
  }
  return t[xe];
}
function Ts(e, t, n) {
  e.removeChild(null, t, n);
}
function wl(e) {
  e.textContent = '';
}
function Ns(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      u = n.type;
    if (
      (s && t === 0 && (a && it(he(a), r), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (u & 8) Ns(e, t, n.child, r, o, i, !1), Et(t, e, o, a, i);
      else if (u & 32) {
        let c = bs(n, r),
          l;
        for (; (l = c()); ) Et(t, e, o, l, i);
        Et(t, e, o, a, i);
      } else u & 16 ? Cl(e, t, r, n, o, i) : Et(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function eo(e, t, n, r, o, i) {
  Ns(n, r, e.firstChild, t, o, i, !1);
}
function am(e, t, n) {
  let r = t[R],
    o = yl(e, n, t),
    i = n.parent || t[J],
    s = Il(i, n, t);
  Cl(r, 0, t, n, o, s);
}
function Cl(e, t, n, r, o, i) {
  let s = n[K],
    u = s[J].projection[r.projection];
  if (Array.isArray(u))
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      Et(t, e, o, l, i);
    }
  else {
    let c = u,
      l = s[j];
    xr(r) && (c.flags |= 128), Ns(e, t, c, l, o, i, !0);
  }
}
function um(e, t, n, r, o) {
  let i = n[xe],
    s = he(n);
  i !== s && Et(t, e, r, i, o);
  for (let a = W; a < n.length; a++) {
    let u = n[a];
    eo(u[v], u, e, t, r, i);
  }
}
function cm(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf('-') === -1 ? void 0 : Tr.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == 'string' &&
          o.endsWith('!important') &&
          ((o = o.slice(0, -10)), (i |= Tr.Important)),
        e.setStyle(n, r, o, i));
  }
}
function lm(e, t, n) {
  e.setAttribute(t, 'style', n);
}
function bl(e, t, n) {
  n === '' ? e.removeAttribute(t, 'class') : e.setAttribute(t, 'class', n);
}
function Ml(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && ti(e, t, r),
    o !== null && bl(e, t, o),
    i !== null && lm(e, t, i);
}
var Ae = {};
function X0(e = 1) {
  _l(V(), _(), ut() + e, !1);
}
function _l(e, t, n, r) {
  if (!r)
    if ((t[g] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && ar(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && ur(t, i, 0, n);
    }
  nt(n);
}
function ct(e, t = C.Default) {
  let n = _();
  if (n === null) return $(e, t);
  let r = q();
  return Pc(r, n, U(e), t);
}
function e_() {
  let e = 'invalid';
  throw new Error(e);
}
function xl(e, t, n, r, o, i) {
  let s = b(null);
  try {
    let a = null;
    o & je.SignalBased && (a = t[r][ge]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & je.HasDecoratorInputTransform &&
        (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : ac(t, a, r, i);
  } finally {
    b(s);
  }
}
function dm(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) nt(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          Dh(s, i);
          let u = t[i];
          a(2, u);
        }
      }
    } finally {
      nt(-1);
    }
}
function to(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return (
    (d[X] = o),
    (d[g] = r | 4 | 128 | 8 | 64),
    (c !== null || (e && e[g] & 2048)) && (d[g] |= 2048),
    fc(d),
    (d[j] = d[kt] = e),
    (d[ie] = n),
    (d[Ie] = s || (e && e[Ie])),
    (d[R] = a || (e && e[R])),
    (d[xt] = u || (e && e[xt]) || null),
    (d[J] = i),
    (d[Wr] = tg()),
    (d[pe] = l),
    (d[oc] = c),
    (d[K] = t.type == 2 ? e[K] : d),
    d
  );
}
function hn(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = fm(e, t, n, r, o)), vh() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = gh();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return cn(i, !0), i;
}
function fm(e, t, n, r, o) {
  let i = yc(),
    s = vc(),
    a = s ? i : i && i.parent,
    u = (e.data[t] = Dm(e, a, n, t, r, o));
  return (
    e.firstChild === null && (e.firstChild = u),
    i !== null &&
      (s
        ? i.child == null && u.parent !== null && (i.child = u)
        : i.next === null && ((i.next = u), (u.prev = i))),
    u
  );
}
function Sl(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function Tl(e, t, n, r, o) {
  let i = ut(),
    s = r & 2;
  try {
    nt(-1), s && t.length > L && _l(e, t, L, !1), ve(s ? 2 : 0, o), n(r, o);
  } finally {
    nt(i), ve(s ? 3 : 1, o);
  }
}
function Nl(e, t, n) {
  if (sc(t)) {
    let r = b(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let u = n[s];
          a.contentQueries(1, u, s);
        }
      }
    } finally {
      b(r);
    }
  }
}
function Al(e, t, n) {
  mc() && (Mm(e, t, n, ee(n, t)), (n.flags & 64) === 64 && jl(e, t, n));
}
function Ol(e, t, n = ee) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function Rl(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = As(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id,
      ))
    : t;
}
function As(e, t, n, r, o, i, s, a, u, c, l) {
  let d = L + r,
    p = d + o,
    f = pm(d, p),
    h = typeof c == 'function' ? c() : c;
  return (f[v] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: p,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == 'function' ? i() : i,
    pipeRegistry: typeof s == 'function' ? s() : s,
    firstChild: null,
    schemas: u,
    consts: h,
    incompleteFirstPass: !1,
    ssrId: l,
  });
}
function pm(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : Ae);
  return n;
}
function hm(e, t, n, r) {
  let i = r.get(rl, nl) || n === Jt.ShadowDom,
    s = e.selectRootElement(t, i);
  return gm(s), s;
}
function gm(e) {
  Fl(e);
}
var Fl = () => null;
function mm(e) {
  zc(e) ? wl(e) : Dg(e);
}
function ym() {
  Fl = mm;
}
function vm(e, t, n, r) {
  let o = $l(t);
  o.push(n), e.firstCreatePass && Hl(e).push(r, o.length - 1);
}
function Dm(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    Pt() && (a |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function pu(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a,
      u = je.None;
    Array.isArray(s) ? ((a = s[0]), (u = s[1])) : (a = s);
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? hu(r, n, c, a, u) : hu(r, n, c, a);
  }
  return r;
}
function hu(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
    o !== void 0 && i.push(o);
}
function Im(e, t, n) {
  let r = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    u = null,
    c = null;
  for (let l = r; l < o; l++) {
    let d = i[l],
      p = n ? n.get(d) : null,
      f = p ? p.inputs : null,
      h = p ? p.outputs : null;
    (u = pu(0, d.inputs, l, u, f)), (c = pu(1, d.outputs, l, c, h));
    let m = u !== null && s !== null && !ts(t) ? Pm(u, l, s) : null;
    a.push(m);
  }
  u !== null &&
    (u.hasOwnProperty('class') && (t.flags |= 8),
    u.hasOwnProperty('style') && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = u),
    (t.outputs = c);
}
function Em(e) {
  return e === 'class'
    ? 'className'
    : e === 'for'
      ? 'htmlFor'
      : e === 'formaction'
        ? 'formAction'
        : e === 'innerHtml'
          ? 'innerHTML'
          : e === 'readonly'
            ? 'readOnly'
            : e === 'tabindex'
              ? 'tabIndex'
              : e;
}
function kl(e, t, n, r, o, i, s, a) {
  let u = ee(t, n),
    c = t.inputs,
    l;
  !a && c != null && (l = c[r])
    ? (Os(e, n, l, r, o), un(t) && wm(n, t.index))
    : t.type & 3
      ? ((r = Em(r)),
        (o = s != null ? s(o, t.value || '', r) : o),
        i.setProperty(u, r, o))
      : t.type & 12;
}
function wm(e, t) {
  let n = Ue(t, e);
  n[g] & 16 || (n[g] |= 64);
}
function Pl(e, t, n, r) {
  if (mc()) {
    let o = r === null ? null : { '': -1 },
      i = xm(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && Ll(e, t, n, s, o, a),
      o && Sm(n, r, o);
  }
  n.mergedAttrs = Xt(n.mergedAttrs, n.attrs);
}
function Ll(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) li(br(n, t), e, r[c].type);
  Nm(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    u = Sl(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    (n.mergedAttrs = Xt(n.mergedAttrs, l.hostAttrs)),
      Am(e, n, t, u, l),
      Tm(u, l, o),
      l.contentQueries !== null && (n.flags |= 4),
      (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) &&
        (n.flags |= 64);
    let d = l.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
      u++;
  }
  Im(e, n, i);
}
function Cm(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    bm(s) != a && s.push(a), s.push(n, r, i);
  }
}
function bm(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == 'number' && n < 0) return n;
  }
  return 0;
}
function Mm(e, t, n, r) {
  let o = n.directiveStart,
    i = n.directiveEnd;
  un(n) && Om(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || br(n, t),
    it(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a],
      c = ot(t, e, a, n);
    if ((it(c, t), s !== null && km(t, a - o, c, u, n, s), $e(u))) {
      let l = Ue(n.index, t);
      l[ie] = ot(t, e, a, n);
    }
  }
}
function jl(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = Ih();
  try {
    nt(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a],
        c = t[a];
      ai(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          _m(u, c);
    }
  } finally {
    nt(-1), ai(s);
  }
}
function _m(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function xm(e, t) {
  let n = e.directiveRegistry,
    r = null,
    o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (Uu(t, s.selectors, !1))
        if ((r || (r = []), $e(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let u = a.length;
            Ti(e, t, u);
          } else r.unshift(s), Ti(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
    }
  return r === null ? null : [r, o];
}
function Ti(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function Sm(e, t, n) {
  if (t) {
    let r = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new M(-301, !1);
      r.push(t[o], i);
    }
  }
}
function Tm(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    $e(t) && (n[''] = e);
  }
}
function Nm(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function Am(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = bt(o.type, !0)),
    s = new rt(i, $e(o), ct);
  (e.blueprint[r] = s), (n[r] = s), Cm(e, t, r, Sl(e, n, o.hostVars, Ae), o);
}
function Om(e, t, n) {
  let r = ee(t, e),
    o = Rl(n),
    i = e[Ie].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = no(
    e,
    to(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null),
  );
  e[t.index] = a;
}
function Rm(e, t, n, r, o, i) {
  let s = ee(e, t);
  Fm(t[R], s, i, e.value, n, r, o);
}
function Fm(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? zr(i) : s(i, r || '', o);
    e.setAttribute(t, o, a, n);
  }
}
function km(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let u = s[a++],
        c = s[a++],
        l = s[a++],
        d = s[a++];
      xl(r, n, u, c, l, d);
    }
}
function Pm(e, t, n) {
  let r = null,
    o = 0;
  for (; o < n.length; ) {
    let i = n[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == 'number') break;
    if (e.hasOwnProperty(i)) {
      r === null && (r = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3)
        if (s[a] === t) {
          r.push(i, s[a + 1], s[a + 2], n[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return r;
}
function Vl(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function Bl(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = b(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          Zr(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      b(r);
    }
  }
}
function no(e, t) {
  return e[tn] ? (e[Za][de] = t) : (e[tn] = t), (e[Za] = t), t;
}
function Ni(e, t, n) {
  Zr(0);
  let r = b(null);
  try {
    t(e, n);
  } finally {
    b(r);
  }
}
function $l(e) {
  return (e[yr] ??= []);
}
function Hl(e) {
  return (e.cleanup ??= []);
}
function Ul(e, t) {
  let n = e[xt],
    r = n ? n.get(Tt, null) : null;
  r && r.handleError(t);
}
function Os(e, t, n, r, o) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      u = n[i++],
      c = t[s],
      l = e.data[s];
    xl(l, c, r, a, u, o);
  }
}
function Lm(e, t, n) {
  let r = dc(t, e);
  Qg(e[R], r, n);
}
function jm(e, t) {
  let n = Ue(t, e),
    r = n[v];
  Vm(r, n);
  let o = n[X];
  o !== null && n[pe] === null && (n[pe] = Es(o, n[xt])), Rs(r, n, n[ie]);
}
function Vm(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function Rs(e, t, n) {
  ls(t);
  try {
    let r = e.viewQuery;
    r !== null && Ni(1, r, n);
    let o = e.template;
    o !== null && Tl(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[_e]?.finishViewCreation(e),
      e.staticContentQueries && Bl(e, t),
      e.staticViewQueries && Ni(2, e.viewQuery, n);
    let i = e.components;
    i !== null && Bm(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[g] &= -5), ds();
  }
}
function Bm(e, t) {
  for (let n = 0; n < t.length; n++) jm(e, t[n]);
}
function Fs(e, t, n, r) {
  let o = b(null);
  try {
    let i = t.tView,
      a = e[g] & 4096 ? 4096 : 16,
      u = to(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null,
      ),
      c = e[t.index];
    u[et] = c;
    let l = e[_e];
    return l !== null && (u[_e] = l.createEmbeddedView(i)), Rs(i, u, n), u;
  } finally {
    b(o);
  }
}
function $m(e, t) {
  let n = W + t;
  if (n < e.length) return e[n];
}
function Or(e, t) {
  return !t || t.firstChild === null || xr(e);
}
function ks(e, t, n, r = !0) {
  let o = t[v];
  if ((em(o, t, e, n), r)) {
    let s = Si(n, e),
      a = t[R],
      u = Dl(a, e[xe]);
    u !== null && Jg(o, e[J], a, t, u, s);
  }
  let i = t[pe];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function Hm(e, t) {
  let n = Nr(e, t);
  return n !== void 0 && xs(n[v], n), n;
}
function Rr(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(he(i)), Ee(i) && Um(i, r);
    let s = n.type;
    if (s & 8) Rr(e, t, n.child, r);
    else if (s & 32) {
      let a = bs(n, t),
        u;
      for (; (u = a()); ) r.push(u);
    } else if (s & 16) {
      let a = El(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = tt(t[K]);
        Rr(u[v], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function Um(e, t) {
  for (let n = W; n < e.length; n++) {
    let r = e[n],
      o = r[v].firstChild;
    o !== null && Rr(r[v], r, o, t);
  }
  e[xe] !== e[X] && t.push(e[xe]);
}
var zl = [];
function zm(e) {
  return e[oe] ?? Gm(e);
}
function Gm(e) {
  let t = zl.pop() ?? Object.create(qm);
  return (t.lView = e), t;
}
function Wm(e) {
  e.lView[oe] !== e && ((e.lView = null), zl.push(e));
}
var qm = ke(Fe({}, $t), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    qr(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[oe] = this;
  },
});
function Zm(e) {
  let t = e[oe] ?? Object.create(Ym);
  return (t.lView = e), t;
}
var Ym = ke(Fe({}, $t), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = tt(e.lView);
    for (; t && !Gl(t[v]); ) t = tt(t);
    t && pc(t);
  },
  consumerOnSignalRead() {
    this.lView[oe] = this;
  },
});
function Gl(e) {
  return e.type !== 2;
}
var Qm = 100;
function Wl(e, t = !0, n = 0) {
  let r = e[Ie],
    o = r.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    Km(e, n);
  } catch (s) {
    throw (t && Ul(e, s), s);
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}
function Km(e, t) {
  let n = Ic();
  try {
    Qa(!0), Ai(e, t);
    let r = 0;
    for (; rn(e); ) {
      if (r === Qm) throw new M(103, !1);
      r++, Ai(e, 1);
    }
  } finally {
    Qa(n);
  }
}
function Jm(e, t, n, r) {
  let o = t[g];
  if ((o & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && t[Ie].inlineEffectRunner?.flush(), ls(t);
  let a = !0,
    u = null,
    c = null;
  i ||
    (Gl(e)
      ? ((c = zm(t)), (u = En(c)))
      : ta() === null
        ? ((a = !1), (c = Zm(t)), (u = En(c)))
        : t[oe] && (mo(t[oe]), (t[oe] = null)));
  try {
    fc(t), yh(e.bindingStartIndex), n !== null && Tl(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i)
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && ar(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && ur(t, f, 0, null), Vo(t, 0);
      }
    if ((s || Xm(t), ql(t, 0), e.contentQueries !== null && Bl(e, t), !i))
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && ar(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && ur(t, f, 1), Vo(t, 1);
      }
    dm(e, t);
    let d = e.components;
    d !== null && Yl(t, d, 0);
    let p = e.viewQuery;
    if ((p !== null && Ni(2, p, r), !i))
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && ar(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && ur(t, f, 2), Vo(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[jo])) {
      for (let f of t[jo]) f();
      t[jo] = null;
    }
    i || (t[g] &= -73);
  } catch (l) {
    throw (i || qr(t), l);
  } finally {
    c !== null && (ho(c, u), a && Wm(c)), ds();
  }
}
function ql(e, t) {
  for (let n = Wc(e); n !== null; n = qc(n))
    for (let r = W; r < n.length; r++) {
      let o = n[r];
      Zl(o, t);
    }
}
function Xm(e) {
  for (let t = Wc(e); t !== null; t = qc(t)) {
    if (!(t[g] & Dr.HasTransplantedViews)) continue;
    let n = t[St];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      pc(o);
    }
  }
}
function ey(e, t, n) {
  let r = Ue(t, e);
  Zl(r, n);
}
function Zl(e, t) {
  us(e) && Ai(e, t);
}
function Ai(e, t) {
  let r = e[v],
    o = e[g],
    i = e[oe],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && go(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[g] &= -9217),
    s)
  )
    Jm(r, e, r.template, e[ie]);
  else if (o & 8192) {
    ql(e, 1);
    let a = r.components;
    a !== null && Yl(e, a, 1);
  }
}
function Yl(e, t, n) {
  for (let r = 0; r < t.length; r++) ey(e, t[r], n);
}
function Ps(e, t) {
  let n = Ic() ? 64 : 1088;
  for (e[Ie].changeDetectionScheduler?.notify(t); e; ) {
    e[g] |= n;
    let r = tt(e);
    if (Ir(e) && !r) return e;
    e = r;
  }
  return null;
}
var st = class {
    get rootNodes() {
      let t = this._lView,
        n = t[v];
      return Rr(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[ie];
    }
    set context(t) {
      this._lView[ie] = t;
    }
    get destroyed() {
      return (this._lView[g] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[j];
        if (Ee(t)) {
          let n = t[vr],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (Nr(t, r), gr(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      xs(this._lView[v], this._lView);
    }
    onDestroy(t) {
      hc(this._lView, t);
    }
    markForCheck() {
      Ps(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[g] &= -129;
    }
    reattach() {
      si(this._lView), (this._lView[g] |= 128);
    }
    detectChanges() {
      (this._lView[g] |= 1024), Wl(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new M(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = Ir(this._lView),
        n = this._lView[et];
      n !== null && !t && _s(n, this._lView), gl(this._lView[v], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new M(902, !1);
      this._appRef = t;
      let n = Ir(this._lView),
        r = this._lView[et];
      r !== null && !n && ml(r, this._lView), si(this._lView);
    }
  },
  Nt = (() => {
    let t = class t {};
    t.__NG_ELEMENT_ID__ = ry;
    let e = t;
    return e;
  })(),
  ty = Nt,
  ny = class extends ty {
    constructor(t, n, r) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = r);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let o = Fs(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new st(o);
    }
  };
function ry() {
  return ro(q(), _());
}
function ro(e, t) {
  return e.type & 4 ? new ny(t, e, Lt(e, t)) : null;
}
var oy = new RegExp(`^(\\d+)*(${Qc}|${Yc})*(.*)`);
function iy(e) {
  let t = e.match(oy),
    [n, r, o, i] = t,
    s = r ? parseInt(r, 10) : o,
    a = [];
  for (let [u, c, l] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(l, 10) || 1;
    a.push(c, d);
  }
  return [s, ...a];
}
function sy(e) {
  return !e.prev && e.parent?.type === 8;
}
function Go(e) {
  return e.index - L;
}
function ay(e, t) {
  let n = e.i18nNodes;
  if (n) return n.get(t);
}
function oo(e, t, n, r) {
  let o = Go(r),
    i = ay(e, o);
  if (i === void 0) {
    let s = e.data[fg];
    if (s?.[o]) i = cy(s[o], n);
    else if (t.firstChild === r) i = e.firstChild;
    else {
      let a = r.prev === null,
        u = r.prev ?? r.parent;
      if (sy(r)) {
        let c = Go(r.parent);
        i = Di(e, c);
      } else {
        let c = ee(u, n);
        if (a) i = c.firstChild;
        else {
          let l = Go(u),
            d = Di(e, l);
          if (u.type === 2 && d) {
            let f = ws(e, l) + 1;
            i = io(f, d);
          } else i = c.nextSibling;
        }
      }
    }
  }
  return i;
}
function io(e, t) {
  let n = t;
  for (let r = 0; r < e; r++) n = n.nextSibling;
  return n;
}
function uy(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r += 2) {
    let o = t[r],
      i = t[r + 1];
    for (let s = 0; s < i; s++)
      switch (o) {
        case vi.FirstChild:
          n = n.firstChild;
          break;
        case vi.NextSibling:
          n = n.nextSibling;
          break;
      }
  }
  return n;
}
function cy(e, t) {
  let [n, ...r] = iy(e),
    o;
  if (n === Yc) o = t[K][X];
  else if (n === Qc) o = Zg(t[K][X]);
  else {
    let i = Number(n);
    o = he(t[i + L]);
  }
  return uy(o, r);
}
var ly = !1;
function dy(e) {
  ly = e;
}
function fy(e) {
  let t = e[pe];
  if (t) {
    let { i18nNodes: n, dehydratedIcuData: r } = t;
    if (n && r) {
      let o = e[R];
      for (let i of r.values()) py(o, n, i);
    }
    (t.i18nNodes = void 0), (t.dehydratedIcuData = void 0);
  }
}
function py(e, t, n) {
  for (let r of n.node.cases[n.case]) {
    let o = t.get(r.index - L);
    o && Ts(e, o, !1);
  }
}
function Ql(e) {
  let t = e[nn] ?? [],
    r = e[j][R];
  for (let o of t) hy(o, r);
  e[nn] = B;
}
function hy(e, t) {
  let n = 0,
    r = e.firstChild;
  if (r) {
    let o = e.data[Sr];
    for (; n < o; ) {
      let i = r.nextSibling;
      Ts(t, r, !1), (r = i), n++;
    }
  }
}
function Kl(e) {
  Ql(e);
  let t = e[X];
  fe(t) && Fr(t);
  for (let n = W; n < e.length; n++) Fr(e[n]);
}
function Fr(e) {
  fy(e);
  let t = e[v];
  for (let n = L; n < t.bindingStartIndex; n++)
    if (Ee(e[n])) {
      let r = e[n];
      Kl(r);
    } else fe(e[n]) && Fr(e[n]);
}
function gy(e) {
  let t = e._views;
  for (let n of t) {
    let r = yg(n);
    r !== null && r[X] !== null && (fe(r) ? Fr(r) : Kl(r));
  }
}
function my(e, t) {
  let n = [];
  for (let r of t)
    for (let o = 0; o < (r[Kc] ?? 1); o++) {
      let i = { data: r, firstChild: null };
      r[Sr] > 0 && ((i.firstChild = e), (e = io(r[Sr], e))), n.push(i);
    }
  return [e, n];
}
var Jl = () => null;
function yy(e, t) {
  let n = e[nn];
  return !t || n === null || n.length === 0
    ? null
    : n[0].data[dg] === t
      ? n.shift()
      : (Ql(e), null);
}
function vy() {
  Jl = yy;
}
function kr(e, t) {
  return Jl(e, t);
}
var At = class {},
  Ls = new T('', { providedIn: 'root', factory: () => !1 });
var Xl = new T(''),
  Oi = class {},
  Pr = class {};
function Dy(e) {
  let t = Error(`No component factory found for ${G(e)}.`);
  return (t[Iy] = e), t;
}
var Iy = 'ngComponent';
var Ri = class {
    resolveComponentFactory(t) {
      throw Dy(t);
    }
  },
  zs = class zs {};
zs.NULL = new Ri();
var Ot = zs,
  Lr = class {},
  ed = (() => {
    let t = class t {
      constructor() {
        this.destroyNode = null;
      }
    };
    t.__NG_ELEMENT_ID__ = () => Ey();
    let e = t;
    return e;
  })();
function Ey() {
  let e = _(),
    t = q(),
    n = Ue(t.index, e);
  return (fe(n) ? n : e)[R];
}
var wy = (() => {
  let t = class t {};
  t.ɵprov = F({ token: t, providedIn: 'root', factory: () => null });
  let e = t;
  return e;
})();
var gu = new Set();
function Oe(e) {
  gu.has(e) ||
    (gu.add(e),
    performance?.mark?.('mark_feature_usage', { detail: { feature: e } }));
}
var z = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = 'EarlyRead'),
      (e[(e.Write = 1)] = 'Write'),
      (e[(e.MixedReadWrite = 2)] = 'MixedReadWrite'),
      (e[(e.Read = 3)] = 'Read'),
      e
    );
  })(z || {}),
  td = { destroy() {} };
function Cy(e, t) {
  !t && rc(Cy);
  let n = t?.injector ?? y(Se);
  return It(n)
    ? (Oe('NgAfterRender'), nd(e, n, !1, t?.phase ?? z.MixedReadWrite))
    : td;
}
function by(e, t) {
  !t && rc(by);
  let n = t?.injector ?? y(Se);
  return It(n)
    ? (Oe('NgAfterNextRender'), nd(e, n, !0, t?.phase ?? z.MixedReadWrite))
    : td;
}
function My(e, t) {
  if (e instanceof Function)
    switch (t) {
      case z.EarlyRead:
        return { earlyRead: e };
      case z.Write:
        return { write: e };
      case z.MixedReadWrite:
        return { mixedReadWrite: e };
      case z.Read:
        return { read: e };
    }
  return e;
}
function nd(e, t, n, r) {
  let o = My(e, r),
    i = t.get(js),
    s = (i.handler ??= new ki()),
    a = [],
    u = [],
    c = () => {
      for (let f of u) s.unregister(f);
      l();
    },
    l = t.get(ms).onDestroy(c),
    d = 0,
    p = (f, h) => {
      if (!h) return;
      let m = n ? (...x) => (d--, d < 1 && c(), h(...x)) : h,
        A = Kp(t, () => new Fi(f, a, m));
      s.register(A), u.push(A), d++;
    };
  return (
    p(z.EarlyRead, o.earlyRead),
    p(z.Write, o.write),
    p(z.MixedReadWrite, o.mixedReadWrite),
    p(z.Read, o.read),
    { destroy: c }
  );
}
var Fi = class {
    constructor(t, n, r) {
      (this.phase = t),
        (this.pipelinedArgs = n),
        (this.callbackFn = r),
        (this.zone = y(Q)),
        (this.errorHandler = y(Tt, { optional: !0 })),
        y(At, { optional: !0 })?.notify(6);
    }
    invoke() {
      try {
        let t = this.zone.runOutsideAngular(() =>
          this.callbackFn.apply(null, this.pipelinedArgs),
        );
        this.pipelinedArgs.splice(0, this.pipelinedArgs.length, t);
      } catch (t) {
        this.errorHandler?.handleError(t);
      }
    }
  },
  ki = class {
    constructor() {
      (this.executingCallbacks = !1),
        (this.buckets = {
          [z.EarlyRead]: new Set(),
          [z.Write]: new Set(),
          [z.MixedReadWrite]: new Set(),
          [z.Read]: new Set(),
        }),
        (this.deferredCallbacks = new Set());
    }
    register(t) {
      (this.executingCallbacks
        ? this.deferredCallbacks
        : this.buckets[t.phase]
      ).add(t);
    }
    unregister(t) {
      this.buckets[t.phase].delete(t), this.deferredCallbacks.delete(t);
    }
    execute() {
      this.executingCallbacks = !0;
      for (let t of Object.values(this.buckets)) for (let n of t) n.invoke();
      this.executingCallbacks = !1;
      for (let t of this.deferredCallbacks) this.buckets[t.phase].add(t);
      this.deferredCallbacks.clear();
    }
    destroy() {
      for (let t of Object.values(this.buckets)) t.clear();
      this.deferredCallbacks.clear();
    }
  },
  js = (() => {
    let t = class t {
      constructor() {
        (this.handler = null), (this.internalCallbacks = []);
      }
      execute() {
        this.executeInternalCallbacks(), this.handler?.execute();
      }
      executeInternalCallbacks() {
        let r = [...this.internalCallbacks];
        this.internalCallbacks.length = 0;
        for (let o of r) o();
      }
      ngOnDestroy() {
        this.handler?.destroy(),
          (this.handler = null),
          (this.internalCallbacks.length = 0);
      }
    };
    t.ɵprov = F({ token: t, providedIn: 'root', factory: () => new t() });
    let e = t;
    return e;
  })();
function Pi(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == 'number') i = a;
      else if (i == 1) o = Ko(o, a);
      else if (i == 2) {
        let u = a,
          c = t[++s];
        r = Ko(r, u + ': ' + c + ';');
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
var jr = class extends Ot {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = Ve(t);
    return new Rt(n, this.ngModule);
  }
};
function mu(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o),
      s = i ? o[0] : o,
      a = i ? o[1] : je.None;
    t
      ? n.push({
          propName: s,
          templateName: r,
          isSignal: (a & je.SignalBased) !== 0,
        })
      : n.push({ propName: s, templateName: r });
  }
  return n;
}
function _y(e) {
  let t = e.toLowerCase();
  return t === 'svg' ? nh : t === 'math' ? rh : null;
}
var Rt = class extends Pr {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        r = mu(t.inputs, !0);
      if (n !== null)
        for (let o of r)
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
      return r;
    }
    get outputs() {
      return mu(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Fp(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = b(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Be ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new ui(t, s) : t,
          u = a.get(Lr, null);
        if (u === null) throw new M(407, !1);
        let c = a.get(wy, null),
          l = a.get(js, null),
          d = a.get(At, null),
          p = {
            rendererFactory: u,
            sanitizer: c,
            inlineEffectRunner: null,
            afterRenderEventManager: l,
            changeDetectionScheduler: d,
          },
          f = u.createRenderer(null, this.componentDef),
          h = this.componentDef.selectors[0][0] || 'div',
          m = r
            ? hm(f, r, this.componentDef.encapsulation, a)
            : Ms(f, h, _y(h)),
          A = 512;
        this.componentDef.signals
          ? (A |= 4096)
          : this.componentDef.onPush || (A |= 16);
        let x = null;
        m !== null && (x = Es(m, a, !0));
        let te = As(0, null, null, 1, 0, null, null, null, null, null, null),
          Z = to(null, te, null, A, null, null, p, f, a, null, x);
        ls(Z);
        let we, dt;
        try {
          let se = this.componentDef,
            ft,
            ao = null;
          se.findHostDirectiveDefs
            ? ((ft = []),
              (ao = new Map()),
              se.findHostDirectiveDefs(se, ft, ao),
              ft.push(se))
            : (ft = [se]);
          let Ud = xy(Z, m),
            zd = Sy(Ud, m, se, ft, Z, p, f);
          (dt = as(te, L)),
            m && Ay(f, se, m, r),
            n !== void 0 && Oy(dt, this.ngContentSelectors, n),
            (we = Ny(zd, se, ft, ao, Z, [Ry])),
            Rs(te, Z, null);
        } finally {
          ds();
        }
        return new Li(this.componentType, we, Lt(dt, Z), Z, dt);
      } finally {
        b(i);
      }
    }
  },
  Li = class extends Oi {
    constructor(t, n, r, o, i) {
      super(),
        (this.location = r),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new st(o, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let r = this._tNode.inputs,
        o;
      if (r !== null && (o = r[t])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), n))
        )
          return;
        let i = this._rootLView;
        Os(i[v], i, o, t, n), this.previousInputValues.set(t, n);
        let s = Ue(this._tNode.index, i);
        Ps(s, 1);
      }
    }
    get injector() {
      return new Xe(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function xy(e, t) {
  let n = e[v],
    r = L;
  return (e[r] = t), hn(n, r, 2, '#host', null);
}
function Sy(e, t, n, r, o, i, s) {
  let a = o[v];
  Ty(r, e, t, s);
  let u = null;
  t !== null && (u = Es(t, o[xt]));
  let c = i.rendererFactory.createRenderer(t, n),
    l = 16;
  n.signals ? (l = 4096) : n.onPush && (l = 64);
  let d = to(o, Rl(n), null, l, o[e.index], e, i, c, null, null, u);
  return (
    a.firstCreatePass && Ti(a, e, r.length - 1), no(o, d), (o[e.index] = d)
  );
}
function Ty(e, t, n, r) {
  for (let o of e) t.mergedAttrs = Xt(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (Pi(t, t.mergedAttrs, !0), n !== null && Ml(r, n, t));
}
function Ny(e, t, n, r, o, i) {
  let s = q(),
    a = o[v],
    u = ee(s, o);
  Ll(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l,
      p = ot(o, a, d, s);
    it(p, o);
  }
  jl(a, o, s), u && it(u, o);
  let c = ot(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[ie] = o[ie] = c), i !== null)) for (let l of i) l(c, t);
  return Nl(a, s, o), c;
}
function Ay(e, t, n, r) {
  if (r) ti(e, n, ['ng-version', '18.2.0']);
  else {
    let { attrs: o, classes: i } = kp(t.selectors[0]);
    o && ti(e, n, o), i && i.length > 0 && bl(e, n, i.join(' '));
  }
}
function Oy(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}
function Ry() {
  let e = q();
  hs(_()[v], e);
}
var Vt = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = Fy;
  let e = t;
  return e;
})();
function Fy() {
  let e = q();
  return od(e, _());
}
var ky = Vt,
  rd = class extends ky {
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return Lt(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new Xe(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = gs(this._hostTNode, this._hostLView);
      if (Nc(t)) {
        let n = Cr(t, this._hostLView),
          r = wr(t),
          o = n[v].data[r + 8];
        return new Xe(o, n);
      } else return new Xe(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = yu(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - W;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == 'number'
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = kr(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Or(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !Jp(t),
        a;
      if (s) a = n;
      else {
        let h = n || {};
        (a = h.index),
          (r = h.injector),
          (o = h.projectableNodes),
          (i = h.environmentInjector || h.ngModuleRef);
      }
      let u = s ? t : new Rt(Ve(t)),
        c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let m = (s ? c : this.parentInjector).get(Be, null);
        m && (i = m);
      }
      let l = Ve(u.componentType ?? {}),
        d = kr(this._lContainer, l?.id ?? null),
        p = d?.firstChild ?? null,
        f = u.create(c, o, p, i);
      return this.insertImpl(f.hostView, a, Or(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (sh(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[j],
            c = new rd(u, u[J], u[j]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return ks(s, o, i, r), t.attachToViewContainerRef(), Lu(Wo(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = yu(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = Nr(this._lContainer, n);
      r && (gr(Wo(this._lContainer), n), xs(r[v], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = Nr(this._lContainer, n);
      return r && gr(Wo(this._lContainer), n) != null ? new st(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function yu(e) {
  return e[vr];
}
function Wo(e) {
  return e[vr] || (e[vr] = []);
}
function od(e, t) {
  let n,
    r = t[e.index];
  return (
    Ee(r) ? (n = r) : ((n = Vl(r, t, null, e)), (t[e.index] = n), no(t, n)),
    id(n, t, e, r),
    new rd(n, e, t)
  );
}
function Py(e, t) {
  let n = e[R],
    r = n.createComment(''),
    o = ee(t, e),
    i = Dl(n, o);
  return Ar(n, i, r, om(n, o), !1), r;
}
var id = sd,
  Vs = () => !1;
function Ly(e, t, n) {
  return Vs(e, t, n);
}
function sd(e, t, n, r) {
  if (e[xe]) return;
  let o;
  n.type & 8 ? (o = he(r)) : (o = Py(t, n)), (e[xe] = o);
}
function jy(e, t, n) {
  if (e[xe] && e[nn]) return !0;
  let r = n[pe],
    o = t.index - L;
  if (!r || Xh(t) || dn(r, o)) return !1;
  let s = Di(r, o),
    a = r.data[Is]?.[o],
    [u, c] = my(s, a);
  return (e[xe] = u), (e[nn] = c), !0;
}
function Vy(e, t, n, r) {
  Vs(e, n, t) || sd(e, t, n, r);
}
function By() {
  (id = Vy), (Vs = jy);
}
var ji = class e {
    constructor(t) {
      (this.queryList = t), (this.matches = null);
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  Vi = class e {
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        $s(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  Vr = class {
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == 'string' ? (this.predicate = Wy(t)) : (this.predicate = t);
    }
  },
  Bi = class e {
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = r), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  $i = class e {
    constructor(t, n = -1) {
      (this.metadata = t),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          this.matchTNodeWithReadOption(t, n, $y(n, i)),
            this.matchTNodeWithReadOption(t, n, cr(n, t, i, !1, !1));
        }
      else
        r === Nt
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, cr(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === jt || o === Vt || (o === Nt && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = cr(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function $y(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function Hy(e, t) {
  return e.type & 11 ? Lt(e, t) : e.type & 4 ? ro(e, t) : null;
}
function Uy(e, t, n, r) {
  return n === -1 ? Hy(t, e) : n === -2 ? zy(e, t, r) : ot(e, e[v], n, t);
}
function zy(e, t, n) {
  if (n === jt) return Lt(t, e);
  if (n === Nt) return ro(t, e);
  if (n === Vt) return od(t, e);
}
function ad(e, t, n, r) {
  let o = t[_e].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null);
      else {
        let l = i[c];
        a.push(Uy(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function Hi(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = ad(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1],
          l = t[-u];
        for (let d = W; d < l.length; d++) {
          let p = l[d];
          p[et] === p[j] && Hi(p[v], p, c, r);
        }
        if (l[St] !== null) {
          let d = l[St];
          for (let p = 0; p < d.length; p++) {
            let f = d[p];
            Hi(f[v], f, c, r);
          }
        }
      }
    }
  }
  return r;
}
function Bs(e, t) {
  return e[_e].queries[t].queryList;
}
function ud(e, t, n) {
  let r = new mi((n & 4) === 4);
  return (
    vm(e, t, r, r.destroy), (t[_e] ??= new Vi()).queries.push(new ji(r)) - 1
  );
}
function Gy(e, t, n) {
  let r = V();
  return (
    r.firstCreatePass &&
      (ld(r, new Vr(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    ud(r, _(), t)
  );
}
function cd(e, t, n, r) {
  let o = V();
  if (o.firstCreatePass) {
    let i = q();
    ld(o, new Vr(t, n, r), i.index),
      qy(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return ud(o, _(), n);
}
function Wy(e) {
  return e.split(',').map((t) => t.trim());
}
function ld(e, t, n) {
  e.queries === null && (e.queries = new Bi()), e.queries.track(new $i(t, n));
}
function qy(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function $s(e, t) {
  return e.queries.getByIndex(t);
}
function dd(e, t) {
  let n = e[v],
    r = $s(n, t);
  return r.crossesNgTemplate ? Hi(n, e, t, []) : ad(n, e, r, t);
}
function Zy(e, t) {
  Oe('NgSignals');
  let n = da(e),
    r = n[ge];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => vo(r, o)),
    (n.update = (o) => fa(r, o)),
    (n.asReadonly = Yy.bind(n)),
    n
  );
}
function Yy() {
  let e = this[ge];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[ge] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function fd(e, t) {
  let n,
    r = yo(() => {
      n._dirtyCounter();
      let o = Xy(n, e);
      if (t && o === void 0) throw new M(-951, !1);
      return o;
    });
  return (n = r[ge]), (n._dirtyCounter = Zy(0)), (n._flatValue = void 0), r;
}
function Qy() {
  return fd(!0, !1);
}
function Ky() {
  return fd(!0, !0);
}
function Jy(e, t) {
  let n = e[ge];
  (n._lView = _()),
    (n._queryIndex = t),
    (n._queryList = Bs(n._lView, t)),
    n._queryList.onDirty(() => n._dirtyCounter.update((r) => r + 1));
}
function Xy(e, t) {
  let n = e._lView,
    r = e._queryIndex;
  if (n === void 0 || r === void 0 || n[g] & 4) return t ? void 0 : B;
  let o = Bs(n, r),
    i = dd(n, r);
  return (
    o.reset(i, Hc),
    t
      ? o.first
      : o._changesDetected || e._flatValue === void 0
        ? (e._flatValue = o.toArray())
        : e._flatValue
  );
}
function vu(e, t) {
  return Qy();
}
function ev(e, t) {
  return Ky();
}
var r_ = ((vu.required = ev), vu);
function tv(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function nv(e) {
  let t = tv(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if ($e(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new M(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = nr(e.inputs)),
          (s.inputTransforms = nr(e.inputTransforms)),
          (s.declaredInputs = nr(e.declaredInputs)),
          (s.outputs = nr(e.outputs));
        let a = o.hostBindings;
        a && av(e, a);
        let u = o.viewQuery,
          c = o.contentQueries;
        if (
          (u && iv(e, u),
          c && sv(e, c),
          rv(e, o),
          Xf(e.outputs, o.outputs),
          $e(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === nv && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  ov(r);
}
function rv(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    if (
      r !== void 0 &&
      ((e.inputs[n] = r),
      (e.declaredInputs[n] = t.declaredInputs[n]),
      t.inputTransforms !== null)
    ) {
      let o = Array.isArray(r) ? r[0] : r;
      if (!t.inputTransforms.hasOwnProperty(o)) continue;
      (e.inputTransforms ??= {}), (e.inputTransforms[o] = t.inputTransforms[o]);
    }
  }
}
function ov(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = Xt(o.hostAttrs, (n = Xt(n, o.hostAttrs))));
  }
}
function nr(e) {
  return e === Mt ? {} : e === B ? [] : e;
}
function iv(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function sv(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function av(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function uv(e) {
  let t = e.inputConfig,
    n = {};
  for (let r in t)
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
var He = class {},
  Ui = class {};
var zi = class extends He {
    constructor(t, n, r, o = !0) {
      super(),
        (this.ngModuleType = t),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new jr(this));
      let i = qu(t);
      (this._bootstrapComponents = fl(i.bootstrap)),
        (this._r3Injector = Vc(
          t,
          n,
          [
            { provide: He, useValue: this },
            { provide: Ot, useValue: this.componentFactoryResolver },
            ...r,
          ],
          G(t),
          new Set(['environment']),
        )),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  Gi = class extends Ui {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new zi(this.moduleType, t, []);
    }
  };
var Br = class extends He {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new jr(this)),
      (this.instance = null);
    let n = new en(
      [
        ...t.providers,
        { provide: He, useValue: this },
        { provide: Ot, useValue: this.componentFactoryResolver },
      ],
      t.parent || os(),
      t.debugName,
      new Set(['environment']),
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function cv(e, t, n = null) {
  return new Br({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
function lt(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function gn(e) {
  return (e.flags & 32) === 32;
}
function lv(e, t, n, r, o, i, s, a, u) {
  let c = t.consts,
    l = hn(t, e, 4, s || null, a || null);
  Pl(t, n, l, Er(c, u)), hs(t, l);
  let d = (l.tView = As(
    2,
    l,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    c,
    null,
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, l), (d.queries = t.queries.embeddedTView(l))),
    l
  );
}
function pd(e, t, n, r, o, i, s, a, u, c) {
  let l = n + L,
    d = t.firstCreatePass ? lv(l, t, e, r, o, i, s, a, u) : t.data[l];
  cn(d, !1);
  let p = hd(t, e, d, n);
  ps() && Ss(t, e, p, d), it(p, e);
  let f = Vl(p, e, p, d);
  return (
    (e[l] = f),
    no(e, f),
    Ly(f, d, e),
    is(d) && Al(t, e, d),
    u != null && Ol(e, d, c),
    d
  );
}
function dv(e, t, n, r, o, i, s, a) {
  let u = _(),
    c = V(),
    l = Er(c.consts, i);
  return pd(u, c, e, t, n, r, o, l, s, a), dv;
}
var hd = gd;
function gd(e, t, n, r) {
  return ze(!0), t[R].createComment('');
}
function fv(e, t, n, r) {
  let o = t[pe],
    i = !o || Pt() || gn(n) || dn(o, r);
  if ((ze(i), i)) return gd(e, t, n, r);
  let s = o.data[lg]?.[r] ?? null;
  s !== null &&
    n.tView !== null &&
    n.tView.ssrId === null &&
    (n.tView.ssrId = s);
  let a = oo(o, e, t, n);
  Jr(o, r, a);
  let u = ws(o, r);
  return io(u, a);
}
function pv() {
  hd = fv;
}
function hv(e, t, n, r) {
  let o = _(),
    i = ln();
  if (lt(o, i, t)) {
    let s = V(),
      a = fs();
    Rm(a, o, e, t, n, r);
  }
  return hv;
}
function gv(e, t, n, r) {
  return lt(e, ln(), n) ? t + zr(n) + r : Ae;
}
function rr(e, t) {
  return (e << 17) | (t << 2);
}
function at(e) {
  return (e >> 17) & 32767;
}
function mv(e) {
  return (e & 2) == 2;
}
function yv(e, t) {
  return (e & 131071) | (t << 17);
}
function Wi(e) {
  return e | 2;
}
function Ft(e) {
  return (e & 131068) >> 2;
}
function qo(e, t) {
  return (e & -131069) | (t << 2);
}
function vv(e) {
  return (e & 1) === 1;
}
function qi(e) {
  return e | 1;
}
function Dv(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = at(s),
    u = Ft(s);
  e[r] = n;
  let c = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    (l = d[1]), (l === null || an(d, l) > 0) && (c = !0);
  } else l = n;
  if (o)
    if (u !== 0) {
      let p = at(e[a + 1]);
      (e[r + 1] = rr(p, a)),
        p !== 0 && (e[p + 1] = qo(e[p + 1], r)),
        (e[a + 1] = yv(e[a + 1], r));
    } else
      (e[r + 1] = rr(a, 0)), a !== 0 && (e[a + 1] = qo(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = rr(u, 0)),
      a === 0 ? (a = r) : (e[u + 1] = qo(e[u + 1], r)),
      (u = r);
  c && (e[r + 1] = Wi(e[r + 1])),
    Du(e, l, r, !0),
    Du(e, l, r, !1),
    Iv(t, l, e, r, i),
    (s = rr(a, u)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function Iv(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == 'string' &&
    an(i, t) >= 0 &&
    (n[r + 1] = qi(n[r + 1]));
}
function Du(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? at(o) : Ft(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let u = e[s],
      c = e[s + 1];
    Ev(u, t) && ((a = !0), (e[s + 1] = r ? qi(c) : Wi(c))),
      (s = r ? at(c) : Ft(c));
  }
  a && (e[n + 1] = r ? Wi(o) : qi(o));
}
function Ev(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == 'string'
      ? an(e, t) >= 0
      : !1;
}
var ce = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function wv(e) {
  return e.substring(ce.key, ce.keyEnd);
}
function Cv(e) {
  return bv(e), md(e, yd(e, 0, ce.textEnd));
}
function md(e, t) {
  let n = ce.textEnd;
  return n === t ? -1 : ((t = ce.keyEnd = Mv(e, (ce.key = t), n)), yd(e, t, n));
}
function bv(e) {
  (ce.key = 0),
    (ce.keyEnd = 0),
    (ce.value = 0),
    (ce.valueEnd = 0),
    (ce.textEnd = e.length);
}
function yd(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function Mv(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function _v(e, t, n) {
  let r = _(),
    o = ln();
  if (lt(r, o, t)) {
    let i = V(),
      s = fs();
    kl(i, s, r, e, t, r[R], n, !1);
  }
  return _v;
}
function Zi(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? 'class' : 'style';
  Os(e, n, i[s], s, r);
}
function xv(e, t) {
  return Tv(e, t, null, !0), xv;
}
function o_(e) {
  Nv(Pv, Sv, e, !0);
}
function Sv(e, t) {
  for (let n = Cv(t); n >= 0; n = md(t, n)) es(e, wv(t), !0);
}
function Tv(e, t, n, r) {
  let o = _(),
    i = V(),
    s = Ec(2);
  if ((i.firstUpdatePass && Dd(i, e, s, r), t !== Ae && lt(o, s, t))) {
    let a = i.data[ut()];
    Id(i, a, o, o[R], e, (o[s + 1] = jv(t, n)), r, s);
  }
}
function Nv(e, t, n, r) {
  let o = V(),
    i = Ec(2);
  o.firstUpdatePass && Dd(o, null, i, r);
  let s = _();
  if (n !== Ae && lt(s, i, n)) {
    let a = o.data[ut()];
    if (Ed(a, r) && !vd(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = Ko(u, n || '')), Zi(o, a, s, n, r);
    } else Lv(o, a, s, s[R], s[i + 1], (s[i + 1] = kv(e, t, n)), r, i);
  }
}
function vd(e, t) {
  return t >= e.expandoStartIndex;
}
function Dd(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[ut()],
      s = vd(e, n);
    Ed(i, r) && t === null && !s && (t = !1),
      (t = Av(o, i, t, r)),
      Dv(o, i, t, n, s, r);
  }
}
function Av(e, t, n, r) {
  let o = Eh(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = Zo(null, e, t, n, r)), (n = on(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = Zo(o, e, t, n, r)), i === null)) {
        let u = Ov(e, t, r);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = Zo(null, e, t, u[1], r)),
          (u = on(u, t.attrs, r)),
          Rv(e, t, r, u));
      } else i = Fv(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function Ov(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Ft(r) !== 0) return e[at(r)];
}
function Rv(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[at(o)] = r;
}
function Fv(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = on(r, s, n);
  }
  return on(r, t.attrs, n);
}
function Zo(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = on(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function on(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == 'number'
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ['', e]),
          es(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function kv(e, t, n) {
  if (n == null || n === '') return B;
  let r = [],
    o = fn(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == 'object')
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == 'string' && t(r, o);
  return r;
}
function Pv(e, t, n) {
  let r = String(t);
  r !== '' && !r.includes(' ') && es(e, r, n);
}
function Lv(e, t, n, r, o, i, s, a) {
  o === Ae && (o = B);
  let u = 0,
    c = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let p = u < o.length ? o[u + 1] : void 0,
      f = c < i.length ? i[c + 1] : void 0,
      h = null,
      m;
    l === d
      ? ((u += 2), (c += 2), p !== f && ((h = d), (m = f)))
      : d === null || (l !== null && l < d)
        ? ((u += 2), (h = l))
        : ((c += 2), (h = d), (m = f)),
      h !== null && Id(e, t, n, r, h, m, s, a),
      (l = u < o.length ? o[u] : null),
      (d = c < i.length ? i[c] : null);
  }
}
function Id(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data,
    c = u[a + 1],
    l = vv(c) ? Iu(u, t, n, o, Ft(c), s) : void 0;
  if (!$r(l)) {
    $r(i) || (mv(c) && (i = Iu(u, null, n, o, a, s)));
    let d = dc(ut(), n);
    cm(r, s, d, o, i);
  }
}
function Iu(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      p = n[o + 1];
    p === Ae && (p = d ? B : void 0);
    let f = d ? Po(p, r) : l === r ? p : void 0;
    if ((c && !$r(f) && (f = Po(u, r)), $r(f) && ((a = f), s))) return a;
    let h = e[o + 1];
    o = s ? at(h) : Ft(h);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = Po(u, r));
  }
  return a;
}
function $r(e) {
  return e !== void 0;
}
function jv(e, t) {
  return (
    e == null ||
      e === '' ||
      (typeof t == 'string'
        ? (e = e + t)
        : typeof e == 'object' && (e = G(fn(e)))),
    e
  );
}
function Ed(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function i_(e, t) {
  Oe('NgControlFlow');
  let n = _(),
    r = ln(),
    o = n[r] !== Ae ? n[r] : -1,
    i = o !== -1 ? Eu(n, L + o) : void 0,
    s = 0;
  if (lt(n, r, e)) {
    let a = b(null);
    try {
      if ((i !== void 0 && Hm(i, s), e !== -1)) {
        let u = L + e,
          c = Eu(n, u),
          l = Vv(n[v], u),
          d = kr(c, l.tView.ssrId),
          p = Fs(n, l, t, { dehydratedView: d });
        ks(c, p, s, Or(l, d));
      }
    } finally {
      b(a);
    }
  } else if (i !== void 0) {
    let a = $m(i, s);
    a !== void 0 && (a[ie] = t);
  }
}
function Eu(e, t) {
  return e[t];
}
function Vv(e, t) {
  return as(e, t);
}
function Bv(e, t, n, r, o, i) {
  let s = t.consts,
    a = Er(s, o),
    u = hn(t, e, 2, r, a);
  return (
    Pl(t, n, u, Er(s, i)),
    u.attrs !== null && Pi(u, u.attrs, !1),
    u.mergedAttrs !== null && Pi(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u
  );
}
function wd(e, t, n, r) {
  let o = _(),
    i = V(),
    s = L + e,
    a = o[R],
    u = i.firstCreatePass ? Bv(s, i, o, t, n, r) : i.data[s],
    c = bd(i, o, u, a, t, e);
  o[s] = c;
  let l = is(u);
  return (
    cn(u, !0),
    Ml(a, c, u),
    !gn(u) && ps() && Ss(i, o, c, u),
    ch() === 0 && it(c, o),
    lh(),
    l && (Al(i, o, u), Nl(i, u, o)),
    r !== null && Ol(o, u),
    wd
  );
}
function Cd() {
  let e = q();
  vc() ? Dc() : ((e = e.parent), cn(e, !1));
  let t = e;
  fh(t) && hh(), dh();
  let n = V();
  return (
    n.firstCreatePass && (hs(n, e), sc(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      xh(t) &&
      Zi(n, t, _(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      Sh(t) &&
      Zi(n, t, _(), t.stylesWithoutHost, !1),
    Cd
  );
}
function $v(e, t, n, r) {
  return wd(e, t, n, r), Cd(), $v;
}
var bd = (e, t, n, r, o, i) => (ze(!0), Ms(r, o, xc()));
function Hv(e, t, n, r, o, i) {
  let s = t[pe],
    a = !s || Pt() || gn(n) || dn(s, i);
  if ((ze(a), a)) return Ms(r, o, xc());
  let u = oo(s, e, t, n);
  return (
    tl(s, i) && Jr(s, i, u.nextSibling),
    s && (Uc(n) || zc(u)) && un(n) && (ph(n), wl(u)),
    u
  );
}
function Uv() {
  bd = Hv;
}
var zv = (e, t, n, r) => (ze(!0), hl(t[R], ''));
function Gv(e, t, n, r) {
  let o,
    i = t[pe],
    s = !i || Pt() || dn(i, r) || gn(n);
  if ((ze(s), s)) return hl(t[R], '');
  let a = oo(i, e, t, n),
    u = Ig(i, r);
  return Jr(i, r, a), (o = io(u, a)), o;
}
function Wv() {
  zv = Gv;
}
function s_() {
  return _();
}
function qv(e, t, n) {
  let r = _(),
    o = ln();
  if (lt(r, o, t)) {
    let i = V(),
      s = fs();
    kl(i, s, r, e, t, r[R], n, !0);
  }
  return qv;
}
var Hr = 'en-US';
var Zv = Hr;
function Yv(e) {
  typeof e == 'string' && (Zv = e.toLowerCase().replace(/_/g, '-'));
}
var Qv = (e, t, n) => {};
function Kv(e, t, n, r) {
  let o = _(),
    i = V(),
    s = q();
  return Xv(i, o, o[R], s, e, t, r), Kv;
}
function Jv(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[yr],
          u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == 'string' && (i += 2);
    }
  return null;
}
function Xv(e, t, n, r, o, i, s) {
  let a = is(r),
    c = e.firstCreatePass && Hl(e),
    l = t[ie],
    d = $l(t),
    p = !0;
  if (r.type & 3 || s) {
    let m = ee(r, t),
      A = s ? s(m) : m,
      x = d.length,
      te = s ? (we) => s(he(we[r.index])) : r.index,
      Z = null;
    if ((!s && a && (Z = Jv(e, t, o, r.index)), Z !== null)) {
      let we = Z.__ngLastListenerFn__ || Z;
      (we.__ngNextListenerFn__ = i), (Z.__ngLastListenerFn__ = i), (p = !1);
    } else {
      (i = Cu(r, t, l, i)), Qv(m, o, i);
      let we = n.listen(A, o, i);
      d.push(i, we), c && c.push(o, te, x, x + 1);
    }
  } else i = Cu(r, t, l, i);
  let f = r.outputs,
    h;
  if (p && f !== null && (h = f[o])) {
    let m = h.length;
    if (m)
      for (let A = 0; A < m; A += 2) {
        let x = h[A],
          te = h[A + 1],
          dt = t[x][te].subscribe(i),
          se = d.length;
        d.push(i, dt), c && c.push(o, r.index, se, -(se + 1));
      }
  }
}
function wu(e, t, n, r) {
  let o = b(null);
  try {
    return ve(6, t, n), n(r) !== !1;
  } catch (i) {
    return Ul(e, i), !1;
  } finally {
    ve(7, t, n), b(o);
  }
}
function Cu(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? Ue(e.index, t) : t;
    Ps(s, 5);
    let a = wu(t, n, r, i),
      u = o.__ngNextListenerFn__;
    for (; u; ) (a = wu(t, n, u, i) && a), (u = u.__ngNextListenerFn__);
    return a;
  };
}
function a_(e = 1) {
  return Ch(e);
}
function eD(e, t) {
  let n = null,
    r = Tp(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === '*') {
      n = o;
      continue;
    }
    if (r === null ? Uu(e, i, !0) : Op(r, i)) return o;
  }
  return n;
}
function u_(e) {
  let t = _()[K][J];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = Ip(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? eD(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function c_(e, t = 0, n, r, o, i) {
  let s = _(),
    a = V(),
    u = r ? e + 1 : null;
  u !== null && pd(s, a, u, r, o, i, null, n);
  let c = hn(a, L + e, 16, null, n || null);
  c.projection === null && (c.projection = t), Dc();
  let d = !s[pe] || Pt();
  s[K][J].projection[c.projection] === null && u !== null
    ? tD(s, a, u)
    : d && (c.flags & 32) !== 32 && am(a, s, c);
}
function tD(e, t, n) {
  let r = L + n,
    o = t.data[r],
    i = e[r],
    s = kr(i, o.tView.ssrId),
    a = Fs(e, o, void 0, { dehydratedView: s });
  ks(i, a, 0, Or(o, s));
}
function l_(e, t, n, r) {
  cd(e, t, n, r);
}
function d_(e, t, n) {
  Gy(e, t, n);
}
function f_(e) {
  let t = _(),
    n = V(),
    r = cs();
  Zr(r + 1);
  let o = $s(n, r);
  if (e.dirty && ih(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = dd(t, r);
      e.reset(i, Hc), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function p_() {
  return Bs(_(), cs());
}
function h_(e, t, n, r, o) {
  Jy(t, cd(e, n, r, o));
}
function g_(e = 1) {
  Zr(cs() + e);
}
function m_(e) {
  let t = mh();
  return oh(t, L + e);
}
function y_(e, t = '') {
  let n = _(),
    r = V(),
    o = e + L,
    i = r.firstCreatePass ? hn(r, o, 1, t, null) : r.data[o],
    s = Md(r, n, i, t, e);
  (n[o] = s), ps() && Ss(r, n, s, i), cn(i, !1);
}
var Md = (e, t, n, r, o) => (ze(!0), pl(t[R], r));
function nD(e, t, n, r, o) {
  let i = t[pe],
    s = !i || Pt() || gn(n) || dn(i, o);
  return ze(s), s ? pl(t[R], r) : oo(i, e, t, n);
}
function rD() {
  Md = nD;
}
function oD(e) {
  return _d('', e, ''), oD;
}
function _d(e, t, n) {
  let r = _(),
    o = gv(r, e, t, n);
  return o !== Ae && Lm(r, ut(), o), _d;
}
function iD(e, t, n) {
  let r = V();
  if (r.firstCreatePass) {
    let o = $e(e);
    Yi(n, r.data, r.blueprint, o, !0), Yi(t, r.data, r.blueprint, o, !1);
  }
}
function Yi(e, t, n, r, o) {
  if (((e = U(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) Yi(e[i], t, n, r, o);
  else {
    let i = V(),
      s = _(),
      a = q(),
      u = _t(e) ? e : U(e.provide),
      c = tc(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      p = a.providerIndexes >> 20;
    if (_t(e) || !e.multi) {
      let f = new rt(c, o, ct),
        h = Qo(u, t, o ? l : l + p, d);
      h === -1
        ? (li(br(a, s), i, u),
          Yo(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[h] = f), (s[h] = f));
    } else {
      let f = Qo(u, t, l + p, d),
        h = Qo(u, t, l, l + p),
        m = f >= 0 && n[f],
        A = h >= 0 && n[h];
      if ((o && !A) || (!o && !m)) {
        li(br(a, s), i, u);
        let x = uD(o ? aD : sD, n.length, o, r, c);
        !o && A && (n[h].providerFactory = x),
          Yo(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(x),
          s.push(x);
      } else {
        let x = xd(n[o ? h : f], c, !o && r);
        Yo(i, e, f > -1 ? f : h, x);
      }
      !o && r && A && n[h].componentProviders++;
    }
  }
}
function Yo(e, t, n, r) {
  let o = _t(t),
    i = zp(t);
  if (o || i) {
    let u = (i ? U(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function xd(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function Qo(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function sD(e, t, n, r) {
  return Qi(this.multi, []);
}
function aD(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = ot(n, n[v], this.providerFactory.index, r);
    (i = a.slice(0, s)), Qi(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else (i = []), Qi(o, i);
  return i;
}
function Qi(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function uD(e, t, n, r, o) {
  let i = new rt(e, n, ct);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    xd(i, o, r && !n),
    i
  );
}
function v_(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => iD(r, o ? o(e) : e, t);
  };
}
var cD = (() => {
  let t = class t {
    constructor(r) {
      (this._injector = r), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(r) {
      if (!r.standalone) return null;
      if (!this.cachedInjectors.has(r)) {
        let o = Ku(!1, r.type),
          i =
            o.length > 0
              ? cv([o], this._injector, `Standalone[${r.type.name}]`)
              : null;
        this.cachedInjectors.set(r, i);
      }
      return this.cachedInjectors.get(r);
    }
    ngOnDestroy() {
      try {
        for (let r of this.cachedInjectors.values()) r !== null && r.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
  };
  t.ɵprov = F({
    token: t,
    providedIn: 'environment',
    factory: () => new t($(Be)),
  });
  let e = t;
  return e;
})();
function D_(e) {
  Oe('NgStandalone'),
    (e.getStandaloneInjector = (t) =>
      t.get(cD).getOrCreateStandaloneInjector(e));
}
function I_(e, t) {
  return ro(e, t);
}
var E_ = (() => {
  let t = class t {
    log(r) {
      console.log(r);
    }
    warn(r) {
      console.warn(r);
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = F({ token: t, factory: t.ɵfac, providedIn: 'platform' }));
  let e = t;
  return e;
})();
var lD = new T('');
function Hs(e) {
  return !!e && typeof e.then == 'function';
}
function Sd(e) {
  return !!e && typeof e.subscribe == 'function';
}
var dD = new T(''),
  Td = (() => {
    let t = class t {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((r, o) => {
            (this.resolve = r), (this.reject = o);
          })),
          (this.appInits = y(dD, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let r = [];
        for (let i of this.appInits) {
          let s = i();
          if (Hs(s)) r.push(s);
          else if (Sd(s)) {
            let a = new Promise((u, c) => {
              s.subscribe({ complete: u, error: c });
            });
            r.push(a);
          }
        }
        let o = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(r)
          .then(() => {
            o();
          })
          .catch((i) => {
            this.reject(i);
          }),
          r.length === 0 && o(),
          (this.initialized = !0);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = F({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let e = t;
    return e;
  })(),
  Nd = new T('');
function fD() {
  la(() => {
    throw new M(600, !1);
  });
}
function pD(e) {
  return e.isBoundToModule;
}
var hD = 10;
function gD(e, t, n) {
  try {
    let r = n();
    return Hs(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
var mn = (() => {
  let t = class t {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = y(Zh)),
        (this.afterRenderEffectManager = y(js)),
        (this.zonelessEnabled = y(Ls)),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new ne()),
        (this.afterTick = new ne()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = y(Yr).hasPendingTasks.pipe(Me((r) => !r))),
        (this._injector = y(Be));
    }
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    whenStable() {
      let r;
      return new Promise((o) => {
        r = this.isStable.subscribe({
          next: (i) => {
            i && o();
          },
        });
      }).finally(() => {
        r.unsubscribe();
      });
    }
    get injector() {
      return this._injector;
    }
    bootstrap(r, o) {
      let i = r instanceof Pr;
      if (!this._injector.get(Td).done) {
        let f = !i && jp(r),
          h = !1;
        throw new M(405, h);
      }
      let a;
      i ? (a = r) : (a = this._injector.get(Ot).resolveComponentFactory(r)),
        this.componentTypes.push(a.componentType);
      let u = pD(a) ? void 0 : this._injector.get(He),
        c = o || a.selector,
        l = a.create(Se.NULL, [], c, u),
        d = l.location.nativeElement,
        p = l.injector.get(lD, null);
      return (
        p?.registerApplication(d),
        l.onDestroy(() => {
          this.detachView(l.hostView),
            lr(this.components, l),
            p?.unregisterApplication(d);
        }),
        this._loadComponent(l),
        l
      );
    }
    tick() {
      this._tick(!0);
    }
    _tick(r) {
      if (this._runningTick) throw new M(101, !1);
      let o = b(null);
      try {
        (this._runningTick = !0), this.detectChangesInAttachedViews(r);
      } catch (i) {
        this.internalErrorHandler(i);
      } finally {
        (this._runningTick = !1), b(o), this.afterTick.next();
      }
    }
    detectChangesInAttachedViews(r) {
      let o = null;
      this._injector.destroyed ||
        (o = this._injector.get(Lr, null, { optional: !0 }));
      let i = 0,
        s = this.afterRenderEffectManager;
      for (; i < hD; ) {
        let a = i === 0;
        if (r || !a) {
          this.beforeRender.next(a);
          for (let { _lView: u, notifyErrorHandler: c } of this._views)
            mD(u, c, a, this.zonelessEnabled);
        } else o?.begin?.(), o?.end?.();
        if (
          (i++,
          s.executeInternalCallbacks(),
          !this.allViews.some(({ _lView: u }) => rn(u)) &&
            (s.execute(), !this.allViews.some(({ _lView: u }) => rn(u))))
        )
          break;
      }
    }
    attachView(r) {
      let o = r;
      this._views.push(o), o.attachToAppRef(this);
    }
    detachView(r) {
      let o = r;
      lr(this._views, o), o.detachFromAppRef();
    }
    _loadComponent(r) {
      this.attachView(r.hostView), this.tick(), this.components.push(r);
      let o = this._injector.get(Nd, []);
      [...this._bootstrapListeners, ...o].forEach((i) => i(r));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((r) => r()),
            this._views.slice().forEach((r) => r.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(r) {
      return (
        this._destroyListeners.push(r), () => lr(this._destroyListeners, r)
      );
    }
    destroy() {
      if (this._destroyed) throw new M(406, !1);
      let r = this._injector;
      r.destroy && !r.destroyed && r.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = F({ token: t, factory: t.ɵfac, providedIn: 'root' }));
  let e = t;
  return e;
})();
function lr(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var or;
function Ad(e) {
  or ??= new WeakMap();
  let t = or.get(e);
  if (t) return t;
  let n = e.isStable
    .pipe(Oo((r) => r))
    .toPromise()
    .then(() => {});
  return or.set(e, n), e.onDestroy(() => or?.delete(e)), n;
}
function mD(e, t, n, r) {
  if (!n && !rn(e)) return;
  Wl(e, t, n && !r ? 0 : 1);
}
var Ki = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  w_ = (() => {
    let t = class t {
      compileModuleSync(r) {
        return new Gi(r);
      }
      compileModuleAsync(r) {
        return Promise.resolve(this.compileModuleSync(r));
      }
      compileModuleAndAllComponentsSync(r) {
        let o = this.compileModuleSync(r),
          i = qu(r),
          s = fl(i.declarations).reduce((a, u) => {
            let c = Ve(u);
            return c && a.push(new Rt(c)), a;
          }, []);
        return new Ki(o, s);
      }
      compileModuleAndAllComponentsAsync(r) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(r));
      }
      clearCache() {}
      clearCacheFor(r) {}
      getModuleId(r) {}
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = F({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let e = t;
    return e;
  })();
var yD = (() => {
    let t = class t {
      constructor() {
        (this.zone = y(Q)),
          (this.changeDetectionScheduler = y(At)),
          (this.applicationRef = y(mn));
      }
      initialize() {
        this._onMicrotaskEmptySubscription ||
          (this._onMicrotaskEmptySubscription =
            this.zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this.changeDetectionScheduler.runningTick ||
                  this.zone.run(() => {
                    this.applicationRef.tick();
                  });
              },
            }));
      }
      ngOnDestroy() {
        this._onMicrotaskEmptySubscription?.unsubscribe();
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = F({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let e = t;
    return e;
  })(),
  vD = new T('', { factory: () => !1 });
function Od({ ngZoneFactory: e, ignoreChangesOutsideZone: t }) {
  return (
    (e ??= () => new Q(Rd())),
    [
      { provide: Q, useFactory: e },
      {
        provide: Kt,
        multi: !0,
        useFactory: () => {
          let n = y(yD, { optional: !0 });
          return () => n.initialize();
        },
      },
      {
        provide: Kt,
        multi: !0,
        useFactory: () => {
          let n = y(DD);
          return () => {
            n.initialize();
          };
        },
      },
      t === !0 ? { provide: Xl, useValue: !0 } : [],
    ]
  );
}
function C_(e) {
  let t = e?.ignoreChangesOutsideZone,
    n = Od({
      ngZoneFactory: () => {
        let r = Rd(e);
        return (
          r.shouldCoalesceEventChangeDetection && Oe('NgZone_CoalesceEvent'),
          new Q(r)
        );
      },
      ignoreChangesOutsideZone: t,
    });
  return Qu([{ provide: vD, useValue: !0 }, { provide: Ls, useValue: !1 }, n]);
}
function Rd(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var DD = (() => {
  let t = class t {
    constructor() {
      (this.subscription = new k()),
        (this.initialized = !1),
        (this.zone = y(Q)),
        (this.pendingTasks = y(Yr));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let r = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (r = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              Q.assertNotInAngularZone(),
                queueMicrotask(() => {
                  r !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(r), (r = null));
                });
            }),
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            Q.assertInAngularZone(), (r ??= this.pendingTasks.add());
          }),
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = F({ token: t, factory: t.ɵfac, providedIn: 'root' }));
  let e = t;
  return e;
})();
var ID = (() => {
  let t = class t {
    constructor() {
      (this.appRef = y(mn)),
        (this.taskService = y(Yr)),
        (this.ngZone = y(Q)),
        (this.zonelessEnabled = y(Ls)),
        (this.disableScheduling = y(Xl, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < 'u' && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new k()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(_r)
          : null),
        (this.cancelScheduledCallback = null),
        (this.shouldRefreshViews = !1),
        (this.useMicrotaskScheduler = !1),
        (this.runningTick = !1),
        (this.pendingRenderTaskId = null),
        this.subscriptions.add(
          this.appRef.afterTick.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof gi || !this.zoneIsDefined));
    }
    notify(r) {
      if (!this.zonelessEnabled && r === 5) return;
      switch (r) {
        case 3:
        case 2:
        case 0:
        case 4:
        case 5:
        case 1: {
          this.shouldRefreshViews = !0;
          break;
        }
        case 8:
        case 7:
        case 6:
        case 9:
        default:
      }
      if (!this.shouldScheduleTick()) return;
      let o = this.useMicrotaskScheduler ? nu : Bc;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.zoneIsDefined
          ? Zone.root.run(() => {
              this.cancelScheduledCallback = o(() => {
                this.tick(this.shouldRefreshViews);
              });
            })
          : (this.cancelScheduledCallback = o(() => {
              this.tick(this.shouldRefreshViews);
            }));
    }
    shouldScheduleTick() {
      return !(
        this.disableScheduling ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(_r + this.angularZoneId))
      );
    }
    tick(r) {
      if (this.runningTick || this.appRef.destroyed) return;
      let o = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick(r);
          },
          void 0,
          this.schedulerTickApplyArgs,
        );
      } catch (i) {
        throw (this.taskService.remove(o), i);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        nu(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(o);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.shouldRefreshViews = !1),
        (this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let r = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(r);
      }
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = F({ token: t, factory: t.ɵfac, providedIn: 'root' }));
  let e = t;
  return e;
})();
function ED() {
  return (typeof $localize < 'u' && $localize.locale) || Hr;
}
var Us = new T('', {
  providedIn: 'root',
  factory: () => y(Us, C.Optional | C.SkipSelf) || ED(),
});
var Fd = new T('');
function ir(e) {
  return !!e.platformInjector;
}
function wD(e) {
  let t = ir(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(Q);
  return n.run(() => {
    ir(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(Tt, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      ir(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(Fd);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else
      e.moduleRef.onDestroy(() => {
        lr(e.allPlatformModules, e.moduleRef), o.unsubscribe();
      });
    return gD(r, n, () => {
      let i = t.get(Td);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(Us, Hr);
          if ((Yv(s || Hr), ir(e))) {
            let a = t.get(mn);
            return (
              e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a
            );
          } else return CD(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function CD(e, t) {
  let n = e.injector.get(mn);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new M(-403, !1);
  t.push(e);
}
var dr = null;
function bD(e = [], t) {
  return Se.create({
    name: t,
    providers: [
      { provide: ec, useValue: 'platform' },
      { provide: Fd, useValue: new Set([() => (dr = null)]) },
      ...e,
    ],
  });
}
function MD(e = []) {
  if (dr) return dr;
  let t = bD(e);
  return (dr = t), fD(), _D(t), t;
}
function _D(e) {
  e.get(sg, null)?.forEach((n) => n());
}
var kd = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = xD;
  let e = t;
  return e;
})();
function xD(e) {
  return SD(q(), _(), (e & 16) === 16);
}
function SD(e, t, n) {
  if (un(e) && !n) {
    let r = Ue(e.index, t);
    return new st(r, r);
  } else if (e.type & 175) {
    let r = t[K];
    return new st(r, t);
  }
  return null;
}
function b_(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = MD(r),
      i = [Od({}), { provide: At, useExisting: ID }, ...(n || [])],
      s = new Br({
        providers: i,
        parent: o,
        debugName: '',
        runEnvironmentInitializers: !1,
      });
    return wD({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
var M_ = new T('');
var bu = !1;
function TD() {
  bu || ((bu = !0), mg(), Uv(), rD(), Wv(), pv(), By(), vy(), ym());
}
function ND(e, t) {
  return Ad(e);
}
function __() {
  return Qu([
    {
      provide: Jn,
      useFactory: () => {
        let e = !0;
        return (
          It() && (e = !!y(Ds, { optional: !0 })?.get(Xc, null)),
          e && Oe('NgHydration'),
          e
        );
      },
    },
    {
      provide: Kt,
      useValue: () => {
        dy(!1), It() && y(Jn) && (AD(), TD());
      },
      multi: !0,
    },
    { provide: rl, useFactory: () => It() && y(Jn) },
    {
      provide: Nd,
      useFactory: () => {
        if (It() && y(Jn)) {
          let e = y(mn),
            t = y(Se);
          return () => {
            ND(e, t).then(() => {
              gy(e);
            });
          };
        }
        return () => {};
      },
      multi: !0,
    },
  ]);
}
function AD() {
  let e = Qr(),
    t;
  for (let n of e.body.childNodes)
    if (n.nodeType === Node.COMMENT_NODE && n.textContent?.trim() === hg) {
      t = n;
      break;
    }
  if (!t) throw new M(-507, !1);
}
function OD(e) {
  return typeof e == 'boolean' ? e : e != null && e !== 'false';
}
function x_(e, t) {
  Oe('NgSignals');
  let n = yo(e);
  return t?.equal && (n[ge].equal = t.equal), n;
}
function RD(e) {
  let t = b(null);
  try {
    return e();
  } finally {
    b(t);
  }
}
function S_(e) {
  let t = Ve(e);
  if (!t) return null;
  let n = new Rt(t);
  return {
    get selector() {
      return n.selector;
    },
    get type() {
      return n.componentType;
    },
    get inputs() {
      return n.inputs;
    },
    get outputs() {
      return n.outputs;
    },
    get ngContentSelectors() {
      return n.ngContentSelectors;
    },
    get isStandalone() {
      return t.standalone;
    },
    get isSignal() {
      return t.signals;
    },
  };
}
var $d = null;
function Gs() {
  return $d;
}
function nx(e) {
  $d ??= e;
}
var Pd = class {};
var Ys = new T(''),
  Qs = (() => {
    let t = class t {
      historyGo(r) {
        throw new Error('');
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = F({ token: t, factory: () => y(kD), providedIn: 'platform' }));
    let e = t;
    return e;
  })(),
  rx = new T(''),
  kD = (() => {
    let t = class t extends Qs {
      constructor() {
        super(),
          (this._doc = y(Ys)),
          (this._location = window.location),
          (this._history = window.history);
      }
      getBaseHrefFromDOM() {
        return Gs().getBaseHref(this._doc);
      }
      onPopState(r) {
        let o = Gs().getGlobalEventTarget(this._doc, 'window');
        return (
          o.addEventListener('popstate', r, !1),
          () => o.removeEventListener('popstate', r)
        );
      }
      onHashChange(r) {
        let o = Gs().getGlobalEventTarget(this._doc, 'window');
        return (
          o.addEventListener('hashchange', r, !1),
          () => o.removeEventListener('hashchange', r)
        );
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(r) {
        this._location.pathname = r;
      }
      pushState(r, o, i) {
        this._history.pushState(r, o, i);
      }
      replaceState(r, o, i) {
        this._history.replaceState(r, o, i);
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(r = 0) {
        this._history.go(r);
      }
      getState() {
        return this._history.state;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = F({
        token: t,
        factory: () => new t(),
        providedIn: 'platform',
      }));
    let e = t;
    return e;
  })();
function Ks(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return (
    e.endsWith('/') && n++,
    t.startsWith('/') && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + '/' + t
  );
}
function Ld(e) {
  let t = e.match(/#|\?|$/),
    n = (t && t.index) || e.length,
    r = n - (e[n - 1] === '/' ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function Re(e) {
  return e && e[0] !== '?' ? '?' + e : e;
}
var so = (() => {
    let t = class t {
      historyGo(r) {
        throw new Error('');
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = F({ token: t, factory: () => y(PD), providedIn: 'root' }));
    let e = t;
    return e;
  })(),
  Hd = new T(''),
  PD = (() => {
    let t = class t extends so {
      constructor(r, o) {
        super(),
          (this._platformLocation = r),
          (this._removeListenerFns = []),
          (this._baseHref =
            o ??
            this._platformLocation.getBaseHrefFromDOM() ??
            y(Ys).location?.origin ??
            '');
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(r) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(r),
          this._platformLocation.onHashChange(r),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(r) {
        return Ks(this._baseHref, r);
      }
      path(r = !1) {
        let o =
            this._platformLocation.pathname + Re(this._platformLocation.search),
          i = this._platformLocation.hash;
        return i && r ? `${o}${i}` : o;
      }
      pushState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Re(s));
        this._platformLocation.pushState(r, o, a);
      }
      replaceState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Re(s));
        this._platformLocation.replaceState(r, o, a);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(r = 0) {
        this._platformLocation.historyGo?.(r);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)($(Qs), $(Hd, 8));
    }),
      (t.ɵprov = F({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let e = t;
    return e;
  })(),
  ox = (() => {
    let t = class t extends so {
      constructor(r, o) {
        super(),
          (this._platformLocation = r),
          (this._baseHref = ''),
          (this._removeListenerFns = []),
          o != null && (this._baseHref = o);
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(r) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(r),
          this._platformLocation.onHashChange(r),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      path(r = !1) {
        let o = this._platformLocation.hash ?? '#';
        return o.length > 0 ? o.substring(1) : o;
      }
      prepareExternalUrl(r) {
        let o = Ks(this._baseHref, r);
        return o.length > 0 ? '#' + o : o;
      }
      pushState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Re(s));
        a.length == 0 && (a = this._platformLocation.pathname),
          this._platformLocation.pushState(r, o, a);
      }
      replaceState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Re(s));
        a.length == 0 && (a = this._platformLocation.pathname),
          this._platformLocation.replaceState(r, o, a);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(r = 0) {
        this._platformLocation.historyGo?.(r);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)($(Qs), $(Hd, 8));
    }),
      (t.ɵprov = F({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  LD = (() => {
    let t = class t {
      constructor(r) {
        (this._subject = new le()),
          (this._urlChangeListeners = []),
          (this._urlChangeSubscription = null),
          (this._locationStrategy = r);
        let o = this._locationStrategy.getBaseHref();
        (this._basePath = BD(Ld(jd(o)))),
          this._locationStrategy.onPopState((i) => {
            this._subject.emit({
              url: this.path(!0),
              pop: !0,
              state: i.state,
              type: i.type,
            });
          });
      }
      ngOnDestroy() {
        this._urlChangeSubscription?.unsubscribe(),
          (this._urlChangeListeners = []);
      }
      path(r = !1) {
        return this.normalize(this._locationStrategy.path(r));
      }
      getState() {
        return this._locationStrategy.getState();
      }
      isCurrentPathEqualTo(r, o = '') {
        return this.path() == this.normalize(r + Re(o));
      }
      normalize(r) {
        return t.stripTrailingSlash(VD(this._basePath, jd(r)));
      }
      prepareExternalUrl(r) {
        return (
          r && r[0] !== '/' && (r = '/' + r),
          this._locationStrategy.prepareExternalUrl(r)
        );
      }
      go(r, o = '', i = null) {
        this._locationStrategy.pushState(i, '', r, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(r + Re(o)), i);
      }
      replaceState(r, o = '', i = null) {
        this._locationStrategy.replaceState(i, '', r, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(r + Re(o)), i);
      }
      forward() {
        this._locationStrategy.forward();
      }
      back() {
        this._locationStrategy.back();
      }
      historyGo(r = 0) {
        this._locationStrategy.historyGo?.(r);
      }
      onUrlChange(r) {
        return (
          this._urlChangeListeners.push(r),
          (this._urlChangeSubscription ??= this.subscribe((o) => {
            this._notifyUrlChangeListeners(o.url, o.state);
          })),
          () => {
            let o = this._urlChangeListeners.indexOf(r);
            this._urlChangeListeners.splice(o, 1),
              this._urlChangeListeners.length === 0 &&
                (this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeSubscription = null));
          }
        );
      }
      _notifyUrlChangeListeners(r = '', o) {
        this._urlChangeListeners.forEach((i) => i(r, o));
      }
      subscribe(r, o, i) {
        return this._subject.subscribe({ next: r, error: o, complete: i });
      }
    };
    (t.normalizeQueryParams = Re),
      (t.joinWithSlash = Ks),
      (t.stripTrailingSlash = Ld),
      (t.ɵfac = function (o) {
        return new (o || t)($(so));
      }),
      (t.ɵprov = F({ token: t, factory: () => jD(), providedIn: 'root' }));
    let e = t;
    return e;
  })();
function jD() {
  return new LD($(so));
}
function VD(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === '' || ['/', ';', '?', '#'].includes(n[0]) ? n : t;
}
function jd(e) {
  return e.replace(/\/index.html$/, '');
}
function BD(e) {
  if (new RegExp('^(https?:)?//').test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
function ix(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(';')) {
    let r = n.indexOf('='),
      [o, i] = r == -1 ? [n, ''] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var sx = (() => {
    let t = class t {
      constructor(r, o) {
        (this._viewContainer = r),
          (this._context = new Ws()),
          (this._thenTemplateRef = null),
          (this._elseTemplateRef = null),
          (this._thenViewRef = null),
          (this._elseViewRef = null),
          (this._thenTemplateRef = o);
      }
      set ngIf(r) {
        (this._context.$implicit = this._context.ngIf = r), this._updateView();
      }
      set ngIfThen(r) {
        Vd('ngIfThen', r),
          (this._thenTemplateRef = r),
          (this._thenViewRef = null),
          this._updateView();
      }
      set ngIfElse(r) {
        Vd('ngIfElse', r),
          (this._elseTemplateRef = r),
          (this._elseViewRef = null),
          this._updateView();
      }
      _updateView() {
        this._context.$implicit
          ? this._thenViewRef ||
            (this._viewContainer.clear(),
            (this._elseViewRef = null),
            this._thenTemplateRef &&
              (this._thenViewRef = this._viewContainer.createEmbeddedView(
                this._thenTemplateRef,
                this._context,
              )))
          : this._elseViewRef ||
            (this._viewContainer.clear(),
            (this._thenViewRef = null),
            this._elseTemplateRef &&
              (this._elseViewRef = this._viewContainer.createEmbeddedView(
                this._elseTemplateRef,
                this._context,
              )));
      }
      static ngTemplateContextGuard(r, o) {
        return !0;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(ct(Vt), ct(Nt));
    }),
      (t.ɵdir = ns({
        type: t,
        selectors: [['', 'ngIf', '']],
        inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
        standalone: !0,
      }));
    let e = t;
    return e;
  })(),
  Ws = class {
    constructor() {
      (this.$implicit = null), (this.ngIf = null);
    }
  };
function Vd(e, t) {
  if (!!!(!t || t.createEmbeddedView))
    throw new Error(`${e} must be a TemplateRef, but received '${G(t)}'.`);
}
var ax = (() => {
  let t = class t {
    constructor(r) {
      (this._viewContainerRef = r),
        (this._viewRef = null),
        (this.ngTemplateOutletContext = null),
        (this.ngTemplateOutlet = null),
        (this.ngTemplateOutletInjector = null);
    }
    ngOnChanges(r) {
      if (this._shouldRecreateView(r)) {
        let o = this._viewContainerRef;
        if (
          (this._viewRef && o.remove(o.indexOf(this._viewRef)),
          !this.ngTemplateOutlet)
        ) {
          this._viewRef = null;
          return;
        }
        let i = this._createContextForwardProxy();
        this._viewRef = o.createEmbeddedView(this.ngTemplateOutlet, i, {
          injector: this.ngTemplateOutletInjector ?? void 0,
        });
      }
    }
    _shouldRecreateView(r) {
      return !!r.ngTemplateOutlet || !!r.ngTemplateOutletInjector;
    }
    _createContextForwardProxy() {
      return new Proxy(
        {},
        {
          set: (r, o, i) =>
            this.ngTemplateOutletContext
              ? Reflect.set(this.ngTemplateOutletContext, o, i)
              : !1,
          get: (r, o, i) => {
            if (this.ngTemplateOutletContext)
              return Reflect.get(this.ngTemplateOutletContext, o, i);
          },
        },
      );
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(ct(Vt));
  }),
    (t.ɵdir = ns({
      type: t,
      selectors: [['', 'ngTemplateOutlet', '']],
      inputs: {
        ngTemplateOutletContext: 'ngTemplateOutletContext',
        ngTemplateOutlet: 'ngTemplateOutlet',
        ngTemplateOutletInjector: 'ngTemplateOutletInjector',
      },
      standalone: !0,
      features: [ss],
    }));
  let e = t;
  return e;
})();
var ux = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵmod = zu({ type: t })),
      (t.ɵinj = Nu({}));
    let e = t;
    return e;
  })(),
  $D = 'browser',
  HD = 'server';
function UD(e) {
  return e === $D;
}
function cx(e) {
  return e === HD;
}
var lx = (() => {
    let t = class t {};
    t.ɵprov = F({
      token: t,
      providedIn: 'root',
      factory: () => (UD(y(Kr)) ? new qs(y(Ys), window) : new Zs()),
    });
    let e = t;
    return e;
  })(),
  qs = class {
    constructor(t, n) {
      (this.document = t), (this.window = n), (this.offset = () => [0, 0]);
    }
    setOffset(t) {
      Array.isArray(t) ? (this.offset = () => t) : (this.offset = t);
    }
    getScrollPosition() {
      return [this.window.scrollX, this.window.scrollY];
    }
    scrollToPosition(t) {
      this.window.scrollTo(t[0], t[1]);
    }
    scrollToAnchor(t) {
      let n = zD(this.document, t);
      n && (this.scrollToElement(n), n.focus());
    }
    setHistoryScrollRestoration(t) {
      this.window.history.scrollRestoration = t;
    }
    scrollToElement(t) {
      let n = t.getBoundingClientRect(),
        r = n.left + this.window.pageXOffset,
        o = n.top + this.window.pageYOffset,
        i = this.offset();
      this.window.scrollTo(r - i[0], o - i[1]);
    }
  };
function zD(e, t) {
  let n = e.getElementById(t) || e.getElementsByName(t)[0];
  if (n) return n;
  if (
    typeof e.createTreeWalker == 'function' &&
    e.body &&
    typeof e.body.attachShadow == 'function'
  ) {
    let r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT),
      o = r.currentNode;
    for (; o; ) {
      let i = o.shadowRoot;
      if (i) {
        let s = i.getElementById(t) || i.querySelector(`[name="${t}"]`);
        if (s) return s;
      }
      o = r.nextNode();
    }
  }
  return null;
}
var Zs = class {
    setOffset(t) {}
    getScrollPosition() {
      return [0, 0];
    }
    scrollToPosition(t) {}
    scrollToAnchor(t) {}
    setHistoryScrollRestoration(t) {}
  },
  Bd = class {};
export {
  Fe as a,
  ke as b,
  GD as c,
  WD as d,
  qD as e,
  Xd as f,
  ef as g,
  ZD as h,
  k as i,
  df as j,
  S as k,
  xo as l,
  So as m,
  ne as n,
  Ut as o,
  Ze as p,
  ye as q,
  Ef as r,
  wf as s,
  Cf as t,
  be as u,
  bf as v,
  Me as w,
  Of as x,
  Qe as y,
  Wt as z,
  Yn as A,
  Ff as B,
  kf as C,
  Pf as D,
  Ke as E,
  No as F,
  Lf as G,
  jf as H,
  qt as I,
  Ao as J,
  Vf as K,
  Bf as L,
  Uf as M,
  Oo as N,
  Ro as O,
  zf as P,
  Gf as Q,
  ko as R,
  Wf as S,
  qf as T,
  Zf as U,
  Yf as V,
  Qf as W,
  Kf as X,
  M as Y,
  Su as Z,
  F as _,
  Nu as $,
  P0 as aa,
  T as ba,
  C as ca,
  $ as da,
  y as ea,
  L0 as fa,
  j0 as ga,
  Jt as ha,
  V0 as ia,
  zu as ja,
  ns as ka,
  Qu as la,
  ec as ma,
  Be as na,
  Kp as oa,
  ss as pa,
  B0 as qa,
  $0 as ra,
  H0 as sa,
  jh as ta,
  Se as ua,
  Yr as va,
  le as wa,
  Q as xa,
  Tt as ya,
  jt as za,
  U0 as Aa,
  og as Ba,
  sg as Ca,
  Kr as Da,
  z0 as Ea,
  G0 as Fa,
  Ds as Ga,
  fn as Ha,
  ol as Ia,
  W0 as Ja,
  q0 as Ka,
  Z0 as La,
  Y0 as Ma,
  Q0 as Na,
  il as Oa,
  K0 as Pa,
  Cs as Qa,
  J0 as Ra,
  Tr as Sa,
  X0 as Ta,
  ct as Ua,
  e_ as Va,
  At as Wa,
  Lr as Xa,
  ed as Ya,
  Oe as Za,
  Cy as _a,
  by as $a,
  Vt as ab,
  Zy as bb,
  r_ as cb,
  nv as db,
  uv as eb,
  Ui as fb,
  cv as gb,
  dv as hb,
  hv as ib,
  _v as jb,
  xv as kb,
  o_ as lb,
  i_ as mb,
  wd as nb,
  Cd as ob,
  $v as pb,
  s_ as qb,
  qv as rb,
  Kv as sb,
  a_ as tb,
  u_ as ub,
  c_ as vb,
  l_ as wb,
  d_ as xb,
  f_ as yb,
  p_ as zb,
  h_ as Ab,
  g_ as Bb,
  m_ as Cb,
  y_ as Db,
  oD as Eb,
  _d as Fb,
  v_ as Gb,
  D_ as Hb,
  I_ as Ib,
  E_ as Jb,
  Hs as Kb,
  dD as Lb,
  Nd as Mb,
  mn as Nb,
  Ad as Ob,
  w_ as Pb,
  C_ as Qb,
  kd as Rb,
  b_ as Sb,
  M_ as Tb,
  __ as Ub,
  OD as Vb,
  x_ as Wb,
  RD as Xb,
  S_ as Yb,
  Gs as Zb,
  nx as _b,
  Pd as $b,
  Ys as ac,
  rx as bc,
  so as cc,
  PD as dc,
  ox as ec,
  LD as fc,
  ix as gc,
  sx as hc,
  ax as ic,
  ux as jc,
  $D as kc,
  UD as lc,
  cx as mc,
  lx as nc,
  Bd as oc,
};
//# sourceMappingURL=chunk-EO2GLJHI.js.map
