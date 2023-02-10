import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List =()=>{

    const rows = [
        {
            id: 1,
            name:"first donate",
            type:"demo data",
            amount:3,
            status:"good",
            usre:"demo data",
            citizen:"demo data" , 
        },

        {
            id: 2,
            name:"second donate",
            type:"demo data",
            amount:3,
            status:"check",
            usre:"demo data",
            citizen:"demo data" , 
        },

        {
            id: 3,
            name:"third donate",
            type:"demo data",
            amount:3,
            status:"bad",
            usre:"demo data",
            citizen:"demo data" , 
        },
    ];

    return(
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Serial Number</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Type</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Citizen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell className="tableCell" >{row.id}</TableCell>
              <TableCell className="tableCell" >{row.name}</TableCell>
              <TableCell className="tableCell" >{row.type}</TableCell>
              <TableCell className="tableCell" >{row.amount}</TableCell>
              <TableCell className="tableCell" >
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell" >{row.usre}</TableCell>
              <TableCell className="tableCell" >{row.citizen}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default List;