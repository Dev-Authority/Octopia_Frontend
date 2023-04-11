import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Input, Button, Upload, Form } from 'antd';
import { BanksNames, Countries } from '../../../Constants/Banks'
import SelectInput from '../../Inputs/SelectInput';
import SimpleInput from '../../Inputs/SimpleInput';
import { SubscriptionData } from '../../../Redux/Reducers/RTKSubscription';

const BankDetails = () => {

  const [selectedData, setSelectedData] = useState([]);

  const handleData = (data, dataName) => {
    setSelectedData({ ...selectedData, [dataName]: data });
    console.log(selectedData);
  }

  const dispatch = useDispatch();

  const SubscriptionRTK = useSelector((state) => state.SubscriptionRTK.value);

  console.log("==========" + SubscriptionRTK.accountHolder)

  const bankDetailsDataToState = () => {
    dispatch(SubscriptionData(selectedData));
  }


  return (
    <>
      <div className='px-0 md:px-20 '>

        <div className='p-6 bg-gray-50 rounded-xl'>
          choose from old banks
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Bank Name *</span>
          <SelectInput dataArray={BanksNames} placeHolder="Bank Name" dataName="bankName" handleData={handleData} />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Account holder *</span>
          <SimpleInput placeHolder="Account holder" dataName="accountHolder" handleData={handleData} value={SubscriptionRTK.name} />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/5 text-xl '>Your bank address</span>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Country *</span>
          <SelectInput dataArray={Countries} placeHolder="Country" dataName="country" handleData={handleData} />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Street address *</span>
          <SimpleInput placeHolder="Street address" dataName="streetAdress" handleData={handleData} />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Address line 2 (optional)</span>
          <SimpleInput placeHolder="Address line 2 (optional)" dataName="streetAdress2" handleData={handleData} />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Postcode *</span>
          <SimpleInput placeHolder="Postcode" dataName="postalCode" handleData={handleData} />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>City *</span>
          <SimpleInput placeHolder="City" dataName="city" handleData={handleData} />
        </div>

        <div className='p-6 bg-gray-50 rounded-xl'>

          <div className="pb-6">
            <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>IBAN *</span>
            <SimpleInput placeHolder="IBAN" dataName="IBAN" handleData={handleData} />
          </div>

          <div className="py-6">
            <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>BIC / SWIFT *</span>
            <SimpleInput placeHolder="BIC / SWIFT" dataName="SWIFT" handleData={handleData} />
          </div>

        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/5 text-xl '>Document to provide</span>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full'>Sellers must submit their documents up to the size of 20 MB in overall, each individual document must not exceed 8 MB. Reminder: sellers can upload several documents (For instance: the front and the back of an ID) in one field.</span>
        </div>

        <div className="py-2 md:p-2 ">
          <span className='mr-6 m-2 w-full'>Please upload the documents below</span>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Bank account details *</span>
          <Upload
            accept=".pdf,.png,.doc,.jpeg"
          >
            <Button>Browse</Button>
          </Upload>
        </div>

        <Button onClick={bankDetailsDataToState}>Submit</Button>

      </div>
    </>
  )
}

export default BankDetails;