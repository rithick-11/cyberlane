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
      <ul className="max-h-[60vh] w-full md:w-[60vw] border overflow-auto py-2 px-3 mt-4 rounded-2xl  border-amber-400">
        {count?.count.RecentVist.slice()
          .reverse()
          .map((vist) => (
            <li key={vist._id} className="grid grid-cols-4">
              <p>{`${format(vist.date, "dd-MMM-yy hh:mm a")}`}</p>
              <p>{vist.record?.browser?.split(";")[0]}</p>
              <p>{vist.record?.platform}</p>
              <p>{vist.record?.location}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CountCard;
