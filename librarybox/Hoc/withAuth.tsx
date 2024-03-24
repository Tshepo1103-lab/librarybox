'use client'
import React from "react";

const WithAuth = (WrappedComponent: React.FC<any>) => {
    // Replace this with your actual authentication logic
    const haveToken = localStorage.getItem("token") !== null; 

    // Define the component to render based on the authentication status
    const AuthComponent: React.FC<any> = (props) => {
        if (haveToken) {
            // If authenticated, render the wrapped component with props
            return <WrappedComponent {...props} />;
        } else {
            // If not authenticated, render a message or a redirection
            return <h2>You are not authorized to view this page.</h2>;
        }
    };

    return AuthComponent;
};

export default WithAuth;
