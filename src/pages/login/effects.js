! function(t, e) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = e(require("react"));
	else if ("function" == typeof define && define.amd) define(["react"], e);
	else {
		var n = "object" == typeof exports ? e(require("react")) : e(t.react);
		for (var o in n)("object" == typeof exports ? exports : t)[o] = n[o]
	}
}(window, function(t) {
	return function(t) {
		var e = {};

		function n(o) {
			if (e[o]) return e[o].exports;
			var r = e[o] = {
				i: o,
				l: !1,
				exports: {}
			};
			return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
		}
		return n.m = t, n.c = e, n.d = function(t, e, o) {
			n.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: o
			})
		}, n.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, n.t = function(t, e) {
			if (1 & e && (t = n(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var o = Object.create(null);
			if (n.r(o), Object.defineProperty(o, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t)
				for (var r in t) n.d(o, r, function(e) {
					return t[e]
				}.bind(null, r));
			return o
		}, n.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return n.d(e, "a", e), e
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, n.p = "", n(n.s = 1)
	}([function(e, n) {
		e.exports = t
	}, function(t, e, n) {
		"use strict";
		n.r(e);
		var o = n(0),
			r = n.n(o);

		function i(t) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
					typeof t
			})(t)
		}

		function a(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {},
					o = Object.keys(n);
				"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(
					function(t) {
						return Object.getOwnPropertyDescriptor(n, t).enumerable
					}))), o.forEach(function(e) {
					p(t, e, n[e])
				})
			}
			return t
		}

		function u(t) {
			return function(t) {
				if (Array.isArray(t)) {
					for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
					return n
				}
			}(t) || function(t) {
				if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(
					t)
			}(t) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance")
			}()
		}

		function c(t, e) {
			for (var n = 0; n < e.length; n++) {
				var o = e[n];
				o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(
					t, o.key, o)
			}
		}

		function l(t) {
			return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function f(t, e) {
			return (f = Object.setPrototypeOf || function(t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function s(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function p(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var y = function(t) {
			function e(t) {
				var n, o, r;
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), o = this, r = l(e).call(this, t), p(s(s(n = !r || "object" !== i(r) && "function" != typeof r ? s(
					o) : r)), "shouldComponentUpdate", function(t) {
					var e = t.config;
					return e && void 0 != e.follow && n.props.config.follow !== e.follow && n.mouseEvent(e.follow), !0
				}), p(s(s(n)), "componentDidMount", function() {
					var t = n.canvasRef.parentNode.style;
					t.position && "static" !== t.positon || (t.position = "relative"), n.setSize(n.init), window.addEventListener(
						"resize", n.setSize)
				}), p(s(s(n)), "setSize", function(t) {
					var e = n.canvasRef.parentNode;
					n.setState({
						outDivWidth: e.clientWidth,
						outDivHeight: e.clientHeight
					}, "function" == typeof t ? t : null)
				}), p(s(s(n)), "randomPoints", function() {
					for (var t = n.state.canvasConfig, e = t.count, o = t.dist, r = s(s(n)).canvasRef, i = [], a = r.clientWidth,
							u = r.clientHeight, c = 0; c < e; ++c) i.push({
						x: Math.random() * a,
						y: Math.random() * u,
						xStep: 2 * Math.random() - 1,
						yStep: 2 * Math.random() - 1,
						max: o
					});
					return i
				}), p(s(s(n)), "setCanvas", function(t) {
					n.canvasRef = t
				}), p(s(s(n)), "init", function() {
					var t = n.state.canvasConfig,
						e = t.mouseDist,
						o = t.follow,
						r = n.randomPoints(),
						i = {
							x: null,
							y: null,
							max: e
						},
						a = u(r).concat([i]);
					n.setState({
						context: n.canvasRef.getContext("2d"),
						points: r,
						pointsWithMouse: a
					}, function() {
						n.mouseEvent(o), requestAnimationFrame(n.drawNest)
					})
				}), p(s(s(n)), "mouseEvent", function(t) {
					var e = n.canvasRef.parentNode,
						o = function(t, e) {
							var o = n.state,
								r = o.pointsWithMouse,
								i = o.canvasConfig,
								a = u(r);
							a[a.length - 1] = {
								x: t,
								y: e,
								max: i.mouseDist
							}, n.setState({
								pointsWithMouse: a
							})
						},
						r = function() {
							o(null, null)
						};
					t ? (e.onmousemove = function(t) {

						var scrollTop = document.body.scrollTop || (document.documentElement && document.documentElement.scrollTop);
					

						var scrollLeft = document.body.scrollLeft || (document.documentElement && document.documentElement.scrollLeft);
						var n = t.clientX - e.offsetLeft + scrollLeft,
							r = t.clientY - e.offsetTop + scrollTop;
						o(n, r)
					}, e.onmouseout = r) : (e.onmousemove = null, e.onmouseout = null, r())
				}), p(s(s(n)), "drawNest", function() {
					var t = n.state,
						e = t.context,
						o = t.outDivWidth,
						r = t.outDivHeight,
						i = t.points,
						a = t.pointsWithMouse,
						u = t.canvasConfig,
						c = u.pointColor,
						l = u.pointR,
						f = u.pointOpacity,
						s = u.lineWidth,
						p = u.lineColor;
					e.clearRect(0, 0, o, r);
					for (var y = 0; y < i.length; ++y) {
						var v = i[y];
						e.beginPath(), e.fillStyle = "rgba(".concat(c, ",").concat(f, ")"), e.arc(v.x, v.y, l, 0, 2 * Math.PI), e.fill(),
							v.x += v.xStep, v.y += v.yStep, v.xStep *= v.x + l > o || v.x - l < 0 ? -1 : 1, v.yStep *= v.y + l > r ||
							v.y - l < 0 ? -1 : 1;
						for (var m = 0; m < a.length; ++m) {
							var d = a[m];
							if (d.x) {
								var b = v.x - d.x,
									h = v.y - d.y,
									g = b * b + h * h;
								g < d.max && m + 1 === a.length && g >= d.max / 2 && (v.x -= .03 * b, v.y -= .03 * h);
								var x = (d.max - g) / d.max;
								e.beginPath(), e.lineWidth = x * s / 2, e.strokeStyle = "rgba(".concat(p, ",").concat(x, ")"), e.moveTo(
									v.x, v.y), e.lineTo(d.x, d.y), e.stroke()
							}
						}
					}
					n.raf = requestAnimationFrame(n.drawNest)
				});
				var c = n.props,
					f = c.style,
					y = c.config,
					v = a({
						zIndex: -1,
						opacity: 1,
						display: "block",
						position: "absolute"
					}, f),
					m = a({
						count: 88,
						dist: 6e3,
						pointOpacity: 1,
						lineColor: "0, 0, 0",
						lineWidth: 1,
						pointColor: "114, 114, 114",
						pointR: 1,
						follow: !0,
						mouseDist: 2e4
					}, y);
				return n.state = {
					outDivWidth: null,
					outDivHeight: null,
					canvasStyle: v,
					canvasConfig: m
				}, n
			}
			var n, y, v;
			return function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError(
					"Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && f(t, e)
			}(e, o["Component"]), n = e, (y = [{
				key: "componentWillUnmount",
				value: function() {
					window.removeEventListener("resize", this.setSize), cancelAnimationFrame(this.raf), this.canvasRef.parentNode
						.removeChild(this.canvasRef)
				}
			}, {
				key: "render",
				value: function() {
					var t = this.state,
						e = t.canvasStyle,
						n = t.outDivWidth,
						o = t.outDivHeight;
					return r.a.createElement("canvas", {
						ref: this.setCanvas,
						style: e,
						width: n,
						height: o,
						className: this.props.className || ""
					})
				}
			}]) && c(n.prototype, y), v && c(n, v), e
		}();
		e.default = y
	}])
});
