/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { title } from "../src/const";

export const metadata = {
  title: "Who is Easy Pixel Shift",
  description:
    "Convert images easily between popular formats like PNG, JPG, WEBP, and more, all online and for free. Fast, secure, and high-quality image file conversion.",
  alternates: {
    canonical: "/about",
  },
};

export default function WhoUs() {
  return (
    <div className="flex  min-h-screen lg:mx-8 px-6 xl:mx-32 flex-col items-center ">
      <div className="flex flex-col w-full h-screen  items-center text-xl mt-24">
        <h2 className=" font-semibold">{title} </h2>
        <p className=" text-sm m-2 text-center max-w-96 font-mono mx-auto">
          Convert images easily between popular formats like PNG, JPG, WEBP, and
          more, all online and for free. Fast, secure, and high-quality image
          file conversion.,
        </p>
        <p className=" font-semibold font-mono">build by</p>
        <h3 className=" flex flex-row">
          <div className="w-14 h-14 mx-2  mt-1 rounded-full overflow-hidden border-4 border-transparent hover:border-gray-200 transition-colors duration-150">
            <img
              src="/ismail.jpeg"
              alt="Avatar"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
          <div className=" text-royalblue cursor-pointer mt-4  font-semibold">
            Ismail Abu Almagd{" "}
          </div>
        </h3>
        <p className=" text-center mt-4 w-96">
          A fullstack software developer who found his passion in building
          successful SaaS and help others.
        </p>
        <div className=" flex flex-row mt-4">
          <Link
            href={"https://twitter.com/SaasBoy00"}
            target="_blank"
            rel="me noopener"
            className=" mr-3 p-2 flex justify-center hover:bg-slate-100 rounded-full bg-transparent transition-colors duration-150"
          >
            <svg
              className="h-5 w-5 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.643 13.346L4.26862 4.86856C3.85863 4.32329 4.2478 3.54408 4.93001 3.54431L7.2184 3.54508C7.47633 3.54517 7.71945 3.66557 7.87585 3.87066L12.9065 10.4675M10.643 13.346L5.19311 20.5093M10.643 13.346L15.8028 20.077C15.9588 20.2805 16.2003 20.4001 16.4567 20.4009L18.7925 20.4082C19.4778 20.4104 19.8683 19.6261 19.4536 19.0805L12.9065 10.4675M12.9065 10.4675L18.2181 3.50928"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </Link>

          <Link
            href={"https://www.linkedin.com/in/ismail-abu-almgd-60096111b/"}
            target="_blank"
            rel="me noopener"
            className=" mr-3 p-2 flex justify-center hover:bg-slate-100 rounded-full bg-transparent transition-colors duration-150"
          >
            <svg className="h-5 w-5 fillCurrent" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </Link>
          <Link
            href={"https://codenuggets.hashnode.dev/"}
            target="_blank"
            rel="me noopener"
            className=" mr-3 p-2 flex justify-center hover:bg-slate-100 rounded-full bg-transparent transition-colors duration-150"
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.742 66.824c-18.323 18.323-18.323 48.029 0 66.352l53.082 53.082c18.323 18.323 48.029 18.323 66.352 0l53.082-53.082c18.323-18.323 18.323-48.03 0-66.352l-53.082-53.082c-18.323-18.323-48.03-18.323-66.352 0L13.742 66.824zm109.481 56.399c12.826-12.826 12.826-33.62 0-46.446s-33.62-12.826-46.446 0-12.826 33.62 0 46.446 33.62 12.826 46.446 0z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
