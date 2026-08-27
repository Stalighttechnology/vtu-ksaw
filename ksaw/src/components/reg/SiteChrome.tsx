import univLogo from "@/assets/vtu-logo.png";
import govLogo from "@/assets/image copy.png";

export function SiteHeader() {
  return (
    <header className="kk-header">
      <div className="kk-wrap kk-header-in">
        <div className="kk-logo kk-logo-left">
          <img src={govLogo} alt="Government of Karnataka emblem" width={140} height={140} />
        </div>
        <div className="kk-header-titles">
          <p className="kk-header-title">Visvesvaraya Technological University</p>
          <p className="kk-header-sub">Belagavi, Karnataka</p>
        </div>
        <div className="kk-logo kk-logo-right">
          <img src={univLogo} alt="Visvesvaraya Technological University logo" width={175} height={175} />
        </div>
      </div>
    </header>
  );
}

export function PageBanner() {
  return (
    <section className="kk-banner">
      <div className="kk-wrap">
        <h1>Skill Development Registration Form</h1>

      </div>
    </section>
  );
}
