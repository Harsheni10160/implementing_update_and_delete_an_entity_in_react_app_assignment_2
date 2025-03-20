import React from "react";
const Item = ({ item, onDelete }) => {
    return (
        <div className="item">
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>Status: {item.status}</p>
            </div>
            <button 
                className="delete-button"
                onClick={() => onDelete(item.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Item;