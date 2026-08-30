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
		A(e, t, n);
		return;
	}
	if (typeof e == "function") {
		j(e, t, n, r);
		return;
	}
	M(e, t, n, r);
}, A = (e, t, n) => {
	let r = e === "" ? t : ie(t, e);
	r.classGroupId = n;
}, j = (e, t, n, r) => {
	if (ae(e)) {
		O(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(S(n, e));
}, M = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		O(o, ie(t, a), n, r);
	}
}, ie = (e, t) => {
	let n = e, r = t.split(w), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = C(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, ae = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, oe = (e) => {
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
}, N = "!", P = ":", F = [], I = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), se = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === P) {
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
		s.endsWith(N) ? (c = s.slice(0, -1), l = !0) : s.startsWith(N) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return I(t, l, c, u);
	};
	if (t) {
		let e = t + P, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : I(F, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, L = (e) => {
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
}, ce = (e) => ({
	cache: oe(e.cacheSize),
	parseClassName: se(e),
	sortModifiers: L(e),
	postfixLookupClassGroupIds: R(e),
	...te(e)
}), R = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, z = /\s+/, le = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(z), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + N : _, y = v + g;
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
}, B = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = ue(n)) && (i && (i += " "), i += r);
	return i;
}, ue = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = ue(e[r])) && (n && (n += " "), n += t);
	return n;
}, de = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = ce(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = le(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(B(...e));
}, fe = [], V = (e) => {
	let t = (t) => t[e] || fe;
	return t.isThemeGetter = !0, t;
}, pe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, me = /^\((?:(\w[\w-]*):)?(.+)\)$/i, he = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ge = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _e = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ve = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ye = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, be = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, H = (e) => he.test(e), U = (e) => !!e && !Number.isNaN(Number(e)), W = (e) => !!e && Number.isInteger(Number(e)), xe = (e) => e.endsWith("%") && U(e.slice(0, -1)), G = (e) => ge.test(e), Se = () => !0, Ce = (e) => _e.test(e) && !ve.test(e), we = () => !1, Te = (e) => ye.test(e), Ee = (e) => be.test(e), De = (e) => !K(e) && !J(e), Oe = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), ke = (e) => X(e, We, we), K = (e) => pe.test(e), q = (e) => X(e, Ge, Ce), Ae = (e) => X(e, Ke, U), je = (e) => X(e, Je, Se), Me = (e) => X(e, qe, we), Ne = (e) => X(e, He, we), Pe = (e) => X(e, Ue, Ee), Fe = (e) => X(e, Ye, Te), J = (e) => me.test(e), Y = (e) => Z(e, Ge), Ie = (e) => Z(e, qe), Le = (e) => Z(e, He), Re = (e) => Z(e, We), ze = (e) => Z(e, Ue), Be = (e) => Z(e, Ye, !0), Ve = (e) => Z(e, Je, !0), X = (e, t, n) => {
	let r = pe.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Z = (e, t, n = !1) => {
	let r = me.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, He = (e) => e === "position" || e === "percentage", Ue = (e) => e === "image" || e === "url", We = (e) => e === "length" || e === "size" || e === "bg-size", Ge = (e) => e === "length", Ke = (e) => e === "number", qe = (e) => e === "family-name", Je = (e) => e === "number" || e === "weight", Ye = (e) => e === "shadow", Xe = /*#__PURE__*/ de(() => {
	let e = V("color"), t = V("font"), n = V("text"), r = V("font-weight"), i = V("tracking"), a = V("leading"), o = V("breakpoint"), s = V("container"), c = V("spacing"), l = V("radius"), u = V("shadow"), d = V("inset-shadow"), f = V("text-shadow"), p = V("drop-shadow"), m = V("blur"), h = V("perspective"), g = V("aspect"), _ = V("ease"), v = V("animate"), y = () => [
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
		J,
		K
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
		J,
		K,
		c
	], T = () => [
		H,
		"full",
		"auto",
		...w()
	], ee = () => [
		W,
		"none",
		"subgrid",
		J,
		K
	], te = () => [
		"auto",
		{ span: [
			"full",
			W,
			J,
			K
		] },
		W,
		J,
		K
	], E = () => [
		W,
		"auto",
		J,
		K
	], ne = () => [
		"auto",
		"min",
		"max",
		"fr",
		J,
		K
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
		H,
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
	], A = () => [
		H,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], j = () => [
		H,
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
	], M = () => [
		e,
		J,
		K
	], ie = () => [
		...b(),
		Le,
		Ne,
		{ position: [J, K] }
	], ae = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], oe = () => [
		"auto",
		"cover",
		"contain",
		Re,
		ke,
		{ size: [J, K] }
	], N = () => [
		xe,
		Y,
		q
	], P = () => [
		"",
		"none",
		"full",
		l,
		J,
		K
	], F = () => [
		"",
		U,
		Y,
		q
	], I = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], se = () => [
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
	], L = () => [
		U,
		xe,
		Le,
		Ne
	], ce = () => [
		"",
		"none",
		m,
		J,
		K
	], R = () => [
		"none",
		U,
		J,
		K
	], z = () => [
		"none",
		U,
		J,
		K
	], le = () => [
		U,
		J,
		K
	], B = () => [
		H,
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
			blur: [G],
			breakpoint: [G],
			color: [Se],
			container: [G],
			"drop-shadow": [G],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [De],
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
			"inset-shadow": [G],
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
			radius: [G],
			shadow: [G],
			spacing: ["px", U],
			text: [G],
			"text-shadow": [G],
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
				H,
				K,
				J,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				J,
				K
			] }],
			"container-named": [Oe],
			columns: [{ columns: [
				U,
				K,
				J,
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
				W,
				"auto",
				J,
				K
			] }],
			basis: [{ basis: [
				H,
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
				U,
				H,
				"auto",
				"initial",
				"none",
				K
			] }],
			grow: [{ grow: [
				"",
				U,
				J,
				K
			] }],
			shrink: [{ shrink: [
				"",
				U,
				J,
				K
			] }],
			order: [{ order: [
				W,
				"first",
				"last",
				"none",
				J,
				K
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
			"inline-size": [{ inline: ["auto", ...A()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...A()] }],
			"max-inline-size": [{ "max-inline": ["none", ...A()] }],
			"block-size": [{ block: ["auto", ...j()] }],
			"min-block-size": [{ "min-block": ["auto", ...j()] }],
			"max-block-size": [{ "max-block": ["none", ...j()] }],
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
				Y,
				q
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Ve,
				je
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
				xe,
				K
			] }],
			"font-family": [{ font: [
				Ie,
				Me,
				t
			] }],
			"font-features": [{ "font-features": [K] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				J,
				K
			] }],
			"line-clamp": [{ "line-clamp": [
				U,
				"none",
				J,
				Ae
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				J,
				K
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				J,
				K
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: M() }],
			"text-color": [{ text: M() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...I(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				U,
				"from-font",
				"auto",
				J,
				q
			] }],
			"text-decoration-color": [{ decoration: M() }],
			"underline-offset": [{ "underline-offset": [
				U,
				"auto",
				J,
				K
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
				W,
				J,
				K
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
				J,
				K
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
				J,
				K
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
			"bg-position": [{ bg: ie() }],
			"bg-repeat": [{ bg: ae() }],
			"bg-size": [{ bg: oe() }],
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
						W,
						J,
						K
					],
					radial: [
						"",
						J,
						K
					],
					conic: [
						W,
						J,
						K
					]
				},
				ze,
				Pe
			] }],
			"bg-color": [{ bg: M() }],
			"gradient-from-pos": [{ from: N() }],
			"gradient-via-pos": [{ via: N() }],
			"gradient-to-pos": [{ to: N() }],
			"gradient-from": [{ from: M() }],
			"gradient-via": [{ via: M() }],
			"gradient-to": [{ to: M() }],
			rounded: [{ rounded: P() }],
			"rounded-s": [{ "rounded-s": P() }],
			"rounded-e": [{ "rounded-e": P() }],
			"rounded-t": [{ "rounded-t": P() }],
			"rounded-r": [{ "rounded-r": P() }],
			"rounded-b": [{ "rounded-b": P() }],
			"rounded-l": [{ "rounded-l": P() }],
			"rounded-ss": [{ "rounded-ss": P() }],
			"rounded-se": [{ "rounded-se": P() }],
			"rounded-ee": [{ "rounded-ee": P() }],
			"rounded-es": [{ "rounded-es": P() }],
			"rounded-tl": [{ "rounded-tl": P() }],
			"rounded-tr": [{ "rounded-tr": P() }],
			"rounded-br": [{ "rounded-br": P() }],
			"rounded-bl": [{ "rounded-bl": P() }],
			"border-w": [{ border: F() }],
			"border-w-x": [{ "border-x": F() }],
			"border-w-y": [{ "border-y": F() }],
			"border-w-s": [{ "border-s": F() }],
			"border-w-e": [{ "border-e": F() }],
			"border-w-bs": [{ "border-bs": F() }],
			"border-w-be": [{ "border-be": F() }],
			"border-w-t": [{ "border-t": F() }],
			"border-w-r": [{ "border-r": F() }],
			"border-w-b": [{ "border-b": F() }],
			"border-w-l": [{ "border-l": F() }],
			"divide-x": [{ "divide-x": F() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": F() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...I(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...I(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: M() }],
			"border-color-x": [{ "border-x": M() }],
			"border-color-y": [{ "border-y": M() }],
			"border-color-s": [{ "border-s": M() }],
			"border-color-e": [{ "border-e": M() }],
			"border-color-bs": [{ "border-bs": M() }],
			"border-color-be": [{ "border-be": M() }],
			"border-color-t": [{ "border-t": M() }],
			"border-color-r": [{ "border-r": M() }],
			"border-color-b": [{ "border-b": M() }],
			"border-color-l": [{ "border-l": M() }],
			"divide-color": [{ divide: M() }],
			"outline-style": [{ outline: [
				...I(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				U,
				J,
				K
			] }],
			"outline-w": [{ outline: [
				"",
				U,
				Y,
				q
			] }],
			"outline-color": [{ outline: M() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Be,
				Fe
			] }],
			"shadow-color": [{ shadow: M() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Be,
				Fe
			] }],
			"inset-shadow-color": [{ "inset-shadow": M() }],
			"ring-w": [{ ring: F() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: M() }],
			"ring-offset-w": [{ "ring-offset": [U, q] }],
			"ring-offset-color": [{ "ring-offset": M() }],
			"inset-ring-w": [{ "inset-ring": F() }],
			"inset-ring-color": [{ "inset-ring": M() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Be,
				Fe
			] }],
			"text-shadow-color": [{ "text-shadow": M() }],
			opacity: [{ opacity: [
				U,
				J,
				K
			] }],
			"mix-blend": [{ "mix-blend": [
				...se(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": se() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [U] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": L() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": L() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": M() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": M() }],
			"mask-image-t-from-pos": [{ "mask-t-from": L() }],
			"mask-image-t-to-pos": [{ "mask-t-to": L() }],
			"mask-image-t-from-color": [{ "mask-t-from": M() }],
			"mask-image-t-to-color": [{ "mask-t-to": M() }],
			"mask-image-r-from-pos": [{ "mask-r-from": L() }],
			"mask-image-r-to-pos": [{ "mask-r-to": L() }],
			"mask-image-r-from-color": [{ "mask-r-from": M() }],
			"mask-image-r-to-color": [{ "mask-r-to": M() }],
			"mask-image-b-from-pos": [{ "mask-b-from": L() }],
			"mask-image-b-to-pos": [{ "mask-b-to": L() }],
			"mask-image-b-from-color": [{ "mask-b-from": M() }],
			"mask-image-b-to-color": [{ "mask-b-to": M() }],
			"mask-image-l-from-pos": [{ "mask-l-from": L() }],
			"mask-image-l-to-pos": [{ "mask-l-to": L() }],
			"mask-image-l-from-color": [{ "mask-l-from": M() }],
			"mask-image-l-to-color": [{ "mask-l-to": M() }],
			"mask-image-x-from-pos": [{ "mask-x-from": L() }],
			"mask-image-x-to-pos": [{ "mask-x-to": L() }],
			"mask-image-x-from-color": [{ "mask-x-from": M() }],
			"mask-image-x-to-color": [{ "mask-x-to": M() }],
			"mask-image-y-from-pos": [{ "mask-y-from": L() }],
			"mask-image-y-to-pos": [{ "mask-y-to": L() }],
			"mask-image-y-from-color": [{ "mask-y-from": M() }],
			"mask-image-y-to-color": [{ "mask-y-to": M() }],
			"mask-image-radial": [{ "mask-radial": [J, K] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": L() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": L() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": M() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": M() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [U] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": L() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": L() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": M() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": M() }],
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
			"mask-position": [{ mask: ie() }],
			"mask-repeat": [{ mask: ae() }],
			"mask-size": [{ mask: oe() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				J,
				K
			] }],
			filter: [{ filter: [
				"",
				"none",
				J,
				K
			] }],
			blur: [{ blur: ce() }],
			brightness: [{ brightness: [
				U,
				J,
				K
			] }],
			contrast: [{ contrast: [
				U,
				J,
				K
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Be,
				Fe
			] }],
			"drop-shadow-color": [{ "drop-shadow": M() }],
			grayscale: [{ grayscale: [
				"",
				U,
				J,
				K
			] }],
			"hue-rotate": [{ "hue-rotate": [
				U,
				J,
				K
			] }],
			invert: [{ invert: [
				"",
				U,
				J,
				K
			] }],
			saturate: [{ saturate: [
				U,
				J,
				K
			] }],
			sepia: [{ sepia: [
				"",
				U,
				J,
				K
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				J,
				K
			] }],
			"backdrop-blur": [{ "backdrop-blur": ce() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				U,
				J,
				K
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				U,
				J,
				K
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				U,
				J,
				K
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				U,
				J,
				K
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				U,
				J,
				K
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				U,
				J,
				K
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				U,
				J,
				K
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				U,
				J,
				K
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
				J,
				K
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				U,
				"initial",
				J,
				K
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				J,
				K
			] }],
			delay: [{ delay: [
				U,
				J,
				K
			] }],
			animate: [{ animate: [
				"none",
				v,
				J,
				K
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				J,
				K
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: R() }],
			"rotate-x": [{ "rotate-x": R() }],
			"rotate-y": [{ "rotate-y": R() }],
			"rotate-z": [{ "rotate-z": R() }],
			scale: [{ scale: z() }],
			"scale-x": [{ "scale-x": z() }],
			"scale-y": [{ "scale-y": z() }],
			"scale-z": [{ "scale-z": z() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: le() }],
			"skew-x": [{ "skew-x": le() }],
			"skew-y": [{ "skew-y": le() }],
			transform: [{ transform: [
				J,
				K,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: B() }],
			"translate-x": [{ "translate-x": B() }],
			"translate-y": [{ "translate-y": B() }],
			"translate-z": [{ "translate-z": B() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				W,
				J,
				K
			] }],
			accent: [{ accent: M() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: M() }],
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
				J,
				K
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
			"scrollbar-thumb-color": [{ "scrollbar-thumb": M() }],
			"scrollbar-track-color": [{ "scrollbar-track": M() }],
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
				J,
				K
			] }],
			fill: [{ fill: ["none", ...M()] }],
			"stroke-w": [{ stroke: [
				U,
				Y,
				q,
				Ae
			] }],
			stroke: [{ stroke: ["none", ...M()] }],
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
function Q(...e) {
	return Xe(_(e));
}
//#endregion
//#region src/ui/alert.tsx
var Ze = b("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
		success: "border-success/50 text-foreground [&>svg]:text-success dark:border-success [&>svg]:text-success",
		warning: "border-warning/50 text-foreground [&>svg]:text-warning dark:border-warning [&>svg]:text-warning"
	} },
	defaultVariants: { variant: "default" }
}), Qe = e.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ o("div", {
	ref: r,
	role: "alert",
	className: Q(Ze({ variant: t }), e),
	...n
}));
Qe.displayName = "Alert";
var $e = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("h5", {
	ref: n,
	className: Q("mb-1 font-medium leading-none tracking-tight", e),
	...t
}));
$e.displayName = "AlertTitle";
var et = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Q("text-sm [&_p]:leading-relaxed", e),
	...t
}));
et.displayName = "AlertDescription";
//#endregion
//#region src/ui/badge.tsx
var tt = b("inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "bg-[#EDEFF1] text-[#3D4145]",
		secondary: "bg-[#EDEFF1] text-[#3D4145]",
		destructive: "bg-[#FDE2E1] text-[#B42318]",
		outline: "border border-[#D7DBDE] text-[#3D4145]",
		success: "bg-[#06E785] text-[#00301B]",
		warning: "bg-[#FFF3C4] text-[#6B4E00]",
		error: "bg-[#FDE2E1] text-[#B42318]",
		info: "bg-[#DFEBF8] text-[#27568C]",
		primary: "bg-[#3168A9] text-white"
	} },
	defaultVariants: { variant: "default" }
});
function nt({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ o("div", {
		className: Q(tt({ variant: t }), e),
		...n
	});
}
//#endregion
//#region src/ui/button.tsx
var rt = b("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-[13px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "border border-[#D7DBDE] bg-white text-[#111] hover:bg-[#F4F5F6]",
			lime: "bg-[#D5FE4C] font-black text-black hover:bg-[#c6f231]",
			primary: "bg-[#3168A9] text-white hover:bg-[#27568C]",
			outline: "border border-black bg-transparent text-black hover:bg-black hover:text-white",
			destructive: "bg-[#FDE2E1] text-[#B42318] hover:bg-[#F8C9C6]",
			secondary: "bg-[#EDEFF1] text-[#3D4145] hover:bg-[#E4E6E8]",
			ghost: "bg-transparent text-[#3D4145] hover:bg-[#EDEFF1]",
			dark: "bg-black text-[#D5FE4C] hover:bg-[#1C1C1C]",
			link: "text-[#3168A9] underline-offset-4 hover:underline"
		},
		size: {
			default: "px-3.5 py-2",
			sm: "px-2.5 py-1.5",
			lg: "px-4.5 py-3 font-black",
			icon: "size-9 p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function it({ className: e, variant: t, size: n, asChild: r = !1, ...i }) {
	return /* @__PURE__ */ o(r ? c : "button", {
		className: Q(rt({
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
	className: Q("rounded-xl border bg-card text-card-foreground", e),
	...t
}));
at.displayName = "Card";
var ot = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Q("flex flex-col space-y-1.5 p-5", e),
	...t
}));
ot.displayName = "CardHeader";
var st = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Q("font-semibold leading-none tracking-tight", e),
	...t
}));
st.displayName = "CardTitle";
var ct = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Q("text-sm text-muted-foreground", e),
	...t
}));
ct.displayName = "CardDescription";
var lt = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Q("p-6 pt-0", e),
	...t
}));
lt.displayName = "CardContent";
var ut = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	ref: n,
	className: Q("flex items-center p-6 pt-0", e),
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
}]]), kt = $("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]), At = $("menu", [
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
]), jt = $("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), Mt = $("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), Nt = l.Root, Pt = l.Trigger, Ft = l.Portal, It = l.Close, Lt = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Overlay, {
	ref: n,
	className: Q("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0", e),
	...t
}));
Lt.displayName = l.Overlay.displayName;
var Rt = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ s(Ft, { children: [/* @__PURE__ */ o(Lt, {}), /* @__PURE__ */ s(l.Content, {
	ref: r,
	className: Q("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[#E4E6E8] bg-card p-6 duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] sm:rounded-xl", e),
	...n,
	children: [t, /* @__PURE__ */ s(l.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ o(Mt, { className: "h-4 w-4" }), /* @__PURE__ */ o("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
Rt.displayName = l.Content.displayName;
var zt = ({ className: e, ...t }) => /* @__PURE__ */ o("div", {
	className: Q("flex flex-col space-y-1.5 text-center sm:text-left", e),
	...t
});
zt.displayName = "DialogHeader";
var Bt = ({ className: e, ...t }) => /* @__PURE__ */ o("div", {
	className: Q("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
Bt.displayName = "DialogFooter";
var Vt = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Title, {
	ref: n,
	className: Q("text-lg font-semibold leading-none tracking-tight", e),
	...t
}));
Vt.displayName = l.Title.displayName;
var Ht = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Description, {
	ref: n,
	className: Q("text-sm text-muted-foreground", e),
	...t
}));
Ht.displayName = l.Description.displayName;
//#endregion
//#region src/ui/dropdown-menu.tsx
var Ut = u.Root, Wt = u.Trigger, Gt = u.Group, Kt = u.Portal, qt = u.Sub, Jt = u.RadioGroup, Yt = e.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ s(u.SubTrigger, {
	ref: i,
	className: Q("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e),
	...r,
	children: [n, /* @__PURE__ */ o(Tt, { className: "ml-auto" })]
}));
Yt.displayName = u.SubTrigger.displayName;
var Xt = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(u.SubContent, {
	ref: n,
	className: Q("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...t
}));
Xt.displayName = u.SubContent.displayName;
var Zt = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ o(u.Portal, { children: /* @__PURE__ */ o(u.Content, {
	ref: r,
	sideOffset: t,
	className: Q("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...n
}) }));
Zt.displayName = u.Content.displayName;
var Qt = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ o(u.Item, {
	ref: r,
	className: Q("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e),
	...n
}));
Qt.displayName = u.Item.displayName;
var $t = e.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ s(u.CheckboxItem, {
	ref: i,
	className: Q("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: [/* @__PURE__ */ o("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ o(u.ItemIndicator, { children: /* @__PURE__ */ o(St, { className: "h-4 w-4" }) })
	}), t]
}));
$t.displayName = u.CheckboxItem.displayName;
var en = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ s(u.RadioItem, {
	ref: r,
	className: Q("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ o("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ o(u.ItemIndicator, { children: /* @__PURE__ */ o(Dt, { className: "h-2 w-2 fill-current" }) })
	}), t]
}));
en.displayName = u.RadioItem.displayName;
var tn = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ o(u.Label, {
	ref: r,
	className: Q("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
	...n
}));
tn.displayName = u.Label.displayName;
var nn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(u.Separator, {
	ref: n,
	className: Q("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
nn.displayName = u.Separator.displayName;
var rn = ({ className: e, ...t }) => /* @__PURE__ */ o("span", {
	className: Q("ml-auto text-xs tracking-widest opacity-60", e),
	...t
});
rn.displayName = "DropdownMenuShortcut";
//#endregion
//#region src/ui/input.tsx
var an = e.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ o("input", {
	type: t,
	className: Q("flex w-full rounded-lg border border-[#D7DBDE] bg-white px-3 py-2 text-[13px] text-[#111] transition-colors placeholder:text-[#8A9096] file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-[#3168A9] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50", e),
	ref: r,
	...n
}));
an.displayName = "Input";
//#endregion
//#region src/ui/label.tsx
var on = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(d.Root, {
	ref: n,
	className: Q("text-[11px] font-bold leading-none tracking-[0.12em] text-[#6B7075] peer-disabled:cursor-not-allowed peer-disabled:opacity-70", e),
	...t
}));
on.displayName = d.Root.displayName;
//#endregion
//#region src/ui/select.tsx
var sn = f.Root, cn = f.Group, ln = f.Value, un = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ s(f.Trigger, {
	ref: r,
	className: Q("flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-[#D7DBDE] bg-white px-3 py-2 text-[13px] text-[#111] ring-offset-background placeholder:text-[#8A9096] focus:border-[#3168A9] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
	...n,
	children: [t, /* @__PURE__ */ o(f.Icon, {
		asChild: !0,
		children: /* @__PURE__ */ o(Ct, { className: "h-4 w-4 opacity-50" })
	})]
}));
un.displayName = f.Trigger.displayName;
var dn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(f.ScrollUpButton, {
	ref: n,
	className: Q("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ o(Et, { className: "h-4 w-4" })
}));
dn.displayName = f.ScrollUpButton.displayName;
var fn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(f.ScrollDownButton, {
	ref: n,
	className: Q("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ o(Ct, { className: "h-4 w-4" })
}));
fn.displayName = f.ScrollDownButton.displayName;
var pn = e.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, i) => /* @__PURE__ */ o(f.Portal, { children: /* @__PURE__ */ s(f.Content, {
	ref: i,
	className: Q("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
	position: n,
	...r,
	children: [
		/* @__PURE__ */ o(dn, {}),
		/* @__PURE__ */ o(f.Viewport, {
			className: Q("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children: t
		}),
		/* @__PURE__ */ o(fn, {})
	]
}) }));
pn.displayName = f.Content.displayName;
var mn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(f.Label, {
	ref: n,
	className: Q("px-2 py-1.5 text-sm font-semibold", e),
	...t
}));
mn.displayName = f.Label.displayName;
var hn = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ s(f.Item, {
	ref: r,
	className: Q("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ o("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ o(f.ItemIndicator, { children: /* @__PURE__ */ o(St, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ o(f.ItemText, { children: t })]
}));
hn.displayName = f.Item.displayName;
var gn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(f.Separator, {
	ref: n,
	className: Q("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
gn.displayName = f.Separator.displayName;
//#endregion
//#region src/ui/separator.tsx
var _n = e.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, i) => /* @__PURE__ */ o(p.Root, {
	ref: i,
	decorative: n,
	orientation: t,
	className: Q("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
	...r
}));
_n.displayName = p.Root.displayName;
//#endregion
//#region src/ui/sheet.tsx
var vn = l.Root, yn = l.Trigger, bn = l.Close, xn = l.Portal, Sn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Overlay, {
	className: Q("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0", e),
	...t,
	ref: n
}));
Sn.displayName = l.Overlay.displayName;
var Cn = b("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
}), wn = e.forwardRef(({ side: e = "right", className: t, children: n, ...r }, i) => /* @__PURE__ */ s(xn, { children: [/* @__PURE__ */ o(Sn, {}), /* @__PURE__ */ s(l.Content, {
	ref: i,
	className: Q(Cn({ side: e }), t),
	...r,
	children: [n, /* @__PURE__ */ s(l.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ o(Mt, { className: "h-4 w-4" }), /* @__PURE__ */ o("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
wn.displayName = l.Content.displayName;
var Tn = ({ className: e, ...t }) => /* @__PURE__ */ o("div", {
	className: Q("flex flex-col space-y-2 text-center sm:text-left", e),
	...t
});
Tn.displayName = "SheetHeader";
var En = ({ className: e, ...t }) => /* @__PURE__ */ o("div", {
	className: Q("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
En.displayName = "SheetFooter";
var Dn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Title, {
	ref: n,
	className: Q("text-lg font-semibold text-foreground", e),
	...t
}));
Dn.displayName = l.Title.displayName;
var On = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(l.Description, {
	ref: n,
	className: Q("text-sm text-muted-foreground", e),
	...t
}));
On.displayName = l.Description.displayName;
//#endregion
//#region src/ui/skeleton.tsx
function kn({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		className: Q("animate-pulse rounded-md bg-muted", e),
		...t
	});
}
//#endregion
//#region src/ui/table.tsx
var An = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ o("table", {
		ref: n,
		className: Q("w-full caption-bottom text-sm", e),
		...t
	})
}));
An.displayName = "Table";
var jn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("thead", {
	ref: n,
	className: Q("[&_tr]:border-b", e),
	...t
}));
jn.displayName = "TableHeader";
var Mn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("tbody", {
	ref: n,
	className: Q("[&_tr:last-child]:border-0", e),
	...t
}));
Mn.displayName = "TableBody";
var Nn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("tfoot", {
	ref: n,
	className: Q("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
	...t
}));
Nn.displayName = "TableFooter";
var Pn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("tr", {
	ref: n,
	className: Q("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", e),
	...t
}));
Pn.displayName = "TableRow";
var Fn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("th", {
	ref: n,
	className: Q("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", e),
	...t
}));
Fn.displayName = "TableHead";
var In = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("td", {
	ref: n,
	className: Q("p-2 align-middle [&:has([role=checkbox])]:pr-0", e),
	...t
}));
In.displayName = "TableCell";
var Ln = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o("caption", {
	ref: n,
	className: Q("mt-4 text-sm text-muted-foreground", e),
	...t
}));
Ln.displayName = "TableCaption";
//#endregion
//#region src/ui/tabs.tsx
var Rn = m.Root, zn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(m.List, {
	ref: n,
	className: Q("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", e),
	...t
}));
zn.displayName = m.List.displayName;
var Bn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(m.Trigger, {
	ref: n,
	className: Q("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e),
	...t
}));
Bn.displayName = m.Trigger.displayName;
var Vn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(m.Content, {
	ref: n,
	className: Q("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
	...t
}));
Vn.displayName = m.Content.displayName;
//#endregion
//#region src/ui/tooltip.tsx
var Hn = h.Provider, Un = h.Root, Wn = h.Trigger, Gn = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ o(h.Portal, { children: /* @__PURE__ */ o(h.Content, {
	ref: r,
	sideOffset: t,
	className: Q("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...n
}) }));
Gn.displayName = h.Content.displayName;
//#endregion
//#region src/ui/gymcare-mark.tsx
function Kn({ className: e }) {
	return /* @__PURE__ */ o("svg", {
		className: e,
		viewBox: "0 0 100 100",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ o("path", { d: "M63.57 0 L23.96 5.13 L0 36.43 L5.13 76.04 L36.43 100 L76.04 94.87 L100 63.57 L98.04 47.68 L56.48 53.06 L56.23 54.28 L56.97 58.68 L62.59 59.66 L63.57 60.15 L64.79 61.61 L64.55 62.35 L60.15 66.26 L56.72 67.97 L53.06 68.95 L46.94 68.95 L41.56 67.24 L38.14 65.04 L34.96 61.86 L33.01 58.92 L31.54 55.26 L30.81 51.34 L31.05 46.70 L32.52 42.05 L34.96 38.14 L38.14 34.96 L41.08 33.01 L44.74 31.54 L48.66 30.81 L51.34 30.81 L55.26 31.54 L58.92 33.01 L61.86 34.96 L65.04 38.14 L66.99 41.08 L67.97 43.52 L97.07 39.85 L94.87 23.96 Z" })
	});
}
//#endregion
//#region src/layout/sidebar.tsx
function qn({ groups: e, activeHref: t, onNavigate: n, brandTitle: r = "GYMCARE", brandSubtitle: i = "ACADEMY · PANEL", header: a, footer: c, className: l }) {
	return /* @__PURE__ */ s("div", {
		className: Q("flex h-full flex-col bg-black text-white", l),
		children: [
			/* @__PURE__ */ s("div", {
				className: "flex items-center gap-3 px-6 pb-6 pt-7",
				children: [/* @__PURE__ */ o(Kn, { className: "size-7.5 flex-none text-white" }), /* @__PURE__ */ s("div", { children: [/* @__PURE__ */ o("div", {
					className: "text-[15px] font-black tracking-[0.14em]",
					children: r
				}), /* @__PURE__ */ o("div", {
					className: "text-[11px] font-bold tracking-[0.1em] text-[#D5FE4C]",
					children: i
				})] })]
			}),
			a,
			/* @__PURE__ */ o("nav", {
				className: "flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 pb-6",
				children: e.map((e) => /* @__PURE__ */ s("div", { children: [/* @__PURE__ */ o("div", {
					className: "px-3 pb-2 pt-3.5 text-[10px] font-bold tracking-[0.14em] text-[#6C7075]",
					children: e.title
				}), e.items.map((e) => {
					let r = e.active || t != null && e.href === t, i = e.href ? "a" : "button", a = e.icon;
					return /* @__PURE__ */ s(i, {
						href: e.href,
						onClick: () => n?.(e),
						className: Q("flex w-full items-center justify-between rounded-lg px-3 py-2.25 text-left text-[14px] font-bold", e.indent ? "pl-6 font-normal" : "", r ? "bg-[#1C1C1C] text-[#D5FE4C]" : "text-[#9AA0A6] hover:bg-[#151515] hover:text-white"),
						children: [/* @__PURE__ */ s("span", {
							className: "flex min-w-0 items-center gap-2",
							children: [a ? /* @__PURE__ */ o(a, { className: "size-4 flex-none" }) : null, /* @__PURE__ */ o("span", {
								className: "truncate",
								children: e.label
							})]
						}), e.badge ? /* @__PURE__ */ o("span", {
							className: "rounded-full bg-[#D5FE4C] px-2 py-0.5 text-[10px] font-black text-black",
							children: e.badge
						}) : null]
					}, e.label);
				})] }, e.title))
			}),
			c
		]
	});
}
//#endregion
//#region src/layout/app-shell.tsx
function Jn({ groups: e, activeHref: t, onNavigate: n, brandTitle: r, brandSubtitle: i, topbar: a, children: c, sidebarHeader: l, sidebarFooter: u, onMenuClick: d, className: f }) {
	let p = /* @__PURE__ */ o(qn, {
		groups: e,
		activeHref: t,
		onNavigate: n,
		brandTitle: r,
		brandSubtitle: i,
		header: l,
		footer: u
	});
	return /* @__PURE__ */ s("div", {
		className: Q("flex min-h-dvh bg-[#F4F5F6] dark:bg-[#0b1220]", f),
		children: [/* @__PURE__ */ o("aside", {
			className: "sticky top-0 hidden h-dvh w-[252px] flex-none md:block",
			children: p
		}), /* @__PURE__ */ s("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [/* @__PURE__ */ s("header", {
				className: "sticky top-0 z-30 flex items-center gap-4 border-b border-[#E4E6E8] bg-[#F4F5F6]/92 px-6 py-4 backdrop-blur dark:border-[#334155] dark:bg-[#0b1220]/92 md:px-8",
				children: [/* @__PURE__ */ s(vn, { children: [/* @__PURE__ */ o(yn, {
					asChild: !0,
					children: /* @__PURE__ */ o(it, {
						variant: "ghost",
						size: "icon",
						onClick: d,
						"aria-label": "Abrir menu",
						className: "text-[#3D4145] hover:text-black md:hidden",
						children: /* @__PURE__ */ o(At, { className: "size-5" })
					})
				}), /* @__PURE__ */ s(wn, {
					side: "left",
					className: "w-[252px] bg-black p-0",
					children: [/* @__PURE__ */ o(Dn, {
						className: "sr-only",
						children: "Menu"
					}), p]
				})] }), /* @__PURE__ */ o("div", {
					className: "min-w-0 flex-1",
					children: a
				})]
			}), /* @__PURE__ */ o("main", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ o("div", {
					className: "p-8",
					children: c
				})
			})]
		})]
	});
}
//#endregion
//#region src/layout/page-header.tsx
function Yn({ title: t, description: n, actions: r, breadcrumbs: i, className: a }) {
	return /* @__PURE__ */ s("div", {
		className: Q("flex flex-col gap-2", a),
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
				className: "text-xl font-black tracking-tight",
				children: t
			}), n ? /* @__PURE__ */ o("p", {
				className: "mt-1 text-[13px] text-[#5F6469]",
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
function Xn({ crumb: e, saved: t, actions: n, className: r }) {
	return /* @__PURE__ */ s("div", {
		className: Q("flex min-w-0 items-center gap-5", r),
		children: [
			/* @__PURE__ */ o("div", {
				style: {
					flex: 1,
					minWidth: 0,
					fontSize: 13,
					fontWeight: 700
				},
				className: "text-[#5F6469] dark:text-[#9AA0A6]",
				children: e
			}),
			t ? /* @__PURE__ */ s("div", {
				className: "flex items-center gap-1.5 rounded-full border border-[#E4E6E8] bg-white px-3 py-1.5 text-xs font-medium text-[#3D4145] dark:border-[#334155] dark:bg-[#1e293b] dark:text-[#cbd5e1]",
				children: [/* @__PURE__ */ o("span", { className: "size-1.5 rounded-full bg-[#06E785]" }), t]
			}) : null,
			n ? /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2",
				children: n
			}) : null
		]
	});
}
//#endregion
//#region src/dashboard/activity-feed.tsx
function Zn({ items: e, className: t }) {
	return e.length === 0 ? /* @__PURE__ */ o("p", {
		className: "py-6 text-center text-[13px] text-[#8A9096]",
		children: "Nenhuma atividade recente ainda."
	}) : /* @__PURE__ */ o("ul", {
		className: Q("flex flex-col", t),
		children: e.map((e, t) => /* @__PURE__ */ s("li", {
			className: "flex items-start gap-3 border-b border-[#F0F1F2] py-3 last:border-b-0",
			children: [/* @__PURE__ */ o("span", {
				className: "mt-1.5 size-2 flex-none rounded-full",
				style: { backgroundColor: e.cor },
				"aria-hidden": !0
			}), /* @__PURE__ */ s("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ s("p", {
					className: "text-[13px] leading-snug text-[#3D4145]",
					children: [
						/* @__PURE__ */ o("span", {
							className: "font-bold",
							children: e.quem
						}),
						" ",
						/* @__PURE__ */ o("span", {
							className: "text-[#5F6469]",
							children: e.oque
						})
					]
				}), /* @__PURE__ */ o("p", {
					className: "mt-0.5 text-[11px] text-[#8A9096]",
					children: e.quando
				})]
			})]
		}, `${e.quem}-${e.quando}-${t}`))
	});
}
//#endregion
//#region src/dashboard/bar-chart.tsx
function Qn({ data: e, colors: t = ["#3168A9"], height: n = 180, className: r }) {
	let i = Math.max(...e.map((e) => e.value), 1);
	return /* @__PURE__ */ o("div", {
		className: Q("w-full", r),
		children: /* @__PURE__ */ o("div", {
			className: "flex items-end justify-between gap-2",
			style: { height: n },
			children: e.map((e, n) => /* @__PURE__ */ s("div", {
				className: "flex h-full flex-1 flex-col items-center justify-end gap-2",
				children: [/* @__PURE__ */ o("div", {
					className: "flex w-full flex-1 items-end",
					children: /* @__PURE__ */ o("div", {
						className: "w-full rounded-t-md transition-all duration-500",
						style: {
							height: `${Math.max(e.value / i * 100, 2)}%`,
							backgroundColor: t[n % t.length]
						},
						title: `${e.label}: ${e.value}`
					})
				}), /* @__PURE__ */ o("span", {
					className: "text-[11px] font-bold text-[#6B7075]",
					children: e.label
				})]
			}, e.label))
		})
	});
}
//#endregion
//#region src/dashboard/pagination.tsx
function $n(e, t) {
	if (t <= 7) return Array.from({ length: t }, (e, t) => t + 1);
	let n = [1];
	e > 3 && n.push("...");
	let r = Math.max(2, e - 1), i = Math.min(t - 1, e + 1);
	for (let e = r; e <= i; e++) n.push(e);
	return e < t - 2 && n.push("..."), n.push(t), n;
}
function er({ page: e, totalPages: t, onChange: n, className: r }) {
	if (t <= 1) return null;
	let i = $n(e, t);
	return /* @__PURE__ */ s("div", {
		className: Q("flex items-center justify-between gap-2", r),
		children: [
			/* @__PURE__ */ o(it, {
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
					className: Q("size-9 rounded-lg border border-[#D7DBDE] text-[13px] font-bold transition-colors", t === e ? "border-black bg-black text-white" : "bg-white hover:bg-[#EDEFF1]"),
					children: t
				}, t))
			}),
			/* @__PURE__ */ o(it, {
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
function tr({ icon: e = Ot, title: t, description: n, action: r, className: i }) {
	return /* @__PURE__ */ s("div", {
		className: Q("flex flex-col items-center justify-center gap-3 py-12 text-center", i),
		children: [
			/* @__PURE__ */ o("div", {
				className: "h-12 w-12 rounded-full bg-[#EDEFF1] p-3 text-[#8A9096]",
				children: /* @__PURE__ */ o(e, { className: "h-full w-full" })
			}),
			/* @__PURE__ */ s("div", { children: [/* @__PURE__ */ o("p", {
				className: "text-[15px] font-bold",
				children: t
			}), n && /* @__PURE__ */ o("p", {
				className: "mx-auto mt-1 max-w-sm text-[13px] text-[#5F6469]",
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
var nr = {
	left: "text-left",
	center: "text-center",
	right: "text-right"
};
function rr({ columns: t, data: n, searchable: r = !1, searchKeys: i, searchPlaceholder: c = "Buscar...", pageSize: l = 10, onRowClick: u, emptyState: d, className: f }) {
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
		className: Q("", f),
		children: [r && /* @__PURE__ */ s("div", {
			className: "relative mb-4",
			children: [/* @__PURE__ */ o(jt, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ o(an, {
				value: p,
				onChange: (e) => {
					m(e.target.value), g(1);
				},
				placeholder: c,
				className: "pl-9"
			})]
		}), _.length === 0 ? d ?? /* @__PURE__ */ o(tr, {
			title: "Nenhum resultado",
			description: "Tente ajustar a busca ou o filtro aplicado."
		}) : /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ s("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", {
					className: "border-b bg-[#F7F8F9] text-left text-xs text-[#6B7075]",
					children: t.map((e) => /* @__PURE__ */ o("th", {
						className: Q("px-4 py-2.5 font-medium", nr[e.align ?? "left"], e.className),
						children: e.header
					}, e.key))
				}) }), /* @__PURE__ */ o("tbody", { children: b.map((e, n) => /* @__PURE__ */ o("tr", {
					onClick: u ? () => u(e) : void 0,
					className: Q("border-b border-[#F0F1F2] last:border-b-0 hover:bg-[#FAFBFB]", u && "cursor-pointer"),
					children: t.map((t) => /* @__PURE__ */ o("td", {
						className: Q("px-4 py-2.5", nr[t.align ?? "left"], t.className),
						children: t.accessor ? t.accessor(e) : String(e[t.key] ?? "")
					}, t.key))
				}, n)) })]
			})
		}), v > 1 && /* @__PURE__ */ o("div", {
			className: "mt-4",
			children: /* @__PURE__ */ o(er, {
				page: y,
				totalPages: v,
				onChange: x
			})
		})] })]
	});
}
//#endregion
//#region src/dashboard/donut-chart.tsx
function ir({ data: e, size: t = 168, thickness: n = 24, className: r }) {
	let i = e.reduce((e, t) => e + t.value, 0), a = (t - n) / 2, c = 2 * Math.PI * a, l = t / 2, u = 0;
	return /* @__PURE__ */ s("div", {
		className: Q("flex items-center gap-6", r),
		children: [/* @__PURE__ */ s("div", {
			className: "relative flex-none",
			style: {
				width: t,
				height: t
			},
			children: [/* @__PURE__ */ s("svg", {
				width: t,
				height: t,
				viewBox: `0 0 ${t} ${t}`,
				children: [/* @__PURE__ */ o("circle", {
					cx: l,
					cy: l,
					r: a,
					fill: "none",
					stroke: "#EDEFF1",
					strokeWidth: n
				}), i > 0 && e.map((e) => {
					let t = e.value / i * c, r = u;
					return u += t, /* @__PURE__ */ o("circle", {
						cx: l,
						cy: l,
						r: a,
						fill: "none",
						stroke: e.color,
						strokeWidth: n,
						strokeDasharray: `${t} ${c - t}`,
						strokeDashoffset: -r,
						transform: `rotate(-90 ${l} ${l})`
					}, e.label);
				})]
			}), /* @__PURE__ */ s("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ o("span", {
					className: "text-2xl font-black",
					children: i
				}), /* @__PURE__ */ o("span", {
					className: "text-[11px] font-bold text-[#6B7075]",
					children: "total"
				})]
			})]
		}), /* @__PURE__ */ o("div", {
			className: "flex flex-col gap-2",
			children: e.map((e) => /* @__PURE__ */ s("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ o("span", {
						className: "size-2.5 rounded-sm",
						style: { backgroundColor: e.color }
					}),
					/* @__PURE__ */ o("span", {
						className: "text-[13px] font-bold text-[#3D4145]",
						children: e.label
					}),
					/* @__PURE__ */ o("span", {
						className: "text-[13px] font-bold text-[#6B7075]",
						children: e.value
					})
				]
			}, e.label))
		})]
	});
}
//#endregion
//#region src/dashboard/hero-panel.tsx
function ar({ title: e, lime: t, description: n, stats: r, actions: i, className: c }) {
	return /* @__PURE__ */ s("div", {
		className: Q("rounded-2xl bg-black p-8 text-white md:p-9", c),
		children: [/* @__PURE__ */ s("div", {
			className: "flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ s("div", {
				className: "max-w-xl",
				children: [/* @__PURE__ */ s("h2", {
					className: "text-2xl font-black leading-tight md:text-[28px]",
					children: [e, t ? /* @__PURE__ */ s(a, { children: [" ", /* @__PURE__ */ o("span", {
						className: "bg-[#D5FE4C] px-1.5 text-black",
						children: t
					})] }) : null]
				}), n ? /* @__PURE__ */ o("p", {
					className: "mt-3 text-[13px] leading-relaxed text-[#9AA0A6]",
					children: n
				}) : null]
			}), i ? /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2",
				children: i
			}) : null]
		}), /* @__PURE__ */ o("div", {
			className: "mt-8 grid grid-cols-2 gap-6 border-t border-[#1C1C1C] pt-6 md:grid-cols-4",
			children: r.map((e) => /* @__PURE__ */ s("div", { children: [/* @__PURE__ */ o("div", {
				className: "text-3xl font-black tracking-tight text-[#D5FE4C]",
				children: e.value
			}), /* @__PURE__ */ o("div", {
				className: "mt-1 text-[11px] font-bold tracking-[0.08em] text-[#8A9096]",
				children: e.label
			})] }, e.label))
		})]
	});
}
//#endregion
//#region src/dashboard/line-chart.tsx
function or({ data: e, color: t = "#3168A9", height: n = 180, className: r }) {
	if (e.length < 2) return null;
	let i = Math.max(...e.map((e) => e.value), 1), a = 100 / (e.length - 1), c = e.map((e, t) => `${(t * a).toFixed(2)},${(100 - e.value / i * 100).toFixed(2)}`).join(" ");
	return /* @__PURE__ */ s("div", {
		className: Q("w-full", r),
		children: [/* @__PURE__ */ s("div", {
			className: "relative w-full",
			style: { height: n },
			children: [/* @__PURE__ */ s("svg", {
				viewBox: "0 0 100 100",
				preserveAspectRatio: "none",
				className: "absolute inset-0 h-full w-full overflow-visible",
				children: [/* @__PURE__ */ o("path", {
					d: `M0,100 L${c.split(" ").map((e) => e.replace(",", ",")).join(" L")} L100,100 Z`,
					fill: t,
					opacity: "0.12"
				}), /* @__PURE__ */ o("polyline", {
					points: c,
					fill: "none",
					stroke: t,
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					vectorEffect: "non-scaling-stroke"
				})]
			}), e.map((e, n) => /* @__PURE__ */ o("span", {
				className: "absolute -translate-x-1/2 -translate-y-1/2",
				style: {
					left: `${(n * a).toFixed(2)}%`,
					top: `${(100 - e.value / i * 100).toFixed(2)}%`
				},
				title: `${e.label}: ${e.value}`,
				children: /* @__PURE__ */ o("span", {
					className: "block size-2 rounded-full border-2 border-white",
					style: { backgroundColor: t }
				})
			}, e.label))]
		}), /* @__PURE__ */ o("div", {
			className: "mt-2 flex justify-between",
			children: e.map((e) => /* @__PURE__ */ o("span", {
				className: "text-[11px] font-bold text-[#6B7075]",
				children: e.label
			}, e.label))
		})]
	});
}
//#endregion
//#region src/dashboard/mock-map.tsx
var sr = [
	{
		name: "São Paulo",
		x: 52,
		y: 62,
		value: 42
	},
	{
		name: "Rio de Janeiro",
		x: 64,
		y: 66,
		value: 18
	},
	{
		name: "Belo Horizonte",
		x: 56,
		y: 50,
		value: 12
	},
	{
		name: "Curitiba",
		x: 44,
		y: 72,
		value: 8
	},
	{
		name: "Porto Alegre",
		x: 40,
		y: 84,
		value: 6
	},
	{
		name: "Salvador",
		x: 68,
		y: 38,
		value: 5
	},
	{
		name: "Recife",
		x: 76,
		y: 26,
		value: 4
	},
	{
		name: "Fortaleza",
		x: 72,
		y: 16,
		value: 3
	},
	{
		name: "Manaus",
		x: 24,
		y: 18,
		value: 2
	},
	{
		name: "Brasília",
		x: 46,
		y: 40,
		value: 10
	}
];
function cr({ points: e = sr, height: t = 260, className: n }) {
	let r = Math.max(...e.map((e) => e.value), 1);
	return /* @__PURE__ */ s("div", {
		className: Q("relative w-full overflow-hidden rounded-xl border border-[#E4E6E8] bg-[#F0F6FC]", n),
		style: { height: t },
		children: [/* @__PURE__ */ s("svg", {
			className: "absolute inset-0 h-full w-full",
			"aria-hidden": !0,
			children: [
				/* @__PURE__ */ o("defs", { children: /* @__PURE__ */ o("pattern", {
					id: "mockmap-dots",
					width: "22",
					height: "22",
					patternUnits: "userSpaceOnUse",
					children: /* @__PURE__ */ o("circle", {
						cx: "2",
						cy: "2",
						r: "1.4",
						fill: "#C9DCEF"
					})
				}) }),
				/* @__PURE__ */ o("rect", {
					width: "100%",
					height: "100%",
					fill: "url(#mockmap-dots)"
				}),
				/* @__PURE__ */ o("path", {
					d: "M10,200 C160,180 300,60 520,90",
					fill: "none",
					stroke: "#C9DCEF",
					strokeWidth: "2",
					strokeDasharray: "6 8"
				}),
				/* @__PURE__ */ o("path", {
					d: "M30,40 C180,70 320,220 500,180",
					fill: "none",
					stroke: "#C9DCEF",
					strokeWidth: "2",
					strokeDasharray: "6 8"
				})
			]
		}), e.map((e) => {
			let t = 10 + e.value / r * 22;
			return /* @__PURE__ */ o("div", {
				className: "group absolute -translate-x-1/2 -translate-y-full",
				style: {
					left: `${e.x}%`,
					top: `${e.y}%`
				},
				children: /* @__PURE__ */ s("div", {
					className: "flex flex-col items-center",
					children: [/* @__PURE__ */ s("span", {
						className: "whitespace-nowrap rounded bg-black px-1.5 py-0.5 text-[10px] font-bold text-[#D5FE4C] opacity-0 transition-opacity group-hover:opacity-100",
						children: [
							e.name,
							" · ",
							e.value
						]
					}), /* @__PURE__ */ o(kt, {
						className: "text-[#3168A9] drop-shadow-sm",
						style: {
							width: t,
							height: t
						},
						fill: "#3168A9",
						stroke: "#fff"
					})]
				})
			}, e.name);
		})]
	});
}
//#endregion
//#region src/dashboard/stat-card.tsx
var lr = {
	blue: "bg-[#3168A9]/10 text-[#3168A9]",
	lime: "bg-[#D5FE4C] text-[#14210A]",
	purple: "bg-[#8142E5]/10 text-[#8142E5]",
	green: "bg-[#06E785]/15 text-[#047857]",
	amber: "bg-[#D97706]/10 text-[#D97706]"
};
function ur({ title: e, value: t, icon: n, tone: r = "blue", trend: i, description: a, footer: c, className: l }) {
	return /* @__PURE__ */ s(at, {
		className: Q("", l),
		children: [
			/* @__PURE__ */ s(ot, {
				className: "flex flex-row items-center justify-between space-y-0",
				children: [/* @__PURE__ */ o(st, {
					className: "text-[13px] font-bold text-[#6B7075]",
					children: e
				}), n && /* @__PURE__ */ o("div", {
					className: Q("rounded-lg p-2", lr[r]),
					children: /* @__PURE__ */ o(n, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ s(lt, { children: [/* @__PURE__ */ s("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ o("span", {
					className: "text-3xl font-black tracking-tight",
					children: t
				}), i && /* @__PURE__ */ s("span", {
					className: Q("inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium", i.positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"),
					children: [i.positive ? /* @__PURE__ */ o(xt, { className: "h-3 w-3" }) : /* @__PURE__ */ o(bt, { className: "h-3 w-3" }), i.value]
				})]
			}), a && /* @__PURE__ */ o("p", {
				className: "mt-1 text-[13px] text-[#5F6469]",
				children: a
			})] }),
			c && /* @__PURE__ */ o(ut, {
				className: "border-t px-6 py-4 text-sm text-muted-foreground",
				children: c
			})
		]
	});
}
//#endregion
//#region src/dashboard/status-badge.tsx
var dr = {
	success: "bg-[#06E785] text-[#00301B]",
	warning: "bg-[#FFF3C4] text-[#6B4E00]",
	error: "bg-[#FDE2E1] text-[#B42318]",
	info: "bg-[#DFEBF8] text-[#27568C]",
	neutral: "bg-[#EDEFF1] text-[#3D4145]"
};
function fr({ label: e, tone: t = "neutral", dot: n = !1, className: r }) {
	return /* @__PURE__ */ s("span", {
		className: Q("inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[10px] font-black", dr[t], r),
		children: [n && /* @__PURE__ */ o("span", { className: "h-1.5 w-1.5 rounded-full bg-current" }), e]
	});
}
//#endregion
export { Zn as ActivityFeed, Qe as Alert, et as AlertDescription, $e as AlertTitle, Jn as AppShell, nt as Badge, Qn as BarChart, it as Button, at as Card, lt as CardContent, ct as CardDescription, ut as CardFooter, ot as CardHeader, st as CardTitle, rr as DataTable, Nt as Dialog, It as DialogClose, Rt as DialogContent, Ht as DialogDescription, Bt as DialogFooter, zt as DialogHeader, Lt as DialogOverlay, Ft as DialogPortal, Vt as DialogTitle, Pt as DialogTrigger, ir as DonutChart, Ut as DropdownMenu, $t as DropdownMenuCheckboxItem, Zt as DropdownMenuContent, Gt as DropdownMenuGroup, Qt as DropdownMenuItem, tn as DropdownMenuLabel, Kt as DropdownMenuPortal, Jt as DropdownMenuRadioGroup, en as DropdownMenuRadioItem, nn as DropdownMenuSeparator, rn as DropdownMenuShortcut, qt as DropdownMenuSub, Xt as DropdownMenuSubContent, Yt as DropdownMenuSubTrigger, Wt as DropdownMenuTrigger, tr as EmptyState, Kn as GymcareMark, ar as HeroPanel, an as Input, on as Label, or as LineChart, cr as MockMap, Yn as PageHeader, er as Pagination, sn as Select, pn as SelectContent, cn as SelectGroup, hn as SelectItem, mn as SelectLabel, fn as SelectScrollDownButton, dn as SelectScrollUpButton, gn as SelectSeparator, un as SelectTrigger, ln as SelectValue, _n as Separator, vn as Sheet, bn as SheetClose, wn as SheetContent, On as SheetDescription, En as SheetFooter, Tn as SheetHeader, Sn as SheetOverlay, xn as SheetPortal, Dn as SheetTitle, yn as SheetTrigger, qn as Sidebar, kn as Skeleton, ur as StatCard, fr as StatusBadge, An as Table, Mn as TableBody, Ln as TableCaption, In as TableCell, Nn as TableFooter, Fn as TableHead, jn as TableHeader, Pn as TableRow, Rn as Tabs, Vn as TabsContent, zn as TabsList, Bn as TabsTrigger, Un as Tooltip, Gn as TooltipContent, Hn as TooltipProvider, Wn as TooltipTrigger, Xn as Topbar, tt as badgeVariants, rt as buttonVariants, Q as cn };

//# sourceMappingURL=index.js.map