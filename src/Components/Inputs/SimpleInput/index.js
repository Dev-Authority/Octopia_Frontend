import React from 'react';
import { Input } from 'antd';

const SimpleInput = (props) => {
    return (
        <>
            <Input
                data-testid="InputSimple"
                placeholder={props.placeHolder}
                type={props.type}
                className="w-full md:w-1/2"
                onChange={(e) => props.handleData(e.target.value, props.dataName)}

            />
            {/* <input 
                placeholder={props.placeHolder}
                type={props.type}
                className="w-full md:w-1/2 border-[2px]	p-1 rounded-md "
                onChange={(e) => props.handleData(e.target.value, props.dataName)}
                
            /> */}
        </>
    )
}

export default SimpleInput;