import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import { Cars } from "../pages/Homepage";
import { CarsCard } from "../components/SingleCar";
import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";
import { PrivateRoute2 } from "./privateRoute2";


const AllRoutes = () => {
  return (
    <div>
      <Box>
      <Routes>
         <Route path='/'element={<Cars/>}/>
         <Route path='/cars/:id'element={<PrivateRoute2><CarsCard/></PrivateRoute2>}/>
         <Route path='/login'element={<SignIn/>}/>
         <Route path='/register'element={<SignUp/>}/>
      </Routes>
      </Box>
      </div>
  );
};

export default AllRoutes;