
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import "../styles/cars.css"
import { getCars } from '../redux/cars/action'
import { CarsCard } from './SingleCar'
import { Filtering } from './filter'

export const CarsList = () => {
  const dispatch = useDispatch()
  const cars = useSelector((store)=>store.carReducer.cars);
  const location = useLocation();
  const [searchParams] = useSearchParams();




  useEffect(()=>{
    let paramObj = {
        params: {
            title:searchParams.getAll("title"), //&category=Novel&category=Motivational
            _sort: searchParams.get("order") && "price",// &category=Novel&category=Motivational&_sort=release_year
            _order: searchParams.get("order")//  &category=Novel&category=Motivational&_sort=release_year&_order=asc
        }
    } 
    
    dispatch(getCars(paramObj))
  },[location.search])

    return (
          <div>
            <div className="mens_sort"> 
             <Filtering/>
              </div>
              <div className='mens_container' style={{gridTemplateColumns:`repeat(5,1fr)`,width:"100%"}}>
            {cars.length>0 && cars.map((el) => {
                return <CarsCard key={el.id} car={el}/>
            })}
            </div>
        </div>
    )
}