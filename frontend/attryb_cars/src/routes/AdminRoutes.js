import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import AdminDash from "../components/Admin/AdminAdd.js/AdminDash";
import AdminLogin from "../components/Admin/AdminAdd.js/adminlogin";
import { PrivateRoute } from "./PrivateRoute";
import AdminManage from "../components/Admin/AdminAdd.js/AdminManage";
import AdminAdd from "../components/Admin/AdminAdd.js/AdminAdd";


const AdminRoutes = () => {
  return (
    <div>
      <Box marginTop={"90px"}>
      <Routes>
          <Route path="/AdminDash" element={<PrivateRoute><AdminDash/></PrivateRoute>} />
         <Route path="/AdminManage" element={<PrivateRoute><AdminManage/></PrivateRoute>} />
        <Route path="/AdminAdd" element={<PrivateRoute><AdminAdd/></PrivateRoute>}/>
        <Route path="/AdminLogin" element={<AdminLogin />} />
      </Routes>
      </Box>
      </div>
  );
};

export default AdminRoutes;