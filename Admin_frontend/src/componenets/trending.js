import React from "react";
import "./trending.css";
export default function Trending() {
  return (
    <div className="rending">
      <div className="title">
        <h3>Trending Products</h3>
      </div>
      <div className="contianer">
        <div class="wrapper">
          <div class="services">
        
              <span class="single-img img-two" style={{
                  backgroundImage:
                    'url("https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/7/6/7622201423131.jpg")',
                  backgroundRepeat: "no-repeat",
                }}>
                <span class="img-text">
                  <h4>Nikon 3458</h4>
                  <p>price</p>
                  <div className="btn-container">
                  <button>Edit</button>
                  <button>Delete</button>
                  </div>
                </span>
              </span>
          
           
          </div>
        </div>
      </div>
    </div>
  );
}
