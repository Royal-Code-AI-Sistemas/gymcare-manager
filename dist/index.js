import * as e from "react";
import { createContext as t, createElement as n, forwardRef as r, useContext as i } from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
import { Slot as c } from "@radix-ui/react-slot";
import * as l from "@radix-ui/react-dialog";
import * as u from "@radix-ui/react-dropdown-menu";
import * as d from "@radix-ui/react-label";
import * as f from "@radix-ui/react-select";
import * as p from "@radix-ui/react-separator";
import * as m from "@radix-ui/react-tabs";
import * as h from "@radix-ui/react-tooltip";
//#region node_modules/clsx/dist/clsx.mjs
function g(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = g(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function _() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = g(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var v = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, y = _, b = (e, t) => (n) => {
	if (t?.variants == null) return y(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = v(t) || v(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return y(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, x = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, S = (e, t) => ({
	classGroupId: e,
	validator: t
}), C = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), w = "-", T = [], ee = "arbitrary..", te = (e) => {
	let t = re(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return ne(e);
			let n = e.split(w);
			return E(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? x(i, t) : t : i || T;
			}
			return n[e] || T;
		}
	};
}, E = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = E(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(w) : e.slice(t).join(w), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, ne = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? ee + r : void 0;
})(), re = (e) => {
	let { theme: t, classGroups: n } = e;
	return D(n, t);
}, D = (e, t) => {
	let n = C();
	for (let r in e) {
		let i = e[r];
		O(i, n, r, t);
	}
	return n;
}, O = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		k(i, t, n, r);
	}
}, k = (e, t, n, r) => {
	if (typeof e == "string") {
		ie(e, t, n);
		return;
	}
	if (typeof e == "function") {
		ae(e, t, n, r);
		return;
	}
	A(e, t, n, r);
}, ie = (e, t, n) => {
	let r = e === "" ? t : oe(t, e);
	r.classGroupId = n;
}, ae = (e, t, n, r) => {
	if (se(e)) {
		O(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(S(n, e));
}, A = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		O(o, oe(t, a), n, r);
	}
}, oe = (e, t) => {
	let n = e, r = t.split(w), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = C(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, se = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, ce = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, j = "!", M = ":", N = [], P = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), le = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === M) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(j) ? (c = s.slice(0, -1), l = !0) : s.startsWith(j) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return P(t, l, c, u);
	};
	if (t) {
		let e = t + M, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : P(N, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, F = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, ue = (e) => ({
	cache: ce(e.cacheSize),
	parseClassName: le(e),
	sortModifiers: F(e),
	postfixLookupClassGroupIds: I(e),
	...te(e)
}), I = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, L = /\s+/, R = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(L), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + j : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, z = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = de(n)) && (i && (i += " "), i += r);
	return i;
}, de = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = de(e[r])) && (n && (n += " "), n += t);
	return n;
}, fe = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = ue(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = R(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(z(...e));
}, pe = [], B = (e) => {
	let t = (t) => t[e] || pe;
	return t.isThemeGetter = !0, t;
}, me = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, he = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ge = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, _e = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ve = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ye = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, be = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xe = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, V = (e) => ge.test(e), H = (e) => !!e && !Number.isNaN(Number(e)), U = (e) => !!e && Number.isInteger(Number(e)), Se = (e) => e.endsWith("%") && H(e.slice(0, -1)), W = (e) => _e.test(e), Ce = () => !0, we = (e) => ve.test(e) && !ye.test(e), Te = () => !1, Ee = (e) => be.test(e), De = (e) => xe.test(e), Oe = (e) => !G(e) && !q(e), ke = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Ae = (e) => Y(e, Ge, Te), G = (e) => me.test(e), K = (e) => Y(e, Ke, we), je = (e) => Y(e, qe, H), Me = (e) => Y(e, Ye, Ce), Ne = (e) => Y(e, Je, Te), Pe = (e) => Y(e, Ue, Te), Fe = (e) => Y(e, We, De), Ie = (e) => Y(e, Xe, Ee), q = (e) => he.test(e), J = (e) => X(e, Ke), Le = (e) => X(e, Je), Re = (e) => X(e, Ue), ze = (e) => X(e, Ge), Be = (e) => X(e, We), Ve = (e) => X(e, Xe, !0), He = (e) => X(e, Ye, !0), Y = (e, t, n) => {
	let r = me.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, X = (e, t, n = !1) => {
	let r = he.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Ue = (e) => e === "position" || e === "percentage", We = (e) => e === "image" || e === "url", Ge = (e) => e === "length" || e === "size" || e === "bg-size", Ke = (e) => e === "length", qe = (e) => e === "number", Je = (e) => e === "family-name", Ye = (e) => e === "number" || e === "weight", Xe = (e) => e === "shadow", Ze = /*#__PURE__*/ fe(() => {
	let e = B("color"), t = B("font"), n = B("text"), r = B("font-weight"), i = B("tracking"), a = B("leading"), o = B("breakpoint"), s = B("container"), c = B("spacing"), l = B("radius"), u = B("shadow"), d = B("inset-shadow"), f = B("text-shadow"), p = B("drop-shadow"), m = B("blur"), h = B("perspective"), g = B("aspect"), _ = B("ease"), v = B("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		q,
		G
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		q,
		G,
		c
	], T = () => [
		V,
		"full",
		"auto",
		...w()
	], ee = () => [
		U,
		"none",
		"subgrid",
		q,
		G
	], te = () => [
		"auto",
		{ span: [
			"full",
			U,
			q,
			G
		] },
		U,
		q,
		G
	], E = () => [
		U,
		"auto",
		q,
		G
	], ne = () => [
		"auto",
		"min",
		"max",
		"fr",
		q,
		G
	], re = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], D = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], O = () => ["auto", ...w()], k = () => [
		V,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], ie = () => [
		V,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], ae = () => [
		V,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], A = () => [
		e,
		q,
		G
	], oe = () => [
		...b(),
		Re,
		Pe,
		{ position: [q, G] }
	], se = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ce = () => [
		"auto",
		"cover",
		"contain",
		ze,
		Ae,
		{ size: [q, G] }
	], j = () => [
		Se,
		J,
		K
	], M = () => [
		"",
		"none",
		"full",
		l,
		q,
		G
	], N = () => [
		"",
		H,
		J,
		K
	], P = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], le = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], F = () => [
		H,
		Se,
		Re,
		Pe
	], ue = () => [
		"",
		"none",
		m,
		q,
		G
	], I = () => [
		"none",
		H,
		q,
		G
	], L = () => [
		"none",
		H,
		q,
		G
	], R = () => [
		H,
		q,
		G
	], z = () => [
		V,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [W],
			breakpoint: [W],
			color: [Ce],
			container: [W],
			"drop-shadow": [W],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Oe],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [W],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [W],
			shadow: [W],
			spacing: ["px", H],
			text: [W],
			"text-shadow": [W],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				V,
				G,
				q,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				q,
				G
			] }],
			"container-named": [ke],
			columns: [{ columns: [
				H,
				G,
				q,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				U,
				"auto",
				q,
				G
			] }],
			basis: [{ basis: [
				V,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				H,
				V,
				"auto",
				"initial",
				"none",
				G
			] }],
			grow: [{ grow: [
				"",
				H,
				q,
				G
			] }],
			shrink: [{ shrink: [
				"",
				H,
				q,
				G
			] }],
			order: [{ order: [
				U,
				"first",
				"last",
				"none",
				q,
				G
			] }],
			"grid-cols": [{ "grid-cols": ee() }],
			"col-start-end": [{ col: te() }],
			"col-start": [{ "col-start": E() }],
			"col-end": [{ "col-end": E() }],
			"grid-rows": [{ "grid-rows": ee() }],
			"row-start-end": [{ row: te() }],
			"row-start": [{ "row-start": E() }],
			"row-end": [{ "row-end": E() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ne() }],
			"auto-rows": [{ "auto-rows": ne() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...re(), "normal"] }],
			"justify-items": [{ "justify-items": [...D(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...D()] }],
			"align-content": [{ content: ["normal", ...re()] }],
			"align-items": [{ items: [...D(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...D(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": re() }],
			"place-items": [{ "place-items": [...D(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...D()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: O() }],
			mx: [{ mx: O() }],
			my: [{ my: O() }],
			ms: [{ ms: O() }],
			me: [{ me: O() }],
			mbs: [{ mbs: O() }],
			mbe: [{ mbe: O() }],
			mt: [{ mt: O() }],
			mr: [{ mr: O() }],
			mb: [{ mb: O() }],
			ml: [{ ml: O() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: k() }],
			"inline-size": [{ inline: ["auto", ...ie()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...ie()] }],
			"max-inline-size": [{ "max-inline": ["none", ...ie()] }],
			"block-size": [{ block: ["auto", ...ae()] }],
			"min-block-size": [{ "min-block": ["auto", ...ae()] }],
			"max-block-size": [{ "max-block": ["none", ...ae()] }],
			w: [{ w: [
				s,
				"screen",
				...k()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...k()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...k()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...k()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...k()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...k()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				J,
				K
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				He,
				Me
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Se,
				G
			] }],
			"font-family": [{ font: [
				Le,
				Ne,
				t
			] }],
			"font-features": [{ "font-features": [G] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				q,
				G
			] }],
			"line-clamp": [{ "line-clamp": [
				H,
				"none",
				q,
				je
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				q,
				G
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				q,
				G
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: A() }],
			"text-color": [{ text: A() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...P(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				H,
				"from-font",
				"auto",
				q,
				K
			] }],
			"text-decoration-color": [{ decoration: A() }],
			"underline-offset": [{ "underline-offset": [
				H,
				"auto",
				q,
				G
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				U,
				q,
				G
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				q,
				G
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				q,
				G
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: oe() }],
			"bg-repeat": [{ bg: se() }],
			"bg-size": [{ bg: ce() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						U,
						q,
						G
					],
					radial: [
						"",
						q,
						G
					],
					conic: [
						U,
						q,
						G
					]
				},
				Be,
				Fe
			] }],
			"bg-color": [{ bg: A() }],
			"gradient-from-pos": [{ from: j() }],
			"gradient-via-pos": [{ via: j() }],
			"gradient-to-pos": [{ to: j() }],
			"gradient-from": [{ from: A() }],
			"gradient-via": [{ via: A() }],
			"gradient-to": [{ to: A() }],
			rounded: [{ rounded: M() }],
			"rounded-s": [{ "rounded-s": M() }],
			"rounded-e": [{ "rounded-e": M() }],
			"rounded-t": [{ "rounded-t": M() }],
			"rounded-r": [{ "rounded-r": M() }],
			"rounded-b": [{ "rounded-b": M() }],
			"rounded-l": [{ "rounded-l": M() }],
			"rounded-ss": [{ "rounded-ss": M() }],
			"rounded-se": [{ "rounded-se": M() }],
			"rounded-ee": [{ "rounded-ee": M() }],
			"rounded-es": [{ "rounded-es": M() }],
			"rounded-tl": [{ "rounded-tl": M() }],
			"rounded-tr": [{ "rounded-tr": M() }],
			"rounded-br": [{ "rounded-br": M() }],
			"rounded-bl": [{ "rounded-bl": M() }],
			"border-w": [{ border: N() }],
			"border-w-x": [{ "border-x": N() }],
			"border-w-y": [{ "border-y": N() }],
			"border-w-s": [{ "border-s": N() }],
			"border-w-e": [{ "border-e": N() }],
			"border-w-bs": [{ "border-bs": N() }],
			"border-w-be": [{ "border-be": N() }],
			"border-w-t": [{ "border-t": N() }],
			"border-w-r": [{ "border-r": N() }],
			"border-w-b": [{ "border-b": N() }],
			"border-w-l": [{ "border-l": N() }],
			"divide-x": [{ "divide-x": N() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": N() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...P(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...P(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: A() }],
			"border-color-x": [{ "border-x": A() }],
			"border-color-y": [{ "border-y": A() }],
			"border-color-s": [{ "border-s": A() }],
			"border-color-e": [{ "border-e": A() }],
			"border-color-bs": [{ "border-bs": A() }],
			"border-color-be": [{ "border-be": A() }],
			"border-color-t": [{ "border-t": A() }],
			"border-color-r": [{ "border-r": A() }],
			"border-color-b": [{ "border-b": A() }],
			"border-color-l": [{ "border-l": A() }],
			"divide-color": [{ divide: A() }],
			"outline-style": [{ outline: [
				...P(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				H,
				q,
				G
			] }],
			"outline-w": [{ outline: [
				"",
				H,
				J,
				K
			] }],
			"outline-color": [{ outline: A() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Ve,
				Ie
			] }],
			"shadow-color": [{ shadow: A() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Ve,
				Ie
			] }],
			"inset-shadow-color": [{ "inset-shadow": A() }],
			"ring-w": [{ ring: N() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: A() }],
			"ring-offset-w": [{ "ring-offset": [H, K] }],
			"ring-offset-color": [{ "ring-offset": A() }],
			"inset-ring-w": [{ "inset-ring": N() }],
			"inset-ring-color": [{ "inset-ring": A() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Ve,
				Ie
			] }],
			"text-shadow-color": [{ "text-shadow": A() }],
			opacity: [{ opacity: [
				H,
				q,
				G
			] }],
			"mix-blend": [{ "mix-blend": [
				...le(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": le() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [H] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": F() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": F() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": A() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": A() }],
			"mask-image-t-from-pos": [{ "mask-t-from": F() }],
			"mask-image-t-to-pos": [{ "mask-t-to": F() }],
			"mask-image-t-from-color": [{ "mask-t-from": A() }],
			"mask-image-t-to-color": [{ "mask-t-to": A() }],
			"mask-image-r-from-pos": [{ "mask-r-from": F() }],
			"mask-image-r-to-pos": [{ "mask-r-to": F() }],
			"mask-image-r-from-color": [{ "mask-r-from": A() }],
			"mask-image-r-to-color": [{ "mask-r-to": A() }],
			"mask-image-b-from-pos": [{ "mask-b-from": F() }],
			"mask-image-b-to-pos": [{ "mask-b-to": F() }],
			"mask-image-b-from-color": [{ "mask-b-from": A() }],
			"mask-image-b-to-color": [{ "mask-b-to": A() }],
			"mask-image-l-from-pos": [{ "mask-l-from": F() }],
			"mask-image-l-to-pos": [{ "mask-l-to": F() }],
			"mask-image-l-from-color": [{ "mask-l-from": A() }],
			"mask-image-l-to-color": [{ "mask-l-to": A() }],
			"mask-image-x-from-pos": [{ "mask-x-from": F() }],
			"mask-image-x-to-pos": [{ "mask-x-to": F() }],
			"mask-image-x-from-color": [{ "mask-x-from": A() }],
			"mask-image-x-to-color": [{ "mask-x-to": A() }],
			"mask-image-y-from-pos": [{ "mask-y-from": F() }],
			"mask-image-y-to-pos": [{ "mask-y-to": F() }],
			"mask-image-y-from-color": [{ "mask-y-from": A() }],
			"mask-image-y-to-color": [{ "mask-y-to": A() }],
			"mask-image-radial": [{ "mask-radial": [q, G] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": F() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": F() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": A() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": A() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [H] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": F() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": F() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": A() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": A() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: oe() }],
			"mask-repeat": [{ mask: se() }],
			"mask-size": [{ mask: ce() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				q,
				G
			] }],
			filter: [{ filter: [
				"",
				"none",
				q,
				G
			] }],
			blur: [{ blur: ue() }],
			brightness: [{ brightness: [
				H,
				q,
				G
			] }],
			contrast: [{ contrast: [
				H,
				q,
				G
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Ve,
				Ie
			] }],
			"drop-shadow-color": [{ "drop-shadow": A() }],
			grayscale: [{ grayscale: [
				"",
				H,
				q,
				G
			] }],
			"hue-rotate": [{ "hue-rotate": [
				H,
				q,
				G
			] }],
			invert: [{ invert: [
				"",
				H,
				q,
				G
			] }],
			saturate: [{ saturate: [
				H,
				q,
				G
			] }],
			sepia: [{ sepia: [
				"",
				H,
				q,
				G
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				q,
				G
			] }],
			"backdrop-blur": [{ "backdrop-blur": ue() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				H,
				q,
				G
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				H,
				q,
				G
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				H,
				q,
				G
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				H,
				q,
				G
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				H,
				q,
				G
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				H,
				q,
				G
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				H,
				q,
				G
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				H,
				q,
				G
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				q,
				G
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				H,
				"initial",
				q,
				G
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				q,
				G
			] }],
			delay: [{ delay: [
				H,
				q,
				G
			] }],
			animate: [{ animate: [
				"none",
				v,
				q,
				G
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				q,
				G
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: I() }],
			"rotate-x": [{ "rotate-x": I() }],
			"rotate-y": [{ "rotate-y": I() }],
			"rotate-z": [{ "rotate-z": I() }],
			scale: [{ scale: L() }],
			"scale-x": [{ "scale-x": L() }],
			"scale-y": [{ "scale-y": L() }],
			"scale-z": [{ "scale-z": L() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: R() }],
			"skew-x": [{ "skew-x": R() }],
			"skew-y": [{ "skew-y": R() }],
			transform: [{ transform: [
				q,
				G,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: z() }],
			"translate-x": [{ "translate-x": z() }],
			"translate-y": [{ "translate-y": z() }],
			"translate-z": [{ "translate-z": z() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				U,
				q,
				G
			] }],
			accent: [{ accent: A() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: A() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				q,
				G
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": A() }],
			"scrollbar-track-color": [{ "scrollbar-track": A() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				q,
				G
			] }],
			fill: [{ fill: ["none", ...A()] }],
			"stroke-w": [{ stroke: [
				H,
				J,
				K,
				je
			] }],
			stroke: [{ stroke: ["none", ...A()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/lib/utils.ts
function Z(...e) {
	return Ze(_(e));
}
//#endregion
//#region src/ui/alert.tsx
var Qe = b("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
		success: "border-success/50 text-foreground [&>svg]:text-success dark:border-success [&>svg]:text-success",
		warning: "border-warning/50 text-foreground [&>svg]:text-warning dark:border-warning [&>svg]:text-warning"
	} },
	defaultVariants: { variant: "default" }
}), $e = e.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ o("div", {
	ref: r,
	role: "alert",
	className: Z(Qe({ variant: t }), e),
	...n
}));
$e.displayName = "Alert";
var et = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("h5", {
	ref: n,
	className: Z("mb-1 font-medium leading-none tracking-tight", e),
	...t
}));
et.displayName = "AlertTitle";
var tt = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Z("text-sm [&_p]:leading-relaxed", e),
	...t
}));
tt.displayName = "AlertDescription";
//#endregion
//#region src/ui/badge.tsx
var nt = b("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow",
		secondary: "border-transparent bg-secondary text-secondary-foreground",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow",
		outline: "text-foreground",
		success: "border-transparent bg-success text-success-foreground",
		warning: "border-transparent bg-warning text-warning-foreground",
		error: "border-transparent bg-destructive text-destructive-foreground",
		info: "border-transparent bg-blue-500 text-white"
	} },
	defaultVariants: { variant: "default" }
});
function rt({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ o("div", {
		className: Z(nt({ variant: t }), e),
		...n
	});
}
//#endregion
//#region src/ui/button.tsx
var it = b("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Q({ className: e, variant: t, size: n, asChild: r = !1, ...i }) {
	return /* @__PURE__ */ o(r ? c : "button", {
		className: Z(it({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/ui/card.tsx
var at = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Z("rounded-xl border bg-card text-card-foreground shadow", e),
	...t
}));
at.displayName = "Card";
var ot = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Z("flex flex-col space-y-1.5 p-6", e),
	...t
}));
ot.displayName = "CardHeader";
var st = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Z("font-semibold leading-none tracking-tight", e),
	...t
}));
st.displayName = "CardTitle";
var ct = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Z("text-sm text-muted-foreground", e),
	...t
}));
ct.displayName = "CardDescription";
var lt = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Z("p-6 pt-0", e),
	...t
}));
lt.displayName = "CardContent";
var ut = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Z("flex items-center p-6 pt-0", e),
	...t
}));
ut.displayName = "CardFooter";
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var dt = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), ft = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), pt = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), mt = (e) => {
	let t = pt(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, ht = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, gt = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, _t = t({}), vt = () => i(_t), yt = r(({ color: e, size: t, strokeWidth: r, absoluteStrokeWidth: i, className: a = "", children: o, iconNode: s, ...c }, l) => {
	let { size: u = 24, strokeWidth: d = 2, absoluteStrokeWidth: f = !1, color: p = "currentColor", className: m = "" } = vt() ?? {}, h = i ?? f ? Number(r ?? d) * 24 / Number(t ?? u) : r ?? d;
	return n("svg", {
		ref: l,
		...ht,
		width: t ?? u ?? ht.width,
		height: t ?? u ?? ht.height,
		stroke: e ?? p,
		strokeWidth: h,
		className: dt("lucide", m, a),
		...!o && !gt(c) && { "aria-hidden": "true" },
		...c
	}, [...s.map(([e, t]) => n(e, t)), ...Array.isArray(o) ? o : [o]]);
}), $ = (e, t) => {
	let i = r(({ className: r, ...i }, a) => n(yt, {
		ref: a,
		iconNode: t,
		className: dt(`lucide-${ft(mt(e))}`, `lucide-${e}`, r),
		...i
	}));
	return i.displayName = mt(e), i;
}, bt = $("arrow-down-right", [["path", {
	d: "m7 7 10 10",
	key: "1fmybs"
}], ["path", {
	d: "M17 7v10H7",
	key: "6fjiku"
}]]), xt = $("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]), St = $("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Ct = $("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), wt = $("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), Tt = $("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Et = $("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), Dt = $("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Ot = $("inbox", [["polyline", {
	points: "22 12 16 12 14 15 10 15 8 12 2 12",
	key: "o97t9d"
}], ["path", {
	d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
	key: "oot6mr"
}]]), kt = $("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]), At = $("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), jt = $("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), Mt = l.Root, Nt = l.Trigger, Pt = l.Portal, Ft = l.Close, It = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Overlay, {
	ref: n,
	className: Z("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0", e),
	...t
}));
It.displayName = l.Overlay.displayName;
var Lt = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ s(Pt, { children: [/* @__PURE__ */ o(It, {}), /* @__PURE__ */ s(l.Content, {
	ref: r,
	className: Z("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] sm:rounded-lg", e),
	...n,
	children: [t, /* @__PURE__ */ s(l.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ o(jt, { className: "h-4 w-4" }), /* @__PURE__ */ o("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
Lt.displayName = l.Content.displayName;
var Rt = ({ className: e, ...t }) => /* @__PURE__ */ o("div", {
	className: Z("flex flex-col space-y-1.5 text-center sm:text-left", e),
	...t
});
Rt.displayName = "DialogHeader";
var zt = ({ className: e, ...t }) => /* @__PURE__ */ o("div", {
	className: Z("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
zt.displayName = "DialogFooter";
var Bt = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Title, {
	ref: n,
	className: Z("text-lg font-semibold leading-none tracking-tight", e),
	...t
}));
Bt.displayName = l.Title.displayName;
var Vt = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Description, {
	ref: n,
	className: Z("text-sm text-muted-foreground", e),
	...t
}));
Vt.displayName = l.Description.displayName;
//#endregion
//#region src/ui/dropdown-menu.tsx
var Ht = u.Root, Ut = u.Trigger, Wt = u.Group, Gt = u.Portal, Kt = u.Sub, qt = u.RadioGroup, Jt = e.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ s(u.SubTrigger, {
	ref: i,
	className: Z("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e),
	...r,
	children: [n, /* @__PURE__ */ o(Tt, { className: "ml-auto" })]
}));
Jt.displayName = u.SubTrigger.displayName;
var Yt = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(u.SubContent, {
	ref: n,
	className: Z("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...t
}));
Yt.displayName = u.SubContent.displayName;
var Xt = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ o(u.Portal, { children: /* @__PURE__ */ o(u.Content, {
	ref: r,
	sideOffset: t,
	className: Z("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...n
}) }));
Xt.displayName = u.Content.displayName;
var Zt = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ o(u.Item, {
	ref: r,
	className: Z("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e),
	...n
}));
Zt.displayName = u.Item.displayName;
var Qt = e.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ s(u.CheckboxItem, {
	ref: i,
	className: Z("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: [/* @__PURE__ */ o("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ o(u.ItemIndicator, { children: /* @__PURE__ */ o(St, { className: "h-4 w-4" }) })
	}), t]
}));
Qt.displayName = u.CheckboxItem.displayName;
var $t = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ s(u.RadioItem, {
	ref: r,
	className: Z("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ o("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ o(u.ItemIndicator, { children: /* @__PURE__ */ o(Dt, { className: "h-2 w-2 fill-current" }) })
	}), t]
}));
$t.displayName = u.RadioItem.displayName;
var en = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ o(u.Label, {
	ref: r,
	className: Z("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
	...n
}));
en.displayName = u.Label.displayName;
var tn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(u.Separator, {
	ref: n,
	className: Z("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
tn.displayName = u.Separator.displayName;
var nn = ({ className: e, ...t }) => /* @__PURE__ */ o("span", {
	className: Z("ml-auto text-xs tracking-widest opacity-60", e),
	...t
});
nn.displayName = "DropdownMenuShortcut";
//#endregion
//#region src/ui/input.tsx
var rn = e.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ o("input", {
	type: t,
	className: Z("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e),
	ref: r,
	...n
}));
rn.displayName = "Input";
//#endregion
//#region src/ui/label.tsx
var an = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(d.Root, {
	ref: n,
	className: Z("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", e),
	...t
}));
an.displayName = d.Root.displayName;
//#endregion
//#region src/ui/select.tsx
var on = f.Root, sn = f.Group, cn = f.Value, ln = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ s(f.Trigger, {
	ref: r,
	className: Z("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
	...n,
	children: [t, /* @__PURE__ */ o(f.Icon, {
		asChild: !0,
		children: /* @__PURE__ */ o(Ct, { className: "h-4 w-4 opacity-50" })
	})]
}));
ln.displayName = f.Trigger.displayName;
var un = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(f.ScrollUpButton, {
	ref: n,
	className: Z("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ o(Et, { className: "h-4 w-4" })
}));
un.displayName = f.ScrollUpButton.displayName;
var dn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(f.ScrollDownButton, {
	ref: n,
	className: Z("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ o(Ct, { className: "h-4 w-4" })
}));
dn.displayName = f.ScrollDownButton.displayName;
var fn = e.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, i) => /* @__PURE__ */ o(f.Portal, { children: /* @__PURE__ */ s(f.Content, {
	ref: i,
	className: Z("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
	position: n,
	...r,
	children: [
		/* @__PURE__ */ o(un, {}),
		/* @__PURE__ */ o(f.Viewport, {
			className: Z("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children: t
		}),
		/* @__PURE__ */ o(dn, {})
	]
}) }));
fn.displayName = f.Content.displayName;
var pn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(f.Label, {
	ref: n,
	className: Z("px-2 py-1.5 text-sm font-semibold", e),
	...t
}));
pn.displayName = f.Label.displayName;
var mn = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ s(f.Item, {
	ref: r,
	className: Z("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ o("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ o(f.ItemIndicator, { children: /* @__PURE__ */ o(St, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ o(f.ItemText, { children: t })]
}));
mn.displayName = f.Item.displayName;
var hn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(f.Separator, {
	ref: n,
	className: Z("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
hn.displayName = f.Separator.displayName;
//#endregion
//#region src/ui/separator.tsx
var gn = e.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, i) => /* @__PURE__ */ o(p.Root, {
	ref: i,
	decorative: n,
	orientation: t,
	className: Z("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
	...r
}));
gn.displayName = p.Root.displayName;
//#endregion
//#region src/ui/sheet.tsx
var _n = l.Root, vn = l.Trigger, yn = l.Close, bn = l.Portal, xn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Overlay, {
	className: Z("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0", e),
	...t,
	ref: n
}));
xn.displayName = l.Overlay.displayName;
var Sn = b("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
}), Cn = e.forwardRef(({ side: e = "right", className: t, children: n, ...r }, i) => /* @__PURE__ */ s(bn, { children: [/* @__PURE__ */ o(xn, {}), /* @__PURE__ */ s(l.Content, {
	ref: i,
	className: Z(Sn({ side: e }), t),
	...r,
	children: [n, /* @__PURE__ */ s(l.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ o(jt, { className: "h-4 w-4" }), /* @__PURE__ */ o("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
Cn.displayName = l.Content.displayName;
var wn = ({ className: e, ...t }) => /* @__PURE__ */ o("div", {
	className: Z("flex flex-col space-y-2 text-center sm:text-left", e),
	...t
});
wn.displayName = "SheetHeader";
var Tn = ({ className: e, ...t }) => /* @__PURE__ */ o("div", {
	className: Z("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
Tn.displayName = "SheetFooter";
var En = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Title, {
	ref: n,
	className: Z("text-lg font-semibold text-foreground", e),
	...t
}));
En.displayName = l.Title.displayName;
var Dn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Description, {
	ref: n,
	className: Z("text-sm text-muted-foreground", e),
	...t
}));
Dn.displayName = l.Description.displayName;
//#endregion
//#region src/ui/skeleton.tsx
function On({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		className: Z("animate-pulse rounded-md bg-muted", e),
		...t
	});
}
//#endregion
//#region src/ui/table.tsx
var kn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ o("table", {
		ref: n,
		className: Z("w-full caption-bottom text-sm", e),
		...t
	})
}));
kn.displayName = "Table";
var An = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("thead", {
	ref: n,
	className: Z("[&_tr]:border-b", e),
	...t
}));
An.displayName = "TableHeader";
var jn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("tbody", {
	ref: n,
	className: Z("[&_tr:last-child]:border-0", e),
	...t
}));
jn.displayName = "TableBody";
var Mn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("tfoot", {
	ref: n,
	className: Z("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
	...t
}));
Mn.displayName = "TableFooter";
var Nn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("tr", {
	ref: n,
	className: Z("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", e),
	...t
}));
Nn.displayName = "TableRow";
var Pn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("th", {
	ref: n,
	className: Z("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", e),
	...t
}));
Pn.displayName = "TableHead";
var Fn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("td", {
	ref: n,
	className: Z("p-2 align-middle [&:has([role=checkbox])]:pr-0", e),
	...t
}));
Fn.displayName = "TableCell";
var In = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("caption", {
	ref: n,
	className: Z("mt-4 text-sm text-muted-foreground", e),
	...t
}));
In.displayName = "TableCaption";
//#endregion
//#region src/ui/tabs.tsx
var Ln = m.Root, Rn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(m.List, {
	ref: n,
	className: Z("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", e),
	...t
}));
Rn.displayName = m.List.displayName;
var zn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(m.Trigger, {
	ref: n,
	className: Z("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e),
	...t
}));
zn.displayName = m.Trigger.displayName;
var Bn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(m.Content, {
	ref: n,
	className: Z("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
	...t
}));
Bn.displayName = m.Content.displayName;
//#endregion
//#region src/ui/tooltip.tsx
var Vn = h.Provider, Hn = h.Root, Un = h.Trigger, Wn = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ o(h.Portal, { children: /* @__PURE__ */ o(h.Content, {
	ref: r,
	sideOffset: t,
	className: Z("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...n
}) }));
Wn.displayName = h.Content.displayName;
//#endregion
//#region src/layout/sidebar.tsx
function Gn({ items: e, activeHref: t, onNavigate: n, header: r, footer: i, className: a }) {
	return /* @__PURE__ */ s("div", {
		className: Z("flex h-full flex-col", a),
		children: [
			r,
			/* @__PURE__ */ o("nav", {
				className: "flex flex-1 flex-col gap-1 p-4",
				children: e.map((e) => {
					let r = e.active || t != null && e.href === t, i = e.href ? "a" : "button";
					return /* @__PURE__ */ s(i, {
						href: e.href,
						onClick: e.onClick ?? (() => n?.(e)),
						className: Z("flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors", r ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"),
						children: [
							e.icon ? /* @__PURE__ */ o(e.icon, { className: "size-4 shrink-0" }) : null,
							/* @__PURE__ */ o("span", {
								className: "truncate",
								children: e.label
							}),
							e.badge ? /* @__PURE__ */ o(rt, {
								className: "ml-auto",
								children: e.badge
							}) : null
						]
					}, e.label);
				})
			}),
			i ? /* @__PURE__ */ o("div", {
				className: "mt-auto p-4",
				children: i
			}) : null
		]
	});
}
//#endregion
//#region src/layout/app-shell.tsx
function Kn({ items: e, activeHref: t, onNavigate: n, topbar: r, children: i, sidebarHeader: a, sidebarFooter: c, onMenuClick: l, className: u }) {
	return /* @__PURE__ */ s("div", {
		className: Z("flex h-screen overflow-hidden", u),
		children: [/* @__PURE__ */ o("aside", {
			className: "hidden w-64 shrink-0 border-r bg-background md:flex",
			children: /* @__PURE__ */ o(Gn, {
				items: e,
				activeHref: t,
				onNavigate: n,
				header: a,
				footer: c
			})
		}), /* @__PURE__ */ s("div", {
			className: "flex flex-1 flex-col overflow-hidden",
			children: [/* @__PURE__ */ s("div", {
				className: "flex h-16 shrink-0 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur md:px-6",
				children: [/* @__PURE__ */ s(_n, { children: [/* @__PURE__ */ o(vn, {
					asChild: !0,
					children: /* @__PURE__ */ o(Q, {
						variant: "ghost",
						size: "icon",
						onClick: l,
						"aria-label": "Abrir menu",
						className: "md:hidden",
						children: /* @__PURE__ */ o(kt, { className: "size-5" })
					})
				}), /* @__PURE__ */ s(Cn, {
					side: "left",
					className: "w-64 p-0",
					children: [/* @__PURE__ */ o(En, {
						className: "sr-only",
						children: "Menu"
					}), /* @__PURE__ */ o(Gn, {
						items: e,
						activeHref: t,
						onNavigate: n,
						header: a,
						footer: c
					})]
				})] }), r]
			}), /* @__PURE__ */ o("main", {
				className: "flex-1 overflow-auto",
				children: i
			})]
		})]
	});
}
//#endregion
//#region src/layout/page-header.tsx
function qn({ title: t, description: n, actions: r, breadcrumbs: i, className: a }) {
	return /* @__PURE__ */ s("div", {
		className: Z("flex flex-col gap-2", a),
		children: [i && i.length > 0 ? /* @__PURE__ */ o("nav", {
			className: "flex items-center gap-1 text-sm text-muted-foreground",
			children: i.map((t, n) => {
				let r = n === i.length - 1;
				return /* @__PURE__ */ s(e.Fragment, { children: [n > 0 ? /* @__PURE__ */ o("span", { children: "/" }) : null, t.href && !r ? /* @__PURE__ */ o("a", {
					href: t.href,
					className: "transition-colors hover:text-foreground",
					children: t.label
				}) : /* @__PURE__ */ o("span", {
					className: r ? "font-medium text-foreground" : void 0,
					children: t.label
				})] }, t.label);
			})
		}) : null, /* @__PURE__ */ s("div", {
			className: "flex flex-wrap items-start justify-between gap-4",
			children: [/* @__PURE__ */ s("div", { children: [/* @__PURE__ */ o("h1", {
				className: "text-2xl font-bold tracking-tight",
				children: t
			}), n ? /* @__PURE__ */ o("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: n
			}) : null] }), r ? /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2",
				children: r
			}) : null]
		})]
	});
}
//#endregion
//#region src/layout/topbar.tsx
function Jn({ title: e, subtitle: t, actions: n, onMenuClick: r, showMenu: i, className: a }) {
	return /* @__PURE__ */ s("header", {
		className: Z("sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur md:px-6", a),
		children: [
			i ? /* @__PURE__ */ o(Q, {
				variant: "ghost",
				size: "icon",
				onClick: r,
				"aria-label": "Abrir menu",
				className: "md:hidden",
				children: /* @__PURE__ */ o(kt, { className: "size-5" })
			}) : null,
			/* @__PURE__ */ s("div", {
				className: "min-w-0 flex-1",
				children: [e ? /* @__PURE__ */ o("h1", {
					className: "truncate text-lg font-semibold",
					children: e
				}) : null, t ? /* @__PURE__ */ o("p", {
					className: "truncate text-sm text-muted-foreground",
					children: t
				}) : null]
			}),
			n ? /* @__PURE__ */ o("div", {
				className: "ml-auto flex items-center gap-2",
				children: n
			}) : null
		]
	});
}
//#endregion
//#region src/dashboard/pagination.tsx
function Yn(e, t) {
	if (t <= 7) return Array.from({ length: t }, (e, t) => t + 1);
	let n = [1];
	e > 3 && n.push("...");
	let r = Math.max(2, e - 1), i = Math.min(t - 1, e + 1);
	for (let e = r; e <= i; e++) n.push(e);
	return e < t - 2 && n.push("..."), n.push(t), n;
}
function Xn({ page: e, totalPages: t, onChange: n, className: r }) {
	if (t <= 1) return null;
	let i = Yn(e, t);
	return /* @__PURE__ */ s("div", {
		className: Z("flex items-center justify-between gap-2", r),
		children: [
			/* @__PURE__ */ o(Q, {
				variant: "outline",
				size: "icon",
				disabled: e <= 1,
				onClick: () => n(e - 1),
				"aria-label": "Página anterior",
				children: /* @__PURE__ */ o(wt, {})
			}),
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1",
				children: i.map((t, r) => t === "..." ? /* @__PURE__ */ o("span", {
					className: "px-1 text-sm text-muted-foreground",
					children: "..."
				}, `ellipsis-${r}`) : /* @__PURE__ */ o("button", {
					onClick: () => n(t),
					className: Z("h-9 w-9 rounded-md border text-sm transition-colors", t === e ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"),
					children: t
				}, t))
			}),
			/* @__PURE__ */ o(Q, {
				variant: "outline",
				size: "icon",
				disabled: e >= t,
				onClick: () => n(e + 1),
				"aria-label": "Próxima página",
				children: /* @__PURE__ */ o(Tt, {})
			})
		]
	});
}
//#endregion
//#region src/dashboard/empty-state.tsx
function Zn({ icon: e = Ot, title: t, description: n, action: r, className: i }) {
	return /* @__PURE__ */ s("div", {
		className: Z("flex flex-col items-center justify-center gap-3 py-12 text-center", i),
		children: [
			/* @__PURE__ */ o("div", {
				className: "h-12 w-12 rounded-full bg-muted p-3 text-muted-foreground",
				children: /* @__PURE__ */ o(e, { className: "h-full w-full" })
			}),
			/* @__PURE__ */ s("div", { children: [/* @__PURE__ */ o("p", {
				className: "text-base font-semibold",
				children: t
			}), n && /* @__PURE__ */ o("p", {
				className: "mx-auto mt-1 max-w-sm text-sm text-muted-foreground",
				children: n
			})] }),
			r && /* @__PURE__ */ o("div", {
				className: "mt-1",
				children: r
			})
		]
	});
}
//#endregion
//#region src/dashboard/data-table.tsx
var Qn = {
	left: "text-left",
	center: "text-center",
	right: "text-right"
};
function $n({ columns: t, data: n, searchable: r = !1, searchKeys: i, searchPlaceholder: c = "Buscar...", pageSize: l = 10, onRowClick: u, emptyState: d, className: f }) {
	let [p, m] = e.useState(""), [h, g] = e.useState(1), _ = e.useMemo(() => {
		let e = p.trim().toLowerCase();
		return e ? n.filter((t) => i && i.length > 0 ? i.some((n) => String(t[n] ?? "").toLowerCase().includes(e)) : JSON.stringify(t).toLowerCase().includes(e)) : n;
	}, [
		n,
		p,
		i
	]), v = Math.max(1, Math.ceil(_.length / l)), y = Math.min(h, v), b = e.useMemo(() => {
		let e = (y - 1) * l;
		return _.slice(e, e + l);
	}, [
		_,
		y,
		l
	]), x = e.useCallback((e) => {
		g(Math.min(Math.max(1, e), v));
	}, [v]);
	return /* @__PURE__ */ s("div", {
		className: Z("", f),
		children: [r && /* @__PURE__ */ s("div", {
			className: "relative mb-4",
			children: [/* @__PURE__ */ o(At, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ o(rn, {
				value: p,
				onChange: (e) => {
					m(e.target.value), g(1);
				},
				placeholder: c,
				className: "pl-9"
			})]
		}), _.length === 0 ? d ?? /* @__PURE__ */ o(Zn, {
			title: "Nenhum resultado",
			description: "Tente ajustar a busca ou o filtro aplicado."
		}) : /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ s("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", {
					className: "border-b text-left text-xs uppercase text-muted-foreground",
					children: t.map((e) => /* @__PURE__ */ o("th", {
						className: Z("px-3 py-2 font-medium", Qn[e.align ?? "left"], e.className),
						children: e.header
					}, e.key))
				}) }), /* @__PURE__ */ o("tbody", { children: b.map((e, n) => /* @__PURE__ */ o("tr", {
					onClick: u ? () => u(e) : void 0,
					className: Z("border-b hover:bg-muted/50", u && "cursor-pointer"),
					children: t.map((t) => /* @__PURE__ */ o("td", {
						className: Z("px-3 py-2", Qn[t.align ?? "left"], t.className),
						children: t.accessor ? t.accessor(e) : String(e[t.key] ?? "")
					}, t.key))
				}, n)) })]
			})
		}), v > 1 && /* @__PURE__ */ o("div", {
			className: "mt-4",
			children: /* @__PURE__ */ o(Xn, {
				page: y,
				totalPages: v,
				onChange: x
			})
		})] })]
	});
}
//#endregion
//#region src/dashboard/stat-card.tsx
function er({ title: e, value: t, icon: n, trend: r, description: i, footer: a, className: c }) {
	return /* @__PURE__ */ s(at, {
		className: Z("", c),
		children: [
			/* @__PURE__ */ s(ot, {
				className: "flex flex-row items-center justify-between space-y-0",
				children: [/* @__PURE__ */ o(st, {
					className: "text-sm font-medium text-muted-foreground",
					children: e
				}), n && /* @__PURE__ */ o("div", {
					className: "rounded-lg bg-primary/10 p-2 text-primary",
					children: /* @__PURE__ */ o(n, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ s(lt, { children: [/* @__PURE__ */ s("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ o("span", {
					className: "text-3xl font-bold tracking-tight",
					children: t
				}), r && /* @__PURE__ */ s("span", {
					className: Z("inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium", r.positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"),
					children: [r.positive ? /* @__PURE__ */ o(xt, { className: "h-3 w-3" }) : /* @__PURE__ */ o(bt, { className: "h-3 w-3" }), r.value]
				})]
			}), i && /* @__PURE__ */ o("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: i
			})] }),
			a && /* @__PURE__ */ o(ut, {
				className: "border-t px-6 py-4 text-sm text-muted-foreground",
				children: a
			})
		]
	});
}
//#endregion
//#region src/dashboard/status-badge.tsx
var tr = {
	success: "bg-success/15 text-success",
	warning: "bg-warning/15 text-amber-700 dark:text-amber-300",
	error: "bg-destructive/15 text-red-700 dark:text-red-300",
	info: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
	neutral: "bg-muted text-muted-foreground"
};
function nr({ label: e, tone: t = "neutral", dot: n = !1, className: r }) {
	return /* @__PURE__ */ s("span", {
		className: Z("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", tr[t], r),
		children: [n && /* @__PURE__ */ o("span", { className: "h-1.5 w-1.5 rounded-full bg-current" }), e]
	});
}
//#endregion
export { $e as Alert, tt as AlertDescription, et as AlertTitle, Kn as AppShell, rt as Badge, Q as Button, at as Card, lt as CardContent, ct as CardDescription, ut as CardFooter, ot as CardHeader, st as CardTitle, $n as DataTable, Mt as Dialog, Ft as DialogClose, Lt as DialogContent, Vt as DialogDescription, zt as DialogFooter, Rt as DialogHeader, It as DialogOverlay, Pt as DialogPortal, Bt as DialogTitle, Nt as DialogTrigger, Ht as DropdownMenu, Qt as DropdownMenuCheckboxItem, Xt as DropdownMenuContent, Wt as DropdownMenuGroup, Zt as DropdownMenuItem, en as DropdownMenuLabel, Gt as DropdownMenuPortal, qt as DropdownMenuRadioGroup, $t as DropdownMenuRadioItem, tn as DropdownMenuSeparator, nn as DropdownMenuShortcut, Kt as DropdownMenuSub, Yt as DropdownMenuSubContent, Jt as DropdownMenuSubTrigger, Ut as DropdownMenuTrigger, Zn as EmptyState, rn as Input, an as Label, qn as PageHeader, Xn as Pagination, on as Select, fn as SelectContent, sn as SelectGroup, mn as SelectItem, pn as SelectLabel, dn as SelectScrollDownButton, un as SelectScrollUpButton, hn as SelectSeparator, ln as SelectTrigger, cn as SelectValue, gn as Separator, _n as Sheet, yn as SheetClose, Cn as SheetContent, Dn as SheetDescription, Tn as SheetFooter, wn as SheetHeader, xn as SheetOverlay, bn as SheetPortal, En as SheetTitle, vn as SheetTrigger, Gn as Sidebar, On as Skeleton, er as StatCard, nr as StatusBadge, kn as Table, jn as TableBody, In as TableCaption, Fn as TableCell, Mn as TableFooter, Pn as TableHead, An as TableHeader, Nn as TableRow, Ln as Tabs, Bn as TabsContent, Rn as TabsList, zn as TabsTrigger, Hn as Tooltip, Wn as TooltipContent, Vn as TooltipProvider, Un as TooltipTrigger, Jn as Topbar, nt as badgeVariants, it as buttonVariants, Z as cn };

//# sourceMappingURL=index.js.map