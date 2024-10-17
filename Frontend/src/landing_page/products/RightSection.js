import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
 
  learnMore,
  
}) {
  return (
    <div className="container mt-5 border-top">
      <div className="row">
        <div className="col-6 p-5 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          
        </div>

        <div className="col-4">
          <img src={imageUrl} className="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
