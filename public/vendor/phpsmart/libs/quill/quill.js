!function(t, e) {
    var n = function(t) {
        var e = {};
        function n(r) {
            if (e[r])
                return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 215)
    }({
        2: function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")() || (0,
                eval)("this")
            } catch (t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        },
        210: function(t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == n.call(t)
            }
        },
        211: function(t, e) {
            e.read = function(t, e, n, r, o) {
                var i, l, a = 8 * o - r - 1, s = (1 << a) - 1, u = s >> 1, c = -7, f = n ? o - 1 : 0, h = n ? -1 : 1, p = t[e + f];
                for (f += h,
                i = p & (1 << -c) - 1,
                p >>= -c,
                c += a; c > 0; i = 256 * i + t[e + f],
                f += h,
                c -= 8)
                    ;
                for (l = i & (1 << -c) - 1,
                i >>= -c,
                c += r; c > 0; l = 256 * l + t[e + f],
                f += h,
                c -= 8)
                    ;
                if (0 === i)
                    i = 1 - u;
                else {
                    if (i === s)
                        return l ? NaN : 1 / 0 * (p ? -1 : 1);
                    l += Math.pow(2, r),
                    i -= u
                }
                return (p ? -1 : 1) * l * Math.pow(2, i - r)
            }
            ,
            e.write = function(t, e, n, r, o, i) {
                var l, a, s, u = 8 * i - o - 1, c = (1 << u) - 1, f = c >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : i - 1, d = r ? 1 : -1, y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e),
                isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
                l = c) : (l = Math.floor(Math.log(e) / Math.LN2),
                e * (s = Math.pow(2, -l)) < 1 && (l--,
                s *= 2),
                (e += l + f >= 1 ? h / s : h * Math.pow(2, 1 - f)) * s >= 2 && (l++,
                s /= 2),
                l + f >= c ? (a = 0,
                l = c) : l + f >= 1 ? (a = (e * s - 1) * Math.pow(2, o),
                l += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o),
                l = 0)); o >= 8; t[n + p] = 255 & a,
                p += d,
                a /= 256,
                o -= 8)
                    ;
                for (l = l << o | a,
                u += o; u > 0; t[n + p] = 255 & l,
                p += d,
                l /= 256,
                u -= 8)
                    ;
                t[n + p - d] |= 128 * y
            }
        },
        212: function(t, e, n) {
            "use strict";
            e.byteLength = function(t) {
                var e = u(t)
                  , n = e[0]
                  , r = e[1];
                return 3 * (n + r) / 4 - r
            }
            ,
            e.toByteArray = function(t) {
                for (var e, n = u(t), r = n[0], l = n[1], a = new i(function(t, e, n) {
                    return 3 * (e + n) / 4 - n
                }(0, r, l)), s = 0, c = l > 0 ? r - 4 : r, f = 0; f < c; f += 4)
                    e = o[t.charCodeAt(f)] << 18 | o[t.charCodeAt(f + 1)] << 12 | o[t.charCodeAt(f + 2)] << 6 | o[t.charCodeAt(f + 3)],
                    a[s++] = e >> 16 & 255,
                    a[s++] = e >> 8 & 255,
                    a[s++] = 255 & e;
                return 2 === l && (e = o[t.charCodeAt(f)] << 2 | o[t.charCodeAt(f + 1)] >> 4,
                a[s++] = 255 & e),
                1 === l && (e = o[t.charCodeAt(f)] << 10 | o[t.charCodeAt(f + 1)] << 4 | o[t.charCodeAt(f + 2)] >> 2,
                a[s++] = e >> 8 & 255,
                a[s++] = 255 & e),
                a
            }
            ,
            e.fromByteArray = function(t) {
                for (var e, n = t.length, o = n % 3, i = [], l = 0, a = n - o; l < a; l += 16383)
                    i.push(c(t, l, l + 16383 > a ? a : l + 16383));
                return 1 === o ? (e = t[n - 1],
                i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1],
                i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")),
                i.join("")
            }
            ;
            for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = l.length; a < s; ++a)
                r[a] = l[a],
                o[l.charCodeAt(a)] = a;
            function u(t) {
                var e = t.length;
                if (e % 4 > 0)
                    throw new Error("Invalid string. Length must be a multiple of 4");
                var n = t.indexOf("=");
                -1 === n && (n = e);
                var r = n === e ? 0 : 4 - n % 4;
                return [n, r]
            }
            function c(t, e, n) {
                for (var o, i, l = [], a = e; a < n; a += 3)
                    o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]),
                    l.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                return l.join("")
            }
            o["-".charCodeAt(0)] = 62,
            o["_".charCodeAt(0)] = 63
        },
        213: function(t, e, n) {
            "use strict";
            (function(t) {
                /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
                var r = n(212)
                  , o = n(211)
                  , i = n(210);
                function l() {
                    return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }
                function a(t, e) {
                    if (l() < e)
                        throw new RangeError("Invalid typed array length");
                    return s.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = s.prototype : (null === t && (t = new s(e)),
                    t.length = e),
                    t
                }
                function s(t, e, n) {
                    if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s))
                        return new s(t,e,n);
                    if ("number" == typeof t) {
                        if ("string" == typeof e)
                            throw new Error("If encoding is specified then the first argument must be a string");
                        return f(this, t)
                    }
                    return u(this, t, e, n)
                }
                function u(t, e, n, r) {
                    if ("number" == typeof e)
                        throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                        if (e.byteLength,
                        n < 0 || e.byteLength < n)
                            throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < n + (r || 0))
                            throw new RangeError("'length' is out of bounds");
                        return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e,n) : new Uint8Array(e,n,r),
                        s.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = s.prototype : t = h(t, e),
                        t
                    }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                        if ("string" == typeof n && "" !== n || (n = "utf8"),
                        !s.isEncoding(n))
                            throw new TypeError('"encoding" must be a valid string encoding');
                        var r = 0 | d(e, n)
                          , o = (t = a(t, r)).write(e, n);
                        return o !== r && (t = t.slice(0, o)),
                        t
                    }(t, e, n) : function(t, e) {
                        if (s.isBuffer(e)) {
                            var n = 0 | p(e.length);
                            return 0 === (t = a(t, n)).length ? t : (e.copy(t, 0, 0, n),
                            t)
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
                                return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : h(t, e);
                            if ("Buffer" === e.type && i(e.data))
                                return h(t, e.data)
                        }
                        var r;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }
                function c(t) {
                    if ("number" != typeof t)
                        throw new TypeError('"size" argument must be a number');
                    if (t < 0)
                        throw new RangeError('"size" argument must not be negative')
                }
                function f(t, e) {
                    if (c(e),
                    t = a(t, e < 0 ? 0 : 0 | p(e)),
                    !s.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < e; ++n)
                            t[n] = 0;
                    return t
                }
                function h(t, e) {
                    var n = e.length < 0 ? 0 : 0 | p(e.length);
                    t = a(t, n);
                    for (var r = 0; r < n; r += 1)
                        t[r] = 255 & e[r];
                    return t
                }
                function p(t) {
                    if (t >= l())
                        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l().toString(16) + " bytes");
                    return 0 | t
                }
                function d(t, e) {
                    if (s.isBuffer(t))
                        return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                        return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var n = t.length;
                    if (0 === n)
                        return 0;
                    for (var r = !1; ; )
                        switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return U(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return F(t).length;
                        default:
                            if (r)
                                return U(t).length;
                            e = ("" + e).toLowerCase(),
                            r = !0
                        }
                }
                function y(t, e, n) {
                    var r = t[e];
                    t[e] = t[n],
                    t[n] = r
                }
                function v(t, e, n, r, o) {
                    if (0 === t.length)
                        return -1;
                    if ("string" == typeof n ? (r = n,
                    n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                    n = +n,
                    isNaN(n) && (n = o ? 0 : t.length - 1),
                    n < 0 && (n = t.length + n),
                    n >= t.length) {
                        if (o)
                            return -1;
                        n = t.length - 1
                    } else if (n < 0) {
                        if (!o)
                            return -1;
                        n = 0
                    }
                    if ("string" == typeof e && (e = s.from(e, r)),
                    s.isBuffer(e))
                        return 0 === e.length ? -1 : b(t, e, n, r, o);
                    if ("number" == typeof e)
                        return e &= 255,
                        s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : b(t, [e], n, r, o);
                    throw new TypeError("val must be string, number or Buffer")
                }
                function b(t, e, n, r, o) {
                    var i, l = 1, a = t.length, s = e.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (t.length < 2 || e.length < 2)
                            return -1;
                        l = 2,
                        a /= 2,
                        s /= 2,
                        n /= 2
                    }
                    function u(t, e) {
                        return 1 === l ? t[e] : t.readUInt16BE(e * l)
                    }
                    if (o) {
                        var c = -1;
                        for (i = n; i < a; i++)
                            if (u(t, i) === u(e, -1 === c ? 0 : i - c)) {
                                if (-1 === c && (c = i),
                                i - c + 1 === s)
                                    return c * l
                            } else
                                -1 !== c && (i -= i - c),
                                c = -1
                    } else
                        for (n + s > a && (n = a - s),
                        i = n; i >= 0; i--) {
                            for (var f = !0, h = 0; h < s; h++)
                                if (u(t, i + h) !== u(e, h)) {
                                    f = !1;
                                    break
                                }
                            if (f)
                                return i
                        }
                    return -1
                }
                function g(t, e, n, r) {
                    n = Number(n) || 0;
                    var o = t.length - n;
                    r ? (r = Number(r)) > o && (r = o) : r = o;
                    var i = e.length;
                    if (i % 2 != 0)
                        throw new TypeError("Invalid hex string");
                    r > i / 2 && (r = i / 2);
                    for (var l = 0; l < r; ++l) {
                        var a = parseInt(e.substr(2 * l, 2), 16);
                        if (isNaN(a))
                            return l;
                        t[n + l] = a
                    }
                    return l
                }
                function m(t, e, n, r) {
                    return H(U(e, t.length - n), t, n, r)
                }
                function _(t, e, n, r) {
                    return H(function(t) {
                        for (var e = [], n = 0; n < t.length; ++n)
                            e.push(255 & t.charCodeAt(n));
                        return e
                    }(e), t, n, r)
                }
                function O(t, e, n, r) {
                    return _(t, e, n, r)
                }
                function w(t, e, n, r) {
                    return H(F(e), t, n, r)
                }
                function E(t, e, n, r) {
                    return H(function(t, e) {
                        for (var n, r, o, i = [], l = 0; l < t.length && !((e -= 2) < 0); ++l)
                            n = t.charCodeAt(l),
                            r = n >> 8,
                            o = n % 256,
                            i.push(o),
                            i.push(r);
                        return i
                    }(e, t.length - n), t, n, r)
                }
                function x(t, e, n) {
                    return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
                }
                function k(t, e, n) {
                    n = Math.min(t.length, n);
                    for (var r = [], o = e; o < n; ) {
                        var i, l, a, s, u = t[o], c = null, f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                        if (o + f <= n)
                            switch (f) {
                            case 1:
                                u < 128 && (c = u);
                                break;
                            case 2:
                                128 == (192 & (i = t[o + 1])) && (s = (31 & u) << 6 | 63 & i) > 127 && (c = s);
                                break;
                            case 3:
                                i = t[o + 1],
                                l = t[o + 2],
                                128 == (192 & i) && 128 == (192 & l) && (s = (15 & u) << 12 | (63 & i) << 6 | 63 & l) > 2047 && (s < 55296 || s > 57343) && (c = s);
                                break;
                            case 4:
                                i = t[o + 1],
                                l = t[o + 2],
                                a = t[o + 3],
                                128 == (192 & i) && 128 == (192 & l) && 128 == (192 & a) && (s = (15 & u) << 18 | (63 & i) << 12 | (63 & l) << 6 | 63 & a) > 65535 && s < 1114112 && (c = s)
                            }
                        null === c ? (c = 65533,
                        f = 1) : c > 65535 && (c -= 65536,
                        r.push(c >>> 10 & 1023 | 55296),
                        c = 56320 | 1023 & c),
                        r.push(c),
                        o += f
                    }
                    return function(t) {
                        var e = t.length;
                        if (e <= A)
                            return String.fromCharCode.apply(String, t);
                        for (var n = "", r = 0; r < e; )
                            n += String.fromCharCode.apply(String, t.slice(r, r += A));
                        return n
                    }(r)
                }
                e.Buffer = s,
                e.SlowBuffer = function(t) {
                    return +t != t && (t = 0),
                    s.alloc(+t)
                }
                ,
                e.INSPECT_MAX_BYTES = 50,
                s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        },
                        42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }(),
                e.kMaxLength = l(),
                s.poolSize = 8192,
                s._augment = function(t) {
                    return t.__proto__ = s.prototype,
                    t
                }
                ,
                s.from = function(t, e, n) {
                    return u(null, t, e, n)
                }
                ,
                s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype,
                s.__proto__ = Uint8Array,
                "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                    value: null,
                    configurable: !0
                })),
                s.alloc = function(t, e, n) {
                    return function(t, e, n, r) {
                        return c(e),
                        e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e)
                    }(null, t, e, n)
                }
                ,
                s.allocUnsafe = function(t) {
                    return f(null, t)
                }
                ,
                s.allocUnsafeSlow = function(t) {
                    return f(null, t)
                }
                ,
                s.isBuffer = function(t) {
                    return !(null == t || !t._isBuffer)
                }
                ,
                s.compare = function(t, e) {
                    if (!s.isBuffer(t) || !s.isBuffer(e))
                        throw new TypeError("Arguments must be Buffers");
                    if (t === e)
                        return 0;
                    for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
                        if (t[o] !== e[o]) {
                            n = t[o],
                            r = e[o];
                            break
                        }
                    return n < r ? -1 : r < n ? 1 : 0
                }
                ,
                s.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                    }
                }
                ,
                s.concat = function(t, e) {
                    if (!i(t))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length)
                        return s.alloc(0);
                    var n;
                    if (void 0 === e)
                        for (e = 0,
                        n = 0; n < t.length; ++n)
                            e += t[n].length;
                    var r = s.allocUnsafe(e)
                      , o = 0;
                    for (n = 0; n < t.length; ++n) {
                        var l = t[n];
                        if (!s.isBuffer(l))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        l.copy(r, o),
                        o += l.length
                    }
                    return r
                }
                ,
                s.byteLength = d,
                s.prototype._isBuffer = !0,
                s.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0)
                        throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2)
                        y(this, e, e + 1);
                    return this
                }
                ,
                s.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0)
                        throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4)
                        y(this, e, e + 3),
                        y(this, e + 1, e + 2);
                    return this
                }
                ,
                s.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0)
                        throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8)
                        y(this, e, e + 7),
                        y(this, e + 1, e + 6),
                        y(this, e + 2, e + 5),
                        y(this, e + 3, e + 4);
                    return this
                }
                ,
                s.prototype.toString = function() {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : function(t, e, n) {
                        var r = !1;
                        if ((void 0 === e || e < 0) && (e = 0),
                        e > this.length)
                            return "";
                        if ((void 0 === n || n > this.length) && (n = this.length),
                        n <= 0)
                            return "";
                        if ((n >>>= 0) <= (e >>>= 0))
                            return "";
                        for (t || (t = "utf8"); ; )
                            switch (t) {
                            case "hex":
                                return T(this, e, n);
                            case "utf8":
                            case "utf-8":
                                return k(this, e, n);
                            case "ascii":
                                return N(this, e, n);
                            case "latin1":
                            case "binary":
                                return j(this, e, n);
                            case "base64":
                                return x(this, e, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return P(this, e, n);
                            default:
                                if (r)
                                    throw new TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(),
                                r = !0
                            }
                    }
                    .apply(this, arguments)
                }
                ,
                s.prototype.equals = function(t) {
                    if (!s.isBuffer(t))
                        throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === s.compare(this, t)
                }
                ,
                s.prototype.inspect = function() {
                    var t = ""
                      , n = e.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
                    this.length > n && (t += " ... ")),
                    "<Buffer " + t + ">"
                }
                ,
                s.prototype.compare = function(t, e, n, r, o) {
                    if (!s.isBuffer(t))
                        throw new TypeError("Argument must be a Buffer");
                    if (void 0 === e && (e = 0),
                    void 0 === n && (n = t ? t.length : 0),
                    void 0 === r && (r = 0),
                    void 0 === o && (o = this.length),
                    e < 0 || n > t.length || r < 0 || o > this.length)
                        throw new RangeError("out of range index");
                    if (r >= o && e >= n)
                        return 0;
                    if (r >= o)
                        return -1;
                    if (e >= n)
                        return 1;
                    if (e >>>= 0,
                    n >>>= 0,
                    r >>>= 0,
                    o >>>= 0,
                    this === t)
                        return 0;
                    for (var i = o - r, l = n - e, a = Math.min(i, l), u = this.slice(r, o), c = t.slice(e, n), f = 0; f < a; ++f)
                        if (u[f] !== c[f]) {
                            i = u[f],
                            l = c[f];
                            break
                        }
                    return i < l ? -1 : l < i ? 1 : 0
                }
                ,
                s.prototype.includes = function(t, e, n) {
                    return -1 !== this.indexOf(t, e, n)
                }
                ,
                s.prototype.indexOf = function(t, e, n) {
                    return v(this, t, e, n, !0)
                }
                ,
                s.prototype.lastIndexOf = function(t, e, n) {
                    return v(this, t, e, n, !1)
                }
                ,
                s.prototype.write = function(t, e, n, r) {
                    if (void 0 === e)
                        r = "utf8",
                        n = this.length,
                        e = 0;
                    else if (void 0 === n && "string" == typeof e)
                        r = e,
                        n = this.length,
                        e = 0;
                    else {
                        if (!isFinite(e))
                            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0,
                        isFinite(n) ? (n |= 0,
                        void 0 === r && (r = "utf8")) : (r = n,
                        n = void 0)
                    }
                    var o = this.length - e;
                    if ((void 0 === n || n > o) && (n = o),
                    t.length > 0 && (n < 0 || e < 0) || e > this.length)
                        throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var i = !1; ; )
                        switch (r) {
                        case "hex":
                            return g(this, t, e, n);
                        case "utf8":
                        case "utf-8":
                            return m(this, t, e, n);
                        case "ascii":
                            return _(this, t, e, n);
                        case "latin1":
                        case "binary":
                            return O(this, t, e, n);
                        case "base64":
                            return w(this, t, e, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return E(this, t, e, n);
                        default:
                            if (i)
                                throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(),
                            i = !0
                        }
                }
                ,
                s.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }
                ;
                var A = 4096;
                function N(t, e, n) {
                    var r = "";
                    n = Math.min(t.length, n);
                    for (var o = e; o < n; ++o)
                        r += String.fromCharCode(127 & t[o]);
                    return r
                }
                function j(t, e, n) {
                    var r = "";
                    n = Math.min(t.length, n);
                    for (var o = e; o < n; ++o)
                        r += String.fromCharCode(t[o]);
                    return r
                }
                function T(t, e, n) {
                    var r = t.length;
                    (!e || e < 0) && (e = 0),
                    (!n || n < 0 || n > r) && (n = r);
                    for (var o = "", i = e; i < n; ++i)
                        o += D(t[i]);
                    return o
                }
                function P(t, e, n) {
                    for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2)
                        o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                    return o
                }
                function S(t, e, n) {
                    if (t % 1 != 0 || t < 0)
                        throw new RangeError("offset is not uint");
                    if (t + e > n)
                        throw new RangeError("Trying to access beyond buffer length")
                }
                function q(t, e, n, r, o, i) {
                    if (!s.isBuffer(t))
                        throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > o || e < i)
                        throw new RangeError('"value" argument is out of bounds');
                    if (n + r > t.length)
                        throw new RangeError("Index out of range")
                }
                function C(t, e, n, r) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o)
                        t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
                }
                function L(t, e, n, r) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o)
                        t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255
                }
                function R(t, e, n, r, o, i) {
                    if (n + r > t.length)
                        throw new RangeError("Index out of range");
                    if (n < 0)
                        throw new RangeError("Index out of range")
                }
                function M(t, e, n, r, i) {
                    return i || R(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38),
                    o.write(t, e, n, r, 23, 4),
                    n + 4
                }
                function I(t, e, n, r, i) {
                    return i || R(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308),
                    o.write(t, e, n, r, 52, 8),
                    n + 8
                }
                s.prototype.slice = function(t, e) {
                    var n, r = this.length;
                    if (t = ~~t,
                    e = void 0 === e ? r : ~~e,
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    e < t && (e = t),
                    s.TYPED_ARRAY_SUPPORT)
                        (n = this.subarray(t, e)).__proto__ = s.prototype;
                    else {
                        var o = e - t;
                        n = new s(o,void 0);
                        for (var i = 0; i < o; ++i)
                            n[i] = this[i + t]
                    }
                    return n
                }
                ,
                s.prototype.readUIntLE = function(t, e, n) {
                    t |= 0,
                    e |= 0,
                    n || S(t, e, this.length);
                    for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
                        r += this[t + i] * o;
                    return r
                }
                ,
                s.prototype.readUIntBE = function(t, e, n) {
                    t |= 0,
                    e |= 0,
                    n || S(t, e, this.length);
                    for (var r = this[t + --e], o = 1; e > 0 && (o *= 256); )
                        r += this[t + --e] * o;
                    return r
                }
                ,
                s.prototype.readUInt8 = function(t, e) {
                    return e || S(t, 1, this.length),
                    this[t]
                }
                ,
                s.prototype.readUInt16LE = function(t, e) {
                    return e || S(t, 2, this.length),
                    this[t] | this[t + 1] << 8
                }
                ,
                s.prototype.readUInt16BE = function(t, e) {
                    return e || S(t, 2, this.length),
                    this[t] << 8 | this[t + 1]
                }
                ,
                s.prototype.readUInt32LE = function(t, e) {
                    return e || S(t, 4, this.length),
                    (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }
                ,
                s.prototype.readUInt32BE = function(t, e) {
                    return e || S(t, 4, this.length),
                    16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }
                ,
                s.prototype.readIntLE = function(t, e, n) {
                    t |= 0,
                    e |= 0,
                    n || S(t, e, this.length);
                    for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
                        r += this[t + i] * o;
                    return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)),
                    r
                }
                ,
                s.prototype.readIntBE = function(t, e, n) {
                    t |= 0,
                    e |= 0,
                    n || S(t, e, this.length);
                    for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256); )
                        i += this[t + --r] * o;
                    return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)),
                    i
                }
                ,
                s.prototype.readInt8 = function(t, e) {
                    return e || S(t, 1, this.length),
                    128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }
                ,
                s.prototype.readInt16LE = function(t, e) {
                    e || S(t, 2, this.length);
                    var n = this[t] | this[t + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }
                ,
                s.prototype.readInt16BE = function(t, e) {
                    e || S(t, 2, this.length);
                    var n = this[t + 1] | this[t] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }
                ,
                s.prototype.readInt32LE = function(t, e) {
                    return e || S(t, 4, this.length),
                    this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }
                ,
                s.prototype.readInt32BE = function(t, e) {
                    return e || S(t, 4, this.length),
                    this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }
                ,
                s.prototype.readFloatLE = function(t, e) {
                    return e || S(t, 4, this.length),
                    o.read(this, t, !0, 23, 4)
                }
                ,
                s.prototype.readFloatBE = function(t, e) {
                    return e || S(t, 4, this.length),
                    o.read(this, t, !1, 23, 4)
                }
                ,
                s.prototype.readDoubleLE = function(t, e) {
                    return e || S(t, 8, this.length),
                    o.read(this, t, !0, 52, 8)
                }
                ,
                s.prototype.readDoubleBE = function(t, e) {
                    return e || S(t, 8, this.length),
                    o.read(this, t, !1, 52, 8)
                }
                ,
                s.prototype.writeUIntLE = function(t, e, n, r) {
                    if (t = +t,
                    e |= 0,
                    n |= 0,
                    !r) {
                        var o = Math.pow(2, 8 * n) - 1;
                        q(this, t, e, n, o, 0)
                    }
                    var i = 1
                      , l = 0;
                    for (this[e] = 255 & t; ++l < n && (i *= 256); )
                        this[e + l] = t / i & 255;
                    return e + n
                }
                ,
                s.prototype.writeUIntBE = function(t, e, n, r) {
                    if (t = +t,
                    e |= 0,
                    n |= 0,
                    !r) {
                        var o = Math.pow(2, 8 * n) - 1;
                        q(this, t, e, n, o, 0)
                    }
                    var i = n - 1
                      , l = 1;
                    for (this[e + i] = 255 & t; --i >= 0 && (l *= 256); )
                        this[e + i] = t / l & 255;
                    return e + n
                }
                ,
                s.prototype.writeUInt8 = function(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || q(this, t, e, 1, 255, 0),
                    s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                    this[e] = 255 & t,
                    e + 1
                }
                ,
                s.prototype.writeUInt16LE = function(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || q(this, t, e, 2, 65535, 0),
                    s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                    this[e + 1] = t >>> 8) : C(this, t, e, !0),
                    e + 2
                }
                ,
                s.prototype.writeUInt16BE = function(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || q(this, t, e, 2, 65535, 0),
                    s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                    this[e + 1] = 255 & t) : C(this, t, e, !1),
                    e + 2
                }
                ,
                s.prototype.writeUInt32LE = function(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || q(this, t, e, 4, 4294967295, 0),
                    s.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                    this[e + 2] = t >>> 16,
                    this[e + 1] = t >>> 8,
                    this[e] = 255 & t) : L(this, t, e, !0),
                    e + 4
                }
                ,
                s.prototype.writeUInt32BE = function(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || q(this, t, e, 4, 4294967295, 0),
                    s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                    this[e + 1] = t >>> 16,
                    this[e + 2] = t >>> 8,
                    this[e + 3] = 255 & t) : L(this, t, e, !1),
                    e + 4
                }
                ,
                s.prototype.writeIntLE = function(t, e, n, r) {
                    if (t = +t,
                    e |= 0,
                    !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        q(this, t, e, n, o - 1, -o)
                    }
                    var i = 0
                      , l = 1
                      , a = 0;
                    for (this[e] = 255 & t; ++i < n && (l *= 256); )
                        t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1),
                        this[e + i] = (t / l >> 0) - a & 255;
                    return e + n
                }
                ,
                s.prototype.writeIntBE = function(t, e, n, r) {
                    if (t = +t,
                    e |= 0,
                    !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        q(this, t, e, n, o - 1, -o)
                    }
                    var i = n - 1
                      , l = 1
                      , a = 0;
                    for (this[e + i] = 255 & t; --i >= 0 && (l *= 256); )
                        t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
                        this[e + i] = (t / l >> 0) - a & 255;
                    return e + n
                }
                ,
                s.prototype.writeInt8 = function(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || q(this, t, e, 1, 127, -128),
                    s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                    t < 0 && (t = 255 + t + 1),
                    this[e] = 255 & t,
                    e + 1
                }
                ,
                s.prototype.writeInt16LE = function(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || q(this, t, e, 2, 32767, -32768),
                    s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                    this[e + 1] = t >>> 8) : C(this, t, e, !0),
                    e + 2
                }
                ,
                s.prototype.writeInt16BE = function(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || q(this, t, e, 2, 32767, -32768),
                    s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                    this[e + 1] = 255 & t) : C(this, t, e, !1),
                    e + 2
                }
                ,
                s.prototype.writeInt32LE = function(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || q(this, t, e, 4, 2147483647, -2147483648),
                    s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                    this[e + 1] = t >>> 8,
                    this[e + 2] = t >>> 16,
                    this[e + 3] = t >>> 24) : L(this, t, e, !0),
                    e + 4
                }
                ,
                s.prototype.writeInt32BE = function(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || q(this, t, e, 4, 2147483647, -2147483648),
                    t < 0 && (t = 4294967295 + t + 1),
                    s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                    this[e + 1] = t >>> 16,
                    this[e + 2] = t >>> 8,
                    this[e + 3] = 255 & t) : L(this, t, e, !1),
                    e + 4
                }
                ,
                s.prototype.writeFloatLE = function(t, e, n) {
                    return M(this, t, e, !0, n)
                }
                ,
                s.prototype.writeFloatBE = function(t, e, n) {
                    return M(this, t, e, !1, n)
                }
                ,
                s.prototype.writeDoubleLE = function(t, e, n) {
                    return I(this, t, e, !0, n)
                }
                ,
                s.prototype.writeDoubleBE = function(t, e, n) {
                    return I(this, t, e, !1, n)
                }
                ,
                s.prototype.copy = function(t, e, n, r) {
                    if (n || (n = 0),
                    r || 0 === r || (r = this.length),
                    e >= t.length && (e = t.length),
                    e || (e = 0),
                    r > 0 && r < n && (r = n),
                    r === n)
                        return 0;
                    if (0 === t.length || 0 === this.length)
                        return 0;
                    if (e < 0)
                        throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length)
                        throw new RangeError("sourceStart out of bounds");
                    if (r < 0)
                        throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length),
                    t.length - e < r - n && (r = t.length - e + n);
                    var o, i = r - n;
                    if (this === t && n < e && e < r)
                        for (o = i - 1; o >= 0; --o)
                            t[o + e] = this[o + n];
                    else if (i < 1e3 || !s.TYPED_ARRAY_SUPPORT)
                        for (o = 0; o < i; ++o)
                            t[o + e] = this[o + n];
                    else
                        Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
                    return i
                }
                ,
                s.prototype.fill = function(t, e, n, r) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (r = e,
                        e = 0,
                        n = this.length) : "string" == typeof n && (r = n,
                        n = this.length),
                        1 === t.length) {
                            var o = t.charCodeAt(0);
                            o < 256 && (t = o)
                        }
                        if (void 0 !== r && "string" != typeof r)
                            throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !s.isEncoding(r))
                            throw new TypeError("Unknown encoding: " + r)
                    } else
                        "number" == typeof t && (t &= 255);
                    if (e < 0 || this.length < e || this.length < n)
                        throw new RangeError("Out of range index");
                    if (n <= e)
                        return this;
                    var i;
                    if (e >>>= 0,
                    n = void 0 === n ? this.length : n >>> 0,
                    t || (t = 0),
                    "number" == typeof t)
                        for (i = e; i < n; ++i)
                            this[i] = t;
                    else {
                        var l = s.isBuffer(t) ? t : U(new s(t,r).toString())
                          , a = l.length;
                        for (i = 0; i < n - e; ++i)
                            this[i + e] = l[i % a]
                    }
                    return this
                }
                ;
                var B = /[^+\/0-9A-Za-z-_]/g;
                function D(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }
                function U(t, e) {
                    var n;
                    e = e || 1 / 0;
                    for (var r = t.length, o = null, i = [], l = 0; l < r; ++l) {
                        if ((n = t.charCodeAt(l)) > 55295 && n < 57344) {
                            if (!o) {
                                if (n > 56319) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                if (l + 1 === r) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                o = n;
                                continue
                            }
                            if (n < 56320) {
                                (e -= 3) > -1 && i.push(239, 191, 189),
                                o = n;
                                continue
                            }
                            n = 65536 + (o - 55296 << 10 | n - 56320)
                        } else
                            o && (e -= 3) > -1 && i.push(239, 191, 189);
                        if (o = null,
                        n < 128) {
                            if ((e -= 1) < 0)
                                break;
                            i.push(n)
                        } else if (n < 2048) {
                            if ((e -= 2) < 0)
                                break;
                            i.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((e -= 3) < 0)
                                break;
                            i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112))
                                throw new Error("Invalid code point");
                            if ((e -= 4) < 0)
                                break;
                            i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return i
                }
                function F(t) {
                    return r.toByteArray(function(t) {
                        if ((t = function(t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        }(t).replace(B, "")).length < 2)
                            return "";
                        for (; t.length % 4 != 0; )
                            t += "=";
                        return t
                    }(t))
                }
                function H(t, e, n, r) {
                    for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o)
                        e[o + n] = t[o];
                    return o
                }
            }
            ).call(this, n(2))
        },
        214: function(t, e, n) {
            (function(e) {
                /*!
 * Quill Editor v1.3.6
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
                var n;
                "undefined" != typeof self && self,
                n = function() {
                    return function(t) {
                        var e = {};
                        function n(r) {
                            if (e[r])
                                return e[r].exports;
                            var o = e[r] = {
                                i: r,
                                l: !1,
                                exports: {}
                            };
                            return t[r].call(o.exports, o, o.exports, n),
                            o.l = !0,
                            o.exports
                        }
                        return n.m = t,
                        n.c = e,
                        n.d = function(t, e, r) {
                            n.o(t, e) || Object.defineProperty(t, e, {
                                configurable: !1,
                                enumerable: !0,
                                get: r
                            })
                        }
                        ,
                        n.n = function(t) {
                            var e = t && t.__esModule ? function() {
                                return t.default
                            }
                            : function() {
                                return t
                            }
                            ;
                            return n.d(e, "a", e),
                            e
                        }
                        ,
                        n.o = function(t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }
                        ,
                        n.p = "",
                        n(n.s = 109)
                    }([function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = n(17)
                          , o = n(18)
                          , i = n(19)
                          , l = n(45)
                          , a = n(46)
                          , s = n(47)
                          , u = n(48)
                          , c = n(49)
                          , f = n(12)
                          , h = n(32)
                          , p = n(33)
                          , d = n(31)
                          , y = n(1)
                          , v = {
                            Scope: y.Scope,
                            create: y.create,
                            find: y.find,
                            query: y.query,
                            register: y.register,
                            Container: r.default,
                            Format: o.default,
                            Leaf: i.default,
                            Embed: u.default,
                            Scroll: l.default,
                            Block: s.default,
                            Inline: a.default,
                            Text: c.default,
                            Attributor: {
                                Attribute: f.default,
                                Class: h.default,
                                Style: p.default,
                                Store: d.default
                            }
                        };
                        e.default = v
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = function(t) {
                            function e(e) {
                                var n = this;
                                return e = "[Parchment] " + e,
                                (n = t.call(this, e) || this).message = e,
                                n.name = n.constructor.name,
                                n
                            }
                            return o(e, t),
                            e
                        }(Error);
                        e.ParchmentError = i;
                        var l, a = {}, s = {}, u = {}, c = {};
                        function f(t, e) {
                            var n;
                            if (void 0 === e && (e = l.ANY),
                            "string" == typeof t)
                                n = c[t] || a[t];
                            else if (t instanceof Text || t.nodeType === Node.TEXT_NODE)
                                n = c.text;
                            else if ("number" == typeof t)
                                t & l.LEVEL & l.BLOCK ? n = c.block : t & l.LEVEL & l.INLINE && (n = c.inline);
                            else if (t instanceof HTMLElement) {
                                var r = (t.getAttribute("class") || "").split(/\s+/);
                                for (var o in r)
                                    if (n = s[r[o]])
                                        break;
                                n = n || u[t.tagName]
                            }
                            return null == n ? null : e & l.LEVEL & n.scope && e & l.TYPE & n.scope ? n : null
                        }
                        e.DATA_KEY = "__blot",
                        function(t) {
                            t[t.TYPE = 3] = "TYPE",
                            t[t.LEVEL = 12] = "LEVEL",
                            t[t.ATTRIBUTE = 13] = "ATTRIBUTE",
                            t[t.BLOT = 14] = "BLOT",
                            t[t.INLINE = 7] = "INLINE",
                            t[t.BLOCK = 11] = "BLOCK",
                            t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT",
                            t[t.INLINE_BLOT = 6] = "INLINE_BLOT",
                            t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE",
                            t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE",
                            t[t.ANY = 15] = "ANY"
                        }(l = e.Scope || (e.Scope = {})),
                        e.create = function(t, e) {
                            var n = f(t);
                            if (null == n)
                                throw new i("Unable to create " + t + " blot");
                            var r = n
                              , o = t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : r.create(e);
                            return new r(o,e)
                        }
                        ,
                        e.find = function t(n, r) {
                            return void 0 === r && (r = !1),
                            null == n ? null : null != n[e.DATA_KEY] ? n[e.DATA_KEY].blot : r ? t(n.parentNode, r) : null
                        }
                        ,
                        e.query = f,
                        e.register = function t() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            if (e.length > 1)
                                return e.map(function(e) {
                                    return t(e)
                                });
                            var r = e[0];
                            if ("string" != typeof r.blotName && "string" != typeof r.attrName)
                                throw new i("Invalid definition");
                            if ("abstract" === r.blotName)
                                throw new i("Cannot register abstract class");
                            if (c[r.blotName || r.attrName] = r,
                            "string" == typeof r.keyName)
                                a[r.keyName] = r;
                            else if (null != r.className && (s[r.className] = r),
                            null != r.tagName) {
                                Array.isArray(r.tagName) ? r.tagName = r.tagName.map(function(t) {
                                    return t.toUpperCase()
                                }) : r.tagName = r.tagName.toUpperCase();
                                var o = Array.isArray(r.tagName) ? r.tagName : [r.tagName];
                                o.forEach(function(t) {
                                    null != u[t] && null != r.className || (u[t] = r)
                                })
                            }
                            return r
                        }
                    }
                    , function(t, e, n) {
                        var r = n(51)
                          , o = n(11)
                          , i = n(3)
                          , l = n(20)
                          , a = String.fromCharCode(0)
                          , s = function(t) {
                            Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = []
                        };
                        s.prototype.insert = function(t, e) {
                            var n = {};
                            return 0 === t.length ? this : (n.insert = t,
                            null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e),
                            this.push(n))
                        }
                        ,
                        s.prototype.delete = function(t) {
                            return t <= 0 ? this : this.push({
                                delete: t
                            })
                        }
                        ,
                        s.prototype.retain = function(t, e) {
                            if (t <= 0)
                                return this;
                            var n = {
                                retain: t
                            };
                            return null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e),
                            this.push(n)
                        }
                        ,
                        s.prototype.push = function(t) {
                            var e = this.ops.length
                              , n = this.ops[e - 1];
                            if (t = i(!0, {}, t),
                            "object" == typeof n) {
                                if ("number" == typeof t.delete && "number" == typeof n.delete)
                                    return this.ops[e - 1] = {
                                        delete: n.delete + t.delete
                                    },
                                    this;
                                if ("number" == typeof n.delete && null != t.insert && (e -= 1,
                                "object" != typeof (n = this.ops[e - 1])))
                                    return this.ops.unshift(t),
                                    this;
                                if (o(t.attributes, n.attributes)) {
                                    if ("string" == typeof t.insert && "string" == typeof n.insert)
                                        return this.ops[e - 1] = {
                                            insert: n.insert + t.insert
                                        },
                                        "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes),
                                        this;
                                    if ("number" == typeof t.retain && "number" == typeof n.retain)
                                        return this.ops[e - 1] = {
                                            retain: n.retain + t.retain
                                        },
                                        "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes),
                                        this
                                }
                            }
                            return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t),
                            this
                        }
                        ,
                        s.prototype.chop = function() {
                            var t = this.ops[this.ops.length - 1];
                            return t && t.retain && !t.attributes && this.ops.pop(),
                            this
                        }
                        ,
                        s.prototype.filter = function(t) {
                            return this.ops.filter(t)
                        }
                        ,
                        s.prototype.forEach = function(t) {
                            this.ops.forEach(t)
                        }
                        ,
                        s.prototype.map = function(t) {
                            return this.ops.map(t)
                        }
                        ,
                        s.prototype.partition = function(t) {
                            var e = []
                              , n = [];
                            return this.forEach(function(r) {
                                var o = t(r) ? e : n;
                                o.push(r)
                            }),
                            [e, n]
                        }
                        ,
                        s.prototype.reduce = function(t, e) {
                            return this.ops.reduce(t, e)
                        }
                        ,
                        s.prototype.changeLength = function() {
                            return this.reduce(function(t, e) {
                                return e.insert ? t + l.length(e) : e.delete ? t - e.delete : t
                            }, 0)
                        }
                        ,
                        s.prototype.length = function() {
                            return this.reduce(function(t, e) {
                                return t + l.length(e)
                            }, 0)
                        }
                        ,
                        s.prototype.slice = function(t, e) {
                            t = t || 0,
                            "number" != typeof e && (e = 1 / 0);
                            for (var n = [], r = l.iterator(this.ops), o = 0; o < e && r.hasNext(); ) {
                                var i;
                                o < t ? i = r.next(t - o) : (i = r.next(e - o),
                                n.push(i)),
                                o += l.length(i)
                            }
                            return new s(n)
                        }
                        ,
                        s.prototype.compose = function(t) {
                            for (var e = l.iterator(this.ops), n = l.iterator(t.ops), r = new s; e.hasNext() || n.hasNext(); )
                                if ("insert" === n.peekType())
                                    r.push(n.next());
                                else if ("delete" === e.peekType())
                                    r.push(e.next());
                                else {
                                    var o = Math.min(e.peekLength(), n.peekLength())
                                      , i = e.next(o)
                                      , a = n.next(o);
                                    if ("number" == typeof a.retain) {
                                        var u = {};
                                        "number" == typeof i.retain ? u.retain = o : u.insert = i.insert;
                                        var c = l.attributes.compose(i.attributes, a.attributes, "number" == typeof i.retain);
                                        c && (u.attributes = c),
                                        r.push(u)
                                    } else
                                        "number" == typeof a.delete && "number" == typeof i.retain && r.push(a)
                                }
                            return r.chop()
                        }
                        ,
                        s.prototype.concat = function(t) {
                            var e = new s(this.ops.slice());
                            return t.ops.length > 0 && (e.push(t.ops[0]),
                            e.ops = e.ops.concat(t.ops.slice(1))),
                            e
                        }
                        ,
                        s.prototype.diff = function(t, e) {
                            if (this.ops === t.ops)
                                return new s;
                            var n = [this, t].map(function(e) {
                                return e.map(function(n) {
                                    if (null != n.insert)
                                        return "string" == typeof n.insert ? n.insert : a;
                                    var r = e === t ? "on" : "with";
                                    throw new Error("diff() called " + r + " non-document")
                                }).join("")
                            })
                              , i = new s
                              , u = r(n[0], n[1], e)
                              , c = l.iterator(this.ops)
                              , f = l.iterator(t.ops);
                            return u.forEach(function(t) {
                                for (var e = t[1].length; e > 0; ) {
                                    var n = 0;
                                    switch (t[0]) {
                                    case r.INSERT:
                                        n = Math.min(f.peekLength(), e),
                                        i.push(f.next(n));
                                        break;
                                    case r.DELETE:
                                        n = Math.min(e, c.peekLength()),
                                        c.next(n),
                                        i.delete(n);
                                        break;
                                    case r.EQUAL:
                                        n = Math.min(c.peekLength(), f.peekLength(), e);
                                        var a = c.next(n)
                                          , s = f.next(n);
                                        o(a.insert, s.insert) ? i.retain(n, l.attributes.diff(a.attributes, s.attributes)) : i.push(s).delete(n)
                                    }
                                    e -= n
                                }
                            }),
                            i.chop()
                        }
                        ,
                        s.prototype.eachLine = function(t, e) {
                            e = e || "\n";
                            for (var n = l.iterator(this.ops), r = new s, o = 0; n.hasNext(); ) {
                                if ("insert" !== n.peekType())
                                    return;
                                var i = n.peek()
                                  , a = l.length(i) - n.peekLength()
                                  , u = "string" == typeof i.insert ? i.insert.indexOf(e, a) - a : -1;
                                if (u < 0)
                                    r.push(n.next());
                                else if (u > 0)
                                    r.push(n.next(u));
                                else {
                                    if (!1 === t(r, n.next(1).attributes || {}, o))
                                        return;
                                    o += 1,
                                    r = new s
                                }
                            }
                            r.length() > 0 && t(r, {}, o)
                        }
                        ,
                        s.prototype.transform = function(t, e) {
                            if (e = !!e,
                            "number" == typeof t)
                                return this.transformPosition(t, e);
                            for (var n = l.iterator(this.ops), r = l.iterator(t.ops), o = new s; n.hasNext() || r.hasNext(); )
                                if ("insert" !== n.peekType() || !e && "insert" === r.peekType())
                                    if ("insert" === r.peekType())
                                        o.push(r.next());
                                    else {
                                        var i = Math.min(n.peekLength(), r.peekLength())
                                          , a = n.next(i)
                                          , u = r.next(i);
                                        if (a.delete)
                                            continue;
                                        u.delete ? o.push(u) : o.retain(i, l.attributes.transform(a.attributes, u.attributes, e))
                                    }
                                else
                                    o.retain(l.length(n.next()));
                            return o.chop()
                        }
                        ,
                        s.prototype.transformPosition = function(t, e) {
                            e = !!e;
                            for (var n = l.iterator(this.ops), r = 0; n.hasNext() && r <= t; ) {
                                var o = n.peekLength()
                                  , i = n.peekType();
                                n.next(),
                                "delete" !== i ? ("insert" === i && (r < t || !e) && (t += o),
                                r += o) : t -= Math.min(o, t - r)
                            }
                            return t
                        }
                        ,
                        t.exports = s
                    }
                    , function(t, e) {
                        "use strict";
                        var n = Object.prototype.hasOwnProperty
                          , r = Object.prototype.toString
                          , o = function(t) {
                            return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t)
                        }
                          , i = function(t) {
                            if (!t || "[object Object]" !== r.call(t))
                                return !1;
                            var e, o = n.call(t, "constructor"), i = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
                            if (t.constructor && !o && !i)
                                return !1;
                            for (e in t)
                                ;
                            return void 0 === e || n.call(t, e)
                        };
                        t.exports = function t() {
                            var e, n, r, l, a, s, u = arguments[0], c = 1, f = arguments.length, h = !1;
                            for ("boolean" == typeof u && (h = u,
                            u = arguments[1] || {},
                            c = 2),
                            (null == u || "object" != typeof u && "function" != typeof u) && (u = {}); c < f; ++c)
                                if (null != (e = arguments[c]))
                                    for (n in e)
                                        r = u[n],
                                        l = e[n],
                                        u !== l && (h && l && (i(l) || (a = o(l))) ? (a ? (a = !1,
                                        s = r && o(r) ? r : []) : s = r && i(r) ? r : {},
                                        u[n] = t(h, s, l)) : void 0 !== l && (u[n] = l));
                            return u
                        }
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.default = e.BlockEmbed = e.bubbleFormats = void 0;
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }
                          , i = n(3)
                          , l = b(i)
                          , a = n(2)
                          , s = b(a)
                          , u = n(0)
                          , c = b(u)
                          , f = n(16)
                          , h = b(f)
                          , p = n(6)
                          , d = b(p)
                          , y = n(7)
                          , v = b(y);
                        function b(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function g(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function m(t, e) {
                            if (!t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }
                        function _(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }
                        var O = function(t) {
                            function e() {
                                return g(this, e),
                                m(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return _(e, t),
                            r(e, [{
                                key: "attach",
                                value: function() {
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attach", this).call(this),
                                    this.attributes = new c.default.Attributor.Store(this.domNode)
                                }
                            }, {
                                key: "delta",
                                value: function() {
                                    return (new s.default).insert(this.value(), (0,
                                    l.default)(this.formats(), this.attributes.values()))
                                }
                            }, {
                                key: "format",
                                value: function(t, e) {
                                    var n = c.default.query(t, c.default.Scope.BLOCK_ATTRIBUTE);
                                    null != n && this.attributes.attribute(n, e)
                                }
                            }, {
                                key: "formatAt",
                                value: function(t, e, n, r) {
                                    this.format(n, r)
                                }
                            }, {
                                key: "insertAt",
                                value: function(t, n, r) {
                                    if ("string" == typeof n && n.endsWith("\n")) {
                                        var i = c.default.create(w.blotName);
                                        this.parent.insertBefore(i, 0 === t ? this : this.next),
                                        i.insertAt(0, n.slice(0, -1))
                                    } else
                                        o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r)
                                }
                            }]),
                            e
                        }(c.default.Embed);
                        O.scope = c.default.Scope.BLOCK_BLOT;
                        var w = function(t) {
                            function e(t) {
                                g(this, e);
                                var n = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return n.cache = {},
                                n
                            }
                            return _(e, t),
                            r(e, [{
                                key: "delta",
                                value: function() {
                                    return null == this.cache.delta && (this.cache.delta = this.descendants(c.default.Leaf).reduce(function(t, e) {
                                        return 0 === e.length() ? t : t.insert(e.value(), E(e))
                                    }, new s.default).insert("\n", E(this))),
                                    this.cache.delta
                                }
                            }, {
                                key: "deleteAt",
                                value: function(t, n) {
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n),
                                    this.cache = {}
                                }
                            }, {
                                key: "formatAt",
                                value: function(t, n, r, i) {
                                    n <= 0 || (c.default.query(r, c.default.Scope.BLOCK) ? t + n === this.length() && this.format(r, i) : o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, Math.min(n, this.length() - t - 1), r, i),
                                    this.cache = {})
                                }
                            }, {
                                key: "insertAt",
                                value: function(t, n, r) {
                                    if (null != r)
                                        return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
                                    if (0 !== n.length) {
                                        var i = n.split("\n")
                                          , l = i.shift();
                                        l.length > 0 && (t < this.length() - 1 || null == this.children.tail ? o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), l) : this.children.tail.insertAt(this.children.tail.length(), l),
                                        this.cache = {});
                                        var a = this;
                                        i.reduce(function(t, e) {
                                            return (a = a.split(t, !0)).insertAt(0, e),
                                            e.length
                                        }, t + l.length)
                                    }
                                }
                            }, {
                                key: "insertBefore",
                                value: function(t, n) {
                                    var r = this.children.head;
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n),
                                    r instanceof h.default && r.remove(),
                                    this.cache = {}
                                }
                            }, {
                                key: "length",
                                value: function() {
                                    return null == this.cache.length && (this.cache.length = o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "length", this).call(this) + 1),
                                    this.cache.length
                                }
                            }, {
                                key: "moveChildren",
                                value: function(t, n) {
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveChildren", this).call(this, t, n),
                                    this.cache = {}
                                }
                            }, {
                                key: "optimize",
                                value: function(t) {
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t),
                                    this.cache = {}
                                }
                            }, {
                                key: "path",
                                value: function(t) {
                                    return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t, !0)
                                }
                            }, {
                                key: "removeChild",
                                value: function(t) {
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeChild", this).call(this, t),
                                    this.cache = {}
                                }
                            }, {
                                key: "split",
                                value: function(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    if (n && (0 === t || t >= this.length() - 1)) {
                                        var r = this.clone();
                                        return 0 === t ? (this.parent.insertBefore(r, this),
                                        this) : (this.parent.insertBefore(r, this.next),
                                        r)
                                    }
                                    var i = o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "split", this).call(this, t, n);
                                    return this.cache = {},
                                    i
                                }
                            }]),
                            e
                        }(c.default.Block);
                        function E(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return null == t ? e : ("function" == typeof t.formats && (e = (0,
                            l.default)(e, t.formats())),
                            null == t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : E(t.parent, e))
                        }
                        w.blotName = "block",
                        w.tagName = "P",
                        w.defaultChild = "break",
                        w.allowedChildren = [d.default, c.default.Embed, v.default],
                        e.bubbleFormats = E,
                        e.BlockEmbed = O,
                        e.default = w
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.default = e.overload = e.expandConfig = void 0;
                        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        }
                        : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }
                          , o = function(t, e) {
                            if (Array.isArray(t))
                                return t;
                            if (Symbol.iterator in Object(t))
                                return function(t, e) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value),
                                        !e || n.length !== e); r = !0)
                                            ;
                                    } catch (t) {
                                        o = !0,
                                        i = t
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                          , i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }();
                        n(50);
                        var l = n(2)
                          , a = x(l)
                          , s = n(14)
                          , u = x(s)
                          , c = n(8)
                          , f = x(c)
                          , h = n(9)
                          , p = x(h)
                          , d = n(0)
                          , y = x(d)
                          , v = n(15)
                          , b = x(v)
                          , g = n(3)
                          , m = x(g)
                          , _ = n(10)
                          , O = x(_)
                          , w = n(34)
                          , E = x(w);
                        function x(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function k(t, e, n) {
                            return e in t ? Object.defineProperty(t, e, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = n,
                            t
                        }
                        var A = (0,
                        O.default)("quill")
                          , N = function() {
                            function t(e) {
                                var n = this
                                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, t),
                                this.options = j(e, r),
                                this.container = this.options.container,
                                null == this.container)
                                    return A.error("Invalid Quill container", e);
                                this.options.debug && t.debug(this.options.debug);
                                var o = this.container.innerHTML.trim();
                                this.container.classList.add("ql-container"),
                                this.container.innerHTML = "",
                                this.container.__quill = this,
                                this.root = this.addContainer("ql-editor"),
                                this.root.classList.add("ql-blank"),
                                this.root.setAttribute("data-gramm", !1),
                                this.scrollingContainer = this.options.scrollingContainer || this.root,
                                this.emitter = new f.default,
                                this.scroll = y.default.create(this.root, {
                                    emitter: this.emitter,
                                    whitelist: this.options.formats
                                }),
                                this.editor = new u.default(this.scroll),
                                this.selection = new b.default(this.scroll,this.emitter),
                                this.theme = new this.options.theme(this,this.options),
                                this.keyboard = this.theme.addModule("keyboard"),
                                this.clipboard = this.theme.addModule("clipboard"),
                                this.history = this.theme.addModule("history"),
                                this.theme.init(),
                                this.emitter.on(f.default.events.EDITOR_CHANGE, function(t) {
                                    t === f.default.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank())
                                }),
                                this.emitter.on(f.default.events.SCROLL_UPDATE, function(t, e) {
                                    var r = n.selection.lastRange
                                      , o = r && 0 === r.length ? r.index : void 0;
                                    T.call(n, function() {
                                        return n.editor.update(null, e, o)
                                    }, t)
                                });
                                var i = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + o + "<p><br></p></div>");
                                this.setContents(i),
                                this.history.clear(),
                                this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder),
                                this.options.readOnly && this.disable()
                            }
                            return i(t, null, [{
                                key: "debug",
                                value: function(t) {
                                    !0 === t && (t = "log"),
                                    O.default.level(t)
                                }
                            }, {
                                key: "find",
                                value: function(t) {
                                    return t.__quill || y.default.find(t)
                                }
                            }, {
                                key: "import",
                                value: function(t) {
                                    return null == this.imports[t] && A.error("Cannot import " + t + ". Are you sure it was registered?"),
                                    this.imports[t]
                                }
                            }, {
                                key: "register",
                                value: function(t, e) {
                                    var n = this
                                      , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    if ("string" != typeof t) {
                                        var o = t.attrName || t.blotName;
                                        "string" == typeof o ? this.register("formats/" + o, t, e) : Object.keys(t).forEach(function(r) {
                                            n.register(r, t[r], e)
                                        })
                                    } else
                                        null == this.imports[t] || r || A.warn("Overwriting " + t + " with", e),
                                        this.imports[t] = e,
                                        (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName ? y.default.register(e) : t.startsWith("modules") && "function" == typeof e.register && e.register()
                                }
                            }]),
                            i(t, [{
                                key: "addContainer",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    if ("string" == typeof t) {
                                        var n = t;
                                        (t = document.createElement("div")).classList.add(n)
                                    }
                                    return this.container.insertBefore(t, e),
                                    t
                                }
                            }, {
                                key: "blur",
                                value: function() {
                                    this.selection.setRange(null)
                                }
                            }, {
                                key: "deleteText",
                                value: function(t, e, n) {
                                    var r = this
                                      , i = P(t, e, n)
                                      , l = o(i, 4);
                                    return t = l[0],
                                    e = l[1],
                                    n = l[3],
                                    T.call(this, function() {
                                        return r.editor.deleteText(t, e)
                                    }, n, t, -1 * e)
                                }
                            }, {
                                key: "disable",
                                value: function() {
                                    this.enable(!1)
                                }
                            }, {
                                key: "enable",
                                value: function() {
                                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                    this.scroll.enable(t),
                                    this.container.classList.toggle("ql-disabled", !t)
                                }
                            }, {
                                key: "focus",
                                value: function() {
                                    var t = this.scrollingContainer.scrollTop;
                                    this.selection.focus(),
                                    this.scrollingContainer.scrollTop = t,
                                    this.scrollIntoView()
                                }
                            }, {
                                key: "format",
                                value: function(t, e) {
                                    var n = this
                                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.default.sources.API;
                                    return T.call(this, function() {
                                        var r = n.getSelection(!0)
                                          , o = new a.default;
                                        if (null == r)
                                            return o;
                                        if (y.default.query(t, y.default.Scope.BLOCK))
                                            o = n.editor.formatLine(r.index, r.length, k({}, t, e));
                                        else {
                                            if (0 === r.length)
                                                return n.selection.format(t, e),
                                                o;
                                            o = n.editor.formatText(r.index, r.length, k({}, t, e))
                                        }
                                        return n.setSelection(r, f.default.sources.SILENT),
                                        o
                                    }, r)
                                }
                            }, {
                                key: "formatLine",
                                value: function(t, e, n, r, i) {
                                    var l = this
                                      , a = void 0
                                      , s = P(t, e, n, r, i)
                                      , u = o(s, 4);
                                    return t = u[0],
                                    e = u[1],
                                    a = u[2],
                                    i = u[3],
                                    T.call(this, function() {
                                        return l.editor.formatLine(t, e, a)
                                    }, i, t, 0)
                                }
                            }, {
                                key: "formatText",
                                value: function(t, e, n, r, i) {
                                    var l = this
                                      , a = void 0
                                      , s = P(t, e, n, r, i)
                                      , u = o(s, 4);
                                    return t = u[0],
                                    e = u[1],
                                    a = u[2],
                                    i = u[3],
                                    T.call(this, function() {
                                        return l.editor.formatText(t, e, a)
                                    }, i, t, 0)
                                }
                            }, {
                                key: "getBounds",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                                      , n = void 0;
                                    n = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length);
                                    var r = this.container.getBoundingClientRect();
                                    return {
                                        bottom: n.bottom - r.top,
                                        height: n.height,
                                        left: n.left - r.left,
                                        right: n.right - r.left,
                                        top: n.top - r.top,
                                        width: n.width
                                    }
                                }
                            }, {
                                key: "getContents",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t
                                      , n = P(t, e)
                                      , r = o(n, 2);
                                    return t = r[0],
                                    e = r[1],
                                    this.editor.getContents(t, e)
                                }
                            }, {
                                key: "getFormat",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0)
                                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                    return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
                                }
                            }, {
                                key: "getIndex",
                                value: function(t) {
                                    return t.offset(this.scroll)
                                }
                            }, {
                                key: "getLength",
                                value: function() {
                                    return this.scroll.length()
                                }
                            }, {
                                key: "getLeaf",
                                value: function(t) {
                                    return this.scroll.leaf(t)
                                }
                            }, {
                                key: "getLine",
                                value: function(t) {
                                    return this.scroll.line(t)
                                }
                            }, {
                                key: "getLines",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                                    return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
                                }
                            }, {
                                key: "getModule",
                                value: function(t) {
                                    return this.theme.modules[t]
                                }
                            }, {
                                key: "getSelection",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    return t && this.focus(),
                                    this.update(),
                                    this.selection.getRange()[0]
                                }
                            }, {
                                key: "getText",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t
                                      , n = P(t, e)
                                      , r = o(n, 2);
                                    return t = r[0],
                                    e = r[1],
                                    this.editor.getText(t, e)
                                }
                            }, {
                                key: "hasFocus",
                                value: function() {
                                    return this.selection.hasFocus()
                                }
                            }, {
                                key: "insertEmbed",
                                value: function(e, n, r) {
                                    var o = this
                                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API;
                                    return T.call(this, function() {
                                        return o.editor.insertEmbed(e, n, r)
                                    }, i, e)
                                }
                            }, {
                                key: "insertText",
                                value: function(t, e, n, r, i) {
                                    var l = this
                                      , a = void 0
                                      , s = P(t, 0, n, r, i)
                                      , u = o(s, 4);
                                    return t = u[0],
                                    a = u[2],
                                    i = u[3],
                                    T.call(this, function() {
                                        return l.editor.insertText(t, e, a)
                                    }, i, t, e.length)
                                }
                            }, {
                                key: "isEnabled",
                                value: function() {
                                    return !this.container.classList.contains("ql-disabled")
                                }
                            }, {
                                key: "off",
                                value: function() {
                                    return this.emitter.off.apply(this.emitter, arguments)
                                }
                            }, {
                                key: "on",
                                value: function() {
                                    return this.emitter.on.apply(this.emitter, arguments)
                                }
                            }, {
                                key: "once",
                                value: function() {
                                    return this.emitter.once.apply(this.emitter, arguments)
                                }
                            }, {
                                key: "pasteHTML",
                                value: function(t, e, n) {
                                    this.clipboard.dangerouslyPasteHTML(t, e, n)
                                }
                            }, {
                                key: "removeFormat",
                                value: function(t, e, n) {
                                    var r = this
                                      , i = P(t, e, n)
                                      , l = o(i, 4);
                                    return t = l[0],
                                    e = l[1],
                                    n = l[3],
                                    T.call(this, function() {
                                        return r.editor.removeFormat(t, e)
                                    }, n, t)
                                }
                            }, {
                                key: "scrollIntoView",
                                value: function() {
                                    this.selection.scrollIntoView(this.scrollingContainer)
                                }
                            }, {
                                key: "setContents",
                                value: function(t) {
                                    var e = this
                                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.default.sources.API;
                                    return T.call(this, function() {
                                        t = new a.default(t);
                                        var n = e.getLength()
                                          , r = e.editor.deleteText(0, n)
                                          , o = e.editor.applyDelta(t)
                                          , i = o.ops[o.ops.length - 1];
                                        null != i && "string" == typeof i.insert && "\n" === i.insert[i.insert.length - 1] && (e.editor.deleteText(e.getLength() - 1, 1),
                                        o.delete(1));
                                        var l = r.compose(o);
                                        return l
                                    }, n)
                                }
                            }, {
                                key: "setSelection",
                                value: function(e, n, r) {
                                    if (null == e)
                                        this.selection.setRange(null, n || t.sources.API);
                                    else {
                                        var i = P(e, n, r)
                                          , l = o(i, 4);
                                        e = l[0],
                                        n = l[1],
                                        r = l[3],
                                        this.selection.setRange(new v.Range(e,n), r),
                                        r !== f.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
                                    }
                                }
                            }, {
                                key: "setText",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.default.sources.API
                                      , n = (new a.default).insert(t);
                                    return this.setContents(n, e)
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.default.sources.USER
                                      , e = this.scroll.update(t);
                                    return this.selection.update(t),
                                    e
                                }
                            }, {
                                key: "updateContents",
                                value: function(t) {
                                    var e = this
                                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.default.sources.API;
                                    return T.call(this, function() {
                                        return t = new a.default(t),
                                        e.editor.applyDelta(t, n)
                                    }, n, !0)
                                }
                            }]),
                            t
                        }();
                        function j(t, e) {
                            if ((e = (0,
                            m.default)(!0, {
                                container: t,
                                modules: {
                                    clipboard: !0,
                                    keyboard: !0,
                                    history: !0
                                }
                            }, e)).theme && e.theme !== N.DEFAULTS.theme) {
                                if (e.theme = N.import("themes/" + e.theme),
                                null == e.theme)
                                    throw new Error("Invalid theme " + e.theme + ". Did you register it?")
                            } else
                                e.theme = E.default;
                            var n = (0,
                            m.default)(!0, {}, e.theme.DEFAULTS);
                            [n, e].forEach(function(t) {
                                t.modules = t.modules || {},
                                Object.keys(t.modules).forEach(function(e) {
                                    !0 === t.modules[e] && (t.modules[e] = {})
                                })
                            });
                            var r = Object.keys(n.modules).concat(Object.keys(e.modules))
                              , o = r.reduce(function(t, e) {
                                var n = N.import("modules/" + e);
                                return null == n ? A.error("Cannot load " + e + " module. Are you sure you registered it?") : t[e] = n.DEFAULTS || {},
                                t
                            }, {});
                            return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
                                container: e.modules.toolbar
                            }),
                            e = (0,
                            m.default)(!0, {}, N.DEFAULTS, {
                                modules: o
                            }, n, e),
                            ["bounds", "container", "scrollingContainer"].forEach(function(t) {
                                "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                            }),
                            e.modules = Object.keys(e.modules).reduce(function(t, n) {
                                return e.modules[n] && (t[n] = e.modules[n]),
                                t
                            }, {}),
                            e
                        }
                        function T(t, e, n, r) {
                            if (this.options.strict && !this.isEnabled() && e === f.default.sources.USER)
                                return new a.default;
                            var o = null == n ? null : this.getSelection()
                              , i = this.editor.delta
                              , l = t();
                            if (null != o && (!0 === n && (n = o.index),
                            null == r ? o = S(o, l, e) : 0 !== r && (o = S(o, n, r, e)),
                            this.setSelection(o, f.default.sources.SILENT)),
                            l.length() > 0) {
                                var s, u, c = [f.default.events.TEXT_CHANGE, l, i, e];
                                (s = this.emitter).emit.apply(s, [f.default.events.EDITOR_CHANGE].concat(c)),
                                e !== f.default.sources.SILENT && (u = this.emitter).emit.apply(u, c)
                            }
                            return l
                        }
                        function P(t, e, n, o, i) {
                            var l = {};
                            return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (i = o,
                            o = n,
                            n = e,
                            e = t.length,
                            t = t.index) : (e = t.length,
                            t = t.index) : "number" != typeof e && (i = o,
                            o = n,
                            n = e,
                            e = 0),
                            "object" === (void 0 === n ? "undefined" : r(n)) ? (l = n,
                            i = o) : "string" == typeof n && (null != o ? l[n] = o : i = n),
                            i = i || f.default.sources.API,
                            [t, e, l, i]
                        }
                        function S(t, e, n, r) {
                            if (null == t)
                                return null;
                            var i = void 0
                              , l = void 0;
                            if (e instanceof a.default) {
                                var s = [t.index, t.index + t.length].map(function(t) {
                                    return e.transformPosition(t, r !== f.default.sources.USER)
                                })
                                  , u = o(s, 2);
                                i = u[0],
                                l = u[1]
                            } else {
                                var c = [t.index, t.index + t.length].map(function(t) {
                                    return t < e || t === e && r === f.default.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n)
                                })
                                  , h = o(c, 2);
                                i = h[0],
                                l = h[1]
                            }
                            return new v.Range(i,l - i)
                        }
                        N.DEFAULTS = {
                            bounds: null,
                            formats: null,
                            modules: {},
                            placeholder: "",
                            readOnly: !1,
                            scrollingContainer: null,
                            strict: !0,
                            theme: "default"
                        },
                        N.events = f.default.events,
                        N.sources = f.default.sources,
                        N.version = "1.3.6",
                        N.imports = {
                            delta: a.default,
                            parchment: y.default,
                            "core/module": p.default,
                            "core/theme": E.default
                        },
                        e.expandConfig = j,
                        e.overload = P,
                        e.default = N
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }
                          , i = n(7)
                          , l = u(i)
                          , a = n(0)
                          , s = u(a);
                        function u(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        var c = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            r(e, [{
                                key: "formatAt",
                                value: function(t, n, r, i) {
                                    if (e.compare(this.statics.blotName, r) < 0 && s.default.query(r, s.default.Scope.BLOT)) {
                                        var l = this.isolate(t, n);
                                        i && l.wrap(r, i)
                                    } else
                                        o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, i)
                                }
                            }, {
                                key: "optimize",
                                value: function(t) {
                                    if (o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t),
                                    this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                                        var n = this.parent.isolate(this.offset(), this.length());
                                        this.moveChildren(n),
                                        n.wrap(this)
                                    }
                                }
                            }], [{
                                key: "compare",
                                value: function(t, n) {
                                    var r = e.order.indexOf(t)
                                      , o = e.order.indexOf(n);
                                    return r >= 0 || o >= 0 ? r - o : t === n ? 0 : t < n ? -1 : 1
                                }
                            }]),
                            e
                        }(s.default.Inline);
                        c.allowedChildren = [c, s.default.Embed, l.default],
                        c.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"],
                        e.default = c
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = n(0), i = (r = o) && r.__esModule ? r : {
                            default: r
                        }, l = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            e
                        }(i.default.Text);
                        e.default = l
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = n(54)
                          , i = s(o)
                          , l = n(10)
                          , a = s(l);
                        function s(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        var u = (0,
                        a.default)("quill:events");
                        ["selectionchange", "mousedown", "mouseup", "click"].forEach(function(t) {
                            document.addEventListener(t, function() {
                                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                                    e[n] = arguments[n];
                                [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(t) {
                                    var n;
                                    t.__quill && t.__quill.emitter && (n = t.__quill.emitter).handleDOM.apply(n, e)
                                })
                            })
                        });
                        var c = function(t) {
                            function e() {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var t = function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                                return t.listeners = {},
                                t.on("error", u.error),
                                t
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            r(e, [{
                                key: "emit",
                                value: function() {
                                    u.log.apply(u, arguments),
                                    function t(e, n, r) {
                                        null === e && (e = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === o) {
                                            var i = Object.getPrototypeOf(e);
                                            return null === i ? void 0 : t(i, n, r)
                                        }
                                        if ("value"in o)
                                            return o.value;
                                        var l = o.get;
                                        return void 0 !== l ? l.call(r) : void 0
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).apply(this, arguments)
                                }
                            }, {
                                key: "handleDOM",
                                value: function(t) {
                                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                                        n[r - 1] = arguments[r];
                                    (this.listeners[t.type] || []).forEach(function(e) {
                                        var r = e.node
                                          , o = e.handler;
                                        (t.target === r || r.contains(t.target)) && o.apply(void 0, [t].concat(n))
                                    })
                                }
                            }, {
                                key: "listenDOM",
                                value: function(t, e, n) {
                                    this.listeners[t] || (this.listeners[t] = []),
                                    this.listeners[t].push({
                                        node: e,
                                        handler: n
                                    })
                                }
                            }]),
                            e
                        }(i.default);
                        c.events = {
                            EDITOR_CHANGE: "editor-change",
                            SCROLL_BEFORE_UPDATE: "scroll-before-update",
                            SCROLL_OPTIMIZE: "scroll-optimize",
                            SCROLL_UPDATE: "scroll-update",
                            SELECTION_CHANGE: "selection-change",
                            TEXT_CHANGE: "text-change"
                        },
                        c.sources = {
                            API: "api",
                            SILENT: "silent",
                            USER: "user"
                        },
                        e.default = c
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            !function(t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            this.quill = e,
                            this.options = n
                        };
                        r.DEFAULTS = {},
                        e.default = r
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = ["error", "warn", "log", "info"]
                          , o = "warn";
                        function i(t) {
                            if (r.indexOf(t) <= r.indexOf(o)) {
                                for (var e, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
                                    i[l - 1] = arguments[l];
                                (e = console)[t].apply(e, i)
                            }
                        }
                        function l(t) {
                            return r.reduce(function(e, n) {
                                return e[n] = i.bind(console, n, t),
                                e
                            }, {})
                        }
                        i.level = l.level = function(t) {
                            o = t
                        }
                        ,
                        e.default = l
                    }
                    , function(t, e, n) {
                        var r = Array.prototype.slice
                          , o = n(52)
                          , i = n(53)
                          , l = t.exports = function(t, e, n) {
                            return n || (n = {}),
                            t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? n.strict ? t === e : t == e : function(t, e, n) {
                                var u, c;
                                if (a(t) || a(e))
                                    return !1;
                                if (t.prototype !== e.prototype)
                                    return !1;
                                if (i(t))
                                    return !!i(e) && (t = r.call(t),
                                    e = r.call(e),
                                    l(t, e, n));
                                if (s(t)) {
                                    if (!s(e))
                                        return !1;
                                    if (t.length !== e.length)
                                        return !1;
                                    for (u = 0; u < t.length; u++)
                                        if (t[u] !== e[u])
                                            return !1;
                                    return !0
                                }
                                try {
                                    var f = o(t)
                                      , h = o(e)
                                } catch (t) {
                                    return !1
                                }
                                if (f.length != h.length)
                                    return !1;
                                for (f.sort(),
                                h.sort(),
                                u = f.length - 1; u >= 0; u--)
                                    if (f[u] != h[u])
                                        return !1;
                                for (u = f.length - 1; u >= 0; u--)
                                    if (c = f[u],
                                    !l(t[c], e[c], n))
                                        return !1;
                                return typeof t == typeof e
                            }(t, e, n))
                        }
                        ;
                        function a(t) {
                            return null === t || void 0 === t
                        }
                        function s(t) {
                            return !(!t || "object" != typeof t || "number" != typeof t.length || "function" != typeof t.copy || "function" != typeof t.slice || t.length > 0 && "number" != typeof t[0])
                        }
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = n(1)
                          , o = function() {
                            function t(t, e, n) {
                                void 0 === n && (n = {}),
                                this.attrName = t,
                                this.keyName = e;
                                var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;
                                null != n.scope ? this.scope = n.scope & r.Scope.LEVEL | o : this.scope = r.Scope.ATTRIBUTE,
                                null != n.whitelist && (this.whitelist = n.whitelist)
                            }
                            return t.keys = function(t) {
                                return [].map.call(t.attributes, function(t) {
                                    return t.name
                                })
                            }
                            ,
                            t.prototype.add = function(t, e) {
                                return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e),
                                !0)
                            }
                            ,
                            t.prototype.canAdd = function(t, e) {
                                var n = r.query(t, r.Scope.BLOT & (this.scope | r.Scope.TYPE));
                                return null != n && (null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1))
                            }
                            ,
                            t.prototype.remove = function(t) {
                                t.removeAttribute(this.keyName)
                            }
                            ,
                            t.prototype.value = function(t) {
                                var e = t.getAttribute(this.keyName);
                                return this.canAdd(t, e) && e ? e : ""
                            }
                            ,
                            t
                        }();
                        e.default = o
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.default = e.Code = void 0;
                        var r = function(t, e) {
                            if (Array.isArray(t))
                                return t;
                            if (Symbol.iterator in Object(t))
                                return function(t, e) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value),
                                        !e || n.length !== e); r = !0)
                                            ;
                                    } catch (t) {
                                        o = !0,
                                        i = t
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                          , o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , i = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }
                          , l = n(2)
                          , a = v(l)
                          , s = n(0)
                          , u = v(s)
                          , c = n(4)
                          , f = v(c)
                          , h = n(6)
                          , p = v(h)
                          , d = n(7)
                          , y = v(d);
                        function v(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function b(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function g(t, e) {
                            if (!t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }
                        function m(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }
                        var _ = function(t) {
                            function e() {
                                return b(this, e),
                                g(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return m(e, t),
                            e
                        }(p.default);
                        _.blotName = "code",
                        _.tagName = "CODE";
                        var O = function(t) {
                            function e() {
                                return b(this, e),
                                g(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return m(e, t),
                            o(e, [{
                                key: "delta",
                                value: function() {
                                    var t = this
                                      , e = this.domNode.textContent;
                                    return e.endsWith("\n") && (e = e.slice(0, -1)),
                                    e.split("\n").reduce(function(e, n) {
                                        return e.insert(n).insert("\n", t.formats())
                                    }, new a.default)
                                }
                            }, {
                                key: "format",
                                value: function(t, n) {
                                    if (t !== this.statics.blotName || !n) {
                                        var o = this.descendant(y.default, this.length() - 1)
                                          , l = r(o, 1)
                                          , a = l[0];
                                        null != a && a.deleteAt(a.length() - 1, 1),
                                        i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                                    }
                                }
                            }, {
                                key: "formatAt",
                                value: function(t, n, r, o) {
                                    if (0 !== n && null != u.default.query(r, u.default.Scope.BLOCK) && (r !== this.statics.blotName || o !== this.statics.formats(this.domNode))) {
                                        var i = this.newlineIndex(t);
                                        if (!(i < 0 || i >= t + n)) {
                                            var l = this.newlineIndex(t, !0) + 1
                                              , a = i - l + 1
                                              , s = this.isolate(l, a)
                                              , c = s.next;
                                            s.format(r, o),
                                            c instanceof e && c.formatAt(0, t - l + n - a, r, o)
                                        }
                                    }
                                }
                            }, {
                                key: "insertAt",
                                value: function(t, e, n) {
                                    if (null == n) {
                                        var o = this.descendant(y.default, t)
                                          , i = r(o, 2)
                                          , l = i[0]
                                          , a = i[1];
                                        l.insertAt(a, e)
                                    }
                                }
                            }, {
                                key: "length",
                                value: function() {
                                    var t = this.domNode.textContent.length;
                                    return this.domNode.textContent.endsWith("\n") ? t : t + 1
                                }
                            }, {
                                key: "newlineIndex",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    if (e)
                                        return this.domNode.textContent.slice(0, t).lastIndexOf("\n");
                                    var n = this.domNode.textContent.slice(t).indexOf("\n");
                                    return n > -1 ? t + n : -1
                                }
                            }, {
                                key: "optimize",
                                value: function(t) {
                                    this.domNode.textContent.endsWith("\n") || this.appendChild(u.default.create("text", "\n")),
                                    i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
                                    var n = this.next;
                                    null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n.statics.formats(n.domNode) && (n.optimize(t),
                                    n.moveChildren(this),
                                    n.remove())
                                }
                            }, {
                                key: "replace",
                                value: function(t) {
                                    i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t),
                                    [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t) {
                                        var e = u.default.find(t);
                                        null == e ? t.parentNode.removeChild(t) : e instanceof u.default.Embed ? e.remove() : e.unwrap()
                                    })
                                }
                            }], [{
                                key: "create",
                                value: function(t) {
                                    var n = i(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                    return n.setAttribute("spellcheck", !1),
                                    n
                                }
                            }, {
                                key: "formats",
                                value: function() {
                                    return !0
                                }
                            }]),
                            e
                        }(f.default);
                        O.blotName = "code-block",
                        O.tagName = "PRE",
                        O.TAB = "  ",
                        e.Code = _,
                        e.default = O
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        }
                        : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }
                          , o = function(t, e) {
                            if (Array.isArray(t))
                                return t;
                            if (Symbol.iterator in Object(t))
                                return function(t, e) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value),
                                        !e || n.length !== e); r = !0)
                                            ;
                                    } catch (t) {
                                        o = !0,
                                        i = t
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                          , i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , l = n(2)
                          , a = A(l)
                          , s = n(20)
                          , u = A(s)
                          , c = n(0)
                          , f = A(c)
                          , h = n(13)
                          , p = A(h)
                          , d = n(24)
                          , y = A(d)
                          , v = n(4)
                          , b = A(v)
                          , g = n(16)
                          , m = A(g)
                          , _ = n(21)
                          , O = A(_)
                          , w = n(11)
                          , E = A(w)
                          , x = n(3)
                          , k = A(x);
                        function A(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        var N = /^[ -~]*$/
                          , j = function() {
                            function t(e) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, t),
                                this.scroll = e,
                                this.delta = this.getDelta()
                            }
                            return i(t, [{
                                key: "applyDelta",
                                value: function(t) {
                                    var e = this
                                      , n = !1;
                                    this.scroll.update();
                                    var i = this.scroll.length();
                                    return this.scroll.batchStart(),
                                    (t = function(t) {
                                        return t.reduce(function(t, e) {
                                            if (1 === e.insert) {
                                                var n = (0,
                                                O.default)(e.attributes);
                                                return delete n.image,
                                                t.insert({
                                                    image: e.attributes.image
                                                }, n)
                                            }
                                            if (null == e.attributes || !0 !== e.attributes.list && !0 !== e.attributes.bullet || ((e = (0,
                                            O.default)(e)).attributes.list ? e.attributes.list = "ordered" : (e.attributes.list = "bullet",
                                            delete e.attributes.bullet)),
                                            "string" == typeof e.insert) {
                                                var r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                                                return t.insert(r, e.attributes)
                                            }
                                            return t.push(e)
                                        }, new a.default)
                                    }(t)).reduce(function(t, l) {
                                        var a = l.retain || l.delete || l.insert.length || 1
                                          , s = l.attributes || {};
                                        if (null != l.insert) {
                                            if ("string" == typeof l.insert) {
                                                var c = l.insert;
                                                c.endsWith("\n") && n && (n = !1,
                                                c = c.slice(0, -1)),
                                                t >= i && !c.endsWith("\n") && (n = !0),
                                                e.scroll.insertAt(t, c);
                                                var h = e.scroll.line(t)
                                                  , p = o(h, 2)
                                                  , d = p[0]
                                                  , y = p[1]
                                                  , g = (0,
                                                k.default)({}, (0,
                                                v.bubbleFormats)(d));
                                                if (d instanceof b.default) {
                                                    var m = d.descendant(f.default.Leaf, y)
                                                      , _ = o(m, 1)
                                                      , O = _[0];
                                                    g = (0,
                                                    k.default)(g, (0,
                                                    v.bubbleFormats)(O))
                                                }
                                                s = u.default.attributes.diff(g, s) || {}
                                            } else if ("object" === r(l.insert)) {
                                                var w = Object.keys(l.insert)[0];
                                                if (null == w)
                                                    return t;
                                                e.scroll.insertAt(t, w, l.insert[w])
                                            }
                                            i += a
                                        }
                                        return Object.keys(s).forEach(function(n) {
                                            e.scroll.formatAt(t, a, n, s[n])
                                        }),
                                        t + a
                                    }, 0),
                                    t.reduce(function(t, n) {
                                        return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete),
                                        t) : t + (n.retain || n.insert.length || 1)
                                    }, 0),
                                    this.scroll.batchEnd(),
                                    this.update(t)
                                }
                            }, {
                                key: "deleteText",
                                value: function(t, e) {
                                    return this.scroll.deleteAt(t, e),
                                    this.update((new a.default).retain(t).delete(e))
                                }
                            }, {
                                key: "formatLine",
                                value: function(t, e) {
                                    var n = this
                                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return this.scroll.update(),
                                    Object.keys(r).forEach(function(o) {
                                        if (null == n.scroll.whitelist || n.scroll.whitelist[o]) {
                                            var i = n.scroll.lines(t, Math.max(e, 1))
                                              , l = e;
                                            i.forEach(function(e) {
                                                var i = e.length();
                                                if (e instanceof p.default) {
                                                    var a = t - e.offset(n.scroll)
                                                      , s = e.newlineIndex(a + l) - a + 1;
                                                    e.formatAt(a, s, o, r[o])
                                                } else
                                                    e.format(o, r[o]);
                                                l -= i
                                            })
                                        }
                                    }),
                                    this.scroll.optimize(),
                                    this.update((new a.default).retain(t).retain(e, (0,
                                    O.default)(r)))
                                }
                            }, {
                                key: "formatText",
                                value: function(t, e) {
                                    var n = this
                                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return Object.keys(r).forEach(function(o) {
                                        n.scroll.formatAt(t, e, o, r[o])
                                    }),
                                    this.update((new a.default).retain(t).retain(e, (0,
                                    O.default)(r)))
                                }
                            }, {
                                key: "getContents",
                                value: function(t, e) {
                                    return this.delta.slice(t, t + e)
                                }
                            }, {
                                key: "getDelta",
                                value: function() {
                                    return this.scroll.lines().reduce(function(t, e) {
                                        return t.concat(e.delta())
                                    }, new a.default)
                                }
                            }, {
                                key: "getFormat",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                                      , n = []
                                      , r = [];
                                    0 === e ? this.scroll.path(t).forEach(function(t) {
                                        var e = o(t, 1)
                                          , i = e[0];
                                        i instanceof b.default ? n.push(i) : i instanceof f.default.Leaf && r.push(i)
                                    }) : (n = this.scroll.lines(t, e),
                                    r = this.scroll.descendants(f.default.Leaf, t, e));
                                    var i = [n, r].map(function(t) {
                                        if (0 === t.length)
                                            return {};
                                        for (var e = (0,
                                        v.bubbleFormats)(t.shift()); Object.keys(e).length > 0; ) {
                                            var n = t.shift();
                                            if (null == n)
                                                return e;
                                            e = T((0,
                                            v.bubbleFormats)(n), e)
                                        }
                                        return e
                                    });
                                    return k.default.apply(k.default, i)
                                }
                            }, {
                                key: "getText",
                                value: function(t, e) {
                                    return this.getContents(t, e).filter(function(t) {
                                        return "string" == typeof t.insert
                                    }).map(function(t) {
                                        return t.insert
                                    }).join("")
                                }
                            }, {
                                key: "insertEmbed",
                                value: function(t, e, n) {
                                    return this.scroll.insertAt(t, e, n),
                                    this.update((new a.default).retain(t).insert(function(t, e, n) {
                                        return e in t ? Object.defineProperty(t, e, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : t[e] = n,
                                        t
                                    }({}, e, n)))
                                }
                            }, {
                                key: "insertText",
                                value: function(t, e) {
                                    var n = this
                                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"),
                                    this.scroll.insertAt(t, e),
                                    Object.keys(r).forEach(function(o) {
                                        n.scroll.formatAt(t, e.length, o, r[o])
                                    }),
                                    this.update((new a.default).retain(t).insert(e, (0,
                                    O.default)(r)))
                                }
                            }, {
                                key: "isBlank",
                                value: function() {
                                    if (0 == this.scroll.children.length)
                                        return !0;
                                    if (this.scroll.children.length > 1)
                                        return !1;
                                    var t = this.scroll.children.head;
                                    return t.statics.blotName === b.default.blotName && !(t.children.length > 1) && t.children.head instanceof m.default
                                }
                            }, {
                                key: "removeFormat",
                                value: function(t, e) {
                                    var n = this.getText(t, e)
                                      , r = this.scroll.line(t + e)
                                      , i = o(r, 2)
                                      , l = i[0]
                                      , s = i[1]
                                      , u = 0
                                      , c = new a.default;
                                    null != l && (u = l instanceof p.default ? l.newlineIndex(s) - s + 1 : l.length() - s,
                                    c = l.delta().slice(s, s + u - 1).insert("\n"));
                                    var f = this.getContents(t, e + u)
                                      , h = f.diff((new a.default).insert(n).concat(c))
                                      , d = (new a.default).retain(t).concat(h);
                                    return this.applyDelta(d)
                                }
                            }, {
                                key: "update",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0
                                      , r = this.delta;
                                    if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(N) && f.default.find(e[0].target)) {
                                        var o = f.default.find(e[0].target)
                                          , i = (0,
                                        v.bubbleFormats)(o)
                                          , l = o.offset(this.scroll)
                                          , s = e[0].oldValue.replace(y.default.CONTENTS, "")
                                          , u = (new a.default).insert(s)
                                          , c = (new a.default).insert(o.value())
                                          , h = (new a.default).retain(l).concat(u.diff(c, n));
                                        t = h.reduce(function(t, e) {
                                            return e.insert ? t.insert(e.insert, i) : t.push(e)
                                        }, new a.default),
                                        this.delta = r.compose(t)
                                    } else
                                        this.delta = this.getDelta(),
                                        t && (0,
                                        E.default)(r.compose(t), this.delta) || (t = r.diff(this.delta, n));
                                    return t
                                }
                            }]),
                            t
                        }();
                        function T(t, e) {
                            return Object.keys(e).reduce(function(n, r) {
                                return null == t[r] ? n : (e[r] === t[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t[r]) < 0 && (n[r] = e[r].concat([t[r]])) : n[r] = [e[r], t[r]],
                                n)
                            }, {})
                        }
                        e.default = j
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.default = e.Range = void 0;
                        var r = function(t, e) {
                            if (Array.isArray(t))
                                return t;
                            if (Symbol.iterator in Object(t))
                                return function(t, e) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value),
                                        !e || n.length !== e); r = !0)
                                            ;
                                    } catch (t) {
                                        o = !0,
                                        i = t
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                          , o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , i = n(0)
                          , l = y(i)
                          , a = n(21)
                          , s = y(a)
                          , u = n(11)
                          , c = y(u)
                          , f = n(8)
                          , h = y(f)
                          , p = n(10)
                          , d = y(p);
                        function y(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function v(t) {
                            if (Array.isArray(t)) {
                                for (var e = 0, n = Array(t.length); e < t.length; e++)
                                    n[e] = t[e];
                                return n
                            }
                            return Array.from(t)
                        }
                        function b(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        var g = (0,
                        d.default)("quill:selection")
                          , m = function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            b(this, t),
                            this.index = e,
                            this.length = n
                        }
                          , _ = function() {
                            function t(e, n) {
                                var r = this;
                                b(this, t),
                                this.emitter = n,
                                this.scroll = e,
                                this.composing = !1,
                                this.mouseDown = !1,
                                this.root = this.scroll.domNode,
                                this.cursor = l.default.create("cursor", this),
                                this.lastRange = this.savedRange = new m(0,0),
                                this.handleComposition(),
                                this.handleDragging(),
                                this.emitter.listenDOM("selectionchange", document, function() {
                                    r.mouseDown || setTimeout(r.update.bind(r, h.default.sources.USER), 1)
                                }),
                                this.emitter.on(h.default.events.EDITOR_CHANGE, function(t, e) {
                                    t === h.default.events.TEXT_CHANGE && e.length() > 0 && r.update(h.default.sources.SILENT)
                                }),
                                this.emitter.on(h.default.events.SCROLL_BEFORE_UPDATE, function() {
                                    if (r.hasFocus()) {
                                        var t = r.getNativeRange();
                                        null != t && t.start.node !== r.cursor.textNode && r.emitter.once(h.default.events.SCROLL_UPDATE, function() {
                                            try {
                                                r.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset)
                                            } catch (t) {}
                                        })
                                    }
                                }),
                                this.emitter.on(h.default.events.SCROLL_OPTIMIZE, function(t, e) {
                                    if (e.range) {
                                        var n = e.range
                                          , o = n.startNode
                                          , i = n.startOffset
                                          , l = n.endNode
                                          , a = n.endOffset;
                                        r.setNativeRange(o, i, l, a)
                                    }
                                }),
                                this.update(h.default.sources.SILENT)
                            }
                            return o(t, [{
                                key: "handleComposition",
                                value: function() {
                                    var t = this;
                                    this.root.addEventListener("compositionstart", function() {
                                        t.composing = !0
                                    }),
                                    this.root.addEventListener("compositionend", function() {
                                        if (t.composing = !1,
                                        t.cursor.parent) {
                                            var e = t.cursor.restore();
                                            if (!e)
                                                return;
                                            setTimeout(function() {
                                                t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset)
                                            }, 1)
                                        }
                                    })
                                }
                            }, {
                                key: "handleDragging",
                                value: function() {
                                    var t = this;
                                    this.emitter.listenDOM("mousedown", document.body, function() {
                                        t.mouseDown = !0
                                    }),
                                    this.emitter.listenDOM("mouseup", document.body, function() {
                                        t.mouseDown = !1,
                                        t.update(h.default.sources.USER)
                                    })
                                }
                            }, {
                                key: "focus",
                                value: function() {
                                    this.hasFocus() || (this.root.focus(),
                                    this.setRange(this.savedRange))
                                }
                            }, {
                                key: "format",
                                value: function(t, e) {
                                    if (null == this.scroll.whitelist || this.scroll.whitelist[t]) {
                                        this.scroll.update();
                                        var n = this.getNativeRange();
                                        if (null != n && n.native.collapsed && !l.default.query(t, l.default.Scope.BLOCK)) {
                                            if (n.start.node !== this.cursor.textNode) {
                                                var r = l.default.find(n.start.node, !1);
                                                if (null == r)
                                                    return;
                                                if (r instanceof l.default.Leaf) {
                                                    var o = r.split(n.start.offset);
                                                    r.parent.insertBefore(this.cursor, o)
                                                } else
                                                    r.insertBefore(this.cursor, n.start.node);
                                                this.cursor.attach()
                                            }
                                            this.cursor.format(t, e),
                                            this.scroll.optimize(),
                                            this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length),
                                            this.update()
                                        }
                                    }
                                }
                            }, {
                                key: "getBounds",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                                      , n = this.scroll.length();
                                    t = Math.min(t, n - 1),
                                    e = Math.min(t + e, n - 1) - t;
                                    var o = void 0
                                      , i = this.scroll.leaf(t)
                                      , l = r(i, 2)
                                      , a = l[0]
                                      , s = l[1];
                                    if (null == a)
                                        return null;
                                    var u = a.position(s, !0)
                                      , c = r(u, 2);
                                    o = c[0],
                                    s = c[1];
                                    var f = document.createRange();
                                    if (e > 0) {
                                        f.setStart(o, s);
                                        var h = this.scroll.leaf(t + e)
                                          , p = r(h, 2);
                                        if (a = p[0],
                                        s = p[1],
                                        null == a)
                                            return null;
                                        var d = a.position(s, !0)
                                          , y = r(d, 2);
                                        return o = y[0],
                                        s = y[1],
                                        f.setEnd(o, s),
                                        f.getBoundingClientRect()
                                    }
                                    var v = "left"
                                      , b = void 0;
                                    return o instanceof Text ? (s < o.data.length ? (f.setStart(o, s),
                                    f.setEnd(o, s + 1)) : (f.setStart(o, s - 1),
                                    f.setEnd(o, s),
                                    v = "right"),
                                    b = f.getBoundingClientRect()) : (b = a.domNode.getBoundingClientRect(),
                                    s > 0 && (v = "right")),
                                    {
                                        bottom: b.top + b.height,
                                        height: b.height,
                                        left: b[v],
                                        right: b[v],
                                        top: b.top,
                                        width: 0
                                    }
                                }
                            }, {
                                key: "getNativeRange",
                                value: function() {
                                    var t = document.getSelection();
                                    if (null == t || t.rangeCount <= 0)
                                        return null;
                                    var e = t.getRangeAt(0);
                                    if (null == e)
                                        return null;
                                    var n = this.normalizeNative(e);
                                    return g.info("getNativeRange", n),
                                    n
                                }
                            }, {
                                key: "getRange",
                                value: function() {
                                    var t = this.getNativeRange();
                                    if (null == t)
                                        return [null, null];
                                    var e = this.normalizedToRange(t);
                                    return [e, t]
                                }
                            }, {
                                key: "hasFocus",
                                value: function() {
                                    return document.activeElement === this.root
                                }
                            }, {
                                key: "normalizedToRange",
                                value: function(t) {
                                    var e = this
                                      , n = [[t.start.node, t.start.offset]];
                                    t.native.collapsed || n.push([t.end.node, t.end.offset]);
                                    var o = n.map(function(t) {
                                        var n = r(t, 2)
                                          , o = n[0]
                                          , i = n[1]
                                          , a = l.default.find(o, !0)
                                          , s = a.offset(e.scroll);
                                        return 0 === i ? s : a instanceof l.default.Container ? s + a.length() : s + a.index(o, i)
                                    })
                                      , i = Math.min(Math.max.apply(Math, v(o)), this.scroll.length() - 1)
                                      , a = Math.min.apply(Math, [i].concat(v(o)));
                                    return new m(a,i - a)
                                }
                            }, {
                                key: "normalizeNative",
                                value: function(t) {
                                    if (!O(this.root, t.startContainer) || !t.collapsed && !O(this.root, t.endContainer))
                                        return null;
                                    var e = {
                                        start: {
                                            node: t.startContainer,
                                            offset: t.startOffset
                                        },
                                        end: {
                                            node: t.endContainer,
                                            offset: t.endOffset
                                        },
                                        native: t
                                    };
                                    return [e.start, e.end].forEach(function(t) {
                                        for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0; )
                                            if (e.childNodes.length > n)
                                                e = e.childNodes[n],
                                                n = 0;
                                            else {
                                                if (e.childNodes.length !== n)
                                                    break;
                                                e = e.lastChild,
                                                n = e instanceof Text ? e.data.length : e.childNodes.length + 1
                                            }
                                        t.node = e,
                                        t.offset = n
                                    }),
                                    e
                                }
                            }, {
                                key: "rangeToNative",
                                value: function(t) {
                                    var e = this
                                      , n = t.collapsed ? [t.index] : [t.index, t.index + t.length]
                                      , o = []
                                      , i = this.scroll.length();
                                    return n.forEach(function(t, n) {
                                        t = Math.min(i - 1, t);
                                        var l = void 0
                                          , a = e.scroll.leaf(t)
                                          , s = r(a, 2)
                                          , u = s[0]
                                          , c = s[1]
                                          , f = u.position(c, 0 !== n)
                                          , h = r(f, 2);
                                        l = h[0],
                                        c = h[1],
                                        o.push(l, c)
                                    }),
                                    o.length < 2 && (o = o.concat(o)),
                                    o
                                }
                            }, {
                                key: "scrollIntoView",
                                value: function(t) {
                                    var e = this.lastRange;
                                    if (null != e) {
                                        var n = this.getBounds(e.index, e.length);
                                        if (null != n) {
                                            var o = this.scroll.length() - 1
                                              , i = this.scroll.line(Math.min(e.index, o))
                                              , l = r(i, 1)
                                              , a = l[0]
                                              , s = a;
                                            if (e.length > 0) {
                                                var u = this.scroll.line(Math.min(e.index + e.length, o))
                                                  , c = r(u, 1);
                                                s = c[0]
                                            }
                                            if (null != a && null != s) {
                                                var f = t.getBoundingClientRect();
                                                n.top < f.top ? t.scrollTop -= f.top - n.top : n.bottom > f.bottom && (t.scrollTop += n.bottom - f.bottom)
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "setNativeRange",
                                value: function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t
                                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e
                                      , o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                    if (g.info("setNativeRange", t, e, n, r),
                                    null == t || null != this.root.parentNode && null != t.parentNode && null != n.parentNode) {
                                        var i = document.getSelection();
                                        if (null != i)
                                            if (null != t) {
                                                this.hasFocus() || this.root.focus();
                                                var l = (this.getNativeRange() || {}).native;
                                                if (null == l || o || t !== l.startContainer || e !== l.startOffset || n !== l.endContainer || r !== l.endOffset) {
                                                    "BR" == t.tagName && (e = [].indexOf.call(t.parentNode.childNodes, t),
                                                    t = t.parentNode),
                                                    "BR" == n.tagName && (r = [].indexOf.call(n.parentNode.childNodes, n),
                                                    n = n.parentNode);
                                                    var a = document.createRange();
                                                    a.setStart(t, e),
                                                    a.setEnd(n, r),
                                                    i.removeAllRanges(),
                                                    i.addRange(a)
                                                }
                                            } else
                                                i.removeAllRanges(),
                                                this.root.blur(),
                                                document.body.focus()
                                    }
                                }
                            }, {
                                key: "setRange",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.default.sources.API;
                                    if ("string" == typeof e && (n = e,
                                    e = !1),
                                    g.info("setRange", t),
                                    null != t) {
                                        var r = this.rangeToNative(t);
                                        this.setNativeRange.apply(this, v(r).concat([e]))
                                    } else
                                        this.setNativeRange(null);
                                    this.update(n)
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.default.sources.USER
                                      , e = this.lastRange
                                      , n = this.getRange()
                                      , o = r(n, 2)
                                      , i = o[0]
                                      , l = o[1];
                                    if (this.lastRange = i,
                                    null != this.lastRange && (this.savedRange = this.lastRange),
                                    !(0,
                                    c.default)(e, this.lastRange)) {
                                        var a;
                                        !this.composing && null != l && l.native.collapsed && l.start.node !== this.cursor.textNode && this.cursor.restore();
                                        var u, f = [h.default.events.SELECTION_CHANGE, (0,
                                        s.default)(this.lastRange), (0,
                                        s.default)(e), t];
                                        (a = this.emitter).emit.apply(a, [h.default.events.EDITOR_CHANGE].concat(f)),
                                        t !== h.default.sources.SILENT && (u = this.emitter).emit.apply(u, f)
                                    }
                                }
                            }]),
                            t
                        }();
                        function O(t, e) {
                            try {
                                e.parentNode
                            } catch (t) {
                                return !1
                            }
                            return e instanceof Text && (e = e.parentNode),
                            t.contains(e)
                        }
                        e.Range = m,
                        e.default = _
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = n(0), l = (r = i) && r.__esModule ? r : {
                            default: r
                        }, a = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "insertInto",
                                value: function(t, n) {
                                    0 === t.children.length ? function t(e, n, r) {
                                        null === e && (e = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === o) {
                                            var i = Object.getPrototypeOf(e);
                                            return null === i ? void 0 : t(i, n, r)
                                        }
                                        if ("value"in o)
                                            return o.value;
                                        var l = o.get;
                                        return void 0 !== l ? l.call(r) : void 0
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertInto", this).call(this, t, n) : this.remove()
                                }
                            }, {
                                key: "length",
                                value: function() {
                                    return 0
                                }
                            }, {
                                key: "value",
                                value: function() {
                                    return ""
                                }
                            }], [{
                                key: "value",
                                value: function() {}
                            }]),
                            e
                        }(l.default.Embed);
                        a.blotName = "break",
                        a.tagName = "BR",
                        e.default = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = n(44)
                          , l = n(30)
                          , a = n(1)
                          , s = function(t) {
                            function e(e) {
                                var n = t.call(this, e) || this;
                                return n.build(),
                                n
                            }
                            return o(e, t),
                            e.prototype.appendChild = function(t) {
                                this.insertBefore(t)
                            }
                            ,
                            e.prototype.attach = function() {
                                t.prototype.attach.call(this),
                                this.children.forEach(function(t) {
                                    t.attach()
                                })
                            }
                            ,
                            e.prototype.build = function() {
                                var t = this;
                                this.children = new i.default,
                                [].slice.call(this.domNode.childNodes).reverse().forEach(function(e) {
                                    try {
                                        var n = u(e);
                                        t.insertBefore(n, t.children.head || void 0)
                                    } catch (t) {
                                        if (t instanceof a.ParchmentError)
                                            return;
                                        throw t
                                    }
                                })
                            }
                            ,
                            e.prototype.deleteAt = function(t, e) {
                                if (0 === t && e === this.length())
                                    return this.remove();
                                this.children.forEachAt(t, e, function(t, e, n) {
                                    t.deleteAt(e, n)
                                })
                            }
                            ,
                            e.prototype.descendant = function(t, n) {
                                var r = this.children.find(n)
                                  , o = r[0]
                                  , i = r[1];
                                return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ? o.descendant(t, i) : [null, -1]
                            }
                            ,
                            e.prototype.descendants = function(t, n, r) {
                                void 0 === n && (n = 0),
                                void 0 === r && (r = Number.MAX_VALUE);
                                var o = []
                                  , i = r;
                                return this.children.forEachAt(n, r, function(n, r, l) {
                                    (null == t.blotName && t(n) || null != t.blotName && n instanceof t) && o.push(n),
                                    n instanceof e && (o = o.concat(n.descendants(t, r, i))),
                                    i -= l
                                }),
                                o
                            }
                            ,
                            e.prototype.detach = function() {
                                this.children.forEach(function(t) {
                                    t.detach()
                                }),
                                t.prototype.detach.call(this)
                            }
                            ,
                            e.prototype.formatAt = function(t, e, n, r) {
                                this.children.forEachAt(t, e, function(t, e, o) {
                                    t.formatAt(e, o, n, r)
                                })
                            }
                            ,
                            e.prototype.insertAt = function(t, e, n) {
                                var r = this.children.find(t)
                                  , o = r[0]
                                  , i = r[1];
                                if (o)
                                    o.insertAt(i, e, n);
                                else {
                                    var l = null == n ? a.create("text", e) : a.create(e, n);
                                    this.appendChild(l)
                                }
                            }
                            ,
                            e.prototype.insertBefore = function(t, e) {
                                if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function(e) {
                                    return t instanceof e
                                }))
                                    throw new a.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);
                                t.insertInto(this, e)
                            }
                            ,
                            e.prototype.length = function() {
                                return this.children.reduce(function(t, e) {
                                    return t + e.length()
                                }, 0)
                            }
                            ,
                            e.prototype.moveChildren = function(t, e) {
                                this.children.forEach(function(n) {
                                    t.insertBefore(n, e)
                                })
                            }
                            ,
                            e.prototype.optimize = function(e) {
                                if (t.prototype.optimize.call(this, e),
                                0 === this.children.length)
                                    if (null != this.statics.defaultChild) {
                                        var n = a.create(this.statics.defaultChild);
                                        this.appendChild(n),
                                        n.optimize(e)
                                    } else
                                        this.remove()
                            }
                            ,
                            e.prototype.path = function(t, n) {
                                void 0 === n && (n = !1);
                                var r = this.children.find(t, n)
                                  , o = r[0]
                                  , i = r[1]
                                  , l = [[this, t]];
                                return o instanceof e ? l.concat(o.path(i, n)) : (null != o && l.push([o, i]),
                                l)
                            }
                            ,
                            e.prototype.removeChild = function(t) {
                                this.children.remove(t)
                            }
                            ,
                            e.prototype.replace = function(n) {
                                n instanceof e && n.moveChildren(this),
                                t.prototype.replace.call(this, n)
                            }
                            ,
                            e.prototype.split = function(t, e) {
                                if (void 0 === e && (e = !1),
                                !e) {
                                    if (0 === t)
                                        return this;
                                    if (t === this.length())
                                        return this.next
                                }
                                var n = this.clone();
                                return this.parent.insertBefore(n, this.next),
                                this.children.forEachAt(t, this.length(), function(t, r, o) {
                                    t = t.split(r, e),
                                    n.appendChild(t)
                                }),
                                n
                            }
                            ,
                            e.prototype.unwrap = function() {
                                this.moveChildren(this.parent, this.next),
                                this.remove()
                            }
                            ,
                            e.prototype.update = function(t, e) {
                                var n = this
                                  , r = []
                                  , o = [];
                                t.forEach(function(t) {
                                    t.target === n.domNode && "childList" === t.type && (r.push.apply(r, t.addedNodes),
                                    o.push.apply(o, t.removedNodes))
                                }),
                                o.forEach(function(t) {
                                    if (!(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                                        var e = a.find(t);
                                        null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== n.domNode || e.detach())
                                    }
                                }),
                                r.filter(function(t) {
                                    return t.parentNode == n.domNode
                                }).sort(function(t, e) {
                                    return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
                                }).forEach(function(t) {
                                    var e = null;
                                    null != t.nextSibling && (e = a.find(t.nextSibling));
                                    var r = u(t);
                                    r.next == e && null != r.next || (null != r.parent && r.parent.removeChild(n),
                                    n.insertBefore(r, e || void 0))
                                })
                            }
                            ,
                            e
                        }(l.default);
                        function u(t) {
                            var e = a.find(t);
                            if (null == e)
                                try {
                                    e = a.create(t)
                                } catch (n) {
                                    e = a.create(a.Scope.INLINE),
                                    [].slice.call(t.childNodes).forEach(function(t) {
                                        e.domNode.appendChild(t)
                                    }),
                                    t.parentNode && t.parentNode.replaceChild(e.domNode, t),
                                    e.attach()
                                }
                            return e
                        }
                        e.default = s
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = n(12)
                          , l = n(31)
                          , a = n(17)
                          , s = n(1)
                          , u = function(t) {
                            function e(e) {
                                var n = t.call(this, e) || this;
                                return n.attributes = new l.default(n.domNode),
                                n
                            }
                            return o(e, t),
                            e.formats = function(t) {
                                return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
                            }
                            ,
                            e.prototype.format = function(t, e) {
                                var n = s.query(t);
                                n instanceof i.default ? this.attributes.attribute(n, e) : e && (null == n || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e))
                            }
                            ,
                            e.prototype.formats = function() {
                                var t = this.attributes.values()
                                  , e = this.statics.formats(this.domNode);
                                return null != e && (t[this.statics.blotName] = e),
                                t
                            }
                            ,
                            e.prototype.replaceWith = function(e, n) {
                                var r = t.prototype.replaceWith.call(this, e, n);
                                return this.attributes.copy(r),
                                r
                            }
                            ,
                            e.prototype.update = function(e, n) {
                                var r = this;
                                t.prototype.update.call(this, e, n),
                                e.some(function(t) {
                                    return t.target === r.domNode && "attributes" === t.type
                                }) && this.attributes.build()
                            }
                            ,
                            e.prototype.wrap = function(n, r) {
                                var o = t.prototype.wrap.call(this, n, r);
                                return o instanceof e && o.statics.scope === this.statics.scope && this.attributes.move(o),
                                o
                            }
                            ,
                            e
                        }(a.default);
                        e.default = u
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = n(30)
                          , l = n(1)
                          , a = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return o(e, t),
                            e.value = function(t) {
                                return !0
                            }
                            ,
                            e.prototype.index = function(t, e) {
                                return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1
                            }
                            ,
                            e.prototype.position = function(t, e) {
                                var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                                return t > 0 && (n += 1),
                                [this.parent.domNode, n]
                            }
                            ,
                            e.prototype.value = function() {
                                return (t = {})[this.statics.blotName] = this.statics.value(this.domNode) || !0,
                                t;
                                var t
                            }
                            ,
                            e.scope = l.Scope.INLINE_BLOT,
                            e
                        }(i.default);
                        e.default = a
                    }
                    , function(t, e, n) {
                        var r = n(11)
                          , o = n(3)
                          , i = {
                            attributes: {
                                compose: function(t, e, n) {
                                    "object" != typeof t && (t = {}),
                                    "object" != typeof e && (e = {});
                                    var r = o(!0, {}, e);
                                    for (var i in n || (r = Object.keys(r).reduce(function(t, e) {
                                        return null != r[e] && (t[e] = r[e]),
                                        t
                                    }, {})),
                                    t)
                                        void 0 !== t[i] && void 0 === e[i] && (r[i] = t[i]);
                                    return Object.keys(r).length > 0 ? r : void 0
                                },
                                diff: function(t, e) {
                                    "object" != typeof t && (t = {}),
                                    "object" != typeof e && (e = {});
                                    var n = Object.keys(t).concat(Object.keys(e)).reduce(function(n, o) {
                                        return r(t[o], e[o]) || (n[o] = void 0 === e[o] ? null : e[o]),
                                        n
                                    }, {});
                                    return Object.keys(n).length > 0 ? n : void 0
                                },
                                transform: function(t, e, n) {
                                    if ("object" != typeof t)
                                        return e;
                                    if ("object" == typeof e) {
                                        if (!n)
                                            return e;
                                        var r = Object.keys(e).reduce(function(n, r) {
                                            return void 0 === t[r] && (n[r] = e[r]),
                                            n
                                        }, {});
                                        return Object.keys(r).length > 0 ? r : void 0
                                    }
                                }
                            },
                            iterator: function(t) {
                                return new l(t)
                            },
                            length: function(t) {
                                return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1
                            }
                        };
                        function l(t) {
                            this.ops = t,
                            this.index = 0,
                            this.offset = 0
                        }
                        l.prototype.hasNext = function() {
                            return this.peekLength() < 1 / 0
                        }
                        ,
                        l.prototype.next = function(t) {
                            t || (t = 1 / 0);
                            var e = this.ops[this.index];
                            if (e) {
                                var n = this.offset
                                  , r = i.length(e);
                                if (t >= r - n ? (t = r - n,
                                this.index += 1,
                                this.offset = 0) : this.offset += t,
                                "number" == typeof e.delete)
                                    return {
                                        delete: t
                                    };
                                var o = {};
                                return e.attributes && (o.attributes = e.attributes),
                                "number" == typeof e.retain ? o.retain = t : "string" == typeof e.insert ? o.insert = e.insert.substr(n, t) : o.insert = e.insert,
                                o
                            }
                            return {
                                retain: 1 / 0
                            }
                        }
                        ,
                        l.prototype.peek = function() {
                            return this.ops[this.index]
                        }
                        ,
                        l.prototype.peekLength = function() {
                            return this.ops[this.index] ? i.length(this.ops[this.index]) - this.offset : 1 / 0
                        }
                        ,
                        l.prototype.peekType = function() {
                            return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
                        }
                        ,
                        t.exports = i
                    }
                    , function(t, n) {
                        var r = function() {
                            "use strict";
                            function t(t, e) {
                                return null != e && t instanceof e
                            }
                            var n, r, o;
                            try {
                                n = Map
                            } catch (t) {
                                n = function() {}
                            }
                            try {
                                r = Set
                            } catch (t) {
                                r = function() {}
                            }
                            try {
                                o = Promise
                            } catch (t) {
                                o = function() {}
                            }
                            function i(l, s, u, c, f) {
                                "object" == typeof s && (u = s.depth,
                                c = s.prototype,
                                f = s.includeNonEnumerable,
                                s = s.circular);
                                var h = []
                                  , p = []
                                  , d = void 0 !== e;
                                return void 0 === s && (s = !0),
                                void 0 === u && (u = 1 / 0),
                                function l(u, y) {
                                    if (null === u)
                                        return null;
                                    if (0 === y)
                                        return u;
                                    var v, b;
                                    if ("object" != typeof u)
                                        return u;
                                    if (t(u, n))
                                        v = new n;
                                    else if (t(u, r))
                                        v = new r;
                                    else if (t(u, o))
                                        v = new o(function(t, e) {
                                            u.then(function(e) {
                                                t(l(e, y - 1))
                                            }, function(t) {
                                                e(l(t, y - 1))
                                            })
                                        }
                                        );
                                    else if (i.__isArray(u))
                                        v = [];
                                    else if (i.__isRegExp(u))
                                        v = new RegExp(u.source,a(u)),
                                        u.lastIndex && (v.lastIndex = u.lastIndex);
                                    else if (i.__isDate(u))
                                        v = new Date(u.getTime());
                                    else {
                                        if (d && e.isBuffer(u))
                                            return v = new e(u.length),
                                            u.copy(v),
                                            v;
                                        t(u, Error) ? v = Object.create(u) : void 0 === c ? (b = Object.getPrototypeOf(u),
                                        v = Object.create(b)) : (v = Object.create(c),
                                        b = c)
                                    }
                                    if (s) {
                                        var g = h.indexOf(u);
                                        if (-1 != g)
                                            return p[g];
                                        h.push(u),
                                        p.push(v)
                                    }
                                    for (var m in t(u, n) && u.forEach(function(t, e) {
                                        var n = l(e, y - 1)
                                          , r = l(t, y - 1);
                                        v.set(n, r)
                                    }),
                                    t(u, r) && u.forEach(function(t) {
                                        var e = l(t, y - 1);
                                        v.add(e)
                                    }),
                                    u) {
                                        var _;
                                        b && (_ = Object.getOwnPropertyDescriptor(b, m)),
                                        _ && null == _.set || (v[m] = l(u[m], y - 1))
                                    }
                                    if (Object.getOwnPropertySymbols)
                                        for (var O = Object.getOwnPropertySymbols(u), m = 0; m < O.length; m++) {
                                            var w = O[m]
                                              , E = Object.getOwnPropertyDescriptor(u, w);
                                            (!E || E.enumerable || f) && (v[w] = l(u[w], y - 1),
                                            E.enumerable || Object.defineProperty(v, w, {
                                                enumerable: !1
                                            }))
                                        }
                                    if (f)
                                        for (var x = Object.getOwnPropertyNames(u), m = 0; m < x.length; m++) {
                                            var k = x[m]
                                              , E = Object.getOwnPropertyDescriptor(u, k);
                                            E && E.enumerable || (v[k] = l(u[k], y - 1),
                                            Object.defineProperty(v, k, {
                                                enumerable: !1
                                            }))
                                        }
                                    return v
                                }(l, u)
                            }
                            function l(t) {
                                return Object.prototype.toString.call(t)
                            }
                            function a(t) {
                                var e = "";
                                return t.global && (e += "g"),
                                t.ignoreCase && (e += "i"),
                                t.multiline && (e += "m"),
                                e
                            }
                            return i.clonePrototype = function(t) {
                                if (null === t)
                                    return null;
                                var e = function() {};
                                return e.prototype = t,
                                new e
                            }
                            ,
                            i.__objToStr = l,
                            i.__isDate = function(t) {
                                return "object" == typeof t && "[object Date]" === l(t)
                            }
                            ,
                            i.__isArray = function(t) {
                                return "object" == typeof t && "[object Array]" === l(t)
                            }
                            ,
                            i.__isRegExp = function(t) {
                                return "object" == typeof t && "[object RegExp]" === l(t)
                            }
                            ,
                            i.__getRegExpFlags = a,
                            i
                        }();
                        "object" == typeof t && t.exports && (t.exports = r)
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = function(t, e) {
                            if (Array.isArray(t))
                                return t;
                            if (Symbol.iterator in Object(t))
                                return function(t, e) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value),
                                        !e || n.length !== e); r = !0)
                                            ;
                                    } catch (t) {
                                        o = !0,
                                        i = t
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                          , o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , i = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }
                          , l = n(0)
                          , a = g(l)
                          , s = n(8)
                          , u = g(s)
                          , c = n(4)
                          , f = g(c)
                          , h = n(16)
                          , p = g(h)
                          , d = n(13)
                          , y = g(d)
                          , v = n(25)
                          , b = g(v);
                        function g(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function m(t) {
                            return t instanceof f.default || t instanceof c.BlockEmbed
                        }
                        var _ = function(t) {
                            function e(t, n) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var r = function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return r.emitter = n.emitter,
                                Array.isArray(n.whitelist) && (r.whitelist = n.whitelist.reduce(function(t, e) {
                                    return t[e] = !0,
                                    t
                                }, {})),
                                r.domNode.addEventListener("DOMNodeInserted", function() {}),
                                r.optimize(),
                                r.enable(),
                                r
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "batchStart",
                                value: function() {
                                    this.batch = !0
                                }
                            }, {
                                key: "batchEnd",
                                value: function() {
                                    this.batch = !1,
                                    this.optimize()
                                }
                            }, {
                                key: "deleteAt",
                                value: function(t, n) {
                                    var o = this.line(t)
                                      , l = r(o, 2)
                                      , a = l[0]
                                      , s = l[1]
                                      , u = this.line(t + n)
                                      , f = r(u, 1)
                                      , h = f[0];
                                    if (i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n),
                                    null != h && a !== h && s > 0) {
                                        if (a instanceof c.BlockEmbed || h instanceof c.BlockEmbed)
                                            return void this.optimize();
                                        if (a instanceof y.default) {
                                            var d = a.newlineIndex(a.length(), !0);
                                            if (d > -1 && (a = a.split(d + 1)) === h)
                                                return void this.optimize()
                                        } else if (h instanceof y.default) {
                                            var v = h.newlineIndex(0);
                                            v > -1 && h.split(v + 1)
                                        }
                                        var b = h.children.head instanceof p.default ? null : h.children.head;
                                        a.moveChildren(h, b),
                                        a.remove()
                                    }
                                    this.optimize()
                                }
                            }, {
                                key: "enable",
                                value: function() {
                                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                    this.domNode.setAttribute("contenteditable", t)
                                }
                            }, {
                                key: "formatAt",
                                value: function(t, n, r, o) {
                                    (null == this.whitelist || this.whitelist[r]) && (i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o),
                                    this.optimize())
                                }
                            }, {
                                key: "insertAt",
                                value: function(t, n, r) {
                                    if (null == r || null == this.whitelist || this.whitelist[n]) {
                                        if (t >= this.length())
                                            if (null == r || null == a.default.query(n, a.default.Scope.BLOCK)) {
                                                var o = a.default.create(this.statics.defaultChild);
                                                this.appendChild(o),
                                                null == r && n.endsWith("\n") && (n = n.slice(0, -1)),
                                                o.insertAt(0, n, r)
                                            } else {
                                                var l = a.default.create(n, r);
                                                this.appendChild(l)
                                            }
                                        else
                                            i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
                                        this.optimize()
                                    }
                                }
                            }, {
                                key: "insertBefore",
                                value: function(t, n) {
                                    if (t.statics.scope === a.default.Scope.INLINE_BLOT) {
                                        var r = a.default.create(this.statics.defaultChild);
                                        r.appendChild(t),
                                        t = r
                                    }
                                    i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n)
                                }
                            }, {
                                key: "leaf",
                                value: function(t) {
                                    return this.path(t).pop() || [null, -1]
                                }
                            }, {
                                key: "line",
                                value: function(t) {
                                    return t === this.length() ? this.line(t - 1) : this.descendant(m, t)
                                }
                            }, {
                                key: "lines",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                                    return function t(e, n, r) {
                                        var o = []
                                          , i = r;
                                        return e.children.forEachAt(n, r, function(e, n, r) {
                                            m(e) ? o.push(e) : e instanceof a.default.Container && (o = o.concat(t(e, n, i))),
                                            i -= r
                                        }),
                                        o
                                    }(this, t, e)
                                }
                            }, {
                                key: "optimize",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    !0 !== this.batch && (i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t, n),
                                    t.length > 0 && this.emitter.emit(u.default.events.SCROLL_OPTIMIZE, t, n))
                                }
                            }, {
                                key: "path",
                                value: function(t) {
                                    return i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t).slice(1)
                                }
                            }, {
                                key: "update",
                                value: function(t) {
                                    if (!0 !== this.batch) {
                                        var n = u.default.sources.USER;
                                        "string" == typeof t && (n = t),
                                        Array.isArray(t) || (t = this.observer.takeRecords()),
                                        t.length > 0 && this.emitter.emit(u.default.events.SCROLL_BEFORE_UPDATE, n, t),
                                        i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t.concat([])),
                                        t.length > 0 && this.emitter.emit(u.default.events.SCROLL_UPDATE, n, t)
                                    }
                                }
                            }]),
                            e
                        }(a.default.Scroll);
                        _.blotName = "scroll",
                        _.className = "ql-editor",
                        _.tagName = "DIV",
                        _.defaultChild = "block",
                        _.allowedChildren = [f.default, c.BlockEmbed, b.default],
                        e.default = _
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.SHORTKEY = e.default = void 0;
                        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        }
                        : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }
                          , o = function(t, e) {
                            if (Array.isArray(t))
                                return t;
                            if (Symbol.iterator in Object(t))
                                return function(t, e) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value),
                                        !e || n.length !== e); r = !0)
                                            ;
                                    } catch (t) {
                                        o = !0,
                                        i = t
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                          , i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , l = n(21)
                          , a = x(l)
                          , s = n(11)
                          , u = x(s)
                          , c = n(3)
                          , f = x(c)
                          , h = n(2)
                          , p = x(h)
                          , d = n(20)
                          , y = x(d)
                          , v = n(0)
                          , b = x(v)
                          , g = n(5)
                          , m = x(g)
                          , _ = n(10)
                          , O = x(_)
                          , w = n(9)
                          , E = x(w);
                        function x(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function k(t, e, n) {
                            return e in t ? Object.defineProperty(t, e, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = n,
                            t
                        }
                        var A = (0,
                        O.default)("quill:keyboard")
                          , N = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey"
                          , j = function(t) {
                            function e(t, n) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var r = function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return r.bindings = {},
                                Object.keys(r.options.bindings).forEach(function(e) {
                                    ("list autofill" !== e || null == t.scroll.whitelist || t.scroll.whitelist.list) && r.options.bindings[e] && r.addBinding(r.options.bindings[e])
                                }),
                                r.addBinding({
                                    key: e.keys.ENTER,
                                    shiftKey: null
                                }, C),
                                r.addBinding({
                                    key: e.keys.ENTER,
                                    metaKey: null,
                                    ctrlKey: null,
                                    altKey: null
                                }, function() {}),
                                /Firefox/i.test(navigator.userAgent) ? (r.addBinding({
                                    key: e.keys.BACKSPACE
                                }, {
                                    collapsed: !0
                                }, P),
                                r.addBinding({
                                    key: e.keys.DELETE
                                }, {
                                    collapsed: !0
                                }, S)) : (r.addBinding({
                                    key: e.keys.BACKSPACE
                                }, {
                                    collapsed: !0,
                                    prefix: /^.?$/
                                }, P),
                                r.addBinding({
                                    key: e.keys.DELETE
                                }, {
                                    collapsed: !0,
                                    suffix: /^.?$/
                                }, S)),
                                r.addBinding({
                                    key: e.keys.BACKSPACE
                                }, {
                                    collapsed: !1
                                }, q),
                                r.addBinding({
                                    key: e.keys.DELETE
                                }, {
                                    collapsed: !1
                                }, q),
                                r.addBinding({
                                    key: e.keys.BACKSPACE,
                                    altKey: null,
                                    ctrlKey: null,
                                    metaKey: null,
                                    shiftKey: null
                                }, {
                                    collapsed: !0,
                                    offset: 0
                                }, P),
                                r.listen(),
                                r
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            i(e, null, [{
                                key: "match",
                                value: function(t, e) {
                                    return e = M(e),
                                    !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(n) {
                                        return !!e[n] !== t[n] && null !== e[n]
                                    }) && e.key === (t.which || t.keyCode)
                                }
                            }]),
                            i(e, [{
                                key: "addBinding",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                                      , r = M(t);
                                    if (null == r || null == r.key)
                                        return A.warn("Attempted to add invalid keyboard binding", r);
                                    "function" == typeof e && (e = {
                                        handler: e
                                    }),
                                    "function" == typeof n && (n = {
                                        handler: n
                                    }),
                                    r = (0,
                                    f.default)(r, e, n),
                                    this.bindings[r.key] = this.bindings[r.key] || [],
                                    this.bindings[r.key].push(r)
                                }
                            }, {
                                key: "listen",
                                value: function() {
                                    var t = this;
                                    this.quill.root.addEventListener("keydown", function(n) {
                                        if (!n.defaultPrevented) {
                                            var i = n.which || n.keyCode
                                              , l = (t.bindings[i] || []).filter(function(t) {
                                                return e.match(n, t)
                                            });
                                            if (0 !== l.length) {
                                                var a = t.quill.getSelection();
                                                if (null != a && t.quill.hasFocus()) {
                                                    var s = t.quill.getLine(a.index)
                                                      , c = o(s, 2)
                                                      , f = c[0]
                                                      , h = c[1]
                                                      , p = t.quill.getLeaf(a.index)
                                                      , d = o(p, 2)
                                                      , y = d[0]
                                                      , v = d[1]
                                                      , g = 0 === a.length ? [y, v] : t.quill.getLeaf(a.index + a.length)
                                                      , m = o(g, 2)
                                                      , _ = m[0]
                                                      , O = m[1]
                                                      , w = y instanceof b.default.Text ? y.value().slice(0, v) : ""
                                                      , E = _ instanceof b.default.Text ? _.value().slice(O) : ""
                                                      , x = {
                                                        collapsed: 0 === a.length,
                                                        empty: 0 === a.length && f.length() <= 1,
                                                        format: t.quill.getFormat(a),
                                                        offset: h,
                                                        prefix: w,
                                                        suffix: E
                                                    }
                                                      , k = l.some(function(e) {
                                                        if (null != e.collapsed && e.collapsed !== x.collapsed)
                                                            return !1;
                                                        if (null != e.empty && e.empty !== x.empty)
                                                            return !1;
                                                        if (null != e.offset && e.offset !== x.offset)
                                                            return !1;
                                                        if (Array.isArray(e.format)) {
                                                            if (e.format.every(function(t) {
                                                                return null == x.format[t]
                                                            }))
                                                                return !1
                                                        } else if ("object" === r(e.format) && !Object.keys(e.format).every(function(t) {
                                                            return !0 === e.format[t] ? null != x.format[t] : !1 === e.format[t] ? null == x.format[t] : (0,
                                                            u.default)(e.format[t], x.format[t])
                                                        }))
                                                            return !1;
                                                        return !(null != e.prefix && !e.prefix.test(x.prefix) || null != e.suffix && !e.suffix.test(x.suffix) || !0 === e.handler.call(t, a, x))
                                                    });
                                                    k && n.preventDefault()
                                                }
                                            }
                                        }
                                    })
                                }
                            }]),
                            e
                        }(E.default);
                        function T(t, e) {
                            var n, r = t === j.keys.LEFT ? "prefix" : "suffix";
                            return k(n = {
                                key: t,
                                shiftKey: e,
                                altKey: null
                            }, r, /^$/),
                            k(n, "handler", function(n) {
                                var r = n.index;
                                t === j.keys.RIGHT && (r += n.length + 1);
                                var i = this.quill.getLeaf(r)
                                  , l = o(i, 1)
                                  , a = l[0];
                                return !(a instanceof b.default.Embed && (t === j.keys.LEFT ? e ? this.quill.setSelection(n.index - 1, n.length + 1, m.default.sources.USER) : this.quill.setSelection(n.index - 1, m.default.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, m.default.sources.USER) : this.quill.setSelection(n.index + n.length + 1, m.default.sources.USER),
                                1))
                            }),
                            n
                        }
                        function P(t, e) {
                            if (!(0 === t.index || this.quill.getLength() <= 1)) {
                                var n = this.quill.getLine(t.index)
                                  , r = o(n, 1)
                                  , i = r[0]
                                  , l = {};
                                if (0 === e.offset) {
                                    var a = this.quill.getLine(t.index - 1)
                                      , s = o(a, 1)
                                      , u = s[0];
                                    if (null != u && u.length() > 1) {
                                        var c = i.formats()
                                          , f = this.quill.getFormat(t.index - 1, 1);
                                        l = y.default.attributes.diff(c, f) || {}
                                    }
                                }
                                var h = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
                                this.quill.deleteText(t.index - h, h, m.default.sources.USER),
                                Object.keys(l).length > 0 && this.quill.formatLine(t.index - h, h, l, m.default.sources.USER),
                                this.quill.focus()
                            }
                        }
                        function S(t, e) {
                            var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
                            if (!(t.index >= this.quill.getLength() - n)) {
                                var r = {}
                                  , i = 0
                                  , l = this.quill.getLine(t.index)
                                  , a = o(l, 1)
                                  , s = a[0];
                                if (e.offset >= s.length() - 1) {
                                    var u = this.quill.getLine(t.index + 1)
                                      , c = o(u, 1)
                                      , f = c[0];
                                    if (f) {
                                        var h = s.formats()
                                          , p = this.quill.getFormat(t.index, 1);
                                        r = y.default.attributes.diff(h, p) || {},
                                        i = f.length()
                                    }
                                }
                                this.quill.deleteText(t.index, n, m.default.sources.USER),
                                Object.keys(r).length > 0 && this.quill.formatLine(t.index + i - 1, n, r, m.default.sources.USER)
                            }
                        }
                        function q(t) {
                            var e = this.quill.getLines(t)
                              , n = {};
                            if (e.length > 1) {
                                var r = e[0].formats()
                                  , o = e[e.length - 1].formats();
                                n = y.default.attributes.diff(o, r) || {}
                            }
                            this.quill.deleteText(t, m.default.sources.USER),
                            Object.keys(n).length > 0 && this.quill.formatLine(t.index, 1, n, m.default.sources.USER),
                            this.quill.setSelection(t.index, m.default.sources.SILENT),
                            this.quill.focus()
                        }
                        function C(t, e) {
                            var n = this;
                            t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
                            var r = Object.keys(e.format).reduce(function(t, n) {
                                return b.default.query(n, b.default.Scope.BLOCK) && !Array.isArray(e.format[n]) && (t[n] = e.format[n]),
                                t
                            }, {});
                            this.quill.insertText(t.index, "\n", r, m.default.sources.USER),
                            this.quill.setSelection(t.index + 1, m.default.sources.SILENT),
                            this.quill.focus(),
                            Object.keys(e.format).forEach(function(t) {
                                null == r[t] && (Array.isArray(e.format[t]) || "link" !== t && n.quill.format(t, e.format[t], m.default.sources.USER))
                            })
                        }
                        function L(t) {
                            return {
                                key: j.keys.TAB,
                                shiftKey: !t,
                                format: {
                                    "code-block": !0
                                },
                                handler: function(e) {
                                    var n = b.default.query("code-block")
                                      , r = e.index
                                      , i = e.length
                                      , l = this.quill.scroll.descendant(n, r)
                                      , a = o(l, 2)
                                      , s = a[0]
                                      , u = a[1];
                                    if (null != s) {
                                        var c = this.quill.getIndex(s)
                                          , f = s.newlineIndex(u, !0) + 1
                                          , h = s.newlineIndex(c + u + i)
                                          , p = s.domNode.textContent.slice(f, h).split("\n");
                                        u = 0,
                                        p.forEach(function(e, o) {
                                            t ? (s.insertAt(f + u, n.TAB),
                                            u += n.TAB.length,
                                            0 === o ? r += n.TAB.length : i += n.TAB.length) : e.startsWith(n.TAB) && (s.deleteAt(f + u, n.TAB.length),
                                            u -= n.TAB.length,
                                            0 === o ? r -= n.TAB.length : i -= n.TAB.length),
                                            u += e.length + 1
                                        }),
                                        this.quill.update(m.default.sources.USER),
                                        this.quill.setSelection(r, i, m.default.sources.SILENT)
                                    }
                                }
                            }
                        }
                        function R(t) {
                            return {
                                key: t[0].toUpperCase(),
                                shortKey: !0,
                                handler: function(e, n) {
                                    this.quill.format(t, !n.format[t], m.default.sources.USER)
                                }
                            }
                        }
                        function M(t) {
                            if ("string" == typeof t || "number" == typeof t)
                                return M({
                                    key: t
                                });
                            if ("object" === (void 0 === t ? "undefined" : r(t)) && (t = (0,
                            a.default)(t, !1)),
                            "string" == typeof t.key)
                                if (null != j.keys[t.key.toUpperCase()])
                                    t.key = j.keys[t.key.toUpperCase()];
                                else {
                                    if (1 !== t.key.length)
                                        return null;
                                    t.key = t.key.toUpperCase().charCodeAt(0)
                                }
                            return t.shortKey && (t[N] = t.shortKey,
                            delete t.shortKey),
                            t
                        }
                        j.keys = {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            ESCAPE: 27,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            DELETE: 46
                        },
                        j.DEFAULTS = {
                            bindings: {
                                bold: R("bold"),
                                italic: R("italic"),
                                underline: R("underline"),
                                indent: {
                                    key: j.keys.TAB,
                                    format: ["blockquote", "indent", "list"],
                                    handler: function(t, e) {
                                        if (e.collapsed && 0 !== e.offset)
                                            return !0;
                                        this.quill.format("indent", "+1", m.default.sources.USER)
                                    }
                                },
                                outdent: {
                                    key: j.keys.TAB,
                                    shiftKey: !0,
                                    format: ["blockquote", "indent", "list"],
                                    handler: function(t, e) {
                                        if (e.collapsed && 0 !== e.offset)
                                            return !0;
                                        this.quill.format("indent", "-1", m.default.sources.USER)
                                    }
                                },
                                "outdent backspace": {
                                    key: j.keys.BACKSPACE,
                                    collapsed: !0,
                                    shiftKey: null,
                                    metaKey: null,
                                    ctrlKey: null,
                                    altKey: null,
                                    format: ["indent", "list"],
                                    offset: 0,
                                    handler: function(t, e) {
                                        null != e.format.indent ? this.quill.format("indent", "-1", m.default.sources.USER) : null != e.format.list && this.quill.format("list", !1, m.default.sources.USER)
                                    }
                                },
                                "indent code-block": L(!0),
                                "outdent code-block": L(!1),
                                "remove tab": {
                                    key: j.keys.TAB,
                                    shiftKey: !0,
                                    collapsed: !0,
                                    prefix: /\t$/,
                                    handler: function(t) {
                                        this.quill.deleteText(t.index - 1, 1, m.default.sources.USER)
                                    }
                                },
                                tab: {
                                    key: j.keys.TAB,
                                    handler: function(t) {
                                        this.quill.history.cutoff();
                                        var e = (new p.default).retain(t.index).delete(t.length).insert("\t");
                                        this.quill.updateContents(e, m.default.sources.USER),
                                        this.quill.history.cutoff(),
                                        this.quill.setSelection(t.index + 1, m.default.sources.SILENT)
                                    }
                                },
                                "list empty enter": {
                                    key: j.keys.ENTER,
                                    collapsed: !0,
                                    format: ["list"],
                                    empty: !0,
                                    handler: function(t, e) {
                                        this.quill.format("list", !1, m.default.sources.USER),
                                        e.format.indent && this.quill.format("indent", !1, m.default.sources.USER)
                                    }
                                },
                                "checklist enter": {
                                    key: j.keys.ENTER,
                                    collapsed: !0,
                                    format: {
                                        list: "checked"
                                    },
                                    handler: function(t) {
                                        var e = this.quill.getLine(t.index)
                                          , n = o(e, 2)
                                          , r = n[0]
                                          , i = n[1]
                                          , l = (0,
                                        f.default)({}, r.formats(), {
                                            list: "checked"
                                        })
                                          , a = (new p.default).retain(t.index).insert("\n", l).retain(r.length() - i - 1).retain(1, {
                                            list: "unchecked"
                                        });
                                        this.quill.updateContents(a, m.default.sources.USER),
                                        this.quill.setSelection(t.index + 1, m.default.sources.SILENT),
                                        this.quill.scrollIntoView()
                                    }
                                },
                                "header enter": {
                                    key: j.keys.ENTER,
                                    collapsed: !0,
                                    format: ["header"],
                                    suffix: /^$/,
                                    handler: function(t, e) {
                                        var n = this.quill.getLine(t.index)
                                          , r = o(n, 2)
                                          , i = r[0]
                                          , l = r[1]
                                          , a = (new p.default).retain(t.index).insert("\n", e.format).retain(i.length() - l - 1).retain(1, {
                                            header: null
                                        });
                                        this.quill.updateContents(a, m.default.sources.USER),
                                        this.quill.setSelection(t.index + 1, m.default.sources.SILENT),
                                        this.quill.scrollIntoView()
                                    }
                                },
                                "list autofill": {
                                    key: " ",
                                    collapsed: !0,
                                    format: {
                                        list: !1
                                    },
                                    prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                                    handler: function(t, e) {
                                        var n = e.prefix.length
                                          , r = this.quill.getLine(t.index)
                                          , i = o(r, 2)
                                          , l = i[0]
                                          , a = i[1];
                                        if (a > n)
                                            return !0;
                                        var s = void 0;
                                        switch (e.prefix.trim()) {
                                        case "[]":
                                        case "[ ]":
                                            s = "unchecked";
                                            break;
                                        case "[x]":
                                            s = "checked";
                                            break;
                                        case "-":
                                        case "*":
                                            s = "bullet";
                                            break;
                                        default:
                                            s = "ordered"
                                        }
                                        this.quill.insertText(t.index, " ", m.default.sources.USER),
                                        this.quill.history.cutoff();
                                        var u = (new p.default).retain(t.index - a).delete(n + 1).retain(l.length() - 2 - a).retain(1, {
                                            list: s
                                        });
                                        this.quill.updateContents(u, m.default.sources.USER),
                                        this.quill.history.cutoff(),
                                        this.quill.setSelection(t.index - n, m.default.sources.SILENT)
                                    }
                                },
                                "code exit": {
                                    key: j.keys.ENTER,
                                    collapsed: !0,
                                    format: ["code-block"],
                                    prefix: /\n\n$/,
                                    suffix: /^\s+$/,
                                    handler: function(t) {
                                        var e = this.quill.getLine(t.index)
                                          , n = o(e, 2)
                                          , r = n[0]
                                          , i = n[1]
                                          , l = (new p.default).retain(t.index + r.length() - i - 2).retain(1, {
                                            "code-block": null
                                        }).delete(1);
                                        this.quill.updateContents(l, m.default.sources.USER)
                                    }
                                },
                                "embed left": T(j.keys.LEFT, !1),
                                "embed left shift": T(j.keys.LEFT, !0),
                                "embed right": T(j.keys.RIGHT, !1),
                                "embed right shift": T(j.keys.RIGHT, !0)
                            }
                        },
                        e.default = j,
                        e.SHORTKEY = N
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = function(t, e) {
                            if (Array.isArray(t))
                                return t;
                            if (Symbol.iterator in Object(t))
                                return function(t, e) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value),
                                        !e || n.length !== e); r = !0)
                                            ;
                                    } catch (t) {
                                        o = !0,
                                        i = t
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                          , o = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }
                          , i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , l = n(0)
                          , a = c(l)
                          , s = n(7)
                          , u = c(s);
                        function c(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        var f = function(t) {
                            function e(t, n) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var r = function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return r.selection = n,
                                r.textNode = document.createTextNode(e.CONTENTS),
                                r.domNode.appendChild(r.textNode),
                                r._length = 0,
                                r
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            i(e, null, [{
                                key: "value",
                                value: function() {}
                            }]),
                            i(e, [{
                                key: "detach",
                                value: function() {
                                    null != this.parent && this.parent.removeChild(this)
                                }
                            }, {
                                key: "format",
                                value: function(t, n) {
                                    if (0 !== this._length)
                                        return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
                                    for (var r = this, i = 0; null != r && r.statics.scope !== a.default.Scope.BLOCK_BLOT; )
                                        i += r.offset(r.parent),
                                        r = r.parent;
                                    null != r && (this._length = e.CONTENTS.length,
                                    r.optimize(),
                                    r.formatAt(i, e.CONTENTS.length, t, n),
                                    this._length = 0)
                                }
                            }, {
                                key: "index",
                                value: function(t, n) {
                                    return t === this.textNode ? 0 : o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n)
                                }
                            }, {
                                key: "length",
                                value: function() {
                                    return this._length
                                }
                            }, {
                                key: "position",
                                value: function() {
                                    return [this.textNode, this.textNode.data.length]
                                }
                            }, {
                                key: "remove",
                                value: function() {
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this),
                                    this.parent = null
                                }
                            }, {
                                key: "restore",
                                value: function() {
                                    if (!this.selection.composing && null != this.parent) {
                                        var t = this.textNode
                                          , n = this.selection.getNativeRange()
                                          , o = void 0
                                          , i = void 0
                                          , l = void 0;
                                        if (null != n && n.start.node === t && n.end.node === t) {
                                            var s = [t, n.start.offset, n.end.offset];
                                            o = s[0],
                                            i = s[1],
                                            l = s[2]
                                        }
                                        for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode; )
                                            this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                                        if (this.textNode.data !== e.CONTENTS) {
                                            var c = this.textNode.data.split(e.CONTENTS).join("");
                                            this.next instanceof u.default ? (o = this.next.domNode,
                                            this.next.insertAt(0, c),
                                            this.textNode.data = e.CONTENTS) : (this.textNode.data = c,
                                            this.parent.insertBefore(a.default.create(this.textNode), this),
                                            this.textNode = document.createTextNode(e.CONTENTS),
                                            this.domNode.appendChild(this.textNode))
                                        }
                                        if (this.remove(),
                                        null != i) {
                                            var f = [i, l].map(function(t) {
                                                return Math.max(0, Math.min(o.data.length, t - 1))
                                            })
                                              , h = r(f, 2);
                                            return i = h[0],
                                            l = h[1],
                                            {
                                                startNode: o,
                                                startOffset: i,
                                                endNode: o,
                                                endOffset: l
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "update",
                                value: function(t, e) {
                                    var n = this;
                                    if (t.some(function(t) {
                                        return "characterData" === t.type && t.target === n.textNode
                                    })) {
                                        var r = this.restore();
                                        r && (e.range = r)
                                    }
                                }
                            }, {
                                key: "value",
                                value: function() {
                                    return ""
                                }
                            }]),
                            e
                        }(a.default.Embed);
                        f.blotName = "cursor",
                        f.className = "ql-cursor",
                        f.tagName = "span",
                        f.CONTENTS = "\ufeff",
                        e.default = f
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = n(0)
                          , o = a(r)
                          , i = n(4)
                          , l = a(i);
                        function a(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        var s = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            e
                        }(o.default.Container);
                        s.allowedChildren = [l.default, i.BlockEmbed, s],
                        e.default = s
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0;
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = n(0), l = (r = i) && r.__esModule ? r : {
                            default: r
                        }, a = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "value",
                                value: function(t) {
                                    var n = function t(e, n, r) {
                                        null === e && (e = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === o) {
                                            var i = Object.getPrototypeOf(e);
                                            return null === i ? void 0 : t(i, n, r)
                                        }
                                        if ("value"in o)
                                            return o.value;
                                        var l = o.get;
                                        return void 0 !== l ? l.call(r) : void 0
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t);
                                    return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""),
                                    "#" + n.split(",").map(function(t) {
                                        return ("00" + parseInt(t).toString(16)).slice(-2)
                                    }).join("")) : n
                                }
                            }]),
                            e
                        }(l.default.Attributor.Style), s = new l.default.Attributor.Class("color","ql-color",{
                            scope: l.default.Scope.INLINE
                        }), u = new a("color","color",{
                            scope: l.default.Scope.INLINE
                        });
                        e.ColorAttributor = a,
                        e.ColorClass = s,
                        e.ColorStyle = u
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.sanitize = e.default = void 0;
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }, l = n(6), a = (r = l) && r.__esModule ? r : {
                            default: r
                        }, s = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "format",
                                value: function(t, n) {
                                    if (t !== this.statics.blotName || !n)
                                        return i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
                                    n = this.constructor.sanitize(n),
                                    this.domNode.setAttribute("href", n)
                                }
                            }], [{
                                key: "create",
                                value: function(t) {
                                    var n = i(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                    return t = this.sanitize(t),
                                    n.setAttribute("href", t),
                                    n.setAttribute("target", "_blank"),
                                    n
                                }
                            }, {
                                key: "formats",
                                value: function(t) {
                                    return t.getAttribute("href")
                                }
                            }, {
                                key: "sanitize",
                                value: function(t) {
                                    return u(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL
                                }
                            }]),
                            e
                        }(a.default);
                        function u(t, e) {
                            var n = document.createElement("a");
                            n.href = t;
                            var r = n.href.slice(0, n.href.indexOf(":"));
                            return e.indexOf(r) > -1
                        }
                        s.blotName = "link",
                        s.tagName = "A",
                        s.SANITIZED_URL = "about:blank",
                        s.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"],
                        e.default = s,
                        e.sanitize = u
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        }
                        : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }
                          , o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , i = n(23)
                          , l = u(i)
                          , a = n(107)
                          , s = u(a);
                        function u(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        var c = 0;
                        function f(t, e) {
                            t.setAttribute(e, !("true" === t.getAttribute(e)))
                        }
                        var h = function() {
                            function t(e) {
                                var n = this;
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, t),
                                this.select = e,
                                this.container = document.createElement("span"),
                                this.buildPicker(),
                                this.select.style.display = "none",
                                this.select.parentNode.insertBefore(this.container, this.select),
                                this.label.addEventListener("mousedown", function() {
                                    n.togglePicker()
                                }),
                                this.label.addEventListener("keydown", function(t) {
                                    switch (t.keyCode) {
                                    case l.default.keys.ENTER:
                                        n.togglePicker();
                                        break;
                                    case l.default.keys.ESCAPE:
                                        n.escape(),
                                        t.preventDefault()
                                    }
                                }),
                                this.select.addEventListener("change", this.update.bind(this))
                            }
                            return o(t, [{
                                key: "togglePicker",
                                value: function() {
                                    this.container.classList.toggle("ql-expanded"),
                                    f(this.label, "aria-expanded"),
                                    f(this.options, "aria-hidden")
                                }
                            }, {
                                key: "buildItem",
                                value: function(t) {
                                    var e = this
                                      , n = document.createElement("span");
                                    return n.tabIndex = "0",
                                    n.setAttribute("role", "button"),
                                    n.classList.add("ql-picker-item"),
                                    t.hasAttribute("value") && n.setAttribute("data-value", t.getAttribute("value")),
                                    t.textContent && n.setAttribute("data-label", t.textContent),
                                    n.addEventListener("click", function() {
                                        e.selectItem(n, !0)
                                    }),
                                    n.addEventListener("keydown", function(t) {
                                        switch (t.keyCode) {
                                        case l.default.keys.ENTER:
                                            e.selectItem(n, !0),
                                            t.preventDefault();
                                            break;
                                        case l.default.keys.ESCAPE:
                                            e.escape(),
                                            t.preventDefault()
                                        }
                                    }),
                                    n
                                }
                            }, {
                                key: "buildLabel",
                                value: function() {
                                    var t = document.createElement("span");
                                    return t.classList.add("ql-picker-label"),
                                    t.innerHTML = s.default,
                                    t.tabIndex = "0",
                                    t.setAttribute("role", "button"),
                                    t.setAttribute("aria-expanded", "false"),
                                    this.container.appendChild(t),
                                    t
                                }
                            }, {
                                key: "buildOptions",
                                value: function() {
                                    var t = this
                                      , e = document.createElement("span");
                                    e.classList.add("ql-picker-options"),
                                    e.setAttribute("aria-hidden", "true"),
                                    e.tabIndex = "-1",
                                    e.id = "ql-picker-options-" + c,
                                    c += 1,
                                    this.label.setAttribute("aria-controls", e.id),
                                    this.options = e,
                                    [].slice.call(this.select.options).forEach(function(n) {
                                        var r = t.buildItem(n);
                                        e.appendChild(r),
                                        !0 === n.selected && t.selectItem(r)
                                    }),
                                    this.container.appendChild(e)
                                }
                            }, {
                                key: "buildPicker",
                                value: function() {
                                    var t = this;
                                    [].slice.call(this.select.attributes).forEach(function(e) {
                                        t.container.setAttribute(e.name, e.value)
                                    }),
                                    this.container.classList.add("ql-picker"),
                                    this.label = this.buildLabel(),
                                    this.buildOptions()
                                }
                            }, {
                                key: "escape",
                                value: function() {
                                    var t = this;
                                    this.close(),
                                    setTimeout(function() {
                                        return t.label.focus()
                                    }, 1)
                                }
                            }, {
                                key: "close",
                                value: function() {
                                    this.container.classList.remove("ql-expanded"),
                                    this.label.setAttribute("aria-expanded", "false"),
                                    this.options.setAttribute("aria-hidden", "true")
                                }
                            }, {
                                key: "selectItem",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                                      , n = this.container.querySelector(".ql-selected");
                                    if (t !== n && (null != n && n.classList.remove("ql-selected"),
                                    null != t && (t.classList.add("ql-selected"),
                                    this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t),
                                    t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"),
                                    t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"),
                                    e))) {
                                        if ("function" == typeof Event)
                                            this.select.dispatchEvent(new Event("change"));
                                        else if ("object" === ("undefined" == typeof Event ? "undefined" : r(Event))) {
                                            var o = document.createEvent("Event");
                                            o.initEvent("change", !0, !0),
                                            this.select.dispatchEvent(o)
                                        }
                                        this.close()
                                    }
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t = void 0;
                                    if (this.select.selectedIndex > -1) {
                                        var e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                                        t = this.select.options[this.select.selectedIndex],
                                        this.selectItem(e)
                                    } else
                                        this.selectItem(null);
                                    var n = null != t && t !== this.select.querySelector("option[selected]");
                                    this.label.classList.toggle("ql-active", n)
                                }
                            }]),
                            t
                        }();
                        e.default = h
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = n(0)
                          , o = T(r)
                          , i = n(5)
                          , l = T(i)
                          , a = n(4)
                          , s = T(a)
                          , u = n(16)
                          , c = T(u)
                          , f = n(25)
                          , h = T(f)
                          , p = n(24)
                          , d = T(p)
                          , y = n(35)
                          , v = T(y)
                          , b = n(6)
                          , g = T(b)
                          , m = n(22)
                          , _ = T(m)
                          , O = n(7)
                          , w = T(O)
                          , E = n(55)
                          , x = T(E)
                          , k = n(42)
                          , A = T(k)
                          , N = n(23)
                          , j = T(N);
                        function T(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        l.default.register({
                            "blots/block": s.default,
                            "blots/block/embed": a.BlockEmbed,
                            "blots/break": c.default,
                            "blots/container": h.default,
                            "blots/cursor": d.default,
                            "blots/embed": v.default,
                            "blots/inline": g.default,
                            "blots/scroll": _.default,
                            "blots/text": w.default,
                            "modules/clipboard": x.default,
                            "modules/history": A.default,
                            "modules/keyboard": j.default
                        }),
                        o.default.register(s.default, c.default, d.default, g.default, _.default, w.default),
                        e.default = l.default
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = n(1)
                          , o = function() {
                            function t(t) {
                                this.domNode = t,
                                this.domNode[r.DATA_KEY] = {
                                    blot: this
                                }
                            }
                            return Object.defineProperty(t.prototype, "statics", {
                                get: function() {
                                    return this.constructor
                                },
                                enumerable: !0,
                                configurable: !0
                            }),
                            t.create = function(t) {
                                if (null == this.tagName)
                                    throw new r.ParchmentError("Blot definition missing tagName");
                                var e;
                                return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(),
                                parseInt(t).toString() === t && (t = parseInt(t))),
                                e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName),
                                this.className && e.classList.add(this.className),
                                e
                            }
                            ,
                            t.prototype.attach = function() {
                                null != this.parent && (this.scroll = this.parent.scroll)
                            }
                            ,
                            t.prototype.clone = function() {
                                var t = this.domNode.cloneNode(!1);
                                return r.create(t)
                            }
                            ,
                            t.prototype.detach = function() {
                                null != this.parent && this.parent.removeChild(this),
                                delete this.domNode[r.DATA_KEY]
                            }
                            ,
                            t.prototype.deleteAt = function(t, e) {
                                var n = this.isolate(t, e);
                                n.remove()
                            }
                            ,
                            t.prototype.formatAt = function(t, e, n, o) {
                                var i = this.isolate(t, e);
                                if (null != r.query(n, r.Scope.BLOT) && o)
                                    i.wrap(n, o);
                                else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
                                    var l = r.create(this.statics.scope);
                                    i.wrap(l),
                                    l.format(n, o)
                                }
                            }
                            ,
                            t.prototype.insertAt = function(t, e, n) {
                                var o = null == n ? r.create("text", e) : r.create(e, n)
                                  , i = this.split(t);
                                this.parent.insertBefore(o, i)
                            }
                            ,
                            t.prototype.insertInto = function(t, e) {
                                void 0 === e && (e = null),
                                null != this.parent && this.parent.children.remove(this);
                                var n = null;
                                t.children.insertBefore(this, e),
                                null != e && (n = e.domNode),
                                this.domNode.parentNode == t.domNode && this.domNode.nextSibling == n || t.domNode.insertBefore(this.domNode, n),
                                this.parent = t,
                                this.attach()
                            }
                            ,
                            t.prototype.isolate = function(t, e) {
                                var n = this.split(t);
                                return n.split(e),
                                n
                            }
                            ,
                            t.prototype.length = function() {
                                return 1
                            }
                            ,
                            t.prototype.offset = function(t) {
                                return void 0 === t && (t = this.parent),
                                null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t)
                            }
                            ,
                            t.prototype.optimize = function(t) {
                                null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations
                            }
                            ,
                            t.prototype.remove = function() {
                                null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode),
                                this.detach()
                            }
                            ,
                            t.prototype.replace = function(t) {
                                null != t.parent && (t.parent.insertBefore(this, t.next),
                                t.remove())
                            }
                            ,
                            t.prototype.replaceWith = function(t, e) {
                                var n = "string" == typeof t ? r.create(t, e) : t;
                                return n.replace(this),
                                n
                            }
                            ,
                            t.prototype.split = function(t, e) {
                                return 0 === t ? this : this.next
                            }
                            ,
                            t.prototype.update = function(t, e) {}
                            ,
                            t.prototype.wrap = function(t, e) {
                                var n = "string" == typeof t ? r.create(t, e) : t;
                                return null != this.parent && this.parent.insertBefore(n, this.next),
                                n.appendChild(this),
                                n
                            }
                            ,
                            t.blotName = "abstract",
                            t
                        }();
                        e.default = o
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = n(12)
                          , o = n(32)
                          , i = n(33)
                          , l = n(1)
                          , a = function() {
                            function t(t) {
                                this.attributes = {},
                                this.domNode = t,
                                this.build()
                            }
                            return t.prototype.attribute = function(t, e) {
                                e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode),
                                delete this.attributes[t.attrName])
                            }
                            ,
                            t.prototype.build = function() {
                                var t = this;
                                this.attributes = {};
                                var e = r.default.keys(this.domNode)
                                  , n = o.default.keys(this.domNode)
                                  , a = i.default.keys(this.domNode);
                                e.concat(n).concat(a).forEach(function(e) {
                                    var n = l.query(e, l.Scope.ATTRIBUTE);
                                    n instanceof r.default && (t.attributes[n.attrName] = n)
                                })
                            }
                            ,
                            t.prototype.copy = function(t) {
                                var e = this;
                                Object.keys(this.attributes).forEach(function(n) {
                                    var r = e.attributes[n].value(e.domNode);
                                    t.format(n, r)
                                })
                            }
                            ,
                            t.prototype.move = function(t) {
                                var e = this;
                                this.copy(t),
                                Object.keys(this.attributes).forEach(function(t) {
                                    e.attributes[t].remove(e.domNode)
                                }),
                                this.attributes = {}
                            }
                            ,
                            t.prototype.values = function() {
                                var t = this;
                                return Object.keys(this.attributes).reduce(function(e, n) {
                                    return e[n] = t.attributes[n].value(t.domNode),
                                    e
                                }, {})
                            }
                            ,
                            t
                        }();
                        e.default = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = n(12);
                        function l(t, e) {
                            var n = t.getAttribute("class") || "";
                            return n.split(/\s+/).filter(function(t) {
                                return 0 === t.indexOf(e + "-")
                            })
                        }
                        var a = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return o(e, t),
                            e.keys = function(t) {
                                return (t.getAttribute("class") || "").split(/\s+/).map(function(t) {
                                    return t.split("-").slice(0, -1).join("-")
                                })
                            }
                            ,
                            e.prototype.add = function(t, e) {
                                return !!this.canAdd(t, e) && (this.remove(t),
                                t.classList.add(this.keyName + "-" + e),
                                !0)
                            }
                            ,
                            e.prototype.remove = function(t) {
                                var e = l(t, this.keyName);
                                e.forEach(function(e) {
                                    t.classList.remove(e)
                                }),
                                0 === t.classList.length && t.removeAttribute("class")
                            }
                            ,
                            e.prototype.value = function(t) {
                                var e = l(t, this.keyName)[0] || ""
                                  , n = e.slice(this.keyName.length + 1);
                                return this.canAdd(t, n) ? n : ""
                            }
                            ,
                            e
                        }(i.default);
                        e.default = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = n(12);
                        function l(t) {
                            var e = t.split("-")
                              , n = e.slice(1).map(function(t) {
                                return t[0].toUpperCase() + t.slice(1)
                            }).join("");
                            return e[0] + n
                        }
                        var a = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return o(e, t),
                            e.keys = function(t) {
                                return (t.getAttribute("style") || "").split(";").map(function(t) {
                                    var e = t.split(":");
                                    return e[0].trim()
                                })
                            }
                            ,
                            e.prototype.add = function(t, e) {
                                return !!this.canAdd(t, e) && (t.style[l(this.keyName)] = e,
                                !0)
                            }
                            ,
                            e.prototype.remove = function(t) {
                                t.style[l(this.keyName)] = "",
                                t.getAttribute("style") || t.removeAttribute("style")
                            }
                            ,
                            e.prototype.value = function(t) {
                                var e = t.style[l(this.keyName)];
                                return this.canAdd(t, e) ? e : ""
                            }
                            ,
                            e
                        }(i.default);
                        e.default = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = function() {
                            function t(e, n) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, t),
                                this.quill = e,
                                this.options = n,
                                this.modules = {}
                            }
                            return r(t, [{
                                key: "init",
                                value: function() {
                                    var t = this;
                                    Object.keys(this.options.modules).forEach(function(e) {
                                        null == t.modules[e] && t.addModule(e)
                                    })
                                }
                            }, {
                                key: "addModule",
                                value: function(t) {
                                    var e = this.quill.constructor.import("modules/" + t);
                                    return this.modules[t] = new e(this.quill,this.options.modules[t] || {}),
                                    this.modules[t]
                                }
                            }]),
                            t
                        }();
                        o.DEFAULTS = {
                            modules: {}
                        },
                        o.themes = {
                            default: o
                        },
                        e.default = o
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = n(0)
                          , i = s(o)
                          , l = n(7)
                          , a = s(l);
                        function s(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        var u = "\ufeff"
                          , c = function(t) {
                            function e(t) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var n = function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return n.contentNode = document.createElement("span"),
                                n.contentNode.setAttribute("contenteditable", !1),
                                [].slice.call(n.domNode.childNodes).forEach(function(t) {
                                    n.contentNode.appendChild(t)
                                }),
                                n.leftGuard = document.createTextNode(u),
                                n.rightGuard = document.createTextNode(u),
                                n.domNode.appendChild(n.leftGuard),
                                n.domNode.appendChild(n.contentNode),
                                n.domNode.appendChild(n.rightGuard),
                                n
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            r(e, [{
                                key: "index",
                                value: function(t, n) {
                                    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : function t(e, n, r) {
                                        null === e && (e = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === o) {
                                            var i = Object.getPrototypeOf(e);
                                            return null === i ? void 0 : t(i, n, r)
                                        }
                                        if ("value"in o)
                                            return o.value;
                                        var l = o.get;
                                        return void 0 !== l ? l.call(r) : void 0
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n)
                                }
                            }, {
                                key: "restore",
                                value: function(t) {
                                    var e = void 0
                                      , n = void 0
                                      , r = t.data.split(u).join("");
                                    if (t === this.leftGuard)
                                        if (this.prev instanceof a.default) {
                                            var o = this.prev.length();
                                            this.prev.insertAt(o, r),
                                            e = {
                                                startNode: this.prev.domNode,
                                                startOffset: o + r.length
                                            }
                                        } else
                                            n = document.createTextNode(r),
                                            this.parent.insertBefore(i.default.create(n), this),
                                            e = {
                                                startNode: n,
                                                startOffset: r.length
                                            };
                                    else
                                        t === this.rightGuard && (this.next instanceof a.default ? (this.next.insertAt(0, r),
                                        e = {
                                            startNode: this.next.domNode,
                                            startOffset: r.length
                                        }) : (n = document.createTextNode(r),
                                        this.parent.insertBefore(i.default.create(n), this.next),
                                        e = {
                                            startNode: n,
                                            startOffset: r.length
                                        }));
                                    return t.data = u,
                                    e
                                }
                            }, {
                                key: "update",
                                value: function(t, e) {
                                    var n = this;
                                    t.forEach(function(t) {
                                        if ("characterData" === t.type && (t.target === n.leftGuard || t.target === n.rightGuard)) {
                                            var r = n.restore(t.target);
                                            r && (e.range = r)
                                        }
                                    })
                                }
                            }]),
                            e
                        }(i.default.Embed);
                        e.default = c
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0;
                        var r, o = n(0), i = (r = o) && r.__esModule ? r : {
                            default: r
                        }, l = {
                            scope: i.default.Scope.BLOCK,
                            whitelist: ["right", "center", "justify"]
                        }, a = new i.default.Attributor.Attribute("align","align",l), s = new i.default.Attributor.Class("align","ql-align",l), u = new i.default.Attributor.Style("align","text-align",l);
                        e.AlignAttribute = a,
                        e.AlignClass = s,
                        e.AlignStyle = u
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.BackgroundStyle = e.BackgroundClass = void 0;
                        var r, o = n(0), i = (r = o) && r.__esModule ? r : {
                            default: r
                        }, l = n(26), a = new i.default.Attributor.Class("background","ql-bg",{
                            scope: i.default.Scope.INLINE
                        }), s = new l.ColorAttributor("background","background-color",{
                            scope: i.default.Scope.INLINE
                        });
                        e.BackgroundClass = a,
                        e.BackgroundStyle = s
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0;
                        var r, o = n(0), i = (r = o) && r.__esModule ? r : {
                            default: r
                        }, l = {
                            scope: i.default.Scope.BLOCK,
                            whitelist: ["rtl"]
                        }, a = new i.default.Attributor.Attribute("direction","dir",l), s = new i.default.Attributor.Class("direction","ql-direction",l), u = new i.default.Attributor.Style("direction","direction",l);
                        e.DirectionAttribute = a,
                        e.DirectionClass = s,
                        e.DirectionStyle = u
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.FontClass = e.FontStyle = void 0;
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = n(0), l = (r = i) && r.__esModule ? r : {
                            default: r
                        }, a = {
                            scope: l.default.Scope.INLINE,
                            whitelist: ["serif", "monospace"]
                        }, s = new l.default.Attributor.Class("font","ql-font",a), u = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "value",
                                value: function(t) {
                                    return function t(e, n, r) {
                                        null === e && (e = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === o) {
                                            var i = Object.getPrototypeOf(e);
                                            return null === i ? void 0 : t(i, n, r)
                                        }
                                        if ("value"in o)
                                            return o.value;
                                        var l = o.get;
                                        return void 0 !== l ? l.call(r) : void 0
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t).replace(/["']/g, "")
                                }
                            }]),
                            e
                        }(l.default.Attributor.Style), c = new u("font","font-family",a);
                        e.FontStyle = c,
                        e.FontClass = s
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.SizeStyle = e.SizeClass = void 0;
                        var r, o = n(0), i = (r = o) && r.__esModule ? r : {
                            default: r
                        }, l = new i.default.Attributor.Class("size","ql-size",{
                            scope: i.default.Scope.INLINE,
                            whitelist: ["small", "large", "huge"]
                        }), a = new i.default.Attributor.Style("size","font-size",{
                            scope: i.default.Scope.INLINE,
                            whitelist: ["10px", "18px", "32px"]
                        });
                        e.SizeClass = l,
                        e.SizeStyle = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        t.exports = {
                            align: {
                                "": n(76),
                                center: n(77),
                                right: n(78),
                                justify: n(79)
                            },
                            background: n(80),
                            blockquote: n(81),
                            bold: n(82),
                            clean: n(83),
                            code: n(58),
                            "code-block": n(58),
                            color: n(84),
                            direction: {
                                "": n(85),
                                rtl: n(86)
                            },
                            float: {
                                center: n(87),
                                full: n(88),
                                left: n(89),
                                right: n(90)
                            },
                            formula: n(91),
                            header: {
                                1: n(92),
                                2: n(93)
                            },
                            italic: n(94),
                            image: n(95),
                            indent: {
                                "+1": n(96),
                                "-1": n(97)
                            },
                            link: n(98),
                            list: {
                                ordered: n(99),
                                bullet: n(100),
                                check: n(101)
                            },
                            script: {
                                sub: n(102),
                                super: n(103)
                            },
                            strike: n(104),
                            underline: n(105),
                            video: n(106)
                        }
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.getLastChangeIndex = e.default = void 0;
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = n(0)
                          , i = c(o)
                          , l = n(5)
                          , a = c(l)
                          , s = n(9)
                          , u = c(s);
                        function c(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        var f = function(t) {
                            function e(t, n) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var r = function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return r.lastRecorded = 0,
                                r.ignoreChange = !1,
                                r.clear(),
                                r.quill.on(a.default.events.EDITOR_CHANGE, function(t, e, n, o) {
                                    t !== a.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && o !== a.default.sources.USER ? r.transform(e) : r.record(e, n))
                                }),
                                r.quill.keyboard.addBinding({
                                    key: "Z",
                                    shortKey: !0
                                }, r.undo.bind(r)),
                                r.quill.keyboard.addBinding({
                                    key: "Z",
                                    shortKey: !0,
                                    shiftKey: !0
                                }, r.redo.bind(r)),
                                /Win/i.test(navigator.platform) && r.quill.keyboard.addBinding({
                                    key: "Y",
                                    shortKey: !0
                                }, r.redo.bind(r)),
                                r
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            r(e, [{
                                key: "change",
                                value: function(t, e) {
                                    if (0 !== this.stack[t].length) {
                                        var n = this.stack[t].pop();
                                        this.stack[e].push(n),
                                        this.lastRecorded = 0,
                                        this.ignoreChange = !0,
                                        this.quill.updateContents(n[t], a.default.sources.USER),
                                        this.ignoreChange = !1;
                                        var r = h(n[t]);
                                        this.quill.setSelection(r)
                                    }
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    this.stack = {
                                        undo: [],
                                        redo: []
                                    }
                                }
                            }, {
                                key: "cutoff",
                                value: function() {
                                    this.lastRecorded = 0
                                }
                            }, {
                                key: "record",
                                value: function(t, e) {
                                    if (0 !== t.ops.length) {
                                        this.stack.redo = [];
                                        var n = this.quill.getContents().diff(e)
                                          , r = Date.now();
                                        if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
                                            var o = this.stack.undo.pop();
                                            n = n.compose(o.undo),
                                            t = o.redo.compose(t)
                                        } else
                                            this.lastRecorded = r;
                                        this.stack.undo.push({
                                            redo: t,
                                            undo: n
                                        }),
                                        this.stack.undo.length > this.options.maxStack && this.stack.undo.shift()
                                    }
                                }
                            }, {
                                key: "redo",
                                value: function() {
                                    this.change("redo", "undo")
                                }
                            }, {
                                key: "transform",
                                value: function(t) {
                                    this.stack.undo.forEach(function(e) {
                                        e.undo = t.transform(e.undo, !0),
                                        e.redo = t.transform(e.redo, !0)
                                    }),
                                    this.stack.redo.forEach(function(e) {
                                        e.undo = t.transform(e.undo, !0),
                                        e.redo = t.transform(e.redo, !0)
                                    })
                                }
                            }, {
                                key: "undo",
                                value: function() {
                                    this.change("undo", "redo")
                                }
                            }]),
                            e
                        }(u.default);
                        function h(t) {
                            var e = t.reduce(function(t, e) {
                                return t += e.delete || 0
                            }, 0)
                              , n = t.length() - e;
                            return function(t) {
                                var e = t.ops[t.ops.length - 1];
                                return null != e && (null != e.insert ? "string" == typeof e.insert && e.insert.endsWith("\n") : null != e.attributes && Object.keys(e.attributes).some(function(t) {
                                    return null != i.default.query(t, i.default.Scope.BLOCK)
                                }))
                            }(t) && (n -= 1),
                            n
                        }
                        f.DEFAULTS = {
                            delay: 1e3,
                            maxStack: 100,
                            userOnly: !1
                        },
                        e.default = f,
                        e.getLastChangeIndex = h
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.default = e.BaseTooltip = void 0;
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = n(3)
                          , i = w(o)
                          , l = n(2)
                          , a = w(l)
                          , s = n(8)
                          , u = w(s)
                          , c = n(23)
                          , f = w(c)
                          , h = n(34)
                          , p = w(h)
                          , d = n(59)
                          , y = w(d)
                          , v = n(60)
                          , b = w(v)
                          , g = n(28)
                          , m = w(g)
                          , _ = n(61)
                          , O = w(_);
                        function w(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function E(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function x(t, e) {
                            if (!t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }
                        function k(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }
                        var A = [!1, "center", "right", "justify"]
                          , N = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"]
                          , j = [!1, "serif", "monospace"]
                          , T = ["1", "2", "3", !1]
                          , P = ["small", !1, "large", "huge"]
                          , S = function(t) {
                            function e(t, n) {
                                E(this, e);
                                var r = x(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return t.emitter.listenDOM("click", document.body, function e(n) {
                                    if (!document.body.contains(t.root))
                                        return document.body.removeEventListener("click", e);
                                    null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox || r.quill.hasFocus() || r.tooltip.hide(),
                                    null != r.pickers && r.pickers.forEach(function(t) {
                                        t.container.contains(n.target) || t.close()
                                    })
                                }),
                                r
                            }
                            return k(e, t),
                            r(e, [{
                                key: "addModule",
                                value: function(t) {
                                    var n = function t(e, n, r) {
                                        null === e && (e = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === o) {
                                            var i = Object.getPrototypeOf(e);
                                            return null === i ? void 0 : t(i, n, r)
                                        }
                                        if ("value"in o)
                                            return o.value;
                                        var l = o.get;
                                        return void 0 !== l ? l.call(r) : void 0
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addModule", this).call(this, t);
                                    return "toolbar" === t && this.extendToolbar(n),
                                    n
                                }
                            }, {
                                key: "buildButtons",
                                value: function(t, e) {
                                    t.forEach(function(t) {
                                        var n = t.getAttribute("class") || "";
                                        n.split(/\s+/).forEach(function(n) {
                                            if (n.startsWith("ql-") && (n = n.slice("ql-".length),
                                            null != e[n]))
                                                if ("direction" === n)
                                                    t.innerHTML = e[n][""] + e[n].rtl;
                                                else if ("string" == typeof e[n])
                                                    t.innerHTML = e[n];
                                                else {
                                                    var r = t.value || "";
                                                    null != r && e[n][r] && (t.innerHTML = e[n][r])
                                                }
                                        })
                                    })
                                }
                            }, {
                                key: "buildPickers",
                                value: function(t, e) {
                                    var n = this;
                                    this.pickers = t.map(function(t) {
                                        if (t.classList.contains("ql-align"))
                                            return null == t.querySelector("option") && C(t, A),
                                            new b.default(t,e.align);
                                        if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
                                            var n = t.classList.contains("ql-background") ? "background" : "color";
                                            return null == t.querySelector("option") && C(t, N, "background" === n ? "#ffffff" : "#000000"),
                                            new y.default(t,e[n])
                                        }
                                        return null == t.querySelector("option") && (t.classList.contains("ql-font") ? C(t, j) : t.classList.contains("ql-header") ? C(t, T) : t.classList.contains("ql-size") && C(t, P)),
                                        new m.default(t)
                                    }),
                                    this.quill.on(u.default.events.EDITOR_CHANGE, function() {
                                        n.pickers.forEach(function(t) {
                                            t.update()
                                        })
                                    })
                                }
                            }]),
                            e
                        }(p.default);
                        S.DEFAULTS = (0,
                        i.default)(!0, {}, p.default.DEFAULTS, {
                            modules: {
                                toolbar: {
                                    handlers: {
                                        formula: function() {
                                            this.quill.theme.tooltip.edit("formula")
                                        },
                                        image: function() {
                                            var t = this
                                              , e = this.container.querySelector("input.ql-image[type=file]");
                                            null == e && ((e = document.createElement("input")).setAttribute("type", "file"),
                                            e.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),
                                            e.classList.add("ql-image"),
                                            e.addEventListener("change", function() {
                                                if (null != e.files && null != e.files[0]) {
                                                    var n = new FileReader;
                                                    n.onload = function(n) {
                                                        var r = t.quill.getSelection(!0);
                                                        t.quill.updateContents((new a.default).retain(r.index).delete(r.length).insert({
                                                            image: n.target.result
                                                        }), u.default.sources.USER),
                                                        t.quill.setSelection(r.index + 1, u.default.sources.SILENT),
                                                        e.value = ""
                                                    }
                                                    ,
                                                    n.readAsDataURL(e.files[0])
                                                }
                                            }),
                                            this.container.appendChild(e)),
                                            e.click()
                                        },
                                        video: function() {
                                            this.quill.theme.tooltip.edit("video")
                                        }
                                    }
                                }
                            }
                        });
                        var q = function(t) {
                            function e(t, n) {
                                E(this, e);
                                var r = x(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return r.textbox = r.root.querySelector('input[type="text"]'),
                                r.listen(),
                                r
                            }
                            return k(e, t),
                            r(e, [{
                                key: "listen",
                                value: function() {
                                    var t = this;
                                    this.textbox.addEventListener("keydown", function(e) {
                                        f.default.match(e, "enter") ? (t.save(),
                                        e.preventDefault()) : f.default.match(e, "escape") && (t.cancel(),
                                        e.preventDefault())
                                    })
                                }
                            }, {
                                key: "cancel",
                                value: function() {
                                    this.hide()
                                }
                            }, {
                                key: "edit",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link"
                                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    this.root.classList.remove("ql-hidden"),
                                    this.root.classList.add("ql-editing"),
                                    null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""),
                                    this.position(this.quill.getBounds(this.quill.selection.savedRange)),
                                    this.textbox.select(),
                                    this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t) || ""),
                                    this.root.setAttribute("data-mode", t)
                                }
                            }, {
                                key: "restoreFocus",
                                value: function() {
                                    var t = this.quill.scrollingContainer.scrollTop;
                                    this.quill.focus(),
                                    this.quill.scrollingContainer.scrollTop = t
                                }
                            }, {
                                key: "save",
                                value: function() {
                                    var t, e, n = this.textbox.value;
                                    switch (this.root.getAttribute("data-mode")) {
                                    case "link":
                                        var r = this.quill.root.scrollTop;
                                        this.linkRange ? (this.quill.formatText(this.linkRange, "link", n, u.default.sources.USER),
                                        delete this.linkRange) : (this.restoreFocus(),
                                        this.quill.format("link", n, u.default.sources.USER)),
                                        this.quill.root.scrollTop = r;
                                        break;
                                    case "video":
                                        e = (t = n).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/),
                                        n = e ? (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0" : (e = t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e[1] || "https") + "://player.vimeo.com/video/" + e[2] + "/" : t;
                                    case "formula":
                                        if (!n)
                                            break;
                                        var o = this.quill.getSelection(!0);
                                        if (null != o) {
                                            var i = o.index + o.length;
                                            this.quill.insertEmbed(i, this.root.getAttribute("data-mode"), n, u.default.sources.USER),
                                            "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(i + 1, " ", u.default.sources.USER),
                                            this.quill.setSelection(i + 2, u.default.sources.USER)
                                        }
                                    }
                                    this.textbox.value = "",
                                    this.hide()
                                }
                            }]),
                            e
                        }(O.default);
                        function C(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            e.forEach(function(e) {
                                var r = document.createElement("option");
                                e === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", e),
                                t.appendChild(r)
                            })
                        }
                        e.BaseTooltip = q,
                        e.default = S
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                            function t() {
                                this.head = this.tail = null,
                                this.length = 0
                            }
                            return t.prototype.append = function() {
                                for (var t = [], e = 0; e < arguments.length; e++)
                                    t[e] = arguments[e];
                                this.insertBefore(t[0], null),
                                t.length > 1 && this.append.apply(this, t.slice(1))
                            }
                            ,
                            t.prototype.contains = function(t) {
                                for (var e, n = this.iterator(); e = n(); )
                                    if (e === t)
                                        return !0;
                                return !1
                            }
                            ,
                            t.prototype.insertBefore = function(t, e) {
                                t && (t.next = e,
                                null != e ? (t.prev = e.prev,
                                null != e.prev && (e.prev.next = t),
                                e.prev = t,
                                e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t,
                                t.prev = this.tail,
                                this.tail = t) : (t.prev = null,
                                this.head = this.tail = t),
                                this.length += 1)
                            }
                            ,
                            t.prototype.offset = function(t) {
                                for (var e = 0, n = this.head; null != n; ) {
                                    if (n === t)
                                        return e;
                                    e += n.length(),
                                    n = n.next
                                }
                                return -1
                            }
                            ,
                            t.prototype.remove = function(t) {
                                this.contains(t) && (null != t.prev && (t.prev.next = t.next),
                                null != t.next && (t.next.prev = t.prev),
                                t === this.head && (this.head = t.next),
                                t === this.tail && (this.tail = t.prev),
                                this.length -= 1)
                            }
                            ,
                            t.prototype.iterator = function(t) {
                                return void 0 === t && (t = this.head),
                                function() {
                                    var e = t;
                                    return null != t && (t = t.next),
                                    e
                                }
                            }
                            ,
                            t.prototype.find = function(t, e) {
                                void 0 === e && (e = !1);
                                for (var n, r = this.iterator(); n = r(); ) {
                                    var o = n.length();
                                    if (t < o || e && t === o && (null == n.next || 0 !== n.next.length()))
                                        return [n, t];
                                    t -= o
                                }
                                return [null, 0]
                            }
                            ,
                            t.prototype.forEach = function(t) {
                                for (var e, n = this.iterator(); e = n(); )
                                    t(e)
                            }
                            ,
                            t.prototype.forEachAt = function(t, e, n) {
                                if (!(e <= 0))
                                    for (var r, o = this.find(t), i = o[0], l = o[1], a = t - l, s = this.iterator(i); (r = s()) && a < t + e; ) {
                                        var u = r.length();
                                        t > a ? n(r, t - a, Math.min(e, a + u - t)) : n(r, 0, Math.min(u, t + e - a)),
                                        a += u
                                    }
                            }
                            ,
                            t.prototype.map = function(t) {
                                return this.reduce(function(e, n) {
                                    return e.push(t(n)),
                                    e
                                }, [])
                            }
                            ,
                            t.prototype.reduce = function(t, e) {
                                for (var n, r = this.iterator(); n = r(); )
                                    e = t(e, n);
                                return e
                            }
                            ,
                            t
                        }();
                        e.default = r
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = n(17)
                          , l = n(1)
                          , a = {
                            attributes: !0,
                            characterData: !0,
                            characterDataOldValue: !0,
                            childList: !0,
                            subtree: !0
                        }
                          , s = function(t) {
                            function e(e) {
                                var n = t.call(this, e) || this;
                                return n.scroll = n,
                                n.observer = new MutationObserver(function(t) {
                                    n.update(t)
                                }
                                ),
                                n.observer.observe(n.domNode, a),
                                n.attach(),
                                n
                            }
                            return o(e, t),
                            e.prototype.detach = function() {
                                t.prototype.detach.call(this),
                                this.observer.disconnect()
                            }
                            ,
                            e.prototype.deleteAt = function(e, n) {
                                this.update(),
                                0 === e && n === this.length() ? this.children.forEach(function(t) {
                                    t.remove()
                                }) : t.prototype.deleteAt.call(this, e, n)
                            }
                            ,
                            e.prototype.formatAt = function(e, n, r, o) {
                                this.update(),
                                t.prototype.formatAt.call(this, e, n, r, o)
                            }
                            ,
                            e.prototype.insertAt = function(e, n, r) {
                                this.update(),
                                t.prototype.insertAt.call(this, e, n, r)
                            }
                            ,
                            e.prototype.optimize = function(e, n) {
                                var r = this;
                                void 0 === e && (e = []),
                                void 0 === n && (n = {}),
                                t.prototype.optimize.call(this, n);
                                for (var o = [].slice.call(this.observer.takeRecords()); o.length > 0; )
                                    e.push(o.pop());
                                for (var a = function(t, e) {
                                    void 0 === e && (e = !0),
                                    null != t && t !== r && null != t.domNode.parentNode && (null == t.domNode[l.DATA_KEY].mutations && (t.domNode[l.DATA_KEY].mutations = []),
                                    e && a(t.parent))
                                }, s = function(t) {
                                    null != t.domNode[l.DATA_KEY] && null != t.domNode[l.DATA_KEY].mutations && (t instanceof i.default && t.children.forEach(s),
                                    t.optimize(n))
                                }, u = e, c = 0; u.length > 0; c += 1) {
                                    if (c >= 100)
                                        throw new Error("[Parchment] Maximum optimize iterations reached");
                                    for (u.forEach(function(t) {
                                        var e = l.find(t.target, !0);
                                        null != e && (e.domNode === t.target && ("childList" === t.type ? (a(l.find(t.previousSibling, !1)),
                                        [].forEach.call(t.addedNodes, function(t) {
                                            var e = l.find(t, !1);
                                            a(e, !1),
                                            e instanceof i.default && e.children.forEach(function(t) {
                                                a(t, !1)
                                            })
                                        })) : "attributes" === t.type && a(e.prev)),
                                        a(e))
                                    }),
                                    this.children.forEach(s),
                                    u = [].slice.call(this.observer.takeRecords()),
                                    o = u.slice(); o.length > 0; )
                                        e.push(o.pop())
                                }
                            }
                            ,
                            e.prototype.update = function(e, n) {
                                var r = this;
                                void 0 === n && (n = {}),
                                (e = e || this.observer.takeRecords()).map(function(t) {
                                    var e = l.find(t.target, !0);
                                    return null == e ? null : null == e.domNode[l.DATA_KEY].mutations ? (e.domNode[l.DATA_KEY].mutations = [t],
                                    e) : (e.domNode[l.DATA_KEY].mutations.push(t),
                                    null)
                                }).forEach(function(t) {
                                    null != t && t !== r && null != t.domNode[l.DATA_KEY] && t.update(t.domNode[l.DATA_KEY].mutations || [], n)
                                }),
                                null != this.domNode[l.DATA_KEY].mutations && t.prototype.update.call(this, this.domNode[l.DATA_KEY].mutations, n),
                                this.optimize(e, n)
                            }
                            ,
                            e.blotName = "scroll",
                            e.defaultChild = "block",
                            e.scope = l.Scope.BLOCK_BLOT,
                            e.tagName = "DIV",
                            e
                        }(i.default);
                        e.default = s
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = n(18)
                          , l = n(1)
                          , a = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return o(e, t),
                            e.formats = function(n) {
                                if (n.tagName !== e.tagName)
                                    return t.formats.call(this, n)
                            }
                            ,
                            e.prototype.format = function(n, r) {
                                var o = this;
                                n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : (this.children.forEach(function(t) {
                                    t instanceof i.default || (t = t.wrap(e.blotName, !0)),
                                    o.attributes.copy(t)
                                }),
                                this.unwrap())
                            }
                            ,
                            e.prototype.formatAt = function(e, n, r, o) {
                                if (null != this.formats()[r] || l.query(r, l.Scope.ATTRIBUTE)) {
                                    var i = this.isolate(e, n);
                                    i.format(r, o)
                                } else
                                    t.prototype.formatAt.call(this, e, n, r, o)
                            }
                            ,
                            e.prototype.optimize = function(n) {
                                t.prototype.optimize.call(this, n);
                                var r = this.formats();
                                if (0 === Object.keys(r).length)
                                    return this.unwrap();
                                var o = this.next;
                                o instanceof e && o.prev === this && function(t, e) {
                                    if (Object.keys(t).length !== Object.keys(e).length)
                                        return !1;
                                    for (var n in t)
                                        if (t[n] !== e[n])
                                            return !1;
                                    return !0
                                }(r, o.formats()) && (o.moveChildren(this),
                                o.remove())
                            }
                            ,
                            e.blotName = "inline",
                            e.scope = l.Scope.INLINE_BLOT,
                            e.tagName = "SPAN",
                            e
                        }(i.default);
                        e.default = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = n(18)
                          , l = n(1)
                          , a = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return o(e, t),
                            e.formats = function(n) {
                                var r = l.query(e.blotName).tagName;
                                if (n.tagName !== r)
                                    return t.formats.call(this, n)
                            }
                            ,
                            e.prototype.format = function(n, r) {
                                null != l.query(n, l.Scope.BLOCK) && (n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : this.replaceWith(e.blotName))
                            }
                            ,
                            e.prototype.formatAt = function(e, n, r, o) {
                                null != l.query(r, l.Scope.BLOCK) ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                            }
                            ,
                            e.prototype.insertAt = function(e, n, r) {
                                if (null == r || null != l.query(n, l.Scope.INLINE))
                                    t.prototype.insertAt.call(this, e, n, r);
                                else {
                                    var o = this.split(e)
                                      , i = l.create(n, r);
                                    o.parent.insertBefore(i, o)
                                }
                            }
                            ,
                            e.prototype.update = function(e, n) {
                                navigator.userAgent.match(/Trident/) ? this.build() : t.prototype.update.call(this, e, n)
                            }
                            ,
                            e.blotName = "block",
                            e.scope = l.Scope.BLOCK_BLOT,
                            e.tagName = "P",
                            e
                        }(i.default);
                        e.default = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = n(19)
                          , l = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return o(e, t),
                            e.formats = function(t) {}
                            ,
                            e.prototype.format = function(e, n) {
                                t.prototype.formatAt.call(this, 0, this.length(), e, n)
                            }
                            ,
                            e.prototype.formatAt = function(e, n, r, o) {
                                0 === e && n === this.length() ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                            }
                            ,
                            e.prototype.formats = function() {
                                return this.statics.formats(this.domNode)
                            }
                            ,
                            e
                        }(i.default);
                        e.default = l
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        ,
                        function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            r(t, e),
                            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                        }
                        );
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = n(19)
                          , l = n(1)
                          , a = function(t) {
                            function e(e) {
                                var n = t.call(this, e) || this;
                                return n.text = n.statics.value(n.domNode),
                                n
                            }
                            return o(e, t),
                            e.create = function(t) {
                                return document.createTextNode(t)
                            }
                            ,
                            e.value = function(t) {
                                var e = t.data;
                                return e.normalize && (e = e.normalize()),
                                e
                            }
                            ,
                            e.prototype.deleteAt = function(t, e) {
                                this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
                            }
                            ,
                            e.prototype.index = function(t, e) {
                                return this.domNode === t ? e : -1
                            }
                            ,
                            e.prototype.insertAt = function(e, n, r) {
                                null == r ? (this.text = this.text.slice(0, e) + n + this.text.slice(e),
                                this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, n, r)
                            }
                            ,
                            e.prototype.length = function() {
                                return this.text.length
                            }
                            ,
                            e.prototype.optimize = function(n) {
                                t.prototype.optimize.call(this, n),
                                this.text = this.statics.value(this.domNode),
                                0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()),
                                this.next.remove())
                            }
                            ,
                            e.prototype.position = function(t, e) {
                                return void 0 === e && (e = !1),
                                [this.domNode, t]
                            }
                            ,
                            e.prototype.split = function(t, e) {
                                if (void 0 === e && (e = !1),
                                !e) {
                                    if (0 === t)
                                        return this;
                                    if (t === this.length())
                                        return this.next
                                }
                                var n = l.create(this.domNode.splitText(t));
                                return this.parent.insertBefore(n, this.next),
                                this.text = this.statics.value(this.domNode),
                                n
                            }
                            ,
                            e.prototype.update = function(t, e) {
                                var n = this;
                                t.some(function(t) {
                                    return "characterData" === t.type && t.target === n.domNode
                                }) && (this.text = this.statics.value(this.domNode))
                            }
                            ,
                            e.prototype.value = function() {
                                return this.text
                            }
                            ,
                            e.blotName = "text",
                            e.scope = l.Scope.INLINE_BLOT,
                            e
                        }(i.default);
                        e.default = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        var r = document.createElement("div");
                        if (r.classList.toggle("test-class", !1),
                        r.classList.contains("test-class")) {
                            var o = DOMTokenList.prototype.toggle;
                            DOMTokenList.prototype.toggle = function(t, e) {
                                return arguments.length > 1 && !this.contains(t) == !e ? e : o.call(this, t)
                            }
                        }
                        String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
                            return e = e || 0,
                            this.substr(e, t.length) === t
                        }
                        ),
                        String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
                            var n = this.toString();
                            ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length),
                            e -= t.length;
                            var r = n.indexOf(t, e);
                            return -1 !== r && r === e
                        }
                        ),
                        Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
                            value: function(t) {
                                if (null === this)
                                    throw new TypeError("Array.prototype.find called on null or undefined");
                                if ("function" != typeof t)
                                    throw new TypeError("predicate must be a function");
                                for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++)
                                    if (e = n[i],
                                    t.call(o, e, i, n))
                                        return e
                            }
                        }),
                        document.addEventListener("DOMContentLoaded", function() {
                            document.execCommand("enableObjectResizing", !1, !1),
                            document.execCommand("autoUrlDetect", !1, !1)
                        })
                    }
                    , function(t, e) {
                        var n = -1
                          , r = 1
                          , o = 0;
                        function i(t, e, u) {
                            if (t == e)
                                return t ? [[o, t]] : [];
                            (u < 0 || t.length < u) && (u = null);
                            var f = a(t, e)
                              , h = t.substring(0, f);
                            t = t.substring(f),
                            e = e.substring(f),
                            f = s(t, e);
                            var p = t.substring(t.length - f);
                            t = t.substring(0, t.length - f),
                            e = e.substring(0, e.length - f);
                            var d = function(t, e) {
                                var u;
                                if (!t)
                                    return [[r, e]];
                                if (!e)
                                    return [[n, t]];
                                var c = t.length > e.length ? t : e
                                  , f = t.length > e.length ? e : t
                                  , h = c.indexOf(f);
                                if (-1 != h)
                                    return u = [[r, c.substring(0, h)], [o, f], [r, c.substring(h + f.length)]],
                                    t.length > e.length && (u[0][0] = u[2][0] = n),
                                    u;
                                if (1 == f.length)
                                    return [[n, t], [r, e]];
                                var p = function(t, e) {
                                    var n = t.length > e.length ? t : e
                                      , r = t.length > e.length ? e : t;
                                    if (n.length < 4 || 2 * r.length < n.length)
                                        return null;
                                    function o(t, e, n) {
                                        for (var r, o, i, l, u = t.substring(n, n + Math.floor(t.length / 4)), c = -1, f = ""; -1 != (c = e.indexOf(u, c + 1)); ) {
                                            var h = a(t.substring(n), e.substring(c))
                                              , p = s(t.substring(0, n), e.substring(0, c));
                                            f.length < p + h && (f = e.substring(c - p, c) + e.substring(c, c + h),
                                            r = t.substring(0, n - p),
                                            o = t.substring(n + h),
                                            i = e.substring(0, c - p),
                                            l = e.substring(c + h))
                                        }
                                        return 2 * f.length >= t.length ? [r, o, i, l, f] : null
                                    }
                                    var i, l, u, c, f, h = o(n, r, Math.ceil(n.length / 4)), p = o(n, r, Math.ceil(n.length / 2));
                                    if (!h && !p)
                                        return null;
                                    i = p ? h && h[4].length > p[4].length ? h : p : h,
                                    t.length > e.length ? (l = i[0],
                                    u = i[1],
                                    c = i[2],
                                    f = i[3]) : (c = i[0],
                                    f = i[1],
                                    l = i[2],
                                    u = i[3]);
                                    var d = i[4];
                                    return [l, u, c, f, d]
                                }(t, e);
                                if (p) {
                                    var d = p[0]
                                      , y = p[1]
                                      , v = p[2]
                                      , b = p[3]
                                      , g = p[4]
                                      , m = i(d, v)
                                      , _ = i(y, b);
                                    return m.concat([[o, g]], _)
                                }
                                return function(t, e) {
                                    for (var o = t.length, i = e.length, a = Math.ceil((o + i) / 2), s = a, u = 2 * a, c = new Array(u), f = new Array(u), h = 0; h < u; h++)
                                        c[h] = -1,
                                        f[h] = -1;
                                    c[s + 1] = 0,
                                    f[s + 1] = 0;
                                    for (var p = o - i, d = p % 2 != 0, y = 0, v = 0, b = 0, g = 0, m = 0; m < a; m++) {
                                        for (var _ = -m + y; _ <= m - v; _ += 2) {
                                            for (var O = s + _, w = (N = _ == -m || _ != m && c[O - 1] < c[O + 1] ? c[O + 1] : c[O - 1] + 1) - _; N < o && w < i && t.charAt(N) == e.charAt(w); )
                                                N++,
                                                w++;
                                            if (c[O] = N,
                                            N > o)
                                                v += 2;
                                            else if (w > i)
                                                y += 2;
                                            else if (d) {
                                                var E = s + p - _;
                                                if (E >= 0 && E < u && -1 != f[E]) {
                                                    var x = o - f[E];
                                                    if (N >= x)
                                                        return l(t, e, N, w)
                                                }
                                            }
                                        }
                                        for (var k = -m + b; k <= m - g; k += 2) {
                                            for (var E = s + k, A = (x = k == -m || k != m && f[E - 1] < f[E + 1] ? f[E + 1] : f[E - 1] + 1) - k; x < o && A < i && t.charAt(o - x - 1) == e.charAt(i - A - 1); )
                                                x++,
                                                A++;
                                            if (f[E] = x,
                                            x > o)
                                                g += 2;
                                            else if (A > i)
                                                b += 2;
                                            else if (!d) {
                                                var O = s + p - k;
                                                if (O >= 0 && O < u && -1 != c[O]) {
                                                    var N = c[O]
                                                      , w = s + N - O;
                                                    if (N >= (x = o - x))
                                                        return l(t, e, N, w)
                                                }
                                            }
                                        }
                                    }
                                    return [[n, t], [r, e]]
                                }(t, e)
                            }(t, e);
                            return h && d.unshift([o, h]),
                            p && d.push([o, p]),
                            function t(e) {
                                e.push([o, ""]);
                                for (var i, l = 0, u = 0, c = 0, f = "", h = ""; l < e.length; )
                                    switch (e[l][0]) {
                                    case r:
                                        c++,
                                        h += e[l][1],
                                        l++;
                                        break;
                                    case n:
                                        u++,
                                        f += e[l][1],
                                        l++;
                                        break;
                                    case o:
                                        u + c > 1 ? (0 !== u && 0 !== c && (0 !== (i = a(h, f)) && (l - u - c > 0 && e[l - u - c - 1][0] == o ? e[l - u - c - 1][1] += h.substring(0, i) : (e.splice(0, 0, [o, h.substring(0, i)]),
                                        l++),
                                        h = h.substring(i),
                                        f = f.substring(i)),
                                        0 !== (i = s(h, f)) && (e[l][1] = h.substring(h.length - i) + e[l][1],
                                        h = h.substring(0, h.length - i),
                                        f = f.substring(0, f.length - i))),
                                        0 === u ? e.splice(l - c, u + c, [r, h]) : 0 === c ? e.splice(l - u, u + c, [n, f]) : e.splice(l - u - c, u + c, [n, f], [r, h]),
                                        l = l - u - c + (u ? 1 : 0) + (c ? 1 : 0) + 1) : 0 !== l && e[l - 1][0] == o ? (e[l - 1][1] += e[l][1],
                                        e.splice(l, 1)) : l++,
                                        c = 0,
                                        u = 0,
                                        f = "",
                                        h = ""
                                    }
                                "" === e[e.length - 1][1] && e.pop();
                                var p = !1;
                                for (l = 1; l < e.length - 1; )
                                    e[l - 1][0] == o && e[l + 1][0] == o && (e[l][1].substring(e[l][1].length - e[l - 1][1].length) == e[l - 1][1] ? (e[l][1] = e[l - 1][1] + e[l][1].substring(0, e[l][1].length - e[l - 1][1].length),
                                    e[l + 1][1] = e[l - 1][1] + e[l + 1][1],
                                    e.splice(l - 1, 1),
                                    p = !0) : e[l][1].substring(0, e[l + 1][1].length) == e[l + 1][1] && (e[l - 1][1] += e[l + 1][1],
                                    e[l][1] = e[l][1].substring(e[l + 1][1].length) + e[l + 1][1],
                                    e.splice(l + 1, 1),
                                    p = !0)),
                                    l++;
                                p && t(e)
                            }(d),
                            null != u && (d = function(t, e) {
                                var r = function(t, e) {
                                    if (0 === e)
                                        return [o, t];
                                    for (var r = 0, i = 0; i < t.length; i++) {
                                        var l = t[i];
                                        if (l[0] === n || l[0] === o) {
                                            var a = r + l[1].length;
                                            if (e === a)
                                                return [i + 1, t];
                                            if (e < a) {
                                                t = t.slice();
                                                var s = e - r
                                                  , u = [l[0], l[1].slice(0, s)]
                                                  , c = [l[0], l[1].slice(s)];
                                                return t.splice(i, 1, u, c),
                                                [i + 1, t]
                                            }
                                            r = a
                                        }
                                    }
                                    throw new Error("cursor_pos is out of bounds!")
                                }(t, e)
                                  , i = r[1]
                                  , l = r[0]
                                  , a = i[l]
                                  , s = i[l + 1];
                                if (null == a)
                                    return t;
                                if (a[0] !== o)
                                    return t;
                                if (null != s && a[1] + s[1] === s[1] + a[1])
                                    return i.splice(l, 2, s, a),
                                    c(i, l, 2);
                                if (null != s && 0 === s[1].indexOf(a[1])) {
                                    i.splice(l, 2, [s[0], a[1]], [0, a[1]]);
                                    var u = s[1].slice(a[1].length);
                                    return u.length > 0 && i.splice(l + 2, 0, [s[0], u]),
                                    c(i, l, 3)
                                }
                                return t
                            }(d, u)),
                            d = function(t) {
                                for (var e = !1, i = function(t) {
                                    return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343
                                }, l = 2; l < t.length; l += 1)
                                    t[l - 2][0] === o && (a = t[l - 2][1]).charCodeAt(a.length - 1) >= 55296 && a.charCodeAt(a.length - 1) <= 56319 && t[l - 1][0] === n && i(t[l - 1][1]) && t[l][0] === r && i(t[l][1]) && (e = !0,
                                    t[l - 1][1] = t[l - 2][1].slice(-1) + t[l - 1][1],
                                    t[l][1] = t[l - 2][1].slice(-1) + t[l][1],
                                    t[l - 2][1] = t[l - 2][1].slice(0, -1));
                                var a;
                                if (!e)
                                    return t;
                                for (var s = [], l = 0; l < t.length; l += 1)
                                    t[l][1].length > 0 && s.push(t[l]);
                                return s
                            }(d)
                        }
                        function l(t, e, n, r) {
                            var o = t.substring(0, n)
                              , l = e.substring(0, r)
                              , a = t.substring(n)
                              , s = e.substring(r)
                              , u = i(o, l)
                              , c = i(a, s);
                            return u.concat(c)
                        }
                        function a(t, e) {
                            if (!t || !e || t.charAt(0) != e.charAt(0))
                                return 0;
                            for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o; )
                                t.substring(i, o) == e.substring(i, o) ? i = n = o : r = o,
                                o = Math.floor((r - n) / 2 + n);
                            return o
                        }
                        function s(t, e) {
                            if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1))
                                return 0;
                            for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o; )
                                t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? i = n = o : r = o,
                                o = Math.floor((r - n) / 2 + n);
                            return o
                        }
                        var u = i;
                        function c(t, e, n) {
                            for (var r = e + n - 1; r >= 0 && r >= e - 1; r--)
                                if (r + 1 < t.length) {
                                    var o = t[r]
                                      , i = t[r + 1];
                                    o[0] === i[1] && t.splice(r, 2, [o[0], o[1] + i[1]])
                                }
                            return t
                        }
                        u.INSERT = r,
                        u.DELETE = n,
                        u.EQUAL = o,
                        t.exports = u
                    }
                    , function(t, e) {
                        function n(t) {
                            var e = [];
                            for (var n in t)
                                e.push(n);
                            return e
                        }
                        (t.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
                    }
                    , function(t, e) {
                        var n = "[object Arguments]" == function() {
                            return Object.prototype.toString.call(arguments)
                        }();
                        function r(t) {
                            return "[object Arguments]" == Object.prototype.toString.call(t)
                        }
                        function o(t) {
                            return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
                        }
                        (e = t.exports = n ? r : o).supported = r,
                        e.unsupported = o
                    }
                    , function(t, e) {
                        "use strict";
                        var n = Object.prototype.hasOwnProperty
                          , r = "~";
                        function o() {}
                        function i(t, e, n) {
                            this.fn = t,
                            this.context = e,
                            this.once = n || !1
                        }
                        function l() {
                            this._events = new o,
                            this._eventsCount = 0
                        }
                        Object.create && (o.prototype = Object.create(null),
                        (new o).__proto__ || (r = !1)),
                        l.prototype.eventNames = function() {
                            var t, e, o = [];
                            if (0 === this._eventsCount)
                                return o;
                            for (e in t = this._events)
                                n.call(t, e) && o.push(r ? e.slice(1) : e);
                            return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o
                        }
                        ,
                        l.prototype.listeners = function(t, e) {
                            var n = r ? r + t : t
                              , o = this._events[n];
                            if (e)
                                return !!o;
                            if (!o)
                                return [];
                            if (o.fn)
                                return [o.fn];
                            for (var i = 0, l = o.length, a = new Array(l); i < l; i++)
                                a[i] = o[i].fn;
                            return a
                        }
                        ,
                        l.prototype.emit = function(t, e, n, o, i, l) {
                            var a = r ? r + t : t;
                            if (!this._events[a])
                                return !1;
                            var s, u, c = this._events[a], f = arguments.length;
                            if (c.fn) {
                                switch (c.once && this.removeListener(t, c.fn, void 0, !0),
                                f) {
                                case 1:
                                    return c.fn.call(c.context),
                                    !0;
                                case 2:
                                    return c.fn.call(c.context, e),
                                    !0;
                                case 3:
                                    return c.fn.call(c.context, e, n),
                                    !0;
                                case 4:
                                    return c.fn.call(c.context, e, n, o),
                                    !0;
                                case 5:
                                    return c.fn.call(c.context, e, n, o, i),
                                    !0;
                                case 6:
                                    return c.fn.call(c.context, e, n, o, i, l),
                                    !0
                                }
                                for (u = 1,
                                s = new Array(f - 1); u < f; u++)
                                    s[u - 1] = arguments[u];
                                c.fn.apply(c.context, s)
                            } else {
                                var h, p = c.length;
                                for (u = 0; u < p; u++)
                                    switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0),
                                    f) {
                                    case 1:
                                        c[u].fn.call(c[u].context);
                                        break;
                                    case 2:
                                        c[u].fn.call(c[u].context, e);
                                        break;
                                    case 3:
                                        c[u].fn.call(c[u].context, e, n);
                                        break;
                                    case 4:
                                        c[u].fn.call(c[u].context, e, n, o);
                                        break;
                                    default:
                                        if (!s)
                                            for (h = 1,
                                            s = new Array(f - 1); h < f; h++)
                                                s[h - 1] = arguments[h];
                                        c[u].fn.apply(c[u].context, s)
                                    }
                            }
                            return !0
                        }
                        ,
                        l.prototype.on = function(t, e, n) {
                            var o = new i(e,n || this)
                              , l = r ? r + t : t;
                            return this._events[l] ? this._events[l].fn ? this._events[l] = [this._events[l], o] : this._events[l].push(o) : (this._events[l] = o,
                            this._eventsCount++),
                            this
                        }
                        ,
                        l.prototype.once = function(t, e, n) {
                            var o = new i(e,n || this,!0)
                              , l = r ? r + t : t;
                            return this._events[l] ? this._events[l].fn ? this._events[l] = [this._events[l], o] : this._events[l].push(o) : (this._events[l] = o,
                            this._eventsCount++),
                            this
                        }
                        ,
                        l.prototype.removeListener = function(t, e, n, i) {
                            var l = r ? r + t : t;
                            if (!this._events[l])
                                return this;
                            if (!e)
                                return 0 == --this._eventsCount ? this._events = new o : delete this._events[l],
                                this;
                            var a = this._events[l];
                            if (a.fn)
                                a.fn !== e || i && !a.once || n && a.context !== n || (0 == --this._eventsCount ? this._events = new o : delete this._events[l]);
                            else {
                                for (var s = 0, u = [], c = a.length; s < c; s++)
                                    (a[s].fn !== e || i && !a[s].once || n && a[s].context !== n) && u.push(a[s]);
                                u.length ? this._events[l] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new o : delete this._events[l]
                            }
                            return this
                        }
                        ,
                        l.prototype.removeAllListeners = function(t) {
                            var e;
                            return t ? (e = r ? r + t : t,
                            this._events[e] && (0 == --this._eventsCount ? this._events = new o : delete this._events[e])) : (this._events = new o,
                            this._eventsCount = 0),
                            this
                        }
                        ,
                        l.prototype.off = l.prototype.removeListener,
                        l.prototype.addListener = l.prototype.on,
                        l.prototype.setMaxListeners = function() {
                            return this
                        }
                        ,
                        l.prefixed = r,
                        l.EventEmitter = l,
                        void 0 !== t && (t.exports = l)
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0;
                        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        }
                        : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }
                          , o = function(t, e) {
                            if (Array.isArray(t))
                                return t;
                            if (Symbol.iterator in Object(t))
                                return function(t, e) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value),
                                        !e || n.length !== e); r = !0)
                                            ;
                                    } catch (t) {
                                        o = !0,
                                        i = t
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                          , i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , l = n(3)
                          , a = A(l)
                          , s = n(2)
                          , u = A(s)
                          , c = n(0)
                          , f = A(c)
                          , h = n(5)
                          , p = A(h)
                          , d = n(10)
                          , y = A(d)
                          , v = n(9)
                          , b = A(v)
                          , g = n(36)
                          , m = n(37)
                          , _ = n(13)
                          , O = A(_)
                          , w = n(26)
                          , E = n(38)
                          , x = n(39)
                          , k = n(40);
                        function A(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function N(t, e, n) {
                            return e in t ? Object.defineProperty(t, e, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = n,
                            t
                        }
                        var j = (0,
                        y.default)("quill:clipboard")
                          , T = "__ql-matcher"
                          , P = [[Node.TEXT_NODE, K], [Node.TEXT_NODE, F], ["br", function(t, e) {
                            return M(e, "\n") || e.insert("\n"),
                            e
                        }
                        ], [Node.ELEMENT_NODE, F], [Node.ELEMENT_NODE, U], [Node.ELEMENT_NODE, H], [Node.ELEMENT_NODE, D], [Node.ELEMENT_NODE, function(t, e) {
                            var n = {}
                              , r = t.style || {};
                            return r.fontStyle && "italic" === R(t).fontStyle && (n.italic = !0),
                            r.fontWeight && (R(t).fontWeight.startsWith("bold") || parseInt(R(t).fontWeight) >= 700) && (n.bold = !0),
                            Object.keys(n).length > 0 && (e = L(e, n)),
                            parseFloat(r.textIndent || 0) > 0 && (e = (new u.default).insert("\t").concat(e)),
                            e
                        }
                        ], ["li", function(t, e) {
                            var n = f.default.query(t);
                            if (null == n || "list-item" !== n.blotName || !M(e, "\n"))
                                return e;
                            for (var r = -1, o = t.parentNode; !o.classList.contains("ql-clipboard"); )
                                "list" === (f.default.query(o) || {}).blotName && (r += 1),
                                o = o.parentNode;
                            return r <= 0 ? e : e.compose((new u.default).retain(e.length() - 1).retain(1, {
                                indent: r
                            }))
                        }
                        ], ["b", B.bind(B, "bold")], ["i", B.bind(B, "italic")], ["style", function() {
                            return new u.default
                        }
                        ]]
                          , S = [g.AlignAttribute, E.DirectionAttribute].reduce(function(t, e) {
                            return t[e.keyName] = e,
                            t
                        }, {})
                          , q = [g.AlignStyle, m.BackgroundStyle, w.ColorStyle, E.DirectionStyle, x.FontStyle, k.SizeStyle].reduce(function(t, e) {
                            return t[e.keyName] = e,
                            t
                        }, {})
                          , C = function(t) {
                            function e(t, n) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var r = function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return r.quill.root.addEventListener("paste", r.onPaste.bind(r)),
                                r.container = r.quill.addContainer("ql-clipboard"),
                                r.container.setAttribute("contenteditable", !0),
                                r.container.setAttribute("tabindex", -1),
                                r.matchers = [],
                                P.concat(r.options.matchers).forEach(function(t) {
                                    var e = o(t, 2)
                                      , i = e[0]
                                      , l = e[1];
                                    (n.matchVisual || l !== H) && r.addMatcher(i, l)
                                }),
                                r
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            i(e, [{
                                key: "addMatcher",
                                value: function(t, e) {
                                    this.matchers.push([t, e])
                                }
                            }, {
                                key: "convert",
                                value: function(t) {
                                    if ("string" == typeof t)
                                        return this.container.innerHTML = t.replace(/\>\r?\n +\</g, "><"),
                                        this.convert();
                                    var e = this.quill.getFormat(this.quill.selection.savedRange.index);
                                    if (e[O.default.blotName]) {
                                        var n = this.container.innerText;
                                        return this.container.innerHTML = "",
                                        (new u.default).insert(n, N({}, O.default.blotName, e[O.default.blotName]))
                                    }
                                    var r = this.prepareMatching()
                                      , i = o(r, 2)
                                      , l = i[0]
                                      , a = i[1]
                                      , s = function t(e, n, r) {
                                        return e.nodeType === e.TEXT_NODE ? r.reduce(function(t, n) {
                                            return n(e, t)
                                        }, new u.default) : e.nodeType === e.ELEMENT_NODE ? [].reduce.call(e.childNodes || [], function(o, i) {
                                            var l = t(i, n, r);
                                            return i.nodeType === e.ELEMENT_NODE && (l = n.reduce(function(t, e) {
                                                return e(i, t)
                                            }, l),
                                            l = (i[T] || []).reduce(function(t, e) {
                                                return e(i, t)
                                            }, l)),
                                            o.concat(l)
                                        }, new u.default) : new u.default
                                    }(this.container, l, a);
                                    return M(s, "\n") && null == s.ops[s.ops.length - 1].attributes && (s = s.compose((new u.default).retain(s.length() - 1).delete(1))),
                                    j.log("convert", this.container.innerHTML, s),
                                    this.container.innerHTML = "",
                                    s
                                }
                            }, {
                                key: "dangerouslyPasteHTML",
                                value: function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.default.sources.API;
                                    if ("string" == typeof t)
                                        this.quill.setContents(this.convert(t), e),
                                        this.quill.setSelection(0, p.default.sources.SILENT);
                                    else {
                                        var r = this.convert(e);
                                        this.quill.updateContents((new u.default).retain(t).concat(r), n),
                                        this.quill.setSelection(t + r.length(), p.default.sources.SILENT)
                                    }
                                }
                            }, {
                                key: "onPaste",
                                value: function(t) {
                                    var e = this;
                                    if (!t.defaultPrevented && this.quill.isEnabled()) {
                                        var n = this.quill.getSelection()
                                          , r = (new u.default).retain(n.index)
                                          , o = this.quill.scrollingContainer.scrollTop;
                                        this.container.focus(),
                                        this.quill.selection.update(p.default.sources.SILENT),
                                        setTimeout(function() {
                                            r = r.concat(e.convert()).delete(n.length),
                                            e.quill.updateContents(r, p.default.sources.USER),
                                            e.quill.setSelection(r.length() - n.length, p.default.sources.SILENT),
                                            e.quill.scrollingContainer.scrollTop = o,
                                            e.quill.focus()
                                        }, 1)
                                    }
                                }
                            }, {
                                key: "prepareMatching",
                                value: function() {
                                    var t = this
                                      , e = []
                                      , n = [];
                                    return this.matchers.forEach(function(r) {
                                        var i = o(r, 2)
                                          , l = i[0]
                                          , a = i[1];
                                        switch (l) {
                                        case Node.TEXT_NODE:
                                            n.push(a);
                                            break;
                                        case Node.ELEMENT_NODE:
                                            e.push(a);
                                            break;
                                        default:
                                            [].forEach.call(t.container.querySelectorAll(l), function(t) {
                                                t[T] = t[T] || [],
                                                t[T].push(a)
                                            })
                                        }
                                    }),
                                    [e, n]
                                }
                            }]),
                            e
                        }(b.default);
                        function L(t, e, n) {
                            return "object" === (void 0 === e ? "undefined" : r(e)) ? Object.keys(e).reduce(function(t, n) {
                                return L(t, n, e[n])
                            }, t) : t.reduce(function(t, r) {
                                return r.attributes && r.attributes[e] ? t.push(r) : t.insert(r.insert, (0,
                                a.default)({}, N({}, e, n), r.attributes))
                            }, new u.default)
                        }
                        function R(t) {
                            return t.nodeType !== Node.ELEMENT_NODE ? {} : t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t))
                        }
                        function M(t, e) {
                            for (var n = "", r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
                                var o = t.ops[r];
                                if ("string" != typeof o.insert)
                                    break;
                                n = o.insert + n
                            }
                            return n.slice(-1 * e.length) === e
                        }
                        function I(t) {
                            if (0 === t.childNodes.length)
                                return !1;
                            var e = R(t);
                            return ["block", "list-item"].indexOf(e.display) > -1
                        }
                        function B(t, e, n) {
                            return L(n, t, !0)
                        }
                        function D(t, e) {
                            var n = f.default.Attributor.Attribute.keys(t)
                              , r = f.default.Attributor.Class.keys(t)
                              , o = f.default.Attributor.Style.keys(t)
                              , i = {};
                            return n.concat(r).concat(o).forEach(function(e) {
                                var n = f.default.query(e, f.default.Scope.ATTRIBUTE);
                                null != n && (i[n.attrName] = n.value(t),
                                i[n.attrName]) || (null == (n = S[e]) || n.attrName !== e && n.keyName !== e || (i[n.attrName] = n.value(t) || void 0),
                                null == (n = q[e]) || n.attrName !== e && n.keyName !== e || (n = q[e],
                                i[n.attrName] = n.value(t) || void 0))
                            }),
                            Object.keys(i).length > 0 && (e = L(e, i)),
                            e
                        }
                        function U(t, e) {
                            var n = f.default.query(t);
                            if (null == n)
                                return e;
                            if (n.prototype instanceof f.default.Embed) {
                                var r = {}
                                  , o = n.value(t);
                                null != o && (r[n.blotName] = o,
                                e = (new u.default).insert(r, n.formats(t)))
                            } else
                                "function" == typeof n.formats && (e = L(e, n.blotName, n.formats(t)));
                            return e
                        }
                        function F(t, e) {
                            return M(e, "\n") || (I(t) || e.length() > 0 && t.nextSibling && I(t.nextSibling)) && e.insert("\n"),
                            e
                        }
                        function H(t, e) {
                            if (I(t) && null != t.nextElementSibling && !M(e, "\n\n")) {
                                var n = t.offsetHeight + parseFloat(R(t).marginTop) + parseFloat(R(t).marginBottom);
                                t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n && e.insert("\n")
                            }
                            return e
                        }
                        function K(t, e) {
                            var n = t.data;
                            if ("O:P" === t.parentNode.tagName)
                                return e.insert(n.trim());
                            if (0 === n.trim().length && t.parentNode.classList.contains("ql-clipboard"))
                                return e;
                            if (!R(t.parentNode).whiteSpace.startsWith("pre")) {
                                var r = function(t, e) {
                                    return (e = e.replace(/[^\u00a0]/g, "")).length < 1 && t ? " " : e
                                };
                                n = (n = n.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0)),
                                (null == t.previousSibling && I(t.parentNode) || null != t.previousSibling && I(t.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))),
                                (null == t.nextSibling && I(t.parentNode) || null != t.nextSibling && I(t.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)))
                            }
                            return e.insert(n)
                        }
                        C.DEFAULTS = {
                            matchers: [],
                            matchVisual: !0
                        },
                        e.default = C,
                        e.matchAttributor = D,
                        e.matchBlot = U,
                        e.matchNewline = F,
                        e.matchSpacing = H,
                        e.matchText = K
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }, l = n(6), a = (r = l) && r.__esModule ? r : {
                            default: r
                        }, s = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "optimize",
                                value: function(t) {
                                    i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t),
                                    this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
                                }
                            }], [{
                                key: "create",
                                value: function() {
                                    return i(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this)
                                }
                            }, {
                                key: "formats",
                                value: function() {
                                    return !0
                                }
                            }]),
                            e
                        }(a.default);
                        s.blotName = "bold",
                        s.tagName = ["STRONG", "B"],
                        e.default = s
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.addControls = e.default = void 0;
                        var r = function(t, e) {
                            if (Array.isArray(t))
                                return t;
                            if (Symbol.iterator in Object(t))
                                return function(t, e) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value),
                                        !e || n.length !== e); r = !0)
                                            ;
                                    } catch (t) {
                                        o = !0,
                                        i = t
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                          , o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , i = n(2)
                          , l = y(i)
                          , a = n(0)
                          , s = y(a)
                          , u = n(5)
                          , c = y(u)
                          , f = n(10)
                          , h = y(f)
                          , p = n(9)
                          , d = y(p);
                        function y(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function v(t, e) {
                            if (!t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }
                        var b = (0,
                        h.default)("quill:toolbar")
                          , g = function(t) {
                            function e(t, n) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var o, i = v(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                if (Array.isArray(i.options.container)) {
                                    var l = document.createElement("div");
                                    _(l, i.options.container),
                                    t.container.parentNode.insertBefore(l, t.container),
                                    i.container = l
                                } else
                                    "string" == typeof i.options.container ? i.container = document.querySelector(i.options.container) : i.container = i.options.container;
                                return i.container instanceof HTMLElement ? (i.container.classList.add("ql-toolbar"),
                                i.controls = [],
                                i.handlers = {},
                                Object.keys(i.options.handlers).forEach(function(t) {
                                    i.addHandler(t, i.options.handlers[t])
                                }),
                                [].forEach.call(i.container.querySelectorAll("button, select"), function(t) {
                                    i.attach(t)
                                }),
                                i.quill.on(c.default.events.EDITOR_CHANGE, function(t, e) {
                                    t === c.default.events.SELECTION_CHANGE && i.update(e)
                                }),
                                i.quill.on(c.default.events.SCROLL_OPTIMIZE, function() {
                                    var t = i.quill.selection.getRange()
                                      , e = r(t, 1)
                                      , n = e[0];
                                    i.update(n)
                                }),
                                i) : (o = b.error("Container required for toolbar", i.options),
                                v(i, o))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "addHandler",
                                value: function(t, e) {
                                    this.handlers[t] = e
                                }
                            }, {
                                key: "attach",
                                value: function(t) {
                                    var e = this
                                      , n = [].find.call(t.classList, function(t) {
                                        return 0 === t.indexOf("ql-")
                                    });
                                    if (n) {
                                        if (n = n.slice("ql-".length),
                                        "BUTTON" === t.tagName && t.setAttribute("type", "button"),
                                        null == this.handlers[n]) {
                                            if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n])
                                                return void b.warn("ignoring attaching to disabled format", n, t);
                                            if (null == s.default.query(n))
                                                return void b.warn("ignoring attaching to nonexistent format", n, t)
                                        }
                                        var o = "SELECT" === t.tagName ? "change" : "click";
                                        t.addEventListener(o, function(o) {
                                            var i = void 0;
                                            if ("SELECT" === t.tagName) {
                                                if (t.selectedIndex < 0)
                                                    return;
                                                var a = t.options[t.selectedIndex];
                                                i = !a.hasAttribute("selected") && (a.value || !1)
                                            } else
                                                i = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")),
                                                o.preventDefault();
                                            e.quill.focus();
                                            var u = e.quill.selection.getRange()
                                              , f = r(u, 1)
                                              , h = f[0];
                                            if (null != e.handlers[n])
                                                e.handlers[n].call(e, i);
                                            else if (s.default.query(n).prototype instanceof s.default.Embed) {
                                                if (!(i = prompt("Enter " + n)))
                                                    return;
                                                e.quill.updateContents((new l.default).retain(h.index).delete(h.length).insert(function(t, e, n) {
                                                    return e in t ? Object.defineProperty(t, e, {
                                                        value: n,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    }) : t[e] = n,
                                                    t
                                                }({}, n, i)), c.default.sources.USER)
                                            } else
                                                e.quill.format(n, i, c.default.sources.USER);
                                            e.update(h)
                                        }),
                                        this.controls.push([n, t])
                                    }
                                }
                            }, {
                                key: "update",
                                value: function(t) {
                                    var e = null == t ? {} : this.quill.getFormat(t);
                                    this.controls.forEach(function(n) {
                                        var o = r(n, 2)
                                          , i = o[0]
                                          , l = o[1];
                                        if ("SELECT" === l.tagName) {
                                            var a = void 0;
                                            if (null == t)
                                                a = null;
                                            else if (null == e[i])
                                                a = l.querySelector("option[selected]");
                                            else if (!Array.isArray(e[i])) {
                                                var s = e[i];
                                                "string" == typeof s && (s = s.replace(/\"/g, '\\"')),
                                                a = l.querySelector('option[value="' + s + '"]')
                                            }
                                            null == a ? (l.value = "",
                                            l.selectedIndex = -1) : a.selected = !0
                                        } else if (null == t)
                                            l.classList.remove("ql-active");
                                        else if (l.hasAttribute("value")) {
                                            var u = e[i] === l.getAttribute("value") || null != e[i] && e[i].toString() === l.getAttribute("value") || null == e[i] && !l.getAttribute("value");
                                            l.classList.toggle("ql-active", u)
                                        } else
                                            l.classList.toggle("ql-active", null != e[i])
                                    })
                                }
                            }]),
                            e
                        }(d.default);
                        function m(t, e, n) {
                            var r = document.createElement("button");
                            r.setAttribute("type", "button"),
                            r.classList.add("ql-" + e),
                            null != n && (r.value = n),
                            t.appendChild(r)
                        }
                        function _(t, e) {
                            Array.isArray(e[0]) || (e = [e]),
                            e.forEach(function(e) {
                                var n = document.createElement("span");
                                n.classList.add("ql-formats"),
                                e.forEach(function(t) {
                                    if ("string" == typeof t)
                                        m(n, t);
                                    else {
                                        var e = Object.keys(t)[0]
                                          , r = t[e];
                                        Array.isArray(r) ? function(t, e, n) {
                                            var r = document.createElement("select");
                                            r.classList.add("ql-" + e),
                                            n.forEach(function(t) {
                                                var e = document.createElement("option");
                                                !1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"),
                                                r.appendChild(e)
                                            }),
                                            t.appendChild(r)
                                        }(n, e, r) : m(n, e, r)
                                    }
                                }),
                                t.appendChild(n)
                            })
                        }
                        g.DEFAULTS = {},
                        g.DEFAULTS = {
                            container: null,
                            handlers: {
                                clean: function() {
                                    var t = this
                                      , e = this.quill.getSelection();
                                    if (null != e)
                                        if (0 == e.length) {
                                            var n = this.quill.getFormat();
                                            Object.keys(n).forEach(function(e) {
                                                null != s.default.query(e, s.default.Scope.INLINE) && t.quill.format(e, !1)
                                            })
                                        } else
                                            this.quill.removeFormat(e, c.default.sources.USER)
                                },
                                direction: function(t) {
                                    var e = this.quill.getFormat().align;
                                    "rtl" === t && null == e ? this.quill.format("align", "right", c.default.sources.USER) : t || "right" !== e || this.quill.format("align", !1, c.default.sources.USER),
                                    this.quill.format("direction", t, c.default.sources.USER)
                                },
                                indent: function(t) {
                                    var e = this.quill.getSelection()
                                      , n = this.quill.getFormat(e)
                                      , r = parseInt(n.indent || 0);
                                    if ("+1" === t || "-1" === t) {
                                        var o = "+1" === t ? 1 : -1;
                                        "rtl" === n.direction && (o *= -1),
                                        this.quill.format("indent", r + o, c.default.sources.USER)
                                    }
                                },
                                link: function(t) {
                                    !0 === t && (t = prompt("Enter link URL:")),
                                    this.quill.format("link", t, c.default.sources.USER)
                                },
                                list: function(t) {
                                    var e = this.quill.getSelection()
                                      , n = this.quill.getFormat(e);
                                    "check" === t ? "checked" === n.list || "unchecked" === n.list ? this.quill.format("list", !1, c.default.sources.USER) : this.quill.format("list", "unchecked", c.default.sources.USER) : this.quill.format("list", t, c.default.sources.USER)
                                }
                            }
                        },
                        e.default = g,
                        e.addControls = _
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }, l = n(28), a = (r = l) && r.__esModule ? r : {
                            default: r
                        }, s = function(t) {
                            function e(t, n) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var r = function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return r.label.innerHTML = n,
                                r.container.classList.add("ql-color-picker"),
                                [].slice.call(r.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(t) {
                                    t.classList.add("ql-primary")
                                }),
                                r
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "buildItem",
                                value: function(t) {
                                    var n = i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "buildItem", this).call(this, t);
                                    return n.style.backgroundColor = t.getAttribute("value") || "",
                                    n
                                }
                            }, {
                                key: "selectItem",
                                value: function(t, n) {
                                    i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n);
                                    var r = this.label.querySelector(".ql-color-label")
                                      , o = t && t.getAttribute("data-value") || "";
                                    r && ("line" === r.tagName ? r.style.stroke = o : r.style.fill = o)
                                }
                            }]),
                            e
                        }(a.default);
                        e.default = s
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = n(28), l = (r = i) && r.__esModule ? r : {
                            default: r
                        }, a = function(t) {
                            function e(t, n) {
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var r = function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return r.container.classList.add("ql-icon-picker"),
                                [].forEach.call(r.container.querySelectorAll(".ql-picker-item"), function(t) {
                                    t.innerHTML = n[t.getAttribute("data-value") || ""]
                                }),
                                r.defaultItem = r.container.querySelector(".ql-selected"),
                                r.selectItem(r.defaultItem),
                                r
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "selectItem",
                                value: function(t, n) {
                                    (function t(e, n, r) {
                                        null === e && (e = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === o) {
                                            var i = Object.getPrototypeOf(e);
                                            return null === i ? void 0 : t(i, n, r)
                                        }
                                        if ("value"in o)
                                            return o.value;
                                        var l = o.get;
                                        return void 0 !== l ? l.call(r) : void 0
                                    }
                                    )(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n),
                                    t = t || this.defaultItem,
                                    this.label.innerHTML = t.innerHTML
                                }
                            }]),
                            e
                        }(l.default);
                        e.default = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = function() {
                            function t(e, n) {
                                var r = this;
                                !function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, t),
                                this.quill = e,
                                this.boundsContainer = n || document.body,
                                this.root = e.addContainer("ql-tooltip"),
                                this.root.innerHTML = this.constructor.TEMPLATE,
                                this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
                                    r.root.style.marginTop = -1 * r.quill.root.scrollTop + "px"
                                }),
                                this.hide()
                            }
                            return r(t, [{
                                key: "hide",
                                value: function() {
                                    this.root.classList.add("ql-hidden")
                                }
                            }, {
                                key: "position",
                                value: function(t) {
                                    var e = t.left + t.width / 2 - this.root.offsetWidth / 2
                                      , n = t.bottom + this.quill.root.scrollTop;
                                    this.root.style.left = e + "px",
                                    this.root.style.top = n + "px",
                                    this.root.classList.remove("ql-flip");
                                    var r = this.boundsContainer.getBoundingClientRect()
                                      , o = this.root.getBoundingClientRect()
                                      , i = 0;
                                    if (o.right > r.right && (i = r.right - o.right,
                                    this.root.style.left = e + i + "px"),
                                    o.left < r.left && (i = r.left - o.left,
                                    this.root.style.left = e + i + "px"),
                                    o.bottom > r.bottom) {
                                        var l = o.bottom - o.top
                                          , a = t.bottom - t.top + l;
                                        this.root.style.top = n - a + "px",
                                        this.root.classList.add("ql-flip")
                                    }
                                    return i
                                }
                            }, {
                                key: "show",
                                value: function() {
                                    this.root.classList.remove("ql-editing"),
                                    this.root.classList.remove("ql-hidden")
                                }
                            }]),
                            t
                        }();
                        e.default = o
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = function(t, e) {
                            if (Array.isArray(t))
                                return t;
                            if (Symbol.iterator in Object(t))
                                return function(t, e) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value),
                                        !e || n.length !== e); r = !0)
                                            ;
                                    } catch (t) {
                                        o = !0,
                                        i = t
                                    } finally {
                                        try {
                                            !r && a.return && a.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                          , o = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }
                          , i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , l = n(3)
                          , a = b(l)
                          , s = n(8)
                          , u = b(s)
                          , c = n(43)
                          , f = b(c)
                          , h = n(27)
                          , p = b(h)
                          , d = n(15)
                          , y = n(41)
                          , v = b(y);
                        function b(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function g(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function m(t, e) {
                            if (!t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }
                        function _(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }
                        var O = [[{
                            header: ["1", "2", "3", !1]
                        }], ["bold", "italic", "underline", "link"], [{
                            list: "ordered"
                        }, {
                            list: "bullet"
                        }], ["clean"]]
                          , w = function(t) {
                            function e(t, n) {
                                g(this, e),
                                null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = O);
                                var r = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return r.quill.container.classList.add("ql-snow"),
                                r
                            }
                            return _(e, t),
                            i(e, [{
                                key: "extendToolbar",
                                value: function(t) {
                                    t.container.classList.add("ql-snow"),
                                    this.buildButtons([].slice.call(t.container.querySelectorAll("button")), v.default),
                                    this.buildPickers([].slice.call(t.container.querySelectorAll("select")), v.default),
                                    this.tooltip = new E(this.quill,this.options.bounds),
                                    t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
                                        key: "K",
                                        shortKey: !0
                                    }, function(e, n) {
                                        t.handlers.link.call(t, !n.format.link)
                                    })
                                }
                            }]),
                            e
                        }(f.default);
                        w.DEFAULTS = (0,
                        a.default)(!0, {}, f.default.DEFAULTS, {
                            modules: {
                                toolbar: {
                                    handlers: {
                                        link: function(t) {
                                            if (t) {
                                                var e = this.quill.getSelection();
                                                if (null == e || 0 == e.length)
                                                    return;
                                                var n = this.quill.getText(e);
                                                /^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:") && (n = "mailto:" + n);
                                                var r = this.quill.theme.tooltip;
                                                r.edit("link", n)
                                            } else
                                                this.quill.format("link", !1)
                                        }
                                    }
                                }
                            }
                        });
                        var E = function(t) {
                            function e(t, n) {
                                g(this, e);
                                var r = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return r.preview = r.root.querySelector("a.ql-preview"),
                                r
                            }
                            return _(e, t),
                            i(e, [{
                                key: "listen",
                                value: function() {
                                    var t = this;
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this),
                                    this.root.querySelector("a.ql-action").addEventListener("click", function(e) {
                                        t.root.classList.contains("ql-editing") ? t.save() : t.edit("link", t.preview.textContent),
                                        e.preventDefault()
                                    }),
                                    this.root.querySelector("a.ql-remove").addEventListener("click", function(e) {
                                        if (null != t.linkRange) {
                                            var n = t.linkRange;
                                            t.restoreFocus(),
                                            t.quill.formatText(n, "link", !1, u.default.sources.USER),
                                            delete t.linkRange
                                        }
                                        e.preventDefault(),
                                        t.hide()
                                    }),
                                    this.quill.on(u.default.events.SELECTION_CHANGE, function(e, n, o) {
                                        if (null != e) {
                                            if (0 === e.length && o === u.default.sources.USER) {
                                                var i = t.quill.scroll.descendant(p.default, e.index)
                                                  , l = r(i, 2)
                                                  , a = l[0]
                                                  , s = l[1];
                                                if (null != a) {
                                                    t.linkRange = new d.Range(e.index - s,a.length());
                                                    var c = p.default.formats(a.domNode);
                                                    return t.preview.textContent = c,
                                                    t.preview.setAttribute("href", c),
                                                    t.show(),
                                                    void t.position(t.quill.getBounds(t.linkRange))
                                                }
                                            } else
                                                delete t.linkRange;
                                            t.hide()
                                        }
                                    })
                                }
                            }, {
                                key: "show",
                                value: function() {
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this),
                                    this.root.removeAttribute("data-mode")
                                }
                            }]),
                            e
                        }(c.BaseTooltip);
                        E.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""),
                        e.default = w
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = n(29)
                          , o = nt(r)
                          , i = n(36)
                          , l = n(38)
                          , a = n(64)
                          , s = n(65)
                          , u = nt(s)
                          , c = n(66)
                          , f = nt(c)
                          , h = n(67)
                          , p = nt(h)
                          , d = n(37)
                          , y = n(26)
                          , v = n(39)
                          , b = n(40)
                          , g = n(56)
                          , m = nt(g)
                          , _ = n(68)
                          , O = nt(_)
                          , w = n(27)
                          , E = nt(w)
                          , x = n(69)
                          , k = nt(x)
                          , A = n(70)
                          , N = nt(A)
                          , j = n(71)
                          , T = nt(j)
                          , P = n(72)
                          , S = nt(P)
                          , q = n(73)
                          , C = nt(q)
                          , L = n(13)
                          , R = nt(L)
                          , M = n(74)
                          , I = nt(M)
                          , B = n(75)
                          , D = nt(B)
                          , U = n(57)
                          , F = nt(U)
                          , H = n(41)
                          , K = nt(H)
                          , z = n(28)
                          , Y = nt(z)
                          , V = n(59)
                          , Z = nt(V)
                          , W = n(60)
                          , G = nt(W)
                          , X = n(61)
                          , $ = nt(X)
                          , Q = n(108)
                          , J = nt(Q)
                          , tt = n(62)
                          , et = nt(tt);
                        function nt(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        o.default.register({
                            "attributors/attribute/direction": l.DirectionAttribute,
                            "attributors/class/align": i.AlignClass,
                            "attributors/class/background": d.BackgroundClass,
                            "attributors/class/color": y.ColorClass,
                            "attributors/class/direction": l.DirectionClass,
                            "attributors/class/font": v.FontClass,
                            "attributors/class/size": b.SizeClass,
                            "attributors/style/align": i.AlignStyle,
                            "attributors/style/background": d.BackgroundStyle,
                            "attributors/style/color": y.ColorStyle,
                            "attributors/style/direction": l.DirectionStyle,
                            "attributors/style/font": v.FontStyle,
                            "attributors/style/size": b.SizeStyle
                        }, !0),
                        o.default.register({
                            "formats/align": i.AlignClass,
                            "formats/direction": l.DirectionClass,
                            "formats/indent": a.IndentClass,
                            "formats/background": d.BackgroundStyle,
                            "formats/color": y.ColorStyle,
                            "formats/font": v.FontClass,
                            "formats/size": b.SizeClass,
                            "formats/blockquote": u.default,
                            "formats/code-block": R.default,
                            "formats/header": f.default,
                            "formats/list": p.default,
                            "formats/bold": m.default,
                            "formats/code": L.Code,
                            "formats/italic": O.default,
                            "formats/link": E.default,
                            "formats/script": k.default,
                            "formats/strike": N.default,
                            "formats/underline": T.default,
                            "formats/image": S.default,
                            "formats/video": C.default,
                            "formats/list/item": h.ListItem,
                            "modules/formula": I.default,
                            "modules/syntax": D.default,
                            "modules/toolbar": F.default,
                            "themes/bubble": J.default,
                            "themes/snow": et.default,
                            "ui/icons": K.default,
                            "ui/picker": Y.default,
                            "ui/icon-picker": G.default,
                            "ui/color-picker": Z.default,
                            "ui/tooltip": $.default
                        }, !0),
                        e.default = o.default
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.IndentClass = void 0;
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }, l = n(0), a = (r = l) && r.__esModule ? r : {
                            default: r
                        }, s = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "add",
                                value: function(t, n) {
                                    if ("+1" === n || "-1" === n) {
                                        var r = this.value(t) || 0;
                                        n = "+1" === n ? r + 1 : r - 1
                                    }
                                    return 0 === n ? (this.remove(t),
                                    !0) : i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, n)
                                }
                            }, {
                                key: "canAdd",
                                value: function(t, n) {
                                    return i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, n) || i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, parseInt(n))
                                }
                            }, {
                                key: "value",
                                value: function(t) {
                                    return parseInt(i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t)) || void 0
                                }
                            }]),
                            e
                        }(a.default.Attributor.Class), u = new s("indent","ql-indent",{
                            scope: a.default.Scope.BLOCK,
                            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
                        });
                        e.IndentClass = u
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = n(4), i = (r = o) && r.__esModule ? r : {
                            default: r
                        }, l = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            e
                        }(i.default);
                        l.blotName = "blockquote",
                        l.tagName = "blockquote",
                        e.default = l
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = n(4), l = (r = i) && r.__esModule ? r : {
                            default: r
                        }, a = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, null, [{
                                key: "formats",
                                value: function(t) {
                                    return this.tagName.indexOf(t.tagName) + 1
                                }
                            }]),
                            e
                        }(l.default);
                        a.blotName = "header",
                        a.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"],
                        e.default = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.default = e.ListItem = void 0;
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }
                          , i = n(0)
                          , l = f(i)
                          , a = n(4)
                          , s = f(a)
                          , u = n(25)
                          , c = f(u);
                        function f(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function h(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function p(t, e) {
                            if (!t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }
                        function d(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }
                        var y = function(t) {
                            function e() {
                                return h(this, e),
                                p(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return d(e, t),
                            r(e, [{
                                key: "format",
                                value: function(t, n) {
                                    t !== v.blotName || n ? o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) : this.replaceWith(l.default.create(this.statics.scope))
                                }
                            }, {
                                key: "remove",
                                value: function() {
                                    null == this.prev && null == this.next ? this.parent.remove() : o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this)
                                }
                            }, {
                                key: "replaceWith",
                                value: function(t, n) {
                                    return this.parent.isolate(this.offset(this.parent), this.length()),
                                    t === this.parent.statics.blotName ? (this.parent.replaceWith(t, n),
                                    this) : (this.parent.unwrap(),
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t, n))
                                }
                            }], [{
                                key: "formats",
                                value: function(t) {
                                    return t.tagName === this.tagName ? void 0 : o(e.__proto__ || Object.getPrototypeOf(e), "formats", this).call(this, t)
                                }
                            }]),
                            e
                        }(s.default);
                        y.blotName = "list-item",
                        y.tagName = "LI";
                        var v = function(t) {
                            function e(t) {
                                h(this, e);
                                var n = p(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
                                  , r = function(e) {
                                    if (e.target.parentNode === t) {
                                        var r = n.statics.formats(t)
                                          , o = l.default.find(e.target);
                                        "checked" === r ? o.format("list", "unchecked") : "unchecked" === r && o.format("list", "checked")
                                    }
                                };
                                return t.addEventListener("touchstart", r),
                                t.addEventListener("mousedown", r),
                                n
                            }
                            return d(e, t),
                            r(e, null, [{
                                key: "create",
                                value: function(t) {
                                    var n = "ordered" === t ? "OL" : "UL"
                                      , r = o(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, n);
                                    return "checked" !== t && "unchecked" !== t || r.setAttribute("data-checked", "checked" === t),
                                    r
                                }
                            }, {
                                key: "formats",
                                value: function(t) {
                                    return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? t.hasAttribute("data-checked") ? "true" === t.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0
                                }
                            }]),
                            r(e, [{
                                key: "format",
                                value: function(t, e) {
                                    this.children.length > 0 && this.children.tail.format(t, e)
                                }
                            }, {
                                key: "formats",
                                value: function() {
                                    return t = {},
                                    e = this.statics.blotName,
                                    n = this.statics.formats(this.domNode),
                                    e in t ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[e] = n,
                                    t;
                                    var t, e, n
                                }
                            }, {
                                key: "insertBefore",
                                value: function(t, n) {
                                    if (t instanceof y)
                                        o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n);
                                    else {
                                        var r = null == n ? this.length() : n.offset(this)
                                          , i = this.split(r);
                                        i.parent.insertBefore(t, i)
                                    }
                                }
                            }, {
                                key: "optimize",
                                value: function(t) {
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
                                    var n = this.next;
                                    null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName === this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n.moveChildren(this),
                                    n.remove())
                                }
                            }, {
                                key: "replace",
                                value: function(t) {
                                    if (t.statics.blotName !== this.statics.blotName) {
                                        var n = l.default.create(this.statics.defaultChild);
                                        t.moveChildren(n),
                                        this.appendChild(n)
                                    }
                                    o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t)
                                }
                            }]),
                            e
                        }(c.default);
                        v.blotName = "list",
                        v.scope = l.default.Scope.BLOCK_BLOT,
                        v.tagName = ["OL", "UL"],
                        v.defaultChild = "list-item",
                        v.allowedChildren = [y],
                        e.ListItem = y,
                        e.default = v
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = n(56), i = (r = o) && r.__esModule ? r : {
                            default: r
                        }, l = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            e
                        }(i.default);
                        l.blotName = "italic",
                        l.tagName = ["EM", "I"],
                        e.default = l
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = n(6), l = (r = i) && r.__esModule ? r : {
                            default: r
                        }, a = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, null, [{
                                key: "create",
                                value: function(t) {
                                    return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : function t(e, n, r) {
                                        null === e && (e = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === o) {
                                            var i = Object.getPrototypeOf(e);
                                            return null === i ? void 0 : t(i, n, r)
                                        }
                                        if ("value"in o)
                                            return o.value;
                                        var l = o.get;
                                        return void 0 !== l ? l.call(r) : void 0
                                    }(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t)
                                }
                            }, {
                                key: "formats",
                                value: function(t) {
                                    return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0
                                }
                            }]),
                            e
                        }(l.default);
                        a.blotName = "script",
                        a.tagName = ["SUB", "SUP"],
                        e.default = a
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = n(6), i = (r = o) && r.__esModule ? r : {
                            default: r
                        }, l = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            e
                        }(i.default);
                        l.blotName = "strike",
                        l.tagName = "S",
                        e.default = l
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = n(6), i = (r = o) && r.__esModule ? r : {
                            default: r
                        }, l = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            e
                        }(i.default);
                        l.blotName = "underline",
                        l.tagName = "U",
                        e.default = l
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }, l = n(0), a = (r = l) && r.__esModule ? r : {
                            default: r
                        }, s = n(27), u = ["alt", "height", "width"], c = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "format",
                                value: function(t, n) {
                                    u.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                                }
                            }], [{
                                key: "create",
                                value: function(t) {
                                    var n = i(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                    return "string" == typeof t && n.setAttribute("src", this.sanitize(t)),
                                    n
                                }
                            }, {
                                key: "formats",
                                value: function(t) {
                                    return u.reduce(function(e, n) {
                                        return t.hasAttribute(n) && (e[n] = t.getAttribute(n)),
                                        e
                                    }, {})
                                }
                            }, {
                                key: "match",
                                value: function(t) {
                                    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
                                }
                            }, {
                                key: "sanitize",
                                value: function(t) {
                                    return (0,
                                    s.sanitize)(t, ["http", "https", "data"]) ? t : "//:0"
                                }
                            }, {
                                key: "value",
                                value: function(t) {
                                    return t.getAttribute("src")
                                }
                            }]),
                            e
                        }(a.default.Embed);
                        c.blotName = "image",
                        c.tagName = "IMG",
                        e.default = c
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r, o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }(), i = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }, l = n(4), a = n(27), s = (r = a) && r.__esModule ? r : {
                            default: r
                        }, u = ["height", "width"], c = function(t) {
                            function e() {
                                return function(t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                function(t, e) {
                                    if (!t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t),
                            o(e, [{
                                key: "format",
                                value: function(t, n) {
                                    u.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                                }
                            }], [{
                                key: "create",
                                value: function(t) {
                                    var n = i(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                    return n.setAttribute("frameborder", "0"),
                                    n.setAttribute("allowfullscreen", !0),
                                    n.setAttribute("src", this.sanitize(t)),
                                    n
                                }
                            }, {
                                key: "formats",
                                value: function(t) {
                                    return u.reduce(function(e, n) {
                                        return t.hasAttribute(n) && (e[n] = t.getAttribute(n)),
                                        e
                                    }, {})
                                }
                            }, {
                                key: "sanitize",
                                value: function(t) {
                                    return s.default.sanitize(t)
                                }
                            }, {
                                key: "value",
                                value: function(t) {
                                    return t.getAttribute("src")
                                }
                            }]),
                            e
                        }(l.BlockEmbed);
                        c.blotName = "video",
                        c.className = "ql-video",
                        c.tagName = "IFRAME",
                        e.default = c
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.default = e.FormulaBlot = void 0;
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = n(35)
                          , i = c(o)
                          , l = n(5)
                          , a = c(l)
                          , s = n(9)
                          , u = c(s);
                        function c(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function f(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function h(t, e) {
                            if (!t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }
                        function p(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }
                        var d = function(t) {
                            function e() {
                                return f(this, e),
                                h(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return p(e, t),
                            r(e, null, [{
                                key: "create",
                                value: function(t) {
                                    var n = function t(e, n, r) {
                                        null === e && (e = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === o) {
                                            var i = Object.getPrototypeOf(e);
                                            return null === i ? void 0 : t(i, n, r)
                                        }
                                        if ("value"in o)
                                            return o.value;
                                        var l = o.get;
                                        return void 0 !== l ? l.call(r) : void 0
                                    }(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                    return "string" == typeof t && (window.katex.render(t, n, {
                                        throwOnError: !1,
                                        errorColor: "#f00"
                                    }),
                                    n.setAttribute("data-value", t)),
                                    n
                                }
                            }, {
                                key: "value",
                                value: function(t) {
                                    return t.getAttribute("data-value")
                                }
                            }]),
                            e
                        }(i.default);
                        d.blotName = "formula",
                        d.className = "ql-formula",
                        d.tagName = "SPAN";
                        var y = function(t) {
                            function e() {
                                f(this, e);
                                var t = h(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                                if (null == window.katex)
                                    throw new Error("Formula module requires KaTeX.");
                                return t
                            }
                            return p(e, t),
                            r(e, null, [{
                                key: "register",
                                value: function() {
                                    a.default.register(d, !0)
                                }
                            }]),
                            e
                        }(u.default);
                        e.FormulaBlot = d,
                        e.default = y
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.default = e.CodeToken = e.CodeBlock = void 0;
                        var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , o = n(0)
                          , i = h(o)
                          , l = n(5)
                          , a = h(l)
                          , s = n(9)
                          , u = h(s)
                          , c = n(13)
                          , f = h(c);
                        function h(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function p(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function d(t, e) {
                            if (!t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }
                        function y(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }
                        var v = function(t) {
                            function e() {
                                return p(this, e),
                                d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return y(e, t),
                            r(e, [{
                                key: "replaceWith",
                                value: function(t) {
                                    this.domNode.textContent = this.domNode.textContent,
                                    this.attach(),
                                    function t(e, n, r) {
                                        null === e && (e = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === o) {
                                            var i = Object.getPrototypeOf(e);
                                            return null === i ? void 0 : t(i, n, r)
                                        }
                                        if ("value"in o)
                                            return o.value;
                                        var l = o.get;
                                        return void 0 !== l ? l.call(r) : void 0
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t)
                                }
                            }, {
                                key: "highlight",
                                value: function(t) {
                                    var e = this.domNode.textContent;
                                    this.cachedText !== e && ((e.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = t(e),
                                    this.domNode.normalize(),
                                    this.attach()),
                                    this.cachedText = e)
                                }
                            }]),
                            e
                        }(f.default);
                        v.className = "ql-syntax";
                        var b = new i.default.Attributor.Class("token","hljs",{
                            scope: i.default.Scope.INLINE
                        })
                          , g = function(t) {
                            function e(t, n) {
                                p(this, e);
                                var r = d(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                if ("function" != typeof r.options.highlight)
                                    throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
                                var o = null;
                                return r.quill.on(a.default.events.SCROLL_OPTIMIZE, function() {
                                    clearTimeout(o),
                                    o = setTimeout(function() {
                                        r.highlight(),
                                        o = null
                                    }, r.options.interval)
                                }),
                                r.highlight(),
                                r
                            }
                            return y(e, t),
                            r(e, null, [{
                                key: "register",
                                value: function() {
                                    a.default.register(b, !0),
                                    a.default.register(v, !0)
                                }
                            }]),
                            r(e, [{
                                key: "highlight",
                                value: function() {
                                    var t = this;
                                    if (!this.quill.selection.composing) {
                                        this.quill.update(a.default.sources.USER);
                                        var e = this.quill.getSelection();
                                        this.quill.scroll.descendants(v).forEach(function(e) {
                                            e.highlight(t.options.highlight)
                                        }),
                                        this.quill.update(a.default.sources.SILENT),
                                        null != e && this.quill.setSelection(e, a.default.sources.SILENT)
                                    }
                                }
                            }]),
                            e
                        }(u.default);
                        g.DEFAULTS = {
                            highlight: null == window.hljs ? null : function(t) {
                                var e = window.hljs.highlightAuto(t);
                                return e.value
                            }
                            ,
                            interval: 1e3
                        },
                        e.CodeBlock = v,
                        e.CodeToken = b,
                        e.default = g
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'
                    }
                    , function(t, e) {
                        t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'
                    }
                    , function(t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }),
                        e.default = e.BubbleTooltip = void 0;
                        var r = function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r)
                            }
                            if ("value"in o)
                                return o.value;
                            var l = o.get;
                            return void 0 !== l ? l.call(r) : void 0
                        }
                          , o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n),
                                r && t(e, r),
                                e
                            }
                        }()
                          , i = n(3)
                          , l = d(i)
                          , a = n(8)
                          , s = d(a)
                          , u = n(43)
                          , c = d(u)
                          , f = n(15)
                          , h = n(41)
                          , p = d(h);
                        function d(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }
                        function y(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function v(t, e) {
                            if (!t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }
                        function b(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }
                        var g = [["bold", "italic", "link"], [{
                            header: 1
                        }, {
                            header: 2
                        }, "blockquote"]]
                          , m = function(t) {
                            function e(t, n) {
                                y(this, e),
                                null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = g);
                                var r = v(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return r.quill.container.classList.add("ql-bubble"),
                                r
                            }
                            return b(e, t),
                            o(e, [{
                                key: "extendToolbar",
                                value: function(t) {
                                    this.tooltip = new _(this.quill,this.options.bounds),
                                    this.tooltip.root.appendChild(t.container),
                                    this.buildButtons([].slice.call(t.container.querySelectorAll("button")), p.default),
                                    this.buildPickers([].slice.call(t.container.querySelectorAll("select")), p.default)
                                }
                            }]),
                            e
                        }(c.default);
                        m.DEFAULTS = (0,
                        l.default)(!0, {}, c.default.DEFAULTS, {
                            modules: {
                                toolbar: {
                                    handlers: {
                                        link: function(t) {
                                            t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1)
                                        }
                                    }
                                }
                            }
                        });
                        var _ = function(t) {
                            function e(t, n) {
                                y(this, e);
                                var r = v(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return r.quill.on(s.default.events.EDITOR_CHANGE, function(t, e, n, o) {
                                    if (t === s.default.events.SELECTION_CHANGE)
                                        if (null != e && e.length > 0 && o === s.default.sources.USER) {
                                            r.show(),
                                            r.root.style.left = "0px",
                                            r.root.style.width = "",
                                            r.root.style.width = r.root.offsetWidth + "px";
                                            var i = r.quill.getLines(e.index, e.length);
                                            if (1 === i.length)
                                                r.position(r.quill.getBounds(e));
                                            else {
                                                var l = i[i.length - 1]
                                                  , a = r.quill.getIndex(l)
                                                  , u = Math.min(l.length() - 1, e.index + e.length - a)
                                                  , c = r.quill.getBounds(new f.Range(a,u));
                                                r.position(c)
                                            }
                                        } else
                                            document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide()
                                }),
                                r
                            }
                            return b(e, t),
                            o(e, [{
                                key: "listen",
                                value: function() {
                                    var t = this;
                                    r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this),
                                    this.root.querySelector(".ql-close").addEventListener("click", function() {
                                        t.root.classList.remove("ql-editing")
                                    }),
                                    this.quill.on(s.default.events.SCROLL_OPTIMIZE, function() {
                                        setTimeout(function() {
                                            if (!t.root.classList.contains("ql-hidden")) {
                                                var e = t.quill.getSelection();
                                                null != e && t.position(t.quill.getBounds(e))
                                            }
                                        }, 1)
                                    })
                                }
                            }, {
                                key: "cancel",
                                value: function() {
                                    this.show()
                                }
                            }, {
                                key: "position",
                                value: function(t) {
                                    var n = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "position", this).call(this, t)
                                      , o = this.root.querySelector(".ql-tooltip-arrow");
                                    if (o.style.marginLeft = "",
                                    0 === n)
                                        return n;
                                    o.style.marginLeft = -1 * n - o.offsetWidth / 2 + "px"
                                }
                            }]),
                            e
                        }(u.BaseTooltip);
                        _.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""),
                        e.BubbleTooltip = _,
                        e.default = m
                    }
                    , function(t, e, n) {
                        t.exports = n(63)
                    }
                    ]).default
                }
                ,
                t.exports = n()
            }
            ).call(this, n(213).Buffer)
        },
        215: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Quill = void 0;
            var r, o = n(214), i = (r = o) && r.__esModule ? r : {
                default: r
            };
            e.Quill = i.default
        }
    });
    if ("object" == typeof n) {
        var r = ["object" == typeof module && "object" == typeof module.exports ? module.exports : null, "undefined" != typeof window ? window : null, t && t !== window ? t : null];
        for (var o in n)
            r[0] && (r[0][o] = n[o]),
            r[1] && "__esModule" !== o && (r[1][o] = n[o]),
            r[2] && (r[2][o] = n[o])
    }
}(this);
