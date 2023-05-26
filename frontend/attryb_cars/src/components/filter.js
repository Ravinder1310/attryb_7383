import { useEffect } from "react";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";


export const Filtering = (e) => {

    const [searchParams,setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll("category") // ['Novel','Motivational']
    const initialOrder = searchParams.get("order")
    const [category,setCategory] = useState(initialCategory || []);// ['Novel']
    const [order,setOrder] = useState(initialOrder || "") // 'asc'
    
    const handleFilter1 = (e) => {

       setCategory(e.target.value); 
       console.log(searchParams);   
       
    }

    const handleFilter2 = (e) => {

        setCategory(e.target.value); 
        console.log(searchParams);   
        
     }

    const handleSort = (e) => {
      setOrder(e.target.value);
    }
    // console.log(category);
    useEffect(() => {
        const params = {
            category,
        };
        order && (params.order=order)
        setSearchParams(params)
    },[category,order])

    return (
  
  <div  style={{display:"flex",width:'100%',justifyContent:"space-between",alignItems:"center"}}>
        <div id="filterColor">
            <label>Filter by color:-</label>
            <select style={{border:"1px solid black",marginLeft:"15px",padding:"2px 10px",borderRadius:"10px"}} onChange={(e) => handleFilter1(e)}>
                <option value={"pants"}>Pants</option>
                <option value={"jeans"}>Jeans</option>
                <option value={"shirt"}>Shirts</option>
                <option value={"t-shirt"}>T-shirts</option>
            </select>
        </div>
        <div id="filterMielage">
        <label>Filter by Mielage:-</label>
            <select style={{border:"1px solid black",marginLeft:"15px",padding:"2px 10px",borderRadius:"10px"}} onChange={(e) => handleFilter2(e)}>
                <option value={"pants"}>Pants</option>
                <option value={"jeans"}>Jeans</option>
                <option value={"shirt"}>Shirts</option>
                <option value={"t-shirt"}>T-shirts</option>
            </select>
        </div>
            <div id="sortPrice">
            <label>Sort by Price:-</label>
                <div onChange={handleSort}>
                    <input type="radio" name="sort_by" value={'asc'} defaultChecked={order === "asc"}/>
                    <label>Ascending</label>
                    <input type="radio" name="sort_by" value={'desc'} defaultChecked={order === "desc"}/>
                    <label>Descending</label>
                </div>
            </div>
        </div>
    )
}






