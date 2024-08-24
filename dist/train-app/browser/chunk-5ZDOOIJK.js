import {
  a as cn,
  e as mn,
  i as be,
  k as ni,
  l as ge,
} from './chunk-PHOH564W.js';
import {
  c as un,
  d as hn,
  f as oi,
  g as pn,
  h as fn,
} from './chunk-FPVPJWI4.js';
import {
  $ as _,
  A as Ui,
  Ab as on,
  Bb as rn,
  C as se,
  Cb as ei,
  D as Gi,
  Da as Xi,
  Db as b,
  E as Xe,
  Ea as _t,
  Eb as yt,
  F as $i,
  Fa as Ji,
  Fb as qt,
  Gb as H,
  H as Je,
  Hb as W,
  Ib as an,
  J as Gt,
  Kb as sn,
  L as Wi,
  M as qi,
  Qa as St,
  R as Zi,
  Rb as pe,
  S as Yi,
  T as de,
  Ta as u,
  U as Ki,
  Ua as l,
  Va as tn,
  Vb as et,
  W as nt,
  Wb as st,
  X as $t,
  Xb as dt,
  Y as le,
  Ya as ti,
  Z as Wt,
  Zb as ii,
  _ as I,
  _a as en,
  a as v,
  ac as z,
  b as U,
  ba as g,
  bb as X,
  cb as nn,
  da as f,
  db as J,
  ea as E,
  eb as ut,
  f as re,
  hb as A,
  hc as fe,
  i as Ut,
  ia as $,
  ib as S,
  ic as dn,
  ja as y,
  jb as w,
  jc as pt,
  k as ae,
  ka as x,
  kb as M,
  lb as he,
  lc as ln,
  mb as V,
  n as R,
  nb as c,
  o as Pi,
  ob as m,
  p as ji,
  pa as kt,
  pb as k,
  q as zi,
  qa as ot,
  qb as Tt,
  r as mt,
  ra as rt,
  rb as Ot,
  s as Bi,
  sa as Qi,
  sb as T,
  ta as ce,
  tb as tt,
  ua as me,
  ub as ht,
  vb as N,
  w as G,
  wa as Q,
  wb as Rt,
  x as Hi,
  xa as D,
  xb as at,
  ya as ue,
  yb as P,
  za as C,
  zb as j,
} from './chunk-EO2GLJHI.js';
var In = (() => {
    let t = class t {
      constructor(e, i) {
        (this._renderer = e),
          (this._elementRef = i),
          (this.onChange = (o) => {}),
          (this.onTouched = () => {});
      }
      setProperty(e, i) {
        this._renderer.setProperty(this._elementRef.nativeElement, e, i);
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      registerOnChange(e) {
        this.onChange = e;
      }
      setDisabledState(e) {
        this.setProperty('disabled', e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(l(ti), l(C));
    }),
      (t.ɵdir = x({ type: t }));
    let n = t;
    return n;
  })(),
  Uo = (() => {
    let t = class t extends In {};
    (t.ɵfac = (() => {
      let e;
      return function (o) {
        return (e || (e = Qi(t)))(o || t);
      };
    })()),
      (t.ɵdir = x({ type: t, features: [J] }));
    let n = t;
    return n;
  })(),
  En = new g('');
var Go = { provide: En, useExisting: Wt(() => jt), multi: !0 };
function $o() {
  let n = ii() ? ii().getUserAgent() : '';
  return /android (\d+)/.test(n.toLowerCase());
}
var Wo = new g(''),
  jt = (() => {
    let t = class t extends In {
      constructor(e, i, o) {
        super(e, i),
          (this._compositionMode = o),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !$o());
      }
      writeValue(e) {
        let i = e ?? '';
        this.setProperty('value', i);
      }
      _handleInput(e) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(e);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(e) {
        (this._composing = !1), this._compositionMode && this.onChange(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(l(ti), l(C), l(Wo, 8));
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [
          ['input', 'formControlName', '', 3, 'type', 'checkbox'],
          ['textarea', 'formControlName', ''],
          ['input', 'formControl', '', 3, 'type', 'checkbox'],
          ['textarea', 'formControl', ''],
          ['input', 'ngModel', '', 3, 'type', 'checkbox'],
          ['textarea', 'ngModel', ''],
          ['', 'ngDefaultControl', ''],
        ],
        hostBindings: function (i, o) {
          i & 1 &&
            T('input', function (s) {
              return o._handleInput(s.target.value);
            })('blur', function () {
              return o.onTouched();
            })('compositionstart', function () {
              return o._compositionStart();
            })('compositionend', function (s) {
              return o._compositionEnd(s.target.value);
            });
        },
        features: [H([Go]), J],
      }));
    let n = t;
    return n;
  })();
function ft(n) {
  return (
    n == null || ((typeof n == 'string' || Array.isArray(n)) && n.length === 0)
  );
}
function Cn(n) {
  return n != null && typeof n.length == 'number';
}
var mi = new g(''),
  ui = new g(''),
  qo =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  q = class {
    static min(t) {
      return Zo(t);
    }
    static max(t) {
      return Yo(t);
    }
    static required(t) {
      return Ko(t);
    }
    static requiredTrue(t) {
      return Qo(t);
    }
    static email(t) {
      return Xo(t);
    }
    static minLength(t) {
      return Jo(t);
    }
    static maxLength(t) {
      return tr(t);
    }
    static pattern(t) {
      return er(t);
    }
    static nullValidator(t) {
      return Dn(t);
    }
    static compose(t) {
      return Tn(t);
    }
    static composeAsync(t) {
      return On(t);
    }
  };
function Zo(n) {
  return (t) => {
    if (ft(t.value) || ft(n)) return null;
    let r = parseFloat(t.value);
    return !isNaN(r) && r < n ? { min: { min: n, actual: t.value } } : null;
  };
}
function Yo(n) {
  return (t) => {
    if (ft(t.value) || ft(n)) return null;
    let r = parseFloat(t.value);
    return !isNaN(r) && r > n ? { max: { max: n, actual: t.value } } : null;
  };
}
function Ko(n) {
  return ft(n.value) ? { required: !0 } : null;
}
function Qo(n) {
  return n.value === !0 ? null : { required: !0 };
}
function Xo(n) {
  return ft(n.value) || qo.test(n.value) ? null : { email: !0 };
}
function Jo(n) {
  return (t) =>
    ft(t.value) || !Cn(t.value)
      ? null
      : t.value.length < n
        ? { minlength: { requiredLength: n, actualLength: t.value.length } }
        : null;
}
function tr(n) {
  return (t) =>
    Cn(t.value) && t.value.length > n
      ? { maxlength: { requiredLength: n, actualLength: t.value.length } }
      : null;
}
function er(n) {
  if (!n) return Dn;
  let t, r;
  return (
    typeof n == 'string'
      ? ((r = ''),
        n.charAt(0) !== '^' && (r += '^'),
        (r += n),
        n.charAt(n.length - 1) !== '$' && (r += '$'),
        (t = new RegExp(r)))
      : ((r = n.toString()), (t = n)),
    (e) => {
      if (ft(e.value)) return null;
      let i = e.value;
      return t.test(i)
        ? null
        : { pattern: { requiredPattern: r, actualValue: i } };
    }
  );
}
function Dn(n) {
  return null;
}
function An(n) {
  return n != null;
}
function Fn(n) {
  return sn(n) ? zi(n) : n;
}
function Mn(n) {
  let t = {};
  return (
    n.forEach((r) => {
      t = r != null ? v(v({}, t), r) : t;
    }),
    Object.keys(t).length === 0 ? null : t
  );
}
function kn(n, t) {
  return t.map((r) => r(n));
}
function ir(n) {
  return !n.validate;
}
function Sn(n) {
  return n.map((t) => (ir(t) ? t : (r) => t.validate(r)));
}
function Tn(n) {
  if (!n) return null;
  let t = n.filter(An);
  return t.length == 0
    ? null
    : function (r) {
        return Mn(kn(r, t));
      };
}
function hi(n) {
  return n != null ? Tn(Sn(n)) : null;
}
function On(n) {
  if (!n) return null;
  let t = n.filter(An);
  return t.length == 0
    ? null
    : function (r) {
        let e = kn(r, t).map(Fn);
        return se(e).pipe(G(Mn));
      };
}
function pi(n) {
  return n != null ? On(Sn(n)) : null;
}
function bn(n, t) {
  return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
}
function Rn(n) {
  return n._rawValidators;
}
function Nn(n) {
  return n._rawAsyncValidators;
}
function ri(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
function ye(n, t) {
  return Array.isArray(n) ? n.includes(t) : n === t;
}
function gn(n, t) {
  let r = ri(t);
  return (
    ri(n).forEach((i) => {
      ye(r, i) || r.push(i);
    }),
    r
  );
}
function vn(n, t) {
  return ri(t).filter((r) => !ye(n, r));
}
var xe = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(t) {
      (this._rawValidators = t || []),
        (this._composedValidatorFn = hi(this._rawValidators));
    }
    _setAsyncValidators(t) {
      (this._rawAsyncValidators = t || []),
        (this._composedAsyncValidatorFn = pi(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(t) {
      this._onDestroyCallbacks.push(t);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((t) => t()),
        (this._onDestroyCallbacks = []);
    }
    reset(t = void 0) {
      this.control && this.control.reset(t);
    }
    hasError(t, r) {
      return this.control ? this.control.hasError(t, r) : !1;
    }
    getError(t, r) {
      return this.control ? this.control.getError(t, r) : null;
    }
  },
  bt = class extends xe {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  xt = class extends xe {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  we = class {
    constructor(t) {
      this._cd = t;
    }
    get isTouched() {
      return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return this._cd?._submitted?.(), !!this._cd?.submitted;
    }
  },
  nr = {
    '[class.ng-untouched]': 'isUntouched',
    '[class.ng-touched]': 'isTouched',
    '[class.ng-pristine]': 'isPristine',
    '[class.ng-dirty]': 'isDirty',
    '[class.ng-valid]': 'isValid',
    '[class.ng-invalid]': 'isInvalid',
    '[class.ng-pending]': 'isPending',
  },
  fs = U(v({}, nr), { '[class.ng-submitted]': 'isSubmitted' }),
  De = (() => {
    let t = class t extends we {
      constructor(e) {
        super(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(l(xt, 2));
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [
          ['', 'formControlName', ''],
          ['', 'ngModel', ''],
          ['', 'formControl', ''],
        ],
        hostVars: 14,
        hostBindings: function (i, o) {
          i & 2 &&
            M('ng-untouched', o.isUntouched)('ng-touched', o.isTouched)(
              'ng-pristine',
              o.isPristine,
            )('ng-dirty', o.isDirty)('ng-valid', o.isValid)(
              'ng-invalid',
              o.isInvalid,
            )('ng-pending', o.isPending);
        },
        features: [J],
      }));
    let n = t;
    return n;
  })(),
  Ae = (() => {
    let t = class t extends we {
      constructor(e) {
        super(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(l(bt, 10));
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [
          ['', 'formGroupName', ''],
          ['', 'formArrayName', ''],
          ['', 'ngModelGroup', ''],
          ['', 'formGroup', ''],
          ['form', 3, 'ngNoForm', ''],
          ['', 'ngForm', ''],
        ],
        hostVars: 16,
        hostBindings: function (i, o) {
          i & 2 &&
            M('ng-untouched', o.isUntouched)('ng-touched', o.isTouched)(
              'ng-pristine',
              o.isPristine,
            )('ng-dirty', o.isDirty)('ng-valid', o.isValid)(
              'ng-invalid',
              o.isInvalid,
            )('ng-pending', o.isPending)('ng-submitted', o.isSubmitted);
        },
        features: [J],
      }));
    let n = t;
    return n;
  })();
var Zt = 'VALID',
  ve = 'INVALID',
  Nt = 'PENDING',
  Yt = 'DISABLED',
  gt = class {},
  Ie = class extends gt {
    constructor(t, r) {
      super(), (this.value = t), (this.source = r);
    }
  },
  Qt = class extends gt {
    constructor(t, r) {
      super(), (this.pristine = t), (this.source = r);
    }
  },
  Xt = class extends gt {
    constructor(t, r) {
      super(), (this.touched = t), (this.source = r);
    }
  },
  Vt = class extends gt {
    constructor(t, r) {
      super(), (this.status = t), (this.source = r);
    }
  },
  ai = class extends gt {
    constructor(t) {
      super(), (this.source = t);
    }
  },
  si = class extends gt {
    constructor(t) {
      super(), (this.source = t);
    }
  };
function fi(n) {
  return (Fe(n) ? n.validators : n) || null;
}
function or(n) {
  return Array.isArray(n) ? hi(n) : n || null;
}
function bi(n, t) {
  return (Fe(t) ? t.asyncValidators : n) || null;
}
function rr(n) {
  return Array.isArray(n) ? pi(n) : n || null;
}
function Fe(n) {
  return n != null && !Array.isArray(n) && typeof n == 'object';
}
function Vn(n, t, r) {
  let e = n.controls;
  if (!(t ? Object.keys(e) : e).length) throw new le(1e3, '');
  if (!e[r]) throw new le(1001, '');
}
function Ln(n, t, r) {
  n._forEachChild((e, i) => {
    if (r[i] === void 0) throw new le(1002, '');
  });
}
var Lt = class {
    constructor(t, r) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = st(() => this.statusReactive())),
        (this.statusReactive = X(void 0)),
        (this._pristine = st(() => this.pristineReactive())),
        (this.pristineReactive = X(!0)),
        (this._touched = st(() => this.touchedReactive())),
        (this.touchedReactive = X(!1)),
        (this._events = new R()),
        (this.events = this._events.asObservable()),
        (this._onDisabledChange = []),
        this._assignValidators(t),
        this._assignAsyncValidators(r);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(t) {
      this._rawValidators = this._composedValidatorFn = t;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(t) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return dt(this.statusReactive);
    }
    set status(t) {
      dt(() => this.statusReactive.set(t));
    }
    get valid() {
      return this.status === Zt;
    }
    get invalid() {
      return this.status === ve;
    }
    get pending() {
      return this.status == Nt;
    }
    get disabled() {
      return this.status === Yt;
    }
    get enabled() {
      return this.status !== Yt;
    }
    get pristine() {
      return dt(this.pristineReactive);
    }
    set pristine(t) {
      dt(() => this.pristineReactive.set(t));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return dt(this.touchedReactive);
    }
    set touched(t) {
      dt(() => this.touchedReactive.set(t));
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
          ? this.parent.updateOn
          : 'change';
    }
    setValidators(t) {
      this._assignValidators(t);
    }
    setAsyncValidators(t) {
      this._assignAsyncValidators(t);
    }
    addValidators(t) {
      this.setValidators(gn(t, this._rawValidators));
    }
    addAsyncValidators(t) {
      this.setAsyncValidators(gn(t, this._rawAsyncValidators));
    }
    removeValidators(t) {
      this.setValidators(vn(t, this._rawValidators));
    }
    removeAsyncValidators(t) {
      this.setAsyncValidators(vn(t, this._rawAsyncValidators));
    }
    hasValidator(t) {
      return ye(this._rawValidators, t);
    }
    hasAsyncValidator(t) {
      return ye(this._rawAsyncValidators, t);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(t = {}) {
      let r = this.touched === !1;
      this.touched = !0;
      let e = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsTouched(U(v({}, t), { sourceControl: e })),
        r && t.emitEvent !== !1 && this._events.next(new Xt(!0, e));
    }
    markAllAsTouched(t = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: t.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((r) => r.markAllAsTouched(t));
    }
    markAsUntouched(t = {}) {
      let r = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let e = t.sourceControl ?? this;
      this._forEachChild((i) => {
        i.markAsUntouched({
          onlySelf: !0,
          emitEvent: t.emitEvent,
          sourceControl: e,
        });
      }),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, e),
        r && t.emitEvent !== !1 && this._events.next(new Xt(!1, e));
    }
    markAsDirty(t = {}) {
      let r = this.pristine === !0;
      this.pristine = !1;
      let e = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsDirty(U(v({}, t), { sourceControl: e })),
        r && t.emitEvent !== !1 && this._events.next(new Qt(!1, e));
    }
    markAsPristine(t = {}) {
      let r = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let e = t.sourceControl ?? this;
      this._forEachChild((i) => {
        i.markAsPristine({ onlySelf: !0, emitEvent: t.emitEvent });
      }),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, e),
        r && t.emitEvent !== !1 && this._events.next(new Qt(!0, e));
    }
    markAsPending(t = {}) {
      this.status = Nt;
      let r = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new Vt(this.status, r)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.markAsPending(U(v({}, t), { sourceControl: r }));
    }
    disable(t = {}) {
      let r = this._parentMarkedDirty(t.onlySelf);
      (this.status = Yt),
        (this.errors = null),
        this._forEachChild((i) => {
          i.disable(U(v({}, t), { onlySelf: !0 }));
        }),
        this._updateValue();
      let e = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new Ie(this.value, e)),
        this._events.next(new Vt(this.status, e)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(U(v({}, t), { skipPristineCheck: r }), this),
        this._onDisabledChange.forEach((i) => i(!0));
    }
    enable(t = {}) {
      let r = this._parentMarkedDirty(t.onlySelf);
      (this.status = Zt),
        this._forEachChild((e) => {
          e.enable(U(v({}, t), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
        this._updateAncestors(U(v({}, t), { skipPristineCheck: r }), this),
        this._onDisabledChange.forEach((e) => e(!1));
    }
    _updateAncestors(t, r) {
      this._parent &&
        !t.onlySelf &&
        (this._parent.updateValueAndValidity(t),
        t.skipPristineCheck || this._parent._updatePristine({}, r),
        this._parent._updateTouched({}, r));
    }
    setParent(t) {
      this._parent = t;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(t = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let e = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === Zt || this.status === Nt) &&
            this._runAsyncValidator(e, t.emitEvent);
      }
      let r = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new Ie(this.value, r)),
        this._events.next(new Vt(this.status, r)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.updateValueAndValidity(
            U(v({}, t), { sourceControl: r }),
          );
    }
    _updateTreeValidity(t = { emitEvent: !0 }) {
      this._forEachChild((r) => r._updateTreeValidity(t)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? Yt : Zt;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(t, r) {
      if (this.asyncValidator) {
        (this.status = Nt),
          (this._hasOwnPendingAsyncValidator = { emitEvent: r !== !1 });
        let e = Fn(this.asyncValidator(this));
        this._asyncValidationSubscription = e.subscribe((i) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(i, { emitEvent: r, shouldHaveEmitted: t });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let t = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), t;
      }
      return !1;
    }
    setErrors(t, r = {}) {
      (this.errors = t),
        this._updateControlsErrors(
          r.emitEvent !== !1,
          this,
          r.shouldHaveEmitted,
        );
    }
    get(t) {
      let r = t;
      return r == null ||
        (Array.isArray(r) || (r = r.split('.')), r.length === 0)
        ? null
        : r.reduce((e, i) => e && e._find(i), this);
    }
    getError(t, r) {
      let e = r ? this.get(r) : this;
      return e && e.errors ? e.errors[t] : null;
    }
    hasError(t, r) {
      return !!this.getError(t, r);
    }
    get root() {
      let t = this;
      for (; t._parent; ) t = t._parent;
      return t;
    }
    _updateControlsErrors(t, r, e) {
      (this.status = this._calculateStatus()),
        t && this.statusChanges.emit(this.status),
        (t || e) && this._events.next(new Vt(this.status, r)),
        this._parent && this._parent._updateControlsErrors(t, r, e);
    }
    _initObservables() {
      (this.valueChanges = new Q()), (this.statusChanges = new Q());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? Yt
        : this.errors
          ? ve
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Nt)
            ? Nt
            : this._anyControlsHaveStatus(ve)
              ? ve
              : Zt;
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls((r) => r.status === t);
    }
    _anyControlsDirty() {
      return this._anyControls((t) => t.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((t) => t.touched);
    }
    _updatePristine(t, r) {
      let e = !this._anyControlsDirty(),
        i = this.pristine !== e;
      (this.pristine = e),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, r),
        i && this._events.next(new Qt(this.pristine, r));
    }
    _updateTouched(t = {}, r) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new Xt(this.touched, r)),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, r);
    }
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t;
    }
    _setUpdateStrategy(t) {
      Fe(t) && t.updateOn != null && (this._updateOn = t.updateOn);
    }
    _parentMarkedDirty(t) {
      let r = this._parent && this._parent.dirty;
      return !t && !!r && !this._parent._anyControlsDirty();
    }
    _find(t) {
      return null;
    }
    _assignValidators(t) {
      (this._rawValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedValidatorFn = or(this._rawValidators));
    }
    _assignAsyncValidators(t) {
      (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedAsyncValidatorFn = rr(this._rawAsyncValidators));
    }
  },
  Pt = class extends Lt {
    constructor(t, r, e) {
      super(fi(r), bi(e, r)),
        (this.controls = t),
        this._initObservables(),
        this._setUpdateStrategy(r),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(t, r) {
      return this.controls[t]
        ? this.controls[t]
        : ((this.controls[t] = r),
          r.setParent(this),
          r._registerOnCollectionChange(this._onCollectionChange),
          r);
    }
    addControl(t, r, e = {}) {
      this.registerControl(t, r),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(t, r = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    setControl(t, r, e = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        r && this.registerControl(t, r),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
    }
    setValue(t, r = {}) {
      Ln(this, !0, t),
        Object.keys(t).forEach((e) => {
          Vn(this, !0, e),
            this.controls[e].setValue(t[e], {
              onlySelf: !0,
              emitEvent: r.emitEvent,
            });
        }),
        this.updateValueAndValidity(r);
    }
    patchValue(t, r = {}) {
      t != null &&
        (Object.keys(t).forEach((e) => {
          let i = this.controls[e];
          i && i.patchValue(t[e], { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r));
    }
    reset(t = {}, r = {}) {
      this._forEachChild((e, i) => {
        e.reset(t ? t[i] : null, { onlySelf: !0, emitEvent: r.emitEvent });
      }),
        this._updatePristine(r, this),
        this._updateTouched(r, this),
        this.updateValueAndValidity(r);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (t, r, e) => ((t[e] = r.getRawValue()), t),
      );
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (r, e) =>
        e._syncPendingControls() ? !0 : r,
      );
      return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach((r) => {
        let e = this.controls[r];
        e && t(e, r);
      });
    }
    _setUpControls() {
      this._forEachChild((t) => {
        t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(t) {
      for (let [r, e] of Object.entries(this.controls))
        if (this.contains(r) && t(e)) return !0;
      return !1;
    }
    _reduceValue() {
      let t = {};
      return this._reduceChildren(
        t,
        (r, e, i) => ((e.enabled || this.disabled) && (r[i] = e.value), r),
      );
    }
    _reduceChildren(t, r) {
      let e = t;
      return (
        this._forEachChild((i, o) => {
          e = r(e, i, o);
        }),
        e
      );
    }
    _allControlsDisabled() {
      for (let t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(t) {
      return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
    }
  };
var di = class extends Pt {};
var Me = new g('CallSetDisabledState', {
    providedIn: 'root',
    factory: () => ke,
  }),
  ke = 'always';
function ar(n, t) {
  return [...t.path, n];
}
function li(n, t, r = ke) {
  gi(n, t),
    t.valueAccessor.writeValue(n.value),
    (n.disabled || r === 'always') &&
      t.valueAccessor.setDisabledState?.(n.disabled),
    dr(n, t),
    cr(n, t),
    lr(n, t),
    sr(n, t);
}
function _n(n, t, r = !0) {
  let e = () => {};
  t.valueAccessor &&
    (t.valueAccessor.registerOnChange(e), t.valueAccessor.registerOnTouched(e)),
    Ce(n, t),
    n &&
      (t._invokeOnDestroyCallbacks(), n._registerOnCollectionChange(() => {}));
}
function Ee(n, t) {
  n.forEach((r) => {
    r.registerOnValidatorChange && r.registerOnValidatorChange(t);
  });
}
function sr(n, t) {
  if (t.valueAccessor.setDisabledState) {
    let r = (e) => {
      t.valueAccessor.setDisabledState(e);
    };
    n.registerOnDisabledChange(r),
      t._registerOnDestroy(() => {
        n._unregisterOnDisabledChange(r);
      });
  }
}
function gi(n, t) {
  let r = Rn(n);
  t.validator !== null
    ? n.setValidators(bn(r, t.validator))
    : typeof r == 'function' && n.setValidators([r]);
  let e = Nn(n);
  t.asyncValidator !== null
    ? n.setAsyncValidators(bn(e, t.asyncValidator))
    : typeof e == 'function' && n.setAsyncValidators([e]);
  let i = () => n.updateValueAndValidity();
  Ee(t._rawValidators, i), Ee(t._rawAsyncValidators, i);
}
function Ce(n, t) {
  let r = !1;
  if (n !== null) {
    if (t.validator !== null) {
      let i = Rn(n);
      if (Array.isArray(i) && i.length > 0) {
        let o = i.filter((a) => a !== t.validator);
        o.length !== i.length && ((r = !0), n.setValidators(o));
      }
    }
    if (t.asyncValidator !== null) {
      let i = Nn(n);
      if (Array.isArray(i) && i.length > 0) {
        let o = i.filter((a) => a !== t.asyncValidator);
        o.length !== i.length && ((r = !0), n.setAsyncValidators(o));
      }
    }
  }
  let e = () => {};
  return Ee(t._rawValidators, e), Ee(t._rawAsyncValidators, e), r;
}
function dr(n, t) {
  t.valueAccessor.registerOnChange((r) => {
    (n._pendingValue = r),
      (n._pendingChange = !0),
      (n._pendingDirty = !0),
      n.updateOn === 'change' && Pn(n, t);
  });
}
function lr(n, t) {
  t.valueAccessor.registerOnTouched(() => {
    (n._pendingTouched = !0),
      n.updateOn === 'blur' && n._pendingChange && Pn(n, t),
      n.updateOn !== 'submit' && n.markAsTouched();
  });
}
function Pn(n, t) {
  n._pendingDirty && n.markAsDirty(),
    n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
    t.viewToModelUpdate(n._pendingValue),
    (n._pendingChange = !1);
}
function cr(n, t) {
  let r = (e, i) => {
    t.valueAccessor.writeValue(e), i && t.viewToModelUpdate(e);
  };
  n.registerOnChange(r),
    t._registerOnDestroy(() => {
      n._unregisterOnChange(r);
    });
}
function jn(n, t) {
  n == null, gi(n, t);
}
function mr(n, t) {
  return Ce(n, t);
}
function ur(n, t) {
  if (!n.hasOwnProperty('model')) return !1;
  let r = n.model;
  return r.isFirstChange() ? !0 : !Object.is(t, r.currentValue);
}
function hr(n) {
  return Object.getPrototypeOf(n.constructor) === Uo;
}
function zn(n, t) {
  n._syncPendingControls(),
    t.forEach((r) => {
      let e = r.control;
      e.updateOn === 'submit' &&
        e._pendingChange &&
        (r.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
    });
}
function pr(n, t) {
  if (!t) return null;
  Array.isArray(t);
  let r, e, i;
  return (
    t.forEach((o) => {
      o.constructor === jt ? (r = o) : hr(o) ? (e = o) : (i = o);
    }),
    i || e || r || null
  );
}
function fr(n, t) {
  let r = n.indexOf(t);
  r > -1 && n.splice(r, 1);
}
var br = { provide: bt, useExisting: Wt(() => vi) },
  Kt = Promise.resolve(),
  vi = (() => {
    let t = class t extends bt {
      get submitted() {
        return dt(this.submittedReactive);
      }
      constructor(e, i, o) {
        super(),
          (this.callSetDisabledState = o),
          (this._submitted = st(() => this.submittedReactive())),
          (this.submittedReactive = X(!1)),
          (this._directives = new Set()),
          (this.ngSubmit = new Q()),
          (this.form = new Pt({}, hi(e), pi(i)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(e) {
        Kt.then(() => {
          let i = this._findContainer(e.path);
          (e.control = i.registerControl(e.name, e.control)),
            li(e.control, e, this.callSetDisabledState),
            e.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(e);
        });
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        Kt.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name), this._directives.delete(e);
        });
      }
      addFormGroup(e) {
        Kt.then(() => {
          let i = this._findContainer(e.path),
            o = new Pt({});
          jn(o, e),
            i.registerControl(e.name, o),
            o.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(e) {
        Kt.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name);
        });
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        Kt.then(() => {
          this.form.get(e.path).setValue(i);
        });
      }
      setValue(e) {
        this.control.setValue(e);
      }
      onSubmit(e) {
        return (
          this.submittedReactive.set(!0),
          zn(this.form, this._directives),
          this.ngSubmit.emit(e),
          e?.target?.method === 'dialog'
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e), this.submittedReactive.set(!1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(e) {
        return e.pop(), e.length ? this.form.get(e) : this.form;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(l(mi, 10), l(ui, 10), l(Me, 8));
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [
          ['form', 3, 'ngNoForm', '', 3, 'formGroup', ''],
          ['ng-form'],
          ['', 'ngForm', ''],
        ],
        hostBindings: function (i, o) {
          i & 1 &&
            T('submit', function (s) {
              return o.onSubmit(s);
            })('reset', function () {
              return o.onReset();
            });
        },
        inputs: { options: [0, 'ngFormOptions', 'options'] },
        outputs: { ngSubmit: 'ngSubmit' },
        exportAs: ['ngForm'],
        features: [H([br]), J],
      }));
    let n = t;
    return n;
  })();
function yn(n, t) {
  let r = n.indexOf(t);
  r > -1 && n.splice(r, 1);
}
function xn(n) {
  return (
    typeof n == 'object' &&
    n !== null &&
    Object.keys(n).length === 2 &&
    'value' in n &&
    'disabled' in n
  );
}
var _e = class extends Lt {
  constructor(t = null, r, e) {
    super(fi(r), bi(e, r)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(t),
      this._setUpdateStrategy(r),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      Fe(r) &&
        (r.nonNullable || r.initialValueIsDefault) &&
        (xn(t) ? (this.defaultValue = t.value) : (this.defaultValue = t));
  }
  setValue(t, r = {}) {
    (this.value = this._pendingValue = t),
      this._onChange.length &&
        r.emitModelToViewChange !== !1 &&
        this._onChange.forEach((e) =>
          e(this.value, r.emitViewToModelChange !== !1),
        ),
      this.updateValueAndValidity(r);
  }
  patchValue(t, r = {}) {
    this.setValue(t, r);
  }
  reset(t = this.defaultValue, r = {}) {
    this._applyFormState(t),
      this.markAsPristine(r),
      this.markAsUntouched(r),
      this.setValue(this.value, r),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(t) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(t) {
    this._onChange.push(t);
  }
  _unregisterOnChange(t) {
    yn(this._onChange, t);
  }
  registerOnDisabledChange(t) {
    this._onDisabledChange.push(t);
  }
  _unregisterOnDisabledChange(t) {
    yn(this._onDisabledChange, t);
  }
  _forEachChild(t) {}
  _syncPendingControls() {
    return this.updateOn === 'submit' &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(t) {
    xn(t)
      ? ((this.value = this._pendingValue = t.value),
        t.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = t);
  }
};
var gr = (n) => n instanceof _e;
var Se = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵdir = x({
      type: t,
      selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
      hostAttrs: ['novalidate', ''],
    }));
  let n = t;
  return n;
})();
var Bn = new g('');
var vr = { provide: bt, useExisting: Wt(() => wt) },
  wt = (() => {
    let t = class t extends bt {
      get submitted() {
        return dt(this._submittedReactive);
      }
      set submitted(e) {
        this._submittedReactive.set(e);
      }
      constructor(e, i, o) {
        super(),
          (this.callSetDisabledState = o),
          (this._submitted = st(() => this._submittedReactive())),
          (this._submittedReactive = X(!1)),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new Q()),
          this._setValidators(e),
          this._setAsyncValidators(i);
      }
      ngOnChanges(e) {
        this._checkFormPresent(),
          e.hasOwnProperty('form') &&
            (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (Ce(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(e) {
        let i = this.form.get(e.path);
        return (
          li(i, e, this.callSetDisabledState),
          i.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(e),
          i
        );
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        _n(e.control || null, e, !1), fr(this.directives, e);
      }
      addFormGroup(e) {
        this._setUpFormContainer(e);
      }
      removeFormGroup(e) {
        this._cleanUpFormContainer(e);
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      addFormArray(e) {
        this._setUpFormContainer(e);
      }
      removeFormArray(e) {
        this._cleanUpFormContainer(e);
      }
      getFormArray(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        this.form.get(e.path).setValue(i);
      }
      onSubmit(e) {
        return (
          this._submittedReactive.set(!0),
          zn(this.form, this.directives),
          this.ngSubmit.emit(e),
          this.form._events.next(new ai(this.control)),
          e?.target?.method === 'dialog'
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e),
          this._submittedReactive.set(!1),
          this.form._events.next(new si(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((e) => {
          let i = e.control,
            o = this.form.get(e.path);
          i !== o &&
            (_n(i || null, e),
            gr(o) && (li(o, e, this.callSetDisabledState), (e.control = o)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(e) {
        let i = this.form.get(e.path);
        jn(i, e), i.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(e) {
        if (this.form) {
          let i = this.form.get(e.path);
          i && mr(i, e) && i.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        gi(this.form, this), this._oldForm && Ce(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(l(mi, 10), l(ui, 10), l(Me, 8));
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [['', 'formGroup', '']],
        hostBindings: function (i, o) {
          i & 1 &&
            T('submit', function (s) {
              return o.onSubmit(s);
            })('reset', function () {
              return o.onReset();
            });
        },
        inputs: { form: [0, 'formGroup', 'form'] },
        outputs: { ngSubmit: 'ngSubmit' },
        exportAs: ['ngForm'],
        features: [H([vr]), J, kt],
      }));
    let n = t;
    return n;
  })();
var _r = { provide: xt, useExisting: Wt(() => Jt) },
  Jt = (() => {
    let t = class t extends xt {
      set isDisabled(e) {}
      constructor(e, i, o, a, s) {
        super(),
          (this._ngModelWarningConfig = s),
          (this._added = !1),
          (this.name = null),
          (this.update = new Q()),
          (this._ngModelWarningSent = !1),
          (this._parent = e),
          this._setValidators(i),
          this._setAsyncValidators(o),
          (this.valueAccessor = pr(this, a));
      }
      ngOnChanges(e) {
        this._added || this._setUpControl(),
          ur(e, this.viewModel) &&
            ((this.viewModel = this.model),
            this.formDirective.updateModel(this, this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      viewToModelUpdate(e) {
        (this.viewModel = e), this.update.emit(e);
      }
      get path() {
        return ar(
          this.name == null ? this.name : this.name.toString(),
          this._parent,
        );
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _checkParentType() {}
      _setUpControl() {
        this._checkParentType(),
          (this.control = this.formDirective.addControl(this)),
          (this._added = !0);
      }
    };
    (t._ngModelWarningSentOnce = !1),
      (t.ɵfac = function (i) {
        return new (i || t)(
          l(bt, 13),
          l(mi, 10),
          l(ui, 10),
          l(En, 10),
          l(Bn, 8),
        );
      }),
      (t.ɵdir = x({
        type: t,
        selectors: [['', 'formControlName', '']],
        inputs: {
          name: [0, 'formControlName', 'name'],
          isDisabled: [0, 'disabled', 'isDisabled'],
          model: [0, 'ngModel', 'model'],
        },
        outputs: { update: 'ngModelChange' },
        features: [H([_r]), J, kt],
      }));
    let n = t;
    return n;
  })();
var Hn = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = y({ type: t })),
      (t.ɵinj = _({}));
    let n = t;
    return n;
  })(),
  ci = class extends Lt {
    constructor(t, r, e) {
      super(fi(r), bi(e, r)),
        (this.controls = t),
        this._initObservables(),
        this._setUpdateStrategy(r),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    at(t) {
      return this.controls[this._adjustIndex(t)];
    }
    push(t, r = {}) {
      this.controls.push(t),
        this._registerControl(t),
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    insert(t, r, e = {}) {
      this.controls.splice(t, 0, r),
        this._registerControl(r),
        this.updateValueAndValidity({ emitEvent: e.emitEvent });
    }
    removeAt(t, r = {}) {
      let e = this._adjustIndex(t);
      e < 0 && (e = 0),
        this.controls[e] &&
          this.controls[e]._registerOnCollectionChange(() => {}),
        this.controls.splice(e, 1),
        this.updateValueAndValidity({ emitEvent: r.emitEvent });
    }
    setControl(t, r, e = {}) {
      let i = this._adjustIndex(t);
      i < 0 && (i = 0),
        this.controls[i] &&
          this.controls[i]._registerOnCollectionChange(() => {}),
        this.controls.splice(i, 1),
        r && (this.controls.splice(i, 0, r), this._registerControl(r)),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    get length() {
      return this.controls.length;
    }
    setValue(t, r = {}) {
      Ln(this, !1, t),
        t.forEach((e, i) => {
          Vn(this, !1, i),
            this.at(i).setValue(e, { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r);
    }
    patchValue(t, r = {}) {
      t != null &&
        (t.forEach((e, i) => {
          this.at(i) &&
            this.at(i).patchValue(e, { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r));
    }
    reset(t = [], r = {}) {
      this._forEachChild((e, i) => {
        e.reset(t[i], { onlySelf: !0, emitEvent: r.emitEvent });
      }),
        this._updatePristine(r, this),
        this._updateTouched(r, this),
        this.updateValueAndValidity(r);
    }
    getRawValue() {
      return this.controls.map((t) => t.getRawValue());
    }
    clear(t = {}) {
      this.controls.length < 1 ||
        (this._forEachChild((r) => r._registerOnCollectionChange(() => {})),
        this.controls.splice(0),
        this.updateValueAndValidity({ emitEvent: t.emitEvent }));
    }
    _adjustIndex(t) {
      return t < 0 ? t + this.length : t;
    }
    _syncPendingControls() {
      let t = this.controls.reduce(
        (r, e) => (e._syncPendingControls() ? !0 : r),
        !1,
      );
      return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
    }
    _forEachChild(t) {
      this.controls.forEach((r, e) => {
        t(r, e);
      });
    }
    _updateValue() {
      this.value = this.controls
        .filter((t) => t.enabled || this.disabled)
        .map((t) => t.value);
    }
    _anyControls(t) {
      return this.controls.some((r) => r.enabled && t(r));
    }
    _setUpControls() {
      this._forEachChild((t) => this._registerControl(t));
    }
    _allControlsDisabled() {
      for (let t of this.controls) if (t.enabled) return !1;
      return this.controls.length > 0 || this.disabled;
    }
    _registerControl(t) {
      t.setParent(this),
        t._registerOnCollectionChange(this._onCollectionChange);
    }
    _find(t) {
      return this.at(t) ?? null;
    }
  };
function wn(n) {
  return (
    !!n &&
    (n.asyncValidators !== void 0 ||
      n.validators !== void 0 ||
      n.updateOn !== void 0)
  );
}
var Te = (() => {
  let t = class t {
    constructor() {
      this.useNonNullable = !1;
    }
    get nonNullable() {
      let e = new t();
      return (e.useNonNullable = !0), e;
    }
    group(e, i = null) {
      let o = this._reduceControls(e),
        a = {};
      return (
        wn(i)
          ? (a = i)
          : i !== null &&
            ((a.validators = i.validator),
            (a.asyncValidators = i.asyncValidator)),
        new Pt(o, a)
      );
    }
    record(e, i = null) {
      let o = this._reduceControls(e);
      return new di(o, i);
    }
    control(e, i, o) {
      let a = {};
      return this.useNonNullable
        ? (wn(i) ? (a = i) : ((a.validators = i), (a.asyncValidators = o)),
          new _e(e, U(v({}, a), { nonNullable: !0 })))
        : new _e(e, i, o);
    }
    array(e, i, o) {
      let a = e.map((s) => this._createControl(s));
      return new ci(a, i, o);
    }
    _reduceControls(e) {
      let i = {};
      return (
        Object.keys(e).forEach((o) => {
          i[o] = this._createControl(e[o]);
        }),
        i
      );
    }
    _createControl(e) {
      if (e instanceof _e) return e;
      if (e instanceof Lt) return e;
      if (Array.isArray(e)) {
        let i = e[0],
          o = e.length > 1 ? e[1] : null,
          a = e.length > 2 ? e[2] : null;
        return this.control(i, o, a);
      } else return this.control(e);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
  let n = t;
  return n;
})();
var Oe = (() => {
    let t = class t {
      static withConfig(e) {
        return {
          ngModule: t,
          providers: [{ provide: Me, useValue: e.callSetDisabledState ?? ke }],
        };
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = y({ type: t })),
      (t.ɵinj = _({ imports: [Hn] }));
    let n = t;
    return n;
  })(),
  Re = (() => {
    let t = class t {
      static withConfig(e) {
        return {
          ngModule: t,
          providers: [
            {
              provide: Bn,
              useValue: e.warnOnNgModelWithFormControl ?? 'always',
            },
            { provide: Me, useValue: e.callSetDisabledState ?? ke },
          ],
        };
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = y({ type: t })),
      (t.ɵinj = _({ imports: [Hn] }));
    let n = t;
    return n;
  })();
var xi;
try {
  xi = typeof Intl < 'u' && Intl.v8BreakIterator;
} catch {
  xi = !1;
}
var F = (() => {
  let t = class t {
    constructor(e) {
      (this._platformId = e),
        (this.isBrowser = this._platformId
          ? ln(this._platformId)
          : typeof document == 'object' && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || xi) &&
          typeof CSS < 'u' &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !('MSStream' in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(f(Xi));
  }),
    (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
  let n = t;
  return n;
})();
var zt,
  Un = [
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ];
function wi() {
  if (zt) return zt;
  if (typeof document != 'object' || !document) return (zt = new Set(Un)), zt;
  let n = document.createElement('input');
  return (
    (zt = new Set(Un.filter((t) => (n.setAttribute('type', t), n.type === t)))),
    zt
  );
}
var te;
function yr() {
  if (te == null && typeof window < 'u')
    try {
      window.addEventListener(
        'test',
        null,
        Object.defineProperty({}, 'passive', { get: () => (te = !0) }),
      );
    } finally {
      te = te || !1;
    }
  return te;
}
function vt(n) {
  return yr() ? n : !!n.capture;
}
var yi;
function xr() {
  if (yi == null) {
    let n = typeof document < 'u' ? document.head : null;
    yi = !!(n && (n.createShadowRoot || n.attachShadow));
  }
  return yi;
}
function Gn(n) {
  if (xr()) {
    let t = n.getRootNode ? n.getRootNode() : null;
    if (typeof ShadowRoot < 'u' && ShadowRoot && t instanceof ShadowRoot)
      return t;
  }
  return null;
}
function lt(n) {
  return n.composedPath ? n.composedPath()[0] : n.target;
}
function $n() {
  return (
    (typeof __karma__ < 'u' && !!__karma__) ||
    (typeof jasmine < 'u' && !!jasmine) ||
    (typeof jest < 'u' && !!jest) ||
    (typeof Mocha < 'u' && !!Mocha)
  );
}
function Et(n) {
  return n != null && `${n}` != 'false';
}
function Ii(n) {
  return Array.isArray(n) ? n : [n];
}
function it(n) {
  return n instanceof C ? n.nativeElement : n;
}
var wr = (() => {
  let t = class t {
    create(e) {
      return typeof MutationObserver > 'u' ? null : new MutationObserver(e);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
  let n = t;
  return n;
})();
var Wn = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = y({ type: t })),
    (t.ɵinj = _({ providers: [wr] }));
  let n = t;
  return n;
})();
var qn = new Set(),
  Ct,
  Ir = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = e),
          (this._nonce = i),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : Cr);
      }
      matchMedia(e) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && Er(e, this._nonce),
          this._matchMedia(e)
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(F), f(Ji, 8));
    }),
      (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let n = t;
    return n;
  })();
function Er(n, t) {
  if (!qn.has(n))
    try {
      Ct ||
        ((Ct = document.createElement('style')),
        t && Ct.setAttribute('nonce', t),
        Ct.setAttribute('type', 'text/css'),
        document.head.appendChild(Ct)),
        Ct.sheet &&
          (Ct.sheet.insertRule(`@media ${n} {body{ }}`, 0), qn.add(n));
    } catch (r) {
      console.error(r);
    }
}
function Cr(n) {
  return {
    matches: n === 'all' || n === '',
    media: n,
    addListener: () => {},
    removeListener: () => {},
  };
}
var Yn = (() => {
  let t = class t {
    constructor(e, i) {
      (this._mediaMatcher = e),
        (this._zone = i),
        (this._queries = new Map()),
        (this._destroySubject = new R());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return Zn(Ii(e)).some((o) => this._registerQuery(o).mql.matches);
    }
    observe(e) {
      let o = Zn(Ii(e)).map((s) => this._registerQuery(s).observable),
        a = Hi(o);
      return (
        (a = Ui(a.pipe(Gt(1)), a.pipe(de(1), Je(0)))),
        a.pipe(
          G((s) => {
            let d = { matches: !1, breakpoints: {} };
            return (
              s.forEach(({ matches: h, query: p }) => {
                (d.matches = d.matches || h), (d.breakpoints[p] = h);
              }),
              d
            );
          }),
        )
      );
    }
    _registerQuery(e) {
      if (this._queries.has(e)) return this._queries.get(e);
      let i = this._mediaMatcher.matchMedia(e),
        a = {
          observable: new ae((s) => {
            let d = (h) => this._zone.run(() => s.next(h));
            return (
              i.addListener(d),
              () => {
                i.removeListener(d);
              }
            );
          }).pipe(
            Ki(i),
            G(({ matches: s }) => ({ query: e, matches: s })),
            nt(this._destroySubject),
          ),
          mql: i,
        };
      return this._queries.set(e, a), a;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(f(Ir), f(D));
  }),
    (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
  let n = t;
  return n;
})();
function Zn(n) {
  return n
    .map((t) => t.split(','))
    .reduce((t, r) => t.concat(r))
    .map((t) => t.trim());
}
function Ci(n) {
  return n.buttons === 0 || n.detail === 0;
}
function Di(n) {
  let t =
    (n.touches && n.touches[0]) || (n.changedTouches && n.changedTouches[0]);
  return (
    !!t &&
    t.identifier === -1 &&
    (t.radiusX == null || t.radiusX === 1) &&
    (t.radiusY == null || t.radiusY === 1)
  );
}
var Dr = new g('cdk-input-modality-detector-options'),
  Ar = { ignoreKeys: [18, 17, 224, 91, 16] },
  Xn = 650,
  Bt = vt({ passive: !0, capture: !0 }),
  Fr = (() => {
    let t = class t {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(e, i, o, a) {
        (this._platform = e),
          (this._mostRecentTarget = null),
          (this._modality = new Pi(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (s) => {
            this._options?.ignoreKeys?.some((d) => d === s.keyCode) ||
              (this._modality.next('keyboard'),
              (this._mostRecentTarget = lt(s)));
          }),
          (this._onMousedown = (s) => {
            Date.now() - this._lastTouchMs < Xn ||
              (this._modality.next(Ci(s) ? 'keyboard' : 'mouse'),
              (this._mostRecentTarget = lt(s)));
          }),
          (this._onTouchstart = (s) => {
            if (Di(s)) {
              this._modality.next('keyboard');
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next('touch'),
              (this._mostRecentTarget = lt(s));
          }),
          (this._options = v(v({}, Ar), a)),
          (this.modalityDetected = this._modality.pipe(de(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Wi())),
          e.isBrowser &&
            i.runOutsideAngular(() => {
              o.addEventListener('keydown', this._onKeydown, Bt),
                o.addEventListener('mousedown', this._onMousedown, Bt),
                o.addEventListener('touchstart', this._onTouchstart, Bt);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener('keydown', this._onKeydown, Bt),
            document.removeEventListener('mousedown', this._onMousedown, Bt),
            document.removeEventListener('touchstart', this._onTouchstart, Bt));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(F), f(D), f(z), f(Dr, 8));
    }),
      (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let n = t;
    return n;
  })();
var Ve = (function (n) {
    return (
      (n[(n.IMMEDIATE = 0)] = 'IMMEDIATE'),
      (n[(n.EVENTUAL = 1)] = 'EVENTUAL'),
      n
    );
  })(Ve || {}),
  Mr = new g('cdk-focus-monitor-default-options'),
  Ne = vt({ passive: !0, capture: !0 }),
  Jn = (() => {
    let t = class t {
      constructor(e, i, o, a, s) {
        (this._ngZone = e),
          (this._platform = i),
          (this._inputModalityDetector = o),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1),
              ));
          }),
          (this._stopInputModalityDetector = new R()),
          (this._rootNodeFocusAndBlurListener = (d) => {
            let h = lt(d);
            for (let p = h; p; p = p.parentElement)
              d.type === 'focus' ? this._onFocus(d, p) : this._onBlur(d, p);
          }),
          (this._document = a),
          (this._detectionMode = s?.detectionMode || Ve.IMMEDIATE);
      }
      monitor(e, i = !1) {
        let o = it(e);
        if (!this._platform.isBrowser || o.nodeType !== 1) return mt();
        let a = Gn(o) || this._getDocument(),
          s = this._elementInfo.get(o);
        if (s) return i && (s.checkChildren = !0), s.subject;
        let d = { checkChildren: i, subject: new R(), rootNode: a };
        return (
          this._elementInfo.set(o, d),
          this._registerGlobalListeners(d),
          d.subject
        );
      }
      stopMonitoring(e) {
        let i = it(e),
          o = this._elementInfo.get(i);
        o &&
          (o.subject.complete(),
          this._setClasses(i),
          this._elementInfo.delete(i),
          this._removeGlobalListeners(o));
      }
      focusVia(e, i, o) {
        let a = it(e),
          s = this._getDocument().activeElement;
        a === s
          ? this._getClosestElementsInfo(a).forEach(([d, h]) =>
              this._originChanged(d, i, h),
            )
          : (this._setOrigin(i), typeof a.focus == 'function' && a.focus(o));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((e, i) => this.stopMonitoring(i));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(e) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(e)
              ? 'touch'
              : 'program'
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
            ? this._lastFocusOrigin
            : e && this._isLastInteractionFromInputLabel(e)
              ? 'mouse'
              : 'program';
      }
      _shouldBeAttributedToTouch(e) {
        return (
          this._detectionMode === Ve.EVENTUAL ||
          !!e?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(e, i) {
        e.classList.toggle('cdk-focused', !!i),
          e.classList.toggle('cdk-touch-focused', i === 'touch'),
          e.classList.toggle('cdk-keyboard-focused', i === 'keyboard'),
          e.classList.toggle('cdk-mouse-focused', i === 'mouse'),
          e.classList.toggle('cdk-program-focused', i === 'program');
      }
      _setOrigin(e, i = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = e),
            (this._originFromTouchInteraction = e === 'touch' && i),
            this._detectionMode === Ve.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let o = this._originFromTouchInteraction ? Xn : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), o);
          }
        });
      }
      _onFocus(e, i) {
        let o = this._elementInfo.get(i),
          a = lt(e);
        !o ||
          (!o.checkChildren && i !== a) ||
          this._originChanged(i, this._getFocusOrigin(a), o);
      }
      _onBlur(e, i) {
        let o = this._elementInfo.get(i);
        !o ||
          (o.checkChildren &&
            e.relatedTarget instanceof Node &&
            i.contains(e.relatedTarget)) ||
          (this._setClasses(i), this._emitOrigin(o, null));
      }
      _emitOrigin(e, i) {
        e.subject.observers.length && this._ngZone.run(() => e.subject.next(i));
      }
      _registerGlobalListeners(e) {
        if (!this._platform.isBrowser) return;
        let i = e.rootNode,
          o = this._rootNodeFocusListenerCount.get(i) || 0;
        o ||
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener('focus', this._rootNodeFocusAndBlurListener, Ne),
              i.addEventListener(
                'blur',
                this._rootNodeFocusAndBlurListener,
                Ne,
              );
          }),
          this._rootNodeFocusListenerCount.set(i, o + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                'focus',
                this._windowFocusListener,
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(nt(this._stopInputModalityDetector))
              .subscribe((a) => {
                this._setOrigin(a, !0);
              }));
      }
      _removeGlobalListeners(e) {
        let i = e.rootNode;
        if (this._rootNodeFocusListenerCount.has(i)) {
          let o = this._rootNodeFocusListenerCount.get(i);
          o > 1
            ? this._rootNodeFocusListenerCount.set(i, o - 1)
            : (i.removeEventListener(
                'focus',
                this._rootNodeFocusAndBlurListener,
                Ne,
              ),
              i.removeEventListener(
                'blur',
                this._rootNodeFocusAndBlurListener,
                Ne,
              ),
              this._rootNodeFocusListenerCount.delete(i));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            'focus',
            this._windowFocusListener,
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(e, i, o) {
        this._setClasses(e, i),
          this._emitOrigin(o, i),
          (this._lastFocusOrigin = i);
      }
      _getClosestElementsInfo(e) {
        let i = [];
        return (
          this._elementInfo.forEach((o, a) => {
            (a === e || (o.checkChildren && a.contains(e))) && i.push([a, o]);
          }),
          i
        );
      }
      _isLastInteractionFromInputLabel(e) {
        let { _mostRecentTarget: i, mostRecentModality: o } =
          this._inputModalityDetector;
        if (
          o !== 'mouse' ||
          !i ||
          i === e ||
          (e.nodeName !== 'INPUT' && e.nodeName !== 'TEXTAREA') ||
          e.disabled
        )
          return !1;
        let a = e.labels;
        if (a) {
          for (let s = 0; s < a.length; s++) if (a[s].contains(i)) return !0;
        }
        return !1;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(D), f(F), f(Fr), f(z, 8), f(Mr, 8));
    }),
      (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let n = t;
    return n;
  })();
var Dt = (function (n) {
    return (
      (n[(n.NONE = 0)] = 'NONE'),
      (n[(n.BLACK_ON_WHITE = 1)] = 'BLACK_ON_WHITE'),
      (n[(n.WHITE_ON_BLACK = 2)] = 'WHITE_ON_BLACK'),
      n
    );
  })(Dt || {}),
  Kn = 'cdk-high-contrast-black-on-white',
  Qn = 'cdk-high-contrast-white-on-black',
  Ei = 'cdk-high-contrast-active',
  to = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = e),
          (this._document = i),
          (this._breakpointSubscription = E(Yn)
            .observe('(forced-colors: active)')
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return Dt.NONE;
        let e = this._document.createElement('div');
        (e.style.backgroundColor = 'rgb(1,2,3)'),
          (e.style.position = 'absolute'),
          this._document.body.appendChild(e);
        let i = this._document.defaultView || window,
          o = i && i.getComputedStyle ? i.getComputedStyle(e) : null,
          a = ((o && o.backgroundColor) || '').replace(/ /g, '');
        switch ((e.remove(), a)) {
          case 'rgb(0,0,0)':
          case 'rgb(45,50,54)':
          case 'rgb(32,32,32)':
            return Dt.WHITE_ON_BLACK;
          case 'rgb(255,255,255)':
          case 'rgb(255,250,239)':
            return Dt.BLACK_ON_WHITE;
        }
        return Dt.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let e = this._document.body.classList;
          e.remove(Ei, Kn, Qn), (this._hasCheckedHighContrastMode = !0);
          let i = this.getHighContrastMode();
          i === Dt.BLACK_ON_WHITE
            ? e.add(Ei, Kn)
            : i === Dt.WHITE_ON_BLACK && e.add(Ei, Qn);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(F), f(z));
    }),
      (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let n = t;
    return n;
  })();
var Sr = new g('cdk-dir-doc', { providedIn: 'root', factory: Tr });
function Tr() {
  return E(z);
}
var Or =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function Rr(n) {
  let t = n?.toLowerCase() || '';
  return t === 'auto' && typeof navigator < 'u' && navigator?.language
    ? Or.test(navigator.language)
      ? 'rtl'
      : 'ltr'
    : t === 'rtl'
      ? 'rtl'
      : 'ltr';
}
var eo = (() => {
  let t = class t {
    constructor(e) {
      if (((this.value = 'ltr'), (this.change = new Q()), e)) {
        let i = e.body ? e.body.dir : null,
          o = e.documentElement ? e.documentElement.dir : null;
        this.value = Rr(i || o || 'ltr');
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(f(Sr, 8));
  }),
    (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
  let n = t;
  return n;
})();
var Ai = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = y({ type: t })),
    (t.ɵinj = _({}));
  let n = t;
  return n;
})();
function Lr() {
  return !0;
}
var Pr = new g('mat-sanity-checks', { providedIn: 'root', factory: Lr }),
  B = (() => {
    let t = class t {
      constructor(e, i, o) {
        (this._sanityChecks = i),
          (this._document = o),
          (this._hasDoneGlobalChecks = !1),
          e._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(e) {
        return $n()
          ? !1
          : typeof this._sanityChecks == 'boolean'
            ? this._sanityChecks
            : !!this._sanityChecks[e];
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(to), f(Pr, 8), f(z));
    }),
      (t.ɵmod = y({ type: t })),
      (t.ɵinj = _({ imports: [Ai, Ai] }));
    let n = t;
    return n;
  })();
var Pe = class {
  constructor(t, r, e, i, o) {
    (this._defaultMatcher = t),
      (this.ngControl = r),
      (this._parentFormGroup = e),
      (this._parentForm = i),
      (this._stateChanges = o),
      (this.errorState = !1);
  }
  updateErrorState() {
    let t = this.errorState,
      r = this._parentFormGroup || this._parentForm,
      e = this.matcher || this._defaultMatcher,
      i = this.ngControl ? this.ngControl.control : null,
      o = e?.isErrorState(i, r) ?? !1;
    o !== t && ((this.errorState = o), this._stateChanges.next());
  }
};
var mo = (() => {
  let t = class t {
    isErrorState(e, i) {
      return !!(e && e.invalid && (e.touched || (i && i.submitted)));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
  let n = t;
  return n;
})();
var Z = (function (n) {
    return (
      (n[(n.FADING_IN = 0)] = 'FADING_IN'),
      (n[(n.VISIBLE = 1)] = 'VISIBLE'),
      (n[(n.FADING_OUT = 2)] = 'FADING_OUT'),
      (n[(n.HIDDEN = 3)] = 'HIDDEN'),
      n
    );
  })(Z || {}),
  ki = class {
    constructor(t, r, e, i = !1) {
      (this._renderer = t),
        (this.element = r),
        (this.config = e),
        (this._animationForciblyDisabledThroughCss = i),
        (this.state = Z.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  io = vt({ passive: !0, capture: !0 }),
  Si = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (t) => {
          let r = lt(t);
          r &&
            this._events.get(t.type)?.forEach((e, i) => {
              (i === r || i.contains(r)) && e.forEach((o) => o.handleEvent(t));
            });
        });
    }
    addHandler(t, r, e, i) {
      let o = this._events.get(r);
      if (o) {
        let a = o.get(e);
        a ? a.add(i) : o.set(e, new Set([i]));
      } else
        this._events.set(r, new Map([[e, new Set([i])]])),
          t.runOutsideAngular(() => {
            document.addEventListener(r, this._delegateEventHandler, io);
          });
    }
    removeHandler(t, r, e) {
      let i = this._events.get(t);
      if (!i) return;
      let o = i.get(r);
      o &&
        (o.delete(e),
        o.size === 0 && i.delete(r),
        i.size === 0 &&
          (this._events.delete(t),
          document.removeEventListener(t, this._delegateEventHandler, io)));
    }
  },
  no = { enterDuration: 225, exitDuration: 150 },
  jr = 800,
  oo = vt({ passive: !0, capture: !0 }),
  ro = ['mousedown', 'touchstart'],
  ao = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'],
  ee = class ee {
    constructor(t, r, e, i) {
      (this._target = t),
        (this._ngZone = r),
        (this._platform = i),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        i.isBrowser && (this._containerElement = it(e));
    }
    fadeInRipple(t, r, e = {}) {
      let i = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        o = v(v({}, no), e.animation);
      e.centered && ((t = i.left + i.width / 2), (r = i.top + i.height / 2));
      let a = e.radius || zr(t, r, i),
        s = t - i.left,
        d = r - i.top,
        h = o.enterDuration,
        p = document.createElement('div');
      p.classList.add('mat-ripple-element'),
        (p.style.left = `${s - a}px`),
        (p.style.top = `${d - a}px`),
        (p.style.height = `${a * 2}px`),
        (p.style.width = `${a * 2}px`),
        e.color != null && (p.style.backgroundColor = e.color),
        (p.style.transitionDuration = `${h}ms`),
        this._containerElement.appendChild(p);
      let L = window.getComputedStyle(p),
        oe = L.transitionProperty,
        Ft = L.transitionDuration,
        Mt =
          oe === 'none' ||
          Ft === '0s' ||
          Ft === '0s, 0s' ||
          (i.width === 0 && i.height === 0),
        Y = new ki(this, p, e, Mt);
      (p.style.transform = 'scale3d(1, 1, 1)'),
        (Y.state = Z.FADING_IN),
        e.persistent || (this._mostRecentTransientRipple = Y);
      let K = null;
      return (
        !Mt &&
          (h || o.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let Vi = () => {
                K && (K.fallbackTimer = null),
                  clearTimeout(Li),
                  this._finishRippleTransition(Y);
              },
              Qe = () => this._destroyRipple(Y),
              Li = setTimeout(Qe, h + 100);
            p.addEventListener('transitionend', Vi),
              p.addEventListener('transitioncancel', Qe),
              (K = {
                onTransitionEnd: Vi,
                onTransitionCancel: Qe,
                fallbackTimer: Li,
              });
          }),
        this._activeRipples.set(Y, K),
        (Mt || !h) && this._finishRippleTransition(Y),
        Y
      );
    }
    fadeOutRipple(t) {
      if (t.state === Z.FADING_OUT || t.state === Z.HIDDEN) return;
      let r = t.element,
        e = v(v({}, no), t.config.animation);
      (r.style.transitionDuration = `${e.exitDuration}ms`),
        (r.style.opacity = '0'),
        (t.state = Z.FADING_OUT),
        (t._animationForciblyDisabledThroughCss || !e.exitDuration) &&
          this._finishRippleTransition(t);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((t) => t.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((t) => {
        t.config.persistent || t.fadeOut();
      });
    }
    setupTriggerEvents(t) {
      let r = it(t);
      !this._platform.isBrowser ||
        !r ||
        r === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = r),
        ro.forEach((e) => {
          ee._eventManager.addHandler(this._ngZone, e, r, this);
        }));
    }
    handleEvent(t) {
      t.type === 'mousedown'
        ? this._onMousedown(t)
        : t.type === 'touchstart'
          ? this._onTouchStart(t)
          : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            ao.forEach((r) => {
              this._triggerElement.addEventListener(r, this, oo);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(t) {
      t.state === Z.FADING_IN
        ? this._startFadeOutTransition(t)
        : t.state === Z.FADING_OUT && this._destroyRipple(t);
    }
    _startFadeOutTransition(t) {
      let r = t === this._mostRecentTransientRipple,
        { persistent: e } = t.config;
      (t.state = Z.VISIBLE), !e && (!r || !this._isPointerDown) && t.fadeOut();
    }
    _destroyRipple(t) {
      let r = this._activeRipples.get(t) ?? null;
      this._activeRipples.delete(t),
        this._activeRipples.size || (this._containerRect = null),
        t === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (t.state = Z.HIDDEN),
        r !== null &&
          (t.element.removeEventListener('transitionend', r.onTransitionEnd),
          t.element.removeEventListener(
            'transitioncancel',
            r.onTransitionCancel,
          ),
          r.fallbackTimer !== null && clearTimeout(r.fallbackTimer)),
        t.element.remove();
    }
    _onMousedown(t) {
      let r = Ci(t),
        e =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + jr;
      !this._target.rippleDisabled &&
        !r &&
        !e &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
    }
    _onTouchStart(t) {
      if (!this._target.rippleDisabled && !Di(t)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let r = t.changedTouches;
        if (r)
          for (let e = 0; e < r.length; e++)
            this.fadeInRipple(
              r[e].clientX,
              r[e].clientY,
              this._target.rippleConfig,
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((t) => {
          let r =
            t.state === Z.VISIBLE ||
            (t.config.terminateOnPointerUp && t.state === Z.FADING_IN);
          !t.config.persistent && r && t.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let t = this._triggerElement;
      t &&
        (ro.forEach((r) => ee._eventManager.removeHandler(r, t, this)),
        this._pointerUpEventsRegistered &&
          (ao.forEach((r) => t.removeEventListener(r, this, oo)),
          (this._pointerUpEventsRegistered = !1)));
    }
  };
ee._eventManager = new Si();
var Ti = ee;
function zr(n, t, r) {
  let e = Math.max(Math.abs(n - r.left), Math.abs(n - r.right)),
    i = Math.max(Math.abs(t - r.top), Math.abs(t - r.bottom));
  return Math.sqrt(e * e + i * i);
}
var uo = new g('mat-ripple-global-options'),
  Br = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        e && this.fadeOutAllNonPersistent(),
          (this._disabled = e),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(e) {
        (this._trigger = e), this._setupTriggerEventsIfEnabled();
      }
      constructor(e, i, o, a, s) {
        (this._elementRef = e),
          (this._animationMode = s),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = a || {}),
          (this._rippleRenderer = new Ti(this, i, e, o));
      }
      ngOnInit() {
        (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: v(
            v(
              v({}, this._globalOptions.animation),
              this._animationMode === 'NoopAnimations'
                ? { enterDuration: 0, exitDuration: 0 }
                : {},
            ),
            this.animation,
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled &&
          this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(e, i = 0, o) {
        return typeof e == 'number'
          ? this._rippleRenderer.fadeInRipple(
              e,
              i,
              v(v({}, this.rippleConfig), o),
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              v(v({}, this.rippleConfig), e),
            );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(l(C), l(D), l(F), l(uo, 8), l(_t, 8));
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [
          ['', 'mat-ripple', ''],
          ['', 'matRipple', ''],
        ],
        hostAttrs: [1, 'mat-ripple'],
        hostVars: 2,
        hostBindings: function (i, o) {
          i & 2 && M('mat-ripple-unbounded', o.unbounded);
        },
        inputs: {
          color: [0, 'matRippleColor', 'color'],
          unbounded: [0, 'matRippleUnbounded', 'unbounded'],
          centered: [0, 'matRippleCentered', 'centered'],
          radius: [0, 'matRippleRadius', 'radius'],
          animation: [0, 'matRippleAnimation', 'animation'],
          disabled: [0, 'matRippleDisabled', 'disabled'],
          trigger: [0, 'matRippleTrigger', 'trigger'],
        },
        exportAs: ['matRipple'],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  ho = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = y({ type: t })),
      (t.ɵinj = _({ imports: [B, B] }));
    let n = t;
    return n;
  })();
var so = { capture: !0 },
  lo = ['focus', 'mousedown', 'mouseenter', 'touchstart'],
  Fi = 'mat-ripple-loader-uninitialized',
  Mi = 'mat-ripple-loader-class-name',
  co = 'mat-ripple-loader-centered',
  Le = 'mat-ripple-loader-disabled',
  po = (() => {
    let t = class t {
      constructor() {
        (this._document = E(z, { optional: !0 })),
          (this._animationMode = E(_t, { optional: !0 })),
          (this._globalRippleOptions = E(uo, { optional: !0 })),
          (this._platform = E(F)),
          (this._ngZone = E(D)),
          (this._hosts = new Map()),
          (this._onInteraction = (e) => {
            let i = lt(e);
            if (i instanceof HTMLElement) {
              let o = i.closest(
                `[${Fi}="${this._globalRippleOptions?.namespace ?? ''}"]`,
              );
              o && this._createRipple(o);
            }
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let e of lo)
              this._document?.addEventListener(e, this._onInteraction, so);
          });
      }
      ngOnDestroy() {
        let e = this._hosts.keys();
        for (let i of e) this.destroyRipple(i);
        for (let i of lo)
          this._document?.removeEventListener(i, this._onInteraction, so);
      }
      configureRipple(e, i) {
        e.setAttribute(Fi, this._globalRippleOptions?.namespace ?? ''),
          (i.className || !e.hasAttribute(Mi)) &&
            e.setAttribute(Mi, i.className || ''),
          i.centered && e.setAttribute(co, ''),
          i.disabled && e.setAttribute(Le, '');
      }
      getRipple(e) {
        return this._hosts.get(e) || this._createRipple(e);
      }
      setDisabled(e, i) {
        let o = this._hosts.get(e);
        if (o) {
          o.disabled = i;
          return;
        }
        i ? e.setAttribute(Le, '') : e.removeAttribute(Le);
      }
      _createRipple(e) {
        if (!this._document) return;
        let i = this._hosts.get(e);
        if (i) return i;
        e.querySelector('.mat-ripple')?.remove();
        let o = this._document.createElement('span');
        o.classList.add('mat-ripple', e.getAttribute(Mi)), e.append(o);
        let a = new Br(
          new C(o),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0,
        );
        return (
          (a._isInitialized = !0),
          (a.trigger = e),
          (a.centered = e.hasAttribute(co)),
          (a.disabled = e.hasAttribute(Le)),
          this.attachRipple(e, a),
          a
        );
      }
      attachRipple(e, i) {
        e.removeAttribute(Fi), this._hosts.set(e, i);
      }
      destroyRipple(e) {
        let i = this._hosts.get(e);
        i && (i.ngOnDestroy(), this._hosts.delete(e));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let n = t;
    return n;
  })();
var Ur =
  '.cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}';
var Gr = ['mat-icon-button', ''],
  $r = ['*'];
var Wr = new g('MAT_BUTTON_CONFIG');
var qr = [
    { attribute: 'mat-button', mdcClasses: ['mdc-button', 'mat-mdc-button'] },
    {
      attribute: 'mat-flat-button',
      mdcClasses: [
        'mdc-button',
        'mdc-button--unelevated',
        'mat-mdc-unelevated-button',
      ],
    },
    {
      attribute: 'mat-raised-button',
      mdcClasses: ['mdc-button', 'mdc-button--raised', 'mat-mdc-raised-button'],
    },
    {
      attribute: 'mat-stroked-button',
      mdcClasses: [
        'mdc-button',
        'mdc-button--outlined',
        'mat-mdc-outlined-button',
      ],
    },
    {
      attribute: 'mat-fab',
      mdcClasses: ['mdc-fab', 'mat-mdc-fab-base', 'mat-mdc-fab'],
    },
    {
      attribute: 'mat-mini-fab',
      mdcClasses: [
        'mdc-fab',
        'mat-mdc-fab-base',
        'mdc-fab--mini',
        'mat-mdc-mini-fab',
      ],
    },
    {
      attribute: 'mat-icon-button',
      mdcClasses: ['mdc-icon-button', 'mat-mdc-icon-button'],
    },
  ],
  Zr = (() => {
    let t = class t {
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(e) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, e);
      }
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(e) {
        (this._disableRipple = e), this._updateRippleDisabled();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = e), this._updateRippleDisabled();
      }
      constructor(e, i, o, a) {
        (this._elementRef = e),
          (this._platform = i),
          (this._ngZone = o),
          (this._animationMode = a),
          (this._focusMonitor = E(Jn)),
          (this._rippleLoader = E(po)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let s = E(Wr, { optional: !0 }),
          d = e.nativeElement,
          h = d.classList;
        (this.disabledInteractive = s?.disabledInteractive ?? !1),
          (this.color = s?.color ?? null),
          this._rippleLoader?.configureRipple(d, {
            className: 'mat-mdc-button-ripple',
          });
        for (let { attribute: p, mdcClasses: L } of qr)
          d.hasAttribute(p) && h.add(...L);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(e = 'program', i) {
        e
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, e, i)
          : this._elementRef.nativeElement.focus(i);
      }
      _getAriaDisabled() {
        return this.ariaDisabled != null
          ? this.ariaDisabled
          : this.disabled && this.disabledInteractive
            ? !0
            : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : !0;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled,
        );
      }
    };
    (t.ɵfac = function (i) {
      tn();
    }),
      (t.ɵdir = x({
        type: t,
        inputs: {
          color: 'color',
          disableRipple: [2, 'disableRipple', 'disableRipple', et],
          disabled: [2, 'disabled', 'disabled', et],
          ariaDisabled: [2, 'aria-disabled', 'ariaDisabled', et],
          disabledInteractive: [
            2,
            'disabledInteractive',
            'disabledInteractive',
            et,
          ],
        },
        features: [ut],
      }));
    let n = t;
    return n;
  })();
var je = (() => {
  let t = class t extends Zr {
    constructor(e, i, o, a) {
      super(e, i, o, a),
        this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
          centered: !0,
        });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(l(C), l(F), l(D), l(_t, 8));
  }),
    (t.ɵcmp = $({
      type: t,
      selectors: [['button', 'mat-icon-button', '']],
      hostVars: 14,
      hostBindings: function (i, o) {
        i & 2 &&
          (S('disabled', o._getDisabledAttribute())(
            'aria-disabled',
            o._getAriaDisabled(),
          ),
          he(o.color ? 'mat-' + o.color : ''),
          M('mat-mdc-button-disabled', o.disabled)(
            'mat-mdc-button-disabled-interactive',
            o.disabledInteractive,
          )('_mat-animation-noopable', o._animationMode === 'NoopAnimations')(
            'mat-unthemed',
            !o.color,
          )('mat-mdc-button-base', !0));
      },
      exportAs: ['matButton'],
      standalone: !0,
      features: [J, W],
      attrs: Gr,
      ngContentSelectors: $r,
      decls: 4,
      vars: 0,
      consts: [
        [1, 'mat-mdc-button-persistent-ripple', 'mdc-icon-button__ripple'],
        [1, 'mat-mdc-focus-indicator'],
        [1, 'mat-mdc-button-touch-target'],
      ],
      template: function (i, o) {
        i & 1 && (ht(), k(0, 'span', 0), N(1), k(2, 'span', 1)(3, 'span', 2));
      },
      styles: [
        '.mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);color:var(--mdc-icon-button-icon-color, var(--mat-app-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',
        Ur,
      ],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let n = t;
  return n;
})();
var ze = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = y({ type: t })),
    (t.ɵinj = _({ imports: [B, ho, B] }));
  let n = t;
  return n;
})();
var Oi = class {
    constructor(t) {
      (this._box = t),
        (this._destroyed = new R()),
        (this._resizeSubject = new R()),
        (this._elementObservables = new Map()),
        typeof ResizeObserver < 'u' &&
          (this._resizeObserver = new ResizeObserver((r) =>
            this._resizeSubject.next(r),
          ));
    }
    observe(t) {
      return (
        this._elementObservables.has(t) ||
          this._elementObservables.set(
            t,
            new ae((r) => {
              let e = this._resizeSubject.subscribe(r);
              return (
                this._resizeObserver?.observe(t, { box: this._box }),
                () => {
                  this._resizeObserver?.unobserve(t),
                    e.unsubscribe(),
                    this._elementObservables.delete(t);
                }
              );
            }).pipe(
              Xe((r) => r.some((e) => e.target === t)),
              Yi({ bufferSize: 1, refCount: !0 }),
              nt(this._destroyed),
            ),
          ),
        this._elementObservables.get(t)
      );
    }
    destroy() {
      this._destroyed.next(),
        this._destroyed.complete(),
        this._resizeSubject.complete(),
        this._elementObservables.clear();
    }
  },
  bo = (() => {
    let t = class t {
      constructor() {
        (this._observers = new Map()),
          (this._ngZone = E(D)),
          typeof ResizeObserver < 'u';
      }
      ngOnDestroy() {
        for (let [, e] of this._observers) e.destroy();
        this._observers.clear(), typeof ResizeObserver < 'u';
      }
      observe(e, i) {
        let o = i?.box || 'content-box';
        return (
          this._observers.has(o) || this._observers.set(o, new Oi(o)),
          this._observers.get(o).observe(e)
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let n = t;
    return n;
  })();
var Yr = ['notch'],
  Kr = ['matFormFieldNotchedOutline', ''],
  Qr = ['*'],
  Xr = ['textField'],
  Jr = ['iconPrefixContainer'],
  ta = ['textPrefixContainer'],
  ea = [
    '*',
    [['mat-label']],
    [
      ['', 'matPrefix', ''],
      ['', 'matIconPrefix', ''],
    ],
    [['', 'matTextPrefix', '']],
    [['', 'matTextSuffix', '']],
    [
      ['', 'matSuffix', ''],
      ['', 'matIconSuffix', ''],
    ],
    [['mat-error'], ['', 'matError', '']],
    [['mat-hint', 3, 'align', 'end']],
    [['mat-hint', 'align', 'end']],
  ],
  ia = [
    '*',
    'mat-label',
    '[matPrefix], [matIconPrefix]',
    '[matTextPrefix]',
    '[matTextSuffix]',
    '[matSuffix], [matIconSuffix]',
    'mat-error, [matError]',
    "mat-hint:not([align='end'])",
    "mat-hint[align='end']",
  ];
function na(n, t) {
  n & 1 && k(0, 'span', 19);
}
function oa(n, t) {
  if (
    (n & 1 && (c(0, 'label', 18), N(1, 1), A(2, na, 1, 0, 'span', 19), m()),
    n & 2)
  ) {
    let r = tt(2);
    w('floating', r._shouldLabelFloat())('monitorResize', r._hasOutline())(
      'id',
      r._labelId,
    ),
      S('for', r._control.disableAutomaticLabeling ? null : r._control.id),
      u(2),
      V(!r.hideRequiredMarker && r._control.required ? 2 : -1);
  }
}
function ra(n, t) {
  if ((n & 1 && A(0, oa, 3, 5, 'label', 18), n & 2)) {
    let r = tt();
    V(r._hasFloatingLabel() ? 0 : -1);
  }
}
function aa(n, t) {
  n & 1 && k(0, 'div', 5);
}
function sa(n, t) {}
function da(n, t) {
  if ((n & 1 && A(0, sa, 0, 0, 'ng-template', 11), n & 2)) {
    tt(2);
    let r = ei(1);
    w('ngTemplateOutlet', r);
  }
}
function la(n, t) {
  if ((n & 1 && (c(0, 'div', 7), A(1, da, 1, 1, null, 11), m()), n & 2)) {
    let r = tt();
    w('matFormFieldNotchedOutlineOpen', r._shouldLabelFloat()),
      u(),
      V(r._forceDisplayInfixLabel() ? -1 : 1);
  }
}
function ca(n, t) {
  n & 1 && (c(0, 'div', 8, 2), N(2, 2), m());
}
function ma(n, t) {
  n & 1 && (c(0, 'div', 9, 3), N(2, 3), m());
}
function ua(n, t) {}
function ha(n, t) {
  if ((n & 1 && A(0, ua, 0, 0, 'ng-template', 11), n & 2)) {
    tt();
    let r = ei(1);
    w('ngTemplateOutlet', r);
  }
}
function pa(n, t) {
  n & 1 && (c(0, 'div', 12), N(1, 4), m());
}
function fa(n, t) {
  n & 1 && (c(0, 'div', 13), N(1, 5), m());
}
function ba(n, t) {
  n & 1 && k(0, 'div', 14);
}
function ga(n, t) {
  if ((n & 1 && (c(0, 'div', 16), N(1, 6), m()), n & 2)) {
    let r = tt();
    w('@transitionMessages', r._subscriptAnimationState);
  }
}
function va(n, t) {
  if ((n & 1 && (c(0, 'mat-hint', 20), b(1), m()), n & 2)) {
    let r = tt(2);
    w('id', r._hintLabelId), u(), yt(r.hintLabel);
  }
}
function _a(n, t) {
  if (
    (n & 1 &&
      (c(0, 'div', 17),
      A(1, va, 2, 2, 'mat-hint', 20),
      N(2, 7),
      k(3, 'div', 21),
      N(4, 8),
      m()),
    n & 2)
  ) {
    let r = tt();
    w('@transitionMessages', r._subscriptAnimationState),
      u(),
      V(r.hintLabel ? 1 : -1);
  }
}
var Ht = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = x({ type: t, selectors: [['mat-label']], standalone: !0 }));
    let n = t;
    return n;
  })(),
  ya = 0,
  Co = new g('MatError'),
  He = (() => {
    let t = class t {
      constructor(e, i) {
        (this.id = `mat-mdc-error-${ya++}`),
          e || i.nativeElement.setAttribute('aria-live', 'polite');
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(ce('aria-live'), l(C));
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [['mat-error'], ['', 'matError', '']],
        hostAttrs: [
          'aria-atomic',
          'true',
          1,
          'mat-mdc-form-field-error',
          'mat-mdc-form-field-bottom-align',
        ],
        hostVars: 1,
        hostBindings: function (i, o) {
          i & 2 && Ot('id', o.id);
        },
        inputs: { id: 'id' },
        standalone: !0,
        features: [H([{ provide: Co, useExisting: t }])],
      }));
    let n = t;
    return n;
  })(),
  xa = 0,
  go = (() => {
    let t = class t {
      constructor() {
        (this.align = 'start'), (this.id = `mat-mdc-hint-${xa++}`);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [['mat-hint']],
        hostAttrs: [
          1,
          'mat-mdc-form-field-hint',
          'mat-mdc-form-field-bottom-align',
        ],
        hostVars: 4,
        hostBindings: function (i, o) {
          i & 2 &&
            (Ot('id', o.id),
            S('align', null),
            M('mat-mdc-form-field-hint-end', o.align === 'end'));
        },
        inputs: { align: 'align', id: 'id' },
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  wa = new g('MatPrefix');
var Do = new g('MatSuffix'),
  Ue = (() => {
    let t = class t {
      constructor() {
        this._isText = !1;
      }
      set _isTextSelector(e) {
        this._isText = !0;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [
          ['', 'matSuffix', ''],
          ['', 'matIconSuffix', ''],
          ['', 'matTextSuffix', ''],
        ],
        inputs: { _isTextSelector: [0, 'matTextSuffix', '_isTextSelector'] },
        standalone: !0,
        features: [H([{ provide: Do, useExisting: t }])],
      }));
    let n = t;
    return n;
  })(),
  Ao = new g('FloatingLabelParent'),
  vo = (() => {
    let t = class t {
      get floating() {
        return this._floating;
      }
      set floating(e) {
        (this._floating = e), this.monitorResize && this._handleResize();
      }
      get monitorResize() {
        return this._monitorResize;
      }
      set monitorResize(e) {
        (this._monitorResize = e),
          this._monitorResize
            ? this._subscribeToResize()
            : this._resizeSubscription.unsubscribe();
      }
      constructor(e) {
        (this._elementRef = e),
          (this._floating = !1),
          (this._monitorResize = !1),
          (this._resizeObserver = E(bo)),
          (this._ngZone = E(D)),
          (this._parent = E(Ao)),
          (this._resizeSubscription = new Ut());
      }
      ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
      }
      getWidth() {
        return Ia(this._elementRef.nativeElement);
      }
      get element() {
        return this._elementRef.nativeElement;
      }
      _handleResize() {
        setTimeout(() => this._parent._handleLabelResized());
      }
      _subscribeToResize() {
        this._resizeSubscription.unsubscribe(),
          this._ngZone.runOutsideAngular(() => {
            this._resizeSubscription = this._resizeObserver
              .observe(this._elementRef.nativeElement, { box: 'border-box' })
              .subscribe(() => this._handleResize());
          });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(l(C));
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [['label', 'matFormFieldFloatingLabel', '']],
        hostAttrs: [1, 'mdc-floating-label', 'mat-mdc-floating-label'],
        hostVars: 2,
        hostBindings: function (i, o) {
          i & 2 && M('mdc-floating-label--float-above', o.floating);
        },
        inputs: { floating: 'floating', monitorResize: 'monitorResize' },
        standalone: !0,
      }));
    let n = t;
    return n;
  })();
function Ia(n) {
  let t = n;
  if (t.offsetParent !== null) return t.scrollWidth;
  let r = t.cloneNode(!0);
  r.style.setProperty('position', 'absolute'),
    r.style.setProperty('transform', 'translate(-9999px, -9999px)'),
    document.documentElement.appendChild(r);
  let e = r.scrollWidth;
  return r.remove(), e;
}
var _o = 'mdc-line-ripple--active',
  Be = 'mdc-line-ripple--deactivating',
  yo = (() => {
    let t = class t {
      constructor(e, i) {
        (this._elementRef = e),
          (this._handleTransitionEnd = (o) => {
            let a = this._elementRef.nativeElement.classList,
              s = a.contains(Be);
            o.propertyName === 'opacity' && s && a.remove(_o, Be);
          }),
          i.runOutsideAngular(() => {
            e.nativeElement.addEventListener(
              'transitionend',
              this._handleTransitionEnd,
            );
          });
      }
      activate() {
        let e = this._elementRef.nativeElement.classList;
        e.remove(Be), e.add(_o);
      }
      deactivate() {
        this._elementRef.nativeElement.classList.add(Be);
      }
      ngOnDestroy() {
        this._elementRef.nativeElement.removeEventListener(
          'transitionend',
          this._handleTransitionEnd,
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(l(C), l(D));
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [['div', 'matFormFieldLineRipple', '']],
        hostAttrs: [1, 'mdc-line-ripple'],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  xo = (() => {
    let t = class t {
      constructor(e, i) {
        (this._elementRef = e), (this._ngZone = i), (this.open = !1);
      }
      ngAfterViewInit() {
        let e = this._elementRef.nativeElement.querySelector(
          '.mdc-floating-label',
        );
        e
          ? (this._elementRef.nativeElement.classList.add(
              'mdc-notched-outline--upgraded',
            ),
            typeof requestAnimationFrame == 'function' &&
              ((e.style.transitionDuration = '0s'),
              this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => (e.style.transitionDuration = ''));
              })))
          : this._elementRef.nativeElement.classList.add(
              'mdc-notched-outline--no-label',
            );
      }
      _setNotchWidth(e) {
        !this.open || !e
          ? (this._notch.nativeElement.style.width = '')
          : (this._notch.nativeElement.style.width = `calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(l(C), l(D));
    }),
      (t.ɵcmp = $({
        type: t,
        selectors: [['div', 'matFormFieldNotchedOutline', '']],
        viewQuery: function (i, o) {
          if ((i & 1 && at(Yr, 5), i & 2)) {
            let a;
            P((a = j())) && (o._notch = a.first);
          }
        },
        hostAttrs: [1, 'mdc-notched-outline'],
        hostVars: 2,
        hostBindings: function (i, o) {
          i & 2 && M('mdc-notched-outline--notched', o.open);
        },
        inputs: { open: [0, 'matFormFieldNotchedOutlineOpen', 'open'] },
        standalone: !0,
        features: [W],
        attrs: Kr,
        ngContentSelectors: Qr,
        decls: 5,
        vars: 0,
        consts: [
          ['notch', ''],
          [1, 'mat-mdc-notch-piece', 'mdc-notched-outline__leading'],
          [1, 'mat-mdc-notch-piece', 'mdc-notched-outline__notch'],
          [1, 'mat-mdc-notch-piece', 'mdc-notched-outline__trailing'],
        ],
        template: function (i, o) {
          i & 1 &&
            (ht(),
            k(0, 'div', 1),
            c(1, 'div', 2, 0),
            N(3),
            m(),
            k(4, 'div', 3));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Ea = {
    transitionMessages: un('transitionMessages', [
      pn('enter', oi({ opacity: 1, transform: 'translateY(0%)' })),
      fn('void => enter', [
        oi({ opacity: 0, transform: 'translateY(-5px)' }),
        hn('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
      ]),
    ]),
  },
  Ri = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = x({ type: t }));
    let n = t;
    return n;
  })();
var Ni = new g('MatFormField'),
  Ca = new g('MAT_FORM_FIELD_DEFAULT_OPTIONS'),
  wo = 0,
  Io = 'fill',
  Da = 'auto',
  Eo = 'fixed',
  Aa = 'translateY(-50%)',
  Ge = (() => {
    let t = class t {
      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      set hideRequiredMarker(e) {
        this._hideRequiredMarker = Et(e);
      }
      get floatLabel() {
        return this._floatLabel || this._defaults?.floatLabel || Da;
      }
      set floatLabel(e) {
        e !== this._floatLabel &&
          ((this._floatLabel = e), this._changeDetectorRef.markForCheck());
      }
      get appearance() {
        return this._appearance;
      }
      set appearance(e) {
        let i = this._appearance,
          o = e || this._defaults?.appearance || Io;
        (this._appearance = o),
          this._appearance === 'outline' &&
            this._appearance !== i &&
            (this._needsOutlineLabelOffsetUpdate = !0);
      }
      get subscriptSizing() {
        return this._subscriptSizing || this._defaults?.subscriptSizing || Eo;
      }
      set subscriptSizing(e) {
        this._subscriptSizing = e || this._defaults?.subscriptSizing || Eo;
      }
      get hintLabel() {
        return this._hintLabel;
      }
      set hintLabel(e) {
        (this._hintLabel = e), this._processHints();
      }
      get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
      }
      set _control(e) {
        this._explicitFormFieldControl = e;
      }
      constructor(e, i, o, a, s, d, h, p) {
        (this._elementRef = e),
          (this._changeDetectorRef = i),
          (this._dir = a),
          (this._platform = s),
          (this._defaults = d),
          (this._animationMode = h),
          (this._labelChild = nn(Ht)),
          (this._hideRequiredMarker = !1),
          (this.color = 'primary'),
          (this._appearance = Io),
          (this._subscriptSizing = null),
          (this._hintLabel = ''),
          (this._hasIconPrefix = !1),
          (this._hasTextPrefix = !1),
          (this._hasIconSuffix = !1),
          (this._hasTextSuffix = !1),
          (this._labelId = `mat-mdc-form-field-label-${wo++}`),
          (this._hintLabelId = `mat-mdc-hint-${wo++}`),
          (this._subscriptAnimationState = ''),
          (this._destroyed = new R()),
          (this._isFocused = null),
          (this._needsOutlineLabelOffsetUpdate = !1),
          (this._previousControl = null),
          (this._injector = E(me)),
          (this.getLabelId = st(() =>
            this._hasFloatingLabel() ? this._labelId : null,
          )),
          (this._hasFloatingLabel = st(() => !!this._labelChild())),
          d &&
            (d.appearance && (this.appearance = d.appearance),
            (this._hideRequiredMarker = !!d?.hideRequiredMarker),
            d.color && (this.color = d.color));
      }
      ngAfterViewInit() {
        this._updateFocusState(),
          (this._subscriptAnimationState = 'enter'),
          this._changeDetectorRef.detectChanges();
      }
      ngAfterContentInit() {
        this._assertFormFieldControl(),
          this._initializeSubscript(),
          this._initializePrefixAndSuffix(),
          this._initializeOutlineLabelOffsetSubscriptions();
      }
      ngAfterContentChecked() {
        this._assertFormFieldControl(),
          this._control !== this._previousControl &&
            (this._initializeControl(this._previousControl),
            (this._previousControl = this._control));
      }
      ngOnDestroy() {
        this._stateChanges?.unsubscribe(),
          this._valueChanges?.unsubscribe(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
      }
      _animateAndLockLabel() {
        this._hasFloatingLabel() && (this.floatLabel = 'always');
      }
      _initializeControl(e) {
        let i = this._control,
          o = 'mat-mdc-form-field-type-';
        e && this._elementRef.nativeElement.classList.remove(o + e.controlType),
          i.controlType &&
            this._elementRef.nativeElement.classList.add(o + i.controlType),
          this._stateChanges?.unsubscribe(),
          (this._stateChanges = i.stateChanges.subscribe(() => {
            this._updateFocusState(),
              this._syncDescribedByIds(),
              this._changeDetectorRef.markForCheck();
          })),
          this._valueChanges?.unsubscribe(),
          i.ngControl &&
            i.ngControl.valueChanges &&
            (this._valueChanges = i.ngControl.valueChanges
              .pipe(nt(this._destroyed))
              .subscribe(() => this._changeDetectorRef.markForCheck()));
      }
      _checkPrefixAndSuffixTypes() {
        (this._hasIconPrefix = !!this._prefixChildren.find((e) => !e._isText)),
          (this._hasTextPrefix = !!this._prefixChildren.find((e) => e._isText)),
          (this._hasIconSuffix = !!this._suffixChildren.find(
            (e) => !e._isText,
          )),
          (this._hasTextSuffix = !!this._suffixChildren.find((e) => e._isText));
      }
      _initializePrefixAndSuffix() {
        this._checkPrefixAndSuffixTypes(),
          Gi(
            this._prefixChildren.changes,
            this._suffixChildren.changes,
          ).subscribe(() => {
            this._checkPrefixAndSuffixTypes(),
              this._changeDetectorRef.markForCheck();
          });
      }
      _initializeSubscript() {
        this._hintChildren.changes.subscribe(() => {
          this._processHints(), this._changeDetectorRef.markForCheck();
        }),
          this._errorChildren.changes.subscribe(() => {
            this._syncDescribedByIds(), this._changeDetectorRef.markForCheck();
          }),
          this._validateHints(),
          this._syncDescribedByIds();
      }
      _assertFormFieldControl() {
        this._control;
      }
      _updateFocusState() {
        this._control.focused && !this._isFocused
          ? ((this._isFocused = !0), this._lineRipple?.activate())
          : !this._control.focused &&
            (this._isFocused || this._isFocused === null) &&
            ((this._isFocused = !1), this._lineRipple?.deactivate()),
          this._textField?.nativeElement.classList.toggle(
            'mdc-text-field--focused',
            this._control.focused,
          );
      }
      _initializeOutlineLabelOffsetSubscriptions() {
        this._prefixChildren.changes.subscribe(
          () => (this._needsOutlineLabelOffsetUpdate = !0),
        ),
          en(
            () => {
              this._needsOutlineLabelOffsetUpdate &&
                ((this._needsOutlineLabelOffsetUpdate = !1),
                this._updateOutlineLabelOffset());
            },
            { injector: this._injector },
          ),
          this._dir.change
            .pipe(nt(this._destroyed))
            .subscribe(() => (this._needsOutlineLabelOffsetUpdate = !0));
      }
      _shouldAlwaysFloat() {
        return this.floatLabel === 'always';
      }
      _hasOutline() {
        return this.appearance === 'outline';
      }
      _forceDisplayInfixLabel() {
        return (
          !this._platform.isBrowser &&
          this._prefixChildren.length &&
          !this._shouldLabelFloat()
        );
      }
      _shouldLabelFloat() {
        return this._hasFloatingLabel()
          ? this._control.shouldLabelFloat || this._shouldAlwaysFloat()
          : !1;
      }
      _shouldForward(e) {
        let i = this._control ? this._control.ngControl : null;
        return i && i[e];
      }
      _getDisplayedMessages() {
        return this._errorChildren &&
          this._errorChildren.length > 0 &&
          this._control.errorState
          ? 'error'
          : 'hint';
      }
      _handleLabelResized() {
        this._refreshOutlineNotchWidth();
      }
      _refreshOutlineNotchWidth() {
        !this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()
          ? this._notchedOutline?._setNotchWidth(0)
          : this._notchedOutline?._setNotchWidth(
              this._floatingLabel.getWidth(),
            );
      }
      _processHints() {
        this._validateHints(), this._syncDescribedByIds();
      }
      _validateHints() {
        this._hintChildren;
      }
      _syncDescribedByIds() {
        if (this._control) {
          let e = [];
          if (
            (this._control.userAriaDescribedBy &&
              typeof this._control.userAriaDescribedBy == 'string' &&
              e.push(...this._control.userAriaDescribedBy.split(' ')),
            this._getDisplayedMessages() === 'hint')
          ) {
            let i = this._hintChildren
                ? this._hintChildren.find((a) => a.align === 'start')
                : null,
              o = this._hintChildren
                ? this._hintChildren.find((a) => a.align === 'end')
                : null;
            i ? e.push(i.id) : this._hintLabel && e.push(this._hintLabelId),
              o && e.push(o.id);
          } else
            this._errorChildren &&
              e.push(...this._errorChildren.map((i) => i.id));
          this._control.setDescribedByIds(e);
        }
      }
      _updateOutlineLabelOffset() {
        if (!this._hasOutline() || !this._floatingLabel) return;
        let e = this._floatingLabel.element;
        if (!(this._iconPrefixContainer || this._textPrefixContainer)) {
          e.style.transform = '';
          return;
        }
        if (!this._isAttachedToDom()) {
          this._needsOutlineLabelOffsetUpdate = !0;
          return;
        }
        let i = this._iconPrefixContainer?.nativeElement,
          o = this._textPrefixContainer?.nativeElement,
          a = i?.getBoundingClientRect().width ?? 0,
          s = o?.getBoundingClientRect().width ?? 0,
          d = this._dir.value === 'rtl' ? '-1' : '1',
          h = `${a + s}px`,
          L = `calc(${d} * (${h} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;
        e.style.transform = `var(
        --mat-mdc-form-field-label-transform,
        ${Aa} translateX(${L})
    )`;
      }
      _isAttachedToDom() {
        let e = this._elementRef.nativeElement;
        if (e.getRootNode) {
          let i = e.getRootNode();
          return i && i !== e;
        }
        return document.documentElement.contains(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        l(C),
        l(pe),
        l(D),
        l(eo),
        l(F),
        l(Ca, 8),
        l(_t, 8),
        l(z),
      );
    }),
      (t.ɵcmp = $({
        type: t,
        selectors: [['mat-form-field']],
        contentQueries: function (i, o, a) {
          if (
            (i & 1 &&
              (on(a, o._labelChild, Ht, 5),
              Rt(a, Ri, 5),
              Rt(a, wa, 5),
              Rt(a, Do, 5),
              Rt(a, Co, 5),
              Rt(a, go, 5)),
            i & 2)
          ) {
            rn();
            let s;
            P((s = j())) && (o._formFieldControl = s.first),
              P((s = j())) && (o._prefixChildren = s),
              P((s = j())) && (o._suffixChildren = s),
              P((s = j())) && (o._errorChildren = s),
              P((s = j())) && (o._hintChildren = s);
          }
        },
        viewQuery: function (i, o) {
          if (
            (i & 1 &&
              (at(Xr, 5),
              at(Jr, 5),
              at(ta, 5),
              at(vo, 5),
              at(xo, 5),
              at(yo, 5)),
            i & 2)
          ) {
            let a;
            P((a = j())) && (o._textField = a.first),
              P((a = j())) && (o._iconPrefixContainer = a.first),
              P((a = j())) && (o._textPrefixContainer = a.first),
              P((a = j())) && (o._floatingLabel = a.first),
              P((a = j())) && (o._notchedOutline = a.first),
              P((a = j())) && (o._lineRipple = a.first);
          }
        },
        hostAttrs: [1, 'mat-mdc-form-field'],
        hostVars: 42,
        hostBindings: function (i, o) {
          i & 2 &&
            M('mat-mdc-form-field-label-always-float', o._shouldAlwaysFloat())(
              'mat-mdc-form-field-has-icon-prefix',
              o._hasIconPrefix,
            )('mat-mdc-form-field-has-icon-suffix', o._hasIconSuffix)(
              'mat-form-field-invalid',
              o._control.errorState,
            )('mat-form-field-disabled', o._control.disabled)(
              'mat-form-field-autofilled',
              o._control.autofilled,
            )(
              'mat-form-field-no-animations',
              o._animationMode === 'NoopAnimations',
            )('mat-form-field-appearance-fill', o.appearance == 'fill')(
              'mat-form-field-appearance-outline',
              o.appearance == 'outline',
            )(
              'mat-form-field-hide-placeholder',
              o._hasFloatingLabel() && !o._shouldLabelFloat(),
            )('mat-focused', o._control.focused)(
              'mat-primary',
              o.color !== 'accent' && o.color !== 'warn',
            )('mat-accent', o.color === 'accent')(
              'mat-warn',
              o.color === 'warn',
            )('ng-untouched', o._shouldForward('untouched'))(
              'ng-touched',
              o._shouldForward('touched'),
            )('ng-pristine', o._shouldForward('pristine'))(
              'ng-dirty',
              o._shouldForward('dirty'),
            )('ng-valid', o._shouldForward('valid'))(
              'ng-invalid',
              o._shouldForward('invalid'),
            )('ng-pending', o._shouldForward('pending'));
        },
        inputs: {
          hideRequiredMarker: 'hideRequiredMarker',
          color: 'color',
          floatLabel: 'floatLabel',
          appearance: 'appearance',
          subscriptSizing: 'subscriptSizing',
          hintLabel: 'hintLabel',
        },
        exportAs: ['matFormField'],
        standalone: !0,
        features: [
          H([
            { provide: Ni, useExisting: t },
            { provide: Ao, useExisting: t },
          ]),
          W,
        ],
        ngContentSelectors: ia,
        decls: 18,
        vars: 21,
        consts: [
          ['labelTemplate', ''],
          ['textField', ''],
          ['iconPrefixContainer', ''],
          ['textPrefixContainer', ''],
          [1, 'mat-mdc-text-field-wrapper', 'mdc-text-field', 3, 'click'],
          [1, 'mat-mdc-form-field-focus-overlay'],
          [1, 'mat-mdc-form-field-flex'],
          [
            'matFormFieldNotchedOutline',
            '',
            3,
            'matFormFieldNotchedOutlineOpen',
          ],
          [1, 'mat-mdc-form-field-icon-prefix'],
          [1, 'mat-mdc-form-field-text-prefix'],
          [1, 'mat-mdc-form-field-infix'],
          [3, 'ngTemplateOutlet'],
          [1, 'mat-mdc-form-field-text-suffix'],
          [1, 'mat-mdc-form-field-icon-suffix'],
          ['matFormFieldLineRipple', ''],
          [
            1,
            'mat-mdc-form-field-subscript-wrapper',
            'mat-mdc-form-field-bottom-align',
          ],
          [1, 'mat-mdc-form-field-error-wrapper'],
          [1, 'mat-mdc-form-field-hint-wrapper'],
          [
            'matFormFieldFloatingLabel',
            '',
            3,
            'floating',
            'monitorResize',
            'id',
          ],
          [
            'aria-hidden',
            'true',
            1,
            'mat-mdc-form-field-required-marker',
            'mdc-floating-label--required',
          ],
          [3, 'id'],
          [1, 'mat-mdc-form-field-hint-spacer'],
        ],
        template: function (i, o) {
          if (i & 1) {
            let a = Tt();
            ht(ea),
              A(0, ra, 1, 1, 'ng-template', null, 0, an),
              c(2, 'div', 4, 1),
              T('click', function (d) {
                return ot(a), rt(o._control.onContainerClick(d));
              }),
              A(4, aa, 1, 0, 'div', 5),
              c(5, 'div', 6),
              A(6, la, 2, 2, 'div', 7)(7, ca, 3, 0, 'div', 8)(
                8,
                ma,
                3,
                0,
                'div',
                9,
              ),
              c(9, 'div', 10),
              A(10, ha, 1, 1, null, 11),
              N(11),
              m(),
              A(12, pa, 2, 0, 'div', 12)(13, fa, 2, 0, 'div', 13),
              m(),
              A(14, ba, 1, 0, 'div', 14),
              m(),
              c(15, 'div', 15),
              A(16, ga, 2, 1, 'div', 16)(17, _a, 5, 2, 'div', 17),
              m();
          }
          if (i & 2) {
            let a;
            u(2),
              M('mdc-text-field--filled', !o._hasOutline())(
                'mdc-text-field--outlined',
                o._hasOutline(),
              )('mdc-text-field--no-label', !o._hasFloatingLabel())(
                'mdc-text-field--disabled',
                o._control.disabled,
              )('mdc-text-field--invalid', o._control.errorState),
              u(2),
              V(!o._hasOutline() && !o._control.disabled ? 4 : -1),
              u(2),
              V(o._hasOutline() ? 6 : -1),
              u(),
              V(o._hasIconPrefix ? 7 : -1),
              u(),
              V(o._hasTextPrefix ? 8 : -1),
              u(2),
              V(!o._hasOutline() || o._forceDisplayInfixLabel() ? 10 : -1),
              u(2),
              V(o._hasTextSuffix ? 12 : -1),
              u(),
              V(o._hasIconSuffix ? 13 : -1),
              u(),
              V(o._hasOutline() ? -1 : 14),
              u(),
              M(
                'mat-mdc-form-field-subscript-dynamic-size',
                o.subscriptSizing === 'dynamic',
              ),
              u(),
              V(
                (a = o._getDisplayedMessages()) === 'error'
                  ? 16
                  : a === 'hint'
                    ? 17
                    : -1,
              );
          }
        },
        dependencies: [vo, xo, dn, yo, go],
        styles: [
          '.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color, var(--mat-app-on-surface));caret-color:var(--mdc-filled-text-field-caret-color, var(--mat-app-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color, var(--mat-app-on-surface));caret-color:var(--mdc-outlined-text-field-caret-color, var(--mat-app-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--disabled .cdk-high-contrast-active .mdc-text-field__input{background-color:Window}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mdc-filled-text-field-container-shape, var(--mat-app-corner-extra-small-top));border-top-right-radius:var(--mdc-filled-text-field-container-shape, var(--mat-app-corner-extra-small-top))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color, var(--mat-app-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--outlined{height:56px;overflow:visible;padding-left:16px;padding-right:16px}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)));padding-left:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)) + 4px);padding-left:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)))}}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.cdk-high-contrast-active .mdc-text-field--disabled .mdc-floating-label{z-index:1}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mdc-filled-text-field-label-text-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mdc-filled-text-field-focus-label-text-color, var(--mat-app-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mdc-filled-text-field-hover-label-text-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mdc-filled-text-field-error-label-text-color, var(--mat-app-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mdc-filled-text-field-error-focus-label-text-color, var(--mat-app-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mdc-filled-text-field-error-hover-label-text-color, var(--mat-app-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font, var(--mat-app-body-large-font));font-size:var(--mdc-filled-text-field-label-text-size, var(--mat-app-body-large-size));font-weight:var(--mdc-filled-text-field-label-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mdc-filled-text-field-label-text-tracking, var(--mat-app-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mdc-outlined-text-field-label-text-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mdc-outlined-text-field-focus-label-text-color, var(--mat-app-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mdc-outlined-text-field-hover-label-text-color, var(--mat-app-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mdc-outlined-text-field-error-label-text-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mdc-outlined-text-field-error-focus-label-text-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mdc-outlined-text-field-error-hover-label-text-color, var(--mat-app-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font, var(--mat-app-body-large-font));font-size:var(--mdc-outlined-text-field-label-text-size, var(--mat-app-body-large-size));font-weight:var(--mdc-outlined-text-field-label-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mdc-outlined-text-field-label-text-tracking, var(--mat-app-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-outline-color, var(--mat-app-outline));border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-hover-outline-color, var(--mat-app-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-focus-outline-color, var(--mat-app-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-outline-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-hover-outline-color, var(--mat-app-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-focus-outline-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;width:12px;border-top-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)))}}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 24px)}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)))*2)}}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color, var(--mat-app-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color, var(--mat-app-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color, var(--mat-app-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color, var(--mat-app-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color, var(--mat-app-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-app-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-app-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-app-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-app-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-app-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-app-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-app-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-app-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-app-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-app-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-app-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-app-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-app-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-app-body-large-weight))}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-app-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-app-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-app-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-app-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}',
        ],
        encapsulation: 2,
        data: { animation: [Ea.transitionMessages] },
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  At = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = y({ type: t })),
      (t.ɵinj = _({ imports: [B, pt, Wn, B] }));
    let n = t;
    return n;
  })();
var Mo = vt({ passive: !0 }),
  ko = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = e),
          (this._ngZone = i),
          (this._monitoredElements = new Map());
      }
      monitor(e) {
        if (!this._platform.isBrowser) return ji;
        let i = it(e),
          o = this._monitoredElements.get(i);
        if (o) return o.subject;
        let a = new R(),
          s = 'cdk-text-field-autofilled',
          d = (h) => {
            h.animationName === 'cdk-text-field-autofill-start' &&
            !i.classList.contains(s)
              ? (i.classList.add(s),
                this._ngZone.run(() =>
                  a.next({ target: h.target, isAutofilled: !0 }),
                ))
              : h.animationName === 'cdk-text-field-autofill-end' &&
                i.classList.contains(s) &&
                (i.classList.remove(s),
                this._ngZone.run(() =>
                  a.next({ target: h.target, isAutofilled: !1 }),
                ));
          };
        return (
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener('animationstart', d, Mo),
              i.classList.add('cdk-text-field-autofill-monitored');
          }),
          this._monitoredElements.set(i, {
            subject: a,
            unlisten: () => {
              i.removeEventListener('animationstart', d, Mo);
            },
          }),
          a
        );
      }
      stopMonitoring(e) {
        let i = it(e),
          o = this._monitoredElements.get(i);
        o &&
          (o.unlisten(),
          o.subject.complete(),
          i.classList.remove('cdk-text-field-autofill-monitored'),
          i.classList.remove('cdk-text-field-autofilled'),
          this._monitoredElements.delete(i));
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((e, i) => this.stopMonitoring(i));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(F), f(D));
    }),
      (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let n = t;
    return n;
  })();
var So = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = y({ type: t })),
    (t.ɵinj = _({}));
  let n = t;
  return n;
})();
var Ma = new g('MAT_INPUT_VALUE_ACCESSOR'),
  ka = [
    'button',
    'checkbox',
    'file',
    'hidden',
    'image',
    'radio',
    'range',
    'reset',
    'submit',
  ],
  Sa = 0,
  $e = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = Et(e)),
          this.focused && ((this.focused = !1), this.stateChanges.next());
      }
      get id() {
        return this._id;
      }
      set id(e) {
        this._id = e || this._uid;
      }
      get required() {
        return (
          this._required ??
          this.ngControl?.control?.hasValidator(q.required) ??
          !1
        );
      }
      set required(e) {
        this._required = Et(e);
      }
      get type() {
        return this._type;
      }
      set type(e) {
        (this._type = e || 'text'),
          this._validateType(),
          !this._isTextarea &&
            wi().has(this._type) &&
            (this._elementRef.nativeElement.type = this._type),
          this._ensureWheelDefaultBehavior();
      }
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(e) {
        this._errorStateTracker.matcher = e;
      }
      get value() {
        return this._inputValueAccessor.value;
      }
      set value(e) {
        e !== this.value &&
          ((this._inputValueAccessor.value = e), this.stateChanges.next());
      }
      get readonly() {
        return this._readonly;
      }
      set readonly(e) {
        this._readonly = Et(e);
      }
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(e) {
        this._errorStateTracker.errorState = e;
      }
      constructor(e, i, o, a, s, d, h, p, L, oe) {
        (this._elementRef = e),
          (this._platform = i),
          (this.ngControl = o),
          (this._autofillMonitor = p),
          (this._ngZone = L),
          (this._formField = oe),
          (this._uid = `mat-input-${Sa++}`),
          (this._webkitBlinkWheelListenerAttached = !1),
          (this.focused = !1),
          (this.stateChanges = new R()),
          (this.controlType = 'mat-input'),
          (this.autofilled = !1),
          (this._disabled = !1),
          (this._type = 'text'),
          (this._readonly = !1),
          (this._neverEmptyInputTypes = [
            'date',
            'datetime',
            'datetime-local',
            'month',
            'time',
            'week',
          ].filter((Y) => wi().has(Y))),
          (this._iOSKeyupListener = (Y) => {
            let K = Y.target;
            !K.value &&
              K.selectionStart === 0 &&
              K.selectionEnd === 0 &&
              (K.setSelectionRange(1, 1), K.setSelectionRange(0, 0));
          }),
          (this._webkitBlinkWheelListener = () => {});
        let Ft = this._elementRef.nativeElement,
          Mt = Ft.nodeName.toLowerCase();
        (this._inputValueAccessor = h || Ft),
          (this._previousNativeValue = this.value),
          (this.id = this.id),
          i.IOS &&
            L.runOutsideAngular(() => {
              e.nativeElement.addEventListener('keyup', this._iOSKeyupListener);
            }),
          (this._errorStateTracker = new Pe(d, o, s, a, this.stateChanges)),
          (this._isServer = !this._platform.isBrowser),
          (this._isNativeSelect = Mt === 'select'),
          (this._isTextarea = Mt === 'textarea'),
          (this._isInFormField = !!oe),
          this._isNativeSelect &&
            (this.controlType = Ft.multiple
              ? 'mat-native-select-multiple'
              : 'mat-native-select');
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          this._autofillMonitor
            .monitor(this._elementRef.nativeElement)
            .subscribe((e) => {
              (this.autofilled = e.isAutofilled), this.stateChanges.next();
            });
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete(),
          this._platform.isBrowser &&
            this._autofillMonitor.stopMonitoring(
              this._elementRef.nativeElement,
            ),
          this._platform.IOS &&
            this._elementRef.nativeElement.removeEventListener(
              'keyup',
              this._iOSKeyupListener,
            ),
          this._webkitBlinkWheelListenerAttached &&
            this._elementRef.nativeElement.removeEventListener(
              'wheel',
              this._webkitBlinkWheelListener,
            );
      }
      ngDoCheck() {
        this.ngControl &&
          (this.updateErrorState(),
          this.ngControl.disabled !== null &&
            this.ngControl.disabled !== this.disabled &&
            ((this.disabled = this.ngControl.disabled),
            this.stateChanges.next())),
          this._dirtyCheckNativeValue(),
          this._dirtyCheckPlaceholder();
      }
      focus(e) {
        this._elementRef.nativeElement.focus(e);
      }
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      _focusChanged(e) {
        e !== this.focused && ((this.focused = e), this.stateChanges.next());
      }
      _onInput() {}
      _dirtyCheckNativeValue() {
        let e = this._elementRef.nativeElement.value;
        this._previousNativeValue !== e &&
          ((this._previousNativeValue = e), this.stateChanges.next());
      }
      _dirtyCheckPlaceholder() {
        let e = this._getPlaceholder();
        if (e !== this._previousPlaceholder) {
          let i = this._elementRef.nativeElement;
          (this._previousPlaceholder = e),
            e
              ? i.setAttribute('placeholder', e)
              : i.removeAttribute('placeholder');
        }
      }
      _getPlaceholder() {
        return this.placeholder || null;
      }
      _validateType() {
        ka.indexOf(this._type) > -1;
      }
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      _isBadInput() {
        let e = this._elementRef.nativeElement.validity;
        return e && e.badInput;
      }
      get empty() {
        return (
          !this._isNeverEmpty() &&
          !this._elementRef.nativeElement.value &&
          !this._isBadInput() &&
          !this.autofilled
        );
      }
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          let e = this._elementRef.nativeElement,
            i = e.options[0];
          return (
            this.focused ||
            e.multiple ||
            !this.empty ||
            !!(e.selectedIndex > -1 && i && i.label)
          );
        } else return this.focused || !this.empty;
      }
      setDescribedByIds(e) {
        e.length
          ? this._elementRef.nativeElement.setAttribute(
              'aria-describedby',
              e.join(' '),
            )
          : this._elementRef.nativeElement.removeAttribute('aria-describedby');
      }
      onContainerClick() {
        this.focused || this.focus();
      }
      _isInlineSelect() {
        let e = this._elementRef.nativeElement;
        return this._isNativeSelect && (e.multiple || e.size > 1);
      }
      _ensureWheelDefaultBehavior() {
        !this._webkitBlinkWheelListenerAttached &&
          this._type === 'number' &&
          (this._platform.BLINK || this._platform.WEBKIT) &&
          (this._ngZone.runOutsideAngular(() => {
            this._elementRef.nativeElement.addEventListener(
              'wheel',
              this._webkitBlinkWheelListener,
            );
          }),
          (this._webkitBlinkWheelListenerAttached = !0)),
          this._webkitBlinkWheelListenerAttached &&
            this._type !== 'number' &&
            (this._elementRef.nativeElement.removeEventListener(
              'wheel',
              this._webkitBlinkWheelListener,
            ),
            (this._webkitBlinkWheelListenerAttached = !0));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        l(C),
        l(F),
        l(xt, 10),
        l(vi, 8),
        l(wt, 8),
        l(mo),
        l(Ma, 10),
        l(ko),
        l(D),
        l(Ni, 8),
      );
    }),
      (t.ɵdir = x({
        type: t,
        selectors: [
          ['input', 'matInput', ''],
          ['textarea', 'matInput', ''],
          ['select', 'matNativeControl', ''],
          ['input', 'matNativeControl', ''],
          ['textarea', 'matNativeControl', ''],
        ],
        hostAttrs: [1, 'mat-mdc-input-element'],
        hostVars: 18,
        hostBindings: function (i, o) {
          i & 1 &&
            T('focus', function () {
              return o._focusChanged(!0);
            })('blur', function () {
              return o._focusChanged(!1);
            })('input', function () {
              return o._onInput();
            }),
            i & 2 &&
              (Ot('id', o.id)('disabled', o.disabled)('required', o.required),
              S('name', o.name || null)(
                'readonly',
                (o.readonly && !o._isNativeSelect) || null,
              )('aria-invalid', o.empty && o.required ? null : o.errorState)(
                'aria-required',
                o.required,
              )('id', o.id),
              M('mat-input-server', o._isServer)(
                'mat-mdc-form-field-textarea-control',
                o._isInFormField && o._isTextarea,
              )('mat-mdc-form-field-input-control', o._isInFormField)(
                'mdc-text-field__input',
                o._isInFormField,
              )('mat-mdc-native-select-inline', o._isInlineSelect()));
        },
        inputs: {
          disabled: 'disabled',
          id: 'id',
          placeholder: 'placeholder',
          name: 'name',
          required: 'required',
          type: 'type',
          errorStateMatcher: 'errorStateMatcher',
          userAriaDescribedBy: [0, 'aria-describedby', 'userAriaDescribedBy'],
          value: 'value',
          readonly: 'readonly',
        },
        exportAs: ['matInput'],
        standalone: !0,
        features: [H([{ provide: Ri, useExisting: t }]), kt],
      }));
    let n = t;
    return n;
  })(),
  We = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = y({ type: t })),
      (t.ɵinj = _({ imports: [B, At, At, So, B] }));
    let n = t;
    return n;
  })();
var Ta = ['*'],
  qe;
function Oa() {
  if (qe === void 0 && ((qe = null), typeof window < 'u')) {
    let n = window;
    n.trustedTypes !== void 0 &&
      (qe = n.trustedTypes.createPolicy('angular#components', {
        createHTML: (t) => t,
      }));
  }
  return qe;
}
function ie(n) {
  return Oa()?.createHTML(n) || n;
}
function Oo(n) {
  return Error(`Unable to find icon with the name "${n}"`);
}
function Ra() {
  return Error(
    'Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.',
  );
}
function Ro(n) {
  return Error(
    `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`,
  );
}
function No(n) {
  return Error(
    `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`,
  );
}
var ct = class {
    constructor(t, r, e) {
      (this.url = t), (this.svgText = r), (this.options = e);
    }
  },
  Na = (() => {
    let t = class t {
      constructor(e, i, o, a) {
        (this._httpClient = e),
          (this._sanitizer = i),
          (this._errorHandler = a),
          (this._svgIconConfigs = new Map()),
          (this._iconSetConfigs = new Map()),
          (this._cachedIconsByUrl = new Map()),
          (this._inProgressUrlFetches = new Map()),
          (this._fontCssClassesByAlias = new Map()),
          (this._resolvers = []),
          (this._defaultFontSetClass = ['material-icons', 'mat-ligature-font']),
          (this._document = o);
      }
      addSvgIcon(e, i, o) {
        return this.addSvgIconInNamespace('', e, i, o);
      }
      addSvgIconLiteral(e, i, o) {
        return this.addSvgIconLiteralInNamespace('', e, i, o);
      }
      addSvgIconInNamespace(e, i, o, a) {
        return this._addSvgIconConfig(e, i, new ct(o, null, a));
      }
      addSvgIconResolver(e) {
        return this._resolvers.push(e), this;
      }
      addSvgIconLiteralInNamespace(e, i, o, a) {
        let s = this._sanitizer.sanitize(St.HTML, o);
        if (!s) throw No(o);
        let d = ie(s);
        return this._addSvgIconConfig(e, i, new ct('', d, a));
      }
      addSvgIconSet(e, i) {
        return this.addSvgIconSetInNamespace('', e, i);
      }
      addSvgIconSetLiteral(e, i) {
        return this.addSvgIconSetLiteralInNamespace('', e, i);
      }
      addSvgIconSetInNamespace(e, i, o) {
        return this._addSvgIconSetConfig(e, new ct(i, null, o));
      }
      addSvgIconSetLiteralInNamespace(e, i, o) {
        let a = this._sanitizer.sanitize(St.HTML, i);
        if (!a) throw No(i);
        let s = ie(a);
        return this._addSvgIconSetConfig(e, new ct('', s, o));
      }
      registerFontClassAlias(e, i = e) {
        return this._fontCssClassesByAlias.set(e, i), this;
      }
      classNameForFontAlias(e) {
        return this._fontCssClassesByAlias.get(e) || e;
      }
      setDefaultFontSetClass(...e) {
        return (this._defaultFontSetClass = e), this;
      }
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      getSvgIconFromUrl(e) {
        let i = this._sanitizer.sanitize(St.RESOURCE_URL, e);
        if (!i) throw Ro(e);
        let o = this._cachedIconsByUrl.get(i);
        return o
          ? mt(Ze(o))
          : this._loadSvgIconFromConfig(new ct(e, null)).pipe(
              $t((a) => this._cachedIconsByUrl.set(i, a)),
              G((a) => Ze(a)),
            );
      }
      getNamedSvgIcon(e, i = '') {
        let o = Vo(i, e),
          a = this._svgIconConfigs.get(o);
        if (a) return this._getSvgFromConfig(a);
        if (((a = this._getIconConfigFromResolvers(i, e)), a))
          return this._svgIconConfigs.set(o, a), this._getSvgFromConfig(a);
        let s = this._iconSetConfigs.get(i);
        return s ? this._getSvgFromIconSetConfigs(e, s) : Bi(Oo(o));
      }
      ngOnDestroy() {
        (this._resolvers = []),
          this._svgIconConfigs.clear(),
          this._iconSetConfigs.clear(),
          this._cachedIconsByUrl.clear();
      }
      _getSvgFromConfig(e) {
        return e.svgText
          ? mt(Ze(this._svgElementFromConfig(e)))
          : this._loadSvgIconFromConfig(e).pipe(G((i) => Ze(i)));
      }
      _getSvgFromIconSetConfigs(e, i) {
        let o = this._extractIconWithNameFromAnySet(e, i);
        if (o) return mt(o);
        let a = i
          .filter((s) => !s.svgText)
          .map((s) =>
            this._loadSvgIconSetFromConfig(s).pipe(
              $i((d) => {
                let p = `Loading icon set URL: ${this._sanitizer.sanitize(St.RESOURCE_URL, s.url)} failed: ${d.message}`;
                return this._errorHandler.handleError(new Error(p)), mt(null);
              }),
            ),
          );
        return se(a).pipe(
          G(() => {
            let s = this._extractIconWithNameFromAnySet(e, i);
            if (!s) throw Oo(e);
            return s;
          }),
        );
      }
      _extractIconWithNameFromAnySet(e, i) {
        for (let o = i.length - 1; o >= 0; o--) {
          let a = i[o];
          if (a.svgText && a.svgText.toString().indexOf(e) > -1) {
            let s = this._svgElementFromConfig(a),
              d = this._extractSvgIconFromSet(s, e, a.options);
            if (d) return d;
          }
        }
        return null;
      }
      _loadSvgIconFromConfig(e) {
        return this._fetchIcon(e).pipe(
          $t((i) => (e.svgText = i)),
          G(() => this._svgElementFromConfig(e)),
        );
      }
      _loadSvgIconSetFromConfig(e) {
        return e.svgText
          ? mt(null)
          : this._fetchIcon(e).pipe($t((i) => (e.svgText = i)));
      }
      _extractSvgIconFromSet(e, i, o) {
        let a = e.querySelector(`[id="${i}"]`);
        if (!a) return null;
        let s = a.cloneNode(!0);
        if ((s.removeAttribute('id'), s.nodeName.toLowerCase() === 'svg'))
          return this._setSvgAttributes(s, o);
        if (s.nodeName.toLowerCase() === 'symbol')
          return this._setSvgAttributes(this._toSvgElement(s), o);
        let d = this._svgElementFromString(ie('<svg></svg>'));
        return d.appendChild(s), this._setSvgAttributes(d, o);
      }
      _svgElementFromString(e) {
        let i = this._document.createElement('DIV');
        i.innerHTML = e;
        let o = i.querySelector('svg');
        if (!o) throw Error('<svg> tag not found');
        return o;
      }
      _toSvgElement(e) {
        let i = this._svgElementFromString(ie('<svg></svg>')),
          o = e.attributes;
        for (let a = 0; a < o.length; a++) {
          let { name: s, value: d } = o[a];
          s !== 'id' && i.setAttribute(s, d);
        }
        for (let a = 0; a < e.childNodes.length; a++)
          e.childNodes[a].nodeType === this._document.ELEMENT_NODE &&
            i.appendChild(e.childNodes[a].cloneNode(!0));
        return i;
      }
      _setSvgAttributes(e, i) {
        return (
          e.setAttribute('fit', ''),
          e.setAttribute('height', '100%'),
          e.setAttribute('width', '100%'),
          e.setAttribute('preserveAspectRatio', 'xMidYMid meet'),
          e.setAttribute('focusable', 'false'),
          i && i.viewBox && e.setAttribute('viewBox', i.viewBox),
          e
        );
      }
      _fetchIcon(e) {
        let { url: i, options: o } = e,
          a = o?.withCredentials ?? !1;
        if (!this._httpClient) throw Ra();
        if (i == null) throw Error(`Cannot fetch icon from URL "${i}".`);
        let s = this._sanitizer.sanitize(St.RESOURCE_URL, i);
        if (!s) throw Ro(i);
        let d = this._inProgressUrlFetches.get(s);
        if (d) return d;
        let h = this._httpClient
          .get(s, { responseType: 'text', withCredentials: a })
          .pipe(
            G((p) => ie(p)),
            qi(() => this._inProgressUrlFetches.delete(s)),
            Zi(),
          );
        return this._inProgressUrlFetches.set(s, h), h;
      }
      _addSvgIconConfig(e, i, o) {
        return this._svgIconConfigs.set(Vo(e, i), o), this;
      }
      _addSvgIconSetConfig(e, i) {
        let o = this._iconSetConfigs.get(e);
        return o ? o.push(i) : this._iconSetConfigs.set(e, [i]), this;
      }
      _svgElementFromConfig(e) {
        if (!e.svgElement) {
          let i = this._svgElementFromString(e.svgText);
          this._setSvgAttributes(i, e.options), (e.svgElement = i);
        }
        return e.svgElement;
      }
      _getIconConfigFromResolvers(e, i) {
        for (let o = 0; o < this._resolvers.length; o++) {
          let a = this._resolvers[o](i, e);
          if (a)
            return Va(a) ? new ct(a.url, null, a.options) : new ct(a, null);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(cn, 8), f(mn), f(z, 8), f(ue));
    }),
      (t.ɵprov = I({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let n = t;
    return n;
  })();
function Ze(n) {
  return n.cloneNode(!0);
}
function Vo(n, t) {
  return n + ':' + t;
}
function Va(n) {
  return !!(n.url && n.options);
}
var La = new g('MAT_ICON_DEFAULT_OPTIONS'),
  Pa = new g('mat-icon-location', { providedIn: 'root', factory: ja });
function ja() {
  let n = E(z),
    t = n ? n.location : null;
  return { getPathname: () => (t ? t.pathname + t.search : '') };
}
var Lo = [
    'clip-path',
    'color-profile',
    'src',
    'cursor',
    'fill',
    'filter',
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
    'mask',
    'stroke',
  ],
  za = Lo.map((n) => `[${n}]`).join(', '),
  Ba = /^url\(['"]?#(.*?)['"]?\)$/,
  Ye = (() => {
    let t = class t {
      get color() {
        return this._color || this._defaultColor;
      }
      set color(e) {
        this._color = e;
      }
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(e) {
        e !== this._svgIcon &&
          (e
            ? this._updateSvgIcon(e)
            : this._svgIcon && this._clearSvgElement(),
          (this._svgIcon = e));
      }
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(e) {
        let i = this._cleanupFontValue(e);
        i !== this._fontSet &&
          ((this._fontSet = i), this._updateFontIconClasses());
      }
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(e) {
        let i = this._cleanupFontValue(e);
        i !== this._fontIcon &&
          ((this._fontIcon = i), this._updateFontIconClasses());
      }
      constructor(e, i, o, a, s, d) {
        (this._elementRef = e),
          (this._iconRegistry = i),
          (this._location = a),
          (this._errorHandler = s),
          (this.inline = !1),
          (this._previousFontSetClass = []),
          (this._currentIconFetch = Ut.EMPTY),
          d &&
            (d.color && (this.color = this._defaultColor = d.color),
            d.fontSet && (this.fontSet = d.fontSet)),
          o || e.nativeElement.setAttribute('aria-hidden', 'true');
      }
      _splitIconName(e) {
        if (!e) return ['', ''];
        let i = e.split(':');
        switch (i.length) {
          case 1:
            return ['', i[0]];
          case 2:
            return i;
          default:
            throw Error(`Invalid icon name: "${e}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        let e = this._elementsWithExternalReferences;
        if (e && e.size) {
          let i = this._location.getPathname();
          i !== this._previousPath &&
            ((this._previousPath = i), this._prependPathToReferences(i));
        }
      }
      ngOnDestroy() {
        this._currentIconFetch.unsubscribe(),
          this._elementsWithExternalReferences &&
            this._elementsWithExternalReferences.clear();
      }
      _usingFontIcon() {
        return !this.svgIcon;
      }
      _setSvgElement(e) {
        this._clearSvgElement();
        let i = this._location.getPathname();
        (this._previousPath = i),
          this._cacheChildrenWithExternalReferences(e),
          this._prependPathToReferences(i),
          this._elementRef.nativeElement.appendChild(e);
      }
      _clearSvgElement() {
        let e = this._elementRef.nativeElement,
          i = e.childNodes.length;
        for (
          this._elementsWithExternalReferences &&
          this._elementsWithExternalReferences.clear();
          i--;

        ) {
          let o = e.childNodes[i];
          (o.nodeType !== 1 || o.nodeName.toLowerCase() === 'svg') &&
            o.remove();
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) return;
        let e = this._elementRef.nativeElement,
          i = (
            this.fontSet
              ? this._iconRegistry
                  .classNameForFontAlias(this.fontSet)
                  .split(/ +/)
              : this._iconRegistry.getDefaultFontSetClass()
          ).filter((o) => o.length > 0);
        this._previousFontSetClass.forEach((o) => e.classList.remove(o)),
          i.forEach((o) => e.classList.add(o)),
          (this._previousFontSetClass = i),
          this.fontIcon !== this._previousFontIconClass &&
            !i.includes('mat-ligature-font') &&
            (this._previousFontIconClass &&
              e.classList.remove(this._previousFontIconClass),
            this.fontIcon && e.classList.add(this.fontIcon),
            (this._previousFontIconClass = this.fontIcon));
      }
      _cleanupFontValue(e) {
        return typeof e == 'string' ? e.trim().split(' ')[0] : e;
      }
      _prependPathToReferences(e) {
        let i = this._elementsWithExternalReferences;
        i &&
          i.forEach((o, a) => {
            o.forEach((s) => {
              a.setAttribute(s.name, `url('${e}#${s.value}')`);
            });
          });
      }
      _cacheChildrenWithExternalReferences(e) {
        let i = e.querySelectorAll(za),
          o = (this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map());
        for (let a = 0; a < i.length; a++)
          Lo.forEach((s) => {
            let d = i[a],
              h = d.getAttribute(s),
              p = h ? h.match(Ba) : null;
            if (p) {
              let L = o.get(d);
              L || ((L = []), o.set(d, L)), L.push({ name: s, value: p[1] });
            }
          });
      }
      _updateSvgIcon(e) {
        if (
          ((this._svgNamespace = null),
          (this._svgName = null),
          this._currentIconFetch.unsubscribe(),
          e)
        ) {
          let [i, o] = this._splitIconName(e);
          i && (this._svgNamespace = i),
            o && (this._svgName = o),
            (this._currentIconFetch = this._iconRegistry
              .getNamedSvgIcon(o, i)
              .pipe(Gt(1))
              .subscribe(
                (a) => this._setSvgElement(a),
                (a) => {
                  let s = `Error retrieving icon ${i}:${o}! ${a.message}`;
                  this._errorHandler.handleError(new Error(s));
                },
              ));
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        l(C),
        l(Na),
        ce('aria-hidden'),
        l(Pa),
        l(ue),
        l(La, 8),
      );
    }),
      (t.ɵcmp = $({
        type: t,
        selectors: [['mat-icon']],
        hostAttrs: ['role', 'img', 1, 'mat-icon', 'notranslate'],
        hostVars: 10,
        hostBindings: function (i, o) {
          i & 2 &&
            (S('data-mat-icon-type', o._usingFontIcon() ? 'font' : 'svg')(
              'data-mat-icon-name',
              o._svgName || o.fontIcon,
            )('data-mat-icon-namespace', o._svgNamespace || o.fontSet)(
              'fontIcon',
              o._usingFontIcon() ? o.fontIcon : null,
            ),
            he(o.color ? 'mat-' + o.color : ''),
            M('mat-icon-inline', o.inline)(
              'mat-icon-no-color',
              o.color !== 'primary' &&
                o.color !== 'accent' &&
                o.color !== 'warn',
            ));
        },
        inputs: {
          color: 'color',
          inline: [2, 'inline', 'inline', et],
          svgIcon: 'svgIcon',
          fontSet: 'fontSet',
          fontIcon: 'fontIcon',
        },
        exportAs: ['matIcon'],
        standalone: !0,
        features: [ut, W],
        ngContentSelectors: Ta,
        decls: 1,
        vars: 0,
        template: function (i, o) {
          i & 1 && (ht(), N(0));
        },
        styles: [
          'mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Ke = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = y({ type: t })),
      (t.ɵinj = _({ imports: [B, B] }));
    let n = t;
    return n;
  })();
var ne = (() => {
  class n {
    static emailValidator() {
      let r = /^[\w\d_]+@[\w\d_]+\.\w{2,7}$/;
      return (e) =>
        e.value ? (r.test(e.value) ? null : { invalidEmail: !0 }) : null;
    }
    static passwordMatch(r) {
      let e = r.get('password')?.value,
        i = r.get('repeatedPassword')?.value;
      if (!i) return null;
      let o = [],
        a = { passwordsDonotMatch: !1 };
      return (
        i !== e &&
          (o.push('Passwords do not match'), (a.passwordsDonotMatch = !0)),
        a.passwordsDonotMatch
          ? (r.get('repeatedPassword')?.setErrors(a),
            { passwordsDonotMatch: !0, recommendations: o })
          : (r.get('repeatedPassword')?.setErrors(null), null)
      );
    }
    static ɵfac = function (e) {
      return new (e || n)();
    };
    static ɵprov = I({ token: n, factory: n.ɵfac, providedIn: 'root' });
  }
  return n;
})();
function Ua(n, t) {
  n & 1 && (c(0, 'mat-error'), b(1, ' Required '), m());
}
function Ga(n, t) {
  n & 1 && (c(0, 'mat-error'), b(1, ' Incorrect email '), m());
}
function $a(n, t) {
  n & 1 && (c(0, 'mat-error'), b(1, ' Required '), m());
}
function Wa(n, t) {
  n & 1 && (c(0, 'mat-error'), b(1, ' Incorrect email or password '), m());
}
var jo = (() => {
  class n {
    formBuilder;
    authService;
    loginForm;
    isLoading = !1;
    hide = X(!0);
    constructor(r, e) {
      (this.formBuilder = r),
        (this.authService = e),
        (this.loginForm = this.formBuilder.group({
          email: ['', [q.required, ne.emailValidator()]],
          password: ['', [q.required]],
        }));
    }
    togglePasswordVisibility(r) {
      r.stopPropagation(), r.preventDefault(), this.hide.set(!this.hide());
    }
    onSubmit() {
      return re(this, null, function* () {
        if (this.loginForm.valid) {
          this.isLoading = !0;
          let r = this.loginForm.get('email')?.value,
            e = this.loginForm.get('password')?.value;
          yield this.authService.login(r, e, this.loginForm, () => {
            this.isLoading = !1;
          });
        }
      });
    }
    static ɵfac = function (e) {
      return new (e || n)(l(Te), l(ge));
    };
    static ɵcmp = $({
      type: n,
      selectors: [['app-sign-in']],
      standalone: !0,
      features: [W],
      decls: 26,
      vars: 11,
      consts: [
        ['input', ''],
        [1, 'container'],
        [1, 'form-wrapper', 3, 'ngSubmit', 'formGroup'],
        ['formControlName', 'email', 'matInput', '', 'placeholder', 'Email'],
        [4, 'ngIf'],
        ['matInput', '', 'formControlName', 'password', 3, 'type'],
        ['mat-icon-button', '', 'matSuffix', '', 3, 'click'],
        [1, 'button-primary', 'button', 3, 'disabled'],
        ['routerLink', '/signup'],
      ],
      template: function (e, i) {
        if (e & 1) {
          let o = Tt();
          c(0, 'div', 1)(1, 'form', 2),
            T('ngSubmit', function () {
              return ot(o), rt(i.onSubmit());
            }),
            c(2, 'h2'),
            b(3, 'Sign in'),
            m(),
            c(4, 'mat-form-field')(5, 'mat-label'),
            b(6, 'Email'),
            m(),
            k(7, 'input', 3, 0),
            A(9, Ua, 2, 0, 'mat-error', 4)(10, Ga, 2, 0, 'mat-error', 4),
            m(),
            c(11, 'mat-form-field')(12, 'mat-label'),
            b(13, 'Enter your password'),
            m(),
            k(14, 'input', 5),
            c(15, 'button', 6),
            T('click', function (s) {
              return ot(o), rt(i.togglePasswordVisibility(s));
            }),
            c(16, 'mat-icon'),
            b(17),
            m()(),
            A(18, $a, 2, 0, 'mat-error', 4),
            m(),
            A(19, Wa, 2, 0, 'mat-error', 4),
            c(20, 'button', 7),
            b(21),
            m(),
            c(22, 'p'),
            b(23, "Don't have an account? "),
            c(24, 'a', 8),
            b(25, 'Sign Up'),
            m()()()();
        }
        if (e & 2) {
          let o, a, s;
          u(),
            w('formGroup', i.loginForm),
            u(8),
            w(
              'ngIf',
              (o = i.loginForm.get('email')) == null || o.errors == null
                ? null
                : o.errors.required,
            ),
            u(),
            w(
              'ngIf',
              (a = i.loginForm.get('email')) == null || a.errors == null
                ? null
                : a.errors.invalidEmail,
            ),
            u(4),
            w('type', i.hide() ? 'password' : 'text'),
            u(),
            S('aria-label', 'Hide password')('aria-pressed', i.hide()),
            u(2),
            yt(i.hide() ? 'visibility_off' : 'visibility'),
            u(),
            w(
              'ngIf',
              (s = i.loginForm.get('password')) == null || s.errors == null
                ? null
                : s.errors.required,
            ),
            u(),
            w('ngIf', i.loginForm.hasError('UserIsNotFound')),
            u(),
            w('disabled', i.loginForm.invalid || i.isLoading),
            u(),
            qt(' ', i.isLoading ? 'Signing In...' : 'Sign In', ' ');
        }
      },
      dependencies: [
        Oe,
        Se,
        jt,
        De,
        Ae,
        At,
        Ge,
        Ht,
        He,
        Ue,
        We,
        $e,
        ze,
        je,
        Re,
        wt,
        Jt,
        Ke,
        Ye,
        pt,
        fe,
        be,
      ],
      styles: [
        `.form-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:400px;margin:auto}
/*# sourceMappingURL=sign-in.component-WMGK2NJP.css.map */`,
      ],
    });
  }
  return n;
})();
function qa(n, t) {
  n & 1 &&
    (c(0, 'mat-error'), b(1, ' Account with this email already exists '), m());
}
function Za(n, t) {
  n & 1 && (c(0, 'mat-error'), b(1, ' Required '), m());
}
function Ya(n, t) {
  n & 1 && (c(0, 'mat-error'), b(1, ' Incorrect email '), m());
}
function Ka(n, t) {
  n & 1 && (c(0, 'mat-error'), b(1, ' Required '), m());
}
function Qa(n, t) {
  n & 1 &&
    (c(0, 'mat-error'),
    b(1, ' Password must be at least 8 characters long '),
    m());
}
function Xa(n, t) {
  n & 1 && (c(0, 'mat-error'), b(1, ' Passwords do not match '), m());
}
var zo = (() => {
  class n {
    formBuilder;
    authService;
    registrationForm;
    isLoading = !1;
    hide = X(!0);
    constructor(r, e) {
      (this.formBuilder = r),
        (this.authService = e),
        (this.registrationForm = this.formBuilder.group(
          {
            email: ['', [q.required, ne.emailValidator()]],
            password: ['', [q.required, q.minLength(8)]],
            repeatedPassword: ['', [q.required]],
          },
          { validators: ne.passwordMatch },
        ));
    }
    togglePasswordVisibility(r) {
      r.stopPropagation(), r.preventDefault(), this.hide.set(!this.hide());
    }
    onSubmit() {
      return re(this, null, function* () {
        if (this.registrationForm.valid) {
          this.isLoading = !0;
          let r = this.registrationForm.get('email')?.value,
            e = this.registrationForm.get('password')?.value;
          yield this.authService.register(r, e, this.registrationForm, () => {
            this.isLoading = !1;
          });
        }
      });
    }
    static ɵfac = function (e) {
      return new (e || n)(l(Te), l(ge));
    };
    static ɵcmp = $({
      type: n,
      selectors: [['app-sign-up']],
      standalone: !0,
      features: [W],
      decls: 35,
      vars: 17,
      consts: [
        ['input', ''],
        [1, 'container'],
        [1, 'form-wrapper', 3, 'ngSubmit', 'formGroup'],
        ['formControlName', 'email', 'matInput', '', 'placeholder', 'Email'],
        [4, 'ngIf'],
        ['matInput', '', 'formControlName', 'password', 3, 'type'],
        ['mat-icon-button', '', 'matSuffix', '', 3, 'click'],
        ['matInput', '', 'formControlName', 'repeatedPassword', 3, 'type'],
        [1, 'button-primary', 'button', 3, 'disabled'],
        ['routerLink', '/signin'],
      ],
      template: function (e, i) {
        if (e & 1) {
          let o = Tt();
          c(0, 'div', 1)(1, 'form', 2),
            T('ngSubmit', function () {
              return ot(o), rt(i.onSubmit());
            }),
            c(2, 'h2'),
            b(3, 'Registration'),
            m(),
            c(4, 'mat-form-field')(5, 'mat-label'),
            b(6, 'Email'),
            m(),
            k(7, 'input', 3, 0),
            A(9, qa, 2, 0, 'mat-error', 4)(10, Za, 2, 0, 'mat-error', 4)(
              11,
              Ya,
              2,
              0,
              'mat-error',
              4,
            ),
            m(),
            c(12, 'mat-form-field')(13, 'mat-label'),
            b(14, 'Enter your password'),
            m(),
            k(15, 'input', 5),
            c(16, 'button', 6),
            T('click', function (s) {
              return ot(o), rt(i.togglePasswordVisibility(s));
            }),
            c(17, 'mat-icon'),
            b(18),
            m()(),
            A(19, Ka, 2, 0, 'mat-error', 4)(20, Qa, 2, 0, 'mat-error', 4),
            m(),
            c(21, 'mat-form-field')(22, 'mat-label'),
            b(23, 'Repeat your password'),
            m(),
            k(24, 'input', 7),
            c(25, 'button', 6),
            T('click', function (s) {
              return ot(o), rt(i.togglePasswordVisibility(s));
            }),
            c(26, 'mat-icon'),
            b(27),
            m()(),
            A(28, Xa, 2, 0, 'mat-error', 4),
            m(),
            c(29, 'button', 8),
            b(30),
            m(),
            c(31, 'p'),
            b(32, 'Already have an account? '),
            c(33, 'a', 9),
            b(34, 'Sign In'),
            m()()()();
        }
        if (e & 2) {
          let o, a, s, d, h;
          u(),
            w('formGroup', i.registrationForm),
            u(8),
            w(
              'ngIf',
              (o = i.registrationForm.get('email')) == null
                ? null
                : o.hasError('emailExists'),
            ),
            u(),
            w(
              'ngIf',
              (a = i.registrationForm.get('email')) == null || a.errors == null
                ? null
                : a.errors.required,
            ),
            u(),
            w(
              'ngIf',
              (s = i.registrationForm.get('email')) == null || s.errors == null
                ? null
                : s.errors.invalidEmail,
            ),
            u(4),
            w('type', i.hide() ? 'password' : 'text'),
            u(),
            S('aria-label', 'Hide password')('aria-pressed', i.hide()),
            u(2),
            yt(i.hide() ? 'visibility_off' : 'visibility'),
            u(),
            w(
              'ngIf',
              (d = i.registrationForm.get('password')) == null ||
                d.errors == null
                ? null
                : d.errors.required,
            ),
            u(),
            w(
              'ngIf',
              (h = i.registrationForm.get('password')) == null ||
                h.errors == null
                ? null
                : h.errors.minlength,
            ),
            u(4),
            w('type', i.hide() ? 'password' : 'text'),
            u(),
            S('aria-label', 'Hide password')('aria-pressed', i.hide()),
            u(2),
            yt(i.hide() ? 'visibility_off' : 'visibility'),
            u(),
            w('ngIf', i.registrationForm.hasError('passwordsDonotMatch')),
            u(),
            w('disabled', i.registrationForm.invalid || i.isLoading),
            u(),
            qt(' ', i.isLoading ? 'Signing Up...' : 'Register', ' ');
        }
      },
      dependencies: [
        Oe,
        Se,
        jt,
        De,
        Ae,
        At,
        Ge,
        Ht,
        He,
        Ue,
        We,
        $e,
        ze,
        je,
        Re,
        wt,
        Jt,
        Ke,
        Ye,
        pt,
        fe,
        be,
      ],
      styles: [
        `.form-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:400px;margin:auto}
/*# sourceMappingURL=sign-up.component-AO6Z2XBE.css.map */`,
      ],
    });
  }
  return n;
})();
var Ja = [
    { path: 'signin', component: jo },
    { path: 'signup', component: zo },
  ],
  Bo = (() => {
    class n {
      static ɵfac = function (e) {
        return new (e || n)();
      };
      static ɵmod = y({ type: n });
      static ɵinj = _({ imports: [ni.forChild(Ja), ni] });
    }
    return n;
  })();
var Rc = (() => {
  class n {
    static ɵfac = function (e) {
      return new (e || n)();
    };
    static ɵmod = y({ type: n });
    static ɵinj = _({ imports: [pt, Bo] });
  }
  return n;
})();
export { Rc as AuthModule };
//# sourceMappingURL=chunk-5ZDOOIJK.js.map
