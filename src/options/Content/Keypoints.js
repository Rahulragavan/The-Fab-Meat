import React from 'react'
import "./Keypoints.css";
import { LuBox } from "react-icons/lu";
import { FiRefreshCcw } from "react-icons/fi";
import { BiShare } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
const keypoints = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='padding-key'>
            <div className='row'>
                <div className='col-lg-3 col-md-12  key-point'><LuBox size={30} className='icon-color'/>&nbsp;  FREE delivery available</div>
                <div className='col-lg-3 col-md-12  key-point'><FiRefreshCcw size={30} className='icon-color'/>&nbsp;  Delivered Fresh Everyday</div>
                <div className='col-lg-3 col-md-12 key-point'><BiShare size={30}  className='icon-color'/>&nbsp;  150 Quality Checks</div>
                <div className='col-lg-3 col-md-12  key-point'><FaRegStar size={30}  className='icon-color'/> &nbsp; Premium Produce</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default keypoints
