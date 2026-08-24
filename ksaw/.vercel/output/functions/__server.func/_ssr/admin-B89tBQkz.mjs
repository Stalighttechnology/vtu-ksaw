import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-2lu0DPQ6.mjs";
import { a as require_jsx_runtime, i as require_react, r as useQueryClient, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteHeader } from "./SiteChrome-eS6_GAWM.mjs";
import { l as SKILLS, t as CATEGORIES } from "./options-C11kGNDe.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-B89tBQkz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS_OPTIONS = [
	"Pending",
	"Verified",
	"Approved",
	"Rejected"
];
var COLUMNS = [
	{
		key: "created_at",
		label: "Submitted On",
		group: "Meta",
		type: "date"
	},
	{
		key: "status",
		label: "Status",
		group: "Meta",
		type: "select",
		options: STATUS_OPTIONS
	},
	{
		key: "admin_notes",
		label: "Admin Notes",
		group: "Meta"
	},
	{
		key: "first_name",
		label: "First Name",
		group: "Personal"
	},
	{
		key: "last_name",
		label: "Last Name",
		group: "Personal"
	},
	{
		key: "phone",
		label: "Phone",
		group: "Personal"
	},
	{
		key: "email",
		label: "Email",
		group: "Personal"
	},
	{
		key: "dob",
		label: "Date Of Birth",
		group: "Personal",
		type: "date"
	},
	{
		key: "gender",
		label: "Gender",
		group: "Personal"
	},
	{
		key: "marital_status",
		label: "Marital Status",
		group: "Personal"
	},
	{
		key: "specially_abled",
		label: "Specially Abled",
		group: "Personal"
	},
	{
		key: "sa_types",
		label: "Disability Types",
		group: "Personal",
		type: "array"
	},
	{
		key: "sa_sub_types",
		label: "Disability Sub Types",
		group: "Personal",
		type: "array"
	},
	{
		key: "sa_proof",
		label: "Disability Proof",
		group: "Personal"
	},
	{
		key: "religion",
		label: "Religion",
		group: "Personal"
	},
	{
		key: "category",
		label: "Category",
		group: "Personal"
	},
	{
		key: "caste",
		label: "Caste",
		group: "Personal"
	},
	{
		key: "nigama",
		label: "Nigama",
		group: "Personal"
	},
	{
		key: "caste_cert_type",
		label: "Caste Certificate Type",
		group: "Personal"
	},
	{
		key: "rd_number",
		label: "RD Number",
		group: "Personal"
	},
	{
		key: "caste_proof",
		label: "Caste Proof",
		group: "Personal"
	},
	{
		key: "aadhaar_number",
		label: "Aadhaar Number",
		group: "Personal"
	},
	{
		key: "guardianship",
		label: "Guardianship",
		group: "Guardian"
	},
	{
		key: "guardian_salutation",
		label: "Salutation",
		group: "Guardian"
	},
	{
		key: "guardian_first_name",
		label: "Guardian First Name",
		group: "Guardian"
	},
	{
		key: "guardian_last_name",
		label: "Guardian Last Name",
		group: "Guardian"
	},
	{
		key: "cur_location",
		label: "Current Location Type",
		group: "Current Address"
	},
	{
		key: "cur_street1",
		label: "Current Street Address",
		group: "Current Address"
	},
	{
		key: "cur_street2",
		label: "Current Street Address 2",
		group: "Current Address"
	},
	{
		key: "cur_state",
		label: "Current State",
		group: "Current Address"
	},
	{
		key: "cur_district",
		label: "Current District",
		group: "Current Address"
	},
	{
		key: "cur_taluk",
		label: "Current Taluk",
		group: "Current Address"
	},
	{
		key: "cur_city",
		label: "Current City",
		group: "Current Address"
	},
	{
		key: "cur_village",
		label: "Current Village",
		group: "Current Address"
	},
	{
		key: "cur_zip",
		label: "Current Zip",
		group: "Current Address"
	},
	{
		key: "same_address",
		label: "Same As Current",
		group: "Permanent Address"
	},
	{
		key: "per_location",
		label: "Permanent Location Type",
		group: "Permanent Address"
	},
	{
		key: "per_street1",
		label: "Permanent Street Address",
		group: "Permanent Address"
	},
	{
		key: "per_street2",
		label: "Permanent Street Address 2",
		group: "Permanent Address"
	},
	{
		key: "per_state",
		label: "Permanent State",
		group: "Permanent Address"
	},
	{
		key: "per_district",
		label: "Permanent District",
		group: "Permanent Address"
	},
	{
		key: "per_taluk",
		label: "Permanent Taluk",
		group: "Permanent Address"
	},
	{
		key: "per_city",
		label: "Permanent City",
		group: "Permanent Address"
	},
	{
		key: "per_village",
		label: "Permanent Village",
		group: "Permanent Address"
	},
	{
		key: "per_zip",
		label: "Permanent Zip",
		group: "Permanent Address"
	},
	{
		key: "education",
		label: "Education",
		group: "Education"
	},
	{
		key: "stream",
		label: "Stream",
		group: "Education"
	},
	{
		key: "subject",
		label: "Subject",
		group: "Education"
	},
	{
		key: "language_of_instruction",
		label: "Language Of Instruction",
		group: "Education"
	},
	{
		key: "other_language",
		label: "Other Language",
		group: "Education"
	},
	{
		key: "year_of_passing",
		label: "Year Of Passing",
		group: "Education"
	},
	{
		key: "languages_known",
		label: "Languages Known",
		group: "Education",
		type: "array"
	},
	{
		key: "past_skill_experience",
		label: "Past Skill Experience",
		group: "Education"
	},
	{
		key: "skill_experience_proof",
		label: "Skill Experience Proof",
		group: "Education"
	},
	{
		key: "skill_sought",
		label: "Skill Sought / Course",
		group: "Education"
	},
	{
		key: "training_duration",
		label: "Training Duration",
		group: "Education"
	},
	{
		key: "apprenticeship",
		label: "Apprenticeship",
		group: "Education"
	},
	{
		key: "currently_employed",
		label: "Currently Employed",
		group: "Employment"
	},
	{
		key: "employed_from",
		label: "Employed From",
		group: "Employment",
		type: "date"
	},
	{
		key: "current_employer",
		label: "Current Employer",
		group: "Employment"
	},
	{
		key: "current_designation",
		label: "Current Designation",
		group: "Employment"
	},
	{
		key: "previously_employed",
		label: "Previously Employed",
		group: "Employment"
	},
	{
		key: "work_experience",
		label: "Work Experience",
		group: "Employment"
	},
	{
		key: "last_employer",
		label: "Last Employer",
		group: "Employment"
	},
	{
		key: "last_designation",
		label: "Last Designation",
		group: "Employment"
	},
	{
		key: "last_salary",
		label: "Last Drawn Salary",
		group: "Employment"
	},
	{
		key: "last_employer_address",
		label: "Last Employer Address",
		group: "Employment"
	},
	{
		key: "employment_proof",
		label: "Employment Proof",
		group: "Employment"
	},
	{
		key: "education_proof",
		label: "Proof Of Education",
		group: "Documents"
	},
	{
		key: "age_proof",
		label: "Proof Of Age",
		group: "Documents"
	},
	{
		key: "aadhaar_proof",
		label: "Aadhaar Proof (Upload Aadhaar Photo)",
		group: "Documents"
	},
	{
		key: "profile_image",
		label: "Profile Image",
		group: "Documents"
	},
	{
		key: "declaration_accepted",
		label: "Declaration Accepted",
		group: "Documents",
		type: "bool"
	}
];
COLUMNS.filter((c) => c.key !== "created_at").map((c) => c.key);
function formatCell(value, type) {
	if (value === null || value === void 0 || value === "") return "N/A";
	if (Array.isArray(value)) return value.length ? value.join(", ") : "—";
	if (type === "bool") return value ? "Yes" : "No";
	if (type === "date") {
		const d = new Date(String(value));
		if (!Number.isNaN(d.getTime())) return String(value).length > 10 ? d.toLocaleString("en-IN") : d.toLocaleDateString("en-IN");
	}
	return String(value);
}
var PAGE_SIZES = [
	10,
	25,
	50,
	100
];
function AdminPage() {
	const navigate = useNavigate();
	const qc = useQueryClient();
	const [search, setSearch] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("");
	const [course, setCourse] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("");
	const [district, setDistrict] = (0, import_react.useState)("");
	const [sortDesc, setSortDesc] = (0, import_react.useState)(true);
	const [page, setPage] = (0, import_react.useState)(0);
	const [pageSize, setPageSize] = (0, import_react.useState)(25);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [viewing, setViewing] = (0, import_react.useState)(null);
	const filters = {
		search: search.trim(),
		status,
		course,
		category,
		district
	};
	const listQuery = useQuery({
		queryKey: [
			"registrations",
			filters,
			page,
			pageSize,
			sortDesc
		],
		queryFn: async () => {
			let q = supabase.from("vtu-ksaw-application").select("*", { count: "exact" });
			if (filters.status) q = q.eq("status", filters.status);
			if (filters.course) q = q.eq("skill_sought", filters.course);
			if (filters.category) q = q.eq("category", filters.category);
			if (filters.district) q = q.ilike("cur_district", `%${filters.district}%`);
			if (filters.search) {
				const s = filters.search.replace(/[%,()]/g, "");
				q = q.or(`first_name.ilike.%${s}%,last_name.ilike.%${s}%,email.ilike.%${s}%,phone.ilike.%${s}%,cur_city.ilike.%${s}%,cur_district.ilike.%${s}%`);
			}
			const from = page * pageSize;
			const { data, error, count } = await q.order("created_at", { ascending: !sortDesc }).range(from, from + pageSize - 1);
			if (error) throw error;
			return {
				rows: data ?? [],
				count: count ?? 0
			};
		}
	});
	const statsQuery = useQuery({
		queryKey: ["registration-stats"],
		queryFn: async () => {
			const { data, error } = await supabase.from("vtu-ksaw-application").select("status, skill_sought, gender, category, created_at, cur_district").limit(1e4);
			if (error) throw error;
			return data ?? [];
		}
	});
	const stats = (0, import_react.useMemo)(() => {
		const rows = statsQuery.data ?? [];
		const now = Date.now();
		const byStatus = {};
		const byCourse = {};
		const byGender = {};
		const byDistrict = {};
		let today = 0;
		let week = 0;
		for (const r of rows) {
			byStatus[r.status ?? "Pending"] = (byStatus[r.status ?? "Pending"] ?? 0) + 1;
			if (r.skill_sought) byCourse[r.skill_sought] = (byCourse[r.skill_sought] ?? 0) + 1;
			if (r.gender) byGender[r.gender] = (byGender[r.gender] ?? 0) + 1;
			if (r.cur_district) byDistrict[r.cur_district] = (byDistrict[r.cur_district] ?? 0) + 1;
			const t = new Date(r.created_at).getTime();
			if (now - t < 864e5) today += 1;
			if (now - t < 6048e5) week += 1;
		}
		return {
			total: rows.length,
			today,
			week,
			byStatus,
			byCourse,
			byGender,
			byDistrict
		};
	}, [statsQuery.data]);
	const total = listQuery.data?.count ?? 0;
	const pageCount = Math.max(1, Math.ceil(total / pageSize));
	const resetPage = (setter) => (v) => {
		setter(v);
		setPage(0);
	};
	const signOut = async () => {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	};
	const remove = async (row) => {
		if (!window.confirm(`Delete registration of ${row["first_name"]} ${row["last_name"]}? This cannot be undone.`)) return;
		const { error } = await supabase.from("vtu-ksaw-application").delete().eq("id", row.id);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Registration deleted");
		qc.invalidateQueries();
	};
	const exportCsv = () => {
		const rows = listQuery.data?.rows ?? [];
		if (!rows.length) {
			toast.error("Nothing to export");
			return;
		}
		const head = COLUMNS.map((c) => c.label).join(",");
		const body = rows.map((r) => COLUMNS.map((c) => `"${String(formatCell(r[c.key], c.type)).replace(/"/g, "\"\"")}"`).join(",")).join("\n");
		const blob = new Blob([`${head}\n${body}`], { type: "text/csv;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `registrations-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		a.click();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "kk-page min-h-screen bg-muted/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-[1400px] px-3 py-6 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl font-semibold text-foreground sm:text-2xl",
							children: "Registrations Dashboard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "All submitted registration forms with full details."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn-kk btn-cancel-kk",
								onClick: exportCsv,
								children: "Export CSV"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn-kk btn-primary-kk",
								onClick: signOut,
								children: "Sign Out"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: "Total Registrations",
								value: stats.total
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: "Today",
								value: stats.today
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: "Last 7 Days",
								value: stats.week
							}),
							STATUS_OPTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: s,
								value: stats.byStatus[s] ?? 0
							}, s))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-4 grid gap-3 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breakdown, {
								title: "By Course",
								data: stats.byCourse
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breakdown, {
								title: "By Gender",
								data: stats.byGender
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breakdown, {
								title: "Top Districts",
								data: stats.byDistrict,
								limit: 6
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-5 rounded-lg border border-border bg-card p-3 sm:p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 md:grid-cols-2 xl:grid-cols-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "xl:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "ctrl-label",
											htmlFor: "q",
											children: "Search"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "q",
											className: "form-ctrl",
											placeholder: "Name, email, phone, city, district",
											value: search,
											onChange: (e) => resetPage(setSearch)(e.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
										label: "Status",
										value: status,
										onChange: resetPage(setStatus),
										options: STATUS_OPTIONS
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
										label: "Course",
										value: course,
										onChange: resetPage(setCourse),
										options: SKILLS
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
										label: "Category",
										value: category,
										onChange: resetPage(setCategory),
										options: CATEGORIES
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "ctrl-label",
										htmlFor: "district",
										children: "District"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "district",
										className: "form-ctrl",
										placeholder: "District",
										value: district,
										onChange: (e) => resetPage(setDistrict)(e.target.value)
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary shadow-xs",
										children: listQuery.isLoading ? "Loading…" : `${total} Record${total === 1 ? "" : "s"} Found`
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 bg-muted/40 p-1 rounded-lg border border-border/80",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSortDesc((v) => !v),
												className: "px-3 py-1.5 text-xs font-medium rounded-md bg-card border border-border/60 hover:bg-muted/80 text-foreground transition-colors shadow-xs cursor-pointer",
												children: ["Sort: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-primary",
													children: sortDesc ? "Newest" : "Oldest"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-border px-1",
												children: "|"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												className: "bg-transparent border-0 py-1 pl-2 pr-6 text-xs font-medium text-foreground focus:outline-hidden focus:ring-0 cursor-pointer",
												value: pageSize,
												onChange: (e) => {
													setPageSize(Number(e.target.value));
													setPage(0);
												},
												children: PAGE_SIZES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
													value: n,
													children: [n, " / page"]
												}, n))
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 bg-muted/40 p-1 rounded-lg border border-border/80",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: page === 0,
												onClick: () => setPage((p) => Math.max(0, p - 1)),
												className: "inline-flex items-center justify-center h-8 px-2.5 text-xs font-medium rounded-md bg-card border border-border/60 text-foreground hover:bg-muted/80 disabled:opacity-50 disabled:pointer-events-none transition-colors shadow-xs cursor-pointer",
												children: "← Prev"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "px-3 text-xs font-medium text-muted-foreground whitespace-nowrap",
												children: [
													"Page ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-foreground",
														children: page + 1
													}),
													" of ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-foreground",
														children: pageCount
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: page + 1 >= pageCount,
												onClick: () => setPage((p) => p + 1),
												className: "inline-flex items-center justify-center h-8 px-2.5 text-xs font-medium rounded-md bg-card border border-border/60 text-foreground hover:bg-muted/80 disabled:opacity-50 disabled:pointer-events-none transition-colors shadow-xs cursor-pointer",
												children: "Next →"
											})
										]
									})]
								})]
							}),
							listQuery.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-destructive",
								children: "Could not load records. Your account may not have admin access yet."
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 overflow-x-auto rounded border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[1600px] border-collapse text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "sticky left-0 z-10 bg-muted px-3 py-2.5 text-left font-semibold border-r border-border",
											children: "Actions"
										}), COLUMNS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "whitespace-nowrap px-3 py-2.5 text-left font-semibold",
											children: c.label
										}, c.key))] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [(listQuery.data?.rows ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border odd:bg-background even:bg-muted/30 hover:bg-muted/10 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "sticky left-0 z-10 whitespace-nowrap bg-card px-3 py-2 border-r border-border shadow-[2px_0_4px_rgba(0,0,0,0.03)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => setViewing(r),
														className: "inline-flex items-center justify-center rounded bg-primary/10 px-2.5 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors cursor-pointer",
														children: "View"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => setEditing(r),
														className: "inline-flex items-center justify-center rounded bg-amber-500/10 px-2.5 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-500/20 transition-colors cursor-pointer",
														children: "Edit"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => void remove(r),
														className: "inline-flex items-center justify-center rounded bg-red-500/10 px-2.5 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-500/20 transition-colors cursor-pointer",
														children: "Delete"
													})
												]
											})
										}), COLUMNS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "whitespace-nowrap px-3 py-2 text-foreground",
											children: formatCell(r[c.key], c.type)
										}, c.key))]
									}, r.id)), !listQuery.isLoading && (listQuery.data?.rows.length ?? 0) === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-6 text-center text-muted-foreground",
										colSpan: COLUMNS.length + 1,
										children: "No registrations match your filters."
									}) }) : null] })]
								})
							})
						]
					})
				]
			}),
			viewing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewDialog, {
				row: viewing,
				onClose: () => setViewing(null)
			}) : null,
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditDialog, {
				row: editing,
				onClose: () => setEditing(null),
				onSaved: () => {
					setEditing(null);
					qc.invalidateQueries();
				}
			}) : null
		]
	});
}
function StatCard({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-2xl font-semibold text-foreground",
			children: value
		})]
	});
}
function Breakdown({ title, data, limit = 10 }) {
	const entries = Object.entries(data).sort((a, b) => b[1] - a[1]).slice(0, limit);
	const max = entries[0]?.[1] ?? 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold text-foreground",
				children: title
			}),
			entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "No data yet."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: entries.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate pr-2 text-foreground",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: v
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 h-1.5 rounded bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 rounded bg-primary",
						style: { width: `${v / max * 100}%` }
					})
				})] }, k))
			})
		]
	});
}
function FilterSelect({ label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "ctrl-label",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "form-ctrl",
		value,
		onChange: (e) => onChange(e.target.value),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: "All"
		}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: o,
			children: o
		}, o))]
	})] });
}
function Dialog({ title, children, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-4xl rounded-lg bg-card p-4 shadow-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold text-foreground",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-muted-foreground underline",
					onClick: onClose,
					children: "Close"
				})]
			}), children]
		})
	});
}
function shouldShowField(key, row) {
	if ([
		"sa_types",
		"sa_sub_types",
		"sa_proof"
	].includes(key)) return row["specially_abled"] === "Yes";
	if ([
		"caste",
		"caste_sub_category",
		"nigama",
		"caste_cert_type",
		"rd_number",
		"caste_proof"
	].includes(key)) return row["category"] !== "General";
	if (["stream", "subject"].includes(key)) return row["education"] !== "10th";
	if (key === "skill_experience_proof") return row["past_skill_experience"] === "Yes";
	if ([
		"employed_from",
		"current_employer",
		"current_designation"
	].includes(key)) return row["currently_employed"] === "Yes";
	if ([
		"work_experience",
		"last_employer",
		"last_designation",
		"last_salary",
		"last_employer_address",
		"employment_proof"
	].includes(key)) return row["previously_employed"] === "Yes";
	if (key.startsWith("per_")) return row["same_address"] !== "Yes";
	return true;
}
function ViewDialog({ row, onClose }) {
	const visibleColumns = COLUMNS.filter((c) => shouldShowField(c.key, row));
	const groups = [...new Set(visibleColumns.map((c) => c.group))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		title: `${row["first_name"]} ${row["last_name"]}`,
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-4 max-h-[70vh] overflow-y-auto pr-1",
			children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold uppercase tracking-wide text-muted-foreground border-b border-border pb-1 mb-2",
				children: g
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: visibleColumns.filter((c) => c.group === g).map((c) => {
					const val = row[c.key];
					const isUrl = typeof val === "string" && (val.startsWith("http://") || val.startsWith("https://"));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded border border-border bg-muted/10 p-2.5 flex flex-col justify-between min-h-[64px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs font-medium text-muted-foreground",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "break-words text-sm text-foreground mt-1 font-normal",
							children: isUrl ? val.toLowerCase().match(/\.(jpeg|jpg|gif|png|webp)/) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: val,
									alt: c.label,
									className: "h-16 w-16 object-cover rounded border border-border bg-card shadow-sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: val,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center justify-center rounded bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-max",
									children: "View Image"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: val,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1.5 justify-center rounded border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
									children: "📄 View PDF Document"
								})
							}) : formatCell(val, c.type)
						})] })
					}, c.key);
				})
			})] }, g))
		})
	});
}
function EditDialog({ row, onClose, onSaved }) {
	const [form, setForm] = (0, import_react.useState)({ ...row });
	const [busy, setBusy] = (0, import_react.useState)(false);
	const visibleColumns = COLUMNS.filter((c) => c.key !== "created_at" && shouldShowField(c.key, form));
	const groups = [...new Set(visibleColumns.map((c) => c.group))];
	const save = async () => {
		const first = String(form["first_name"] ?? "").trim();
		const last = String(form["last_name"] ?? "").trim();
		const phone = String(form["phone"] ?? "").trim();
		const email = String(form["email"] ?? "").trim();
		if (!first || !last) {
			toast.error("First and last name are required");
			return;
		}
		if (!/^[6-9]\d{9}$/.test(phone)) {
			toast.error("Enter a valid 10 digit phone number");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error("Enter a valid email address");
			return;
		}
		const payload = {};
		for (const c of COLUMNS) {
			if (c.key === "created_at") continue;
			let v = form[c.key];
			if (c.type === "array") v = typeof v === "string" ? v.split(",").map((s) => s.trim()).filter(Boolean) : v ?? [];
			else if (c.type === "date") v = v ? v : null;
			payload[c.key] = v;
		}
		setBusy(true);
		const { error } = await supabase.from("vtu-ksaw-application").update(payload).eq("id", row.id);
		setBusy(false);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Registration updated");
		onSaved();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		title: "Edit Registration",
		onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 max-h-[65vh] space-y-4 overflow-y-auto pr-1",
			children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold uppercase tracking-wide text-muted-foreground border-b border-border pb-1 mb-2",
				children: g
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: visibleColumns.filter((c) => c.group === g).map((c) => {
					const raw = form[c.key];
					const value = Array.isArray(raw) ? raw.join(", ") : raw == null ? "" : String(raw);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "ctrl-label",
						children: c.label
					}), c.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "form-ctrl",
						value,
						onChange: (e) => setForm((f) => ({
							...f,
							[c.key]: e.target.value
						})),
						children: (c.options ?? []).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: o,
							children: o
						}, o))
					}) : c.type === "bool" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "form-ctrl",
						value: raw ? "Yes" : "No",
						onChange: (e) => setForm((f) => ({
							...f,
							[c.key]: e.target.value === "Yes"
						})),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Yes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "No" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "form-ctrl",
						type: c.type === "date" ? "date" : "text",
						value: c.type === "date" ? value.slice(0, 10) : value,
						onChange: (e) => setForm((f) => ({
							...f,
							[c.key]: e.target.value
						}))
					})] }, c.key);
				})
			})] }, g))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex justify-end gap-2 border-t border-border pt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-kk btn-cancel-kk",
				onClick: onClose,
				children: "Cancel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-kk btn-primary-kk",
				onClick: () => void save(),
				disabled: busy,
				children: busy ? "Saving…" : "Save Changes"
			})]
		})]
	});
}
//#endregion
export { AdminPage as component };
