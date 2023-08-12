import React, { useEffect, useState } from "react";
import "./Addproduct.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Addproduct() {
const navigate = useNavigate() ;

  const [image, setimage] = useState("");
  const [url, seturl] = useState("");
  const [productName, setproductName] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("grocery");
  const [countable, setcountable] = useState("countable");


  useEffect(() => {
    if(url){
      fetch('http://localhost:5000/addproduct',{
        method:"post",
        headers:{
          "authorization":'Bearer '+ localStorage.getItem("jwt"),
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          url,name:productName,price,category,countable
        })
      }).then(result=>result.json())
      .then(data=>{
        if(data.error){
          toast.error(data.error) ;
        }else{
          toast.success(data.message) ;
          navigate('/') ;
        }
      })
    }
   
  }, [url])
  

  const saveDetails = ()=>{
    // console.log(image,url,productName,price,category,countable) ;

    const data = new FormData() ;
    data.append("file",image) ;
    data.append("upload_preset","kirana-store") ;
    data.append("cloud_name","rahul7266") ;
    fetch("https://api.cloudinary.com/v1_1/rahul7266/image/upload",{
      method:"post",
      body:data
    })
    .then(res=> res.json() )
    .then(data=>seturl(data.url))
    .catch(err=>console.log(err)) ;

  };

  const loadPost = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <div className="Addproduct">
      <div className="form-container">
        {/* main-div  */}
        <div className="main-div">
          <img
            src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
            alt=""
            id="output"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              loadPost(event);
              setimage(event.target.files[0]);
            }}
          />
        </div>
        {/* detail  */}
        <div className="details">
        <div>
          {" "}
          <input
            type="text"
            name="name"
            id="p_name"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => {
              setproductName(e.target.value);
            }}
          />
        </div>
        <div>
          {" "}
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
        </div>
        <div>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="grocery">Grocery</option>
            <option value="beautyProduct">Beauty Products</option>
          </select>
        </div>
        <div>
          <select
            name="countable"
            id="countable" 
            value={countable}
            onChange={(e) => {
              setcountable(e.target.value);
            }}
          >
            <option value="countable">Countable</option>
            <option value="Uncountable">Uncountable</option>
          </select>
        </div>
        <input
            type="submit"
            id="submit-btn"
            value="Add Product"
           onClick={()=>{saveDetails()}}
          />
        </div>
      </div>
    </div>
  );
}
