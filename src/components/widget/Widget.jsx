import "./widget.scss" ;
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MedicationIcon from '@mui/icons-material/Medication';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { Link } from "react-router-dom";

const Widget = ({ type })=>{

    let data ;

    const amount = 100 ;
    const diff = "20%" ;

    switch(type){
        case "user":
            data={
                title:"USERS",
                link:<Link to="/users" style={{textDecoration:"none" , color:"#2d3436"}}>see all users</Link>,
                icon:
                (
                <PersonIcon
                 className="icon"
                  style={{
                    color:"#d63031",
                    backgroundColor: "#fab1a0",
                }}
                 />)
            };
            break;
            
            case "city":
            data={
                title:"CITIES",
                link:<Link to="/cities" style={{textDecoration:"none" , color:"#2d3436"}}>see all cities</Link>,
                icon:(
                <LocationCityIcon
                 className="icon"
                 style={{
                    color:"#e17055",
                    backgroundColor: "#ffeaa7",
                }}
                  />)
            };
            break;

            case "servicePoint":
            data={
                title:"SERVICE POINTS",
                link:<Link to="/" style={{textDecoration:"none" , color:"#2d3436"}}>see all sirvice points</Link>,
                icon:(
                <StoreOutlinedIcon
                 className="icon"
                 style={{
                    color:"#00b894",
                    backgroundColor: "#55efc4",
                }}
                  />)
            };

            break;
            case "drug":
            data={
                title:"DRUGS",
                link:<Link to="/drugs" style={{textDecoration:"none" , color:"#2d3436"}}>see all drugs</Link>,
                icon:(
                <MedicationIcon
                 className="icon"
                 style={{
                    color:"#0984e3",
                    backgroundColor: "#74b9ff",
                }}
                  />)
            };
            break;

        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{amount}</span>
                <span className="link">{data.link}</span>
            </div>

            <div className="right">
                <div className="precentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;