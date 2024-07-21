import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function BarChart({ datas }) {
  const [data, setData] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
    },
  });

  useEffect(() => {
    if (datas) {
      const prices = datas
        .sort((a, b) => b.price - a.price)
        .slice(0, 10)
        .map((meal) => {
          return meal.price;
        });
      const names = datas
        .sort((a, b) => b.price - a.price)
        .slice(0, 10)
        .map((meal) => {
          return meal.title
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        });
      setData({
        series: [
          {
            data: prices,
          },
        ],
        options: {
          ...data.options,
          xaxis: {
            categories: names,
            labels: { style: { colors: ["#FF0000"] } },
          },
          yaxis: {
            categories: names,
            labels: {
              style: {
                colors: ["#008000"],
                fontWeight: 700,
                fontSize: 16,
              },
            },
          },
        },
      });
    }
  }, [datas]);

  if (datas && datas.length >=4) {
    return (
      <div className="mt-10 max-w-5xl w-full ml-auto mr-auto">
        <h1 className=" font-bold text-2xl">Meals Price:</h1>

        <div id="chart">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="bar"
            height={450}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default BarChart;
