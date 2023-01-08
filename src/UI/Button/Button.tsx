import React from 'react';
import cl from './Button.module.css';

interface ButtonProps extends React.PropsWithChildren {
    onClick?: (e?: any) => void
    style?: any
};


const Button: React.FC<ButtonProps> = ({children, onClick, style}) => {

    return (
        <button style={style} className={cl.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;