import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EasyPixelShift",
  description:
    "Learn what information EasyPixelShift may collect, how file conversion works, and how Google measurement and advertising technologies are handled.",
};

export default function PrivacyPage() {
  return (
    <main className="content-area privacy-content">
      <div className="page-title text-center">
        <h1>Privacy Policy</h1>
      </div>

      <div className="page-lead text-center">
        <p>
          This policy explains how EasyPixelShift handles information when you
          visit the website and use its online tools.
        </p>
        <p>Last updated: November 2, 2026</p>
      </div>

      <div className="content-centered text-content">
        <h2>1. About this website</h2>
        <p>
          EasyPixelShift provides browser-based tools for converting and
          working with image, document, audio, and video files. You can use the
          website without creating an account. We do not currently offer user
          accounts, paid subscriptions, or account-based services.
        </p>

        <h2>2. Files you choose</h2>
        <p>
          File handling can differ between tools and formats. Some operations
          are performed in your browser, while a tool may rely on a separate
          processing component or service. Please read the instructions shown
          on the relevant tool page before selecting a file.
        </p>
        <p>
          We do not ask you to submit files for account storage or backup.
          Downloaded results are saved by you to your device. Do not use the
          website to process files that you are not authorized to use, and
          avoid selecting confidential or sensitive files unless you have
          checked how that particular tool processes them.
        </p>

        <h2>3. Information collected when you visit</h2>
        <p>
          Like most websites, our hosting and security infrastructure may
          process technical information needed to deliver pages and protect
          the service. Depending on the hosting configuration, this can include
          an IP address, browser and device details, requested page, referring
          page, and request time. Hosting and security providers may retain
          server logs according to their own settings and policies.
        </p>
        <p>
          We do not operate a user registration database and do not collect
          billing details for subscriptions.
        </p>

        <h2>4. Google measurement technologies</h2>
        <p>
          The website may use Google tags or related measurement technologies
          to understand website traffic and usage, depending on the current
          configuration. When enabled, these technologies may use cookies or
          similar identifiers and may send technical and usage information to
          Google. The information handled and the controls available depend on
          the Google products and settings in use.
        </p>
        <p>
          For details about Google's handling of information, review
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google's Privacy Policy
          </a>
          . You can manage cookies through your browser settings. Blocking
          cookies may affect some website features or measurement.
        </p>

        <h2>5. Advertising and ads.txt</h2>
        <p>
          EasyPixelShift is not currently displaying Google AdSense ads. The
          presence of an ads.txt file on this website is a publisher
          authorization and advertising-transparency measure; by itself, it
          does not display advertisements or set advertising cookies.
        </p>
        <p>
          If advertising is enabled in the future, this policy will be updated
          to describe the advertising providers and relevant data practices.
          Advertising providers may use cookies or similar technologies to
          deliver, measure, or personalize ads, subject to their settings and
          applicable requirements.
        </p>

        <h2>6. Cookies and similar technologies</h2>
        <p>
          EasyPixelShift does not require an account cookie to use its tools.
          Google tags, hosting, security, or other integrated services may use
          cookies or similar technologies when enabled. You can review and
          control cookies using your browser settings.
        </p>

        <h2>7. Third-party services and links</h2>
        <p>
          The website may rely on third-party infrastructure or link to
          external websites. Those providers and websites operate under their
          own privacy policies. We encourage you to review those policies
          before using their services.
        </p>

        <h2>8. Data retention and security</h2>
        <p>
          Technical logs and measurement data, where enabled, are retained by
          the relevant website or service provider according to its
          configuration and retention policy. We take reasonable steps to
          maintain the website, but no website or internet transmission can be
          guaranteed to be completely secure.
        </p>

        <h2>9. Children's privacy</h2>
        <p>
          EasyPixelShift is a general-purpose website and is not designed to
          collect personal information from children. Please contact us
          through the contact method published on the website if you believe a
          child has provided personal information to us.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this policy when the website, its tools, or its
          third-party services change. The latest version will be published on
          this page with its updated date.
        </p>
      </div>
    </main>
  );
}
