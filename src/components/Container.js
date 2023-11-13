import React from "react"

const Container = ({ children }) => {
    return (
        <div className="max-w-7xl m-auto">
            {children}    
        </div>
    );
}

export default Container;