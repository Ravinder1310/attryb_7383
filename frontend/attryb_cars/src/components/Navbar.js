import { useEffect, useState } from "react"
import "../styles/navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons'
import { getCars } from "../redux/cars/action";

export const Navbar = () => {
    // const [title,setTitle] = useState("");
    const [searchParams,setSearchParams] = useSearchParams();
    const mens = useSelector((store)=>store.carReducer.mens);
    const dispatch = useDispatch();
    const initialCategory = searchParams.getAll("category") // ['Novel','Motivational']
    const [category,setCategory] = useState(initialCategory || []);// ['Novel']



    const handleClick = () => {
       const filterData = mens.filter((el)=>{
        return el.category === category
       })

       setCategory(filterData); 
    }

    const handleChange = (e) => {
        setCategory(e.target.value)
        if(e.target.value === ""){
            dispatch(getCars())
        }
        // console.log(category);
    }

    useEffect(() => {
        const params = {
            category,
        };
        setSearchParams(params)
    },[category])

    return (
        <div className="navbar">
            <img src="https://www.shutterstock.com/image-vector/car-deal-logo-design-template-260nw-1074766931.jpg"/>
            <div id="search">
           <Icon id="searchIcon" as={Search2Icon}></Icon><input type="text" value={category} onChange={(e) => handleChange(e)} placeholder="Search"/>
            </div>
            <div id="loggggg">
                <a id="logg" href="/login">Login</a>
                <a id="reg" href="/register">Register</a>
                <a id="admn" href="/adminDash">Admin</a>
            </div>
        </div>
    )
}