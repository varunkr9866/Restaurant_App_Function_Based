import { useState,useEffect } from "react";

function Restaurant(props) {
    const [menuData,setMenuData] = useState({
        flag:false,
        foodData: null,
        drinkData:null
    })
    async function getData(){
        let backend_url='http://localhost:3200/data';
        let response = await fetch(backend_url);
        let responseData =awaitresponse.json();

        console.log(responseData);
        
    }
    useEffect(()=>{
        getData();
    },[]);
    
    return(
        <div>
            <h1>Restaurant Component</h1>
        </div>
    )
}

export default Restaurant;