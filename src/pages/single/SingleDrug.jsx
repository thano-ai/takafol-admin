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
          <Link to="/drugs/edit" style={{textDecoration:"none"}}><div className="editButton">Edit</div></Link>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="user"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemtitle">Demo Drug</h1>
                <div className="detailItem">
                    <span className="itemKey">Scinentific Name:</span>
                    <span className="itemValue">Deeeeeeeemo</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Production Date:</span>
                    <span className="itemValue">01-01-2001</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Expiry Date:</span>
                    <span className="itemValue">01-01-2001</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Status:</span>
                    <span className="itemValue">Active</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Drug Quantity in The stock"/>
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
