import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Containers/Auth/signin/Login/Login";
import Forget from "../Containers/Auth/signin/Forget/Forget";
import LinkReset from "../Containers/Auth/signin/LinkReset/LinkReset";
import ResetPassword from "../Containers/Auth/signin/ResetPassword/ResetPassword";
import SinUp from "../Containers/Auth/signup/Stepper/Stepper";
import VerifyPassword from "../Containers/Auth/signup/VerifyPassword/VerifyPassword";
import ProtectedRoute from "./ProtectedRoutes";
import { useSelector } from "react-redux";
import Dashboard from "../Containers/Dashboard/Dashboard";
import Subject from "../Containers/Subject/Subject";
import Test from "./../Containers/Test/Test";
import Users from "./../Containers/Users/Users";
import ErrorPage from "./../Containers/Home/ErrorPage";
import Auth from "./../Containers/Auth/Auth";
import paths from "./../Containers/Subject/paths";

const ApplicationRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <Routes>
      <Route
        path="/auth"
        element={
          isLoggedIn === "true" ? <Navigate to="/dashboard" /> : <Auth />
        }
      >
        <Route index path="" element={<Login />} />
        <Route path="link_reset" element={<LinkReset />} />
        <Route path="forget" element={<Forget />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="signup" element={<SinUp />} />
        <Route path="verify-password" element={<VerifyPassword />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="user" element={<Users />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/:name/:id/:value" element={<Subject />}>
          <Route
            path=""
            element={<Navigate to={paths[0].name} replace={true} />}
          />
          {/* i can use nested logic to build nested routes as well for my library notes simulation etc */}
          {paths.map((tab, index) => (
            <Route key={index} path={`${tab.name}`} element={tab.content} />
          ))}
        </Route>
      </Route>
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default ApplicationRoutes;
