import useDataStore from "../store/dataStore";
import { format } from "date-fns";

const CountCard = () => {
  const { isLoading, count } = useDataStore();
  console.log(count.count);

  if (isLoading) {
    return <p>Is Loading</p>;
  }
  return (
    <div className="py-10">
      <div className="p-6 rounded border border-orange-400 bg-gray-800/30 w-fit ">
        {count?.count.count}
      </div>
      <ul className="max-h-[60vh] w-full md:w-[60vw] border overflow-y-auto overflow-x-hidden py-2 px-3 mt-4 rounded-2xl  border-amber-400">
        {count?.count.RecentVist.slice()
          .reverse()
          .map((vist, i) => (
            <li key={vist._id} className="grid grid-cols-5 border-b">
              <p className="text-center">{count?.count.count - i}</p>
              <p className="text-center">{`${format(vist.date, "dd-MM-yy hh:mm a")}`}</p>
              <p className="text-center">{vist.record?.browser?.split(";")[0]}</p>
              <p className="text-center">{vist.record?.platform}</p>
              <p className="text-center">{vist.record?.location}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CountCard;
