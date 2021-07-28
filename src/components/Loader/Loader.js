import React from 'react'
import { BoxesLoader } from "react-awesome-loaders";

const Loader = () => {
    return (
        <div style={{display:"flex", justifyContent:"center",height:"100vh",alignItems:"center",backgroundColor:"#fff"}}>
            <BoxesLoader
              boxColor={"#2948b1"}
              style={{ marginBottom: "20px" }}
              desktopSize={"98px"}
              mobileSize={"50px"}
            />
          </div>
    )
}

export default Loader
