import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
const Holdings = () => {
  const [holdings, setHolding] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/api/v4/get-data/all-holdings")
      .then((res) => {
        setHolding(res.data.data);
      });
  }, []);

  //   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const labels = holdings.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) =>stock.price ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((data, idx) => {
            const currValue = data.price * data.qty;
            const isProfit = currValue - data.avg >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = data.isLoss ? "loss" : "profit";
            return (
              <tr key={idx} className="">
                <td>{data.name}</td>
                <td>{data.qty}</td>
                <td>{data.avg.toFixed(2)}</td>
                <td>{data.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(currValue - data.avg * data.qty).toFixed(2)}
                </td>
                <td className={profClass}>{data.net}</td>
                <td className={dayClass}>{data.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
