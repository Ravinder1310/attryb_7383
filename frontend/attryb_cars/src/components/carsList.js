
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import "../styles/cars.css"
import { getCars } from '../redux/cars/action'

export const CarsList = () => {
  const dispatch = useDispatch()
  const cars = useSelector((store)=>store.carReducer.mens);
  const location = useLocation();
  const [searchParams] = useSearchParams();



// console.log(location)
  useEffect(()=>{
    let paramObj = {
        params: {
            category:searchParams.getAll("category"), //&category=Novel&category=Motivational
            _sort: searchParams.get("order") && "price",// &category=Novel&category=Motivational&_sort=release_year
            _order: searchParams.get("order")//  &category=Novel&category=Motivational&_sort=release_year&_order=asc
        }
    } 
    dispatch(getCars(paramObj))
  },[location.search])

    return (
          <div>
            <div className="mens_sort"> 
              <div className='sort_by'>
                <h1>SORT BY</h1>
              <select name="order" id="order" style={{border:"1px solid black",padding:"5px 5px"}}>
              {/* <option value="">Select by price</option>   */}
                <option value="hello">Price(Lowest first)</option>  
                <option value="">Discount</option>  
                <option value="">Price(Highest first)</option>
                <option value="">What's New</option>  
              </select>  
              </div> 
              </div>
              <div className='mens_container' style={{gridTemplateColumns:`repeat(${grid},1fr)`,width:"100%"}}>
            {cars.length>0 && cars.map((el) => {
                return <CarsCard key={el.id} car={el}/>
            })}
            </div>
        </div>
    )
}