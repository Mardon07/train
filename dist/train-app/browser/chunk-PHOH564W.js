import {
  $ as St,
  $a as Qr,
  $b as pi,
  A as Ar,
  Aa as $r,
  B as an,
  Ba as vn,
  Ca as _r,
  Da as W,
  E as Z,
  F as J,
  Fa as yn,
  G as re,
  Ga as wn,
  Ha as Te,
  Hb as oi,
  I as cn,
  Ia as be,
  J as we,
  Ja as zr,
  Jb as Et,
  K as Mr,
  Ka as Br,
  Kb as ai,
  La as Vr,
  Lb as Sn,
  M as Re,
  Ma as qr,
  Mb as ze,
  N as ie,
  Na as Gr,
  Nb as Be,
  O as un,
  Oa as Wr,
  Ob as ci,
  P as Dr,
  Pa as Xr,
  Pb as Ct,
  Q as Or,
  Qa as pe,
  Ra as Hr,
  Rb as Tn,
  Sa as _e,
  Sb as ui,
  Tb as li,
  U as Pr,
  Ua as Ee,
  Ub as hi,
  V as k,
  Va as Kr,
  Vb as It,
  W as Nr,
  X as M,
  Xa as Zr,
  Y as I,
  Ya as Jr,
  Yb as di,
  Za as Yr,
  Zb as bn,
  _ as S,
  _b as fi,
  a as p,
  aa as xr,
  ab as ei,
  ac as x,
  b as P,
  ba as C,
  bc as gi,
  c as Tr,
  ca as ln,
  cc as Ve,
  da as m,
  dc as mi,
  ea as f,
  eb as ti,
  ec as vi,
  f as ee,
  fa as hn,
  fb as ni,
  fc as qe,
  ga as Ur,
  gb as Rn,
  gc as At,
  ha as Fe,
  i as br,
  ia as Lr,
  ib as ri,
  j as Er,
  ja as Tt,
  k as tn,
  ka as dn,
  kc as yi,
  l as nn,
  la as Se,
  lc as wi,
  m as rn,
  ma as jr,
  mc as Ge,
  n as te,
  na as fe,
  nc as Ri,
  o as _,
  oa as z,
  oc as Mt,
  p as ne,
  pa as fn,
  pb as ii,
  q as N,
  r as g,
  s as ke,
  sa as pn,
  sb as si,
  t as Cr,
  ta as kr,
  u as Ir,
  ua as gn,
  v as sn,
  va as bt,
  w as b,
  wa as $e,
  x as Rt,
  xa as G,
  y as j,
  ya as mn,
  z as on,
  za as Fr,
} from './chunk-EO2GLJHI.js';
var Xe = class {},
  Pt = class {},
  X = class n {
    constructor(e) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        e
          ? typeof e == 'string'
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  e
                    .split(
                      `
`,
                    )
                    .forEach((i) => {
                      let t = i.indexOf(':');
                      if (t > 0) {
                        let r = i.slice(0, t),
                          s = r.toLowerCase(),
                          o = i.slice(t + 1).trim();
                        this.maybeSetNormalizedName(r, s),
                          this.headers.has(s)
                            ? this.headers.get(s).push(o)
                            : this.headers.set(s, [o]);
                      }
                    });
              })
            : typeof Headers < 'u' && e instanceof Headers
              ? ((this.headers = new Map()),
                e.forEach((i, t) => {
                  this.setHeaderEntries(t, i);
                }))
              : (this.lazyInit = () => {
                  (this.headers = new Map()),
                    Object.entries(e).forEach(([i, t]) => {
                      this.setHeaderEntries(i, t);
                    });
                })
          : (this.headers = new Map());
    }
    has(e) {
      return this.init(), this.headers.has(e.toLowerCase());
    }
    get(e) {
      this.init();
      let i = this.headers.get(e.toLowerCase());
      return i && i.length > 0 ? i[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(e) {
      return this.init(), this.headers.get(e.toLowerCase()) || null;
    }
    append(e, i) {
      return this.clone({ name: e, value: i, op: 'a' });
    }
    set(e, i) {
      return this.clone({ name: e, value: i, op: 's' });
    }
    delete(e, i) {
      return this.clone({ name: e, value: i, op: 'd' });
    }
    maybeSetNormalizedName(e, i) {
      this.normalizedNames.has(i) || this.normalizedNames.set(i, e);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof n
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
          (this.lazyUpdate = null)));
    }
    copyFrom(e) {
      e.init(),
        Array.from(e.headers.keys()).forEach((i) => {
          this.headers.set(i, e.headers.get(i)),
            this.normalizedNames.set(i, e.normalizedNames.get(i));
        });
    }
    clone(e) {
      let i = new n();
      return (
        (i.lazyInit =
          this.lazyInit && this.lazyInit instanceof n ? this.lazyInit : this),
        (i.lazyUpdate = (this.lazyUpdate || []).concat([e])),
        i
      );
    }
    applyUpdate(e) {
      let i = e.name.toLowerCase();
      switch (e.op) {
        case 'a':
        case 's':
          let t = e.value;
          if ((typeof t == 'string' && (t = [t]), t.length === 0)) return;
          this.maybeSetNormalizedName(e.name, i);
          let r = (e.op === 'a' ? this.headers.get(i) : void 0) || [];
          r.push(...t), this.headers.set(i, r);
          break;
        case 'd':
          let s = e.value;
          if (!s) this.headers.delete(i), this.normalizedNames.delete(i);
          else {
            let o = this.headers.get(i);
            if (!o) return;
            (o = o.filter((a) => s.indexOf(a) === -1)),
              o.length === 0
                ? (this.headers.delete(i), this.normalizedNames.delete(i))
                : this.headers.set(i, o);
          }
          break;
      }
    }
    setHeaderEntries(e, i) {
      let t = (Array.isArray(i) ? i : [i]).map((s) => s.toString()),
        r = e.toLowerCase();
      this.headers.set(r, t), this.maybeSetNormalizedName(e, r);
    }
    forEach(e) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((i) =>
          e(this.normalizedNames.get(i), this.headers.get(i)),
        );
    }
  };
var Cn = class {
  encodeKey(e) {
    return Si(e);
  }
  encodeValue(e) {
    return Si(e);
  }
  decodeKey(e) {
    return decodeURIComponent(e);
  }
  decodeValue(e) {
    return decodeURIComponent(e);
  }
};
function zs(n, e) {
  let i = new Map();
  return (
    n.length > 0 &&
      n
        .replace(/^\?/, '')
        .split('&')
        .forEach((r) => {
          let s = r.indexOf('='),
            [o, a] =
              s == -1
                ? [e.decodeKey(r), '']
                : [e.decodeKey(r.slice(0, s)), e.decodeValue(r.slice(s + 1))],
            u = i.get(o) || [];
          u.push(a), i.set(o, u);
        }),
    i
  );
}
var Bs = /%(\d[a-f0-9])/gi,
  Vs = {
    40: '@',
    '3A': ':',
    24: '$',
    '2C': ',',
    '3B': ';',
    '3D': '=',
    '3F': '?',
    '2F': '/',
  };
