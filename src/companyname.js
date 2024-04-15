import React, { useState, useEffect } from 'react';
import './companyname.css';

const CompanyName = () => {
    const [strokeColor, setStrokeColor] = useState('#000'); 

    
    const getRandomColor = () => {
        const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FF33F6']; 
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            const newColor = getRandomColor();
            setStrokeColor(newColor);
        }, 2000); 

        return () => clearInterval(intervalId); 
    }, []); 

    return (
        <div className="company-name" style={{ textStrokeColor: strokeColor }}>
            PixelPerfect Solutions
        </div>
    );
};

export default CompanyName;