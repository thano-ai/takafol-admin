import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {userColumns, userRows} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";


const DataTable = () => {

  const [data,setData] = useState(userRows) ;

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
              <Link to="/users/test" style={{textDecoration: "none"}}>
                <div className="viewButton">View</div>
              </Link>
                <div className="deleteButton" onClick={()=>handelDelete(params.row.id)}>Delete</div>
            </div>
        )
    }} ] ;

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        User List
       <Link to="/users/new" className="link">Add New</Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable ;