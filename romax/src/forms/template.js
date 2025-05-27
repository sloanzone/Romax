import React from "react"
import { useState } from 'react';
import * as Realm from "realm-web"

function Template() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data', formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Phone:
                <input type ="text" name="phone" value={formData.phone} onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
            </div>
        </form>
        )

}
export default Template;