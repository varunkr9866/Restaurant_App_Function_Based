import { useState, useEffect } from "react";

function Restaurant(props) {
  const [menuData, setMenuData] = useState({
    flag: false,
    foodData: null,
    drinkData: null,
  });

  async function getData() {
    let backend_url = "http://localhost:3200/data";
    let response = await fetch(backend_url);
    let responseData = await response.json();

    console.log(responseData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div classname="pri">
      <h1>Food Menu</h1>
      {menuData.foodData}
      <h1>Drink Menu</h1>
      {menuData.drinkData}
      <Copyright />
    </div>
  );

}
export default Restaurant;
