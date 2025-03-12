import { forwardRef } from 'react';

export const CustomInput = forwardRef((props, ref) => {
    return <input type="text" ref={ref} {...props} />;
});

export const CustomButton = forwardRef(({ children, ...buttonProps }, ref) => {
    return (
        <button ref={ref} {...buttonProps}>
            {children}
        </button>
    );
});
