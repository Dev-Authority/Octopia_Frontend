import React from 'react'
import { Select, Button } from 'antd';

const SelectInput = (props) => {
    
    return (
        <>
            <Select
                showSearch
                className="w-full md:w-1/2"
                placeholder={props.placeHolder}
                onChange={(value) => props.handleData(value, props.dataName)}
                options={props.dataArray.map((value) => {
                    return {
                        label: `${value}`,
                        value: value,
                    };
                })}
            >
            </Select>
        </>
    )
}

export default SelectInput;