import "./sidebar.scss" ;
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MedicationIcon from '@mui/icons-material/Medication';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from "react-router-dom";

const Sidebar = ()=> {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">Takafol Admin</span>
                </Link>
                
            </div>
            <hr></hr>

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <li>
                            <DashboardIcon  className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration: "none"}}>
                        <li>
                            <PersonIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    
                    <Link to="/cities" style={{textDecoration: "none"}}>
                        <li>
                            <LocationCityIcon className="icon" />
                            <span>Cities</span>
                        </li>
                    </Link>
                    {/* <li>
                        <span>Directorates</span>
                    </li> */}
                    <Link to="/drugs" style={{textDecoration: "none"}}>
                        <li>
                            <MedicationIcon className="icon" />
                            <span>Drugs</span>
                        </li>
                    </Link>

                    <p className="title">USER</p>
                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar ;