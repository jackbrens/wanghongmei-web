import {
  r as B,
  o as Ie,
  p as Le,
  w as Ye,
  a as he,
  b as Oe,
  h as D,
  c as Ue,
  d as Ke,
  n as Ze,
  _ as Je,
  u as Qe,
  e as q,
  f as X,
  g as E,
  i as be,
  j as ye,
  k as V,
  F as K,
  l as Z,
  m as J,
  t as ne,
  q as et,
  s as tt
} from './index-aSxYTHqT.js'
import { W as it } from './wow-BG1f1-gB.js'
function xe(t) {
  return t !== null && typeof t == 'object' && 'constructor' in t && t.constructor === Object
}
function ge(t, e) {
  t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((i) => {
      typeof t[i] > 'u'
        ? (t[i] = e[i])
        : xe(e[i]) && xe(t[i]) && Object.keys(e[i]).length > 0 && ge(t[i], e[i])
    })
}
const _e = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return { initEvent() {} }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      }
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
}
function W() {
  const t = typeof document < 'u' ? document : {}
  return ge(t, _e), t
}
const st = {
  document: _e,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ''
      }
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > 'u' ? (t(), null) : setTimeout(t, 0)
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > 'u' || clearTimeout(t)
  }
}
function G() {
  const t = typeof window < 'u' ? window : {}
  return ge(t, st), t
}
function nt(t) {
  const e = t
  Object.keys(e).forEach((i) => {
    try {
      e[i] = null
    } catch {}
    try {
      delete e[i]
    } catch {}
  })
}
function ce(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e)
}
function ie() {
  return Date.now()
}
function rt(t) {
  const e = G()
  let i
  return (
    e.getComputedStyle && (i = e.getComputedStyle(t, null)),
    !i && t.currentStyle && (i = t.currentStyle),
    i || (i = t.style),
    i
  )
}
function at(t, e) {
  e === void 0 && (e = 'x')
  const i = G()
  let s, r, n
  const o = rt(t)
  return (
    i.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(',').length > 6 &&
          (r = r
            .split(', ')
            .map((l) => l.replace(',', '.'))
            .join(', ')),
        (n = new i.WebKitCSSMatrix(r === 'none' ? '' : r)))
      : ((n =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
        (s = n.toString().split(','))),
    e === 'x' &&
      (i.WebKitCSSMatrix
        ? (r = n.m41)
        : s.length === 16
          ? (r = parseFloat(s[12]))
          : (r = parseFloat(s[4]))),
    e === 'y' &&
      (i.WebKitCSSMatrix
        ? (r = n.m42)
        : s.length === 16
          ? (r = parseFloat(s[13]))
          : (r = parseFloat(s[5]))),
    r || 0
  )
}
function Q(t) {
  return (
    typeof t == 'object' &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === 'Object'
  )
}
function lt(t) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11)
}
function A() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ['__proto__', 'constructor', 'prototype']
  for (let i = 1; i < arguments.length; i += 1) {
    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i]
    if (s != null && !lt(s)) {
      const r = Object.keys(Object(s)).filter((n) => e.indexOf(n) < 0)
      for (let n = 0, o = r.length; n < o; n += 1) {
        const l = r[n],
          a = Object.getOwnPropertyDescriptor(s, l)
        a !== void 0 &&
          a.enumerable &&
          (Q(t[l]) && Q(s[l])
            ? s[l].__swiper__
              ? (t[l] = s[l])
              : A(t[l], s[l])
            : !Q(t[l]) && Q(s[l])
              ? ((t[l] = {}), s[l].__swiper__ ? (t[l] = s[l]) : A(t[l], s[l]))
              : (t[l] = s[l]))
      }
    }
  }
  return t
}
function ee(t, e, i) {
  t.style.setProperty(e, i)
}
function ze(t) {
  let { swiper: e, targetPosition: i, side: s } = t
  const r = G(),
    n = -e.translate
  let o = null,
    l
  const a = e.params.speed
  ;(e.wrapperEl.style.scrollSnapType = 'none'), r.cancelAnimationFrame(e.cssModeFrameID)
  const c = i > n ? 'next' : 'prev',
    u = (w, m) => (c === 'next' && w >= m) || (c === 'prev' && w <= m),
    p = () => {
      ;(l = new Date().getTime()), o === null && (o = l)
      const w = Math.max(Math.min((l - o) / a, 1), 0),
        m = 0.5 - Math.cos(w * Math.PI) / 2
      let y = n + m * (i - n)
      if ((u(y, i) && (y = i), e.wrapperEl.scrollTo({ [s]: y }), u(y, i))) {
        ;(e.wrapperEl.style.overflow = 'hidden'),
          (e.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [s]: y })
          }),
          r.cancelAnimationFrame(e.cssModeFrameID)
        return
      }
      e.cssModeFrameID = r.requestAnimationFrame(p)
    }
  p()
}
function $(t, e) {
  return e === void 0 && (e = ''), [...t.children].filter((i) => i.matches(e))
}
function Be(t, e) {
  e === void 0 && (e = [])
  const i = document.createElement(t)
  return i.classList.add(...(Array.isArray(e) ? e : [e])), i
}
function ot(t, e) {
  const i = []
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling
    e ? s.matches(e) && i.push(s) : i.push(s), (t = s)
  }
  return i
}
function dt(t, e) {
  const i = []
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling
    e ? s.matches(e) && i.push(s) : i.push(s), (t = s)
  }
  return i
}
function H(t, e) {
  return G().getComputedStyle(t, null).getPropertyValue(e)
}
function se(t) {
  let e = t,
    i
  if (e) {
    for (i = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (i += 1)
    return i
  }
}
function Ae(t, e) {
  const i = []
  let s = t.parentElement
  for (; s; ) e ? s.matches(e) && i.push(s) : i.push(s), (s = s.parentElement)
  return i
}
function pe(t, e, i) {
  const s = G()
  return i
    ? t[e === 'width' ? 'offsetWidth' : 'offsetHeight'] +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === 'width' ? 'margin-right' : 'margin-top')
        ) +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === 'width' ? 'margin-left' : 'margin-bottom')
        )
    : t.offsetWidth
}
let re
function ft() {
  const t = G(),
    e = W()
  return {
    smoothScroll:
      e.documentElement && e.documentElement.style && 'scrollBehavior' in e.documentElement.style,
    touch: !!('ontouchstart' in t || (t.DocumentTouch && e instanceof t.DocumentTouch))
  }
}
function Ge() {
  return re || (re = ft()), re
}
let ae
function ut(t) {
  let { userAgent: e } = t === void 0 ? {} : t
  const i = Ge(),
    s = G(),
    r = s.navigator.platform,
    n = e || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = s.screen.width,
    a = s.screen.height,
    c = n.match(/(Android);?[\s\/]+([\d.]+)?/)
  let u = n.match(/(iPad).*OS\s([\d_]+)/)
  const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    w = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    m = r === 'Win32'
  let y = r === 'MacIntel'
  const h = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810'
  ]
  return (
    !u &&
      y &&
      i.touch &&
      h.indexOf(`${l}x${a}`) >= 0 &&
      ((u = n.match(/(Version)\/([\d.]+)/)), u || (u = [0, 1, '13_0_0']), (y = !1)),
    c && !m && ((o.os = 'android'), (o.android = !0)),
    (u || w || p) && ((o.os = 'ios'), (o.ios = !0)),
    o
  )
}
function ct(t) {
  return t === void 0 && (t = {}), ae || (ae = ut(t)), ae
}
let le
function pt() {
  const t = G()
  let e = !1
  function i() {
    const s = t.navigator.userAgent.toLowerCase()
    return s.indexOf('safari') >= 0 && s.indexOf('chrome') < 0 && s.indexOf('android') < 0
  }
  if (i()) {
    const s = String(t.navigator.userAgent)
    if (s.includes('Version/')) {
      const [r, n] = s
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((o) => Number(o))
      e = r < 16 || (r === 16 && n < 2)
    }
  }
  return {
    isSafari: e || i(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
  }
}
function mt() {
  return le || (le = pt()), le
}
function ht(t) {
  let { swiper: e, on: i, emit: s } = t
  const r = G()
  let n = null,
    o = null
  const l = () => {
      !e || e.destroyed || !e.initialized || (s('beforeResize'), s('resize'))
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((n = new ResizeObserver((p) => {
          o = r.requestAnimationFrame(() => {
            const { width: w, height: m } = e
            let y = w,
              h = m
            p.forEach((b) => {
              let { contentBoxSize: S, contentRect: d, target: f } = b
              ;(f && f !== e.el) ||
                ((y = d ? d.width : (S[0] || S).inlineSize),
                (h = d ? d.height : (S[0] || S).blockSize))
            }),
              (y !== w || h !== m) && l()
          })
        })),
        n.observe(e.el))
    },
    c = () => {
      o && r.cancelAnimationFrame(o), n && n.unobserve && e.el && (n.unobserve(e.el), (n = null))
    },
    u = () => {
      !e || e.destroyed || !e.initialized || s('orientationchange')
    }
  i('init', () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < 'u') {
      a()
      return
    }
    r.addEventListener('resize', l), r.addEventListener('orientationchange', u)
  }),
    i('destroy', () => {
      c(), r.removeEventListener('resize', l), r.removeEventListener('orientationchange', u)
    })
}
function gt(t) {
  let { swiper: e, extendParams: i, on: s, emit: r } = t
  const n = [],
    o = G(),
    l = function (u, p) {
      p === void 0 && (p = {})
      const w = o.MutationObserver || o.WebkitMutationObserver,
        m = new w((y) => {
          if (e.__preventObserver__) return
          if (y.length === 1) {
            r('observerUpdate', y[0])
            return
          }
          const h = function () {
            r('observerUpdate', y[0])
          }
          o.requestAnimationFrame ? o.requestAnimationFrame(h) : o.setTimeout(h, 0)
        })
      m.observe(u, {
        attributes: typeof p.attributes > 'u' ? !0 : p.attributes,
        childList: typeof p.childList > 'u' ? !0 : p.childList,
        characterData: typeof p.characterData > 'u' ? !0 : p.characterData
      }),
        n.push(m)
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const u = Ae(e.el)
          for (let p = 0; p < u.length; p += 1) l(u[p])
        }
        l(e.el, { childList: e.params.observeSlideChildren }), l(e.wrapperEl, { attributes: !1 })
      }
    },
    c = () => {
      n.forEach((u) => {
        u.disconnect()
      }),
        n.splice(0, n.length)
    }
  i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), s('init', a), s('destroy', c)
}
var vt = {
  on(t, e, i) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s
    const r = i ? 'unshift' : 'push'
    return (
      t.split(' ').forEach((n) => {
        s.eventsListeners[n] || (s.eventsListeners[n] = []), s.eventsListeners[n][r](e)
      }),
      s
    )
  },
  once(t, e, i) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s
    function r() {
      s.off(t, r), r.__emitterProxy && delete r.__emitterProxy
      for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l]
      e.apply(s, o)
    }
    return (r.__emitterProxy = e), s.on(t, r, i)
  },
  onAny(t, e) {
    const i = this
    if (!i.eventsListeners || i.destroyed || typeof t != 'function') return i
    const s = e ? 'unshift' : 'push'
    return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i
  },
  offAny(t) {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e
    const i = e.eventsAnyListeners.indexOf(t)
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
  },
  off(t, e) {
    const i = this
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        t.split(' ').forEach((s) => {
          typeof e > 'u'
            ? (i.eventsListeners[s] = [])
            : i.eventsListeners[s] &&
              i.eventsListeners[s].forEach((r, n) => {
                ;(r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                  i.eventsListeners[s].splice(n, 1)
              })
        }),
      i
    )
  },
  emit() {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t
    let e, i, s
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o]
    return (
      typeof n[0] == 'string' || Array.isArray(n[0])
        ? ((e = n[0]), (i = n.slice(1, n.length)), (s = t))
        : ((e = n[0].events), (i = n[0].data), (s = n[0].context || t)),
      i.unshift(s),
      (Array.isArray(e) ? e : e.split(' ')).forEach((a) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((c) => {
            c.apply(s, [a, ...i])
          }),
          t.eventsListeners &&
            t.eventsListeners[a] &&
            t.eventsListeners[a].forEach((c) => {
              c.apply(s, i)
            })
      }),
      t
    )
  }
}
function wt() {
  const t = this
  let e, i
  const s = t.el
  typeof t.params.width < 'u' && t.params.width !== null
    ? (e = t.params.width)
    : (e = s.clientWidth),
    typeof t.params.height < 'u' && t.params.height !== null
      ? (i = t.params.height)
      : (i = s.clientHeight),
    !((e === 0 && t.isHorizontal()) || (i === 0 && t.isVertical())) &&
      ((e = e - parseInt(H(s, 'padding-left') || 0, 10) - parseInt(H(s, 'padding-right') || 0, 10)),
      (i = i - parseInt(H(s, 'padding-top') || 0, 10) - parseInt(H(s, 'padding-bottom') || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(t, { width: e, height: i, size: t.isHorizontal() ? e : i }))
}
function St() {
  const t = this
  function e(T) {
    return t.isHorizontal()
      ? T
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom'
        }[T]
  }
  function i(T, C) {
    return parseFloat(T.getPropertyValue(e(C)) || 0)
  }
  const s = t.params,
    { wrapperEl: r, slidesEl: n, size: o, rtlTranslate: l, wrongRTL: a } = t,
    c = t.virtual && s.virtual.enabled,
    u = c ? t.virtual.slides.length : t.slides.length,
    p = $(n, `.${t.params.slideClass}, swiper-slide`),
    w = c ? t.virtual.slides.length : p.length
  let m = []
  const y = [],
    h = []
  let b = s.slidesOffsetBefore
  typeof b == 'function' && (b = s.slidesOffsetBefore.call(t))
  let S = s.slidesOffsetAfter
  typeof S == 'function' && (S = s.slidesOffsetAfter.call(t))
  const d = t.snapGrid.length,
    f = t.slidesGrid.length
  let v = s.spaceBetween,
    x = -b,
    I = 0,
    M = 0
  if (typeof o > 'u') return
  typeof v == 'string' && v.indexOf('%') >= 0
    ? (v = (parseFloat(v.replace('%', '')) / 100) * o)
    : typeof v == 'string' && (v = parseFloat(v)),
    (t.virtualSize = -v),
    p.forEach((T) => {
      l ? (T.style.marginLeft = '') : (T.style.marginRight = ''),
        (T.style.marginBottom = ''),
        (T.style.marginTop = '')
    }),
    s.centeredSlides &&
      s.cssMode &&
      (ee(r, '--swiper-centered-offset-before', ''), ee(r, '--swiper-centered-offset-after', ''))
  const L = s.grid && s.grid.rows > 1 && t.grid
  L && t.grid.initSlides(w)
  let g
  const _ =
    s.slidesPerView === 'auto' &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter((T) => typeof s.breakpoints[T].slidesPerView < 'u').length > 0
  for (let T = 0; T < w; T += 1) {
    g = 0
    let C
    if (
      (p[T] && (C = p[T]),
      L && t.grid.updateSlide(T, C, w, e),
      !(p[T] && H(C, 'display') === 'none'))
    ) {
      if (s.slidesPerView === 'auto') {
        _ && (p[T].style[e('width')] = '')
        const P = getComputedStyle(C),
          O = C.style.transform,
          z = C.style.webkitTransform
        if (
          (O && (C.style.transform = 'none'),
          z && (C.style.webkitTransform = 'none'),
          s.roundLengths)
        )
          g = t.isHorizontal() ? pe(C, 'width', !0) : pe(C, 'height', !0)
        else {
          const k = i(P, 'width'),
            je = i(P, 'padding-left'),
            We = i(P, 'padding-right'),
            ve = i(P, 'margin-left'),
            we = i(P, 'margin-right'),
            Se = P.getPropertyValue('box-sizing')
          if (Se && Se === 'border-box') g = k + ve + we
          else {
            const { clientWidth: qe, offsetWidth: Xe } = C
            g = k + je + We + ve + we + (Xe - qe)
          }
        }
        O && (C.style.transform = O),
          z && (C.style.webkitTransform = z),
          s.roundLengths && (g = Math.floor(g))
      } else
        (g = (o - (s.slidesPerView - 1) * v) / s.slidesPerView),
          s.roundLengths && (g = Math.floor(g)),
          p[T] && (p[T].style[e('width')] = `${g}px`)
      p[T] && (p[T].swiperSlideSize = g),
        h.push(g),
        s.centeredSlides
          ? ((x = x + g / 2 + I / 2 + v),
            I === 0 && T !== 0 && (x = x - o / 2 - v),
            T === 0 && (x = x - o / 2 - v),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            s.roundLengths && (x = Math.floor(x)),
            M % s.slidesPerGroup === 0 && m.push(x),
            y.push(x))
          : (s.roundLengths && (x = Math.floor(x)),
            (M - Math.min(t.params.slidesPerGroupSkip, M)) % t.params.slidesPerGroup === 0 &&
              m.push(x),
            y.push(x),
            (x = x + g + v)),
        (t.virtualSize += g + v),
        (I = g),
        (M += 1)
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, o) + S),
    l &&
      a &&
      (s.effect === 'slide' || s.effect === 'coverflow') &&
      (r.style.width = `${t.virtualSize + v}px`),
    s.setWrapperSize && (r.style[e('width')] = `${t.virtualSize + v}px`),
    L && t.grid.updateWrapperSize(g, m, e),
    !s.centeredSlides)
  ) {
    const T = []
    for (let C = 0; C < m.length; C += 1) {
      let P = m[C]
      s.roundLengths && (P = Math.floor(P)), m[C] <= t.virtualSize - o && T.push(P)
    }
    ;(m = T),
      Math.floor(t.virtualSize - o) - Math.floor(m[m.length - 1]) > 1 && m.push(t.virtualSize - o)
  }
  if (c && s.loop) {
    const T = h[0] + v
    if (s.slidesPerGroup > 1) {
      const C = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup),
        P = T * s.slidesPerGroup
      for (let O = 0; O < C; O += 1) m.push(m[m.length - 1] + P)
    }
    for (let C = 0; C < t.virtual.slidesBefore + t.virtual.slidesAfter; C += 1)
      s.slidesPerGroup === 1 && m.push(m[m.length - 1] + T),
        y.push(y[y.length - 1] + T),
        (t.virtualSize += T)
  }
  if ((m.length === 0 && (m = [0]), v !== 0)) {
    const T = t.isHorizontal() && l ? 'marginLeft' : e('marginRight')
    p.filter((C, P) => (!s.cssMode || s.loop ? !0 : P !== p.length - 1)).forEach((C) => {
      C.style[T] = `${v}px`
    })
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let T = 0
    h.forEach((P) => {
      T += P + (v || 0)
    }),
      (T -= v)
    const C = T - o
    m = m.map((P) => (P <= 0 ? -b : P > C ? C + S : P))
  }
  if (s.centerInsufficientSlides) {
    let T = 0
    if (
      (h.forEach((C) => {
        T += C + (v || 0)
      }),
      (T -= v),
      T < o)
    ) {
      const C = (o - T) / 2
      m.forEach((P, O) => {
        m[O] = P - C
      }),
        y.forEach((P, O) => {
          y[O] = P + C
        })
    }
  }
  if (
    (Object.assign(t, { slides: p, snapGrid: m, slidesGrid: y, slidesSizesGrid: h }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    ee(r, '--swiper-centered-offset-before', `${-m[0]}px`),
      ee(r, '--swiper-centered-offset-after', `${t.size / 2 - h[h.length - 1] / 2}px`)
    const T = -t.snapGrid[0],
      C = -t.slidesGrid[0]
    ;(t.snapGrid = t.snapGrid.map((P) => P + T)), (t.slidesGrid = t.slidesGrid.map((P) => P + C))
  }
  if (
    (w !== u && t.emit('slidesLengthChange'),
    m.length !== d && (t.params.watchOverflow && t.checkOverflow(), t.emit('snapGridLengthChange')),
    y.length !== f && t.emit('slidesGridLengthChange'),
    s.watchSlidesProgress && t.updateSlidesOffset(),
    !c && !s.cssMode && (s.effect === 'slide' || s.effect === 'fade'))
  ) {
    const T = `${s.containerModifierClass}backface-hidden`,
      C = t.el.classList.contains(T)
    w <= s.maxBackfaceHiddenSlides ? C || t.el.classList.add(T) : C && t.el.classList.remove(T)
  }
}
function bt(t) {
  const e = this,
    i = [],
    s = e.virtual && e.params.virtual.enabled
  let r = 0,
    n
  typeof t == 'number' ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed)
  const o = (l) => (s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l])
  if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((l) => {
        i.push(l)
      })
    else
      for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
        const l = e.activeIndex + n
        if (l > e.slides.length && !s) break
        i.push(o(l))
      }
  else i.push(o(e.activeIndex))
  for (n = 0; n < i.length; n += 1)
    if (typeof i[n] < 'u') {
      const l = i[n].offsetHeight
      r = l > r ? l : r
    }
  ;(r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}
