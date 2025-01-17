import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EdtiProduct() {

    let navigate=useNavigate()

    const {id}=useParams()

    const [product, setProduct] = useState({
        name: "",
        price: "",
        quantity: "",
        description:""
    })

    const { name, price, quantity, description } = product

    const onInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    };

    useEffect(()=>{
        loadProduct()
    }, []);

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/product/update/${id}`,product);
        navigate("/")
    };

    const loadProduct=async ()=>{
        const result=await axios.get(`http://localhost:8080/product/fetch/${id}`);
        setProduct(result.data)
    }



    return (
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit Product</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='md-3'>
                        <label htmlFor='Name' className='form-lable'>Product Name</label>
                        <input type={"text"} className='form-control' placeholder='Enter product name' name='name' value={name} onChange={(e) => onInputChange(e)} required></input>
                    </div>

                    <div className='md-3'>
                        <label htmlFor='Price' className='form-lable'>Price</label>
                        <input type={"number"} className='form-control' placeholder='Enter Price' name='price' value={price} onChange={(e) => onInputChange(e)} required></input>
                    </div>

                    <div className='md-3'>
                        <label htmlFor='Quantity' className='form-lable'>Quantity</label>
                        <input type={"number"} className='form-control' placeholder='Enter your quantity' name='quantity' value={quantity} onChange={(e) => onInputChange(e)} required></input>
                    </div>

                    <div className='md-3'>
                        <label htmlFor='Description' className='form-lable'>Description</label>
                        <input type={"text"} className='form-control' placeholder='Enter your description' name='description' value={description} onChange={(e) => onInputChange(e)} required></input>
                    </div>

                    <button type='submit' className='btn btn-outline-primary mt-2'>Submit</button>
                    <Link className='btn btn-outline-danger mt-2 mx-2' to={"/"}>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
    )
}
