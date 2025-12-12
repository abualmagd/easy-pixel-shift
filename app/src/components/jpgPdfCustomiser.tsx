import { ChangeEvent } from "react";
import { BsGear } from "react-icons/bs";

export default function JpgPdfCustomiser({
  handle,
}: {
  handle: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className=" w-full flex flex-col gap-5 my-10 dark:text-gray-400">
      <h2 className=" flex gap-5 mb-2 justify-start items-center font-semibold text-xl">
        <BsGear />
        Page Options:
      </h2>
      <ul className=" flex flex-col gap-10">
        <li className=" flex lg:flex-row flex-col gap-4">
          <span className=" font-semibold w-40">PDF Page Size</span>
          <select
            defaultValue={"a4"}
            onChange={handle}
            id="formatid"
            name="format"
            className="block lg:w-64 w-full px-3 py-2 rounded  border border-rounded text-heading text-sm focus:ring-brand  focus:rounded shadow-xs placeholder:text-body"
          >
            <option value="a4">A4</option>
            <option value="a3">A3</option>
            <option value="a5">A5</option>
            <option value="letter">Letter</option>
            <option value="legal">Legal</option>
          </select>
        </li>
        <li className=" flex lg:flex-row flex-col gap-4">
          <span className=" font-semibold w-40">Orientation</span>
          <select
            defaultValue={"a4"}
            onChange={handle}
            id="Orientation"
            name="orientation"
            className="block lg:w-64 w-full px-3 py-2 rounded  border border-rounded text-heading text-sm focus:ring-brand  focus:rounded shadow-xs placeholder:text-body"
          >
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </li>

        <li className=" flex lg:flex-row flex-col gap-4">
          <span className=" font-semibold w-40">Scale</span>
          <select
            defaultValue={"a4"}
            onChange={handle}
            id="scale"
            name="scale"
            className="block lg:w-64 w-full px-3 py-2 rounded  border border-rounded text-heading text-sm focus:ring-brand  focus:rounded shadow-xs placeholder:text-body"
          >
            <option value="fit">Fit</option>
            <option value="fill">Fill</option>
            <option value="original">Original</option>
          </select>
        </li>

        <li className=" flex lg:flex-row flex-col gap-4">
          <span className=" font-semibold w-40">Margin</span>
          <select
            defaultValue={"a4"}
            onChange={handle}
            id="margin"
            name="margin"
            className="block lg:w-64 w-full px-3 py-2 rounded  border border-rounded text-heading text-sm focus:ring-brand  focus:rounded shadow-xs placeholder:text-body"
          >
            <option value="none">None</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </li>
      </ul>
    </div>
  );
}
