import { eventsList } from "../util/data";

const EventSection = () => {
  return (
    <section className="text-white py-4 text-sm space-y-5">
      <h1 className="text-center text-balance text-4xl">Event's</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        {eventsList.map((event, i) => (
          <li
            key={i}
            className="px-3 py-5 rounded-lg space-y-3 shadow gap-3 border-orange-500 border-2 bg-gray-800/80 drop-shadow-lg"
          >
            <img
              src={event.imgUrl}
              alt={event.title}
              className="w-full aspect-4/3 rounded-xl"
            />
            <h1 className="text-2xl font-normal text-white">{event.title}</h1>
            <p className="text-sm text-gray-200 font-light">
              {event.description}
            </p>
            <ul className="list-disc pl-10">
              {event.topic.map((data, i) => (
                <li
                  key={i}
                  className="text-gray-300/80 text-sm font-extralight"
                >
                  {data}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <a
                href="https://docs.google.com/forms/d/1CXbdCbWANm3TK0Kz7j2JLez7mJwdBD1FCaExqy8fosI/edit?pli=1"
                className="block mr-auto w-full"
                target="_blank"
              >
                <span className="px-4 py-2 rounded-sm w-full bg-orange-400">
                  Register Now
                </span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventSection;
