import { Metadata } from "next";
import "@/public/privacy.css";

export const metadata: Metadata = {
  title: "privacy, Easy pixel shift Image, File converter",
  description:
    "terms and conditions, Easy pixel shift Image, File converter privacy policy",
};

export default function Page() {
  return (
    <div className="content-area privacy-content">
      <div className="page-title text-center">
        <h1>Privacy policy and GDPR compliance</h1>
      </div>

      <div className="page-lead text-center">
        <p>
          Our user’s privacy is our top priority. Your security comes first in
          everything we do. It is only you who chooses how your data is
          collected, processed and used.
        </p>
      </div>

      <div className="content-centered text-content">
        <h2>Personal Information</h2>
        <p className="lead-text">
          The privacy of your data is very important to us which is why we do
          not collect or share with third parties your personal information.
        </p>
        <p>
          Browsing EasyPixelShift.com is free of charge. You don’t have to share
          any personal or sensitive information with us and you {"don't"} have
          to worry about the safeness of your privacy. We do journal some
          impersonalized data, like IP address, input and output file types,
          conversion duration, conversion success/error flag. This information
          is used for our internal performance monitoring, kept for a long time
          and not shared with third parties.
        </p>

        <h2>E-mail Addresses</h2>
        <p className="lead-text">
          You do not have to provide us your email address in order to use the
          EasyPixelShift service.
        </p>
        <p>
          You may use our service without disclosing your email address as long
          as you stay within free tier limits. If you hit the limit, you will be
          offered to complete a simple registration and order a premium service.
          We guarantee that your email address and any personal information will
          not be subject to sale or lease for personal or commercial purposes.
        </p>

        <h2>Certain Exceptional Disclosures</h2>
        <p className="lead-text">
          We can make the disclosure of your personal information only in cases
          stipulated by law or in a court order.
        </p>
        <p>
          Disclosure of your personal information can be done to protect our
          legal rights or if the information is a potential threat to the
          physical safety of any person.
        </p>

        <h2>User’s Files Handling and Keeping</h2>
        <p className="lead-text">
          We do not read, look into or copy your files. Every conversion is
          processing in your browser.
        </p>
        <p>
          We convert more than 10 million files (300 TB of data) every month. We
          didnot collect inputed files nor the result files.
        </p>
        <p>
          Your conversion done in Your browser so there is no backup nor
          uploading.
        </p>

        <h2>Security</h2>
        <p className="lead-text">
          Be believe that security is the most important thing which is why we
          take all the possible measures to protect your files and personal
          data.
        </p>
        <p>
          All communications between your host, our frontend server and
          conversion hosts are performed via secure channel with HSTS enabled,
          which prevents data to be altered or diverted. This completely
          protects your data from unauthorized access.
        </p>
        <p>
          All collected information on the website is protected from disclosure
          and unauthorized access by using physical, electronic and managerial
          protection procedures. We keep your files in the European Union.
        </p>

        <h2>Your Rights</h2>
        <p>
          Your output files are yours if you download it saved localy in your
          system when you reload the page it disapeared from your browser memory
          .
        </p>
        <p>
          You can delete your account easily on your own. This will delete your
          account and all associated data instantly.
        </p>

        <h2>Cookies, Analytics and Ads</h2>
        <p className="lead-text">
          We use Google Analytics in order to provide better user experience.
          Google AdSense collects only impersonalized data in order to customize
          advertising for you.
        </p>
        <p>
          EasyPixelShift.com does not use cookies and does not store
          information.
        </p>
        <p>
          We also use third party advertising networks and can’t rule out the
          possibility that some of these advertisers will use their own tracking
          technologies. By placing an ad, advertisers can gather information
          about your IP address, browser capabilities, and other impersonalized
          data in order to customize your ad usage experience, measure the
          effectiveness of advertising, etc. Google AdSense, which is our main
          advertising provider, uses cookies extensively and its tracking
          behavior is part of {"Google's"} own privacy policy. Other third party
          ad network providers can also use cookies under their own privacy
          policies.
        </p>
        <p>
          We use Google Analytics as our main analytics software, in order to
          get insights about how our visitors use our website and deliver better
          user experience for our users. Google Analytics gathers your personal
          data under their own
          <a href="https://EasyPixelShift.com/privacy/">privacy policy</a> which
          you should review carefully.
        </p>

        <h2>Links to Third-Party Websites</h2>
        <p className="lead-text">
          Usually we link to websites that are a part of our company’s network
          which is completely safe.
        </p>
        <p>
          While browsing EasyPixelShift.com, users can stumble upon links that
          will lead to third-party websites. Often these sites will be a part of
          our company’s network and you can be assured that your personal data
          is safe, but as a general precaution, remember to check the
          third-parties site’s own privacy policy.
        </p>

        <h2>General Data Protection Regulation (GDPR)</h2>
        <p className="lead-text">
          We are bound to the strict data protection law. We are committed to
          comply with the General Data Protection Regulation (GDPR).
        </p>
        <p>
          The GDPR is a regulation in EU law on data protection and privacy for
          all individuals across the EU and within the European Economic Area.
          It becomes enforceable on 25 May 2018.
        </p>
        <p>
          In the terms of the GDPR, EasyPixelShift acts as the data controller
          and data processor.
        </p>
        <p>
          EasyPixelShift acts as a data controller when it directly processes
          personal data providing services to end users. It means that
          EasyPixelShift acts as a data controller when you upload files, which
          may contain your personal data. If you exceed the free tier limit, you
          will be offered to order a premium service, in which case we also
          collect your email address for managing your account. This privacy
          policy explains in detail which data we collect and share. We do
          collect your IP address, access times, types of the files you convert
          and an average conversion error rate. We do not share this data with
          anyone.
        </p>

        <p>
          To the extent that we act as a data processor on your behalf in
          connection with our Services, we will enter into a separate
          <a href="https://EasyPixelShift.com/dpa/">
            {"Data Processing Agreement"}
          </a>
          with you.
        </p>
        <p>
          All your billing information is collected and processed by our payment
          provider , under its own
        </p>
        <p>
          EasyPixelShift does not extract or collect any data from your files,
          nor sharing or copying it. EasyPixelShift converts processing in your
          browser nothing uploaded to our server.
        </p>
      </div>
    </div>
  );
}
