import React from 'react';

export const CustomInput = React.forwardRef((props, ref) => {
    return <input type="text" ref={ref} {...props} />;
});

export const CustomButton = React.forwardRef(({ children, ...buttonProps }, ref) => {
    return (
        <button ref={ref} {...buttonProps}>
            {children}
        </button>
    );
});
