import "./featured.scss" ;
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar" ;
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured =()=>{
    return(
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Donations</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>

            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>
                <p className="title">Total Donations</p>
                <p className="amount">500</p>
                <p className="desc">All Donations Recived in this Mounth</p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">12000</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon fontSize="small" />
                            <div className="resultAmount">12000</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon fontSize="small" />
                            <div className="resultAmount">12000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;