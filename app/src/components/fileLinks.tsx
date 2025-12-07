import { myDocumentLinks } from "../const";

export default function FileLinks() {
  return (
    <section className="mt-10 flex w-full flex-col ">
      <h2 className=" font-semibold text-xl leading-3 font-mono">
        Document converters
      </h2>
      <ul className="grid mt-10 lg:grid-cols-3 grid-cols-2 gap-5 justify-items-start">
        {myDocumentLinks.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.link}
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
