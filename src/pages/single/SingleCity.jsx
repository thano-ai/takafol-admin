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
            <Link to="/cities/edit" style={{textDecoration:"none"}}><div className="editButton">Edit</div></Link>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="user"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemtitle">Sana'a</h1>
                <div className="detailItem">
                    <span className="itemKey">Arabic Name:</span>
                    <span className="itemValue">صنعاء</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Directorates:</span>
                    <span className="itemValue">Demo , Demo , Demo</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Sirvice Points:</span>
                    <span className="itemValue">Demo , Demo , Demo</span>
                </div>
                <div className="detailItem">
                    <Link to="/cities/addDir" style={{textDecoration:"none"}}><button className="addDir">Add Directorates</button></Link>
                </div>
                
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Donations From the city"/>
          </div>
        </div>

        {/* <div className="bottom">
            <h1 className="title">Last Donations</h1>
            <List />
        </div> */}
      </div>
    </div>
  );
};

export default Single;
