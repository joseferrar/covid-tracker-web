import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { All_Cases } from "../../actions";
import { Spinner } from "../../util/Spinner";
function Home() {
  const { loading, data } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(All_Cases());
  }, [dispatch]);

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
      {loading ? Spinner() : null}
      <Line data={chart} />
    </div>
  );
}

export default Home;