function yt() {
  const t = this,
    e = t.slides,
    i = t.isElement ? (t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop) : 0
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset =
      (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment()
}
function xt(t) {
  t === void 0 && (t = (this && this.translate) || 0)
  const e = this,
    i = e.params,
    { slides: s, rtlTranslate: r, snapGrid: n } = e
  if (s.length === 0) return
  typeof s[0].swiperSlideOffset > 'u' && e.updateSlidesOffset()
  let o = -t
  r && (o = t),
    s.forEach((a) => {
      a.classList.remove(i.slideVisibleClass)
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = [])
  let l = i.spaceBetween
  typeof l == 'string' && l.indexOf('%') >= 0
    ? (l = (parseFloat(l.replace('%', '')) / 100) * e.size)
    : typeof l == 'string' && (l = parseFloat(l))
  for (let a = 0; a < s.length; a += 1) {
    const c = s[a]
    let u = c.swiperSlideOffset
    i.cssMode && i.centeredSlides && (u -= s[0].swiperSlideOffset)
    const p = (o + (i.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + l),
      w = (o - n[0] + (i.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + l),
      m = -(o - u),
      y = m + e.slidesSizesGrid[a]
    ;((m >= 0 && m < e.size - 1) || (y > 1 && y <= e.size) || (m <= 0 && y >= e.size)) &&
      (e.visibleSlides.push(c),
      e.visibleSlidesIndexes.push(a),
      s[a].classList.add(i.slideVisibleClass)),
      (c.progress = r ? -p : p),
      (c.originalProgress = r ? -w : w)
  }
}
function Tt(t) {
  const e = this
  if (typeof t > 'u') {
    const u = e.rtlTranslate ? -1 : 1
    t = (e && e.translate && e.translate * u) || 0
  }
  const i = e.params,
    s = e.maxTranslate() - e.minTranslate()
  let { progress: r, isBeginning: n, isEnd: o, progressLoop: l } = e
  const a = n,
    c = o
  if (s === 0) (r = 0), (n = !0), (o = !0)
  else {
    r = (t - e.minTranslate()) / s
    const u = Math.abs(t - e.minTranslate()) < 1,
      p = Math.abs(t - e.maxTranslate()) < 1
    ;(n = u || r <= 0), (o = p || r >= 1), u && (r = 0), p && (r = 1)
  }
  if (i.loop) {
    const u = e.getSlideIndexByData(0),
      p = e.getSlideIndexByData(e.slides.length - 1),
      w = e.slidesGrid[u],
      m = e.slidesGrid[p],
      y = e.slidesGrid[e.slidesGrid.length - 1],
      h = Math.abs(t)
    h >= w ? (l = (h - w) / y) : (l = (h + y - m) / y), l > 1 && (l -= 1)
  }
  Object.assign(e, { progress: r, progressLoop: l, isBeginning: n, isEnd: o }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) && e.updateSlidesProgress(t),
    n && !a && e.emit('reachBeginning toEdge'),
    o && !c && e.emit('reachEnd toEdge'),
    ((a && !n) || (c && !o)) && e.emit('fromEdge'),
    e.emit('progress', r)
}
function Et() {
  const t = this,
    { slides: e, params: i, slidesEl: s, activeIndex: r } = t,
    n = t.virtual && i.virtual.enabled,
    o = (a) => $(s, `.${i.slideClass}${a}, swiper-slide${a}`)[0]
  e.forEach((a) => {
    a.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
  })
  let l
  if (n)
    if (i.loop) {
      let a = r - t.virtual.slidesBefore
      a < 0 && (a = t.virtual.slides.length + a),
        a >= t.virtual.slides.length && (a -= t.virtual.slides.length),
        (l = o(`[data-swiper-slide-index="${a}"]`))
    } else l = o(`[data-swiper-slide-index="${r}"]`)
  else l = e[r]
  if (l) {
    l.classList.add(i.slideActiveClass)
    let a = dt(l, `.${i.slideClass}, swiper-slide`)[0]
    i.loop && !a && (a = e[0]), a && a.classList.add(i.slideNextClass)
    let c = ot(l, `.${i.slideClass}, swiper-slide`)[0]
    i.loop && !c === 0 && (c = e[e.length - 1]), c && c.classList.add(i.slidePrevClass)
  }
  t.emitSlidesClasses()
}
const te = (t, e) => {
    if (!t || t.destroyed || !t.params) return
    const i = () => (t.isElement ? 'swiper-slide' : `.${t.params.slideClass}`),
      s = e.closest(i())
    if (s) {
      const r = s.querySelector(`.${t.params.lazyPreloaderClass}`)
      r && r.remove()
    }
  },
  oe = (t, e) => {
    if (!t.slides[e]) return
    const i = t.slides[e].querySelector('[loading="lazy"]')
    i && i.removeAttribute('loading')
  },
  me = (t) => {
    if (!t || t.destroyed || !t.params) return
    let e = t.params.lazyPreloadPrevNext
    const i = t.slides.length
    if (!i || !e || e < 0) return
    e = Math.min(e, i)
    const s =
        t.params.slidesPerView === 'auto'
          ? t.slidesPerViewDynamic()
          : Math.ceil(t.params.slidesPerView),
      r = t.activeIndex
    if (t.params.grid && t.params.grid.rows > 1) {
      const o = r,
        l = [o - e]
      l.push(...Array.from({ length: e }).map((a, c) => o + s + c)),
        t.slides.forEach((a, c) => {
          l.includes(a.column) && oe(t, c)
        })
      return
    }
    const n = r + s - 1
    if (t.params.rewind || t.params.loop)
      for (let o = r - e; o <= n + e; o += 1) {
        const l = ((o % i) + i) % i
        ;(l < r || l > n) && oe(t, l)
      }
    else
      for (let o = Math.max(r - e, 0); o <= Math.min(n + e, i - 1); o += 1)
        o !== r && (o > n || o < r) && oe(t, o)
  }
function Ct(t) {
  const { slidesGrid: e, params: i } = t,
    s = t.rtlTranslate ? t.translate : -t.translate
  let r
  for (let n = 0; n < e.length; n += 1)
    typeof e[n + 1] < 'u'
      ? s >= e[n] && s < e[n + 1] - (e[n + 1] - e[n]) / 2
        ? (r = n)
        : s >= e[n] && s < e[n + 1] && (r = n + 1)
      : s >= e[n] && (r = n)
  return i.normalizeSlideIndex && (r < 0 || typeof r > 'u') && (r = 0), r
}
function Pt(t) {
  const e = this,
    i = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: s, params: r, activeIndex: n, realIndex: o, snapIndex: l } = e
  let a = t,
    c
  const u = (w) => {
    let m = w - e.virtual.slidesBefore
    return (
      m < 0 && (m = e.virtual.slides.length + m),
      m >= e.virtual.slides.length && (m -= e.virtual.slides.length),
      m
    )
  }
  if ((typeof a > 'u' && (a = Ct(e)), s.indexOf(i) >= 0)) c = s.indexOf(i)
  else {
    const w = Math.min(r.slidesPerGroupSkip, a)
    c = w + Math.floor((a - w) / r.slidesPerGroup)
  }
  if ((c >= s.length && (c = s.length - 1), a === n)) {
    c !== l && ((e.snapIndex = c), e.emit('snapIndexChange')),
      e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = u(a))
    return
  }
  let p
  e.virtual && r.virtual.enabled && r.loop
    ? (p = u(a))
    : e.slides[a]
      ? (p = parseInt(e.slides[a].getAttribute('data-swiper-slide-index') || a, 10))
      : (p = a),
    Object.assign(e, {
      previousSnapIndex: l,
      snapIndex: c,
      previousRealIndex: o,
      realIndex: p,
      previousIndex: n,
      activeIndex: a
    }),
    e.initialized && me(e),
    e.emit('activeIndexChange'),
    e.emit('snapIndexChange'),
    o !== p && e.emit('realIndexChange'),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit('slideChange')
}
function Mt(t) {
  const e = this,
    i = e.params,
    s = t.closest(`.${i.slideClass}, swiper-slide`)
  let r = !1,
    n
  if (s) {
    for (let o = 0; o < e.slides.length; o += 1)
      if (e.slides[o] === s) {
        ;(r = !0), (n = o)
        break
      }
  }
  if (s && r)
    (e.clickedSlide = s),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(s.getAttribute('data-swiper-slide-index'), 10))
        : (e.clickedIndex = n)
  else {
    ;(e.clickedSlide = void 0), (e.clickedIndex = void 0)
    return
  }
  i.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide()
}
var It = {
  updateSize: wt,
  updateSlides: St,
  updateAutoHeight: bt,
  updateSlidesOffset: yt,
  updateSlidesProgress: xt,
  updateProgress: Tt,
  updateSlidesClasses: Et,
  updateActiveIndex: Pt,
  updateClickedSlide: Mt
}
function Lt(t) {
  t === void 0 && (t = this.isHorizontal() ? 'x' : 'y')
  const e = this,
    { params: i, rtlTranslate: s, translate: r, wrapperEl: n } = e
  if (i.virtualTranslate) return s ? -r : r
  if (i.cssMode) return r
  let o = at(n, t)
  return (o += e.cssOverflowAdjustment()), s && (o = -o), o || 0
}
function Ot(t, e) {
  const i = this,
    { rtlTranslate: s, params: r, wrapperEl: n, progress: o } = i
  let l = 0,
    a = 0
  const c = 0
  i.isHorizontal() ? (l = s ? -t : t) : (a = t),
    r.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? l : a),
    r.cssMode
      ? (n[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -l : -a)
      : r.virtualTranslate ||
        (i.isHorizontal() ? (l -= i.cssOverflowAdjustment()) : (a -= i.cssOverflowAdjustment()),
        (n.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`))
  let u
  const p = i.maxTranslate() - i.minTranslate()
  p === 0 ? (u = 0) : (u = (t - i.minTranslate()) / p),
    u !== o && i.updateProgress(t),
    i.emit('setTranslate', i.translate, e)
}
function _t() {
  return -this.snapGrid[0]
}
function zt() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function Bt(t, e, i, s, r) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    s === void 0 && (s = !0)
  const n = this,
    { params: o, wrapperEl: l } = n
  if (n.animating && o.preventInteractionOnTransition) return !1
  const a = n.minTranslate(),
    c = n.maxTranslate()
  let u
  if ((s && t > a ? (u = a) : s && t < c ? (u = c) : (u = t), n.updateProgress(u), o.cssMode)) {
    const p = n.isHorizontal()
    if (e === 0) l[p ? 'scrollLeft' : 'scrollTop'] = -u
    else {
      if (!n.support.smoothScroll)
        return ze({ swiper: n, targetPosition: -u, side: p ? 'left' : 'top' }), !0
      l.scrollTo({ [p ? 'left' : 'top']: -u, behavior: 'smooth' })
    }
    return !0
  }
  return (
    e === 0
      ? (n.setTransition(0),
        n.setTranslate(u),
        i && (n.emit('beforeTransitionStart', e, r), n.emit('transitionEnd')))
      : (n.setTransition(e),
        n.setTranslate(u),
        i && (n.emit('beforeTransitionStart', e, r), n.emit('transitionStart')),
        n.animating ||
          ((n.animating = !0),
          n.onTranslateToWrapperTransitionEnd ||
            (n.onTranslateToWrapperTransitionEnd = function (w) {
              !n ||
                n.destroyed ||
                (w.target === this &&
                  (n.wrapperEl.removeEventListener(
                    'transitionend',
                    n.onTranslateToWrapperTransitionEnd
                  ),
                  (n.onTranslateToWrapperTransitionEnd = null),
                  delete n.onTranslateToWrapperTransitionEnd,
                  i && n.emit('transitionEnd')))
            }),
          n.wrapperEl.addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd))),
    !0
  )
}
var At = { getTranslate: Lt, setTranslate: Ot, minTranslate: _t, maxTranslate: zt, translateTo: Bt }
function Gt(t, e) {
  const i = this
  i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`),
    i.emit('setTransition', t, e)
}
function De(t) {
  let { swiper: e, runCallbacks: i, direction: s, step: r } = t
  const { activeIndex: n, previousIndex: o } = e
  let l = s
  if (
    (l || (n > o ? (l = 'next') : n < o ? (l = 'prev') : (l = 'reset')),
    e.emit(`transition${r}`),
    i && n !== o)
  ) {
    if (l === 'reset') {
      e.emit(`slideResetTransition${r}`)
      return
    }
    e.emit(`slideChangeTransition${r}`),
      l === 'next' ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
  }
}
function Dt(t, e) {
  t === void 0 && (t = !0)
  const i = this,
    { params: s } = i
  s.cssMode ||
    (s.autoHeight && i.updateAutoHeight(),
    De({ swiper: i, runCallbacks: t, direction: e, step: 'Start' }))
}
function $t(t, e) {
  t === void 0 && (t = !0)
  const i = this,
    { params: s } = i
  ;(i.animating = !1),
    !s.cssMode &&
      (i.setTransition(0), De({ swiper: i, runCallbacks: t, direction: e, step: 'End' }))
}
var Nt = { setTransition: Gt, transitionStart: Dt, transitionEnd: $t }
function kt(t, e, i, s, r) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof t == 'string' && (t = parseInt(t, 10))
  const n = this
  let o = t
  o < 0 && (o = 0)
  const {
    params: l,
    snapGrid: a,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: p,
    rtlTranslate: w,
    wrapperEl: m,
    enabled: y
  } = n
  if ((n.animating && l.preventInteractionOnTransition) || (!y && !s && !r)) return !1
  const h = Math.min(n.params.slidesPerGroupSkip, o)
  let b = h + Math.floor((o - h) / n.params.slidesPerGroup)
  b >= a.length && (b = a.length - 1)
  const S = -a[b]
  if (l.normalizeSlideIndex)
    for (let f = 0; f < c.length; f += 1) {
      const v = -Math.floor(S * 100),
        x = Math.floor(c[f] * 100),
        I = Math.floor(c[f + 1] * 100)
      typeof c[f + 1] < 'u'
        ? v >= x && v < I - (I - x) / 2
          ? (o = f)
          : v >= x && v < I && (o = f + 1)
        : v >= x && (o = f)
    }
  if (
    n.initialized &&
    o !== p &&
    ((!n.allowSlideNext &&
      (w ? S > n.translate && S > n.minTranslate() : S < n.translate && S < n.minTranslate())) ||
      (!n.allowSlidePrev && S > n.translate && S > n.maxTranslate() && (p || 0) !== o))
  )
    return !1
  o !== (u || 0) && i && n.emit('beforeSlideChangeStart'), n.updateProgress(S)
  let d
  if (
    (o > p ? (d = 'next') : o < p ? (d = 'prev') : (d = 'reset'),
    (w && -S === n.translate) || (!w && S === n.translate))
  )
    return (
      n.updateActiveIndex(o),
      l.autoHeight && n.updateAutoHeight(),
      n.updateSlidesClasses(),
      l.effect !== 'slide' && n.setTranslate(S),
      d !== 'reset' && (n.transitionStart(i, d), n.transitionEnd(i, d)),
      !1
    )
  if (l.cssMode) {
    const f = n.isHorizontal(),
      v = w ? S : -S
    if (e === 0) {
      const x = n.virtual && n.params.virtual.enabled
      x && ((n.wrapperEl.style.scrollSnapType = 'none'), (n._immediateVirtual = !0)),
        x && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
          ? ((n._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              m[f ? 'scrollLeft' : 'scrollTop'] = v
            }))
          : (m[f ? 'scrollLeft' : 'scrollTop'] = v),
        x &&
          requestAnimationFrame(() => {
            ;(n.wrapperEl.style.scrollSnapType = ''), (n._immediateVirtual = !1)
          })
    } else {
      if (!n.support.smoothScroll)
        return ze({ swiper: n, targetPosition: v, side: f ? 'left' : 'top' }), !0
      m.scrollTo({ [f ? 'left' : 'top']: v, behavior: 'smooth' })
    }
    return !0
  }
  return (
    n.setTransition(e),
    n.setTranslate(S),
    n.updateActiveIndex(o),
    n.updateSlidesClasses(),
    n.emit('beforeTransitionStart', e, s),
    n.transitionStart(i, d),
    e === 0
      ? n.transitionEnd(i, d)
      : n.animating ||
        ((n.animating = !0),
        n.onSlideToWrapperTransitionEnd ||
          (n.onSlideToWrapperTransitionEnd = function (v) {
            !n ||
              n.destroyed ||
              (v.target === this &&
                (n.wrapperEl.removeEventListener('transitionend', n.onSlideToWrapperTransitionEnd),
                (n.onSlideToWrapperTransitionEnd = null),
                delete n.onSlideToWrapperTransitionEnd,
                n.transitionEnd(i, d)))
          }),
        n.wrapperEl.addEventListener('transitionend', n.onSlideToWrapperTransitionEnd)),
    !0
  )
}
function Vt(t, e, i, s) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof t == 'string' && (t = parseInt(t, 10))
  const r = this
  let n = t
  return (
    r.params.loop &&
      (r.virtual && r.params.virtual.enabled
        ? (n = n + r.virtual.slidesBefore)
        : (n = r.getSlideIndexByData(n))),
    r.slideTo(n, e, i, s)
  )
}
function Ft(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0)
  const s = this,
    { enabled: r, params: n, animating: o } = s
  if (!r) return s
  let l = n.slidesPerGroup
  n.slidesPerView === 'auto' &&
    n.slidesPerGroup === 1 &&
    n.slidesPerGroupAuto &&
    (l = Math.max(s.slidesPerViewDynamic('current', !0), 1))
  const a = s.activeIndex < n.slidesPerGroupSkip ? 1 : l,
    c = s.virtual && n.virtual.enabled
  if (n.loop) {
    if (o && !c && n.loopPreventsSliding) return !1
    s.loopFix({ direction: 'next' }), (s._clientLeft = s.wrapperEl.clientLeft)
  }
  return n.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + a, t, e, i)
}
function Ht(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0)
  const s = this,
    { params: r, snapGrid: n, slidesGrid: o, rtlTranslate: l, enabled: a, animating: c } = s
  if (!a) return s
  const u = s.virtual && r.virtual.enabled
  if (r.loop) {
    if (c && !u && r.loopPreventsSliding) return !1
    s.loopFix({ direction: 'prev' }), (s._clientLeft = s.wrapperEl.clientLeft)
  }
  const p = l ? s.translate : -s.translate
  function w(S) {
    return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S)
  }
  const m = w(p),
    y = n.map((S) => w(S))
  let h = n[y.indexOf(m) - 1]
  if (typeof h > 'u' && r.cssMode) {
    let S
    n.forEach((d, f) => {
      m >= d && (S = f)
    }),
      typeof S < 'u' && (h = n[S > 0 ? S - 1 : S])
  }
  let b = 0
  if (
    (typeof h < 'u' &&
      ((b = o.indexOf(h)),
      b < 0 && (b = s.activeIndex - 1),
      r.slidesPerView === 'auto' &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((b = b - s.slidesPerViewDynamic('previous', !0) + 1), (b = Math.max(b, 0)))),
    r.rewind && s.isBeginning)
  ) {
    const S =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1
    return s.slideTo(S, t, e, i)
  }
  return s.slideTo(b, t, e, i)
}
function Rt(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0)
  const s = this
  return s.slideTo(s.activeIndex, t, e, i)
}
function jt(t, e, i, s) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = 0.5)
  const r = this
  let n = r.activeIndex
  const o = Math.min(r.params.slidesPerGroupSkip, n),
    l = o + Math.floor((n - o) / r.params.slidesPerGroup),
    a = r.rtlTranslate ? r.translate : -r.translate
  if (a >= r.snapGrid[l]) {
    const c = r.snapGrid[l],
      u = r.snapGrid[l + 1]
    a - c > (u - c) * s && (n += r.params.slidesPerGroup)
  } else {
    const c = r.snapGrid[l - 1],
      u = r.snapGrid[l]
    a - c <= (u - c) * s && (n -= r.params.slidesPerGroup)
  }
  return (n = Math.max(n, 0)), (n = Math.min(n, r.slidesGrid.length - 1)), r.slideTo(n, t, e, i)
}
function Wt() {
  const t = this,
    { params: e, slidesEl: i } = t,
    s = e.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : e.slidesPerView
  let r = t.clickedIndex,
    n
  const o = t.isElement ? 'swiper-slide' : `.${e.slideClass}`
  if (e.loop) {
    if (t.animating) return
    ;(n = parseInt(t.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      e.centeredSlides
        ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2
          ? (t.loopFix(),
            (r = t.getSlideIndex($(i, `${o}[data-swiper-slide-index="${n}"]`)[0])),
            ce(() => {
              t.slideTo(r)
            }))
          : t.slideTo(r)
        : r > t.slides.length - s
          ? (t.loopFix(),
            (r = t.getSlideIndex($(i, `${o}[data-swiper-slide-index="${n}"]`)[0])),
            ce(() => {
              t.slideTo(r)
            }))
          : t.slideTo(r)
  } else t.slideTo(r)
}
var qt = {
  slideTo: kt,
  slideToLoop: Vt,
  slideNext: Ft,
  slidePrev: Ht,
  slideReset: Rt,
  slideToClosest: jt,
  slideToClickedSlide: Wt
}
function Xt(t) {
  const e = this,
    { params: i, slidesEl: s } = e
  if (!i.loop || (e.virtual && e.params.virtual.enabled)) return
  $(s, `.${i.slideClass}, swiper-slide`).forEach((n, o) => {
    n.setAttribute('data-swiper-slide-index', o)
  }),
    e.loopFix({ slideRealIndex: t, direction: i.centeredSlides ? void 0 : 'next' })
}
function Yt(t) {
  let {
    slideRealIndex: e,
    slideTo: i = !0,
    direction: s,
    setTranslate: r,
    activeSlideIndex: n,
    byController: o,
    byMousewheel: l
  } = t === void 0 ? {} : t
  const a = this
  if (!a.params.loop) return
  a.emit('beforeLoopFix')
  const { slides: c, allowSlidePrev: u, allowSlideNext: p, slidesEl: w, params: m } = a
  if (((a.allowSlidePrev = !0), (a.allowSlideNext = !0), a.virtual && m.virtual.enabled)) {
    i &&
      (!m.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : m.centeredSlides && a.snapIndex < m.slidesPerView
          ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
          : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = u),
      (a.allowSlideNext = p),
      a.emit('loopFix')
    return
  }
  const y =
    m.slidesPerView === 'auto'
      ? a.slidesPerViewDynamic()
      : Math.ceil(parseFloat(m.slidesPerView, 10))
  let h = m.loopedSlides || y
  h % m.slidesPerGroup !== 0 && (h += m.slidesPerGroup - (h % m.slidesPerGroup)),
    (a.loopedSlides = h)
  const b = [],
    S = []
  let d = a.activeIndex
  typeof n > 'u'
    ? (n = a.getSlideIndex(a.slides.filter((M) => M.classList.contains(m.slideActiveClass))[0]))
    : (d = n)
  const f = s === 'next' || !s,
    v = s === 'prev' || !s
  let x = 0,
    I = 0
  if (n < h) {
    x = Math.max(h - n, m.slidesPerGroup)
    for (let M = 0; M < h - n; M += 1) {
      const L = M - Math.floor(M / c.length) * c.length
      b.push(c.length - L - 1)
    }
  } else if (n > a.slides.length - h * 2) {
    I = Math.max(n - (a.slides.length - h * 2), m.slidesPerGroup)
    for (let M = 0; M < I; M += 1) {
      const L = M - Math.floor(M / c.length) * c.length
      S.push(L)
    }
  }
  if (
    (v &&
      b.forEach((M) => {
        ;(a.slides[M].swiperLoopMoveDOM = !0),
          w.prepend(a.slides[M]),
          (a.slides[M].swiperLoopMoveDOM = !1)
      }),
    f &&
      S.forEach((M) => {
        ;(a.slides[M].swiperLoopMoveDOM = !0),
          w.append(a.slides[M]),
          (a.slides[M].swiperLoopMoveDOM = !1)
      }),
    a.recalcSlides(),
    m.slidesPerView === 'auto' && a.updateSlides(),
    m.watchSlidesProgress && a.updateSlidesOffset(),
    i)
  ) {
    if (b.length > 0 && v)
      if (typeof e > 'u') {
        const M = a.slidesGrid[d],
          g = a.slidesGrid[d + x] - M
        l
          ? a.setTranslate(a.translate - g)
          : (a.slideTo(d + x, 0, !1, !0),
            r && (a.touches[a.isHorizontal() ? 'startX' : 'startY'] += g))
      } else r && a.slideToLoop(e, 0, !1, !0)
    else if (S.length > 0 && f)
      if (typeof e > 'u') {
        const M = a.slidesGrid[d],
          g = a.slidesGrid[d - I] - M
        l
          ? a.setTranslate(a.translate - g)
          : (a.slideTo(d - I, 0, !1, !0),
            r && (a.touches[a.isHorizontal() ? 'startX' : 'startY'] += g))
      } else a.slideToLoop(e, 0, !1, !0)
  }
  if (
    ((a.allowSlidePrev = u), (a.allowSlideNext = p), a.controller && a.controller.control && !o)
  ) {
    const M = {
      slideRealIndex: e,
      slideTo: !1,
      direction: s,
      setTranslate: r,
      activeSlideIndex: n,
      byController: !0
    }
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((L) => {
          !L.destroyed && L.params.loop && L.loopFix(M)
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix(M)
  }
  a.emit('loopFix')
}
function Ut() {
  const t = this,
    { params: e, slidesEl: i } = t
  if (!e.loop || (t.virtual && t.params.virtual.enabled)) return
  t.recalcSlides()
  const s = []
  t.slides.forEach((r) => {
    const n =
      typeof r.swiperSlideIndex > 'u'
        ? r.getAttribute('data-swiper-slide-index') * 1
        : r.swiperSlideIndex
    s[n] = r
  }),
    t.slides.forEach((r) => {
      r.removeAttribute('data-swiper-slide-index')
    }),
    s.forEach((r) => {
      i.append(r)
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0)
}
var Kt = { loopCreate: Xt, loopFix: Yt, loopDestroy: Ut }
function Zt(t) {
  const e = this
  if (!e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode) return
  const i = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl
  e.isElement && (e.__preventObserver__ = !0),
    (i.style.cursor = 'move'),
    (i.style.cursor = t ? 'grabbing' : 'grab'),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1
      })
}
function Jt() {
  const t = this
  ;(t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t.isElement && (t.__preventObserver__ = !0),
    (t[t.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1
      }))
}
var Qt = { setGrabCursor: Zt, unsetGrabCursor: Jt }
function ei(t, e) {
  e === void 0 && (e = this)
  function i(s) {
    if (!s || s === W() || s === G()) return null
    s.assignedSlot && (s = s.assignedSlot)
    const r = s.closest(t)
    return !r && !s.getRootNode ? null : r || i(s.getRootNode().host)
  }
  return i(e)
}
function ti(t) {
  const e = this,
    i = W(),
    s = G(),
    r = e.touchEventsData
  r.evCache.push(t)
  const { params: n, touches: o, enabled: l } = e
  if (
    !l ||
    (!n.simulateTouch && t.pointerType === 'mouse') ||
    (e.animating && n.preventInteractionOnTransition)
  )
    return
  !e.animating && n.cssMode && n.loop && e.loopFix()
  let a = t
  a.originalEvent && (a = a.originalEvent)
  let c = a.target
  if (
    (n.touchEventsTarget === 'wrapper' && !e.wrapperEl.contains(c)) ||
    ('which' in a && a.which === 3) ||
    ('button' in a && a.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return
  const u = !!n.noSwipingClass && n.noSwipingClass !== '',
    p = t.composedPath ? t.composedPath() : t.path
  u && a.target && a.target.shadowRoot && p && (c = p[0])
  const w = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
    m = !!(a.target && a.target.shadowRoot)
  if (n.noSwiping && (m ? ei(w, c) : c.closest(w))) {
    e.allowClick = !0
    return
  }
  if (n.swipeHandler && !c.closest(n.swipeHandler)) return
  ;(o.currentX = a.pageX), (o.currentY = a.pageY)
  const y = o.currentX,
    h = o.currentY,
    b = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
    S = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold
  if (b && (y <= S || y >= s.innerWidth - S))
    if (b === 'prevent') t.preventDefault()
    else return
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }),
    (o.startX = y),
    (o.startY = h),
    (r.touchStartTime = ie()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    n.threshold > 0 && (r.allowThresholdMove = !1)
  let d = !0
  c.matches(r.focusableElements) && ((d = !1), c.nodeName === 'SELECT' && (r.isTouched = !1)),
    i.activeElement &&
      i.activeElement.matches(r.focusableElements) &&
      i.activeElement !== c &&
      i.activeElement.blur()
  const f = d && e.allowTouchMove && n.touchStartPreventDefault
  ;(n.touchStartForcePreventDefault || f) && !c.isContentEditable && a.preventDefault(),
    n.freeMode &&
      n.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !n.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit('touchStart', a)
}
function ii(t) {
  const e = W(),
    i = this,
    s = i.touchEventsData,
    { params: r, touches: n, rtlTranslate: o, enabled: l } = i
  if (!l || (!r.simulateTouch && t.pointerType === 'mouse')) return
  let a = t
  if ((a.originalEvent && (a = a.originalEvent), !s.isTouched)) {
    s.startMoving && s.isScrolling && i.emit('touchMoveOpposite', a)
    return
  }
  const c = s.evCache.findIndex((I) => I.pointerId === a.pointerId)
  c >= 0 && (s.evCache[c] = a)
  const u = s.evCache.length > 1 ? s.evCache[0] : a,
    p = u.pageX,
    w = u.pageY
  if (a.preventedByNestedSwiper) {
    ;(n.startX = p), (n.startY = w)
    return
  }
  if (!i.allowTouchMove) {
    a.target.matches(s.focusableElements) || (i.allowClick = !1),
      s.isTouched &&
        (Object.assign(n, {
          startX: p,
          startY: w,
          prevX: i.touches.currentX,
          prevY: i.touches.currentY,
          currentX: p,
          currentY: w
        }),
        (s.touchStartTime = ie()))
    return
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (i.isVertical()) {
      if (
        (w < n.startY && i.translate <= i.maxTranslate()) ||
        (w > n.startY && i.translate >= i.minTranslate())
      ) {
        ;(s.isTouched = !1), (s.isMoved = !1)
        return
      }
    } else if (
      (p < n.startX && i.translate <= i.maxTranslate()) ||
      (p > n.startX && i.translate >= i.minTranslate())
    )
      return
  }
  if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
    ;(s.isMoved = !0), (i.allowClick = !1)
    return
  }
  if (
    (s.allowTouchCallbacks && i.emit('touchMove', a), a.targetTouches && a.targetTouches.length > 1)
  )
    return
  ;(n.currentX = p), (n.currentY = w)
  const m = n.currentX - n.startX,
    y = n.currentY - n.startY
  if (i.params.threshold && Math.sqrt(m ** 2 + y ** 2) < i.params.threshold) return
  if (typeof s.isScrolling > 'u') {
    let I
    ;(i.isHorizontal() && n.currentY === n.startY) || (i.isVertical() && n.currentX === n.startX)
      ? (s.isScrolling = !1)
      : m * m + y * y >= 25 &&
        ((I = (Math.atan2(Math.abs(y), Math.abs(m)) * 180) / Math.PI),
        (s.isScrolling = i.isHorizontal() ? I > r.touchAngle : 90 - I > r.touchAngle))
  }
  if (
    (s.isScrolling && i.emit('touchMoveOpposite', a),
    typeof s.startMoving > 'u' &&
      (n.currentX !== n.startX || n.currentY !== n.startY) &&
      (s.startMoving = !0),
    s.isScrolling || (i.zoom && i.params.zoom && i.params.zoom.enabled && s.evCache.length > 1))
  ) {
    s.isTouched = !1
    return
  }
  if (!s.startMoving) return
  ;(i.allowClick = !1),
    !r.cssMode && a.cancelable && a.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && a.stopPropagation()
  let h = i.isHorizontal() ? m : y,
    b = i.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY
  r.oneWayMovement && ((h = Math.abs(h) * (o ? 1 : -1)), (b = Math.abs(b) * (o ? 1 : -1))),
    (n.diff = h),
    (h *= r.touchRatio),
    o && ((h = -h), (b = -b))
  const S = i.touchesDirection
  ;(i.swipeDirection = h > 0 ? 'prev' : 'next'), (i.touchesDirection = b > 0 ? 'prev' : 'next')
  const d = i.params.loop && !r.cssMode
  if (!s.isMoved) {
    if (
      (d && i.loopFix({ direction: i.swipeDirection }),
      (s.startTranslate = i.getTranslate()),
      i.setTransition(0),
      i.animating)
    ) {
      const I = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 })
      i.wrapperEl.dispatchEvent(I)
    }
    ;(s.allowMomentumBounce = !1),
      r.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
      i.emit('sliderFirstMove', a)
  }
  let f
  s.isMoved &&
    S !== i.touchesDirection &&
    d &&
    Math.abs(h) >= 1 &&
    (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }), (f = !0)),
    i.emit('sliderMove', a),
    (s.isMoved = !0),
    (s.currentTranslate = h + s.startTranslate)
  let v = !0,
    x = r.resistanceRatio
  if (
    (r.touchReleaseOnEdges && (x = 0),
    h > 0
      ? (d &&
          !f &&
          s.currentTranslate >
            (r.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) &&
          i.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
        s.currentTranslate > i.minTranslate() &&
          ((v = !1),
          r.resistance &&
            (s.currentTranslate =
              i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + h) ** x)))
      : h < 0 &&
        (d &&
          !f &&
          s.currentTranslate <
            (r.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) &&
          i.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              i.slides.length -
              (r.slidesPerView === 'auto'
                ? i.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10)))
          }),
        s.currentTranslate < i.maxTranslate() &&
          ((v = !1),
          r.resistance &&
            (s.currentTranslate =
              i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - h) ** x))),
    v && (a.preventedByNestedSwiper = !0),
    !i.allowSlideNext &&
      i.swipeDirection === 'next' &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      i.swipeDirection === 'prev' &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(h) > r.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ;(s.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (s.currentTranslate = s.startTranslate),
          (n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        return
      }
    } else {
      s.currentTranslate = s.startTranslate
      return
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && i.freeMode) || r.watchSlidesProgress) &&
      (i.updateActiveIndex(), i.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(s.currentTranslate),
    i.setTranslate(s.currentTranslate))
}
function si(t) {
  const e = this,
    i = e.touchEventsData,
    s = i.evCache.findIndex((f) => f.pointerId === t.pointerId)
  if (
    (s >= 0 && i.evCache.splice(s, 1),
    ['pointercancel', 'pointerout', 'pointerleave'].includes(t.type) &&
      !(t.type === 'pointercancel' && (e.browser.isSafari || e.browser.isWebView)))
  )
    return
  const { params: r, touches: n, rtlTranslate: o, slidesGrid: l, enabled: a } = e
  if (!a || (!r.simulateTouch && t.pointerType === 'mouse')) return
  let c = t
  if (
    (c.originalEvent && (c = c.originalEvent),
    i.allowTouchCallbacks && e.emit('touchEnd', c),
    (i.allowTouchCallbacks = !1),
    !i.isTouched)
  ) {
    i.isMoved && r.grabCursor && e.setGrabCursor(!1), (i.isMoved = !1), (i.startMoving = !1)
    return
  }
  r.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1)
  const u = ie(),
    p = u - i.touchStartTime
  if (e.allowClick) {
    const f = c.path || (c.composedPath && c.composedPath())
    e.updateClickedSlide((f && f[0]) || c.target),
      e.emit('tap click', c),
      p < 300 && u - i.lastClickTime < 300 && e.emit('doubleTap doubleClick', c)
  }
  if (
    ((i.lastClickTime = ie()),
    ce(() => {
      e.destroyed || (e.allowClick = !0)
    }),
    !i.isTouched ||
      !i.isMoved ||
      !e.swipeDirection ||
      n.diff === 0 ||
      i.currentTranslate === i.startTranslate)
  ) {
    ;(i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1)
    return
  }
  ;(i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1)
  let w
  if (
    (r.followFinger ? (w = o ? e.translate : -e.translate) : (w = -i.currentTranslate), r.cssMode)
  )
    return
  if (r.freeMode && r.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: w })
    return
  }
  let m = 0,
    y = e.slidesSizesGrid[0]
  for (let f = 0; f < l.length; f += f < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
    const v = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup
    typeof l[f + v] < 'u'
      ? w >= l[f] && w < l[f + v] && ((m = f), (y = l[f + v] - l[f]))
      : w >= l[f] && ((m = f), (y = l[l.length - 1] - l[l.length - 2]))
  }
  let h = null,
    b = null
  r.rewind &&
    (e.isBeginning
      ? (b =
          r.virtual && r.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (h = 0))
  const S = (w - l[m]) / y,
    d = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup
  if (p > r.longSwipesMs) {
    if (!r.longSwipes) {
      e.slideTo(e.activeIndex)
      return
    }
    e.swipeDirection === 'next' &&
      (S >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? h : m + d) : e.slideTo(m)),
      e.swipeDirection === 'prev' &&
        (S > 1 - r.longSwipesRatio
          ? e.slideTo(m + d)
          : b !== null && S < 0 && Math.abs(S) > r.longSwipesRatio
            ? e.slideTo(b)
            : e.slideTo(m))
  } else {
    if (!r.shortSwipes) {
      e.slideTo(e.activeIndex)
      return
    }
    e.navigation && (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl)
      ? c.target === e.navigation.nextEl
        ? e.slideTo(m + d)
        : e.slideTo(m)
      : (e.swipeDirection === 'next' && e.slideTo(h !== null ? h : m + d),
        e.swipeDirection === 'prev' && e.slideTo(b !== null ? b : m))
  }
}
function Te() {
  const t = this,
    { params: e, el: i } = t
  if (i && i.offsetWidth === 0) return
  e.breakpoints && t.setBreakpoint()
  const { allowSlideNext: s, allowSlidePrev: r, snapGrid: n } = t,
    o = t.virtual && t.params.virtual.enabled
  ;(t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses()
  const l = o && e.loop
  ;(e.slidesPerView === 'auto' || e.slidesPerView > 1) &&
  t.isEnd &&
  !t.isBeginning &&
  !t.params.centeredSlides &&
  !l
    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
    : t.params.loop && !o
      ? t.slideToLoop(t.realIndex, 0, !1, !0)
      : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(t.autoplay.resizeTimeout),
      (t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
      }, 500))),
    (t.allowSlidePrev = r),
    (t.allowSlideNext = s),
    t.params.watchOverflow && n !== t.snapGrid && t.checkOverflow()
}
function ni(t) {
  const e = this
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())))
}
function ri() {
  const t = this,
    { wrapperEl: e, rtlTranslate: i, enabled: s } = t
  if (!s) return
  ;(t.previousTranslate = t.translate),
    t.isHorizontal() ? (t.translate = -e.scrollLeft) : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses()
  let r
  const n = t.maxTranslate() - t.minTranslate()
  n === 0 ? (r = 0) : (r = (t.translate - t.minTranslate()) / n),
    r !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
    t.emit('setTranslate', t.translate, !1)
}
function ai(t) {
  const e = this
  te(e, t.target),
    !(e.params.cssMode || (e.params.slidesPerView !== 'auto' && !e.params.autoHeight)) && e.update()
}
let Ee = !1
function li() {}
const $e = (t, e) => {
  const i = W(),
    { params: s, el: r, wrapperEl: n, device: o } = t,
    l = !!s.nested,
    a = e === 'on' ? 'addEventListener' : 'removeEventListener',
    c = e
  r[a]('pointerdown', t.onTouchStart, { passive: !1 }),
    i[a]('pointermove', t.onTouchMove, { passive: !1, capture: l }),
    i[a]('pointerup', t.onTouchEnd, { passive: !0 }),
    i[a]('pointercancel', t.onTouchEnd, { passive: !0 }),
    i[a]('pointerout', t.onTouchEnd, { passive: !0 }),
    i[a]('pointerleave', t.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) && r[a]('click', t.onClick, !0),
    s.cssMode && n[a]('scroll', t.onScroll),
    s.updateOnWindowResize
      ? t[c](
          o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
          Te,
          !0
        )
      : t[c]('observerUpdate', Te, !0),
    r[a]('load', t.onLoad, { capture: !0 })
}
function oi() {
  const t = this,
    e = W(),
    { params: i } = t
  ;(t.onTouchStart = ti.bind(t)),
    (t.onTouchMove = ii.bind(t)),
    (t.onTouchEnd = si.bind(t)),
    i.cssMode && (t.onScroll = ri.bind(t)),
    (t.onClick = ni.bind(t)),
    (t.onLoad = ai.bind(t)),
    Ee || (e.addEventListener('touchstart', li), (Ee = !0)),
    $e(t, 'on')
}
function di() {
  $e(this, 'off')
}
var fi = { attachEvents: oi, detachEvents: di }
const Ce = (t, e) => t.grid && e.grid && e.grid.rows > 1
function ui() {
  const t = this,
    { realIndex: e, initialized: i, params: s, el: r } = t,
    n = s.breakpoints
  if (!n || (n && Object.keys(n).length === 0)) return
  const o = t.getBreakpoint(n, t.params.breakpointsBase, t.el)
  if (!o || t.currentBreakpoint === o) return
  const a = (o in n ? n[o] : void 0) || t.originalParams,
    c = Ce(t, s),
    u = Ce(t, a),
    p = s.enabled
  c && !u
    ? (r.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      t.emitContainerClasses())
    : !c &&
      u &&
      (r.classList.add(`${s.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === 'column') || (!a.grid.fill && s.grid.fill === 'column')) &&
        r.classList.add(`${s.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    ['navigation', 'pagination', 'scrollbar'].forEach((h) => {
      if (typeof a[h] > 'u') return
      const b = s[h] && s[h].enabled,
        S = a[h] && a[h].enabled
      b && !S && t[h].disable(), !b && S && t[h].enable()
    })
  const w = a.direction && a.direction !== s.direction,
    m = s.loop && (a.slidesPerView !== s.slidesPerView || w)
  w && i && t.changeDirection(), A(t.params, a)
  const y = t.params.enabled
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev
  }),
    p && !y ? t.disable() : !p && y && t.enable(),
    (t.currentBreakpoint = o),
    t.emit('_beforeBreakpoint', a),
    m && i && (t.loopDestroy(), t.loopCreate(e), t.updateSlides()),
    t.emit('breakpoint', a)
}
function ci(t, e, i) {
  if ((e === void 0 && (e = 'window'), !t || (e === 'container' && !i))) return
  let s = !1
  const r = G(),
    n = e === 'window' ? r.innerHeight : i.clientHeight,
    o = Object.keys(t).map((l) => {
      if (typeof l == 'string' && l.indexOf('@') === 0) {
        const a = parseFloat(l.substr(1))
        return { value: n * a, point: l }
      }
      return { value: l, point: l }
    })
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10))
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: c } = o[l]
    e === 'window'
      ? r.matchMedia(`(min-width: ${c}px)`).matches && (s = a)
      : c <= i.clientWidth && (s = a)
  }
  return s || 'max'
}
var pi = { setBreakpoint: ui, getBreakpoint: ci }
function mi(t, e) {
  const i = []
  return (
    t.forEach((s) => {
      typeof s == 'object'
        ? Object.keys(s).forEach((r) => {
            s[r] && i.push(e + r)
          })
        : typeof s == 'string' && i.push(e + s)
    }),
    i
  )
}
function hi() {
  const t = this,
    { classNames: e, params: i, rtl: s, el: r, device: n } = t,
    o = mi(
      [
        'initialized',
        i.direction,
        { 'free-mode': t.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: s },
        { grid: i.grid && i.grid.rows > 1 },
        { 'grid-column': i.grid && i.grid.rows > 1 && i.grid.fill === 'column' },
        { android: n.android },
        { ios: n.ios },
        { 'css-mode': i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { 'watch-progress': i.watchSlidesProgress }
      ],
      i.containerModifierClass
    )
  e.push(...o), r.classList.add(...e), t.emitContainerClasses()
}
function gi() {
  const t = this,
    { el: e, classNames: i } = t
  e.classList.remove(...i), t.emitContainerClasses()
}
var vi = { addClasses: hi, removeClasses: gi }
function wi() {
  const t = this,
    { isLocked: e, params: i } = t,
    { slidesOffsetBefore: s } = i
  if (s) {
    const r = t.slides.length - 1,
      n = t.slidesGrid[r] + t.slidesSizesGrid[r] + s * 2
    t.isLocked = t.size > n
  } else t.isLocked = t.snapGrid.length === 1
  i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? 'lock' : 'unlock')
}
var Si = { checkOverflow: wi },
  Pe = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  }
