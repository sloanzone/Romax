import React from "react"
import { useState } from 'react';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data', formData);
        
        try {
            const response = await fetch('http://localhost:5050/register', {
                method: 'POST',
                headers: {
            'Content-Type': 'application/json'
          },
                body: JSON.stringify(formData)
                });

        if (!response.ok) {
            throw new Error('Connection not working');
        }
        

        const data = await response.json();
        console.log('Sucess:', data);
        alert('Form submitted successfully!');

        } catch (error) {
            console.error('Error:', error);
            alert('Submission failed');
        }
    };
    return (
        <form onSubmit={handleSubmit} style={{maxWidth: '400px'}}>
            <div style={{ marginBottom: '10px'}}>
            <label>
                Name:
                <input
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                style={{ width: '100%'}} />
            </label>
            </div>
            <div style={{ marginBottom: '10px'}}>
            <label>
                Email:
                <input 
                type="text" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                style={{ width: '100%'}}/>
            </label>
            </div>
            <div style={{ marginBottom: '10px'}}>
            <label>
                Phone:
                <input 
                type ="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                style={{ width: '100%'}}
                />
            </label>
            </div>
            <div style={{ marginBottom: '10px'}}>
            <button type="submit">Submit</button>
            </div>
        </form>
        )

}

export default Template;