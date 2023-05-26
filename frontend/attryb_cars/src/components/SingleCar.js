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
            <h3>{car.brand}</h3>
            {/* <p>{men._id}</p> */}
            <p>{car.nameCls}</p>
            <div>
            <p className="price">₹{car.price}</p>
            <p className="original_price">₹{car.orginal_price}</p>
            <p className="mens_discount">({car.discount}% off)</p>
            </div>
            <p className="offer_price">Offer price ₹{car.price-80}</p>
            
        </div>
    )
}