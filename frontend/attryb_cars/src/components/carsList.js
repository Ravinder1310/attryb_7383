
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import "../styles/cars.css"
import { getCars } from '../redux/cars/action'
import { CarsCard } from './SingleCar'
import { Filtering } from './filter'

export const CarsList = () => {
  const dispatch = useDispatch()
  const mens = useSelector((store)=>store.carReducer.mens);
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
             <Filtering/>
              </div>
              <div className='mens_container' style={{gridTemplateColumns:`repeat(5,1fr)`,width:"100%"}}>
            {mens.length>0 && mens.map((el) => {
                return <CarsCard key={el.id} car={el}/>
            })}
            </div>
        </div>
    )
}