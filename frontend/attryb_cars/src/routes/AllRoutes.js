import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import HomePage from "./HomePage";
import { Cars } from "../pages/Homepage";
import { CarsCard } from "../components/SingleCar";


const AllRoutes = () => {
  return (
    <div>
      <Box marginTop={"90px"}>
      <Routes>
         <Route path='/'element={<Cars/>}/>
         <Route path='/cars/:id'element={<CarsCard/>}/>
         <Route path='/login'element={<Women/>}/>
         <Route path='/register'element={<Kids/>}/>
      </Routes>
      </Box>
      </div>
  );
};

export default AllRoutes;