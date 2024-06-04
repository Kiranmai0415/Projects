import React, { useState } from 'react';
import './Drag-n-drop.css'; // Import your CSS file

function DragAndDrop() {
    const [isFilled, setIsFilled] = useState(false);

    const handleDragStart = (e) => {
        e.target.className += ' hold';
        setTimeout(() => {
            e.target.className = 'invisible';
            setIsFilled(true);
        }, 0);
    };

    const handleDragEnd = (e) => {
        e.target.className = 'fill';
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.target.className += ' hovered';
    };

    const handleDragLeave = (e) => {
        e.target.className = 'empty';
    };

    const handleDragDrop = (e) => {
        e.target.className = 'empty';
        e.target.appendChild(document.querySelector('.fill'));
        setIsFilled(false);
    };

    return (
        <div className="container">
            <div
                className={`fill ${isFilled ? 'hold' : ''}`}
                draggable="true"
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                Drag me
            </div>
            <div
                className="empty"
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDragDrop}
            ></div>
        </div>
    );
}

export default DragAndDrop;