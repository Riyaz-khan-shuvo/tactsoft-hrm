import React from 'react';

const FrontendLayout = ({ children }) => {
    return (
        <div>
            <h1>This is Main Content </h1>
            {children}
            <footer>Footer </footer>
        </div>
    );
};

export default FrontendLayout;