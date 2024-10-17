import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supporthero">
      <div className=" p-5 mt-5 " id="supportwrapper">
        <h4 className="">Support Portal</h4>
        <a href="">Track tickets </a>
      </div>

      <div className=" p-5 mt-5 row ">
        <div className=" p-5  col-6 ">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="how do i activate F&O, why is my order getting rejected .."/> <br/>
          <a href="">Track account opening </a>
          <a href=""> Track segment activation </a>
          <a href="">Intraday margins </a>
          <a href="">Kite user manual</a>
        </div>
        <div className=" p-3  col-6 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li><a href="">Suspension of trading - IDFC Limited</a></li>
            <li> <a href="">Rights Entitlements listing in October 2024 </a></li>
          </ol>
        
         
        </div>
      </div>
    </section>
  );
}

export default Hero;
