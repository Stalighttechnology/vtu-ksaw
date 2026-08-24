import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-2lu0DPQ6.mjs";
import { a as require_jsx_runtime, i as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteHeader } from "./SiteChrome-eS6_GAWM.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-03KQUFjl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({
				to: "/admin",
				replace: true
			});
		});
	}, [navigate]);
	const submit = async (e) => {
		e.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error("Enter a valid email address");
			return;
		}
		if (password.length < 6) {
			toast.error("Password must be at least 6 characters");
			return;
		}
		setBusy(true);
		try {
			if (mode === "signin") {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				navigate({
					to: "/admin",
					replace: true
				});
			} else {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: { emailRedirectTo: `${window.location.origin}/admin` }
				});
				if (error) throw error;
				toast.success("Account created. You can sign in now.");
				setMode("signin");
			}
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Authentication failed");
		} finally {
			setBusy(false);
		}
	};
	const google = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: { redirectTo: window.location.origin }
		});
		if (error) {
			toast.error("Google sign in failed");
			return;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "kk-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-md px-4 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card p-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-semibold text-foreground",
						children: mode === "signin" ? "Admin Sign In" : "Create Admin Account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Access to registration records is restricted to authorised university staff."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 space-y-4",
						onSubmit: submit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "ctrl-label",
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								type: "email",
								className: "form-ctrl",
								value: email,
								autoComplete: "email",
								onChange: (e) => setEmail(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "ctrl-label",
								htmlFor: "password",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "password",
								type: "password",
								className: "form-ctrl",
								value: password,
								autoComplete: mode === "signin" ? "current-password" : "new-password",
								onChange: (e) => setPassword(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "btn-kk btn-primary-kk w-full",
								disabled: busy,
								children: busy ? "Please wait…" : mode === "signin" ? "Sign In" : "Sign Up"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: google,
						className: "btn-kk btn-cancel-kk mt-3 w-full",
						children: "Continue with Google"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-4 w-full text-sm text-primary underline",
						onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
						children: mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"
					})
				]
			})
		})]
	});
}
//#endregion
export { AuthPage as component };
