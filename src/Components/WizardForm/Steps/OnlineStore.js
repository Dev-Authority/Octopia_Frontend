import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Upload } from 'antd';
import StoreValidation from '../Validation/StoreValidation'

const OnlineStore = (props) => {

  const [selectedData, setSelectedData] = useState(
    {
      storeLogoFile: "",
      storeBannerFile: "",
    });
  const [error, setError] = useState([]);
  const [fileState, setFileState] = useState([]);

  const handleData = (data, dataName) => {
    setSelectedData({ ...selectedData, [dataName]: data });
    console.log(selectedData);
  }

  const handleValidation = () => {
    setError(StoreValidation(selectedData));
    if (error.storeLogoFile === "" && error.storeBannerFile === "") { 
      props.handleClick("next"); 
    }
  }

  return (
    <>
      <div className='px-0 md:px-20 '>

        <>
          <div className="py-6 md:p-6 ">
            <span className='mr-6 m-2 w-full'>Sellers must submit their documents up to the size of 20 MB in overall, each individual document must not exceed 8 MB. Reminder: sellers can upload several documents (For instance: the front and the back of an ID) in one field.</span>
          </div>

          <div className="py-2 md:p-2 ">
            <span className='mr-6 m-2 w-full'>Please upload the documents below</span>
          </div>
        </>

        <>
          <div className="py-6 md:p-6 ">
            <span className='mr-6 m-2 w-full md:w-2/5 text-xl '>Store Logo</span>
          </div>

          <div className="py-6 md:p-6 ">
            <span className='mr-6 m-2 w-full md:w-4/12 inline-block'>Store logo (512*512)px *</span>
            <Upload.Dragger
              listType="picture"
              onChange={(e) => {
                setFileState(e);
                handleData(e, "storeLogoFile")
              }}
            >
              Drag Files Here OR
              <br /><br />
              <Button>Browse</Button>
            </Upload.Dragger>
            <p className='text-red-600 ml-6 md:ml-72'>{error.storeLogoFile}</p>
          </div>
        </>

        <>
          <div className="py-6 md:p-6 ">
            <span className='mr-6 m-2 w-full md:w-2/5 text-xl '>Store Banner</span>
          </div>

          <div className="py-6 md:p-6 ">
            <span className='mr-6 m-2 w-full md:w-4/12 inline-block'>Store banner (2560*1440)px *</span>
            <Upload.Dragger
              listType="picture"
              onChange={(e) => {
                setFileState(e);
                handleData(e, "storeBannerFile")
              }}
            >
              Drag Files Here OR
              <br /><br />
              <Button>Browse</Button>
            </Upload.Dragger>
            <p className='text-red-600 ml-6 md:ml-72'>{error.storeBannerFile}</p>
          </div>
        </>

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
              handleValidation();;
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

export default OnlineStore;