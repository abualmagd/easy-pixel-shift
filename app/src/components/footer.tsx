import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

export default function MyFooter() {
  return (
    <Footer
      container
      className="my-footer bg-blend-saturation bg-[#1e2e47] flex flex-col "
    >
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <FooterTitle title="Company" />
          <FooterLinkGroup col>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Brand Center</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title="help center" />
          <FooterLinkGroup col>
            <FooterLink href="#">Discord Server</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title="legal" />
          <FooterLinkGroup col>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Terms &amp; Conditions</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title="download" />
          <FooterLinkGroup col>
            <FooterLink href="#">iOS</FooterLink>
            <FooterLink href="#">Android</FooterLink>
            <FooterLink href="#">Windows</FooterLink>
            <FooterLink href="#">MacOS</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
      <FooterDivider />

      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div>
            <span className="self-center text-transparent bg-clip-text bg-linear-to-bl from-fuchsia-600 to-amber-500  text-xl font-semibold whitespace-nowrap text-heading">
              Easy Pixel Shift
            </span>{" "}
          </div>
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterCopyright
          href="/"
          by="EasyPixelShift"
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
}
