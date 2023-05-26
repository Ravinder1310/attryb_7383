import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import { Cars } from "../pages/Homepage";
import { CarsCard } from "../components/SingleCar";
import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";


const AllRoutes = () => {
  return (
    <div>
      <Box>
      <Routes>
         <Route path='/'element={<Cars/>}/>
         <Route path='/cars/:id'element={<CarsCard/>}/>
         <Route path='/login'element={<SignIn/>}/>
         <Route path='/register'element={<SignUp/>}/>
      </Routes>
      </Box>
      </div>
  );
};

export default AllRoutes;