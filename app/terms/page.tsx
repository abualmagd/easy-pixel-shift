import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | EasyPixelShift",
  description:
    "Read the terms that apply when using EasyPixelShift online file conversion and utility tools.",
};

export default function TermsPage() {
  return (
    <main className="content-area">
      <div className="page-title text-center">
        <h1>Terms of Use</h1>
      </div>

      <div className="page-lead text-center">
        <p>Last updated: November 2, 2026</p>
      </div>

      <div className="content-centered text-content">
        <h2>1. Using EasyPixelShift</h2>
        <p>
          EasyPixelShift provides online tools for working with image,
          document, audio, and video files. By accessing or using the website,
          you agree to these Terms. If you do not agree, please do not use the
          website.
        </p>

        <h2>2. No account or paid subscription</h2>
        <p>
          The website currently allows visitors to use its available tools
          without creating an account. EasyPixelShift does not currently offer
          paid subscriptions, premium plans, or account-based billing through
          this website. Any future changes to these services will be reflected
          in an updated version of these Terms.
        </p>

        <h2>3. Your files and responsibility</h2>
        <p>
          You retain your rights to files that you select and process. You are
          responsible for ensuring that you own the files or have permission
          to use, modify, and convert them. You must not use the tools to
          infringe copyright, privacy, or other legal rights.
        </p>
        <p>
          File processing methods can vary by tool. Review the instructions on
          the relevant tool page before selecting a file. You are responsible
          for keeping copies of your original files and checking the converted
          result before relying on it. Do not assume that every conversion
          preserves all formatting, metadata, quality, or features.
        </p>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website for an unlawful purpose or to violate another person's rights.</li>
          <li>Attempt to disrupt, damage, overload, or gain unauthorized access to the website or its infrastructure.</li>
          <li>Upload, process, or distribute malicious code or files intended to harm another person or system.</li>
          <li>Use automated methods to access the website in a way that places an unreasonable burden on the service.</li>
          <li>Interfere with security measures or attempt to bypass technical restrictions.</li>
        </ul>

        <h2>5. Availability and conversion results</h2>
        <p>
          We work to keep the website and its tools available, but we do not
          guarantee uninterrupted access or that every file, codec, format,
          browser, or device will be supported. Conversion results depend on
          factors such as the source file, selected formats, browser, device
          resources, and the capabilities of the relevant tool.
        </p>
        <p>
          You should review the output and confirm that it meets your needs
          before using it for professional, commercial, archival, or other
          important purposes.
        </p>

        <h2>6. Intellectual property</h2>
        <p>
          Website branding, original text, design, and software are protected
          by applicable intellectual property laws. These Terms do not transfer
          ownership of the website or its materials to you. You may use the
          tools for their intended purpose, but you must not copy, republish,
          or commercially exploit website materials without permission, except
          where the law allows.
        </p>

        <h2>7. Third-party services</h2>
        <p>
          Some website features may depend on third-party services or
          technologies. Their availability and use are subject to the relevant
          provider's terms and policies. EasyPixelShift is not responsible for
          third-party websites or services that it does not operate.
        </p>

        <h2>8. Disclaimer</h2>
        <p>
          The website and its tools are provided on an "as available" basis.
          To the extent permitted by applicable law, we make no guarantee that
          the service will be error-free, uninterrupted, or suitable for every
          particular purpose. Nothing in these Terms excludes rights or
          remedies that cannot lawfully be excluded.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          To the extent permitted by applicable law, EasyPixelShift will not
          be responsible for indirect or consequential loss arising from use
          of, or inability to use, the website. This does not limit liability
          where such limitation is prohibited by law, including liability that
          cannot legally be excluded.
        </p>

        <h2>10. Changes to the website or these Terms</h2>
        <p>
          We may modify, suspend, or discontinue parts of the website and may
          update these Terms as the service changes. The current version will
          be published on this page. Continued use of the website after an
          update means you acknowledge the revised Terms, to the extent
          permitted by applicable law.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These Terms are intended to be interpreted under applicable law.
          Mandatory consumer protection and other rights that apply in your
          place of residence are not excluded by this section.
        </p>

        <h2>12. Contact</h2>
        <p>
          If you have a question about these Terms, use the contact method
          published on the EasyPixelShift website.
        </p>
      </div>
    </main>
  );
}
