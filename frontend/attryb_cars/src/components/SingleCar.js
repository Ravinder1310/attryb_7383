import { Link } from "react-router-dom"
import "../styles/cars.css"
import axios from "axios"
import { useState } from "react"


export const CarsCard = ({car}) => {

    return (
        <div className="mens_cards">
            <Link to={`/cars/${car._id}`}>
            <img src={car.images} alt='Error' width={"100%"}/>
            </Link>
            <h3>{car.title}</h3>
            <div>
            <p className="price">₹{car.price}</p>
            <p className="original_price">₹{car.color}</p>
            </div>
            
        </div>
    )
}