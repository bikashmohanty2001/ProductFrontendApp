import React from 'react'
import { Link } from 'react-router-dom'
 
 export default function Navbar() {
   return (
     <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"} href="#">
                    Full Stack Application 
                    </Link>
               
                <Link className="btn btn-outline-light ms-auto me-2" to={"/addProduct"}> Add Product </Link>
                <Link className="btn btn-outline-light" to={"/allProduct"}> All Product </Link>
            </div>
        </nav>
     </div>
   )
 }
 