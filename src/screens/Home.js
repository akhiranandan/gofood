import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";

const Home = () => {

  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])

  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    response = await response.json()

    setFoodItem(response[0])
    setFoodCat(response[1])
    // console.log(response[0], response[1])
  }

  useEffect(() => {
    loadData()
  },[])
   
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container">
        {
          foodCat !== []
          ? foodCat.map((data) => {
            return (
              <div className="row mb-3">
            <div key={data._id} className="fs-3 m-3">
            {data.CategoryName}
            </div>
            <hr />
            {foodItem !== [] 
            ? 
            foodItem.filter((item)=> item.CategoryName === data.CategoryName)
            .map(filterItems=>{
              return(
                <div key={filterItems._id} className="col-12 col-mid-6 col-lg-3">
                  <Card foodName = {filterItems.name}
                        options = {filterItems.options}
                        imgSrc = {filterItems.imgSrc}
                        ></Card>
                </div>
              )
            }
            ): <div>No such data found</div>}
            </div>
            )
          })
          : ""
        }
      </div>
      <Footer />
    </>
  );
};

export default Home;
