import React from "react";
import { Chart, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
defaults.elements.bar.borderWidth = 2;
defaults.maintainAspectRatio = false;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = { size: 20 };
defaults.plugins.title.color = "black";
const TwoCharts: React.FC = ({ activityArray, activityMeta }) => {
  return (
    <div className="p-2 gap-2 grid grid-cols-1 w-full text-black">
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 ">
        <div className=" bg-[#ffffffd8] rounded-3xl p-5 h-96 md:h-svh">
          <Doughnut
            data={{
              labels: activityArray.map((obj: any) => obj.name),
              datasets: [
                {
                  label: "Total Activity",
                  data: activityArray.map((obj: any) => obj.value),
                  backgroundColor: activityMeta.map((obj) => obj.fillColor),
                  borderRadius: 10,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "this is ",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TwoCharts;
