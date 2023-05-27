import { useEffect } from "react";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";


export const Filtering = (e) => {

    const [searchParams,setSearchParams] = useSearchParams();
    const initialTitle = searchParams.getAll("category") // ['Novel','Motivational']
    const initialOrder = searchParams.get("order")
    const [title,setTitle] = useState(initialTitle || []);// ['Novel']
    const [order,setOrder] = useState(initialOrder || "") // 'asc'
    
    const handleFilter1 = (e) => {

        setTitle(e.target.value); 
       console.log(searchParams);   
       
    }

    const handleFilter2 = (e) => {

        setTitle(e.target.value); 
        console.log(searchParams);   
        
     }

    const handleSort = (e) => {
      setOrder(e.target.value);
    }
    // console.log(category);
    useEffect(() => {
        const params = {
            title,
        };
        order && (params.order=order)
        setSearchParams(params)
    },[title,order])

    return (
  
  <div  style={{display:"flex",width:'100%',justifyContent:"space-between",alignItems:"center"}}>
        <div id="filterColor">
            <label>Filter by color:-</label>
            <select style={{border:"1px solid black",marginLeft:"15px",padding:"2px 10px",borderRadius:"10px"}} onChange={(e) => handleFilter1(e)}>
                <option value={"black"}>Black</option>
                <option value={"blue"}>Blue</option>
                <option value={"white"}>White</option>
                <option value={"red"}>Red</option>
            </select>
        </div>
        <div id="filterMielage">
        <label>Filter by Mielage:-</label>
            <select style={{border:"1px solid black",marginLeft:"15px",padding:"2px 10px",borderRadius:"10px"}} onChange={(e) => handleFilter2(e)}>
                <option value={30}>More than 30</option>
                <option value={40}>More than 40</option>
                <option value={50}>More than 50</option>
            </select>
        </div>
            <div id="sortPrice">
            <label>Sort by Price:-</label>
                <div onChange={handleSort}>
                    <input type="radio" name="sort_by" value={'asc'} defaultChecked={order === "asc"}/>
                    <label>Low to high</label>
                    <input style={{marginLeft:"20px"}} type="radio" name="sort_by" value={'desc'} defaultChecked={order === "desc"}/>
                    <label>High to low</label>
                </div>
            </div>
        </div>
    )
}






