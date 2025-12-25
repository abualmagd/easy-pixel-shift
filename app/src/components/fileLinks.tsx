import { myDocumentLinks, specialConverters } from "../const";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FileLinks({ dic }: { dic?: any }) {
  return (
    <section className="mt-10 flex w-full flex-col ">
      <h2 className=" font-semibold text-xl leading-3 font-mono">
        {dic ? dic.links.documentConverters : "Document converters"}
      </h2>
      <ul className="grid mt-10 lg:grid-cols-3 grid-cols-2 gap-5 justify-items-start">
        {myDocumentLinks.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={"/convert" + item.link}
                className=" text-blue-500 font-semibold font-sans"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="h-20"></div>
      <h2 className=" font-semibold text-xl leading-3 font-mono">
        {dic ? dic.links.specialConverters : "Special converters"}
      </h2>
      <ul className="grid mt-10 lg:grid-cols-3 grid-cols-2 gap-5 justify-items-start">
        {specialConverters.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={"/converters/" + item.link}
                className=" text-blue-500 font-semibold font-sans"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
