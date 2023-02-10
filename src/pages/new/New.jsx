import React, { useState } from 'react' ;
import "./new.scss" ;
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { Link } from "react-router-dom";

const New = ({inputs, title , link}) =>{

    

    const [file,setFile] = useState("");
    return (
        <div className='new'>
            <Sidebar />
            <div className="newConainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={
                            file ? URL.createObjectURL(file) :
                             "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            } 
                             alt="avatar" />
                    </div>
                    <div className="right">
                        <form action="">
                            
                            {inputs.map((input)=>(
                                <div className="formInput" key={input.id}>
                                    <label htmlFor="">{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <div className="formInput">
                                <label htmlFor="file">Image <DriveFolderUploadIcon className='icon' /> </label>
                                <input type="file" id='file' style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                            </div>
                            <Link to={link} style={{textDecoration:"none"}}><button>Send</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New ;