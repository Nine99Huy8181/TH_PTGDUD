import React, { useEffect, useState } from 'react'

export default function Statistics({st}) {
    const [img, setImg] = useState("../images/Button 1509.png");
    const [color, setColor] = useState("rgb(255 240 245)")

    useEffect(() => {
        if(st.name === "Profit"){
            setImg("../images/Button 1529.png")
            setColor("rgb(239 246 255)")
        }
        else if(st.name === "New customer"){
            setImg("../images/Button 1530.png");
            setColor("rgb(239 246 255)");
        }
    }, [])

  return (
    <div style={{backgroundColor: color, display: "flex",
     width: "30%", borderRadius: "10px", justifyContent: "space-between", padding: "10px 30px"}}>
        <div style={{fontFamily: "sans-serif"}}>
            <p style={{fontWeight: "bold", color: "black", fontSize: "18px"}}>{st.name}</p>
            {
                st.name === "New customer" ? 
                (<p style={{fontWeight: "bold", fontSize: "40px", margin: "10px 0px"}}>{st.value}</p>)
                : <p style={{fontWeight: "bold", fontSize: "40px", margin: "10px 0px"}}>${st.value}</p>
            }
            {
                st.percent > 0 ?
                (
                    <p  style={{display: "flex"}}>
                        <img src="../images/icons8-triangle-15.png" alt="" style={{marginRight: "4px", objectFit: "contain"}}/>
                        <span style={{color: "green", fontWeight: "bold"}}>{st.percent}% </span>
                        <span style={{color: "gray", marginLeft: "4px"}}>period of change</span>
                    </p>
                )
                :
                (
                    <p  style={{display: "flex"}}>
                        <img src="../images/icons8-triangle-arrow-15.png" alt="" style={{marginRight: "4px", objectFit: "contain"}}/>
                        <span style={{color: "red", fontWeight: "bold"}}>{st.percent}% </span>
                        <span style={{color: "gray", marginLeft: "4px"}}>period of change</span>
                    </p>
                )
            }
        </div>
        <div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}
