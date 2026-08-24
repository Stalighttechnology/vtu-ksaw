import univLogo from "@/assets/vtu-logo.png";
import govLogo from "@/assets/image copy.png";

export function SiteHeader() {
  return (
    <header className="kk-header">
      <div className="kk-wrap kk-header-in">
        <div className="kk-logo">
          <img src={govLogo} alt="Government of Karnataka emblem" width={58} height={58} />
          <img src={univLogo} alt="Visvesvaraya Technological University logo" width={58} height={58} />
        </div>
        <div className="kk-header-titles">
          <p className="kk-header-title">Visvesvaraya Technological University</p>
          <p className="kk-header-sub">Belagavi, Karnataka</p>
        </div>
        <div className="kk-logo kk-header-spacer" aria-hidden />
      </div>
    </header>
  );
}

export function PageBanner() {
  return (
    <section className="kk-banner">
      <div className="kk-wrap">
        <h1>Skill Development Registration Form</h1>
        <p>
          For any clarifications please, visit: <a href="https://vtu.ac.in/skill-development/" target="_blank" rel="noopener noreferrer">vtu.ac.in/skill-development</a>
        </p>
      </div>
    </section>
  );
}
