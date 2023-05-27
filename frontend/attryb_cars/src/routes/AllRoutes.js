import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import { Cars } from "../pages/Homepage";
import { CarsCard } from "../components/SingleCar";
import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";
import { PrivateRoute2 } from "./privateRoute2";
import { PrivateRoute } from "./PrivateRoute";
import AdminDash from "../components/Admin/AdminDash";
import AdminManage from "../components/Admin/AdminManage";
import AdminAdd from "../components/Admin/AdminAdd";
import AdminLogin from "../components/Admin/AdminLogin";


const AllRoutes = () => {
  return (
    <div>
      <Box>
      <Routes>
         <Route path='/'element={<Cars/>}/>
         <Route path='/cars/:id'element={<PrivateRoute2><CarsCard/></PrivateRoute2>}/>
         <Route path='/login'element={<SignIn/>}/>
         <Route path='/register'element={<SignUp/>}/>
         <Route path="/adminDash" element={<PrivateRoute><AdminDash/></PrivateRoute>} />
         <Route path="/adminManage" element={<PrivateRoute><AdminManage/></PrivateRoute>} />
        <Route path="/adminAdd" element={<PrivateRoute><AdminAdd/></PrivateRoute>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
      </Routes>
      </Box>
      </div>
  );
};

export default AllRoutes;