/* eslint-disable @next/next/no-img-element */
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { myDocumentLinks, myImageLinks } from "../const";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MyFooter({ dic }: { dic?: any }) {
  return (
    <Footer
      container
      className="my-footer bg-blend-saturation dark:rounded-none bg-[#1e2e47] flex flex-col "
    >
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <FooterTitle
            title={dic ? dic.links.ourTools : "Our Tools"}
            className="text-white"
          />
          <FooterLinkGroup col className="text-white">
            <FooterLink href="https://speaksnaps.com/">
              {dic ? dic.links.aiTextToSpeech : "Ai text to speach"}
            </FooterLink>
            <FooterLink href="https://doincornwall.com/">
              {dic ? dic.links.visitCornwall : "visit cornwall"}
            </FooterLink>
            <FooterLink href="https://codefray.com/">
              {dic ? dic.links.learnCoding : "learn coding"}
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle
            title={dic ? dic.links.imageConverters : "Image converter"}
            className="text-white"
          />
          <FooterLinkGroup col className="text-white">
            {myImageLinks.map((item, i) => {
              if (i > 5) {
                return null;
              } else {
                return (
                  <FooterLink key={i} href={"/image" + item.link}>
                    {item.name}
                  </FooterLink>
                );
              }
            })}
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle
            title={dic ? dic.links.documentConverters : "Document Converters"}
            className="text-white"
          />
          <FooterLinkGroup col className="text-white">
            {myDocumentLinks.map((item, i) => {
              if (i > 5) {
                return null;
              } else {
                return (
                  <FooterLink key={i} href={"/convert/" + item.link}>
                    {item.name}
                  </FooterLink>
                );
              }
            })}
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle
            title={dic ? dic.links.multiConverters : "Multi Converters"}
            className="text-white"
          />
          <FooterLinkGroup col className="text-white">
            <FooterLink href="/converters/image-converter">
              {dic ? dic.links.imageConverter : "Image converter"}
            </FooterLink>
            <FooterLink href="/converters/file-converter">
              {dic ? dic.links.fileConverter : "File converter"}
            </FooterLink>
            <FooterLink href="/converters/video-converter">
              {dic ? dic.links.videoConverter : "Video converter"}
            </FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
      <FooterDivider />

      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div>
            {/*<span className="self-center text-transparent bg-clip-text bg-linear-to-bl from-fuchsia-600 to-amber-500  text-xl font-semibold whitespace-nowrap text-heading">
              Easy Pixel Shift
            </span>{" "}*/}
            <Link href="/" className=" flex">
              <img
                alt="easy pixel logo"
                src="/eps-logo.png"
                className="-mr-2  h-10 sm:h-12 md:h-14"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Easy Pixel Shift
              </span>
            </Link>
          </div>
          <FooterLinkGroup className="text-white">
            <FooterLink
              href={dic ? dic.lang + "/about" : "/about"}
              target="_blank"
            >
              {dic ? dic.links.about : "About"}
            </FooterLink>
            <FooterLink href="/privacy" target="_blank">
              {dic ? dic.links.privacy : "Privacy Policy"}
            </FooterLink>
            <FooterLink href="/terms" target="_blank">
              {dic ? dic.links.terms : "Terms"}
            </FooterLink>
            <FooterLink href="https://wa.me/201508328238" target="_blank">
              {dic ? dic.links.contact : "Contact"}
            </FooterLink>
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
