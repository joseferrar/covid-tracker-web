import React from "react";
import { Line } from "react-chartjs-2";

function CountryChart(props) {
  const { data } = props;

  const chart = {
    labels: ["Active", "Cases", "tests", "population", "deaths"],
    datasets: [
      {
        label: "Covid",
        data: [
          data?.active,
          data?.cases,
          data?.tests,
          data?.population,
          data?.deaths,
        ],
        backgroundColor: [
          "#8D3DAF",
          "#EDC126",
          "#383CC1",
          "#E03B8B",
          "#8D3DAF",
        ],
        fill: true,
        fontColor: "#fff",
        borderColor: "#000",
        pointBackgroundColor: "red",
        pointBorderColor: "red",
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={chart} height={100}/>
    </div>
  );
}

export default CountryChart;
