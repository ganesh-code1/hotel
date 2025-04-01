import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet ,useNavigate } from 'react-router-dom'
import Footer from './Footer'
import SideBar from "./SideBar";
import { io } from "socket.io-client";
import "../../assets/css/Admin.css";
import { API_BASE_URL } from "../../config";
import toast from "react-hot-toast";

const Applayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate=useNavigate();

  const socket = io(API_BASE_URL); 
  const restaurantSlug = localStorage.getItem("restaurantSlug");
  const token = localStorage.getItem("token");
  const audio = new Audio("./src/assets/audio/notification2.mp3");

  useEffect(() => {
    if (!restaurantSlug) return; 
    const orderEvent = `newOrder:${restaurantSlug}`;
    socket.on(orderEvent, () => {
        audio.play();
        toast.success("New Order Received!");
        alert("New Order Received");
    });
    return () => {
        socket.off(orderEvent);
    };
  }, []);

  useEffect(() => {
    if (!token) {
        setIsAuthenticated(false);
        navigate("/");
        return;
      }
  
      fetch(`${API_BASE_URL}/verify-token`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.loggedIn) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          navigate("/");
        }
      })
      .catch(() => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/");
      });
    }, [navigate]);

  if (isAuthenticated === null) {
      return <div>Loading...</div>; 
  }
  return (
    <div>
        <Header/>
        <SideBar/>
        {/* <Footer/> */}
    </div>
  )
}

export default Applayout