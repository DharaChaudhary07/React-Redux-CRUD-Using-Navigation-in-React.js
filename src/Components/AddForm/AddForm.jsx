import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { employeedata } from '../../Service/Action/employeAction';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {


    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        age: '',
        phoneNumber: '',
        password: '',
        city: '',
        address: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();


        dispatch(employeedata(formInput));

        navigate('/view-data');

        setFormInput({
            name: '',
            email: '',
            age: '',
            phoneNumber: '',
            password: '',
            city: '',
            address: '',
        });
    };

    return (
        <>
            <div className="container" style={{ display: "block", width: 1200, padding: 30 }}>
                <h2 className="text-center mb-5">Employee Form</h2>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6 mb-2">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" onChange={handleChange} value={formInput.name} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="number" className="form-control" id="age" name="age" placeholder="Enter Age" onChange={handleChange} value={formInput.age} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" onChange={handleChange} value={formInput.email} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" onChange={handleChange} value={formInput.phoneNumber} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" onChange={handleChange} value={formInput.password} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" name="city" placeholder="Enter City" onChange={handleChange} value={formInput.city} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" name="address" placeholder="1234 Main St" onChange={handleChange} value={formInput.address} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EmployeeForm;