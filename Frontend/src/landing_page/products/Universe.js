import React from "react";

function Universe() {
  return (
    <div className="container ">
      <div className="text-center">
        <p className="fs-4 text-muted p-4">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
        <h1 className="fs-2">The Zerodha Universe</h1>
        <p className="fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center p-5 mt-5">
        <div className="col-4">
          <img src="media/zerodhaFundhouse.png" style={{ width: "50%" }} />
          <p className="mt-3 text-small text-muted  ">
            Our asset management venture <br />
            that is creating simple and transparent index
            <br /> funds to help you save for your goals.
          </p>
          <img
            src="media/streakLogo.png"
            style={{ width: "50%" }}
            className="mt-5"
          />
          <p className="mt-3 text-small text-muted ">
            Systematic trading platform
            <br /> that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img src="media/sensibullLogo.svg" style={{ width: "50%" }} />
          <p className="mt-3 text-small text-muted ">
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br /> data points like open interest, FII/DII, and more.
          </p>
          <img
            src="media/smallcaseLogo.png"
            style={{ width: "50%" }}
            className="mt-5 p-4  "
          />
          <p className="mt-3 text-small text-muted ">
            Thematic investing platform
            <br /> that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img src="media\goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="mt-3 text-small text-muted ">
            Investment research platform   <br /> that offers detailed insights on
            stocks,   <br /> sectors, supply chains, and more.
          </p>
          <img
            src="media/dittoLogo.png"
            style={{ width: "50%" }}
            className="mt-5"
          />
          <p className="mt-3 text-small text-muted ">
            Personalized advice on life    <br /> and health insurance. No spam   <br /> and no
            mis-selling. Sign up for free
          </p>
        </div>


        <button style={{width:"20%" , margin:"0 auto"}} className='p-2 btn btn-primary fs-5 mt-5'>Sing up Now</button>
      </div>

   
    </div>
  );
}

export default Universe;
