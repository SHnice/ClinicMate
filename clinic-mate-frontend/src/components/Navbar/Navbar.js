import React, { Fragment } from "react";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useAuth } from "../../AuthContext";
import api from "../../api";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const userName = token ? jwt_decode(token)?.name : null;
  const { setUserType, setLoader, setAlert, setAlertMsg, userType } = useAuth();

  const handleLogOut = async () => {
    try {
      setLoader(true);
      const refreshToken = localStorage.getItem("refreshToken");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      await api.logout({ data: { refreshToken } });
      setLoader(false);
      setUserType(null);
      navigate("/");
    } catch (error) {
      setLoader(false);
      setAlertMsg(error?.response?.data?.error || "An Error Occured!");
      setAlert(true);
      console.error(error);
    }
  };

  return (
    <div className={styles.appBar}>
      <p className={styles.userName2}>
        {userName ? `Hello, ${userName}` : "Welcome!"}
      </p>

      {/* --------------> Patient Dashboard <------------------ */}

      {userType === "Patient" && (
          <Fragment>
            <Link className={styles.userName} to="/dashboard/patient">Dashboard</Link>
            <Link className={styles.userName} to="/dashboard/patient/book-appointment">Book Appointment</Link>
            <Link  className={styles.userName} to="/dashboard/patient/make-payment">Make Payment</Link>
            <Link className={styles.userName} to="/dashboard/patient/my-appointments">My Appointments</Link>
            <Link className={styles.userName} to="/dashboard/patient/prescriptions">Prescriptions</Link>
            <Link className={styles.userName} to="/dashboard/patient/feedbacks">Feedbacks</Link>
          </Fragment>
        )}

        {/* ----------------> Doctor Dashboard <------------------------- */}

        {userType === "Doctor" && (
          
          <Fragment>
             <Link className={styles.userName} to="/dashboard/doctor">Dashboard</Link>
             <Link className={styles.userName} to="/dashboard/doctor/appointments">Appointments</Link>
             <Link className={styles.userName} to="/dashboard/doctor/upload-prescription">Upload Prescriptions</Link>
            
          </Fragment>
        )}

        {/* ---------------------> Staff Dashboard <------------------- */}

        {userType === "Staff" && (
          <Fragment>
            <Link className={styles.userName} to="/dashboard/staff">Dashboard</Link>
            <Link className={styles.userName} to="/dashboard/staff/available-doctors">Available Doctors</Link>
            <Link className={styles.userName} to="/dashboard/staff/book-appointment">Book Appointment</Link>
            <Link className={styles.userName} to="/dashboard/staff/cancel-appointment">Cancel Appointment</Link>
            <Link className={styles.userName} to="/dashboard/staff/make-payment">Make Payment</Link>
          </Fragment>
        )}

        {/* --------------------> Admin Dashboard <---------------------- */}

        {userType === "Admin" && (
          <Fragment>
            <Link className={styles.userName} to="/dashboard/admin">Dashboard</Link>
            <Link className={styles.userName} to="/dashboard/admin/doc-list">Doctors</Link>
            <Link className={styles.userName} to="/dashboard/admin/staff-list">Staffs</Link>
            <Link className={styles.userName} to="/dashboard/admin/generate-stats">Statistics</Link>
            <Link className={styles.userName} to="/dashboard/admin/feedbacks">Feedbacks</Link>
            <Link className={styles.userName} to="/dashboard/admin/verify-user">Verify User</Link>
          </Fragment>
        )}


      <Tooltip title="Log Out">
        <IconButton onClick={handleLogOut} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: "#fb4a59" }}>
            <Logout />
          </Avatar>
        </IconButton>
      </Tooltip>
    </div>
  );
}
