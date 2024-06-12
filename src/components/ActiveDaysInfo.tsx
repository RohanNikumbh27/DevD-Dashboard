import React from "react";

interface activeDaysData {
  days: number;
  isBurnOut: boolean;
  insight: string[];
}

interface ActiveDaysInfoProps {
  activeDaysData: activeDaysData;
}

const ActiveDaysInfo: React.FC<any> = ({ activeDays }) => {
  return (
    <div className="p-1 pt-4 bg-[#ffffff81] text-black rounded-3xl m-3 border-4 border-slate-200 ">
      <h2 className="text-xl font-bold mb-4 ml-2">Active Days Information</h2>
      <table className="border-separate border-spacing-1 transition-all">
        <thead>
          <tr className="m-2">
            <th className="px-2 py-2 rounded-xl bg-black text-white">
              Number of Active Days
            </th>
            <th className="px-2 py-2 rounded-xl bg-black text-white">
              Burnout Status
            </th>
            <th className="px-2 py-2 rounded-xl bg-black text-white">
              Insight
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border bg-white hover:bg-zinc-100 text-[#292929] px-4 py-2 rounded-xl">
              {activeDays.days}
            </td>
            <td className="border bg-white hover:bg-zinc-100 text-[#292929] px-4 py-2 rounded-xl">
              {activeDays.isBurnOut ? "Yes" : "No"}
            </td>
            <td className="border font-mono bg-white hover:bg-zinc-100 text-[#292929] px-4 py-2 rounded-xl">
              No insights yet
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActiveDaysInfo;
