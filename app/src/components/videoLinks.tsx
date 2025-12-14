import { allMediaConversions } from "../const";

export default function VideoLinks() {
  return (
    <section className="mt-10 flex w-full flex-col ">
      <h2 className=" font-semibold text-xl leading-3 font-mono">
        Video converters
      </h2>
      <ul className="grid mt-10 lg:grid-cols-3 grid-cols-2 gap-5 justify-items-start">
        {allMediaConversions.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={"/media" + item.link}
                className=" text-blue-500 font-semibold font-sans"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="h-20"></div>
    </section>
  );
}
