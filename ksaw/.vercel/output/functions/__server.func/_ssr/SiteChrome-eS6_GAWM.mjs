import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteChrome-eS6_GAWM.js
var import_jsx_runtime = require_jsx_runtime();
var vtu_logo_default = "/assets/vtu-logo-QRrBNbWZ.png";
var image_copy_default = "/assets/image%20copy-8LgDgAHV.png";
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "kk-header",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "kk-wrap kk-header-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "kk-logo kk-logo-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image_copy_default,
						alt: "Government of Karnataka emblem",
						width: 140,
						height: 140
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "kk-header-titles",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kk-header-title",
						children: "Visvesvaraya Technological University"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kk-header-sub",
						children: "Belagavi, Karnataka"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "kk-logo kk-logo-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: vtu_logo_default,
						alt: "Visvesvaraya Technological University logo",
						width: 175,
						height: 175
					})
				})
			]
		})
	});
}
function PageBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "kk-banner",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "kk-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Skill Development Registration Form" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["For any clarifications please, email: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "mailto:onlineprograms@vtu.ac.in",
				children: "onlineprograms@vtu.ac.in"
			})] })]
		})
	});
}
//#endregion
export { SiteHeader as n, PageBanner as t };
