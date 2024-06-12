"use client";
import React, { useState, useEffect } from "react";
import data from "@/data/sample-data.json";
import TotalActivityChart from "@/components/TotalActivityChart";

import { Chart, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import ActiveDaysInfo from "@/components/ActiveDaysInfo";
import DayWise from "@/components/DayWise";
defaults.elements.bar.borderWidth = 2;
defaults.maintainAspectRatio = false;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = { size: 20 };
defaults.plugins.title.color = "black";

const Author = ({ params: { author } }: { params: { author: string } }) => {
  const [authorInfo, setAuthorInfo] = useState<any>({});
  const [activityArray, setActivityArray] = useState<any>([]);
  const [activeDays, setActiveDays] = useState<any>({});
  const [dayWiseActivity, setDayWiseActivity] = useState<any>([]);
  const UserArray = data.data.AuthorWorklog.rows;
  const activityMeta = data.data.AuthorWorklog.activityMeta;

  useEffect(() => {
    findAuthor();
  }, [UserArray]);

  const findAuthor = () => {
    const decodedAuthor = decodeURIComponent(author);
    const matchedAuthor = UserArray.filter(
      (oneAuthor: any) => oneAuthor["name"] === decodedAuthor
    );
    setAuthorInfo(matchedAuthor[0]);
    setActivityArray(matchedAuthor[0].totalActivity);
    setActiveDays(matchedAuthor[0].activeDays);
    setDayWiseActivity(matchedAuthor[0].dayWiseActivity);
  };

  // console.log("Daywise: ", dayWiseActivity);

  return (
    <div className="flex justify-center flex-col items-center">
      {/* <h1 className="text-2xl p-4 w-full text-white font-bold"> */}
      <h1 className="text-2xl bg-gradient-to-r from-indigo-600 to-black text-transparent bg-clip-text font-bold m-2 inline-block">
        <center className=" w-full p-4 rounded-xl">
          {authorInfo ? authorInfo.name : "Loading..."}
        </center>
      </h1>
      <div>
        <ActiveDaysInfo activeDays={activeDays} />
      </div>

      <div className=" sm:p-2 md:p-20 p-3 pt-4 md:pt-4 w-full">
        <div className=" bg-[#ffffffd8] rounded-3xl p-5 h-96 md:h-svh">
          <TotalActivityChart
            activityArray={activityArray}
            activityMeta={activityMeta}
          />
        </div>
      </div>

      <div className="sm:p-2  md:p-20 pt-0 md:pt-0 p-3 w-full">
        <DayWise dayWiseActivity={dayWiseActivity} />
      </div>
    </div>
  );
};

export default Author;