function bi(t, e) {
  return function (s) {
    s === void 0 && (s = {})
    const r = Object.keys(s)[0],
      n = s[r]
    if (typeof n != 'object' || n === null) {
      A(e, s)
      return
    }
    if (
      (['navigation', 'pagination', 'scrollbar'].indexOf(r) >= 0 &&
        t[r] === !0 &&
        (t[r] = { auto: !0 }),
      !(r in t && 'enabled' in n))
    ) {
      A(e, s)
      return
    }
    t[r] === !0 && (t[r] = { enabled: !0 }),
      typeof t[r] == 'object' && !('enabled' in t[r]) && (t[r].enabled = !0),
      t[r] || (t[r] = { enabled: !1 }),
      A(e, s)
  }
}
const de = {
    eventsEmitter: vt,
    update: It,
    translate: At,
    transition: Nt,
    slide: qt,
    loop: Kt,
    grabCursor: Qt,
    events: fi,
    breakpoints: pi,
    checkOverflow: Si,
    classes: vi
  },
  fe = {}
let U = class F {
  constructor() {
    let e, i
    for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n]
    r.length === 1 &&
    r[0].constructor &&
    Object.prototype.toString.call(r[0]).slice(8, -1) === 'Object'
      ? (i = r[0])
      : ([e, i] = r),
      i || (i = {}),
      (i = A({}, i)),
      e && !i.el && (i.el = e)
    const o = W()
    if (i.el && typeof i.el == 'string' && o.querySelectorAll(i.el).length > 1) {
      const u = []
      return (
        o.querySelectorAll(i.el).forEach((p) => {
          const w = A({}, i, { el: p })
          u.push(new F(w))
        }),
        u
      )
    }
    const l = this
    ;(l.__swiper__ = !0),
      (l.support = Ge()),
      (l.device = ct({ userAgent: i.userAgent })),
      (l.browser = mt()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules)
    const a = {}
    l.modules.forEach((u) => {
      u({
        params: i,
        swiper: l,
        extendParams: bi(i, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      })
    })
    const c = A({}, Pe, a)
    return (
      (l.params = A({}, c, fe, i)),
      (l.originalParams = A({}, l.params)),
      (l.passedParams = A({}, i)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((u) => {
          l.on(u, l.params.on[u])
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === 'horizontal'
        },
        isVertical() {
          return l.params.direction === 'vertical'
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: []
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0
      }),
      l.emit('_swiper'),
      l.params.init && l.init(),
      l
    )
  }
  getSlideIndex(e) {
    const { slidesEl: i, params: s } = this,
      r = $(i, `.${s.slideClass}, swiper-slide`),
      n = se(r[0])
    return se(e) - n
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter((i) => i.getAttribute('data-swiper-slide-index') * 1 === e)[0]
    )
  }
  recalcSlides() {
    const e = this,
      { slidesEl: i, params: s } = e
    e.slides = $(i, `.${s.slideClass}, swiper-slide`)
  }
  enable() {
    const e = this
    e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'))
  }
  disable() {
    const e = this
    e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'))
  }
  setProgress(e, i) {
    const s = this
    e = Math.min(Math.max(e, 0), 1)
    const r = s.minTranslate(),
      o = (s.maxTranslate() - r) * e + r
    s.translateTo(o, typeof i > 'u' ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses()
  }
  emitContainerClasses() {
    const e = this
    if (!e.params._emitClasses || !e.el) return
    const i = e.el.className
      .split(' ')
      .filter((s) => s.indexOf('swiper') === 0 || s.indexOf(e.params.containerModifierClass) === 0)
    e.emit('_containerClasses', i.join(' '))
  }
  getSlideClasses(e) {
    const i = this
    return i.destroyed
      ? ''
      : e.className
          .split(' ')
          .filter((s) => s.indexOf('swiper-slide') === 0 || s.indexOf(i.params.slideClass) === 0)
          .join(' ')
  }
  emitSlidesClasses() {
    const e = this
    if (!e.params._emitClasses || !e.el) return
    const i = []
    e.slides.forEach((s) => {
      const r = e.getSlideClasses(s)
      i.push({ slideEl: s, classNames: r }), e.emit('_slideClass', s, r)
    }),
      e.emit('_slideClasses', i)
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = 'current'), i === void 0 && (i = !1)
    const s = this,
      { params: r, slides: n, slidesGrid: o, slidesSizesGrid: l, size: a, activeIndex: c } = s
    let u = 1
    if (r.centeredSlides) {
      let p = n[c] ? n[c].swiperSlideSize : 0,
        w
      for (let m = c + 1; m < n.length; m += 1)
        n[m] && !w && ((p += n[m].swiperSlideSize), (u += 1), p > a && (w = !0))
      for (let m = c - 1; m >= 0; m -= 1)
        n[m] && !w && ((p += n[m].swiperSlideSize), (u += 1), p > a && (w = !0))
    } else if (e === 'current')
      for (let p = c + 1; p < n.length; p += 1)
        (i ? o[p] + l[p] - o[c] < a : o[p] - o[c] < a) && (u += 1)
    else for (let p = c - 1; p >= 0; p -= 1) o[c] - o[p] < a && (u += 1)
    return u
  }
  update() {
    const e = this
    if (!e || e.destroyed) return
    const { snapGrid: i, params: s } = e
    s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && te(e, o)
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses()
    function r() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate())
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses()
    }
    let n
    if (s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && e.updateAutoHeight()
    else {
      if ((s.slidesPerView === 'auto' || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides
        n = e.slideTo(o.length - 1, 0, !1, !0)
      } else n = e.slideTo(e.activeIndex, 0, !1, !0)
      n || r()
    }
    s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit('update')
  }
  changeDirection(e, i) {
    i === void 0 && (i = !0)
    const s = this,
      r = s.params.direction
    return (
      e || (e = r === 'horizontal' ? 'vertical' : 'horizontal'),
      e === r ||
        (e !== 'horizontal' && e !== 'vertical') ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((n) => {
          e === 'vertical' ? (n.style.width = '') : (n.style.height = '')
        }),
        s.emit('changeDirection'),
        i && s.update()),
      s
    )
  }
  changeLanguageDirection(e) {
    const i = this
    ;(i.rtl && e === 'rtl') ||
      (!i.rtl && e === 'ltr') ||
      ((i.rtl = e === 'rtl'),
      (i.rtlTranslate = i.params.direction === 'horizontal' && i.rtl),
      i.rtl
        ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'rtl'))
        : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'ltr')),
      i.update())
  }
  mount(e) {
    const i = this
    if (i.mounted) return !0
    let s = e || i.params.el
    if ((typeof s == 'string' && (s = document.querySelector(s)), !s)) return !1
    ;(s.swiper = i), s.parentNode && s.parentNode.host && (i.isElement = !0)
    const r = () => `.${(i.params.wrapperClass || '').trim().split(' ').join('.')}`
    let o =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(r())
        : $(s, r())[0]
    return (
      !o &&
        i.params.createElements &&
        ((o = Be('div', i.params.wrapperClass)),
        s.append(o),
        $(s, `.${i.params.slideClass}`).forEach((l) => {
          o.append(l)
        })),
      Object.assign(i, {
        el: s,
        wrapperEl: o,
        slidesEl: i.isElement ? s.parentNode.host : o,
        hostEl: i.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === 'rtl' || H(s, 'direction') === 'rtl',
        rtlTranslate:
          i.params.direction === 'horizontal' &&
          (s.dir.toLowerCase() === 'rtl' || H(s, 'direction') === 'rtl'),
        wrongRTL: H(o, 'display') === '-webkit-box'
      }),
      !0
    )
  }
  init(e) {
    const i = this
    return (
      i.initialized ||
        i.mount(e) === !1 ||
        (i.emit('beforeInit'),
        i.params.breakpoints && i.setBreakpoint(),
        i.addClasses(),
        i.updateSize(),
        i.updateSlides(),
        i.params.watchOverflow && i.checkOverflow(),
        i.params.grabCursor && i.enabled && i.setGrabCursor(),
        i.params.loop && i.virtual && i.params.virtual.enabled
          ? i.slideTo(
              i.params.initialSlide + i.virtual.slidesBefore,
              0,
              i.params.runCallbacksOnInit,
              !1,
              !0
            )
          : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
        i.params.loop && i.loopCreate(),
        i.attachEvents(),
        [...i.el.querySelectorAll('[loading="lazy"]')].forEach((r) => {
          r.complete
            ? te(i, r)
            : r.addEventListener('load', (n) => {
                te(i, n.target)
              })
        }),
        me(i),
        (i.initialized = !0),
        me(i),
        i.emit('init'),
        i.emit('afterInit')),
      i
    )
  }
  destroy(e, i) {
    e === void 0 && (e = !0), i === void 0 && (i = !0)
    const s = this,
      { params: r, el: n, wrapperEl: o, slides: l } = s
    return (
      typeof s.params > 'u' ||
        s.destroyed ||
        (s.emit('beforeDestroy'),
        (s.initialized = !1),
        s.detachEvents(),
        r.loop && s.loopDestroy(),
        i &&
          (s.removeClasses(),
          n.removeAttribute('style'),
          o.removeAttribute('style'),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                r.slideVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass
              ),
                a.removeAttribute('style'),
                a.removeAttribute('data-swiper-slide-index')
            })),
        s.emit('destroy'),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a)
        }),
        e !== !1 && ((s.el.swiper = null), nt(s)),
        (s.destroyed = !0)),
      null
    )
  }
  static extendDefaults(e) {
    A(fe, e)
  }
  static get extendedDefaults() {
    return fe
  }
  static get defaults() {
    return Pe
  }
  static installModule(e) {
    F.prototype.__modules__ || (F.prototype.__modules__ = [])
    const i = F.prototype.__modules__
    typeof e == 'function' && i.indexOf(e) < 0 && i.push(e)
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((i) => F.installModule(i)), F) : (F.installModule(e), F)
  }
}
Object.keys(de).forEach((t) => {
  Object.keys(de[t]).forEach((e) => {
    U.prototype[e] = de[t][e]
  })
})
U.use([ht, gt])
const Ne = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopedSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control'
]
function j(t) {
  return (
    typeof t == 'object' &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === 'Object'
  )
}
function R(t, e) {
  const i = ['__proto__', 'constructor', 'prototype']
  Object.keys(e)
    .filter((s) => i.indexOf(s) < 0)
    .forEach((s) => {
      typeof t[s] > 'u'
        ? (t[s] = e[s])
        : j(e[s]) && j(t[s]) && Object.keys(e[s]).length > 0
          ? e[s].__swiper__
            ? (t[s] = e[s])
            : R(t[s], e[s])
          : (t[s] = e[s])
    })
}
function ke(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation && typeof t.navigation.nextEl > 'u' && typeof t.navigation.prevEl > 'u'
  )
}
function Ve(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > 'u'
}
function Fe(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > 'u'
}
function He(t) {
  t === void 0 && (t = '')
  const e = t
      .split(' ')
      .map((s) => s.trim())
      .filter((s) => !!s),
    i = []
  return (
    e.forEach((s) => {
      i.indexOf(s) < 0 && i.push(s)
    }),
    i.join(' ')
  )
}
function yi(t) {
  return (
    t === void 0 && (t = ''),
    t ? (t.includes('swiper-wrapper') ? t : `swiper-wrapper ${t}`) : 'swiper-wrapper'
  )
}
function xi(t) {
  let {
    swiper: e,
    slides: i,
    passedParams: s,
    changedParams: r,
    nextEl: n,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a
  } = t
  const c = r.filter((g) => g !== 'children' && g !== 'direction' && g !== 'wrapperClass'),
    { params: u, pagination: p, navigation: w, scrollbar: m, virtual: y, thumbs: h } = e
  let b, S, d, f, v, x, I, M
  r.includes('thumbs') && s.thumbs && s.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (b = !0),
    r.includes('controller') &&
      s.controller &&
      s.controller.control &&
      u.controller &&
      !u.controller.control &&
      (S = !0),
    r.includes('pagination') &&
      s.pagination &&
      (s.pagination.el || a) &&
      (u.pagination || u.pagination === !1) &&
      p &&
      !p.el &&
      (d = !0),
    r.includes('scrollbar') &&
      s.scrollbar &&
      (s.scrollbar.el || l) &&
      (u.scrollbar || u.scrollbar === !1) &&
      m &&
      !m.el &&
      (f = !0),
    r.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || o) &&
      (s.navigation.nextEl || n) &&
      (u.navigation || u.navigation === !1) &&
      w &&
      !w.prevEl &&
      !w.nextEl &&
      (v = !0)
  const L = (g) => {
    e[g] &&
      (e[g].destroy(),
      g === 'navigation'
        ? (e.isElement && (e[g].prevEl.remove(), e[g].nextEl.remove()),
          (u[g].prevEl = void 0),
          (u[g].nextEl = void 0),
          (e[g].prevEl = void 0),
          (e[g].nextEl = void 0))
        : (e.isElement && e[g].el.remove(), (u[g].el = void 0), (e[g].el = void 0)))
  }
  r.includes('loop') &&
    e.isElement &&
    (u.loop && !s.loop ? (x = !0) : !u.loop && s.loop ? (I = !0) : (M = !0)),
    c.forEach((g) => {
      if (j(u[g]) && j(s[g]))
        R(u[g], s[g]),
          (g === 'navigation' || g === 'pagination' || g === 'scrollbar') &&
            'enabled' in s[g] &&
            !s[g].enabled &&
            L(g)
      else {
        const _ = s[g]
        ;(_ === !0 || _ === !1) && (g === 'navigation' || g === 'pagination' || g === 'scrollbar')
          ? _ === !1 && L(g)
          : (u[g] = s[g])
      }
    }),
    c.includes('controller') &&
      !S &&
      e.controller &&
      e.controller.control &&
      u.controller &&
      u.controller.control &&
      (e.controller.control = u.controller.control),
    r.includes('children') && i && y && u.virtual.enabled && ((y.slides = i), y.update(!0)),
    r.includes('children') && i && u.loop && (M = !0),
    b && h.init() && h.update(!0),
    S && (e.controller.control = u.controller.control),
    d &&
      (e.isElement &&
        (!a || typeof a == 'string') &&
        ((a = document.createElement('div')),
        a.classList.add('swiper-pagination'),
        e.el.appendChild(a)),
      a && (u.pagination.el = a),
      p.init(),
      p.render(),
      p.update()),
    f &&
      (e.isElement &&
        (!l || typeof l == 'string') &&
        ((l = document.createElement('div')),
        l.classList.add('swiper-scrollbar'),
        e.el.appendChild(l)),
      l && (u.scrollbar.el = l),
      m.init(),
      m.updateSize(),
      m.setTranslate()),
    v &&
      (e.isElement &&
        ((!n || typeof n == 'string') &&
          ((n = document.createElement('div')),
          n.classList.add('swiper-button-next'),
          (n.innerHTML = e.hostEl.nextButtonSvg),
          e.el.appendChild(n)),
        (!o || typeof o == 'string') &&
          ((o = document.createElement('div')),
          o.classList.add('swiper-button-prev'),
          (n.innerHTML = e.hostEl.prevButtonSvg),
          e.el.appendChild(o))),
      n && (u.navigation.nextEl = n),
      o && (u.navigation.prevEl = o),
      w.init(),
      w.update()),
    r.includes('allowSlideNext') && (e.allowSlideNext = s.allowSlideNext),
    r.includes('allowSlidePrev') && (e.allowSlidePrev = s.allowSlidePrev),
    r.includes('direction') && e.changeDirection(s.direction, !1),
    (x || M) && e.loopDestroy(),
    (I || M) && e.loopCreate(),
    e.update()
}
function Me(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = !0)
  const i = { on: {} },
    s = {},
    r = {}
  R(i, U.defaults), R(i, U.extendedDefaults), (i._emitClasses = !0), (i.init = !1)
  const n = {},
    o = Ne.map((a) => a.replace(/_/, '')),
    l = Object.assign({}, t)
  return (
    Object.keys(l).forEach((a) => {
      typeof t[a] > 'u' ||
        (o.indexOf(a) >= 0
          ? j(t[a])
            ? ((i[a] = {}), (r[a] = {}), R(i[a], t[a]), R(r[a], t[a]))
            : ((i[a] = t[a]), (r[a] = t[a]))
          : a.search(/on[A-Z]/) === 0 && typeof t[a] == 'function'
            ? e
              ? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
              : (i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
            : (n[a] = t[a]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((a) => {
      i[a] === !0 && (i[a] = {}), i[a] === !1 && delete i[a]
    }),
    { params: i, passedParams: r, rest: n, events: s }
  )
}
function Ti(t, e) {
  let { el: i, nextEl: s, prevEl: r, paginationEl: n, scrollbarEl: o, swiper: l } = t
  ke(e) &&
    s &&
    r &&
    ((l.params.navigation.nextEl = s),
    (l.originalParams.navigation.nextEl = s),
    (l.params.navigation.prevEl = r),
    (l.originalParams.navigation.prevEl = r)),
    Ve(e) && n && ((l.params.pagination.el = n), (l.originalParams.pagination.el = n)),
    Fe(e) && o && ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(i)
}
function Ei(t, e, i, s, r) {
  const n = []
  if (!e) return n
  const o = (a) => {
    n.indexOf(a) < 0 && n.push(a)
  }
  if (i && s) {
    const a = s.map(r),
      c = i.map(r)
    a.join('') !== c.join('') && o('children'), s.length !== i.length && o('children')
  }
  return (
    Ne.filter((a) => a[0] === '_')
      .map((a) => a.replace(/_/, ''))
      .forEach((a) => {
        if (a in t && a in e)
          if (j(t[a]) && j(e[a])) {
            const c = Object.keys(t[a]),
              u = Object.keys(e[a])
            c.length !== u.length
              ? o(a)
              : (c.forEach((p) => {
                  t[a][p] !== e[a][p] && o(a)
                }),
                u.forEach((p) => {
                  t[a][p] !== e[a][p] && o(a)
                }))
          } else t[a] !== e[a] && o(a)
      }),
    n
  )
}
const Ci = (t) => {
  !t ||
    t.destroyed ||
    !t.params.virtual ||
    (t.params.virtual && !t.params.virtual.enabled) ||
    (t.updateSlides(),
    t.updateProgress(),
    t.updateSlidesClasses(),
    t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate())
}
function ue(t, e, i) {
  t === void 0 && (t = {})
  const s = [],
    r = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] },
    n = (o, l) => {
      Array.isArray(o) &&
        o.forEach((a) => {
          const c = typeof a.type == 'symbol'
          l === 'default' && (l = 'container-end'),
            c && a.children
              ? n(a.children, l)
              : a.type && (a.type.name === 'SwiperSlide' || a.type.name === 'AsyncComponentWrapper')
                ? s.push(a)
                : r[l] && r[l].push(a)
        })
    }
  return (
    Object.keys(t).forEach((o) => {
      if (typeof t[o] != 'function') return
      const l = t[o]()
      n(l, o)
    }),
    (i.value = e.value),
    (e.value = s),
    { slides: s, slots: r }
  )
}
function Pi(t, e, i) {
  if (!i) return null
  const s = (u) => {
      let p = u
      return u < 0 ? (p = e.length + u) : p >= e.length && (p = p - e.length), p
    },
    r = t.value.isHorizontal()
      ? { [t.value.rtlTranslate ? 'right' : 'left']: `${i.offset}px` }
      : { top: `${i.offset}px` },
    { from: n, to: o } = i,
    l = t.value.params.loop ? -e.length : 0,
    a = t.value.params.loop ? e.length * 2 : e.length,
    c = []
  for (let u = l; u < a; u += 1) u >= n && u <= o && c.push(e[s(u)])
  return c.map(
    (u) => (
      u.props || (u.props = {}),
      u.props.style || (u.props.style = {}),
      (u.props.swiperRef = t),
      (u.props.style = r),
      D(u.type, { ...u.props }, u.children)
    )
  )
}
const Mi = {
    name: 'Swiper',
    props: {
      tag: { type: String, default: 'div' },
      wrapperTag: { type: String, default: 'div' },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 }
    },
    emits: [
      '_beforeBreakpoint',
      '_containerClasses',
      '_slideClass',
      '_slideClasses',
      '_swiper',
      '_freeModeNoMomentumRelease',
      'activeIndexChange',
      'afterInit',
      'autoplay',
      'autoplayStart',
      'autoplayStop',
      'autoplayPause',
      'autoplayResume',
      'autoplayTimeLeft',
      'beforeDestroy',
      'beforeInit',
      'beforeLoopFix',
      'beforeResize',
      'beforeSlideChangeStart',
      'beforeTransitionStart',
      'breakpoint',
      'changeDirection',
      'click',
      'disable',
      'doubleTap',
      'doubleClick',
      'destroy',
      'enable',
      'fromEdge',
      'hashChange',
      'hashSet',
      'init',
      'keyPress',
      'lock',
      'loopFix',
      'momentumBounce',
      'navigationHide',
      'navigationShow',
      'navigationPrev',
      'navigationNext',
      'observerUpdate',
      'orientationchange',
      'paginationHide',
      'paginationRender',
      'paginationShow',
      'paginationUpdate',
      'progress',
      'reachBeginning',
      'reachEnd',
      'realIndexChange',
      'resize',
      'scroll',
      'scrollbarDragEnd',
      'scrollbarDragMove',
      'scrollbarDragStart',
      'setTransition',
      'setTranslate',
      'slideChange',
      'slideChangeTransitionEnd',
      'slideChangeTransitionStart',
      'slideNextTransitionEnd',
      'slideNextTransitionStart',
      'slidePrevTransitionEnd',
      'slidePrevTransitionStart',
      'slideResetTransitionStart',
      'slideResetTransitionEnd',
      'sliderMove',
      'sliderFirstMove',
      'slidesLengthChange',
      'slidesGridLengthChange',
      'snapGridLengthChange',
      'snapIndexChange',
      'swiper',
      'tap',
      'toEdge',
      'touchEnd',
      'touchMove',
      'touchMoveOpposite',
      'touchStart',
      'transitionEnd',
      'transitionStart',
      'unlock',
      'update',
      'virtualUpdate',
      'zoomChange'
    ],
    setup(t, e) {
      let { slots: i, emit: s } = e
      const { tag: r, wrapperTag: n } = t,
        o = B('swiper'),
        l = B(null),
        a = B(!1),
        c = B(!1),
        u = B(null),
        p = B(null),
        w = B(null),
        m = { value: [] },
        y = { value: [] },
        h = B(null),
        b = B(null),
        S = B(null),
        d = B(null),
        { params: f, passedParams: v } = Me(t, !1)
      ue(i, m, y), (w.value = v), (y.value = m.value)
      const x = () => {
        ue(i, m, y), (a.value = !0)
      }
      ;(f.onAny = function (L) {
        for (var g = arguments.length, _ = new Array(g > 1 ? g - 1 : 0), T = 1; T < g; T++)
          _[T - 1] = arguments[T]
        s(L, ..._)
      }),
        Object.assign(f.on, {
          _beforeBreakpoint: x,
          _containerClasses(L, g) {
            o.value = g
          }
        })
      const I = { ...f }
      if (
        (delete I.wrapperClass,
        (p.value = new U(I)),
        p.value.virtual && p.value.params.virtual.enabled)
      ) {
        p.value.virtual.slides = m.value
        const L = {
          cache: !1,
          slides: m.value,
          renderExternal: (g) => {
            l.value = g
          },
          renderExternalUpdate: !1
        }
        R(p.value.params.virtual, L), R(p.value.originalParams.virtual, L)
      }
      Ie(() => {
        !c.value && p.value && (p.value.emitSlidesClasses(), (c.value = !0))
        const { passedParams: L } = Me(t, !1),
          g = Ei(L, w.value, m.value, y.value, (_) => _.props && _.props.key)
        ;(w.value = L),
          (g.length || a.value) &&
            p.value &&
            !p.value.destroyed &&
            xi({
              swiper: p.value,
              slides: m.value,
              passedParams: L,
              changedParams: g,
              nextEl: h.value,
              prevEl: b.value,
              scrollbarEl: d.value,
              paginationEl: S.value
            }),
          (a.value = !1)
      }),
        Le('swiper', p),
        Ye(l, () => {
          Ze(() => {
            Ci(p.value)
          })
        }),
        he(() => {
          u.value &&
            (Ti(
              {
                el: u.value,
                nextEl: h.value,
                prevEl: b.value,
                paginationEl: S.value,
                scrollbarEl: d.value,
                swiper: p.value
              },
              f
            ),
            s('swiper', p.value))
        }),
        Oe(() => {
          p.value && !p.value.destroyed && p.value.destroy(!0, !1)
        })
      function M(L) {
        return f.virtual
          ? Pi(p, L, l.value)
          : (L.forEach((g, _) => {
              g.props || (g.props = {}), (g.props.swiperRef = p), (g.props.swiperSlideIndex = _)
            }),
            L)
      }
      return () => {
        const { slides: L, slots: g } = ue(i, m, y)
        return D(r, { ref: u, class: He(o.value) }, [
          g['container-start'],
          D(n, { class: yi(f.wrapperClass) }, [g['wrapper-start'], M(L), g['wrapper-end']]),
          ke(t) && [
            D('div', { ref: b, class: 'swiper-button-prev' }),
            D('div', { ref: h, class: 'swiper-button-next' })
          ],
          Fe(t) && D('div', { ref: d, class: 'swiper-scrollbar' }),
          Ve(t) && D('div', { ref: S, class: 'swiper-pagination' }),
          g['container-end']
        ])
      }
    }
  },
  Ii = {
    name: 'SwiperSlide',
    props: {
      tag: { type: String, default: 'div' },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 }
    },
    setup(t, e) {
      let { slots: i } = e,
        s = !1
      const { swiperRef: r } = t,
        n = B(null),
        o = B('swiper-slide'),
        l = B(!1)
      function a(p, w, m) {
        w === n.value && (o.value = m)
      }
      he(() => {
        !r || !r.value || (r.value.on('_slideClass', a), (s = !0))
      }),
        Ue(() => {
          s || !r || !r.value || (r.value.on('_slideClass', a), (s = !0))
        }),
        Ie(() => {
          !n.value ||
            !r ||
            !r.value ||
            (typeof t.swiperSlideIndex < 'u' && (n.value.swiperSlideIndex = t.swiperSlideIndex),
            r.value.destroyed && o.value !== 'swiper-slide' && (o.value = 'swiper-slide'))
        }),
        Oe(() => {
          !r || !r.value || r.value.off('_slideClass', a)
        })
      const c = Ke(() => ({
        isActive: o.value.indexOf('swiper-slide-active') >= 0,
        isVisible: o.value.indexOf('swiper-slide-visible') >= 0,
        isPrev: o.value.indexOf('swiper-slide-prev') >= 0,
        isNext: o.value.indexOf('swiper-slide-next') >= 0
      }))
      Le('swiperSlide', c)
      const u = () => {
        l.value = !0
      }
      return () =>
        D(
          t.tag,
          {
            class: He(`${o.value}`),
            ref: n,
            'data-swiper-slide-index':
              typeof t.virtualIndex > 'u' && r && r.value && r.value.params.loop
                ? t.swiperSlideIndex
                : t.virtualIndex,
            onLoadCapture: u
          },
          t.zoom
            ? D(
                'div',
                {
                  class: 'swiper-zoom-container',
                  'data-swiper-zoom': typeof t.zoom == 'number' ? t.zoom : void 0
                },
                [
                  i.default && i.default(c.value),
                  t.lazy && !l.value && D('div', { class: 'swiper-lazy-preloader' })
                ]
              )
            : [
                i.default && i.default(c.value),
                t.lazy && !l.value && D('div', { class: 'swiper-lazy-preloader' })
              ]
        )
    }
  }
