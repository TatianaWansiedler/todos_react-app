import React from 'react';

const Select = ({data, name}) => {

    return (
        <select name={name}  defaultValue={data[0].value} required>
            {
                data.map(({id, text, value, disabled}) => 
                    <option 
                        key={id} 
                        value={value}
                        disabled={disabled}
                    >
                        {text}
                    </option>)
            }
        </select>
    );
};

export default Select;
