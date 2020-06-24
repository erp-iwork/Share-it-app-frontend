import React from 'react';

import './buttons.scss';

const FormButton = ({children, disabled}) => {
    return (
        <>
            <button 
                type="submit" 
                className="primary-button"
                disabled={disabled}>{ children }</button>
        </>
    );
}

export default FormButton;