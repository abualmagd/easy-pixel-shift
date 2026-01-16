import { FORMAT_DEFINITIONS, FormatKey } from "../constData";

export default function FormatDef({ from, to }: { from: string; to: string }) {
  const fromKey = from.toUpperCase() as FormatKey;
  const toKey = to.toUpperCase() as FormatKey;
  return (
    <section className=" w-full flex flex-col gap-10 mt-10">
      <div className=" shadow-2xl p-5 ">
        <h2 className=" font-bold text-3xl ">What is an {fromKey} file?</h2>
        <p className=" leading-7 text-[#555] dark:text-[#ffff]">
          It is a{" "}
          {FORMAT_DEFINITIONS[fromKey] ||
            "A digital file format used for data storage."}
        </p>
      </div>

      <div className=" shadow-2xl p-5 ">
        <h2 className=" font-bold text-3xl ">What is an {toKey} file?</h2>
        <p className=" leading-7 text-[#555] dark:text-[#ffff]">
          It is a{" "}
          {FORMAT_DEFINITIONS[toKey] ||
            "A digital file format used for data storage."}
        </p>
      </div>
    </section>
  );
}
