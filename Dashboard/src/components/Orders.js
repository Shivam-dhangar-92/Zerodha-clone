import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/api/v4/get-data/all-orders")
      .then((res) => {
        console.log(res.data.data);
        setOrders(res.data.data);
      });
  }, []);

  let totalvalue=0; 

  return (
    <div className="orders">
      {orders.length === 0 && (
        <>
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </>
      )}
      {orders.length !== 0 && (
        <>
          <h3 className="title">Orders ({orders.length})</h3>

          <div className="order-table">
            <table>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Total</th>
              </tr>

              {orders.map((data, idx) => {
                const total=data?.price * data?.qty 
                totalvalue +=total
                return (
                  <tr key={idx} className="">
                    <td>{data.name}</td>
                    <td>{data.qty}</td>
                    <td>{data.price}</td>
                    <td>{data.mode}</td>
                    <td>{total}</td>
                  </tr>
                );
              })}
            </table>
          </div>

          <div className="row">
            <div className="col">
              <h5>
               {totalvalue}{" "}
              </h5>
              <p>Total investment</p>
            </div>
            <div className="col">
              <h5>
               {totalvalue+158.520}{" "}
              </h5>
              <p>Current value</p>
            </div>
            <div className="col">
              <h5>158.52({((158.2*100)/totalvalue).toFixed(2) }%)</h5>
              <p>P&L</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