function Si(n) {
  return encodeURIComponent(n).replace(Bs, (e, i) => Vs[i] ?? e);
}
function Dt(n) {
  return `${n}`;
}
var oe = class n {
  constructor(e = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = e.encoder || new Cn()),
      e.fromString)
    ) {
      if (e.fromObject)
        throw new Error('Cannot specify both fromString and fromObject.');
      this.map = zs(e.fromString, this.encoder);
    } else
      e.fromObject
        ? ((this.map = new Map()),
          Object.keys(e.fromObject).forEach((i) => {
            let t = e.fromObject[i],
              r = Array.isArray(t) ? t.map(Dt) : [Dt(t)];
            this.map.set(i, r);
          }))
        : (this.map = null);
  }
  has(e) {
    return this.init(), this.map.has(e);
  }
  get(e) {
    this.init();
    let i = this.map.get(e);
    return i ? i[0] : null;
  }
  getAll(e) {
    return this.init(), this.map.get(e) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(e, i) {
    return this.clone({ param: e, value: i, op: 'a' });
  }
  appendAll(e) {
    let i = [];
    return (
      Object.keys(e).forEach((t) => {
        let r = e[t];
        Array.isArray(r)
          ? r.forEach((s) => {
              i.push({ param: t, value: s, op: 'a' });
            })
          : i.push({ param: t, value: r, op: 'a' });
      }),
      this.clone(i)
    );
  }
  set(e, i) {
    return this.clone({ param: e, value: i, op: 's' });
  }
  delete(e, i) {
    return this.clone({ param: e, value: i, op: 'd' });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((e) => {
          let i = this.encoder.encodeKey(e);
          return this.map
            .get(e)
            .map((t) => i + '=' + this.encoder.encodeValue(t))
            .join('&');
        })
        .filter((e) => e !== '')
        .join('&')
    );
  }
  clone(e) {
    let i = new n({ encoder: this.encoder });
    return (
      (i.cloneFrom = this.cloneFrom || this),
      (i.updates = (this.updates || []).concat(e)),
      i
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
        this.updates.forEach((e) => {
          switch (e.op) {
            case 'a':
            case 's':
              let i = (e.op === 'a' ? this.map.get(e.param) : void 0) || [];
              i.push(Dt(e.value)), this.map.set(e.param, i);
              break;
            case 'd':
              if (e.value !== void 0) {
                let t = this.map.get(e.param) || [],
                  r = t.indexOf(Dt(e.value));
                r !== -1 && t.splice(r, 1),
                  t.length > 0
                    ? this.map.set(e.param, t)
                    : this.map.delete(e.param);
              } else {
                this.map.delete(e.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var In = class {
  constructor() {
    this.map = new Map();
  }
  set(e, i) {
    return this.map.set(e, i), this;
  }
  get(e) {
    return (
      this.map.has(e) || this.map.set(e, e.defaultValue()), this.map.get(e)
    );
  }
  delete(e) {
    return this.map.delete(e), this;
  }
  has(e) {
    return this.map.has(e);
  }
  keys() {
    return this.map.keys();
  }
};
function qs(n) {
  switch (n) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return !1;
    default:
      return !0;
  }
}
function Ti(n) {
  return typeof ArrayBuffer < 'u' && n instanceof ArrayBuffer;
}
function bi(n) {
  return typeof Blob < 'u' && n instanceof Blob;
}
function Ei(n) {
  return typeof FormData < 'u' && n instanceof FormData;
}
function Gs(n) {
  return typeof URLSearchParams < 'u' && n instanceof URLSearchParams;
}
var We = class n {
    constructor(e, i, t, r) {
      (this.url = i),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = 'json'),
        (this.method = e.toUpperCase());
      let s;
      if (
        (qs(this.method) || r
          ? ((this.body = t !== void 0 ? t : null), (s = r))
          : (s = t),
        s &&
          ((this.reportProgress = !!s.reportProgress),
          (this.withCredentials = !!s.withCredentials),
          s.responseType && (this.responseType = s.responseType),
          s.headers && (this.headers = s.headers),
          s.context && (this.context = s.context),
          s.params && (this.params = s.params),
          (this.transferCache = s.transferCache)),
        (this.headers ??= new X()),
        (this.context ??= new In()),
        !this.params)
      )
        (this.params = new oe()), (this.urlWithParams = i);
      else {
        let o = this.params.toString();
        if (o.length === 0) this.urlWithParams = i;
        else {
          let a = i.indexOf('?'),
            u = a === -1 ? '?' : a < i.length - 1 ? '&' : '';
          this.urlWithParams = i + u + o;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == 'string' ||
            Ti(this.body) ||
            bi(this.body) ||
            Ei(this.body) ||
            Gs(this.body)
          ? this.body
          : this.body instanceof oe
            ? this.body.toString()
            : typeof this.body == 'object' ||
                typeof this.body == 'boolean' ||
                Array.isArray(this.body)
              ? JSON.stringify(this.body)
              : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || Ei(this.body)
        ? null
        : bi(this.body)
          ? this.body.type || null
          : Ti(this.body)
            ? null
            : typeof this.body == 'string'
              ? 'text/plain'
              : this.body instanceof oe
                ? 'application/x-www-form-urlencoded;charset=UTF-8'
                : typeof this.body == 'object' ||
                    typeof this.body == 'number' ||
                    typeof this.body == 'boolean'
                  ? 'application/json'
                  : null;
    }
    clone(e = {}) {
      let i = e.method || this.method,
        t = e.url || this.url,
        r = e.responseType || this.responseType,
        s = e.transferCache ?? this.transferCache,
        o = e.body !== void 0 ? e.body : this.body,
        a = e.withCredentials ?? this.withCredentials,
        u = e.reportProgress ?? this.reportProgress,
        c = e.headers || this.headers,
        l = e.params || this.params,
        h = e.context ?? this.context;
      return (
        e.setHeaders !== void 0 &&
          (c = Object.keys(e.setHeaders).reduce(
            (d, y) => d.set(y, e.setHeaders[y]),
            c,
          )),
        e.setParams &&
          (l = Object.keys(e.setParams).reduce(
            (d, y) => d.set(y, e.setParams[y]),
            l,
          )),
        new n(i, t, o, {
          params: l,
          headers: c,
          context: h,
          reportProgress: u,
          responseType: r,
          withCredentials: a,
          transferCache: s,
        })
      );
    }
  },
  ae = (function (n) {
    return (
      (n[(n.Sent = 0)] = 'Sent'),
      (n[(n.UploadProgress = 1)] = 'UploadProgress'),
      (n[(n.ResponseHeader = 2)] = 'ResponseHeader'),
      (n[(n.DownloadProgress = 3)] = 'DownloadProgress'),
      (n[(n.Response = 4)] = 'Response'),
      (n[(n.User = 5)] = 'User'),
      n
    );
  })(ae || {}),
  He = class {
    constructor(e, i = 200, t = 'OK') {
      (this.headers = e.headers || new X()),
        (this.status = e.status !== void 0 ? e.status : i),
        (this.statusText = e.statusText || t),
        (this.url = e.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  Nt = class n extends He {
    constructor(e = {}) {
      super(e), (this.type = ae.ResponseHeader);
    }
    clone(e = {}) {
      return new n({
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  ge = class n extends He {
    constructor(e = {}) {
      super(e),
        (this.type = ae.Response),
        (this.body = e.body !== void 0 ? e.body : null);
    }
    clone(e = {}) {
      return new n({
        body: e.body !== void 0 ? e.body : this.body,
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  se = class extends He {
    constructor(e) {
      super(e, 0, 'Unknown Error'),
        (this.name = 'HttpErrorResponse'),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${e.url || '(unknown url)'}`)
          : (this.message = `Http failure response for ${e.url || '(unknown url)'}: ${e.status} ${e.statusText}`),
        (this.error = e.error || null);
    }
  },
  Li = 200,
  Ws = 204;
function En(n, e) {
  return {
    body: e,
    headers: n.headers,
    context: n.context,
    observe: n.observe,
    params: n.params,
    reportProgress: n.reportProgress,
    responseType: n.responseType,
    withCredentials: n.withCredentials,
    transferCache: n.transferCache,
  };
}
var On = (() => {
    let e = class e {
      constructor(t) {
        this.handler = t;
      }
      request(t, r, s = {}) {
        let o;
        if (t instanceof We) o = t;
        else {
          let c;
          s.headers instanceof X ? (c = s.headers) : (c = new X(s.headers));
          let l;
          s.params &&
            (s.params instanceof oe
              ? (l = s.params)
              : (l = new oe({ fromObject: s.params }))),
            (o = new We(t, r, s.body !== void 0 ? s.body : null, {
              headers: c,
              context: s.context,
              params: l,
              reportProgress: s.reportProgress,
              responseType: s.responseType || 'json',
              withCredentials: s.withCredentials,
              transferCache: s.transferCache,
            }));
        }
        let a = g(o).pipe(re((c) => this.handler.handle(c)));
        if (t instanceof We || s.observe === 'events') return a;
        let u = a.pipe(Z((c) => c instanceof ge));
        switch (s.observe || 'body') {
          case 'body':
            switch (o.responseType) {
              case 'arraybuffer':
                return u.pipe(
                  b((c) => {
                    if (c.body !== null && !(c.body instanceof ArrayBuffer))
                      throw new Error('Response is not an ArrayBuffer.');
                    return c.body;
                  }),
                );
              case 'blob':
                return u.pipe(
                  b((c) => {
                    if (c.body !== null && !(c.body instanceof Blob))
                      throw new Error('Response is not a Blob.');
                    return c.body;
                  }),
                );
              case 'text':
                return u.pipe(
                  b((c) => {
                    if (c.body !== null && typeof c.body != 'string')
                      throw new Error('Response is not a string.');
                    return c.body;
                  }),
                );
              case 'json':
              default:
                return u.pipe(b((c) => c.body));
            }
          case 'response':
            return u;
          default:
            throw new Error(
              `Unreachable: unhandled observe type ${s.observe}}`,
            );
        }
      }
      delete(t, r = {}) {
        return this.request('DELETE', t, r);
      }
      get(t, r = {}) {
        return this.request('GET', t, r);
      }
      head(t, r = {}) {
        return this.request('HEAD', t, r);
      }
      jsonp(t, r) {
        return this.request('JSONP', t, {
          params: new oe().append(r, 'JSONP_CALLBACK'),
          observe: 'body',
          responseType: 'json',
        });
      }
      options(t, r = {}) {
        return this.request('OPTIONS', t, r);
      }
      patch(t, r, s = {}) {
        return this.request('PATCH', t, En(s, r));
      }
      post(t, r, s = {}) {
        return this.request('POST', t, En(s, r));
      }
      put(t, r, s = {}) {
        return this.request('PUT', t, En(s, r));
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(Xe));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  Xs = /^\)\]\}',?\n/,
  Hs = 'X-Request-URL';
function Ci(n) {
  if (n.url) return n.url;
  let e = Hs.toLocaleLowerCase();
  return n.headers.get(e);
}
var Ks = (() => {
    let e = class e {
      constructor() {
        (this.fetchImpl =
          f(An, { optional: !0 })?.fetch ?? fetch.bind(globalThis)),
          (this.ngZone = f(G));
      }
      handle(t) {
        return new tn((r) => {
          let s = new AbortController();
          return (
            this.doRequest(t, s.signal, r).then(Mn, (o) =>
              r.error(new se({ error: o })),
            ),
            () => s.abort()
          );
        });
      }
      doRequest(t, r, s) {
        return ee(this, null, function* () {
          let o = this.createRequestInit(t),
            a;
          try {
            let w = this.ngZone.runOutsideAngular(() =>
              this.fetchImpl(t.urlWithParams, p({ signal: r }, o)),
            );
            Zs(w), s.next({ type: ae.Sent }), (a = yield w);
          } catch (w) {
            s.error(
              new se({
                error: w,
                status: w.status ?? 0,
                statusText: w.statusText,
                url: t.urlWithParams,
                headers: w.headers,
              }),
            );
            return;
          }
          let u = new X(a.headers),
            c = a.statusText,
            l = Ci(a) ?? t.urlWithParams,
            h = a.status,
            d = null;
          if (
            (t.reportProgress &&
              s.next(new Nt({ headers: u, status: h, statusText: c, url: l })),
            a.body)
          ) {
            let w = a.headers.get('content-length'),
              O = [],
              R = a.body.getReader(),
              T = 0,
              U,
              L,
              A = typeof Zone < 'u' && Zone.current;
            yield this.ngZone.runOutsideAngular(() =>
              ee(this, null, function* () {
                for (;;) {
                  let { done: de, value: je } = yield R.read();
                  if (de) break;
                  if ((O.push(je), (T += je.length), t.reportProgress)) {
                    L =
                      t.responseType === 'text'
                        ? (L ?? '') +
                          (U ??= new TextDecoder()).decode(je, { stream: !0 })
                        : void 0;
                    let Sr = () =>
                      s.next({
                        type: ae.DownloadProgress,
                        total: w ? +w : void 0,
                        loaded: T,
                        partialText: L,
                      });
                    A ? A.run(Sr) : Sr();
                  }
                }
              }),
            );
            let he = this.concatChunks(O, T);
            try {
              let de = a.headers.get('Content-Type') ?? '';
              d = this.parseBody(t, he, de);
            } catch (de) {
              s.error(
                new se({
                  error: de,
                  headers: new X(a.headers),
                  status: a.status,
                  statusText: a.statusText,
                  url: Ci(a) ?? t.urlWithParams,
                }),
              );
              return;
            }
          }
          h === 0 && (h = d ? Li : 0),
            h >= 200 && h < 300
              ? (s.next(
                  new ge({
                    body: d,
                    headers: u,
                    status: h,
                    statusText: c,
                    url: l,
                  }),
                ),
                s.complete())
              : s.error(
                  new se({
                    error: d,
                    headers: u,
                    status: h,
                    statusText: c,
                    url: l,
                  }),
                );
        });
      }
      parseBody(t, r, s) {
        switch (t.responseType) {
          case 'json':
            let o = new TextDecoder().decode(r).replace(Xs, '');
            return o === '' ? null : JSON.parse(o);
          case 'text':
            return new TextDecoder().decode(r);
          case 'blob':
            return new Blob([r], { type: s });
          case 'arraybuffer':
            return r.buffer;
        }
      }
      createRequestInit(t) {
        let r = {},
          s = t.withCredentials ? 'include' : void 0;
        if (
          (t.headers.forEach((o, a) => (r[o] = a.join(','))),
          t.headers.has('Accept') ||
            (r.Accept = 'application/json, text/plain, */*'),
          !t.headers.has('Content-Type'))
        ) {
          let o = t.detectContentTypeHeader();
          o !== null && (r['Content-Type'] = o);
        }
        return {
          body: t.serializeBody(),
          method: t.method,
          headers: r,
          credentials: s,
        };
      }
      concatChunks(t, r) {
        let s = new Uint8Array(r),
          o = 0;
        for (let a of t) s.set(a, o), (o += a.length);
        return s;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  An = class {};
function Mn() {}
function Zs(n) {
  n.then(Mn, Mn);
}
function Js(n, e) {
  return e(n);
}
function Ys(n, e, i) {
  return (t, r) => z(i, () => e(t, (s) => n(s, r)));
}
var ji = new C(''),
  ki = new C(''),
  Qs = new C('', { providedIn: 'root', factory: () => !0 });
var Ii = (() => {
  let e = class e extends Xe {
    constructor(t, r) {
      super(),
        (this.backend = t),
        (this.injector = r),
        (this.chain = null),
        (this.pendingTasks = f(bt)),
        (this.contributeToStability = f(Qs));
    }
    handle(t) {
      if (this.chain === null) {
        let r = Array.from(
          new Set([...this.injector.get(ji), ...this.injector.get(ki, [])]),
        );
        this.chain = r.reduceRight((s, o) => Ys(s, o, this.injector), Js);
      }
      if (this.contributeToStability) {
        let r = this.pendingTasks.add();
        return this.chain(t, (s) => this.backend.handle(s)).pipe(
          Re(() => this.pendingTasks.remove(r)),
        );
      } else return this.chain(t, (r) => this.backend.handle(r));
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(m(Pt), m(fe));
  }),
    (e.ɵprov = S({ token: e, factory: e.ɵfac }));
  let n = e;
  return n;
})();
var eo = /^\)\]\}',?\n/;
function to(n) {
  return 'responseURL' in n && n.responseURL
    ? n.responseURL
    : /^X-Request-URL:/m.test(n.getAllResponseHeaders())
      ? n.getResponseHeader('X-Request-URL')
      : null;
}
var Ai = (() => {
    let e = class e {
      constructor(t) {
        this.xhrFactory = t;
      }
      handle(t) {
        if (t.method === 'JSONP') throw new I(-2800, !1);
        let r = this.xhrFactory;
        return (r.ɵloadImpl ? N(r.ɵloadImpl()) : g(null)).pipe(
          k(
            () =>
              new tn((o) => {
                let a = r.build();
                if (
                  (a.open(t.method, t.urlWithParams),
                  t.withCredentials && (a.withCredentials = !0),
                  t.headers.forEach((R, T) =>
                    a.setRequestHeader(R, T.join(',')),
                  ),
                  t.headers.has('Accept') ||
                    a.setRequestHeader(
                      'Accept',
                      'application/json, text/plain, */*',
                    ),
                  !t.headers.has('Content-Type'))
                ) {
                  let R = t.detectContentTypeHeader();
                  R !== null && a.setRequestHeader('Content-Type', R);
                }
                if (t.responseType) {
                  let R = t.responseType.toLowerCase();
                  a.responseType = R !== 'json' ? R : 'text';
                }
                let u = t.serializeBody(),
                  c = null,
                  l = () => {
                    if (c !== null) return c;
                    let R = a.statusText || 'OK',
                      T = new X(a.getAllResponseHeaders()),
                      U = to(a) || t.url;
                    return (
                      (c = new Nt({
                        headers: T,
                        status: a.status,
                        statusText: R,
                        url: U,
                      })),
                      c
                    );
                  },
                  h = () => {
                    let { headers: R, status: T, statusText: U, url: L } = l(),
                      A = null;
                    T !== Ws &&
                      (A =
                        typeof a.response > 'u' ? a.responseText : a.response),
                      T === 0 && (T = A ? Li : 0);
                    let he = T >= 200 && T < 300;
                    if (t.responseType === 'json' && typeof A == 'string') {
                      let de = A;
                      A = A.replace(eo, '');
                      try {
                        A = A !== '' ? JSON.parse(A) : null;
                      } catch (je) {
                        (A = de),
                          he && ((he = !1), (A = { error: je, text: A }));
                      }
                    }
                    he
                      ? (o.next(
                          new ge({
                            body: A,
                            headers: R,
                            status: T,
                            statusText: U,
                            url: L || void 0,
                          }),
                        ),
                        o.complete())
                      : o.error(
                          new se({
                            error: A,
                            headers: R,
                            status: T,
                            statusText: U,
                            url: L || void 0,
                          }),
                        );
                  },
                  d = (R) => {
                    let { url: T } = l(),
                      U = new se({
                        error: R,
                        status: a.status || 0,
                        statusText: a.statusText || 'Unknown Error',
                        url: T || void 0,
                      });
                    o.error(U);
                  },
                  y = !1,
                  w = (R) => {
                    y || (o.next(l()), (y = !0));
                    let T = { type: ae.DownloadProgress, loaded: R.loaded };
                    R.lengthComputable && (T.total = R.total),
                      t.responseType === 'text' &&
                        a.responseText &&
                        (T.partialText = a.responseText),
                      o.next(T);
                  },
                  O = (R) => {
                    let T = { type: ae.UploadProgress, loaded: R.loaded };
                    R.lengthComputable && (T.total = R.total), o.next(T);
                  };
                return (
                  a.addEventListener('load', h),
                  a.addEventListener('error', d),
                  a.addEventListener('timeout', d),
                  a.addEventListener('abort', d),
                  t.reportProgress &&
                    (a.addEventListener('progress', w),
                    u !== null &&
                      a.upload &&
                      a.upload.addEventListener('progress', O)),
                  a.send(u),
                  o.next({ type: ae.Sent }),
                  () => {
                    a.removeEventListener('error', d),
                      a.removeEventListener('abort', d),
                      a.removeEventListener('load', h),
                      a.removeEventListener('timeout', d),
                      t.reportProgress &&
                        (a.removeEventListener('progress', w),
                        u !== null &&
                          a.upload &&
                          a.upload.removeEventListener('progress', O)),
                      a.readyState !== a.DONE && a.abort();
                  }
                );
              }),
          ),
        );
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(Mt));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  Fi = new C(''),
  no = 'XSRF-TOKEN',
  ro = new C('', { providedIn: 'root', factory: () => no }),
  io = 'X-XSRF-TOKEN',
  so = new C('', { providedIn: 'root', factory: () => io }),
  xt = class {},
  oo = (() => {
    let e = class e {
      constructor(t, r, s) {
        (this.doc = t),
          (this.platform = r),
          (this.cookieName = s),
          (this.lastCookieString = ''),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === 'server') return null;
        let t = this.doc.cookie || '';
        return (
          t !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = At(t, this.cookieName)),
            (this.lastCookieString = t)),
          this.lastToken
        );
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(x), m(W), m(ro));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })();
function ao(n, e) {
  let i = n.url.toLowerCase();
  if (
    !f(Fi) ||
    n.method === 'GET' ||
    n.method === 'HEAD' ||
    i.startsWith('http://') ||
    i.startsWith('https://')
  )
    return e(n);
  let t = f(xt).getToken(),
    r = f(so);
  return (
    t != null &&
      !n.headers.has(r) &&
      (n = n.clone({ headers: n.headers.set(r, t) })),
    e(n)
  );
}
function Yc(...n) {
  let e = [
    On,
    Ai,
    Ii,
    { provide: Xe, useExisting: Ii },
    { provide: Pt, useFactory: () => f(Ks, { optional: !0 }) ?? f(Ai) },
    { provide: ji, useValue: ao, multi: !0 },
    { provide: Fi, useValue: !0 },
    { provide: xt, useClass: oo },
  ];
  for (let i of n) e.push(...i.ɵproviders);
  return Se(e);
}
var co = new C(''),
  Mi = 'b',
  Di = 'h',
  Oi = 's',
  Pi = 'st',
  Ni = 'u',
  xi = 'rt',
  Ot = new C(''),
  uo = ['GET', 'HEAD'];
function lo(n, e) {
  let y = f(Ot),
    { isCacheActive: i } = y,
    t = Tr(y, ['isCacheActive']),
    { transferCache: r, method: s } = n;
  if (
    !i ||
    r === !1 ||
    (s === 'POST' && !t.includePostRequests && !r) ||
    (s !== 'POST' && !uo.includes(s)) ||
    (!t.includeRequestsWithAuthHeaders && ho(n)) ||
    t.filter?.(n) === !1
  )
    return e(n);
  let o = f(wn),
    a = f(co, { optional: !0 }),
    u = Ge(f(W));
  if (a && !u) throw new I(2803, !1);
  let c = u && a ? mo(n.url, a) : n.url,
    l = po(n, c),
    h = o.get(l, null),
    d = t.includeHeaders;
  if ((typeof r == 'object' && r.includeHeaders && (d = r.includeHeaders), h)) {
    let { [Mi]: w, [xi]: O, [Di]: R, [Oi]: T, [Pi]: U, [Ni]: L } = h,
      A = w;
    switch (O) {
      case 'arraybuffer':
        A = new TextEncoder().encode(w).buffer;
        break;
      case 'blob':
        A = new Blob([w]);
        break;
    }
    let he = new X(R);
    return g(
      new ge({ body: A, headers: he, status: T, statusText: U, url: L }),
    );
  }
  return e(n).pipe(
    M((w) => {
      w instanceof ge &&
        u &&
        o.set(l, {
          [Mi]: w.body,
          [Di]: fo(w.headers, d),
          [Oi]: w.status,
          [Pi]: w.statusText,
          [Ni]: c,
          [xi]: n.responseType,
        });
    }),
  );
}
function ho(n) {
  return n.headers.has('authorization') || n.headers.has('proxy-authorization');
}
function fo(n, e) {
  if (!e) return {};
  let i = {};
  for (let t of e) {
    let r = n.getAll(t);
    r !== null && (i[t] = r);
  }
  return i;
}
function Ui(n) {
  return [...n.keys()]
    .sort()
    .map((e) => `${e}=${n.getAll(e)}`)
    .join('&');
}
function po(n, e) {
  let { params: i, method: t, responseType: r } = n,
    s = Ui(i),
    o = n.serializeBody();
  o instanceof URLSearchParams ? (o = Ui(o)) : typeof o != 'string' && (o = '');
  let a = [t, r, e, o, s].join('|'),
    u = go(a);
  return u;
}
function go(n) {
  let e = 0;
  for (let i of n) e = (Math.imul(31, e) + i.charCodeAt(0)) << 0;
  return (e += 2147483648), e.toString();
}
function $i(n) {
  return [
    {
      provide: Ot,
      useFactory: () => (
        Yr('NgHttpTransferCache'), p({ isCacheActive: !0 }, n)
      ),
    },
    { provide: ki, useValue: lo, multi: !0, deps: [wn, Ot] },
    {
      provide: ze,
      multi: !0,
      useFactory: () => {
        let e = f(Be),
          i = f(Ot);
        return () => {
          ci(e).then(() => {
            i.isCacheActive = !1;
          });
        };
      },
    },
  ];
}
function mo(n, e) {
  let i = new URL(n, 'resolve://').origin,
    t = e[i];
  return t ? n.replace(i, t) : n;
}
var xn = class extends pi {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  Un = class n extends xn {
    static makeCurrent() {
      fi(new n());
    }
    onAndCancel(e, i, t) {
      return (
        e.addEventListener(i, t),
        () => {
          e.removeEventListener(i, t);
        }
      );
    }
    dispatchEvent(e, i) {
      e.dispatchEvent(i);
    }
    remove(e) {
      e.remove();
    }
    createElement(e, i) {
      return (i = i || this.getDefaultDocument()), i.createElement(e);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument('fakeTitle');
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(e) {
      return e.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(e) {
      return e instanceof DocumentFragment;
    }
    getGlobalEventTarget(e, i) {
      return i === 'window'
        ? window
        : i === 'document'
          ? e
          : i === 'body'
            ? e.body
            : null;
    }
    getBaseHref(e) {
      let i = Ro();
      return i == null ? null : So(i);
    }
    resetBaseElement() {
      Ke = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(e) {
      return At(document.cookie, e);
    }
  },
  Ke = null;
function Ro() {
  return (
    (Ke = Ke || document.querySelector('base')),
    Ke ? Ke.getAttribute('href') : null
  );
}
function So(n) {
  return new URL(n, document.baseURI).pathname;
}
var To = (() => {
    let e = class e {
      build() {
        return new XMLHttpRequest();
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  Ut = new C(''),
  Vi = (() => {
    let e = class e {
      constructor(t, r) {
        (this._zone = r),
          (this._eventNameToPlugin = new Map()),
          t.forEach((s) => {
            s.manager = this;
          }),
          (this._plugins = t.slice().reverse());
      }
      addEventListener(t, r, s) {
        return this._findPluginFor(r).addEventListener(t, r, s);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(t) {
        let r = this._eventNameToPlugin.get(t);
        if (r) return r;
        if (((r = this._plugins.find((o) => o.supports(t))), !r))
          throw new I(5101, !1);
        return this._eventNameToPlugin.set(t, r), r;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(Ut), m(G));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  Ze = class {
    constructor(e) {
      this._doc = e;
    }
  },
  Pn = 'ng-app-id',
  qi = (() => {
    let e = class e {
      constructor(t, r, s, o = {}) {
        (this.doc = t),
          (this.appId = r),
          (this.nonce = s),
          (this.platformId = o),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Ge(o)),
          this.resetHostNodes();
      }
      addStyles(t) {
        for (let r of t)
          this.changeUsageCount(r, 1) === 1 && this.onStyleAdded(r);
      }
      removeStyles(t) {
        for (let r of t)
          this.changeUsageCount(r, -1) <= 0 && this.onStyleRemoved(r);
      }
      ngOnDestroy() {
        let t = this.styleNodesInDOM;
        t && (t.forEach((r) => r.remove()), t.clear());
        for (let r of this.getAllStyles()) this.onStyleRemoved(r);
        this.resetHostNodes();
      }
      addHost(t) {
        this.hostNodes.add(t);
        for (let r of this.getAllStyles()) this.addStyleToHost(t, r);
      }
      removeHost(t) {
        this.hostNodes.delete(t);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(t) {
        for (let r of this.hostNodes) this.addStyleToHost(r, t);
      }
      onStyleRemoved(t) {
        let r = this.styleRef;
        r.get(t)?.elements?.forEach((s) => s.remove()), r.delete(t);
      }
      collectServerRenderedStyles() {
        let t = this.doc.head?.querySelectorAll(`style[${Pn}="${this.appId}"]`);
        if (t?.length) {
          let r = new Map();
          return (
            t.forEach((s) => {
              s.textContent != null && r.set(s.textContent, s);
            }),
            r
          );
        }
        return null;
      }
      changeUsageCount(t, r) {
        let s = this.styleRef;
        if (s.has(t)) {
          let o = s.get(t);
          return (o.usage += r), o.usage;
        }
        return s.set(t, { usage: r, elements: [] }), r;
      }
      getStyleElement(t, r) {
        let s = this.styleNodesInDOM,
          o = s?.get(r);
        if (o?.parentNode === t) return s.delete(r), o.removeAttribute(Pn), o;
        {
          let a = this.doc.createElement('style');
          return (
            this.nonce && a.setAttribute('nonce', this.nonce),
            (a.textContent = r),
            this.platformIsServer && a.setAttribute(Pn, this.appId),
            t.appendChild(a),
            a
          );
        }
      }
      addStyleToHost(t, r) {
        let s = this.getStyleElement(t, r),
          o = this.styleRef,
          a = o.get(r)?.elements;
        a ? a.push(s) : o.set(r, { elements: [s], usage: 1 });
      }
      resetHostNodes() {
        let t = this.hostNodes;
        t.clear(), t.add(this.doc.head);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(x), m(vn), m(yn, 8), m(W));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  Nn = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    math: 'http://www.w3.org/1998/Math/MathML',
  },
  kn = /%COMP%/g,
  Gi = '%COMP%',
  bo = `_nghost-${Gi}`,
  Eo = `_ngcontent-${Gi}`,
  Co = !0,
  Io = new C('', { providedIn: 'root', factory: () => Co });
function Ao(n) {
  return Eo.replace(kn, n);
}
function Mo(n) {
  return bo.replace(kn, n);
}
function Wi(n, e) {
  return e.map((i) => i.replace(kn, n));
}
var _i = (() => {
    let e = class e {
      constructor(t, r, s, o, a, u, c, l = null) {
        (this.eventManager = t),
          (this.sharedStylesHost = r),
          (this.appId = s),
          (this.removeStylesOnCompDestroy = o),
          (this.doc = a),
          (this.platformId = u),
          (this.ngZone = c),
          (this.nonce = l),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Ge(u)),
          (this.defaultRenderer = new Je(t, a, c, this.platformIsServer));
      }
      createRenderer(t, r) {
        if (!t || !r) return this.defaultRenderer;
        this.platformIsServer &&
          r.encapsulation === Fe.ShadowDom &&
          (r = P(p({}, r), { encapsulation: Fe.Emulated }));
        let s = this.getOrCreateRenderer(t, r);
        return (
          s instanceof Lt
            ? s.applyToHost(t)
            : s instanceof Ye && s.applyStyles(),
          s
        );
      }
      getOrCreateRenderer(t, r) {
        let s = this.rendererByCompId,
          o = s.get(r.id);
        if (!o) {
          let a = this.doc,
            u = this.ngZone,
            c = this.eventManager,
            l = this.sharedStylesHost,
            h = this.removeStylesOnCompDestroy,
            d = this.platformIsServer;
          switch (r.encapsulation) {
            case Fe.Emulated:
              o = new Lt(c, l, r, this.appId, h, a, u, d);
              break;
            case Fe.ShadowDom:
              return new Ln(c, l, t, r, a, u, this.nonce, d);
            default:
              o = new Ye(c, l, r, h, a, u, d);
              break;
          }
          s.set(r.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(Vi), m(qi), m(vn), m(Io), m(x), m(W), m(G), m(yn));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  Je = class {
    constructor(e, i, t, r) {
      (this.eventManager = e),
        (this.doc = i),
        (this.ngZone = t),
        (this.platformIsServer = r),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(e, i) {
      return i
        ? this.doc.createElementNS(Nn[i] || i, e)
        : this.doc.createElement(e);
    }
    createComment(e) {
      return this.doc.createComment(e);
    }
    createText(e) {
      return this.doc.createTextNode(e);
    }
    appendChild(e, i) {
      (zi(e) ? e.content : e).appendChild(i);
    }
    insertBefore(e, i, t) {
      e && (zi(e) ? e.content : e).insertBefore(i, t);
    }
    removeChild(e, i) {
      i.remove();
    }
    selectRootElement(e, i) {
      let t = typeof e == 'string' ? this.doc.querySelector(e) : e;
      if (!t) throw new I(-5104, !1);
      return i || (t.textContent = ''), t;
    }
    parentNode(e) {
      return e.parentNode;
    }
    nextSibling(e) {
      return e.nextSibling;
    }
    setAttribute(e, i, t, r) {
      if (r) {
        i = r + ':' + i;
        let s = Nn[r];
        s ? e.setAttributeNS(s, i, t) : e.setAttribute(i, t);
      } else e.setAttribute(i, t);
    }
    removeAttribute(e, i, t) {
      if (t) {
        let r = Nn[t];
        r ? e.removeAttributeNS(r, i) : e.removeAttribute(`${t}:${i}`);
      } else e.removeAttribute(i);
    }
    addClass(e, i) {
      e.classList.add(i);
    }
    removeClass(e, i) {
      e.classList.remove(i);
    }
    setStyle(e, i, t, r) {
      r & (_e.DashCase | _e.Important)
        ? e.style.setProperty(i, t, r & _e.Important ? 'important' : '')
        : (e.style[i] = t);
    }
    removeStyle(e, i, t) {
      t & _e.DashCase ? e.style.removeProperty(i) : (e.style[i] = '');
    }
    setProperty(e, i, t) {
      e != null && (e[i] = t);
    }
    setValue(e, i) {
      e.nodeValue = i;
    }
    listen(e, i, t) {
      if (
        typeof e == 'string' &&
        ((e = bn().getGlobalEventTarget(this.doc, e)), !e)
      )
        throw new Error(`Unsupported event target ${e} for event ${i}`);
      return this.eventManager.addEventListener(
        e,
        i,
        this.decoratePreventDefault(t),
      );
    }
    decoratePreventDefault(e) {
      return (i) => {
        if (i === '__ngUnwrap__') return e;
        (this.platformIsServer ? this.ngZone.runGuarded(() => e(i)) : e(i)) ===
          !1 && i.preventDefault();
      };
    }
  };
function zi(n) {
  return n.tagName === 'TEMPLATE' && n.content !== void 0;
}
var Ln = class extends Je {
    constructor(e, i, t, r, s, o, a, u) {
      super(e, s, o, u),
        (this.sharedStylesHost = i),
        (this.hostEl = t),
        (this.shadowRoot = t.attachShadow({ mode: 'open' })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let c = Wi(r.id, r.styles);
      for (let l of c) {
        let h = document.createElement('style');
        a && h.setAttribute('nonce', a),
          (h.textContent = l),
          this.shadowRoot.appendChild(h);
      }
    }
    nodeOrShadowRoot(e) {
      return e === this.hostEl ? this.shadowRoot : e;
    }
    appendChild(e, i) {
      return super.appendChild(this.nodeOrShadowRoot(e), i);
    }
    insertBefore(e, i, t) {
      return super.insertBefore(this.nodeOrShadowRoot(e), i, t);
    }
    removeChild(e, i) {
      return super.removeChild(null, i);
    }
    parentNode(e) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Ye = class extends Je {
    constructor(e, i, t, r, s, o, a, u) {
      super(e, s, o, a),
        (this.sharedStylesHost = i),
        (this.removeStylesOnCompDestroy = r),
        (this.styles = u ? Wi(u, t.styles) : t.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  Lt = class extends Ye {
    constructor(e, i, t, r, s, o, a, u) {
      let c = r + '-' + t.id;
      super(e, i, t, s, o, a, u, c),
        (this.contentAttr = Ao(c)),
        (this.hostAttr = Mo(c));
    }
    applyToHost(e) {
      this.applyStyles(), this.setAttribute(e, this.hostAttr, '');
    }
    createElement(e, i) {
      let t = super.createElement(e, i);
      return super.setAttribute(t, this.contentAttr, ''), t;
    }
  },
  Do = (() => {
    let e = class e extends Ze {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return !0;
      }
      addEventListener(t, r, s) {
        return (
          t.addEventListener(r, s, !1), () => this.removeEventListener(t, r, s)
        );
      }
      removeEventListener(t, r, s) {
        return t.removeEventListener(r, s);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(x));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  Oo = (() => {
    let e = class e extends Ze {
      constructor(t) {
        super(t), (this.delegate = f(li, { optional: !0 }));
      }
      supports(t) {
        return this.delegate ? this.delegate.supports(t) : !1;
      }
      addEventListener(t, r, s) {
        return this.delegate.addEventListener(t, r, s);
      }
      removeEventListener(t, r, s) {
        return this.delegate.removeEventListener(t, r, s);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(x));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  Bi = ['alt', 'control', 'meta', 'shift'],
  Po = {
    '\b': 'Backspace',
    '	': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    Del: 'Delete',
    Esc: 'Escape',
    Left: 'ArrowLeft',
    Right: 'ArrowRight',
    Up: 'ArrowUp',
    Down: 'ArrowDown',
    Menu: 'ContextMenu',
    Scroll: 'ScrollLock',
    Win: 'OS',
  },
  No = {
    alt: (n) => n.altKey,
    control: (n) => n.ctrlKey,
    meta: (n) => n.metaKey,
    shift: (n) => n.shiftKey,
  },
  xo = (() => {
    let e = class e extends Ze {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return e.parseEventName(t) != null;
      }
      addEventListener(t, r, s) {
        let o = e.parseEventName(r),
          a = e.eventCallback(o.fullKey, s, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => bn().onAndCancel(t, o.domEventName, a));
      }
      static parseEventName(t) {
        let r = t.toLowerCase().split('.'),
          s = r.shift();
        if (r.length === 0 || !(s === 'keydown' || s === 'keyup')) return null;
        let o = e._normalizeKey(r.pop()),
          a = '',
          u = r.indexOf('code');
        if (
          (u > -1 && (r.splice(u, 1), (a = 'code.')),
          Bi.forEach((l) => {
            let h = r.indexOf(l);
            h > -1 && (r.splice(h, 1), (a += l + '.'));
          }),
          (a += o),
          r.length != 0 || o.length === 0)
        )
          return null;
        let c = {};
        return (c.domEventName = s), (c.fullKey = a), c;
      }
      static matchEventFullKeyCode(t, r) {
        let s = Po[t.key] || t.key,
          o = '';
        return (
          r.indexOf('code.') > -1 && ((s = t.code), (o = 'code.')),
          s == null || !s
            ? !1
            : ((s = s.toLowerCase()),
              s === ' ' ? (s = 'space') : s === '.' && (s = 'dot'),
              Bi.forEach((a) => {
                if (a !== s) {
                  let u = No[a];
                  u(t) && (o += a + '.');
                }
              }),
              (o += s),
              o === r)
        );
      }
      static eventCallback(t, r, s) {
        return (o) => {
          e.matchEventFullKeyCode(o, t) && s.runGuarded(() => r(o));
        };
      }
      static _normalizeKey(t) {
        return t === 'esc' ? 'escape' : t;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(x));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })();
function Ru(n, e) {
  return ui(p({ rootComponent: n }, Uo(e)));
}
function Uo(n) {
  return {
    appProviders: [...$o, ...(n?.providers ?? [])],
    platformProviders: Fo,
  };
}
function Lo() {
  Un.makeCurrent();
}
function jo() {
  return new mn();
}
function ko() {
  return $r(document), document;
}
var Fo = [
  { provide: W, useValue: yi },
  { provide: _r, useValue: Lo, multi: !0 },
  { provide: x, useFactory: ko, deps: [] },
];
var $o = [
  { provide: jr, useValue: 'root' },
  { provide: mn, useFactory: jo, deps: [] },
  { provide: Ut, useClass: Do, multi: !0, deps: [x, G, W] },
  { provide: Ut, useClass: xo, multi: !0, deps: [x] },
  { provide: Ut, useClass: Oo, multi: !0 },
  _i,
  qi,
  Vi,
  { provide: Zr, useExisting: _i },
  { provide: Mt, useClass: To, deps: [] },
  [],
];
var Xi = (() => {
  let e = class e {
    constructor(t) {
      this._doc = t;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(t) {
      this._doc.title = t || '';
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(m(x));
  }),
    (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let n = e;
  return n;
})();
var _o = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({
        token: e,
        factory: function (r) {
          let s = null;
          return r ? (s = new (r || e)()) : (s = m(zo)), s;
        },
        providedIn: 'root',
      }));
    let n = e;
    return n;
  })(),
  zo = (() => {
    let e = class e extends _o {
      constructor(t) {
        super(), (this._doc = t);
      }
      sanitize(t, r) {
        if (r == null) return null;
        switch (t) {
          case pe.NONE:
            return r;
          case pe.HTML:
            return be(r, 'HTML') ? Te(r) : Xr(this._doc, String(r)).toString();
          case pe.STYLE:
            return be(r, 'Style') ? Te(r) : r;
          case pe.SCRIPT:
            if (be(r, 'Script')) return Te(r);
            throw new I(5200, !1);
          case pe.URL:
            return be(r, 'URL') ? Te(r) : Wr(String(r));
          case pe.RESOURCE_URL:
            if (be(r, 'ResourceURL')) return Te(r);
            throw new I(5201, !1);
          default:
            throw new I(5202, !1);
        }
      }
      bypassSecurityTrustHtml(t) {
        return zr(t);
      }
      bypassSecurityTrustStyle(t) {
        return Br(t);
      }
      bypassSecurityTrustScript(t) {
        return Vr(t);
      }
      bypassSecurityTrustUrl(t) {
        return qr(t);
      }
      bypassSecurityTrustResourceUrl(t) {
        return Gr(t);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(x));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  jn = (function (n) {
    return (
      (n[(n.NoHttpTransferCache = 0)] = 'NoHttpTransferCache'),
      (n[(n.HttpTransferCacheOptions = 1)] = 'HttpTransferCacheOptions'),
      (n[(n.I18nSupport = 2)] = 'I18nSupport'),
      (n[(n.EventReplay = 3)] = 'EventReplay'),
      n
    );
  })(jn || {});
function Su(...n) {
  let e = [],
    i = new Set(),
    t = i.has(jn.HttpTransferCacheOptions);
  for (let { ɵproviders: r, ɵkind: s } of n) i.add(s), r.length && e.push(r);
  return Se([[], hi(), i.has(jn.NoHttpTransferCache) || t ? [] : $i({}), e]);
}
var v = 'primary',
  ft = Symbol('RouteTitle'),
  Bn = class {
    constructor(e) {
      this.params = e || {};
    }
    has(e) {
      return Object.prototype.hasOwnProperty.call(this.params, e);
    }
    get(e) {
      if (this.has(e)) {
        let i = this.params[e];
        return Array.isArray(i) ? i[0] : i;
      }
      return null;
    }
    getAll(e) {
      if (this.has(e)) {
        let i = this.params[e];
        return Array.isArray(i) ? i : [i];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function Oe(n) {
  return new Bn(n);
}
function Vo(n, e, i) {
  let t = i.path.split('/');
  if (
    t.length > n.length ||
    (i.pathMatch === 'full' && (e.hasChildren() || t.length < n.length))
  )
    return null;
  let r = {};
  for (let s = 0; s < t.length; s++) {
    let o = t[s],
      a = n[s];
    if (o[0] === ':') r[o.substring(1)] = a;
    else if (o !== a.path) return null;
  }
  return { consumed: n.slice(0, t.length), posParams: r };
}
function qo(n, e) {
  if (n.length !== e.length) return !1;
  for (let i = 0; i < n.length; ++i) if (!H(n[i], e[i])) return !1;
  return !0;
}
function H(n, e) {
  let i = n ? Vn(n) : void 0,
    t = e ? Vn(e) : void 0;
  if (!i || !t || i.length != t.length) return !1;
  let r;
  for (let s = 0; s < i.length; s++)
    if (((r = i[s]), !is(n[r], e[r]))) return !1;
  return !0;
}
function Vn(n) {
  return [...Object.keys(n), ...Object.getOwnPropertySymbols(n)];
}
function is(n, e) {
  if (Array.isArray(n) && Array.isArray(e)) {
    if (n.length !== e.length) return !1;
    let i = [...n].sort(),
      t = [...e].sort();
    return i.every((r, s) => t[s] === r);
  } else return n === e;
}
function ss(n) {
  return n.length > 0 ? n[n.length - 1] : null;
}
function le(n) {
  return Cr(n) ? n : ai(n) ? N(Promise.resolve(n)) : g(n);
}
var Go = { exact: as, subset: cs },
  os = { exact: Wo, subset: Xo, ignored: () => !0 };
function Hi(n, e, i) {
  return (
    Go[i.paths](n.root, e.root, i.matrixParams) &&
    os[i.queryParams](n.queryParams, e.queryParams) &&
    !(i.fragment === 'exact' && n.fragment !== e.fragment)
  );
}
function Wo(n, e) {
  return H(n, e);
}
function as(n, e, i) {
  if (
    !ve(n.segments, e.segments) ||
    !Ft(n.segments, e.segments, i) ||
    n.numberOfChildren !== e.numberOfChildren
  )
    return !1;
  for (let t in e.children)
    if (!n.children[t] || !as(n.children[t], e.children[t], i)) return !1;
  return !0;
}
function Xo(n, e) {
  return (
    Object.keys(e).length <= Object.keys(n).length &&
    Object.keys(e).every((i) => is(n[i], e[i]))
  );
}
function cs(n, e, i) {
  return us(n, e, e.segments, i);
}
function us(n, e, i, t) {
  if (n.segments.length > i.length) {
    let r = n.segments.slice(0, i.length);
    return !(!ve(r, i) || e.hasChildren() || !Ft(r, i, t));
  } else if (n.segments.length === i.length) {
    if (!ve(n.segments, i) || !Ft(n.segments, i, t)) return !1;
    for (let r in e.children)
      if (!n.children[r] || !cs(n.children[r], e.children[r], t)) return !1;
    return !0;
  } else {
    let r = i.slice(0, n.segments.length),
      s = i.slice(n.segments.length);
    return !ve(n.segments, r) || !Ft(n.segments, r, t) || !n.children[v]
      ? !1
      : us(n.children[v], e, s, t);
  }
}
function Ft(n, e, i) {
  return e.every((t, r) => os[i](n[r].parameters, t.parameters));
}
var Q = class {
    constructor(e = new E([], {}), i = {}, t = null) {
      (this.root = e), (this.queryParams = i), (this.fragment = t);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Oe(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return Zo.serialize(this);
    }
  },
  E = class {
    constructor(e, i) {
      (this.segments = e),
        (this.children = i),
        (this.parent = null),
        Object.values(i).forEach((t) => (t.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return $t(this);
    }
  },
  me = class {
    constructor(e, i) {
      (this.path = e), (this.parameters = i);
    }
    get parameterMap() {
      return (this._parameterMap ??= Oe(this.parameters)), this._parameterMap;
    }
    toString() {
      return hs(this);
    }
  };
function Ho(n, e) {
  return ve(n, e) && n.every((i, t) => H(i.parameters, e[t].parameters));
}
function ve(n, e) {
  return n.length !== e.length ? !1 : n.every((i, t) => i.path === e[t].path);
}
function Ko(n, e) {
  let i = [];
  return (
    Object.entries(n.children).forEach(([t, r]) => {
      t === v && (i = i.concat(e(r, t)));
    }),
    Object.entries(n.children).forEach(([t, r]) => {
      t !== v && (i = i.concat(e(r, t)));
    }),
    i
  );
}
var pt = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: () => new Pe(), providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  Pe = class {
    parse(e) {
      let i = new Gn(e);
      return new Q(
        i.parseRootSegment(),
        i.parseQueryParams(),
        i.parseFragment(),
      );
    }
    serialize(e) {
      let i = `/${Qe(e.root, !0)}`,
        t = Qo(e.queryParams),
        r = typeof e.fragment == 'string' ? `#${Jo(e.fragment)}` : '';
      return `${i}${t}${r}`;
    }
  },
  Zo = new Pe();
function $t(n) {
  return n.segments.map((e) => hs(e)).join('/');
}
function Qe(n, e) {
  if (!n.hasChildren()) return $t(n);
  if (e) {
    let i = n.children[v] ? Qe(n.children[v], !1) : '',
      t = [];
    return (
      Object.entries(n.children).forEach(([r, s]) => {
        r !== v && t.push(`${r}:${Qe(s, !1)}`);
      }),
      t.length > 0 ? `${i}(${t.join('//')})` : i
    );
  } else {
    let i = Ko(n, (t, r) =>
      r === v ? [Qe(n.children[v], !1)] : [`${r}:${Qe(t, !1)}`],
    );
    return Object.keys(n.children).length === 1 && n.children[v] != null
      ? `${$t(n)}/${i[0]}`
      : `${$t(n)}/(${i.join('//')})`;
  }
}
function ls(n) {
  return encodeURIComponent(n)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',');
}
function jt(n) {
  return ls(n).replace(/%3B/gi, ';');
}
function Jo(n) {
  return encodeURI(n);
}
function qn(n) {
  return ls(n)
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/%26/gi, '&');
}
function _t(n) {
  return decodeURIComponent(n);
}
function Ki(n) {
  return _t(n.replace(/\+/g, '%20'));
}
function hs(n) {
  return `${qn(n.path)}${Yo(n.parameters)}`;
}
function Yo(n) {
  return Object.entries(n)
    .map(([e, i]) => `;${qn(e)}=${qn(i)}`)
    .join('');
}
function Qo(n) {
  let e = Object.entries(n)
    .map(([i, t]) =>
      Array.isArray(t)
        ? t.map((r) => `${jt(i)}=${jt(r)}`).join('&')
        : `${jt(i)}=${jt(t)}`,
    )
    .filter((i) => i);
  return e.length ? `?${e.join('&')}` : '';
}
var ea = /^[^\/()?;#]+/;
function Fn(n) {
  let e = n.match(ea);
  return e ? e[0] : '';
}
var ta = /^[^\/()?;=#]+/;
function na(n) {
  let e = n.match(ta);
  return e ? e[0] : '';
}
var ra = /^[^=?&#]+/;
function ia(n) {
  let e = n.match(ra);
  return e ? e[0] : '';
}
var sa = /^[^&#]+/;
function oa(n) {
  let e = n.match(sa);
  return e ? e[0] : '';
}
var Gn = class {
  constructor(e) {
    (this.url = e), (this.remaining = e);
  }
  parseRootSegment() {
    return (
      this.consumeOptional('/'),
      this.remaining === '' ||
      this.peekStartsWith('?') ||
      this.peekStartsWith('#')
        ? new E([], {})
        : new E([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let e = {};
    if (this.consumeOptional('?'))
      do this.parseQueryParam(e);
      while (this.consumeOptional('&'));
    return e;
  }
  parseFragment() {
    return this.consumeOptional('#')
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === '') return {};
    this.consumeOptional('/');
    let e = [];
    for (
      this.peekStartsWith('(') || e.push(this.parseSegment());
      this.peekStartsWith('/') &&
      !this.peekStartsWith('//') &&
      !this.peekStartsWith('/(');

    )
      this.capture('/'), e.push(this.parseSegment());
    let i = {};
    this.peekStartsWith('/(') &&
      (this.capture('/'), (i = this.parseParens(!0)));
    let t = {};
    return (
      this.peekStartsWith('(') && (t = this.parseParens(!1)),
      (e.length > 0 || Object.keys(i).length > 0) && (t[v] = new E(e, i)),
      t
    );
  }
  parseSegment() {
    let e = Fn(this.remaining);
    if (e === '' && this.peekStartsWith(';')) throw new I(4009, !1);
    return this.capture(e), new me(_t(e), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let e = {};
    for (; this.consumeOptional(';'); ) this.parseParam(e);
    return e;
  }
  parseParam(e) {
    let i = na(this.remaining);
    if (!i) return;
    this.capture(i);
    let t = '';
    if (this.consumeOptional('=')) {
      let r = Fn(this.remaining);
      r && ((t = r), this.capture(t));
    }
    e[_t(i)] = _t(t);
  }
  parseQueryParam(e) {
    let i = ia(this.remaining);
    if (!i) return;
    this.capture(i);
    let t = '';
    if (this.consumeOptional('=')) {
      let o = oa(this.remaining);
      o && ((t = o), this.capture(t));
    }
    let r = Ki(i),
      s = Ki(t);
    if (e.hasOwnProperty(r)) {
      let o = e[r];
      Array.isArray(o) || ((o = [o]), (e[r] = o)), o.push(s);
    } else e[r] = s;
  }
  parseParens(e) {
    let i = {};
    for (
      this.capture('(');
      !this.consumeOptional(')') && this.remaining.length > 0;

    ) {
      let t = Fn(this.remaining),
        r = this.remaining[t.length];
      if (r !== '/' && r !== ')' && r !== ';') throw new I(4010, !1);
      let s;
      t.indexOf(':') > -1
        ? ((s = t.slice(0, t.indexOf(':'))), this.capture(s), this.capture(':'))
        : e && (s = v);
      let o = this.parseChildren();
      (i[s] = Object.keys(o).length === 1 ? o[v] : new E([], o)),
        this.consumeOptional('//');
    }
    return i;
  }
  peekStartsWith(e) {
    return this.remaining.startsWith(e);
  }
  consumeOptional(e) {
    return this.peekStartsWith(e)
      ? ((this.remaining = this.remaining.substring(e.length)), !0)
      : !1;
  }
  capture(e) {
    if (!this.consumeOptional(e)) throw new I(4011, !1);
  }
};
function ds(n) {
  return n.segments.length > 0 ? new E([], { [v]: n }) : n;
}
function fs(n) {
  let e = {};
  for (let [t, r] of Object.entries(n.children)) {
    let s = fs(r);
    if (t === v && s.segments.length === 0 && s.hasChildren())
      for (let [o, a] of Object.entries(s.children)) e[o] = a;
    else (s.segments.length > 0 || s.hasChildren()) && (e[t] = s);
  }
  let i = new E(n.segments, e);
  return aa(i);
}
function aa(n) {
  if (n.numberOfChildren === 1 && n.children[v]) {
    let e = n.children[v];
    return new E(n.segments.concat(e.segments), e.children);
  }
  return n;
}
function ye(n) {
  return n instanceof Q;
}
function ca(n, e, i = null, t = null) {
  let r = ps(n);
  return gs(r, e, i, t);
}
function ps(n) {
  let e;
  function i(s) {
    let o = {};
    for (let u of s.children) {
      let c = i(u);
      o[u.outlet] = c;
    }
    let a = new E(s.url, o);
    return s === n && (e = a), a;
  }
  let t = i(n.root),
    r = ds(t);
  return e ?? r;
}
function gs(n, e, i, t) {
  let r = n;
  for (; r.parent; ) r = r.parent;
  if (e.length === 0) return $n(r, r, r, i, t);
  let s = ua(e);
  if (s.toRoot()) return $n(r, r, new E([], {}), i, t);
  let o = la(s, r, n),
    a = o.processChildren
      ? nt(o.segmentGroup, o.index, s.commands)
      : vs(o.segmentGroup, o.index, s.commands);
  return $n(r, o.segmentGroup, a, i, t);
}
function zt(n) {
  return typeof n == 'object' && n != null && !n.outlets && !n.segmentPath;
}
function st(n) {
  return typeof n == 'object' && n != null && n.outlets;
}
function $n(n, e, i, t, r) {
  let s = {};
  t &&
    Object.entries(t).forEach(([u, c]) => {
      s[u] = Array.isArray(c) ? c.map((l) => `${l}`) : `${c}`;
    });
  let o;
  n === e ? (o = i) : (o = ms(n, e, i));
  let a = ds(fs(o));
  return new Q(a, s, r);
}
function ms(n, e, i) {
  let t = {};
  return (
    Object.entries(n.children).forEach(([r, s]) => {
      s === e ? (t[r] = i) : (t[r] = ms(s, e, i));
    }),
    new E(n.segments, t)
  );
}
var Bt = class {
  constructor(e, i, t) {
    if (
      ((this.isAbsolute = e),
      (this.numberOfDoubleDots = i),
      (this.commands = t),
      e && t.length > 0 && zt(t[0]))
    )
      throw new I(4003, !1);
    let r = t.find(st);
    if (r && r !== ss(t)) throw new I(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/'
    );
  }
};
function ua(n) {
  if (typeof n[0] == 'string' && n.length === 1 && n[0] === '/')
    return new Bt(!0, 0, n);
  let e = 0,
    i = !1,
    t = n.reduce((r, s, o) => {
      if (typeof s == 'object' && s != null) {
        if (s.outlets) {
          let a = {};
          return (
            Object.entries(s.outlets).forEach(([u, c]) => {
              a[u] = typeof c == 'string' ? c.split('/') : c;
            }),
            [...r, { outlets: a }]
          );
        }
        if (s.segmentPath) return [...r, s.segmentPath];
      }
      return typeof s != 'string'
        ? [...r, s]
        : o === 0
          ? (s.split('/').forEach((a, u) => {
              (u == 0 && a === '.') ||
                (u == 0 && a === ''
                  ? (i = !0)
                  : a === '..'
                    ? e++
                    : a != '' && r.push(a));
            }),
            r)
          : [...r, s];
    }, []);
  return new Bt(i, e, t);
}
var Ae = class {
  constructor(e, i, t) {
    (this.segmentGroup = e), (this.processChildren = i), (this.index = t);
  }
};
function la(n, e, i) {
  if (n.isAbsolute) return new Ae(e, !0, 0);
  if (!i) return new Ae(e, !1, NaN);
  if (i.parent === null) return new Ae(i, !0, 0);
  let t = zt(n.commands[0]) ? 0 : 1,
    r = i.segments.length - 1 + t;
  return ha(i, r, n.numberOfDoubleDots);
}
function ha(n, e, i) {
  let t = n,
    r = e,
    s = i;
  for (; s > r; ) {
    if (((s -= r), (t = t.parent), !t)) throw new I(4005, !1);
    r = t.segments.length;
  }
  return new Ae(t, !1, r - s);
}
function da(n) {
  return st(n[0]) ? n[0].outlets : { [v]: n };
}
function vs(n, e, i) {
  if (((n ??= new E([], {})), n.segments.length === 0 && n.hasChildren()))
    return nt(n, e, i);
  let t = fa(n, e, i),
    r = i.slice(t.commandIndex);
  if (t.match && t.pathIndex < n.segments.length) {
    let s = new E(n.segments.slice(0, t.pathIndex), {});
    return (
      (s.children[v] = new E(n.segments.slice(t.pathIndex), n.children)),
      nt(s, 0, r)
    );
  } else
    return t.match && r.length === 0
      ? new E(n.segments, {})
      : t.match && !n.hasChildren()
        ? Wn(n, e, i)
        : t.match
          ? nt(n, 0, r)
          : Wn(n, e, i);
}
function nt(n, e, i) {
  if (i.length === 0) return new E(n.segments, {});
  {
    let t = da(i),
      r = {};
    if (
      Object.keys(t).some((s) => s !== v) &&
      n.children[v] &&
      n.numberOfChildren === 1 &&
      n.children[v].segments.length === 0
    ) {
      let s = nt(n.children[v], e, i);
      return new E(n.segments, s.children);
    }
    return (
      Object.entries(t).forEach(([s, o]) => {
        typeof o == 'string' && (o = [o]),
          o !== null && (r[s] = vs(n.children[s], e, o));
      }),
      Object.entries(n.children).forEach(([s, o]) => {
        t[s] === void 0 && (r[s] = o);
      }),
      new E(n.segments, r)
    );
  }
}
function fa(n, e, i) {
  let t = 0,
    r = e,
    s = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; r < n.segments.length; ) {
    if (t >= i.length) return s;
    let o = n.segments[r],
      a = i[t];
    if (st(a)) break;
    let u = `${a}`,
      c = t < i.length - 1 ? i[t + 1] : null;
    if (r > 0 && u === void 0) break;
    if (u && c && typeof c == 'object' && c.outlets === void 0) {
      if (!Ji(u, c, o)) return s;
      t += 2;
    } else {
      if (!Ji(u, {}, o)) return s;
      t++;
    }
    r++;
  }
  return { match: !0, pathIndex: r, commandIndex: t };
}
function Wn(n, e, i) {
  let t = n.segments.slice(0, e),
    r = 0;
  for (; r < i.length; ) {
    let s = i[r];
    if (st(s)) {
      let u = pa(s.outlets);
      return new E(t, u);
    }
    if (r === 0 && zt(i[0])) {
      let u = n.segments[e];
      t.push(new me(u.path, Zi(i[0]))), r++;
      continue;
    }
    let o = st(s) ? s.outlets[v] : `${s}`,
      a = r < i.length - 1 ? i[r + 1] : null;
    o && a && zt(a)
      ? (t.push(new me(o, Zi(a))), (r += 2))
      : (t.push(new me(o, {})), r++);
  }
  return new E(t, {});
}
function pa(n) {
  let e = {};
  return (
    Object.entries(n).forEach(([i, t]) => {
      typeof t == 'string' && (t = [t]),
        t !== null && (e[i] = Wn(new E([], {}), 0, t));
    }),
    e
  );
}
function Zi(n) {
  let e = {};
  return Object.entries(n).forEach(([i, t]) => (e[i] = `${t}`)), e;
}
function Ji(n, e, i) {
  return n == i.path && H(e, i.parameters);
}
var rt = 'imperative',
  D = (function (n) {
    return (
      (n[(n.NavigationStart = 0)] = 'NavigationStart'),
      (n[(n.NavigationEnd = 1)] = 'NavigationEnd'),
      (n[(n.NavigationCancel = 2)] = 'NavigationCancel'),
      (n[(n.NavigationError = 3)] = 'NavigationError'),
      (n[(n.RoutesRecognized = 4)] = 'RoutesRecognized'),
      (n[(n.ResolveStart = 5)] = 'ResolveStart'),
      (n[(n.ResolveEnd = 6)] = 'ResolveEnd'),
      (n[(n.GuardsCheckStart = 7)] = 'GuardsCheckStart'),
      (n[(n.GuardsCheckEnd = 8)] = 'GuardsCheckEnd'),
      (n[(n.RouteConfigLoadStart = 9)] = 'RouteConfigLoadStart'),
      (n[(n.RouteConfigLoadEnd = 10)] = 'RouteConfigLoadEnd'),
      (n[(n.ChildActivationStart = 11)] = 'ChildActivationStart'),
      (n[(n.ChildActivationEnd = 12)] = 'ChildActivationEnd'),
      (n[(n.ActivationStart = 13)] = 'ActivationStart'),
      (n[(n.ActivationEnd = 14)] = 'ActivationEnd'),
      (n[(n.Scroll = 15)] = 'Scroll'),
      (n[(n.NavigationSkipped = 16)] = 'NavigationSkipped'),
      n
    );
  })(D || {}),
  B = class {
    constructor(e, i) {
      (this.id = e), (this.url = i);
    }
  },
  Ne = class extends B {
    constructor(e, i, t = 'imperative', r = null) {
      super(e, i),
        (this.type = D.NavigationStart),
        (this.navigationTrigger = t),
        (this.restoredState = r);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  K = class extends B {
    constructor(e, i, t) {
      super(e, i), (this.urlAfterRedirects = t), (this.type = D.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  $ = (function (n) {
    return (
      (n[(n.Redirect = 0)] = 'Redirect'),
      (n[(n.SupersededByNewNavigation = 1)] = 'SupersededByNewNavigation'),
      (n[(n.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
      (n[(n.GuardRejected = 3)] = 'GuardRejected'),
      n
    );
  })($ || {}),
  Vt = (function (n) {
    return (
      (n[(n.IgnoredSameUrlNavigation = 0)] = 'IgnoredSameUrlNavigation'),
      (n[(n.IgnoredByUrlHandlingStrategy = 1)] =
        'IgnoredByUrlHandlingStrategy'),
      n
    );
  })(Vt || {}),
  Y = class extends B {
    constructor(e, i, t, r) {
      super(e, i),
        (this.reason = t),
        (this.code = r),
        (this.type = D.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  ce = class extends B {
    constructor(e, i, t, r) {
      super(e, i),
        (this.reason = t),
        (this.code = r),
        (this.type = D.NavigationSkipped);
    }
  },
  ot = class extends B {
    constructor(e, i, t, r) {
      super(e, i),
        (this.error = t),
        (this.target = r),
        (this.type = D.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  qt = class extends B {
    constructor(e, i, t, r) {
      super(e, i),
        (this.urlAfterRedirects = t),
        (this.state = r),
        (this.type = D.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Xn = class extends B {
    constructor(e, i, t, r) {
      super(e, i),
        (this.urlAfterRedirects = t),
        (this.state = r),
        (this.type = D.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Hn = class extends B {
    constructor(e, i, t, r, s) {
      super(e, i),
        (this.urlAfterRedirects = t),
        (this.state = r),
        (this.shouldActivate = s),
        (this.type = D.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  Kn = class extends B {
    constructor(e, i, t, r) {
      super(e, i),
        (this.urlAfterRedirects = t),
        (this.state = r),
        (this.type = D.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Zn = class extends B {
    constructor(e, i, t, r) {
      super(e, i),
        (this.urlAfterRedirects = t),
        (this.state = r),
        (this.type = D.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Jn = class {
    constructor(e) {
      (this.route = e), (this.type = D.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Yn = class {
    constructor(e) {
      (this.route = e), (this.type = D.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Qn = class {
    constructor(e) {
      (this.snapshot = e), (this.type = D.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  er = class {
    constructor(e) {
      (this.snapshot = e), (this.type = D.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  tr = class {
    constructor(e) {
      (this.snapshot = e), (this.type = D.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  nr = class {
    constructor(e) {
      (this.snapshot = e), (this.type = D.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  Gt = class {
    constructor(e, i, t) {
      (this.routerEvent = e),
        (this.position = i),
        (this.anchor = t),
        (this.type = D.Scroll);
    }
    toString() {
      let e = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${e}')`;
    }
  },
  at = class {},
  xe = class {
    constructor(e, i) {
      (this.url = e), (this.navigationBehaviorOptions = i);
    }
  };
function ga(n, e) {
  return (
    n.providers &&
      !n._injector &&
      (n._injector = Rn(n.providers, e, `Route: ${n.path}`)),
    n._injector ?? e
  );
}
function V(n) {
  return n.outlet || v;
}
function ma(n, e) {
  let i = n.filter((t) => V(t) === e);
  return i.push(...n.filter((t) => V(t) !== e)), i;
}
function gt(n) {
  if (!n) return null;
  if (n.routeConfig?._injector) return n.routeConfig._injector;
  for (let e = n.parent; e; e = e.parent) {
    let i = e.routeConfig;
    if (i?._loadedInjector) return i._loadedInjector;
    if (i?._injector) return i._injector;
  }
  return null;
}
var rr = class {
    get injector() {
      return gt(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(e) {}
    constructor(e) {
      (this.rootInjector = e),
        (this.outlet = null),
        (this.route = null),
        (this.children = new mt(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  mt = (() => {
    let e = class e {
      constructor(t) {
        (this.rootInjector = t), (this.contexts = new Map());
      }
      onChildOutletCreated(t, r) {
        let s = this.getOrCreateContext(t);
        (s.outlet = r), this.contexts.set(t, s);
      }
      onChildOutletDestroyed(t) {
        let r = this.getContext(t);
        r && ((r.outlet = null), (r.attachRef = null));
      }
      onOutletDeactivated() {
        let t = this.contexts;
        return (this.contexts = new Map()), t;
      }
      onOutletReAttached(t) {
        this.contexts = t;
      }
      getOrCreateContext(t) {
        let r = this.getContext(t);
        return (
          r || ((r = new rr(this.rootInjector)), this.contexts.set(t, r)), r
        );
      }
      getContext(t) {
        return this.contexts.get(t) || null;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(fe));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  Wt = class {
    constructor(e) {
      this._root = e;
    }
    get root() {
      return this._root.value;
    }
    parent(e) {
      let i = this.pathFromRoot(e);
      return i.length > 1 ? i[i.length - 2] : null;
    }
    children(e) {
      let i = ir(e, this._root);
      return i ? i.children.map((t) => t.value) : [];
    }
    firstChild(e) {
      let i = ir(e, this._root);
      return i && i.children.length > 0 ? i.children[0].value : null;
    }
    siblings(e) {
      let i = sr(e, this._root);
      return i.length < 2
        ? []
        : i[i.length - 2].children.map((r) => r.value).filter((r) => r !== e);
    }
    pathFromRoot(e) {
      return sr(e, this._root).map((i) => i.value);
    }
  };
function ir(n, e) {
  if (n === e.value) return e;
  for (let i of e.children) {
    let t = ir(n, i);
    if (t) return t;
  }
  return null;
}
function sr(n, e) {
  if (n === e.value) return [e];
  for (let i of e.children) {
    let t = sr(n, i);
    if (t.length) return t.unshift(e), t;
  }
  return [];
}
var F = class {
  constructor(e, i) {
    (this.value = e), (this.children = i);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function Ie(n) {
  let e = {};
  return n && n.children.forEach((i) => (e[i.value.outlet] = i)), e;
}
var Xt = class extends Wt {
  constructor(e, i) {
    super(e), (this.snapshot = i), pr(this, e);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function ys(n) {
  let e = va(n),
    i = new _([new me('', {})]),
    t = new _({}),
    r = new _({}),
    s = new _({}),
    o = new _(''),
    a = new ue(i, t, s, o, r, v, n, e.root);
  return (a.snapshot = e.root), new Xt(new F(a, []), e);
}
function va(n) {
  let e = {},
    i = {},
    t = {},
    r = '',
    s = new Me([], e, t, r, i, v, n, null, {});
  return new Kt('', new F(s, []));
}
var ue = class {
  constructor(e, i, t, r, s, o, a, u) {
    (this.urlSubject = e),
      (this.paramsSubject = i),
      (this.queryParamsSubject = t),
      (this.fragmentSubject = r),
      (this.dataSubject = s),
      (this.outlet = o),
      (this.component = a),
      (this._futureSnapshot = u),
      (this.title = this.dataSubject?.pipe(b((c) => c[ft])) ?? g(void 0)),
      (this.url = e),
      (this.params = i),
      (this.queryParams = t),
      (this.fragment = r),
      (this.data = s);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(b((e) => Oe(e)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(b((e) => Oe(e)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function Ht(n, e, i = 'emptyOnly') {
  let t,
    { routeConfig: r } = n;
  return (
    e !== null &&
    (i === 'always' ||
      r?.path === '' ||
      (!e.component && !e.routeConfig?.loadComponent))
      ? (t = {
          params: p(p({}, e.params), n.params),
          data: p(p({}, e.data), n.data),
          resolve: p(p(p(p({}, n.data), e.data), r?.data), n._resolvedData),
        })
      : (t = {
          params: p({}, n.params),
          data: p({}, n.data),
          resolve: p(p({}, n.data), n._resolvedData ?? {}),
        }),
    r && Rs(r) && (t.resolve[ft] = r.title),
    t
  );
}
var Me = class {
    get title() {
      return this.data?.[ft];
    }
    constructor(e, i, t, r, s, o, a, u, c) {
      (this.url = e),
        (this.params = i),
        (this.queryParams = t),
        (this.fragment = r),
        (this.data = s),
        (this.outlet = o),
        (this.component = a),
        (this.routeConfig = u),
        (this._resolve = c);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= Oe(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Oe(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let e = this.url.map((t) => t.toString()).join('/'),
        i = this.routeConfig ? this.routeConfig.path : '';
      return `Route(url:'${e}', path:'${i}')`;
    }
  },
  Kt = class extends Wt {
    constructor(e, i) {
      super(i), (this.url = e), pr(this, i);
    }
    toString() {
      return ws(this._root);
    }
  };
function pr(n, e) {
  (e.value._routerState = n), e.children.forEach((i) => pr(n, i));
}
function ws(n) {
  let e = n.children.length > 0 ? ` { ${n.children.map(ws).join(', ')} } ` : '';
  return `${n.value}${e}`;
}
function _n(n) {
  if (n.snapshot) {
    let e = n.snapshot,
      i = n._futureSnapshot;
    (n.snapshot = i),
      H(e.queryParams, i.queryParams) ||
        n.queryParamsSubject.next(i.queryParams),
      e.fragment !== i.fragment && n.fragmentSubject.next(i.fragment),
      H(e.params, i.params) || n.paramsSubject.next(i.params),
      qo(e.url, i.url) || n.urlSubject.next(i.url),
      H(e.data, i.data) || n.dataSubject.next(i.data);
  } else
    (n.snapshot = n._futureSnapshot),
      n.dataSubject.next(n._futureSnapshot.data);
}
function or(n, e) {
  let i = H(n.params, e.params) && Ho(n.url, e.url),
    t = !n.parent != !e.parent;
  return i && !t && (!n.parent || or(n.parent, e.parent));
}
function Rs(n) {
  return typeof n.title == 'string' || n.title === null;
}
var ya = (() => {
    let e = class e {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = v),
          (this.activateEvents = new $e()),
          (this.deactivateEvents = new $e()),
          (this.attachEvents = new $e()),
          (this.detachEvents = new $e()),
          (this.parentContexts = f(mt)),
          (this.location = f(ei)),
          (this.changeDetector = f(Tn)),
          (this.inputBinder = f(Qt, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(t) {
        if (t.name) {
          let { firstChange: r, previousValue: s } = t.name;
          if (r) return;
          this.isTrackedInParentContexts(s) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(s)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(t) {
        return this.parentContexts.getContext(t)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let t = this.parentContexts.getContext(this.name);
        t?.route &&
          (t.attachRef
            ? this.attach(t.attachRef, t.route)
            : this.activateWith(t.route, t.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new I(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new I(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new I(4012, !1);
        this.location.detach();
        let t = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(t.instance),
          t
        );
      }
      attach(t, r) {
        (this.activated = t),
          (this._activatedRoute = r),
          this.location.insert(t.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(t.instance);
      }
      deactivate() {
        if (this.activated) {
          let t = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(t);
        }
      }
      activateWith(t, r) {
        if (this.isActivated) throw new I(4013, !1);
        this._activatedRoute = t;
        let s = this.location,
          a = t.snapshot.component,
          u = this.parentContexts.getOrCreateContext(this.name).children,
          c = new ar(t, u, s.injector);
        (this.activated = s.createComponent(a, {
          index: s.length,
          injector: c,
          environmentInjector: r,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵdir = dn({
        type: e,
        selectors: [['router-outlet']],
        inputs: { name: 'name' },
        outputs: {
          activateEvents: 'activate',
          deactivateEvents: 'deactivate',
          attachEvents: 'attach',
          detachEvents: 'detach',
        },
        exportAs: ['outlet'],
        standalone: !0,
        features: [fn],
      }));
    let n = e;
    return n;
  })(),
  ar = class n {
    __ngOutletInjector(e) {
      return new n(this.route, this.childContexts, e);
    }
    constructor(e, i, t) {
      (this.route = e), (this.childContexts = i), (this.parent = t);
    }
    get(e, i) {
      return e === ue
        ? this.route
        : e === mt
          ? this.childContexts
          : this.parent.get(e, i);
    }
  },
  Qt = new C(''),
  Yi = (() => {
    let e = class e {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(t) {
        this.unsubscribeFromRouteData(t), this.subscribeToRouteData(t);
      }
      unsubscribeFromRouteData(t) {
        this.outletDataSubscriptions.get(t)?.unsubscribe(),
          this.outletDataSubscriptions.delete(t);
      }
      subscribeToRouteData(t) {
        let { activatedRoute: r } = t,
          s = Rt([r.queryParams, r.params, r.data])
            .pipe(
              k(
                ([o, a, u], c) => (
                  (u = p(p(p({}, o), a), u)),
                  c === 0 ? g(u) : Promise.resolve(u)
                ),
              ),
            )
            .subscribe((o) => {
              if (
                !t.isActivated ||
                !t.activatedComponentRef ||
                t.activatedRoute !== r ||
                r.component === null
              ) {
                this.unsubscribeFromRouteData(t);
                return;
              }
              let a = di(r.component);
              if (!a) {
                this.unsubscribeFromRouteData(t);
                return;
              }
              for (let { templateName: u } of a.inputs)
                t.activatedComponentRef.setInput(u, o[u]);
            });
        this.outletDataSubscriptions.set(t, s);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })();
function wa(n, e, i) {
  let t = ct(n, e._root, i ? i._root : void 0);
  return new Xt(t, e);
}
function ct(n, e, i) {
  if (i && n.shouldReuseRoute(e.value, i.value.snapshot)) {
    let t = i.value;
    t._futureSnapshot = e.value;
    let r = Ra(n, e, i);
    return new F(t, r);
  } else {
    if (n.shouldAttach(e.value)) {
      let s = n.retrieve(e.value);
      if (s !== null) {
        let o = s.route;
        return (
          (o.value._futureSnapshot = e.value),
          (o.children = e.children.map((a) => ct(n, a))),
          o
        );
      }
    }
    let t = Sa(e.value),
      r = e.children.map((s) => ct(n, s));
    return new F(t, r);
  }
}
function Ra(n, e, i) {
  return e.children.map((t) => {
    for (let r of i.children)
      if (n.shouldReuseRoute(t.value, r.value.snapshot)) return ct(n, t, r);
    return ct(n, t);
  });
}
function Sa(n) {
  return new ue(
    new _(n.url),
    new _(n.params),
    new _(n.queryParams),
    new _(n.fragment),
    new _(n.data),
    n.outlet,
    n.component,
    n,
  );
}
var ut = class {
    constructor(e, i) {
      (this.redirectTo = e), (this.navigationBehaviorOptions = i);
    }
  },
  Ss = 'ngNavigationCancelingError';
function Zt(n, e) {
  let { redirectTo: i, navigationBehaviorOptions: t } = ye(e)
      ? { redirectTo: e, navigationBehaviorOptions: void 0 }
      : e,
    r = Ts(!1, $.Redirect);
  return (r.url = i), (r.navigationBehaviorOptions = t), r;
}
function Ts(n, e) {
  let i = new Error(`NavigationCancelingError: ${n || ''}`);
  return (i[Ss] = !0), (i.cancellationCode = e), i;
}
function Ta(n) {
  return bs(n) && ye(n.url);
}
function bs(n) {
  return !!n && n[Ss];
}
var ba = (n, e, i, t) =>
    b(
      (r) => (
        new cr(e, r.targetRouterState, r.currentRouterState, i, t).activate(n),
        r
      ),
    ),
  cr = class {
    constructor(e, i, t, r, s) {
      (this.routeReuseStrategy = e),
        (this.futureState = i),
        (this.currState = t),
        (this.forwardEvent = r),
        (this.inputBindingEnabled = s);
    }
    activate(e) {
      let i = this.futureState._root,
        t = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(i, t, e),
        _n(this.futureState.root),
        this.activateChildRoutes(i, t, e);
    }
    deactivateChildRoutes(e, i, t) {
      let r = Ie(i);
      e.children.forEach((s) => {
        let o = s.value.outlet;
        this.deactivateRoutes(s, r[o], t), delete r[o];
      }),
        Object.values(r).forEach((s) => {
          this.deactivateRouteAndItsChildren(s, t);
        });
    }
    deactivateRoutes(e, i, t) {
      let r = e.value,
        s = i ? i.value : null;
      if (r === s)
        if (r.component) {
          let o = t.getContext(r.outlet);
          o && this.deactivateChildRoutes(e, i, o.children);
        } else this.deactivateChildRoutes(e, i, t);
      else s && this.deactivateRouteAndItsChildren(i, t);
    }
    deactivateRouteAndItsChildren(e, i) {
      e.value.component &&
      this.routeReuseStrategy.shouldDetach(e.value.snapshot)
        ? this.detachAndStoreRouteSubtree(e, i)
        : this.deactivateRouteAndOutlet(e, i);
    }
    detachAndStoreRouteSubtree(e, i) {
      let t = i.getContext(e.value.outlet),
        r = t && e.value.component ? t.children : i,
        s = Ie(e);
      for (let o of Object.values(s)) this.deactivateRouteAndItsChildren(o, r);
      if (t && t.outlet) {
        let o = t.outlet.detach(),
          a = t.children.onOutletDeactivated();
        this.routeReuseStrategy.store(e.value.snapshot, {
          componentRef: o,
          route: e,
          contexts: a,
        });
      }
    }
    deactivateRouteAndOutlet(e, i) {
      let t = i.getContext(e.value.outlet),
        r = t && e.value.component ? t.children : i,
        s = Ie(e);
      for (let o of Object.values(s)) this.deactivateRouteAndItsChildren(o, r);
      t &&
        (t.outlet && (t.outlet.deactivate(), t.children.onOutletDeactivated()),
        (t.attachRef = null),
        (t.route = null));
    }
    activateChildRoutes(e, i, t) {
      let r = Ie(i);
      e.children.forEach((s) => {
        this.activateRoutes(s, r[s.value.outlet], t),
          this.forwardEvent(new nr(s.value.snapshot));
      }),
        e.children.length && this.forwardEvent(new er(e.value.snapshot));
    }
    activateRoutes(e, i, t) {
      let r = e.value,
        s = i ? i.value : null;
      if ((_n(r), r === s))
        if (r.component) {
          let o = t.getOrCreateContext(r.outlet);
          this.activateChildRoutes(e, i, o.children);
        } else this.activateChildRoutes(e, i, t);
      else if (r.component) {
        let o = t.getOrCreateContext(r.outlet);
        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
          let a = this.routeReuseStrategy.retrieve(r.snapshot);
          this.routeReuseStrategy.store(r.snapshot, null),
            o.children.onOutletReAttached(a.contexts),
            (o.attachRef = a.componentRef),
            (o.route = a.route.value),
            o.outlet && o.outlet.attach(a.componentRef, a.route.value),
            _n(a.route.value),
            this.activateChildRoutes(e, null, o.children);
        } else
          (o.attachRef = null),
            (o.route = r),
            o.outlet && o.outlet.activateWith(r, o.injector),
            this.activateChildRoutes(e, null, o.children);
      } else this.activateChildRoutes(e, null, t);
    }
  },
  Jt = class {
    constructor(e) {
      (this.path = e), (this.route = this.path[this.path.length - 1]);
    }
  },
  De = class {
    constructor(e, i) {
      (this.component = e), (this.route = i);
    }
  };
function Ea(n, e, i) {
  let t = n._root,
    r = e ? e._root : null;
  return et(t, r, i, [t.value]);
}
function Ca(n) {
  let e = n.routeConfig ? n.routeConfig.canActivateChild : null;
  return !e || e.length === 0 ? null : { node: n, guards: e };
}
function Le(n, e) {
  let i = Symbol(),
    t = e.get(n, i);
  return t === i ? (typeof n == 'function' && !xr(n) ? n : e.get(n)) : t;
}
function et(
  n,
  e,
  i,
  t,
  r = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let s = Ie(e);
  return (
    n.children.forEach((o) => {
      Ia(o, s[o.value.outlet], i, t.concat([o.value]), r),
        delete s[o.value.outlet];
    }),
    Object.entries(s).forEach(([o, a]) => it(a, i.getContext(o), r)),
    r
  );
}
function Ia(
  n,
  e,
  i,
  t,
  r = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let s = n.value,
    o = e ? e.value : null,
    a = i ? i.getContext(n.value.outlet) : null;
  if (o && s.routeConfig === o.routeConfig) {
    let u = Aa(o, s, s.routeConfig.runGuardsAndResolvers);
    u
      ? r.canActivateChecks.push(new Jt(t))
      : ((s.data = o.data), (s._resolvedData = o._resolvedData)),
      s.component ? et(n, e, a ? a.children : null, t, r) : et(n, e, i, t, r),
      u &&
        a &&
        a.outlet &&
        a.outlet.isActivated &&
        r.canDeactivateChecks.push(new De(a.outlet.component, o));
  } else
    o && it(e, a, r),
      r.canActivateChecks.push(new Jt(t)),
      s.component
        ? et(n, null, a ? a.children : null, t, r)
        : et(n, null, i, t, r);
  return r;
}
function Aa(n, e, i) {
  if (typeof i == 'function') return i(n, e);
  switch (i) {
    case 'pathParamsChange':
      return !ve(n.url, e.url);
    case 'pathParamsOrQueryParamsChange':
      return !ve(n.url, e.url) || !H(n.queryParams, e.queryParams);
    case 'always':
      return !0;
    case 'paramsOrQueryParamsChange':
      return !or(n, e) || !H(n.queryParams, e.queryParams);
    case 'paramsChange':
    default:
      return !or(n, e);
  }
}
function it(n, e, i) {
  let t = Ie(n),
    r = n.value;
  Object.entries(t).forEach(([s, o]) => {
    r.component
      ? e
        ? it(o, e.children.getContext(s), i)
        : it(o, null, i)
      : it(o, e, i);
  }),
    r.component
      ? e && e.outlet && e.outlet.isActivated
        ? i.canDeactivateChecks.push(new De(e.outlet.component, r))
        : i.canDeactivateChecks.push(new De(null, r))
      : i.canDeactivateChecks.push(new De(null, r));
}
function vt(n) {
  return typeof n == 'function';
}
function Ma(n) {
  return typeof n == 'boolean';
}
function Da(n) {
  return n && vt(n.canLoad);
}
function Oa(n) {
  return n && vt(n.canActivate);
}
function Pa(n) {
  return n && vt(n.canActivateChild);
}
function Na(n) {
  return n && vt(n.canDeactivate);
}
function xa(n) {
  return n && vt(n.canMatch);
}
function Es(n) {
  return n instanceof Ir || n?.name === 'EmptyError';
}
var kt = Symbol('INITIAL_VALUE');
function Ue() {
  return k((n) =>
    Rt(n.map((e) => e.pipe(we(1), Pr(kt)))).pipe(
      b((e) => {
        for (let i of e)
          if (i !== !0) {
            if (i === kt) return kt;
            if (i === !1 || Ua(i)) return i;
          }
        return !0;
      }),
      Z((e) => e !== kt),
      we(1),
    ),
  );
}
function Ua(n) {
  return ye(n) || n instanceof ut;
}
function La(n, e) {
  return j((i) => {
    let {
      targetSnapshot: t,
      currentSnapshot: r,
      guards: { canActivateChecks: s, canDeactivateChecks: o },
    } = i;
    return o.length === 0 && s.length === 0
      ? g(P(p({}, i), { guardsResult: !0 }))
      : ja(o, t, r, n).pipe(
          j((a) => (a && Ma(a) ? ka(t, s, n, e) : g(a))),
          b((a) => P(p({}, i), { guardsResult: a })),
        );
  });
}
function ja(n, e, i, t) {
  return N(n).pipe(
    j((r) => Ba(r.component, r.route, i, e, t)),
    ie((r) => r !== !0, !0),
  );
}
function ka(n, e, i, t) {
  return N(e).pipe(
    re((r) =>
      Ar(
        $a(r.route.parent, t),
        Fa(r.route, t),
        za(n, r.path, i),
        _a(n, r.route, i),
      ),
    ),
    ie((r) => r !== !0, !0),
  );
}
function Fa(n, e) {
  return n !== null && e && e(new tr(n)), g(!0);
}
function $a(n, e) {
  return n !== null && e && e(new Qn(n)), g(!0);
}
function _a(n, e, i) {
  let t = e.routeConfig ? e.routeConfig.canActivate : null;
  if (!t || t.length === 0) return g(!0);
  let r = t.map((s) =>
    an(() => {
      let o = gt(e) ?? i,
        a = Le(s, o),
        u = Oa(a) ? a.canActivate(e, n) : z(o, () => a(e, n));
      return le(u).pipe(ie());
    }),
  );
  return g(r).pipe(Ue());
}
function za(n, e, i) {
  let t = e[e.length - 1],
    s = e
      .slice(0, e.length - 1)
      .reverse()
      .map((o) => Ca(o))
      .filter((o) => o !== null)
      .map((o) =>
        an(() => {
          let a = o.guards.map((u) => {
            let c = gt(o.node) ?? i,
              l = Le(u, c),
              h = Pa(l) ? l.canActivateChild(t, n) : z(c, () => l(t, n));
            return le(h).pipe(ie());
          });
          return g(a).pipe(Ue());
        }),
      );
  return g(s).pipe(Ue());
}
function Ba(n, e, i, t, r) {
  let s = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
  if (!s || s.length === 0) return g(!0);
  let o = s.map((a) => {
    let u = gt(e) ?? r,
      c = Le(a, u),
      l = Na(c) ? c.canDeactivate(n, e, i, t) : z(u, () => c(n, e, i, t));
    return le(l).pipe(ie());
  });
  return g(o).pipe(Ue());
}
function Va(n, e, i, t) {
  let r = e.canLoad;
  if (r === void 0 || r.length === 0) return g(!0);
  let s = r.map((o) => {
    let a = Le(o, n),
      u = Da(a) ? a.canLoad(e, i) : z(n, () => a(e, i));
    return le(u);
  });
  return g(s).pipe(Ue(), Cs(t));
}
function Cs(n) {
  return Er(
    M((e) => {
      if (typeof e != 'boolean') throw Zt(n, e);
    }),
    b((e) => e === !0),
  );
}
function qa(n, e, i, t) {
  let r = e.canMatch;
  if (!r || r.length === 0) return g(!0);
  let s = r.map((o) => {
    let a = Le(o, n),
      u = xa(a) ? a.canMatch(e, i) : z(n, () => a(e, i));
    return le(u);
  });
  return g(s).pipe(Ue(), Cs(t));
}
var lt = class {
    constructor(e) {
      this.segmentGroup = e || null;
    }
  },
  ht = class extends Error {
    constructor(e) {
      super(), (this.urlTree = e);
    }
  };
function Ce(n) {
  return ke(new lt(n));
}
function Ga(n) {
  return ke(new I(4e3, !1));
}
function Wa(n) {
  return ke(Ts(!1, $.GuardRejected));
}
var ur = class {
    constructor(e, i) {
      (this.urlSerializer = e), (this.urlTree = i);
    }
    lineralizeSegments(e, i) {
      let t = [],
        r = i.root;
      for (;;) {
        if (((t = t.concat(r.segments)), r.numberOfChildren === 0)) return g(t);
        if (r.numberOfChildren > 1 || !r.children[v])
          return Ga(`${e.redirectTo}`);
        r = r.children[v];
      }
    }
    applyRedirectCommands(e, i, t, r, s) {
      if (typeof i != 'string') {
        let a = i,
          {
            queryParams: u,
            fragment: c,
            routeConfig: l,
            url: h,
            outlet: d,
            params: y,
            data: w,
            title: O,
          } = r,
          R = z(s, () =>
            a({
              params: y,
              data: w,
              queryParams: u,
              fragment: c,
              routeConfig: l,
              url: h,
              outlet: d,
              title: O,
            }),
          );
        if (R instanceof Q) throw new ht(R);
        i = R;
      }
      let o = this.applyRedirectCreateUrlTree(
        i,
        this.urlSerializer.parse(i),
        e,
        t,
      );
      if (i[0] === '/') throw new ht(o);
      return o;
    }
    applyRedirectCreateUrlTree(e, i, t, r) {
      let s = this.createSegmentGroup(e, i.root, t, r);
      return new Q(
        s,
        this.createQueryParams(i.queryParams, this.urlTree.queryParams),
        i.fragment,
      );
    }
    createQueryParams(e, i) {
      let t = {};
      return (
        Object.entries(e).forEach(([r, s]) => {
          if (typeof s == 'string' && s[0] === ':') {
            let a = s.substring(1);
            t[r] = i[a];
          } else t[r] = s;
        }),
        t
      );
    }
    createSegmentGroup(e, i, t, r) {
      let s = this.createSegments(e, i.segments, t, r),
        o = {};
      return (
        Object.entries(i.children).forEach(([a, u]) => {
          o[a] = this.createSegmentGroup(e, u, t, r);
        }),
        new E(s, o)
      );
    }
    createSegments(e, i, t, r) {
      return i.map((s) =>
        s.path[0] === ':'
          ? this.findPosParam(e, s, r)
          : this.findOrReturn(s, t),
      );
    }
    findPosParam(e, i, t) {
      let r = t[i.path.substring(1)];
      if (!r) throw new I(4001, !1);
      return r;
    }
    findOrReturn(e, i) {
      let t = 0;
      for (let r of i) {
        if (r.path === e.path) return i.splice(t), r;
        t++;
      }
      return e;
    }
  },
  lr = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function Xa(n, e, i, t, r) {
  let s = gr(n, e, i);
  return s.matched
    ? ((t = ga(e, t)),
      qa(t, e, i, r).pipe(b((o) => (o === !0 ? s : p({}, lr)))))
    : g(s);
}
function gr(n, e, i) {
  if (e.path === '**') return Ha(i);
  if (e.path === '')
    return e.pathMatch === 'full' && (n.hasChildren() || i.length > 0)
      ? p({}, lr)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: i,
          parameters: {},
          positionalParamSegments: {},
        };
  let r = (e.matcher || Vo)(i, n, e);
  if (!r) return p({}, lr);
  let s = {};
  Object.entries(r.posParams ?? {}).forEach(([a, u]) => {
    s[a] = u.path;
  });
  let o =
    r.consumed.length > 0
      ? p(p({}, s), r.consumed[r.consumed.length - 1].parameters)
      : s;
  return {
    matched: !0,
    consumedSegments: r.consumed,
    remainingSegments: i.slice(r.consumed.length),
    parameters: o,
    positionalParamSegments: r.posParams ?? {},
  };
}
function Ha(n) {
  return {
    matched: !0,
    parameters: n.length > 0 ? ss(n).parameters : {},
    consumedSegments: n,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Qi(n, e, i, t) {
  return i.length > 0 && Ja(n, i, t)
    ? {
        segmentGroup: new E(e, Za(t, new E(i, n.children))),
        slicedSegments: [],
      }
    : i.length === 0 && Ya(n, i, t)
      ? {
          segmentGroup: new E(n.segments, Ka(n, i, t, n.children)),
          slicedSegments: i,
        }
      : { segmentGroup: new E(n.segments, n.children), slicedSegments: i };
}
function Ka(n, e, i, t) {
  let r = {};
  for (let s of i)
    if (en(n, e, s) && !t[V(s)]) {
      let o = new E([], {});
      r[V(s)] = o;
    }
  return p(p({}, t), r);
}
function Za(n, e) {
  let i = {};
  i[v] = e;
  for (let t of n)
    if (t.path === '' && V(t) !== v) {
      let r = new E([], {});
      i[V(t)] = r;
    }
  return i;
}
function Ja(n, e, i) {
  return i.some((t) => en(n, e, t) && V(t) !== v);
}
function Ya(n, e, i) {
  return i.some((t) => en(n, e, t));
}
function en(n, e, i) {
  return (n.hasChildren() || e.length > 0) && i.pathMatch === 'full'
    ? !1
    : i.path === '';
}
function Qa(n, e, i, t) {
  return V(n) !== t && (t === v || !en(e, i, n)) ? !1 : gr(e, n, i).matched;
}
function ec(n, e, i) {
  return e.length === 0 && !n.children[i];
}
var hr = class {};
function tc(n, e, i, t, r, s, o = 'emptyOnly') {
  return new dr(n, e, i, t, r, o, s).recognize();
}
var nc = 31,
  dr = class {
    constructor(e, i, t, r, s, o, a) {
      (this.injector = e),
        (this.configLoader = i),
        (this.rootComponentType = t),
        (this.config = r),
        (this.urlTree = s),
        (this.paramsInheritanceStrategy = o),
        (this.urlSerializer = a),
        (this.applyRedirects = new ur(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(e) {
      return new I(4002, `'${e.segmentGroup}'`);
    }
    recognize() {
      let e = Qi(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(e).pipe(
        b(({ children: i, rootSnapshot: t }) => {
          let r = new F(t, i),
            s = new Kt('', r),
            o = ca(t, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (o.queryParams = this.urlTree.queryParams),
            (s.url = this.urlSerializer.serialize(o)),
            { state: s, tree: o }
          );
        }),
      );
    }
    match(e) {
      let i = new Me(
        [],
        Object.freeze({}),
        Object.freeze(p({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        v,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(this.injector, this.config, e, v, i).pipe(
        b((t) => ({ children: t, rootSnapshot: i })),
        J((t) => {
          if (t instanceof ht)
            return (this.urlTree = t.urlTree), this.match(t.urlTree.root);
          throw t instanceof lt ? this.noMatchError(t) : t;
        }),
      );
    }
    processSegmentGroup(e, i, t, r, s) {
      return t.segments.length === 0 && t.hasChildren()
        ? this.processChildren(e, i, t, s)
        : this.processSegment(e, i, t, t.segments, r, !0, s).pipe(
            b((o) => (o instanceof F ? [o] : [])),
          );
    }
    processChildren(e, i, t, r) {
      let s = [];
      for (let o of Object.keys(t.children))
        o === 'primary' ? s.unshift(o) : s.push(o);
      return N(s).pipe(
        re((o) => {
          let a = t.children[o],
            u = ma(i, o);
          return this.processSegmentGroup(e, u, a, o, r);
        }),
        Or((o, a) => (o.push(...a), o)),
        cn(null),
        Dr(),
        j((o) => {
          if (o === null) return Ce(t);
          let a = Is(o);
          return rc(a), g(a);
        }),
      );
    }
    processSegment(e, i, t, r, s, o, a) {
      return N(i).pipe(
        re((u) =>
          this.processSegmentAgainstRoute(
            u._injector ?? e,
            i,
            u,
            t,
            r,
            s,
            o,
            a,
          ).pipe(
            J((c) => {
              if (c instanceof lt) return g(null);
              throw c;
            }),
          ),
        ),
        ie((u) => !!u),
        J((u) => {
          if (Es(u)) return ec(t, r, s) ? g(new hr()) : Ce(t);
          throw u;
        }),
      );
    }
    processSegmentAgainstRoute(e, i, t, r, s, o, a, u) {
      return Qa(t, r, s, o)
        ? t.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(e, r, t, s, o, u)
          : this.allowRedirects && a
            ? this.expandSegmentAgainstRouteUsingRedirect(e, r, i, t, s, o, u)
            : Ce(r)
        : Ce(r);
    }
    expandSegmentAgainstRouteUsingRedirect(e, i, t, r, s, o, a) {
      let {
        matched: u,
        parameters: c,
        consumedSegments: l,
        positionalParamSegments: h,
        remainingSegments: d,
      } = gr(i, r, s);
      if (!u) return Ce(i);
      typeof r.redirectTo == 'string' &&
        r.redirectTo[0] === '/' &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > nc && (this.allowRedirects = !1));
      let y = new Me(
          s,
          c,
          Object.freeze(p({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          es(r),
          V(r),
          r.component ?? r._loadedComponent ?? null,
          r,
          ts(r),
        ),
        w = Ht(y, a, this.paramsInheritanceStrategy);
      (y.params = Object.freeze(w.params)), (y.data = Object.freeze(w.data));
      let O = this.applyRedirects.applyRedirectCommands(
        l,
        r.redirectTo,
        h,
        y,
        e,
      );
      return this.applyRedirects
        .lineralizeSegments(r, O)
        .pipe(j((R) => this.processSegment(e, t, i, R.concat(d), o, !1, a)));
    }
    matchSegmentAgainstRoute(e, i, t, r, s, o) {
      let a = Xa(i, t, r, e, this.urlSerializer);
      return (
        t.path === '**' && (i.children = {}),
        a.pipe(
          k((u) =>
            u.matched
              ? ((e = t._injector ?? e),
                this.getChildConfig(e, t, r).pipe(
                  k(({ routes: c }) => {
                    let l = t._loadedInjector ?? e,
                      {
                        parameters: h,
                        consumedSegments: d,
                        remainingSegments: y,
                      } = u,
                      w = new Me(
                        d,
                        h,
                        Object.freeze(p({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        es(t),
                        V(t),
                        t.component ?? t._loadedComponent ?? null,
                        t,
                        ts(t),
                      ),
                      O = Ht(w, o, this.paramsInheritanceStrategy);
                    (w.params = Object.freeze(O.params)),
                      (w.data = Object.freeze(O.data));
                    let { segmentGroup: R, slicedSegments: T } = Qi(i, d, y, c);
                    if (T.length === 0 && R.hasChildren())
                      return this.processChildren(l, c, R, w).pipe(
                        b((L) => new F(w, L)),
                      );
                    if (c.length === 0 && T.length === 0)
                      return g(new F(w, []));
                    let U = V(t) === s;
                    return this.processSegment(
                      l,
                      c,
                      R,
                      T,
                      U ? v : s,
                      !0,
                      w,
                    ).pipe(b((L) => new F(w, L instanceof F ? [L] : [])));
                  }),
                ))
              : Ce(i),
          ),
        )
      );
    }
    getChildConfig(e, i, t) {
      return i.children
        ? g({ routes: i.children, injector: e })
        : i.loadChildren
          ? i._loadedRoutes !== void 0
            ? g({ routes: i._loadedRoutes, injector: i._loadedInjector })
            : Va(e, i, t, this.urlSerializer).pipe(
                j((r) =>
                  r
                    ? this.configLoader.loadChildren(e, i).pipe(
                        M((s) => {
                          (i._loadedRoutes = s.routes),
                            (i._loadedInjector = s.injector);
                        }),
                      )
                    : Wa(i),
                ),
              )
          : g({ routes: [], injector: e });
    }
  };
function rc(n) {
  n.sort((e, i) =>
    e.value.outlet === v
      ? -1
      : i.value.outlet === v
        ? 1
        : e.value.outlet.localeCompare(i.value.outlet),
  );
}
function ic(n) {
  let e = n.value.routeConfig;
  return e && e.path === '';
}
function Is(n) {
  let e = [],
    i = new Set();
  for (let t of n) {
    if (!ic(t)) {
      e.push(t);
      continue;
    }
    let r = e.find((s) => t.value.routeConfig === s.value.routeConfig);
    r !== void 0 ? (r.children.push(...t.children), i.add(r)) : e.push(t);
  }
  for (let t of i) {
    let r = Is(t.children);
    e.push(new F(t.value, r));
  }
  return e.filter((t) => !i.has(t));
}
function es(n) {
  return n.data || {};
}
function ts(n) {
  return n.resolve || {};
}
function sc(n, e, i, t, r, s) {
  return j((o) =>
    tc(n, e, i, t, o.extractedUrl, r, s).pipe(
      b(({ state: a, tree: u }) =>
        P(p({}, o), { targetSnapshot: a, urlAfterRedirects: u }),
      ),
    ),
  );
}
function oc(n, e) {
  return j((i) => {
    let {
      targetSnapshot: t,
      guards: { canActivateChecks: r },
    } = i;
    if (!r.length) return g(i);
    let s = new Set(r.map((u) => u.route)),
      o = new Set();
    for (let u of s) if (!o.has(u)) for (let c of As(u)) o.add(c);
    let a = 0;
    return N(o).pipe(
      re((u) =>
        s.has(u)
          ? ac(u, t, n, e)
          : ((u.data = Ht(u, u.parent, n).resolve), g(void 0)),
      ),
      M(() => a++),
      un(1),
      j((u) => (a === o.size ? g(i) : ne)),
    );
  });
}
function As(n) {
  let e = n.children.map((i) => As(i)).flat();
  return [n, ...e];
}
function ac(n, e, i, t) {
  let r = n.routeConfig,
    s = n._resolve;
  return (
    r?.title !== void 0 && !Rs(r) && (s[ft] = r.title),
    cc(s, n, e, t).pipe(
      b(
        (o) => (
          (n._resolvedData = o), (n.data = Ht(n, n.parent, i).resolve), null
        ),
      ),
    )
  );
}
function cc(n, e, i, t) {
  let r = Vn(n);
  if (r.length === 0) return g({});
  let s = {};
  return N(r).pipe(
    j((o) =>
      uc(n[o], e, i, t).pipe(
        ie(),
        M((a) => {
          if (a instanceof ut) throw Zt(new Pe(), a);
          s[o] = a;
        }),
      ),
    ),
    un(1),
    Mr(s),
    J((o) => (Es(o) ? ne : ke(o))),
  );
}
function uc(n, e, i, t) {
  let r = gt(e) ?? t,
    s = Le(n, r),
    o = s.resolve ? s.resolve(e, i) : z(r, () => s(e, i));
  return le(o);
}
function zn(n) {
  return k((e) => {
    let i = n(e);
    return i ? N(i).pipe(b(() => e)) : g(e);
  });
}
var Ms = (() => {
    let e = class e {
      buildTitle(t) {
        let r,
          s = t.root;
        for (; s !== void 0; )
          (r = this.getResolvedTitleForRoute(s) ?? r),
            (s = s.children.find((o) => o.outlet === v));
        return r;
      }
      getResolvedTitleForRoute(t) {
        return t.data[ft];
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: () => f(lc), providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  lc = (() => {
    let e = class e extends Ms {
      constructor(t) {
        super(), (this.title = t);
      }
      updateTitle(t) {
        let r = this.buildTitle(t);
        r !== void 0 && this.title.setTitle(r);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(Xi));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  yt = new C('', { providedIn: 'root', factory: () => ({}) }),
  hc = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵcmp = Lr({
        type: e,
        selectors: [['ng-component']],
        standalone: !0,
        features: [oi],
        decls: 1,
        vars: 0,
        template: function (r, s) {
          r & 1 && ii(0, 'router-outlet');
        },
        dependencies: [ya],
        encapsulation: 2,
      }));
    let n = e;
    return n;
  })();
function mr(n) {
  let e = n.children && n.children.map(mr),
    i = e ? P(p({}, n), { children: e }) : p({}, n);
  return (
    !i.component &&
      !i.loadComponent &&
      (e || i.loadChildren) &&
      i.outlet &&
      i.outlet !== v &&
      (i.component = hc),
    i
  );
}
var dt = new C(''),
  vr = (() => {
    let e = class e {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = f(Ct));
      }
      loadComponent(t) {
        if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
        if (t._loadedComponent) return g(t._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(t);
        let r = le(t.loadComponent()).pipe(
            b(Ds),
            M((o) => {
              this.onLoadEndListener && this.onLoadEndListener(t),
                (t._loadedComponent = o);
            }),
            Re(() => {
              this.componentLoaders.delete(t);
            }),
          ),
          s = new rn(r, () => new te()).pipe(nn());
        return this.componentLoaders.set(t, s), s;
      }
      loadChildren(t, r) {
        if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
        if (r._loadedRoutes)
          return g({ routes: r._loadedRoutes, injector: r._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(r);
        let o = dc(r, this.compiler, t, this.onLoadEndListener).pipe(
            Re(() => {
              this.childrenLoaders.delete(r);
            }),
          ),
          a = new rn(o, () => new te()).pipe(nn());
        return this.childrenLoaders.set(r, a), a;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let n = e;
    return n;
  })();
function dc(n, e, i, t) {
  return le(n.loadChildren()).pipe(
    b(Ds),
    j((r) =>
      r instanceof ni || Array.isArray(r) ? g(r) : N(e.compileModuleAsync(r)),
    ),
    b((r) => {
      t && t(n);
      let s,
        o,
        a = !1;
      return (
        Array.isArray(r)
          ? ((o = r), (a = !0))
          : ((s = r.create(i).injector),
            (o = s.get(dt, [], { optional: !0, self: !0 }).flat())),
        { routes: o.map(mr), injector: s }
      );
    }),
  );
}
function fc(n) {
  return n && typeof n == 'object' && 'default' in n;
}
function Ds(n) {
  return fc(n) ? n.default : n;
}
var yr = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: () => f(pc), providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  pc = (() => {
    let e = class e {
      shouldProcessUrl(t) {
        return !0;
      }
      extract(t) {
        return t;
      }
      merge(t, r) {
        return t;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  Os = new C(''),
  Ps = new C('');
function gc(n, e, i) {
  let t = n.get(Ps),
    r = n.get(x);
  return n.get(G).runOutsideAngular(() => {
    if (!r.startViewTransition || t.skipNextTransition)
      return (t.skipNextTransition = !1), new Promise((c) => setTimeout(c));
    let s,
      o = new Promise((c) => {
        s = c;
      }),
      a = r.startViewTransition(() => (s(), mc(n))),
      { onViewTransitionCreated: u } = t;
    return u && z(n, () => u({ transition: a, from: e, to: i })), o;
  });
}
function mc(n) {
  return new Promise((e) => {
    Qr({ read: () => setTimeout(e) }, { injector: n });
  });
}
var vc = new C(''),
  wr = (() => {
    let e = class e {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new te()),
          (this.transitionAbortSubject = new te()),
          (this.configLoader = f(vr)),
          (this.environmentInjector = f(fe)),
          (this.urlSerializer = f(pt)),
          (this.rootContexts = f(mt)),
          (this.location = f(qe)),
          (this.inputBindingEnabled = f(Qt, { optional: !0 }) !== null),
          (this.titleStrategy = f(Ms)),
          (this.options = f(yt, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || 'emptyOnly'),
          (this.urlHandlingStrategy = f(yr)),
          (this.createViewTransition = f(Os, { optional: !0 })),
          (this.navigationErrorHandler = f(vc, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => g(void 0)),
          (this.rootComponentType = null);
        let t = (s) => this.events.next(new Jn(s)),
          r = (s) => this.events.next(new Yn(s));
        (this.configLoader.onLoadEndListener = r),
          (this.configLoader.onLoadStartListener = t);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(t) {
        let r = ++this.navigationId;
        this.transitions?.next(
          P(p(p({}, this.transitions.value), t), { id: r }),
        );
      }
      setupNavigations(t, r, s) {
        return (
          (this.transitions = new _({
            id: 0,
            currentUrlTree: r,
            currentRawUrl: r,
            extractedUrl: this.urlHandlingStrategy.extract(r),
            urlAfterRedirects: this.urlHandlingStrategy.extract(r),
            rawUrl: r,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: rt,
            restoredState: null,
            currentSnapshot: s.snapshot,
            targetSnapshot: null,
            currentRouterState: s,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            Z((o) => o.id !== 0),
            b((o) =>
              P(p({}, o), {
                extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
              }),
            ),
            k((o) => {
              let a = !1,
                u = !1;
              return g(o).pipe(
                k((c) => {
                  if (this.navigationId > o.id)
                    return (
                      this.cancelNavigationTransition(
                        o,
                        '',
                        $.SupersededByNewNavigation,
                      ),
                      ne
                    );
                  (this.currentTransition = o),
                    (this.currentNavigation = {
                      id: c.id,
                      initialUrl: c.rawUrl,
                      extractedUrl: c.extractedUrl,
                      targetBrowserUrl:
                        typeof c.extras.browserUrl == 'string'
                          ? this.urlSerializer.parse(c.extras.browserUrl)
                          : c.extras.browserUrl,
                      trigger: c.source,
                      extras: c.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? P(p({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let l =
                      !t.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    h = c.extras.onSameUrlNavigation ?? t.onSameUrlNavigation;
                  if (!l && h !== 'reload') {
                    let d = '';
                    return (
                      this.events.next(
                        new ce(
                          c.id,
                          this.urlSerializer.serialize(c.rawUrl),
                          d,
                          Vt.IgnoredSameUrlNavigation,
                        ),
                      ),
                      c.resolve(!1),
                      ne
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))
                    return g(c).pipe(
                      k((d) => {
                        let y = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new Ne(
                              d.id,
                              this.urlSerializer.serialize(d.extractedUrl),
                              d.source,
                              d.restoredState,
                            ),
                          ),
                          y !== this.transitions?.getValue()
                            ? ne
                            : Promise.resolve(d)
                        );
                      }),
                      sc(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        t.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      M((d) => {
                        (o.targetSnapshot = d.targetSnapshot),
                          (o.urlAfterRedirects = d.urlAfterRedirects),
                          (this.currentNavigation = P(
                            p({}, this.currentNavigation),
                            { finalUrl: d.urlAfterRedirects },
                          ));
                        let y = new qt(
                          d.id,
                          this.urlSerializer.serialize(d.extractedUrl),
                          this.urlSerializer.serialize(d.urlAfterRedirects),
                          d.targetSnapshot,
                        );
                        this.events.next(y);
                      }),
                    );
                  if (
                    l &&
                    this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)
                  ) {
                    let {
                        id: d,
                        extractedUrl: y,
                        source: w,
                        restoredState: O,
                        extras: R,
                      } = c,
                      T = new Ne(d, this.urlSerializer.serialize(y), w, O);
                    this.events.next(T);
                    let U = ys(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = o =
                        P(p({}, c), {
                          targetSnapshot: U,
                          urlAfterRedirects: y,
                          extras: P(p({}, R), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = y),
                      g(o)
                    );
                  } else {
                    let d = '';
                    return (
                      this.events.next(
                        new ce(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          d,
                          Vt.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      c.resolve(!1),
                      ne
                    );
                  }
                }),
                M((c) => {
                  let l = new Xn(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                  );
                  this.events.next(l);
                }),
                b(
                  (c) => (
                    (this.currentTransition = o =
                      P(p({}, c), {
                        guards: Ea(
                          c.targetSnapshot,
                          c.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    o
                  ),
                ),
                La(this.environmentInjector, (c) => this.events.next(c)),
                M((c) => {
                  if (
                    ((o.guardsResult = c.guardsResult),
                    c.guardsResult && typeof c.guardsResult != 'boolean')
                  )
                    throw Zt(this.urlSerializer, c.guardsResult);
                  let l = new Hn(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                    !!c.guardsResult,
                  );
                  this.events.next(l);
                }),
                Z((c) =>
                  c.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(c, '', $.GuardRejected),
                      !1),
                ),
                zn((c) => {
                  if (c.guards.canActivateChecks.length)
                    return g(c).pipe(
                      M((l) => {
                        let h = new Kn(
                          l.id,
                          this.urlSerializer.serialize(l.extractedUrl),
                          this.urlSerializer.serialize(l.urlAfterRedirects),
                          l.targetSnapshot,
                        );
                        this.events.next(h);
                      }),
                      k((l) => {
                        let h = !1;
                        return g(l).pipe(
                          oc(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          M({
                            next: () => (h = !0),
                            complete: () => {
                              h ||
                                this.cancelNavigationTransition(
                                  l,
                                  '',
                                  $.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      M((l) => {
                        let h = new Zn(
                          l.id,
                          this.urlSerializer.serialize(l.extractedUrl),
                          this.urlSerializer.serialize(l.urlAfterRedirects),
                          l.targetSnapshot,
                        );
                        this.events.next(h);
                      }),
                    );
                }),
                zn((c) => {
                  let l = (h) => {
                    let d = [];
                    h.routeConfig?.loadComponent &&
                      !h.routeConfig._loadedComponent &&
                      d.push(
                        this.configLoader.loadComponent(h.routeConfig).pipe(
                          M((y) => {
                            h.component = y;
                          }),
                          b(() => {}),
                        ),
                      );
                    for (let y of h.children) d.push(...l(y));
                    return d;
                  };
                  return Rt(l(c.targetSnapshot.root)).pipe(cn(null), we(1));
                }),
                zn(() => this.afterPreactivation()),
                k(() => {
                  let { currentSnapshot: c, targetSnapshot: l } = o,
                    h = this.createViewTransition?.(
                      this.environmentInjector,
                      c.root,
                      l.root,
                    );
                  return h ? N(h).pipe(b(() => o)) : g(o);
                }),
                b((c) => {
                  let l = wa(
                    t.routeReuseStrategy,
                    c.targetSnapshot,
                    c.currentRouterState,
                  );
                  return (
                    (this.currentTransition = o =
                      P(p({}, c), { targetRouterState: l })),
                    (this.currentNavigation.targetRouterState = l),
                    o
                  );
                }),
                M(() => {
                  this.events.next(new at());
                }),
                ba(
                  this.rootContexts,
                  t.routeReuseStrategy,
                  (c) => this.events.next(c),
                  this.inputBindingEnabled,
                ),
                we(1),
                M({
                  next: (c) => {
                    (a = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new K(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        c.targetRouterState.snapshot,
                      ),
                      c.resolve(!0);
                  },
                  complete: () => {
                    a = !0;
                  },
                }),
                Nr(
                  this.transitionAbortSubject.pipe(
                    M((c) => {
                      throw c;
                    }),
                  ),
                ),
                Re(() => {
                  !a &&
                    !u &&
                    this.cancelNavigationTransition(
                      o,
                      '',
                      $.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === o.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                J((c) => {
                  if (((u = !0), bs(c)))
                    this.events.next(
                      new Y(
                        o.id,
                        this.urlSerializer.serialize(o.extractedUrl),
                        c.message,
                        c.cancellationCode,
                      ),
                    ),
                      Ta(c)
                        ? this.events.next(
                            new xe(c.url, c.navigationBehaviorOptions),
                          )
                        : o.resolve(!1);
                  else {
                    let l = new ot(
                      o.id,
                      this.urlSerializer.serialize(o.extractedUrl),
                      c,
                      o.targetSnapshot ?? void 0,
                    );
                    try {
                      let h = z(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(l),
                      );
                      if (h instanceof ut) {
                        let { message: d, cancellationCode: y } = Zt(
                          this.urlSerializer,
                          h,
                        );
                        this.events.next(
                          new Y(
                            o.id,
                            this.urlSerializer.serialize(o.extractedUrl),
                            d,
                            y,
                          ),
                        ),
                          this.events.next(
                            new xe(h.redirectTo, h.navigationBehaviorOptions),
                          );
                      } else {
                        this.events.next(l);
                        let d = t.errorHandler(c);
                        o.resolve(!!d);
                      }
                    } catch (h) {
                      this.options.resolveNavigationPromiseOnError
                        ? o.resolve(!1)
                        : o.reject(h);
                    }
                  }
                  return ne;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(t, r, s) {
        let o = new Y(t.id, this.urlSerializer.serialize(t.extractedUrl), r, s);
        this.events.next(o), t.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let t = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0)),
          ),
          r =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          t.toString() !== r?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let n = e;
    return n;
  })();
function yc(n) {
  return n !== rt;
}
var wc = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: () => f(Rc), providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  fr = class {
    shouldDetach(e) {
      return !1;
    }
    store(e, i) {}
    shouldAttach(e) {
      return !1;
    }
    retrieve(e) {
      return null;
    }
    shouldReuseRoute(e, i) {
      return e.routeConfig === i.routeConfig;
    }
  },
  Rc = (() => {
    let e = class e extends fr {};
    (e.ɵfac = (() => {
      let t;
      return function (s) {
        return (t || (t = pn(e)))(s || e);
      };
    })()),
      (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  Ns = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: () => f(Sc), providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  Sc = (() => {
    let e = class e extends Ns {
      constructor() {
        super(...arguments),
          (this.location = f(qe)),
          (this.urlSerializer = f(pt)),
          (this.options = f(yt, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || 'replace'),
          (this.urlHandlingStrategy = f(yr)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || 'deferred'),
          (this.currentUrlTree = new Q()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = ys(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== 'computed'
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(t) {
        return this.location.subscribe((r) => {
          r.type === 'popstate' && t(r.url, r.state);
        });
      }
      handleRouterEvent(t, r) {
        if (t instanceof Ne) this.stateMemento = this.createStateMemento();
        else if (t instanceof ce) this.rawUrlTree = r.initialUrl;
        else if (t instanceof qt) {
          if (
            this.urlUpdateStrategy === 'eager' &&
            !r.extras.skipLocationChange
          ) {
            let s = this.urlHandlingStrategy.merge(r.finalUrl, r.initialUrl);
            this.setBrowserUrl(r.targetBrowserUrl ?? s, r);
          }
        } else
          t instanceof at
            ? ((this.currentUrlTree = r.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                r.finalUrl,
                r.initialUrl,
              )),
              (this.routerState = r.targetRouterState),
              this.urlUpdateStrategy === 'deferred' &&
                !r.extras.skipLocationChange &&
                this.setBrowserUrl(r.targetBrowserUrl ?? this.rawUrlTree, r))
            : t instanceof Y &&
                (t.code === $.GuardRejected || t.code === $.NoDataFromResolver)
              ? this.restoreHistory(r)
              : t instanceof ot
                ? this.restoreHistory(r, !0)
                : t instanceof K &&
                  ((this.lastSuccessfulId = t.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(t, r) {
        let s = t instanceof Q ? this.urlSerializer.serialize(t) : t;
        if (this.location.isCurrentPathEqualTo(s) || r.extras.replaceUrl) {
          let o = this.browserPageId,
            a = p(p({}, r.extras.state), this.generateNgRouterState(r.id, o));
          this.location.replaceState(s, '', a);
        } else {
          let o = p(
            p({}, r.extras.state),
            this.generateNgRouterState(r.id, this.browserPageId + 1),
          );
          this.location.go(s, '', o);
        }
      }
      restoreHistory(t, r = !1) {
        if (this.canceledNavigationResolution === 'computed') {
          let s = this.browserPageId,
            o = this.currentPageId - s;
          o !== 0
            ? this.location.historyGo(o)
            : this.currentUrlTree === t.finalUrl &&
              o === 0 &&
              (this.resetState(t), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === 'replace' &&
            (r && this.resetState(t), this.resetUrlToCurrentUrlTree());
      }
      resetState(t) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            t.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          '',
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(t, r) {
        return this.canceledNavigationResolution === 'computed'
          ? { navigationId: t, ɵrouterPageId: r }
          : { navigationId: t };
      }
    };
    (e.ɵfac = (() => {
      let t;
      return function (s) {
        return (t || (t = pn(e)))(s || e);
      };
    })()),
      (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  tt = (function (n) {
    return (
      (n[(n.COMPLETE = 0)] = 'COMPLETE'),
      (n[(n.FAILED = 1)] = 'FAILED'),
      (n[(n.REDIRECTING = 2)] = 'REDIRECTING'),
      n
    );
  })(tt || {});
function xs(n, e) {
  n.events
    .pipe(
      Z(
        (i) =>
          i instanceof K ||
          i instanceof Y ||
          i instanceof ot ||
          i instanceof ce,
      ),
      b((i) =>
        i instanceof K || i instanceof ce
          ? tt.COMPLETE
          : (
                i instanceof Y
                  ? i.code === $.Redirect ||
                    i.code === $.SupersededByNewNavigation
                  : !1
              )
            ? tt.REDIRECTING
            : tt.FAILED,
      ),
      Z((i) => i !== tt.REDIRECTING),
      we(1),
    )
    .subscribe(() => {
      e();
    });
}
function Tc(n) {
  throw n;
}
var bc = {
    paths: 'exact',
    fragment: 'ignored',
    matrixParams: 'ignored',
    queryParams: 'exact',
  },
  Ec = {
    paths: 'subset',
    fragment: 'ignored',
    matrixParams: 'ignored',
    queryParams: 'subset',
  },
  q = (() => {
    let e = class e {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.console = f(Et)),
          (this.stateManager = f(Ns)),
          (this.options = f(yt, { optional: !0 }) || {}),
          (this.pendingTasks = f(bt)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || 'deferred'),
          (this.navigationTransitions = f(wr)),
          (this.urlSerializer = f(pt)),
          (this.location = f(qe)),
          (this.urlHandlingStrategy = f(yr)),
          (this._events = new te()),
          (this.errorHandler = this.options.errorHandler || Tc),
          (this.navigated = !1),
          (this.routeReuseStrategy = f(wc)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || 'ignore'),
          (this.config = f(dt, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!f(Qt, { optional: !0 })),
          (this.eventsSubscription = new br()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (t) => {
                this.console.warn(t);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let t = this.navigationTransitions.events.subscribe((r) => {
          try {
            let s = this.navigationTransitions.currentTransition,
              o = this.navigationTransitions.currentNavigation;
            if (s !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(r, o),
                r instanceof Y &&
                  r.code !== $.Redirect &&
                  r.code !== $.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (r instanceof K) this.navigated = !0;
              else if (r instanceof xe) {
                let a = r.navigationBehaviorOptions,
                  u = this.urlHandlingStrategy.merge(r.url, s.currentRawUrl),
                  c = p(
                    {
                      browserUrl: s.extras.browserUrl,
                      info: s.extras.info,
                      skipLocationChange: s.extras.skipLocationChange,
                      replaceUrl:
                        s.extras.replaceUrl ||
                        this.urlUpdateStrategy === 'eager' ||
                        yc(s.source),
                    },
                    a,
                  );
                this.scheduleNavigation(u, rt, null, c, {
                  resolve: s.resolve,
                  reject: s.reject,
                  promise: s.promise,
                });
              }
            }
            Ic(r) && this._events.next(r);
          } catch (s) {
            this.navigationTransitions.transitionAbortSubject.next(s);
          }
        });
        this.eventsSubscription.add(t);
      }
      resetRootComponentType(t) {
        (this.routerState.root.component = t),
          (this.navigationTransitions.rootComponentType = t);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              rt,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (t, r) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(t, 'popstate', r);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(t, r, s) {
        let o = { replaceUrl: !0 },
          a = s?.navigationId ? s : null;
        if (s) {
          let c = p({}, s);
          delete c.navigationId,
            delete c.ɵrouterPageId,
            Object.keys(c).length !== 0 && (o.state = c);
        }
        let u = this.parseUrl(t);
        this.scheduleNavigation(u, r, a, o);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(t) {
        (this.config = t.map(mr)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(t, r = {}) {
        let {
            relativeTo: s,
            queryParams: o,
            fragment: a,
            queryParamsHandling: u,
            preserveFragment: c,
          } = r,
          l = c ? this.currentUrlTree.fragment : a,
          h = null;
        switch (u ?? this.options.defaultQueryParamsHandling) {
          case 'merge':
            h = p(p({}, this.currentUrlTree.queryParams), o);
            break;
          case 'preserve':
            h = this.currentUrlTree.queryParams;
            break;
          default:
            h = o || null;
        }
        h !== null && (h = this.removeEmptyProps(h));
        let d;
        try {
          let y = s ? s.snapshot : this.routerState.snapshot.root;
          d = ps(y);
        } catch {
          (typeof t[0] != 'string' || t[0][0] !== '/') && (t = []),
            (d = this.currentUrlTree.root);
        }
        return gs(d, t, h, l ?? null);
      }
      navigateByUrl(t, r = { skipLocationChange: !1 }) {
        let s = ye(t) ? t : this.parseUrl(t),
          o = this.urlHandlingStrategy.merge(s, this.rawUrlTree);
        return this.scheduleNavigation(o, rt, null, r);
      }
      navigate(t, r = { skipLocationChange: !1 }) {
        return Cc(t), this.navigateByUrl(this.createUrlTree(t, r), r);
      }
      serializeUrl(t) {
        return this.urlSerializer.serialize(t);
      }
      parseUrl(t) {
        try {
          return this.urlSerializer.parse(t);
        } catch {
          return this.urlSerializer.parse('/');
        }
      }
      isActive(t, r) {
        let s;
        if (
          (r === !0 ? (s = p({}, bc)) : r === !1 ? (s = p({}, Ec)) : (s = r),
          ye(t))
        )
          return Hi(this.currentUrlTree, t, s);
        let o = this.parseUrl(t);
        return Hi(this.currentUrlTree, o, s);
      }
      removeEmptyProps(t) {
        return Object.entries(t).reduce(
          (r, [s, o]) => (o != null && (r[s] = o), r),
          {},
        );
      }
      scheduleNavigation(t, r, s, o, a) {
        if (this.disposed) return Promise.resolve(!1);
        let u, c, l;
        a
          ? ((u = a.resolve), (c = a.reject), (l = a.promise))
          : (l = new Promise((d, y) => {
              (u = d), (c = y);
            }));
        let h = this.pendingTasks.add();
        return (
          xs(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(h));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: r,
            restoredState: s,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: t,
            extras: o,
            resolve: u,
            reject: c,
            promise: l,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          l.catch((d) => Promise.reject(d))
        );
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let n = e;
    return n;
  })();
function Cc(n) {
  for (let e = 0; e < n.length; e++) if (n[e] == null) throw new I(4008, !1);
}
function Ic(n) {
  return !(n instanceof at) && !(n instanceof xe);
}
var Vu = (() => {
  let e = class e {
    constructor(t, r, s, o, a, u) {
      (this.router = t),
        (this.route = r),
        (this.tabIndexAttribute = s),
        (this.renderer = o),
        (this.el = a),
        (this.locationStrategy = u),
        (this.href = null),
        (this.onChanges = new te()),
        (this.preserveFragment = !1),
        (this.skipLocationChange = !1),
        (this.replaceUrl = !1),
        (this.routerLinkInput = null);
      let c = a.nativeElement.tagName?.toLowerCase();
      (this.isAnchorElement = c === 'a' || c === 'area'),
        this.isAnchorElement
          ? (this.subscription = t.events.subscribe((l) => {
              l instanceof K && this.updateHref();
            }))
          : this.setTabIndexIfNotOnNativeEl('0');
    }
    setTabIndexIfNotOnNativeEl(t) {
      this.tabIndexAttribute != null ||
        this.isAnchorElement ||
        this.applyAttributeValue('tabindex', t);
    }
    ngOnChanges(t) {
      this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
    }
    set routerLink(t) {
      t == null
        ? ((this.routerLinkInput = null), this.setTabIndexIfNotOnNativeEl(null))
        : (ye(t)
            ? (this.routerLinkInput = t)
            : (this.routerLinkInput = Array.isArray(t) ? t : [t]),
          this.setTabIndexIfNotOnNativeEl('0'));
    }
    onClick(t, r, s, o, a) {
      let u = this.urlTree;
      if (
        u === null ||
        (this.isAnchorElement &&
          (t !== 0 ||
            r ||
            s ||
            o ||
            a ||
            (typeof this.target == 'string' && this.target != '_self')))
      )
        return !0;
      let c = {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state,
        info: this.info,
      };
      return this.router.navigateByUrl(u, c), !this.isAnchorElement;
    }
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    updateHref() {
      let t = this.urlTree;
      this.href =
        t !== null && this.locationStrategy
          ? this.locationStrategy?.prepareExternalUrl(
              this.router.serializeUrl(t),
            )
          : null;
      let r =
        this.href === null
          ? null
          : Hr(this.href, this.el.nativeElement.tagName.toLowerCase(), 'href');
      this.applyAttributeValue('href', r);
    }
    applyAttributeValue(t, r) {
      let s = this.renderer,
        o = this.el.nativeElement;
      r !== null ? s.setAttribute(o, t, r) : s.removeAttribute(o, t);
    }
    get urlTree() {
      return this.routerLinkInput === null
        ? null
        : ye(this.routerLinkInput)
          ? this.routerLinkInput
          : this.router.createUrlTree(this.routerLinkInput, {
              relativeTo:
                this.relativeTo !== void 0 ? this.relativeTo : this.route,
              queryParams: this.queryParams,
              fragment: this.fragment,
              queryParamsHandling: this.queryParamsHandling,
              preserveFragment: this.preserveFragment,
            });
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(Ee(q), Ee(ue), kr('tabindex'), Ee(Jr), Ee(Fr), Ee(Ve));
  }),
    (e.ɵdir = dn({
      type: e,
      selectors: [['', 'routerLink', '']],
      hostVars: 1,
      hostBindings: function (r, s) {
        r & 1 &&
          si('click', function (a) {
            return s.onClick(
              a.button,
              a.ctrlKey,
              a.shiftKey,
              a.altKey,
              a.metaKey,
            );
          }),
          r & 2 && ri('target', s.target);
      },
      inputs: {
        target: 'target',
        queryParams: 'queryParams',
        fragment: 'fragment',
        queryParamsHandling: 'queryParamsHandling',
        state: 'state',
        info: 'info',
        relativeTo: 'relativeTo',
        preserveFragment: [2, 'preserveFragment', 'preserveFragment', It],
        skipLocationChange: [2, 'skipLocationChange', 'skipLocationChange', It],
        replaceUrl: [2, 'replaceUrl', 'replaceUrl', It],
        routerLink: 'routerLink',
      },
      standalone: !0,
      features: [ti, fn],
    }));
  let n = e;
  return n;
})();
var Yt = class {};
var Ac = (() => {
    let e = class e {
      constructor(t, r, s, o, a) {
        (this.router = t),
          (this.injector = s),
          (this.preloadingStrategy = o),
          (this.loader = a);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            Z((t) => t instanceof K),
            re(() => this.preload()),
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(t, r) {
        let s = [];
        for (let o of r) {
          o.providers &&
            !o._injector &&
            (o._injector = Rn(o.providers, t, `Route: ${o.path}`));
          let a = o._injector ?? t,
            u = o._loadedInjector ?? a;
          ((o.loadChildren && !o._loadedRoutes && o.canLoad === void 0) ||
            (o.loadComponent && !o._loadedComponent)) &&
            s.push(this.preloadConfig(a, o)),
            (o.children || o._loadedRoutes) &&
              s.push(this.processRoutes(u, o.children ?? o._loadedRoutes));
        }
        return N(s).pipe(on());
      }
      preloadConfig(t, r) {
        return this.preloadingStrategy.preload(r, () => {
          let s;
          r.loadChildren && r.canLoad === void 0
            ? (s = this.loader.loadChildren(t, r))
            : (s = g(null));
          let o = s.pipe(
            j((a) =>
              a === null
                ? g(void 0)
                : ((r._loadedRoutes = a.routes),
                  (r._loadedInjector = a.injector),
                  this.processRoutes(a.injector ?? t, a.routes)),
            ),
          );
          if (r.loadComponent && !r._loadedComponent) {
            let a = this.loader.loadComponent(r);
            return N([o, a]).pipe(on());
          } else return o;
        });
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(q), m(Ct), m(fe), m(Yt), m(vr));
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let n = e;
    return n;
  })(),
  Us = new C(''),
  Mc = (() => {
    let e = class e {
      constructor(t, r, s, o, a = {}) {
        (this.urlSerializer = t),
          (this.transitions = r),
          (this.viewportScroller = s),
          (this.zone = o),
          (this.options = a),
          (this.lastId = 0),
          (this.lastSource = 'imperative'),
          (this.restoredId = 0),
          (this.store = {}),
          (a.scrollPositionRestoration ||= 'disabled'),
          (a.anchorScrolling ||= 'disabled');
      }
      init() {
        this.options.scrollPositionRestoration !== 'disabled' &&
          this.viewportScroller.setHistoryScrollRestoration('manual'),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((t) => {
          t instanceof Ne
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = t.navigationTrigger),
              (this.restoredId = t.restoredState
                ? t.restoredState.navigationId
                : 0))
            : t instanceof K
              ? ((this.lastId = t.id),
                this.scheduleScrollEvent(
                  t,
                  this.urlSerializer.parse(t.urlAfterRedirects).fragment,
                ))
              : t instanceof ce &&
                t.code === Vt.IgnoredSameUrlNavigation &&
                ((this.lastSource = void 0),
                (this.restoredId = 0),
                this.scheduleScrollEvent(
                  t,
                  this.urlSerializer.parse(t.url).fragment,
                ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((t) => {
          t instanceof Gt &&
            (t.position
              ? this.options.scrollPositionRestoration === 'top'
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === 'enabled' &&
                  this.viewportScroller.scrollToPosition(t.position)
              : t.anchor && this.options.anchorScrolling === 'enabled'
                ? this.viewportScroller.scrollToAnchor(t.anchor)
                : this.options.scrollPositionRestoration !== 'disabled' &&
                  this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(t, r) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new Gt(
                  t,
                  this.lastSource === 'popstate'
                    ? this.store[this.restoredId]
                    : null,
                  r,
                ),
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
    };
    (e.ɵfac = function (r) {
      Kr();
    }),
      (e.ɵprov = S({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })();
function qu(n, ...e) {
  return Se([
    { provide: dt, multi: !0, useValue: n },
    [],
    { provide: ue, useFactory: Ls, deps: [q] },
    { provide: ze, multi: !0, useFactory: js },
    e.map((i) => i.ɵproviders),
  ]);
}
function Ls(n) {
  return n.routerState.root;
}
function wt(n, e) {
  return { ɵkind: n, ɵproviders: e };
}
function js() {
  let n = f(gn);
  return (e) => {
    let i = n.get(Be);
    if (e !== i.components[0]) return;
    let t = n.get(q),
      r = n.get(ks);
    n.get(Rr) === 1 && t.initialNavigation(),
      n.get(Fs, null, ln.Optional)?.setUpPreloading(),
      n.get(Us, null, ln.Optional)?.init(),
      t.resetRootComponentType(i.componentTypes[0]),
      r.closed || (r.next(), r.complete(), r.unsubscribe());
  };
}
var ks = new C('', { factory: () => new te() }),
  Rr = new C('', { providedIn: 'root', factory: () => 1 });
function Dc() {
  return wt(2, [
    { provide: Rr, useValue: 0 },
    {
      provide: Sn,
      multi: !0,
      deps: [gn],
      useFactory: (e) => {
        let i = e.get(gi, Promise.resolve());
        return () =>
          i.then(
            () =>
              new Promise((t) => {
                let r = e.get(q),
                  s = e.get(ks);
                xs(r, () => {
                  t(!0);
                }),
                  (e.get(wr).afterPreactivation = () => (
                    t(!0), s.closed ? g(void 0) : s
                  )),
                  r.initialNavigation();
              }),
          );
      },
    },
  ]);
}
function Oc() {
  return wt(3, [
    {
      provide: Sn,
      multi: !0,
      useFactory: () => {
        let e = f(q);
        return () => {
          e.setUpLocationChangeListener();
        };
      },
    },
    { provide: Rr, useValue: 2 },
  ]);
}
var Fs = new C('');
function Pc(n) {
  return wt(0, [
    { provide: Fs, useExisting: Ac },
    { provide: Yt, useExisting: n },
  ]);
}
function Nc() {
  return wt(8, [Yi, { provide: Qt, useExisting: Yi }]);
}
function xc(n) {
  let e = [
    { provide: Os, useValue: gc },
    {
      provide: Ps,
      useValue: p({ skipNextTransition: !!n?.skipInitialTransition }, n),
    },
  ];
  return wt(9, e);
}
var ns = new C('ROUTER_FORROOT_GUARD'),
  Uc = [
    qe,
    { provide: pt, useClass: Pe },
    q,
    mt,
    { provide: ue, useFactory: Ls, deps: [q] },
    vr,
    [],
  ],
  Gu = (() => {
    let e = class e {
      constructor(t) {}
      static forRoot(t, r) {
        return {
          ngModule: e,
          providers: [
            Uc,
            [],
            { provide: dt, multi: !0, useValue: t },
            { provide: ns, useFactory: Fc, deps: [[q, new hn(), new Ur()]] },
            { provide: yt, useValue: r || {} },
            r?.useHash ? jc() : kc(),
            Lc(),
            r?.preloadingStrategy ? Pc(r.preloadingStrategy).ɵproviders : [],
            r?.initialNavigation ? $c(r) : [],
            r?.bindToComponentInputs ? Nc().ɵproviders : [],
            r?.enableViewTransitions ? xc().ɵproviders : [],
            _c(),
          ],
        };
      }
      static forChild(t) {
        return {
          ngModule: e,
          providers: [{ provide: dt, multi: !0, useValue: t }],
        };
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(m(ns, 8));
    }),
      (e.ɵmod = Tt({ type: e })),
      (e.ɵinj = St({}));
    let n = e;
    return n;
  })();
function Lc() {
  return {
    provide: Us,
    useFactory: () => {
      let n = f(Ri),
        e = f(G),
        i = f(yt),
        t = f(wr),
        r = f(pt);
      return (
        i.scrollOffset && n.setOffset(i.scrollOffset), new Mc(r, t, n, e, i)
      );
    },
  };
}
function jc() {
  return { provide: Ve, useClass: vi };
}
function kc() {
  return { provide: Ve, useClass: mi };
}
function Fc(n) {
  return 'guarded';
}
function $c(n) {
  return [
    n.initialNavigation === 'disabled' ? Oc().ɵproviders : [],
    n.initialNavigation === 'enabledBlocking' ? Dc().ɵproviders : [],
  ];
}
var rs = new C('');
function _c() {
  return [
    { provide: rs, useFactory: js },
    { provide: ze, multi: !0, useExisting: rs },
  ];
}
var Yu = (() => {
  class n {
    platformId;
    http;
    router;
    apiUrl = '/api';
    isAuthenticated = !1;
    userStatus = 'guest';
    constructor(i, t, r) {
      (this.platformId = i),
        (this.http = t),
        (this.router = r),
        wi(this.platformId) &&
          ((this.isAuthenticated = !!localStorage.getItem('authToken')),
          this.isAuthenticatedUser() && (this.userStatus = 'user'));
    }
    isAuthenticatedUser() {
      return this.isAuthenticated;
    }
    login(i, t, r, s) {
      return ee(this, null, function* () {
        let o = { email: i, password: t };
        try {
          let a = yield sn(
            this.http
              .post(`${this.apiUrl}/signin`, o, { observe: 'response' })
              .pipe(
                J(
                  (u) => (
                    u.status === 400 &&
                      u.error.message === 'User is not found' &&
                      r.setErrors({ UserIsNotFound: !0 }),
                    g(null)
                  ),
                ),
              ),
          );
          if (a && a.status === 201) {
            let { token: u } = a.body;
            localStorage.setItem('authToken', u),
              (this.isAuthenticated = !0),
              (this.userStatus = 'user'),
              yield this.navigateToHome();
          }
        } catch (a) {
          console.error('Error while making POST request', a);
        } finally {
          s();
        }
      });
    }
    register(i, t, r, s) {
      return ee(this, null, function* () {
        let o = { email: i, password: t };
        try {
          let a = yield sn(
            this.http
              .post(`${this.apiUrl}/signup`, o, { observe: 'response' })
              .pipe(
                J(
                  (u) => (
                    u.status === 400 &&
                      u.error.message === 'User already exists' &&
                      r.get('email')?.setErrors({ emailExists: !0 }),
                    g(null)
                  ),
                ),
              ),
          );
          a && a.status === 201 && (yield this.navigateToLogin());
        } catch (a) {
          console.error('Error while making POST request', a);
        } finally {
          s();
        }
      });
    }
    navigateToLogin() {
      return ee(this, null, function* () {
        yield this.router.navigateByUrl('/signin');
      });
    }
    navigateToHome() {
      return ee(this, null, function* () {
        yield this.router.navigateByUrl('/');
      });
    }
    static ɵfac = function (t) {
      return new (t || n)(m(W), m(On), m(q));
    };
    static ɵprov = S({ token: n, factory: n.ɵfac, providedIn: 'root' });
  }
  return n;
})();
export {
  On as a,
  Yc as b,
  _i as c,
  Ru as d,
  _o as e,
  Su as f,
  ya as g,
  q as h,
  Vu as i,
  qu as j,
  Gu as k,
  Yu as l,
};
//# sourceMappingURL=chunk-PHOH564W.js.map
