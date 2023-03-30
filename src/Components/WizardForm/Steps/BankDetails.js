import React, { useState } from 'react';
import { Select, Input } from 'antd';
import { BanksNames } from '../../../Constants/Banks'

const BankDetails = () => {

  const [selectedBankName, setSelectedBankName] = useState([]);
  const [accountHolderName, setAccountHolderName] = useState([]);


  console.log(selectedBankName + "-------" + accountHolderName);
  return (
    <>
      <div className='px-0 md:px-20 '>

        <div className='p-6 bg-gray-50 rounded-xl'>
          choose from old banks
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Bank Name *</span>
          <Select
            showSearch
            value={selectedBankName}
            className="w-full md:w-1/2"
            placeholder="Bank Name"
            onChange={(value) => {
              setSelectedBankName(value);
            }}
            options={BanksNames?.map((type) => {
              return {
                label: `${type}`,
                value: type,
              };
            })}
          >
          </Select>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Account holder *</span>
          <Input
            placeholder="Account holder"
            className="w-full md:w-1/2"
            onChange={(e) => {
              setAccountHolderName(e.target.value);
            }} />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/5 text-xl '>Your bank address</span>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Country *</span>
          <Select
            showSearch
            // value={" "}
            className="w-full md:w-1/2"
            placeholder="Country"
            onChange={(value) => {
              console.log(value);
            }}
            options={BanksNames?.map((type) => {
              return {
                label: `${type}`,
                value: type,
              };
            })}
          >
          </Select>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Street address *</span>
          <Input
            placeholder="Street address"
            className="w-full md:w-1/2"
            onChange={(e) => {
              console.log(e.target.value);
            }} />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Address line 2 (optional)</span>
          <Input
            placeholder="Address line 2 (optional)"
            className="w-full md:w-1/2"
            onChange={(e) => {
              console.log(e.target.value);
            }} />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Postcode *</span>
          <Input
            placeholder="Postcode"
            className="w-full md:w-1/2"
            onChange={(e) => {
              console.log(e.target.value);
            }} />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>City *</span>
          <Input
            placeholder="City"
            className="w-full md:w-1/2"
            onChange={(e) => {
              console.log(e.target.value);
            }} />
        </div>

        <div className='p-6 bg-gray-50 rounded-xl'>

          <div className="pb-6">
            <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>IBAN *</span>
            <Input
              placeholder="IBAN"
              className="w-full md:w-1/2"
              onChange={(e) => {
                console.log(e.target.value);
              }} />
          </div>

          <div className="py-6">
            <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>BIC / SWIFT *</span>
            <Input
              placeholder="BIC / SWIFT"
              className="w-full md:w-1/2"
              onChange={(e) => {
                console.log(e.target.value);
              }} />
          </div>

        </div>

      </div>
    </>
  )
}

export default BankDetails;