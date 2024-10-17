import React, { useEffect, useState } from "react";

import axios from "axios";

const Positions = () => {

  const [positions,setPositions]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4500/api/v4/get-data/all-positions").then((res)=>{
      setPositions(res.data.data);
    })
  },[])

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {
            positions.map((data, idx) => {
             const currValue=data.price * data.qty;
             const isProfit=currValue-data.avg >=0.0;
             const profClass=isProfit ? "profit" : "loss" ;
             const dayClass=data.isLoss ? "loss" : "profit";
              return ( 
             
             <tr key={idx} className="">
                <td>{data.product}</td>
                <td>{data.name}</td>

                <td>{data.qty}</td>
                <td>{data.avg.toFixed(2)}</td>
                <td>{data.price.toFixed(2)}</td>
            
                <td className={profClass}>{(currValue-data.avg * data.qty).toFixed(2)}</td>
      
                <td className={dayClass}>{data.day}</td>
              </tr>)
            })}
        </table>
      </div>
    </>
  );
};

export default Positions;