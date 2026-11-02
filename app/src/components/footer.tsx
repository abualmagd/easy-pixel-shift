/* eslint-disable @next/next/no-img-element */
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MyFooter({ dic }: { dic?: any }) {
  return (
    <Footer
      container
      className="my-footer bg-blend-saturation dark:rounded-none bg-[#1e2e47] flex flex-col"
    >
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <FooterTitle title={dic ? dic.links.ourTools : "Our tools"} className="text-white" />
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
            <FooterLink href="/converters/gif-maker">GIF maker</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title={dic ? dic.links.imageConverters : "Image converters"} className="text-white" />
          <FooterLinkGroup col className="text-white">
            <FooterLink href="/image/jpg-to-png">JPG to PNG</FooterLink>
            <FooterLink href="/image/png-to-webp">PNG to WebP</FooterLink>
            <FooterLink href="/image/webp-to-png">WebP to PNG</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title={dic ? dic.links.documentConverters : "Document converters"} className="text-white" />
          <FooterLinkGroup col className="text-white">
            <FooterLink href="/convert/pdf-to-docx">PDF to DOCX</FooterLink>
            <FooterLink href="/convert/docx-to-pdf">DOCX to PDF</FooterLink>
            <FooterLink href="/convert/html-to-pdf">HTML to PDF</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title={dic ? dic.links.multiConverters : "About Easy Pixel Shift"} className="text-white" />
          <FooterLinkGroup col className="text-white">
            <FooterLink href={dic ? `/${dic.lang}/about` : "/about"}>
              {dic ? dic.links.about : "About"}
            </FooterLink>
            <FooterLink href="/privacy">{dic ? dic.links.privacy : "Privacy policy"}</FooterLink>
            <FooterLink href="/terms">{dic ? dic.links.terms : "Terms"}</FooterLink>
            <FooterLink href="https://wa.me/201508328238" target="_blank" rel="noopener noreferrer">
              {dic ? dic.links.contact : "Contact"}
            </FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
      <FooterDivider />
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex">
            <img
              alt="Easy Pixel Shift logo"
              src="/eps-logo.png"
              className="-mr-2 h-10 sm:h-12 md:h-14"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Easy Pixel Shift
            </span>
          </Link>
          <FooterLinkGroup className="text-white">
            <FooterLink href={dic ? `/${dic.lang}/about` : "/about"} target="_blank">
              {dic ? dic.links.about : "About"}
            </FooterLink>
            <FooterLink href="/privacy" target="_blank">
              {dic ? dic.links.privacy : "Privacy policy"}
            </FooterLink>
            <FooterLink href="/terms" target="_blank">
              {dic ? dic.links.terms : "Terms"}
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterCopyright href="/" by="EasyPixelShift" year={new Date().getFullYear()} />
      </div>
    </Footer>
  );
}
