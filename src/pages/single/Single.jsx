import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from '../../components/table/Table';
import { Link } from "react-router-dom";


const Single = () => {
  return (
    <div className="single">
      <Sidebar />

      <div className="singleContainer">
        <Navbar />

        <div className="top">
          <div className="left">
          <Link to="/users/edit" style={{textDecoration:"none"}}><div className="editButton">Edit</div></Link>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="user"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemtitle">Thana Ash</h1>
                <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">thana@gmail.com</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+9677777777</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Status:</span>
                    <span className="itemValue">Active</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Adress:</span>
                    <span className="itemValue">Sana'a</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Service Point:</span>
                    <span className="itemValue">Center</span>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Recieveing Donations"/>
          </div>
        </div>

        <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
