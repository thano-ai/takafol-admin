import React from 'react' ;
import "./list.scss" ;
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";
import CitiesTable from '../../components/dataTable/CitiesTable';

const Clist = ({}) =>{
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <CitiesTable  />
            </div>
        </div>
    )
}

export default Clist ;