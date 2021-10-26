import React from 'react';
import style from './Button.module.scss'

const Button = ({text, onClick}) => {
    return (
        <div>
            <button className={style.btn} onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button;