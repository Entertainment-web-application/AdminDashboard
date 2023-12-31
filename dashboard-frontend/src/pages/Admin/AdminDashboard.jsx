import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useHttpClient } from "../../hooks/http-hook";

import Sidebar from "../../components/Sidebar/Sidebar";

// Admin Pages

import AdminHomePage from "./Home/AdminHomePage";

import EditContent from "./EditContent/EditContent";
import AddNewAdmin from "./AddNewAdmin/AddNewAdmin";
import Posts from "./Posts/Posts";
import UsersMessages from "./UsersMessages/UsersMessages";

export default function CustomerDashboard() {

  const { sendRequest } = useHttpClient();

  const [users, setUsers] = useState([]);
  const [providers, setProviders] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [deletedAccounts, setDeletedAccounts] = useState([]);
  const [aboutUsContent, setAboutUsContent] = useState([]);
  const [contactUsContent, setContactUsContent] = useState([]);
  const[allPosts, setAllPosts] = useState([]);
  const[usersMessages, setUsersMessages] = useState([]);

  const fetchUsers = async () => {
    try {
      let responseData = await sendRequest("http://localhost:5000/api/admin/get-users");
      if(responseData) {
        setUsers(responseData?.filter(account => account.role === 'user' && account.status === 'active'));
        setProviders(responseData?.filter(account => account.role === 'provider' && account.status === 'active'));
        setDeletedAccounts(responseData?.filter(account => account.status === "deleted"));
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAboutUsContent = async () => {
    try {
      let responseData = await sendRequest("http://localhost:3500/admin/get-aboutus");
      setAboutUsContent(responseData[0]);
    } catch(err) {
      console.log(err);
    }
  };

  const fetchContactUsContent = async () => {
    try {
      let responseData = await sendRequest("http://localhost:3500/admin/get-contactus");
      setContactUsContent(responseData[0]);
    } catch(err) {
      console.log(err);
    }
  };

// Fetch all wesite posts

  const fetchAllPosts = async () => {
    try {
      let responseData = await sendRequest("http://localhost:3500/admin/getAllWebPosts");
      setAllPosts(responseData);
    } catch(err) {
      console.log(err);
    }
  };

  // fetch users 

  const fetchAllUsers = async () => {
    try {
      let responseData = await sendRequest("http://localhost:3500/admin/get-users");
      setUsers(responseData);
    } catch(err) {
      console.log(err);
    }
  };


  //  fetch user msgs
  const fetchUsersMessages = async () => {
    try {
      let responseData = await sendRequest("http://localhost:3500/admin/users-messages");
      setUsersMessages(responseData);
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllPosts();
    fetchAllUsers();
    fetchAboutUsContent();
    fetchContactUsContent();
    fetchUsersMessages();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="home">
        <h1 className="mb-5 p-3 " style={{color:"#3A1078"}}>Welcome To Admin Dashboard</h1>
        <Routes>
          <Route
            index
            element={
              <AdminHomePage posts={allPosts} fetchPosts={fetchAllPosts} users={users} fetchUsers={fetchAllUsers} />
            }
          />
          <Route
            path="/home"
            element={
              <AdminHomePage posts={allPosts} fetchPosts={fetchAllPosts} />
            }
          />
          <Route path="/add-new-admin" element={<AddNewAdmin />} />
       
          <Route path="/edit-content" element={<EditContent content={aboutUsContent} fetchAboutUsContent={fetchAboutUsContent} contactUsContent={contactUsContent} fetchContactUsContent={fetchContactUsContent} />} />
          <Route path="/users-messages" element={<UsersMessages usersMessages={usersMessages} />} />
          <Route path="/posts" element={<Posts posts={allPosts} fetchPosts={fetchAllPosts} />} />
 
        </Routes>
      </div>
    </div>
  )
}
