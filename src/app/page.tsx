import Link from "next/link";
import data from "@/data/sample-data.json";

import TotalActivityChart from "@/components/TotalActivityChart";

export default function Home() {
  const authors = data.data.AuthorWorklog.rows;
  const activityMeta = data.data.AuthorWorklog.activityMeta;

  return (
    <div className="flex items-center justify-center bg-gray-200 w-full">
      <center>
        <Link href={"/authors"}>
          <button className="bg-zinc-800 text-white font-semibold px-10 py-3 rounded-xl ">
            View Authors List
          </button>
        </Link>
      </center>
    </div>
  );
}
