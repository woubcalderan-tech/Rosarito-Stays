import { Link } from "react-router";
import facebook from "../assets/brand/social/facebook.svg?inline";
import instagram from "../assets/brand/social/instagram.svg?inline";
import youtube from "../assets/brand/social/youtube.svg?inline";
import { navigation, paths } from "../config/site";
import { Brand } from "./Brand";
import { NavigationEntries } from "./NavigationEntries";

declare const __SHOW_PREVIEW_CONTENT__: boolean;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div
        className={`footer-main${__SHOW_PREVIEW_CONTENT__ ? " footer-main--with-social" : ""}`}
      >
        <div className="footer-brand-area">
          <Brand footer />
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {navigation.map(({ label, entries }) => (
            <div className="footer-nav-group" key={label}>
              <p>{label}</p>
              <ul>
                <NavigationEntries entries={entries} />
              </ul>
            </div>
          ))}
        </nav>
        {__SHOW_PREVIEW_CONTENT__ && (
          <div
            className="footer-social"
            role="group"
            aria-label="Social links coming soon"
          >
            <img src={instagram} alt="Instagram" width={18} height={18} />
            <img src={facebook} alt="Facebook" width={18} height={18} />
            <img src={youtube} alt="YouTube" width={20} height={20} />
          </div>
        )}
      </div>
      <nav className="footer-legal" aria-label="Legal">
        <Link to={paths.privacy}>Privacy Policy</Link>
        <Link to={paths.terms}>Terms &amp; Conditions</Link>
      </nav>
    </footer>
  );
}
