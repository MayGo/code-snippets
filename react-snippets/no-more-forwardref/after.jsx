import React from 'react';

export const CustomInput = (props) => {
    return <input type="text" {...props} />;
};

export const CustomButton = ({ children, ...buttonProps }) => {
    return <button {...buttonProps}>{children}</button>;
};