function Re(t, e, i, s) {
  return (
    t.params.createElements &&
      Object.keys(s).forEach((r) => {
        if (!i[r] && i.auto === !0) {
          let n = $(t.el, `.${s[r]}`)[0]
          n || ((n = Be('div', s[r])), (n.className = s[r]), t.el.append(n)), (i[r] = n), (e[r] = n)
        }
      }),
    i
  )
}
function Li(t) {
  let { swiper: e, extendParams: i, on: s, emit: r } = t
  i({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  }),
    (e.navigation = { nextEl: null, prevEl: null })
  const n = (h) => (Array.isArray(h) || (h = [h].filter((b) => !!b)), h)
  function o(h) {
    let b
    return h && typeof h == 'string' && e.isElement && ((b = e.el.querySelector(h)), b)
      ? b
      : (h &&
          (typeof h == 'string' && (b = [...document.querySelectorAll(h)]),
          e.params.uniqueNavElements &&
            typeof h == 'string' &&
            b.length > 1 &&
            e.el.querySelectorAll(h).length === 1 &&
            (b = e.el.querySelector(h))),
        h && !b ? h : b)
  }
  function l(h, b) {
    const S = e.params.navigation
    ;(h = n(h)),
      h.forEach((d) => {
        d &&
          (d.classList[b ? 'add' : 'remove'](...S.disabledClass.split(' ')),
          d.tagName === 'BUTTON' && (d.disabled = b),
          e.params.watchOverflow &&
            e.enabled &&
            d.classList[e.isLocked ? 'add' : 'remove'](S.lockClass))
      })
  }
  function a() {
    const { nextEl: h, prevEl: b } = e.navigation
    if (e.params.loop) {
      l(b, !1), l(h, !1)
      return
    }
    l(b, e.isBeginning && !e.params.rewind), l(h, e.isEnd && !e.params.rewind)
  }
  function c(h) {
    h.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), r('navigationPrev'))
  }
  function u(h) {
    h.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), r('navigationNext'))
  }
  function p() {
    const h = e.params.navigation
    if (
      ((e.params.navigation = Re(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
      })),
      !(h.nextEl || h.prevEl))
    )
      return
    let b = o(h.nextEl),
      S = o(h.prevEl)
    Object.assign(e.navigation, { nextEl: b, prevEl: S }), (b = n(b)), (S = n(S))
    const d = (f, v) => {
      f && f.addEventListener('click', v === 'next' ? u : c),
        !e.enabled && f && f.classList.add(...h.lockClass.split(' '))
    }
    b.forEach((f) => d(f, 'next')), S.forEach((f) => d(f, 'prev'))
  }
  function w() {
    let { nextEl: h, prevEl: b } = e.navigation
    ;(h = n(h)), (b = n(b))
    const S = (d, f) => {
      d.removeEventListener('click', f === 'next' ? u : c),
        d.classList.remove(...e.params.navigation.disabledClass.split(' '))
    }
    h.forEach((d) => S(d, 'next')), b.forEach((d) => S(d, 'prev'))
  }
  s('init', () => {
    e.params.navigation.enabled === !1 ? y() : (p(), a())
  }),
    s('toEdge fromEdge lock unlock', () => {
      a()
    }),
    s('destroy', () => {
      w()
    }),
    s('enable disable', () => {
      let { nextEl: h, prevEl: b } = e.navigation
      ;(h = n(h)),
        (b = n(b)),
        [...h, ...b]
          .filter((S) => !!S)
          .forEach((S) => S.classList[e.enabled ? 'remove' : 'add'](e.params.navigation.lockClass))
    }),
    s('click', (h, b) => {
      let { nextEl: S, prevEl: d } = e.navigation
      ;(S = n(S)), (d = n(d))
      const f = b.target
      if (e.params.navigation.hideOnClick && !d.includes(f) && !S.includes(f)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === f || e.pagination.el.contains(f))
        )
          return
        let v
        S.length
          ? (v = S[0].classList.contains(e.params.navigation.hiddenClass))
          : d.length && (v = d[0].classList.contains(e.params.navigation.hiddenClass)),
          r(v === !0 ? 'navigationShow' : 'navigationHide'),
          [...S, ...d]
            .filter((x) => !!x)
            .forEach((x) => x.classList.toggle(e.params.navigation.hiddenClass))
      }
    })
  const m = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(' ')), p(), a()
    },
    y = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(' ')), w()
    }
  Object.assign(e.navigation, { enable: m, disable: y, update: a, init: p, destroy: w })
}
function Y(t) {
  return (
    t === void 0 && (t = ''),
    `.${t
      .trim()
      .replace(/([\.:!+\/])/g, '\\$1')
      .replace(/ /g, '.')}`
  )
}
function Oi(t) {
  let { swiper: e, extendParams: i, on: s, emit: r } = t
  const n = 'swiper-pagination'
  i({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: 'bullets',
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (d) => d,
      formatFractionTotal: (d) => d,
      bulletClass: `${n}-bullet`,
      bulletActiveClass: `${n}-bullet-active`,
      modifierClass: `${n}-`,
      currentClass: `${n}-current`,
      totalClass: `${n}-total`,
      hiddenClass: `${n}-hidden`,
      progressbarFillClass: `${n}-progressbar-fill`,
      progressbarOppositeClass: `${n}-progressbar-opposite`,
      clickableClass: `${n}-clickable`,
      lockClass: `${n}-lock`,
      horizontalClass: `${n}-horizontal`,
      verticalClass: `${n}-vertical`,
      paginationDisabledClass: `${n}-disabled`
    }
  }),
    (e.pagination = { el: null, bullets: [] })
  let o,
    l = 0
  const a = (d) => (Array.isArray(d) || (d = [d].filter((f) => !!f)), d)
  function c() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    )
  }
  function u(d, f) {
    const { bulletActiveClass: v } = e.params.pagination
    d &&
      ((d = d[`${f === 'prev' ? 'previous' : 'next'}ElementSibling`]),
      d &&
        (d.classList.add(`${v}-${f}`),
        (d = d[`${f === 'prev' ? 'previous' : 'next'}ElementSibling`]),
        d && d.classList.add(`${v}-${f}-${f}`)))
  }
  function p(d) {
    const f = d.target.closest(Y(e.params.pagination.bulletClass))
    if (!f) return
    d.preventDefault()
    const v = se(f) * e.params.slidesPerGroup
    if (e.params.loop) {
      if (e.realIndex === v) return
      const x = e.getSlideIndexByData(v),
        I = e.getSlideIndexByData(e.realIndex)
      x > e.slides.length - e.loopedSlides &&
        e.loopFix({ direction: x > I ? 'next' : 'prev', activeSlideIndex: x, slideTo: !1 }),
        e.slideToLoop(v)
    } else e.slideTo(v)
  }
  function w() {
    const d = e.rtl,
      f = e.params.pagination
    if (c()) return
    let v = e.pagination.el
    v = a(v)
    let x, I
    const M = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
      L = e.params.loop ? Math.ceil(M / e.params.slidesPerGroup) : e.snapGrid.length
    if (
      (e.params.loop
        ? ((I = e.previousRealIndex || 0),
          (x =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < 'u'
          ? ((x = e.snapIndex), (I = e.previousSnapIndex))
          : ((I = e.previousIndex || 0), (x = e.activeIndex || 0)),
      f.type === 'bullets' && e.pagination.bullets && e.pagination.bullets.length > 0)
    ) {
      const g = e.pagination.bullets
      let _, T, C
      if (
        (f.dynamicBullets &&
          ((o = pe(g[0], e.isHorizontal() ? 'width' : 'height', !0)),
          v.forEach((P) => {
            P.style[e.isHorizontal() ? 'width' : 'height'] = `${o * (f.dynamicMainBullets + 4)}px`
          }),
          f.dynamicMainBullets > 1 &&
            I !== void 0 &&
            ((l += x - (I || 0)),
            l > f.dynamicMainBullets - 1 ? (l = f.dynamicMainBullets - 1) : l < 0 && (l = 0)),
          (_ = Math.max(x - l, 0)),
          (T = _ + (Math.min(g.length, f.dynamicMainBullets) - 1)),
          (C = (T + _) / 2)),
        g.forEach((P) => {
          const O = [
            ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
              (z) => `${f.bulletActiveClass}${z}`
            )
          ]
            .map((z) => (typeof z == 'string' && z.includes(' ') ? z.split(' ') : z))
            .flat()
          P.classList.remove(...O)
        }),
        v.length > 1)
      )
        g.forEach((P) => {
          const O = se(P)
          O === x
            ? P.classList.add(...f.bulletActiveClass.split(' '))
            : e.isElement && P.setAttribute('part', 'bullet'),
            f.dynamicBullets &&
              (O >= _ && O <= T && P.classList.add(...`${f.bulletActiveClass}-main`.split(' ')),
              O === _ && u(P, 'prev'),
              O === T && u(P, 'next'))
        })
      else {
        const P = g[x]
        if (
          (P && P.classList.add(...f.bulletActiveClass.split(' ')),
          e.isElement &&
            g.forEach((O, z) => {
              O.setAttribute('part', z === x ? 'bullet-active' : 'bullet')
            }),
          f.dynamicBullets)
        ) {
          const O = g[_],
            z = g[T]
          for (let k = _; k <= T; k += 1)
            g[k] && g[k].classList.add(...`${f.bulletActiveClass}-main`.split(' '))
          u(O, 'prev'), u(z, 'next')
        }
      }
      if (f.dynamicBullets) {
        const P = Math.min(g.length, f.dynamicMainBullets + 4),
          O = (o * P - o) / 2 - C * o,
          z = d ? 'right' : 'left'
        g.forEach((k) => {
          k.style[e.isHorizontal() ? z : 'top'] = `${O}px`
        })
      }
    }
    v.forEach((g, _) => {
      if (
        (f.type === 'fraction' &&
          (g.querySelectorAll(Y(f.currentClass)).forEach((T) => {
            T.textContent = f.formatFractionCurrent(x + 1)
          }),
          g.querySelectorAll(Y(f.totalClass)).forEach((T) => {
            T.textContent = f.formatFractionTotal(L)
          })),
        f.type === 'progressbar')
      ) {
        let T
        f.progressbarOpposite
          ? (T = e.isHorizontal() ? 'vertical' : 'horizontal')
          : (T = e.isHorizontal() ? 'horizontal' : 'vertical')
        const C = (x + 1) / L
        let P = 1,
          O = 1
        T === 'horizontal' ? (P = C) : (O = C),
          g.querySelectorAll(Y(f.progressbarFillClass)).forEach((z) => {
            ;(z.style.transform = `translate3d(0,0,0) scaleX(${P}) scaleY(${O})`),
              (z.style.transitionDuration = `${e.params.speed}ms`)
          })
      }
      f.type === 'custom' && f.renderCustom
        ? ((g.innerHTML = f.renderCustom(e, x + 1, L)), _ === 0 && r('paginationRender', g))
        : (_ === 0 && r('paginationRender', g), r('paginationUpdate', g)),
        e.params.watchOverflow &&
          e.enabled &&
          g.classList[e.isLocked ? 'add' : 'remove'](f.lockClass)
    })
  }
  function m() {
    const d = e.params.pagination
    if (c()) return
    const f = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
    let v = e.pagination.el
    v = a(v)
    let x = ''
    if (d.type === 'bullets') {
      let I = e.params.loop ? Math.ceil(f / e.params.slidesPerGroup) : e.snapGrid.length
      e.params.freeMode && e.params.freeMode.enabled && I > f && (I = f)
      for (let M = 0; M < I; M += 1)
        d.renderBullet
          ? (x += d.renderBullet.call(e, M, d.bulletClass))
          : (x += `<${d.bulletElement} ${e.isElement ? 'part="bullet"' : ''} class="${d.bulletClass}"></${d.bulletElement}>`)
    }
    d.type === 'fraction' &&
      (d.renderFraction
        ? (x = d.renderFraction.call(e, d.currentClass, d.totalClass))
        : (x = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`)),
      d.type === 'progressbar' &&
        (d.renderProgressbar
          ? (x = d.renderProgressbar.call(e, d.progressbarFillClass))
          : (x = `<span class="${d.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      v.forEach((I) => {
        d.type !== 'custom' && (I.innerHTML = x || ''),
          d.type === 'bullets' && e.pagination.bullets.push(...I.querySelectorAll(Y(d.bulletClass)))
      }),
      d.type !== 'custom' && r('paginationRender', v[0])
  }
  function y() {
    e.params.pagination = Re(e, e.originalParams.pagination, e.params.pagination, {
      el: 'swiper-pagination'
    })
    const d = e.params.pagination
    if (!d.el) return
    let f
    typeof d.el == 'string' && e.isElement && (f = e.el.querySelector(d.el)),
      !f && typeof d.el == 'string' && (f = [...document.querySelectorAll(d.el)]),
      f || (f = d.el),
      !(!f || f.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof d.el == 'string' &&
          Array.isArray(f) &&
          f.length > 1 &&
          ((f = [...e.el.querySelectorAll(d.el)]),
          f.length > 1 && (f = f.filter((v) => Ae(v, '.swiper')[0] === e.el)[0])),
        Array.isArray(f) && f.length === 1 && (f = f[0]),
        Object.assign(e.pagination, { el: f }),
        (f = a(f)),
        f.forEach((v) => {
          d.type === 'bullets' && d.clickable && v.classList.add(d.clickableClass),
            v.classList.add(d.modifierClass + d.type),
            v.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.type === 'bullets' &&
              d.dynamicBullets &&
              (v.classList.add(`${d.modifierClass}${d.type}-dynamic`),
              (l = 0),
              d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
            d.type === 'progressbar' &&
              d.progressbarOpposite &&
              v.classList.add(d.progressbarOppositeClass),
            d.clickable && v.addEventListener('click', p),
            e.enabled || v.classList.add(d.lockClass)
        }))
  }
  function h() {
    const d = e.params.pagination
    if (c()) return
    let f = e.pagination.el
    f &&
      ((f = a(f)),
      f.forEach((v) => {
        v.classList.remove(d.hiddenClass),
          v.classList.remove(d.modifierClass + d.type),
          v.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
          d.clickable && v.removeEventListener('click', p)
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((v) => v.classList.remove(...d.bulletActiveClass.split(' ')))
  }
  s('changeDirection', () => {
    if (!e.pagination || !e.pagination.el) return
    const d = e.params.pagination
    let { el: f } = e.pagination
    ;(f = a(f)),
      f.forEach((v) => {
        v.classList.remove(d.horizontalClass, d.verticalClass),
          v.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass)
      })
  }),
    s('init', () => {
      e.params.pagination.enabled === !1 ? S() : (y(), m(), w())
    }),
    s('activeIndexChange', () => {
      typeof e.snapIndex > 'u' && w()
    }),
    s('snapIndexChange', () => {
      w()
    }),
    s('snapGridLengthChange', () => {
      m(), w()
    }),
    s('destroy', () => {
      h()
    }),
    s('enable disable', () => {
      let { el: d } = e.pagination
      d &&
        ((d = a(d)),
        d.forEach((f) => f.classList[e.enabled ? 'remove' : 'add'](e.params.pagination.lockClass)))
    }),
    s('lock unlock', () => {
      w()
    }),
    s('click', (d, f) => {
      const v = f.target,
        x = a(e.pagination.el)
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        x &&
        x.length > 0 &&
        !v.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && v === e.navigation.nextEl) ||
            (e.navigation.prevEl && v === e.navigation.prevEl))
        )
          return
        const I = x[0].classList.contains(e.params.pagination.hiddenClass)
        r(I === !0 ? 'paginationShow' : 'paginationHide'),
          x.forEach((M) => M.classList.toggle(e.params.pagination.hiddenClass))
      }
    })
  const b = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass)
      let { el: d } = e.pagination
      d &&
        ((d = a(d)),
        d.forEach((f) => f.classList.remove(e.params.pagination.paginationDisabledClass))),
        y(),
        m(),
        w()
    },
    S = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass)
      let { el: d } = e.pagination
      d &&
        ((d = a(d)),
        d.forEach((f) => f.classList.add(e.params.pagination.paginationDisabledClass))),
        h()
    }
  Object.assign(e.pagination, { enable: b, disable: S, render: m, update: w, init: y, destroy: h })
}
const N = (t) => (et('data-v-285e92e1'), (t = t()), tt(), t),
  _i = { class: 'custom-swiper-box' },
  zi = { class: 'swiper-item' },
  Bi = ['src'],
  Ai = { class: 'main-container' },
  Gi = { class: 'about max-1700' },
  Di = N(() =>
    E(
      'div',
      { class: 'warp-title animate__fadeInUp onMounted-wow' },
      [E('span', null, '公 · 司 · 介 · 绍'), E('div', { class: 'line' })],
      -1
    )
  ),
  $i = { class: 'about-content wrapper animate__fadeInUp onMounted-wow' },
  Ni = { class: 'about-left' },
  ki = N(() => E('p', null, '王红梅祖传按摩', -1)),
  Vi = N(() =>
    E(
      'p',
      null,
      ' “王红梅祖传按摩”是一家历经五十多年的品牌老店，具有厚重的中华中医文化底蕴， 是芜湖市中医推拿界的权威品牌。“王红梅祖传按摩”前身是芜湖著名医师陶宜珍女士 创办的“芜湖市盲人按摩诊所”，是芜湖最早一批中医推拿机构。自1999年陶宜珍所长 去世后，传其爱徒王红梅医师接管并更名为“王红梅祖传按摩中心” ... ',
      -1
    )
  ),
  Fi = { class: 'btn-box' },
  Hi = { class: 'about-right' },
  Ri = ['src'],
  ji = { class: 'culture max-1700' },
  Wi = N(() =>
    E(
      'div',
      { class: 'warp-title animate__fadeInUp onMounted-wow' },
      [E('span', null, '品 · 牌 · 文 · 化'), E('div', { class: 'line' })],
      -1
    )
  ),
  qi = { class: 'culture-list wrapper animate__fadeInUp onMounted-wow' },
  Xi = { class: 'circle' },
  Yi = N(() => E('div', { class: 'cul-border' }, null, -1)),
  Ui = { class: 'tit' },
  Ki = N(() => E('div', { class: 'cul-border' }, null, -1)),
  Zi = { class: 'business max-1700' },
  Ji = N(() =>
    E(
      'div',
      { class: 'warp-title animate__fadeInUp onMounted-wow' },
      [E('span', null, '业 · 务 · 模 · 块'), E('div', { class: 'line' })],
      -1
    )
  ),
  Qi = { class: 'business-list wrapper animate__fadeInUp onMounted-wow' },
  es = N(() =>
    E(
      'div',
      { class: 'tit' },
      [
        E('p', null, '艾灸类'),
        E(
          'p',
          null,
          ' 推拿又称“按摩”，是以中医的脏腑、经络学说为理论基础，并结合西医的解剖和病理诊断， 而用手法作用于人体体表的特定部位以调节机体生理、病理状况，达到理疗目... '
        )
      ],
      -1
    )
  ),
  ts = ['src'],
  is = { class: 'btn-box' },
  ss = { class: 'storeInfo max-1700' },
  ns = N(() =>
    E(
      'div',
      { class: 'warp-title animate__fadeInUp onMounted-wow' },
      [E('span', null, '门 · 店 · 信 · 息'), E('div', { class: 'line' })],
      -1
    )
  ),
  rs = { class: 'store-list wrapper animate__fadeInUp onMounted-wow' },
  as = ['src'],
  ls = N(() =>
    E(
      'div',
      { class: 'tit' },
      [
        E('p', null, '上海店'),
        E('p', null, '地址：浙江省杭州市拱墅区1号大悦城购物中心 L5-26号 电话：0571-88399189')
      ],
      -1
    )
  ),
  os = { class: 'btn-box' },
  ds = {
    __name: 'index',
    setup(t) {
      he(() => {
        new it({
          boxClass: 'onMounted-wow',
          animateClass: 'animate__animated',
          offset: 100,
          mobile: !0,
          live: !0
        }).init()
      })
      const e = Qe(),
        i = B({
          clickable: !0,
          renderBullet: function (o, l) {
            return '<span class="' + l + '">' + (o + 1) + '</span>'
          }
        }),
        s = B([Li, Oi]),
        r = ['swiper/banner1.jpg', 'swiper/banner2.jpg', 'swiper/banner3.jpg'],
        n = [
          { title: '喜贯', subtitle: '三代传承', desc: '弘扬中华文化为己任' },
          { title: '王红梅', subtitle: '品牌老店', desc: '厚重的中医文化底蕴' },
          { title: '茹德堂', subtitle: '三代传承', desc: '不忘初心，牢记使命' }
        ]
      return (o, l) => (
        q(),
        X('div', null, [
          E('div', _i, [
            be(
              V(Mi),
              { 'initial-slide': 0, navigation: !0, pagination: i.value, modules: s.value },
              {
                default: ye(() => [
                  (q(),
                  X(
                    K,
                    null,
                    Z(r, (a, c) =>
                      be(
                        V(Ii),
                        { key: c },
                        {
                          default: ye(() => [
                            E('div', zi, [E('img', { src: V(J)(a), alt: '' }, null, 8, Bi)])
                          ]),
                          _: 2
                        },
                        1024
                      )
                    ),
                    64
                  ))
                ]),
                _: 1
              },
              8,
              ['pagination', 'modules']
            )
          ]),
          E('div', Ai, [
            E('div', Gi, [
              Di,
              E('div', $i, [
                E('div', Ni, [
                  ki,
                  Vi,
                  E('div', Fi, [
                    E(
                      'div',
                      {
                        class: 'btn',
                        onClick: l[0] || (l[0] = () => V(e).push({ name: 'about' }))
                      },
                      '查看更多>'
                    )
                  ])
                ]),
                E('div', Hi, [E('img', { src: V(J)('katong.png'), alt: '' }, null, 8, Ri)])
              ])
            ]),
            E('div', ji, [
              Wi,
              E('ul', qi, [
                (q(),
                X(
                  K,
                  null,
                  Z(n, (a, c) =>
                    E('li', { key: c }, [
                      E('div', Xi, ne(a.title), 1),
                      Yi,
                      E('div', Ui, [E('p', null, ne(a.subtitle), 1), E('p', null, ne(a.desc), 1)]),
                      Ki
                    ])
                  ),
                  64
                ))
              ])
            ]),
            E('div', Zi, [
              Ji,
              E('ul', Qi, [
                (q(),
                X(
                  K,
                  null,
                  Z(4, (a) =>
                    E('li', { key: a }, [
                      es,
                      E(
                        'img',
                        {
                          style: {
                            width: '180px',
                            height: '180px',
                            overflow: 'hidden',
                            'border-radius': '50%'
                          },
                          src: V(J)('business/address.jpg'),
                          alt: ''
                        },
                        null,
                        8,
                        ts
                      )
                    ])
                  ),
                  64
                ))
              ]),
              E('div', is, [
                E(
                  'span',
                  {
                    class: 'btn',
                    onClick: l[1] || (l[1] = () => V(e).push({ name: 'businessSegments' }))
                  },
                  ' 查看更多> '
                )
              ])
            ]),
            E('div', ss, [
              ns,
              E('ul', rs, [
                (q(),
                X(
                  K,
                  null,
                  Z(3, (a) =>
                    E('li', { key: a }, [
                      E(
                        'img',
                        {
                          style: { width: '100%', height: '242px' },
                          src: V(J)('business/address.jpg'),
                          alt: ''
                        },
                        null,
                        8,
                        as
                      ),
                      ls
                    ])
                  ),
                  64
                ))
              ]),
              E('div', os, [
                E(
                  'span',
                  {
                    class: 'btn',
                    onClick: l[2] || (l[2] = () => V(e).push({ name: 'storeInfo' }))
                  },
                  '查看更多>'
                )
              ])
            ])
          ])
        ])
      )
    }
  },
  cs = Je(ds, [['__scopeId', 'data-v-285e92e1']])
export { cs as default }
