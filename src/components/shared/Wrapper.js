import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Wrapper
