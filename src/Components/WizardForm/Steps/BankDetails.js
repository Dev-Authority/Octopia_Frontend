import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Input, Button, Upload, Form, message } from 'antd';
import { BanksNames, Countries } from '../../../Constants/Banks';
import BankValidation from '../Validation/BankValidation'
import SelectInput from '../../Inputs/SelectInput';
import SimpleInput from '../../Inputs/SimpleInput';
import { SubscriptionData } from '../../../Redux/Reducers/RTKSubscription';

const BankDetails = (props) => {

  const [selectedData, setSelectedData] = useState(
    {
      IBAN: "",
      accountHolder: "",
      bankName: "",
      city: "",
      country: "",
      postalCode: "",
      streetAdress: "",
      streetAdress2: "",
      SWIFT: "",
      bankDetailsFile:""
    });
  const [error, setError] = useState([]);
  const [fileState, setFileState] = useState([]);

  const handleData = (data, dataName) => {
    setSelectedData({ ...selectedData, [dataName]: data });
    console.log(selectedData);
  }

  // const dispatch = useDispatch();

  // const SubscriptionRTK = useSelector((state) => state.SubscriptionRTK.value);

  // console.log("==========" + SubscriptionRTK.accountHolder)

  // const bankDetailsDataToState = () => {
  //   dispatch(SubscriptionData(selectedData));
  // }

  const handleValidation = () => {
    setError(BankValidation(selectedData));
    popUpErrors();
    if (error.bankName === "" && error.accountHolder === "" && error.country === "" && error.streetAdress === "" && error.postalCode === "" && error.city === "" && error.IBAN === "" && error.SWIFT === "" && error.bankDetailsFile === "") { 
      props.handleClick("next"); 
    }

  }

  const [messageApi, contextHolder] = message.useMessage();

  const popUpErrors = () => {
    messageApi
      .open({
        type: 'loading',
        content: "loading",
        duration: 1.5,
      })
      .then(() => error.bankName ? message.error(error.bankName, 1) : null)
      .then(() => error.accountHolder ? message.error(error.accountHolder, 1) : null)
      .then(() => error.country ? message.error(error.country, 1) : null)
      .then(() => error.streetAdress ? message.error(error.streetAdress, 1) : null)
      .then(() => error.postalCode ? message.error(error.postalCode, 1) : null)
      .then(() => error.city ? message.error(error.city, 1) : null)
      .then(() => error.IBAN ? message.error(error.IBAN, 1) : null)
      .then(() => error.bankDetailsFile ? message.error(error.bankDetailsFile, 1) : null)
      .then(() => error.SWIFT ? message.error(error.SWIFT, 1) : null);
  };

  console.log(error)


  return (
    <>
    {contextHolder}
      <div className='px-0 md:px-20 '>

        <div className='p-6 bg-gray-50 rounded-xl'>
          choose from old banks
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Bank Name *</span>
          <SelectInput dataArray={BanksNames} placeHolder="Bank Name" dataName="bankName" handleData={handleData}/>
          <p className='text-red-600 ml-6 md:ml-72'>{error.bankName}</p>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Account holder *</span>
          <SimpleInput placeHolder="Account holder" dataName="accountHolder" handleData={handleData} type="text" />
          {/* data-testid="accountHolder" */}
          <p className='text-red-600 ml-6 md:ml-72'>{error.accountHolder}</p>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/5 text-xl '>Your bank address</span>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Country *</span>
          <SelectInput dataArray={Countries} placeHolder="Country" dataName="country" handleData={handleData} />
          <p className='text-red-600 ml-6 md:ml-72'>{error.country}</p>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Street address *</span>
          <SimpleInput placeHolder="Street address" dataName="streetAdress" handleData={handleData} type="text" />
          {/* data-testid="streetAdress" */}
          <p className='text-red-600 ml-6 md:ml-72'>{error.streetAdress}</p>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Address line 2 (optional)</span>
          <SimpleInput placeHolder="Address line 2 (optional)" dataName="streetAdress2" handleData={handleData} type="text" />
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>Postcode *</span>
          <SimpleInput placeHolder="Postcode" dataName="postalCode" handleData={handleData} type="number" />
          <p className='text-red-600 ml-6 md:ml-72'>{error.postalCode}</p>
        </div>

        <div className="py-6 md:p-6 ">
          <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>City *</span>
          <SimpleInput placeHolder="City" dataName="city" handleData={handleData} type="text" />
          <p className='text-red-600 ml-6 md:ml-72'>{error.city}</p>
        </div>

        <div className='p-6 bg-gray-50 rounded-xl'>

          <div className="pb-6">
            <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>IBAN *</span>
            <SimpleInput placeHolder="IBAN" dataName="IBAN" handleData={handleData} type="text" />
            <p className='text-red-600 ml-6 md:ml-72'>{error.IBAN}</p>
          </div>

          <div className="py-6">
            <span className='mr-6 m-2 w-full md:w-2/12 inline-block'>BIC / SWIFT *</span>
            <SimpleInput placeHolder="BIC / SWIFT" dataName="SWIFT" handleData={handleData} type="text" />
            <p className='text-red-600 ml-6 md:ml-72'>{error.SWIFT}</p>
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
            // maxCount={1}
            onChange={(e)=>{
              setFileState(e);
              handleData(e, "bankDetailsFile")
            }}
          >
            <Button>Browse</Button>
          </Upload>
          <p className='text-red-600 ml-6 md:ml-72'>{error.bankDetailsFile}</p>
        </div>

        <div className="container mt-4 mb-8 flex justify-around">
          <button
            onClick={() => {
              props.handleClick();
            }}
            className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 ${props.currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
              }`}
          >
            Back
          </button>

          <button
            onClick={() => {
              handleValidation();
            }}
            className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
          >
            {props.currentStep === props.steps.length - 1 ? "Confirm" : "Next"}
          </button>
        </div>

      </div>
    </>
  )
}

export default BankDetails;