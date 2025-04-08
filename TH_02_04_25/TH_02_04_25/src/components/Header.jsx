import React from 'react'

export default function Header({label}) {
  return (
    <>
        <p style={{color: "#ec4d84", fontWeight: "bold", fontSize: "25px", fontFamily: "sans-serif"}}>{label}</p>
        <div id='content-header'>
            <input type="text" name="" id="search" placeholder='Search...'/>
            <img src="../images/Bell 1.png" alt="" />
            <img src="../images/Question 1.png" alt="" />
            <img src="../images/Avatar (1).png" alt=""/>
        </div>
    </>
  )
}
