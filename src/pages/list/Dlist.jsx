import React from 'react' ;
import "./list.scss" ;
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";
import DrugsTable from '../../components/dataTable/DrugsTable';

const Dlist = ({}) =>{
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DrugsTable  />
            </div>
        </div>
    )
}

export default Dlist ;