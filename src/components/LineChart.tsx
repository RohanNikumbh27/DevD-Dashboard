"use client";

import React from "react";
import { Chart, defaults } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

defaults.elements.bar.borderWidth = 2;
defaults.maintainAspectRatio = false;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = { size: 20 };
defaults.plugins.title.color = "black";

const LineChart: React.FC<{
  dataOfTheDay: any[];
  chartDate: string;
  chartType: string;
}> = ({ dataOfTheDay, chartDate, chartType }) => {
  const ChartComponent = { Bar, Doughnut, Line }[chartType];

  return (
    <div className="p-2 w-full text-black ">
      <div className="min-h-96 text-white ">
        {chartDate ? (
          <ChartComponent
            className="h-96"
            data={{
              labels: dataOfTheDay.map((obj: any) => obj.label),
              datasets: [
                {
                  label: `Date: ${chartDate}`,
                  data: dataOfTheDay.map((obj: any) => obj.count),
                  backgroundColor: dataOfTheDay.map(
                    (obj: any) => obj.fillColor
                  ),
                  borderRadius: 10,
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.4,
                },
              },
              plugins: {
                title: {
                  text: `Data of the date: ${chartDate}`,
                },
              },
            }}
          />
        ) : (
          <div className="flex flex-col justify-center my-auto min-h-80 items-center">
            <h1 className="text-black font-bold text-2xl">
              Please Select a Date
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default LineChart;
