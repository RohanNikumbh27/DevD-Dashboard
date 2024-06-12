"use client";
import React, { useState } from "react";
import LineChart from "./LineChart";

interface Child {
  // Define the structure of the child objects inside items
  id: string;
  value: number;
  // Add other properties if needed
}

interface Item {
  children: Child[];
}

interface DayWiseActivity {
  date: string;
  items: Item;
}

interface DayWiseProps {
  dayWiseActivity: DayWiseActivity[];
}

const DayWise: React.FC<DayWiseProps> = ({ dayWiseActivity }) => {
  const [dateToggle, setDateToggle] = useState<boolean>(false);
  const [chartToggle, setChartToggle] = useState<boolean>(false);
  const [chartDate, setChartDate] = useState<string>("");
  const [chartType, setChartType] = useState<string>("Line");
  const chartTypes = ["Line", "Doughnut", "Bar"];

  const [dataOfTheDay, setDataOfTheDay] = useState<any>([]);
  // console.log("dayWiseActivity", tempDayAr[0].items.children);

  const hanldeToggle1 = () => {
    setDateToggle((t) => !t);
  };
  const hanldeToggle2 = () => {
    setChartToggle((t) => !t);
  };

  const filterActivityToArray = (thisDate: string) => {
    const selectedDay = dayWiseActivity.find((obj) => obj.date === thisDate);
    if (selectedDay) {
      setDataOfTheDay(selectedDay.items.children);
      setChartDate(thisDate);
    }
    hanldeToggle1();
  };

  const handleChartTypeChange = (type: string) => {
    setChartType(type);
    hanldeToggle2();
  };
  return (
    <div className=" bg-[#ffffffd8] rounded-3xl p-5 min-h-96 flex flex-col">
      <div className="flex gap-5 justify-evenly">
        {/* DropDown1 */}
        <div>
          <button
            id="dropdownDefaultButton1"
            data-dropdown-toggle="dropdown1"
            onClick={hanldeToggle1}
            className="text-white bg-slate-950 active:bg-slate-800 transition-all focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Select Date
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown1"
            className={`z-10 divide-y divide-gray-900 rounded-lg shadow w-32 bg-slate-950 mt-1 h-36   overflow-scroll absolute  ${
              dateToggle ? "hidden" : "block"
            }`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200 "
              aria-labelledby="dropdownDefaultButton1"
            >
              {dayWiseActivity.map((OneDayActivity) => (
                <li
                  key={OneDayActivity.date}
                  onClick={() => filterActivityToArray(OneDayActivity.date)}
                  className="block px-4 py-2 bg-slate-950 text-white hover:bg-black active:bg-slate-900 cursor-pointer active:text-white rounded-md"
                >
                  {OneDayActivity.date}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DropDown2 */}
        <div>
          <button
            id="dropdownDefaultButton2"
            data-dropdown-toggle="dropdown2"
            onClick={hanldeToggle2}
            className="text-white bg-slate-950 active:bg-slate-800 transition-all focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Select Chart Type
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown2"
            className={`z-10 divide-x divide-gray-900 rounded-lg shadow w-36 bg-slate-950 mt-1 max-h-40 overflow-scroll absolute  ${
              chartToggle ? "hidden" : "block"
            }`}
          >
            <ul
              className="py-2 text-sm text-gray-200 "
              aria-labelledby="dropdownDefaultButton2"
            >
              {chartTypes.map((oneChart) => (
                <li
                  key={oneChart}
                  onClick={() => handleChartTypeChange(oneChart)}
                  className="block px-4 py-2 bg-slate-950 text-white hover:bg-black active:bg-slate-900 cursor-pointer active:text-white rounded-md"
                >
                  {oneChart} Chart
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <br />
      <LineChart
        dataOfTheDay={dataOfTheDay}
        chartDate={chartDate}
        chartType={chartType}
      />
    </div>
  );
};

export default DayWise;
