import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-2lu0DPQ6.mjs";
import { a as require_jsx_runtime, i as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteHeader, t as PageBanner } from "./SiteChrome-eS6_GAWM.mjs";
import { _ as STREAMS, a as DISTRICTS, b as TRAINING_DURATIONS, c as LAST_SALARY, d as RELIGIONS, f as SALUTATIONS, g as STATES, h as SPECIALLY_ABLED_TYPES, i as CATEGORIES, l as NIGAMAS, m as SPECIALLY_ABLED_SUB_TYPES, n as CASTE_CATEGORIES, o as EDUCATION_LEVELS, p as SKILLS, r as CASTE_NAMES, s as LANGUAGES_KNOWN, t as CASTES, u as PASSING_YEARS, v as SUBJECTS, y as TALUKS } from "./castes-DilvKwEs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cz5rRFbC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Section({ title, variant = "sub", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: variant === "main" ? "sec-head sec-head--main" : "sec-head",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title })
	}), children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sec-body",
		children
	}) : null] });
}
function Row({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "frow",
		children
	});
}
function Field({ label, required, info, error, htmlFor, children, span = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fcol fcol-${span}`,
		children: [
			label ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "ctrl-label",
				htmlFor,
				children: [
					label,
					" ",
					required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "req",
						children: "*"
					}) : null
				]
			}) : null,
			info ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontSize: "11px",
					color: "#b91c1c",
					marginTop: "-4px",
					marginBottom: "6px",
					fontWeight: 500
				},
				children: info
			}) : null,
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "err-msg",
				children: error
			}) : null
		]
	});
}
function TextField({ label, required, info, error, span, value, onChange, placeholder, type = "text", maxLength, inputMode }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		required,
		info,
		error,
		htmlFor: id,
		span,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			className: `form-ctrl${error ? " is-invalid" : ""}`,
			type,
			value,
			maxLength,
			inputMode,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		})
	});
}
function SelectField({ label, required, info, error, span, value, onChange, options, placeholder = "Select", withPlaceholder = true, disabled }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		required,
		info,
		error,
		htmlFor: id,
		span,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			id,
			className: `form-ctrl${error ? " is-invalid" : ""}`,
			value,
			disabled,
			onChange: (e) => onChange(e.target.value),
			children: [withPlaceholder ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: placeholder
			}) : null, options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))]
		})
	});
}
function RadioGroup({ label, required, error, span, name, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		required,
		error,
		span,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "radio-block",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "radio-inline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "radio",
					name,
					value: o,
					checked: value === o,
					onChange: () => onChange(o)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o })]
			}, o))
		})
	});
}
function MultiSelect({ label, required, error, span, options, value, onChange, max, searchable, single }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const shown = q ? options.filter((o) => o.toLowerCase().includes(q.toLowerCase())) : options;
	const toggle = (o) => {
		if (single) {
			onChange(value.includes(o) ? [] : [o]);
			setOpen(false);
			return;
		}
		if (value.includes(o)) onChange(value.filter((v) => v !== o));
		else if (!max || value.length < max) onChange([...value, o]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		required,
		error,
		span,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ms",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: `form-ctrl ms-btn${error ? " is-invalid" : ""}`,
				onClick: () => setOpen((v) => !v),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ms-btn-text",
					children: value.length ? value.join(", ") : "None selected"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "caret",
					"aria-hidden": true
				})]
			}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ms-menu",
				children: [searchable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "form-ctrl ms-search",
					placeholder: "Search",
					value: q,
					onChange: (e) => setQ(e.target.value)
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [shown.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: single ? "radio" : "checkbox",
					checked: value.includes(o),
					onChange: () => toggle(o)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o })] }) }, o)), shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "ms-empty",
					children: "No results"
				}) : null] })]
			}) : null]
		})
	});
}
function FileField({ label, required, error, span, value, onChange, accept = "application/pdf", maxSizeMb = 1, hint = "PDF only, max 1 MB" }) {
	const id = (0, import_react.useId)();
	const [localError, setLocalError] = (0, import_react.useState)("");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const shownError = localError || error;
	const handle = async (file) => {
		if (!file) {
			setLocalError("");
			onChange("");
			return;
		}
		if (!accept.split(",").map((a) => a.trim().toLowerCase()).some((a) => a.startsWith(".") ? file.name.toLowerCase().endsWith(a) : a.endsWith("/*") ? file.type.startsWith(a.slice(0, -1)) : file.type === a)) {
			setLocalError(accept === "application/pdf" ? "Only PDF files are allowed" : "Invalid file type");
			onChange("");
			return;
		}
		if (file.size > maxSizeMb * 1024 * 1024) {
			setLocalError(`File must be less than ${maxSizeMb} MB`);
			onChange("");
			return;
		}
		setLocalError("");
		setUploading(true);
		try {
			const fileExt = file.name.split(".").pop();
			const randomId = Math.random().toString(36).substring(2, 15);
			const safeName = file.name.replace(/[^a-zA-Z0-9]/g, "_");
			const fileName = `${randomId}_${Date.now()}_${safeName}.${fileExt}`;
			const { error: uploadError } = await supabase.storage.from("registrations").upload(fileName, file);
			if (uploadError) throw uploadError;
			const { data: { publicUrl } } = supabase.storage.from("registrations").getPublicUrl(fileName);
			onChange(publicUrl);
		} catch (err) {
			console.error("Error uploading file:", err);
			setLocalError(err.message || "Failed to upload file");
			onChange("");
		} finally {
			setUploading(false);
		}
	};
	const getDisplayValue = () => {
		if (uploading) return "Uploading...";
		if (!value) return "";
		if (value.startsWith("http")) {
			const parts = value.split("/");
			return (parts[parts.length - 1] || "").replace(/^[a-z0-9]+_\d+_/, "") || "Uploaded File";
		}
		return value;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		required,
		error: shownError,
		span,
		info: hint,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "file-input",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: `form-ctrl file-name${shownError ? " is-invalid" : ""}`,
					readOnly: true,
					value: getDisplayValue(),
					placeholder: "No file selected"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: `file-btn${uploading ? " disabled" : ""}`,
					htmlFor: uploading ? void 0 : id,
					children: uploading ? "..." : "Browse"
				}),
				!uploading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id,
					type: "file",
					accept,
					className: "sr-only",
					onChange: (e) => handle(e.target.files?.[0])
				})
			]
		})
	});
}
function DateField({ label, required, error, span, value, onChange, placeholder }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		required,
		error,
		htmlFor: id,
		span,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "date-wrap",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				type: "date",
				className: `form-ctrl${error ? " is-invalid" : ""}`,
				value,
				placeholder,
				onChange: (e) => onChange(e.target.value)
			})
		})
	});
}
var emptyAddress = () => ({
	location: "Urban",
	street1: "",
	street2: "",
	state: "",
	district: "",
	taluk: "",
	city: "",
	village: "",
	zip: ""
});
function RegistrationPage() {
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [dob, setDob] = (0, import_react.useState)("");
	const [gender, setGender] = (0, import_react.useState)("Male");
	const [marital, setMarital] = (0, import_react.useState)("Single");
	const [speciallyAbled, setSpeciallyAbled] = (0, import_react.useState)("No");
	const [saTypes, setSaTypes] = (0, import_react.useState)([]);
	const [saSubTypes, setSaSubTypes] = (0, import_react.useState)([]);
	const [saProof, setSaProof] = (0, import_react.useState)("");
	const [religion, setReligion] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("General");
	const [caste, setCaste] = (0, import_react.useState)("");
	const casteInfo = CASTES.find((c) => c.name === caste);
	const [casteSubCategory, setCasteSubCategory] = (0, import_react.useState)("");
	const [rdNumber, setRdNumber] = (0, import_react.useState)("");
	const [casteProof, setCasteProof] = (0, import_react.useState)("");
	const [aadhaarNumber, setAadhaarNumber] = (0, import_react.useState)("");
	const [guardianship, setGuardianship] = (0, import_react.useState)("Father");
	const [salutation, setSalutation] = (0, import_react.useState)("Mr.");
	const [gFirstName, setGFirstName] = (0, import_react.useState)("");
	const [gLastName, setGLastName] = (0, import_react.useState)("");
	const [current, setCurrent] = (0, import_react.useState)(emptyAddress());
	const [sameAddress, setSameAddress] = (0, import_react.useState)("No");
	const [permanent, setPermanent] = (0, import_react.useState)(emptyAddress());
	const [education, setEducation] = (0, import_react.useState)("");
	const [stream, setStream] = (0, import_react.useState)("");
	const [subject, setSubject] = (0, import_react.useState)("");
	const [langInstruction, setLangInstruction] = (0, import_react.useState)("English");
	const [otherLanguage, setOtherLanguage] = (0, import_react.useState)("");
	const [yearOfPassing, setYearOfPassing] = (0, import_react.useState)("");
	const [languagesKnown, setLanguagesKnown] = (0, import_react.useState)([]);
	const [pastSkillExp, setPastSkillExp] = (0, import_react.useState)("No");
	const [skillExpProof, setSkillExpProof] = (0, import_react.useState)("");
	const [skills, setSkills] = (0, import_react.useState)([]);
	const [trainingDuration, setTrainingDuration] = (0, import_react.useState)("");
	const [apprenticeship, setApprenticeship] = (0, import_react.useState)("No");
	const [currentlyEmployed, setCurrentlyEmployed] = (0, import_react.useState)("No");
	const [employedFrom, setEmployedFrom] = (0, import_react.useState)("");
	const [currentEmployer, setCurrentEmployer] = (0, import_react.useState)("");
	const [currentDesignation, setCurrentDesignation] = (0, import_react.useState)("");
	const [previouslyEmployed, setPreviouslyEmployed] = (0, import_react.useState)("No");
	const [workExperience, setWorkExperience] = (0, import_react.useState)("");
	const [lastEmployer, setLastEmployer] = (0, import_react.useState)("");
	const [lastDesignation, setLastDesignation] = (0, import_react.useState)("");
	const [lastSalary, setLastSalary] = (0, import_react.useState)("");
	const [lastEmployerAddress, setLastEmployerAddress] = (0, import_react.useState)("");
	const [empProof, setEmpProof] = (0, import_react.useState)("");
	const [eduProof, setEduProof] = (0, import_react.useState)("");
	const [ageProof, setAgeProof] = (0, import_react.useState)("");
	const [profileImg, setProfileImg] = (0, import_react.useState)("");
	const [declaration, setDeclaration] = (0, import_react.useState)(true);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [showSuccessDialog, setShowSuccessDialog] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)("");
	const streamOptions = (0, import_react.useMemo)(() => STREAMS[education] ?? [], [education]);
	const subjectOptions = (0, import_react.useMemo)(() => SUBJECTS[stream] ?? [], [stream]);
	const setAddr = (which, patch) => {
		(which === "current" ? setCurrent : setPermanent)((prev) => ({
			...prev,
			...patch
		}));
	};
	const validateAddress = (prefix, a, e) => {
		if (!a.street1.trim()) e[`${prefix}_street1`] = "Street address is required";
		if (!a.state) e[`${prefix}_state`] = "State is required";
		if (!a.district) e[`${prefix}_district`] = "District is required";
		if (!a.taluk) e[`${prefix}_taluk`] = "Taluk is required";
		if (a.location === "Urban" && !a.city.trim()) e[`${prefix}_city`] = "City is required";
		if (a.location === "Rural" && !a.village.trim()) e[`${prefix}_village`] = "Village is required";
		if (!/^\d{6}$/.test(a.zip)) e[`${prefix}_zip`] = "Enter a valid 6 digit postal code";
	};
	const validate = () => {
		const e = {};
		if (!firstName.trim()) e["firstName"] = "First name is required";
		if (!lastName.trim()) e["lastName"] = "Last name is required";
		if (!gender) e["gender"] = "Gender is required";
		if (!marital) e["marital"] = "Marital status is required";
		if (!/^[6-9]\d{9}$/.test(phone)) e["phone"] = "Enter a valid 10 digit phone number";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e["email"] = "Enter a valid email address";
		if (!dob) e["dob"] = "Date of birth is required";
		if (!religion) e["religion"] = "Religion is required";
		if (speciallyAbled === "Yes") {
			if (saTypes.length === 0) e["saTypes"] = "Select at least one type";
			if (saSubTypes.length === 0) e["saSubTypes"] = "Select at least one sub type";
		}
		if (!/^\d{12}$/.test(aadhaarNumber)) e["aadhaarNumber"] = "Enter a valid 12 digit Aadhaar number";
		if (category !== "General") {
			if (category === "OBC") {
				if (!caste) e["caste"] = "Caste is required";
				if (!casteSubCategory) e["casteSubCategory"] = "Category is required";
			}
			if (!rdNumber.trim()) e["rdNumber"] = "RD number is required";
			if (!casteProof) e["casteProof"] = "Caste proof document upload is required";
		}
		if (!gFirstName.trim()) e["gFirstName"] = "First name is required";
		if (!gLastName.trim()) e["gLastName"] = "Last name is required";
		validateAddress("cur", current, e);
		if (sameAddress === "No") validateAddress("per", permanent, e);
		if (!education) e["education"] = "Education is required";
		if (education !== "10th") {
			if (streamOptions.length > 0 && !stream) e["stream"] = "Stream is required";
			if (subjectOptions.length > 0 && !subject) e["subject"] = "Subject is required";
		}
		if (langInstruction === "Other" && !otherLanguage.trim()) e["otherLanguage"] = "Other language is required";
		if (!yearOfPassing) e["yearOfPassing"] = "Year of passing is required";
		if (languagesKnown.length === 0) e["languagesKnown"] = "Select at least one language";
		if (pastSkillExp === "Yes" && !skillExpProof) e["skillExpProof"] = "Proof of past skill experience is required";
		if (skills.length !== 1) e["skills"] = "Select one skill";
		if (!trainingDuration) e["trainingDuration"] = "Preferred duration is required";
		if (currentlyEmployed === "Yes") {
			if (!employedFrom) e["employedFrom"] = "Employed from is required";
			if (!currentEmployer.trim()) e["currentEmployer"] = "Current employer is required";
			if (!currentDesignation.trim()) e["currentDesignation"] = "Current designation is required";
		}
		if (previouslyEmployed === "Yes") {
			if (!workExperience.trim()) e["workExperience"] = "Work experience is required";
			if (!lastEmployer.trim()) e["lastEmployer"] = "Last employer is required";
			if (!lastDesignation.trim()) e["lastDesignation"] = "Last designation is required";
			if (!lastSalary) e["lastSalary"] = "Last drawn salary is required";
			if (!lastEmployerAddress.trim()) e["lastEmployerAddress"] = "Address of last employer is required";
			if (!empProof) e["empProof"] = "Proof of experience is required";
		}
		if (!eduProof) e["eduProof"] = "Proof of education is required";
		if (!ageProof) e["ageProof"] = "Proof of age is required";
		if (!profileImg) e["profileImg"] = "Profile image is required";
		if (!declaration) e["declaration"] = "You must accept the declaration";
		return e;
	};
	const resetForm = () => {
		setFirstName("");
		setLastName("");
		setPhone("");
		setEmail("");
		setDob("");
		setGender("Male");
		setMarital("Single");
		setSpeciallyAbled("No");
		setSaTypes([]);
		setSaSubTypes([]);
		setSaProof("");
		setReligion("");
		setCategory("General");
		setCaste("");
		setCasteSubCategory("");
		setRdNumber("");
		setCasteProof("");
		setAadhaarNumber("");
		setGuardianship("Father");
		setSalutation("Mr.");
		setGFirstName("");
		setGLastName("");
		setCurrent(emptyAddress());
		setSameAddress("No");
		setPermanent(emptyAddress());
		setEducation("");
		setStream("");
		setSubject("");
		setLangInstruction("English");
		setOtherLanguage("");
		setYearOfPassing("");
		setLanguagesKnown([]);
		setPastSkillExp("No");
		setSkillExpProof("");
		setSkills([]);
		setTrainingDuration("");
		setApprenticeship("No");
		setCurrentlyEmployed("No");
		setEmployedFrom("");
		setCurrentEmployer("");
		setCurrentDesignation("");
		setPreviouslyEmployed("No");
		setWorkExperience("");
		setLastEmployer("");
		setLastDesignation("");
		setLastSalary("");
		setLastEmployerAddress("");
		setEmpProof("");
		setEduProof("");
		setAgeProof("");
		setProfileImg("");
		setDeclaration(true);
		setErrors({});
	};
	const onSubmit = async (ev) => {
		ev.preventDefault();
		const e = validate();
		setErrors(e);
		if (Object.keys(e).length > 0) {
			setSubmitError("Please fill all mandatory fields correctly.");
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		setSubmitting(true);
		setSubmitError("");
		setSubmitted(false);
		try {
			const { error: dbError } = await supabase.from("vtu-ksaw-application").insert({
				first_name: firstName,
				last_name: lastName,
				phone,
				email,
				dob: dob || null,
				gender,
				marital_status: marital,
				specially_abled: speciallyAbled,
				sa_types: saTypes,
				sa_sub_types: saSubTypes,
				sa_proof: speciallyAbled === "Yes" ? saProof || null : null,
				religion,
				category,
				caste: caste || null,
				caste_sub_category: casteSubCategory || null,
				nigama: casteInfo?.nigama || null,
				rd_number: rdNumber || null,
				caste_proof: casteProof || null,
				aadhaar_number: aadhaarNumber,
				aadhaar_proof: ageProof,
				guardianship,
				guardian_salutation: salutation,
				guardian_first_name: gFirstName,
				guardian_last_name: gLastName,
				cur_location: current.location,
				cur_street1: current.street1,
				cur_street2: current.street2 || null,
				cur_state: current.state,
				cur_district: current.district,
				cur_taluk: current.taluk,
				cur_city: current.location === "Urban" ? current.city : null,
				cur_village: current.location === "Rural" ? current.village : null,
				cur_zip: current.zip,
				same_address: sameAddress,
				per_location: sameAddress === "Yes" ? current.location : permanent.location,
				per_street1: sameAddress === "Yes" ? current.street1 : permanent.street1,
				per_street2: (sameAddress === "Yes" ? current.street2 : permanent.street2) || null,
				per_state: sameAddress === "Yes" ? current.state : permanent.state,
				per_district: sameAddress === "Yes" ? current.district : permanent.district,
				per_taluk: sameAddress === "Yes" ? current.taluk : permanent.taluk,
				per_city: sameAddress === "Yes" ? current.location === "Urban" ? current.city : null : permanent.location === "Urban" ? permanent.city : null,
				per_village: sameAddress === "Yes" ? current.location === "Rural" ? current.village : null : permanent.location === "Rural" ? permanent.village : null,
				per_zip: sameAddress === "Yes" ? current.zip : permanent.zip,
				education,
				stream,
				subject: subject || null,
				language_of_instruction: langInstruction,
				other_language: langInstruction === "Other" ? otherLanguage : null,
				year_of_passing: yearOfPassing,
				languages_known: languagesKnown,
				past_skill_experience: pastSkillExp,
				skill_experience_proof: pastSkillExp === "Yes" ? skillExpProof : null,
				skill_sought: skills[0] || "",
				training_duration: trainingDuration,
				apprenticeship,
				currently_employed: currentlyEmployed,
				employed_from: currentlyEmployed === "Yes" ? employedFrom || null : null,
				current_employer: currentlyEmployed === "Yes" ? currentEmployer : null,
				current_designation: currentlyEmployed === "Yes" ? currentDesignation : null,
				previously_employed: previouslyEmployed,
				work_experience: previouslyEmployed === "Yes" ? workExperience : null,
				last_employer: previouslyEmployed === "Yes" ? lastEmployer : null,
				last_designation: previouslyEmployed === "Yes" ? lastDesignation : null,
				last_salary: previouslyEmployed === "Yes" ? lastSalary : null,
				last_employer_address: previouslyEmployed === "Yes" ? lastEmployerAddress : null,
				employment_proof: previouslyEmployed === "Yes" ? empProof : null,
				education_proof: eduProof,
				age_proof: ageProof,
				profile_image: profileImg,
				declaration_accepted: declaration
			});
			if (dbError) throw dbError;
			setShowSuccessDialog(true);
			setSubmitted(true);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} catch (err) {
			console.error("Submission error:", err);
			setSubmitError(err.message || "Failed to submit registration. Please try again.");
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} finally {
			setSubmitting(false);
		}
	};
	const onCancel = () => {
		window.location.reload();
	};
	const addressBlock = (which, a, prefix) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
				label: "Location",
				required: true,
				name: `${which}_location`,
				value: a.location,
				onChange: (v) => setAddr(which, { location: v }),
				options: ["Urban", "Rural"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Street Address",
				required: true,
				placeholder: "Street Address",
				value: a.street1,
				onChange: (v) => setAddr(which, { street1: v }),
				error: errors[`${prefix}_street1`]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Street Address Line 2",
				placeholder: "Street Address Line 2",
				value: a.street2,
				onChange: (v) => setAddr(which, { street2: v })
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
				label: "State",
				required: true,
				value: a.state,
				onChange: (v) => setAddr(which, {
					state: v,
					district: "",
					taluk: ""
				}),
				options: STATES,
				error: errors[`${prefix}_state`]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
				label: "District",
				required: true,
				value: a.district,
				onChange: (v) => setAddr(which, {
					district: v,
					taluk: ""
				}),
				options: DISTRICTS[a.state] ?? [],
				error: errors[`${prefix}_district`]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
				label: "Taluk",
				required: true,
				value: a.taluk,
				onChange: (v) => setAddr(which, { taluk: v }),
				options: TALUKS[a.district] ?? [],
				error: errors[`${prefix}_taluk`]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [a.location === "Urban" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
			label: "City",
			required: true,
			info: "Enter your city name",
			placeholder: "City",
			value: a.city,
			onChange: (v) => setAddr(which, { city: v }),
			error: errors[`${prefix}_city`]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
			label: "Village",
			required: true,
			placeholder: "Village",
			value: a.village,
			onChange: (v) => setAddr(which, { village: v }),
			error: errors[`${prefix}_village`]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
			label: "Postal / Zip Code",
			required: true,
			info: "Enter 6 digit postal code",
			placeholder: "Postal / Zip Code",
			inputMode: "numeric",
			maxLength: 6,
			value: a.zip,
			onChange: (v) => setAddr(which, { zip: v.replace(/\D/g, "") }),
			error: errors[`${prefix}_zip`]
		})] })
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "kk-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "kk-form",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "kk-wrap",
					children: [
						submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "kk-alert",
							role: "status",
							children: "Your registration details have been submitted successfully."
						}) : null,
						submitError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "kk-alert",
							role: "status",
							style: {
								backgroundColor: "#fee2e2",
								color: "#991b1b",
								borderColor: "#fecaca"
							},
							children: ["Error submitting form: ", submitError]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							noValidate: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									title: "Personal Details",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "First Name",
												required: true,
												placeholder: "First Name",
												value: firstName,
												onChange: setFirstName,
												error: errors["firstName"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "Last Name",
												required: true,
												placeholder: "Last Name",
												value: lastName,
												onChange: setLastName,
												error: errors["lastName"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "Phone Number",
												required: true,
												info: "Enter 10 digit mobile number without country code",
												placeholder: "10 Digit Phone Number",
												inputMode: "numeric",
												maxLength: 10,
												value: phone,
												onChange: (v) => setPhone(v.replace(/\D/g, "")),
												error: errors["phone"]
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "Email",
												required: true,
												type: "email",
												placeholder: "email address",
												value: email,
												onChange: setEmail,
												error: errors["email"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateField, {
												label: "Date of Birth",
												required: true,
												value: dob,
												onChange: setDob,
												error: errors["dob"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
												label: "Gender",
												required: true,
												name: "gender",
												value: gender,
												onChange: setGender,
												options: [
													"Male",
													"Female",
													"Other"
												]
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
											label: "Marital Status",
											required: true,
											name: "marital_status",
											value: marital,
											onChange: setMarital,
											options: [
												"Single",
												"Married",
												"Widow"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
											label: "Specially Abled",
											name: "is_physically_challenged",
											value: speciallyAbled,
											onChange: setSpeciallyAbled,
											options: ["Yes", "No"]
										})] }),
										speciallyAbled === "Yes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiSelect, {
												label: "Specially Abled Types",
												required: true,
												options: SPECIALLY_ABLED_TYPES,
												value: saTypes,
												onChange: setSaTypes,
												error: errors["saTypes"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiSelect, {
												label: "Specially Abled Sub Types",
												required: true,
												options: SPECIALLY_ABLED_SUB_TYPES,
												value: saSubTypes,
												onChange: setSaSubTypes,
												error: errors["saSubTypes"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileField, {
												label: "Proof of Specially Abled Type",
												value: saProof,
												onChange: setSaProof
											})
										] }) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: "Religion",
											required: true,
											value: religion,
											onChange: setReligion,
											options: RELIGIONS,
											error: errors["religion"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											label: "Aadhaar Number",
											required: true,
											info: "Enter 12 digit Aadhaar number",
											placeholder: "12 Digit Aadhaar Number",
											inputMode: "numeric",
											maxLength: 12,
											value: aadhaarNumber,
											onChange: (v) => setAadhaarNumber(v.replace(/\D/g, "")),
											error: errors["aadhaarNumber"]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "fcol fcol-12",
											style: { marginBottom: -8 },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "blink-text",
												children: "⚠️ Please refer to your caste certificate and select the correct caste and category."
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
											label: "Category",
											required: true,
											span: 8,
											name: "category",
											value: category,
											onChange: setCategory,
											options: CATEGORIES
										})] }),
										category !== "General" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
											category === "OBC" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiSelect, {
													label: "Caste",
													required: true,
													searchable: true,
													single: true,
													options: CASTE_NAMES,
													value: caste ? [caste] : [],
													onChange: (v) => {
														const selectedCaste = v[0] ?? "";
														setCaste(selectedCaste);
														const info = CASTES.find((c) => c.name === selectedCaste);
														if (info) setCasteSubCategory(info.category);
													},
													error: errors["caste"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
													label: "Nigama",
													value: casteInfo?.nigama ?? "",
													onChange: () => {},
													options: NIGAMAS,
													placeholder: "Auto-filled from caste",
													disabled: true
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
													label: "Category",
													value: casteSubCategory,
													onChange: setCasteSubCategory,
													options: CASTE_CATEGORIES,
													placeholder: "Select Category",
													error: errors["casteSubCategory"]
												})
											] }) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "RD Number",
												required: true,
												placeholder: "Rd Number",
												value: rdNumber,
												onChange: setRdNumber,
												error: errors["rdNumber"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileField, {
												label: "Proof of Caste",
												required: true,
												hint: "Upload a valid caste certificate (caste certificate should be valid up to 2027)",
												value: casteProof,
												onChange: setCasteProof,
												error: errors["casteProof"]
											})
										] }) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: "Father/Mother/Guardian Details",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											span: 4,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-group",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "radio-block",
													children: [
														"Father",
														"Mother",
														"Guardian"
													].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "radio-inline",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "radio",
															name: "guardianship",
															checked: guardianship === o,
															onChange: () => setGuardianship(o)
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o })]
													}, o))
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													className: "form-ctrl salutation-select",
													"aria-label": "Salutation",
													value: salutation,
													onChange: (e) => setSalutation(e.target.value),
													children: SALUTATIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: s,
														children: s
													}, s))
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											label: "First Name",
											required: true,
											placeholder: "First Name",
											value: gFirstName,
											onChange: setGFirstName,
											error: errors["gFirstName"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											label: "Last Name",
											required: true,
											placeholder: "Last Name",
											value: gLastName,
											onChange: setGLastName,
											error: errors["gLastName"]
										})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: "ADDRESS",
									variant: "main"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: "Current Address",
									children: addressBlock("current", current, "cur")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									title: "Permanent Address",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
										label: "Is your permanent address same as current address?",
										required: true,
										span: 8,
										name: "sameas_permanent_address",
										value: sameAddress,
										onChange: setSameAddress,
										options: ["Yes", "No"]
									}) }), sameAddress === "No" ? addressBlock("permanent", permanent, "per") : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: "EDUCATION",
									variant: "main"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									title: "Educational Details",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: "Education",
											required: true,
											value: education,
											onChange: (v) => {
												setEducation(v);
												setStream("");
												setSubject("");
											},
											options: EDUCATION_LEVELS,
											error: errors["education"]
										}), education !== "10th" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: "Stream",
											required: true,
											value: stream,
											onChange: (v) => {
												setStream(v);
												setSubject("");
											},
											options: streamOptions,
											error: errors["stream"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: "Subject",
											required: true,
											value: subject,
											onChange: setSubject,
											options: subjectOptions,
											placeholder: subjectOptions.length ? "Select" : "N/A",
											error: errors["subject"]
										})] }) : null] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
												label: "Language of Instruction",
												required: true,
												name: "language_instruction",
												value: langInstruction,
												onChange: setLangInstruction,
												options: [
													"English",
													"Kannada",
													"Other"
												]
											}),
											langInstruction === "Other" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "Other Language",
												required: true,
												placeholder: "Other Language",
												value: otherLanguage,
												onChange: setOtherLanguage,
												error: errors["otherLanguage"]
											}) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
												label: "Year of Passing",
												required: true,
												placeholder: "Select Year",
												options: PASSING_YEARS,
												value: yearOfPassing,
												onChange: setYearOfPassing,
												error: errors["yearOfPassing"]
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiSelect, {
												label: "Languages Known",
												required: true,
												searchable: true,
												options: LANGUAGES_KNOWN,
												value: languagesKnown,
												onChange: setLanguagesKnown,
												error: errors["languagesKnown"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
												label: "Past Skill Experience ?",
												name: "past_skill_exp",
												value: pastSkillExp,
												onChange: setPastSkillExp,
												options: ["Yes", "No"]
											}),
											pastSkillExp === "Yes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileField, {
												label: "Proof of Past Skill Experience",
												required: true,
												value: skillExpProof,
												onChange: setSkillExpProof,
												error: errors["skillExpProof"]
											}) : null
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiSelect, {
												label: "Skill Sought / Course",
												required: true,
												searchable: true,
												single: true,
												options: (0, import_react.useMemo)(() => {
													if (stream === "Commerce") return SKILLS;
													return SKILLS.filter((s) => s !== "Accounts Executive - Tally ERP 9");
												}, [stream]),
												value: skills,
												onChange: setSkills,
												error: errors["skills"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
												label: "Preferred Duration Of Training Required",
												required: true,
												value: trainingDuration,
												onChange: setTrainingDuration,
												options: TRAINING_DURATIONS,
												error: errors["trainingDuration"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
												label: "Willing To Take Apprenticeship ?",
												required: true,
												name: "apprenticeship",
												value: apprenticeship,
												onChange: setApprenticeship,
												options: ["Yes", "No"]
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "required-text",
											style: { marginBottom: 14 },
											children: "*( You Can Select Only 1 Skill. )"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									title: "EMPLOYMENT",
									variant: "main",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
											label: "Currently Employed",
											name: "currently_employed",
											value: currentlyEmployed,
											onChange: setCurrentlyEmployed,
											options: ["Yes", "No"]
										}), currentlyEmployed === "Yes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateField, {
												label: "Employed From",
												required: true,
												value: employedFrom,
												onChange: setEmployedFrom,
												error: errors["employedFrom"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "Name Of Current Employer",
												required: true,
												placeholder: "Name Of Current Employer",
												value: currentEmployer,
												onChange: setCurrentEmployer,
												error: errors["currentEmployer"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "Current Designation",
												required: true,
												placeholder: "Current Designation",
												value: currentDesignation,
												onChange: setCurrentDesignation,
												error: errors["currentDesignation"]
											})
										] }) : null] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
											label: "Have You Been Previously Employed",
											required: true,
											name: "previously_employed",
											value: previouslyEmployed,
											onChange: setPreviouslyEmployed,
											options: ["Yes", "No"]
										}) }),
										previouslyEmployed === "Yes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "Total Years Of Work Experience",
												required: true,
												placeholder: "Total Years Of Work Experience",
												value: workExperience,
												onChange: setWorkExperience,
												error: errors["workExperience"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "Name Of Last Employer",
												required: true,
												placeholder: "Name Of Last Employer",
												value: lastEmployer,
												onChange: setLastEmployer,
												error: errors["lastEmployer"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
												label: "Last Designation",
												required: true,
												placeholder: "Last Designation",
												value: lastDesignation,
												onChange: setLastDesignation,
												error: errors["lastDesignation"]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
												label: "Last Drawn Salary In Rs",
												required: true,
												value: lastSalary,
												onChange: setLastSalary,
												options: LAST_SALARY,
												error: errors["lastSalary"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Address Of Last Employer",
												required: true,
												error: errors["lastEmployerAddress"],
												span: 4,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													className: `form-ctrl${errors["lastEmployerAddress"] ? " is-invalid" : ""}`,
													style: {
														height: "auto",
														minHeight: 76
													},
													value: lastEmployerAddress,
													onChange: (e) => setLastEmployerAddress(e.target.value)
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileField, {
												label: "Proof of Experience",
												required: true,
												value: empProof,
												onChange: setEmpProof,
												error: errors["empProof"]
											})
										] })] }) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileField, {
												label: "Proof of Education (Highest Qualification Marksheet Or Convocation Certificate)",
												required: true,
												value: eduProof,
												onChange: setEduProof,
												error: errors["eduProof"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileField, {
												label: "Proof of Age (Upload Aadhaar Photo)",
												required: true,
												hint: "PDF only, max 1 MB",
												accept: "application/pdf",
												maxSizeMb: 1,
												value: ageProof,
												onChange: setAgeProof,
												error: errors["ageProof"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileField, {
												label: "Profile Image (Upload Latest Passport Image)",
												required: true,
												accept: "image/*",
												hint: "Image, max 1 MB",
												value: profileImg,
												onChange: setProfileImg,
												error: errors["profileImg"]
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "declaration",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "declaration",
												type: "checkbox",
												checked: declaration,
												onChange: (e) => setDeclaration(e.target.checked)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "declaration",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "#",
													children: "Acknowledgement & Aadhaar Consent"
												}), " — I hereby declare that the details & documents furnished in Kaushalkar.com are true and correct to the best of my knowledge and belief."]
											})]
										}),
										errors["declaration"] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "err-msg",
											children: errors["declaration"]
										}) : null,
										submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "err-msg",
											children: submitError
										}),
										submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "success-msg",
											children: "Registration submitted successfully!"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "kk-actions",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "btn-kk btn-cancel-kk",
												onClick: onCancel,
												children: "Cancel"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												className: "btn-kk btn-primary-kk",
												disabled: submitting,
												children: submitting ? "Submitting..." : "Submit"
											})]
										})
									]
								})
							]
						})
					]
				})
			}),
			showSuccessDialog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-xl bg-card p-6 shadow-xl border border-border text-center flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "h-6 w-6",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M5 13l4 4L19 7"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold text-foreground",
							children: "Submission Successful"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-2",
							children: "Your registration details have been submitted successfully."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setShowSuccessDialog(false);
								resetForm();
							},
							className: "mt-5 btn-kk btn-primary-kk w-full py-2.5 font-medium rounded-lg text-center",
							children: "OK"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { RegistrationPage as component };
