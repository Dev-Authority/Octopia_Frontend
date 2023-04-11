import React from 'react';
import { Input } from 'antd';

const SimpleInput = (props) => {
    return (
        <>
            <Input
                placeholder={props.placeHolder}
                className="w-full md:w-1/2"
                onChange={(e) => props.handleData(e.target.value, props.dataName)}

            />
        </>
    )
}

export default SimpleInput;