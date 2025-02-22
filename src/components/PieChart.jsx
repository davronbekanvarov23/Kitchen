import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function PieChart({ datas }) {
  const [data, setData] = useState({
    series: [],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    if (datas) {
      const uzbekFiltered = datas.filter(
        (meal) => meal.category === "Uzbek"
      ).length;

      const turkeyFiltered = datas.filter(
        (meal) => meal.category === "Turkey"
      ).length;
      const euroFiltered = datas.filter(
        (meal) => meal.category === "Euro"
      ).length;
      const fastFootFiltered = datas.filter(
        (meal) => meal.category === "Fast Food"
      ).length;
      const otherFiltered = datas.filter(
        (meal) => meal.category === "Others"
      ).length;
      const numbers = [
        uzbekFiltered,
        turkeyFiltered,
        euroFiltered,
        fastFootFiltered,
        otherFiltered,
      ];
      const names = ["Uzbek", "Turkey", "Euro", "Fast Food ", "Others "];
      setData({
        series: numbers,
        options: {
          ...data.options,
          labels: names,
          legend: {
            labels: {
              colors: [
                "base-100",
                "base-100",
                "base-100",
                "base-100",
                "base-100",
              ],
            },
          },
        },
      });
    }
  }, [datas]);
  return (
    <div className=" mt-10 max-w-5xl w-full ml-auto mr-auto ">
   

      <h1 className=" font-bold text-2xl">National Types:</h1>
      <div id="chart">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="pie"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default PieChart;
