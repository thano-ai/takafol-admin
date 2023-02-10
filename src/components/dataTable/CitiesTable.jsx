import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {cityColumns, cityRows} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";


const CitiesTable = () => {

  const [data,setData] = useState(cityRows) ;

  const handelDelete =(id) =>{
    setData(data.filter((item) => item.id !== id)) ;
  }
    const actionColumn = [{ 
        field: "action" ,
        headerName:"Action",
        width: 200,
        renderCell:(params)=>{
        return(
            <div className="cellAction">
              <Link to="/cities/test" style={{textDecoration: "none"}}>
                <div className="viewButton">View</div>
              </Link>
                <div className="deleteButton" onClick={()=>handelDelete(params.row.id)}>Delete</div>
            </div>
        )
    }} ] ;

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Cities List
       <Link to="/cities/new" className="link">Add New</Link>
      </div>
      <DataGrid
        rows={data}
        columns={cityColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default CitiesTable ;