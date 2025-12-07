import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { myDocumentLinks, myImageLinks } from "../const";

export default function MyFooter() {
  return (
    <Footer
      container
      className="my-footer bg-blend-saturation bg-[#1e2e47] flex flex-col "
    >
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <FooterTitle title="Our Tools" className="text-white" />
          <FooterLinkGroup col className="text-white">
            <FooterLink href="https://speaksnaps.com/">
              Ai text to speach
            </FooterLink>
            <FooterLink href="https://doincornwall.com/">
              visit cornwall
            </FooterLink>
            <FooterLink href="https://codefray.com/">learn coding</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title="Image converter" className="text-white" />
          <FooterLinkGroup col className="text-white">
            {myImageLinks.map((item, i) => {
              if (i > 5) {
                return null;
              } else {
                return (
                  <FooterLink key={i} href={item.link}>
                    {item.name}
                  </FooterLink>
                );
              }
            })}
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title="Document Converters" className="text-white" />
          <FooterLinkGroup col className="text-white">
            {myDocumentLinks.map((item, i) => {
              if (i > 5) {
                return null;
              } else {
                return (
                  <FooterLink key={i} href={item.link}>
                    {item.name}
                  </FooterLink>
                );
              }
            })}
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title="Multi Converters" className="text-white" />
          <FooterLinkGroup col className="text-white">
            <FooterLink href="/image-converter">Image converter</FooterLink>
            <FooterLink href="/">File converter </FooterLink>
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
          <FooterLinkGroup className="text-white">
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
