import React from "react";
import { Chart, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
defaults.elements.bar.borderWidth = 2;
defaults.maintainAspectRatio = false;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = { size: 20 };
defaults.plugins.title.color = "black";
const totalActivityChart:React.FC<any> = ({ activityArray, activityMeta }) => {
  return (
    <Bar
      data={{
        labels: activityArray.map((obj: any) => obj.name),
        datasets: [
          {
            label: "Total Activity",
            data: activityArray.map((obj: any) => obj.value),
            backgroundColor: activityMeta.map((obj: any) => obj.fillColor),
            borderRadius: 10,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Total Activity ",
          },
        },
      }}
    />
  );
};

export default totalActivityChart;
