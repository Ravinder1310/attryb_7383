import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import AdminDash from "../components/Admin/AdminDash.js";
import AdminLogin from "../components/Admin/AdminLogin.js";
import { PrivateRoute } from "./PrivateRoute";
import AdminManage from "../components/Admin/AdminManage.js";
import AdminAdd from "../components/Admin/AdminAdd.js";


const AdminRoutes = () => {
  return (
    <div>
      <Box marginTop={"90px"}>
      <Routes>
          <Route path="/adminDash" element={<PrivateRoute><AdminDash/></PrivateRoute>} />
         <Route path="/adminManage" element={<PrivateRoute><AdminManage/></PrivateRoute>} />
        <Route path="/adminAdd" element={<PrivateRoute><AdminAdd/></PrivateRoute>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
      </Routes>
      </Box>
      </div>
  );
};

export default AdminRoutes;