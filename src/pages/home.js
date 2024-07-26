import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [products, setProduct] = useState([])

    const {id}=useParams()
    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get("http://localhost:8080/api/allproducts");
        setProduct(result.data);
    };

    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:8080/api/delete/${id}`)
        loadProduct()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ProductName</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.description}</td>
                                    <td>

                                        <Link className='btn btn-outline-primary mx-2' to={`/editProduct/${product.id}`}>Edit</Link>

                                        <button className='btn btn-danger mx-2' onClick={()=>deleteUser(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))

                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
