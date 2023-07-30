import React, { useState, useEffect } from 'react';
import { message , Button, Upload } from 'antd';
import DocumentValidation from "../Validation/DocumentValidation"

const Documents = (props) => {

  const [selectedData, setSelectedData] = useState(
    {
      bankDetailsFile: "",
      commercialRegisterFile: "",
    });
  const [error, setError] = useState([]);
  const [fileState, setFileState] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleData = (data, dataName) => {
    setSelectedData({ ...selectedData, [dataName]: data });
    console.log(selectedData);
  }

  

  const handleValidation = () => {
    setClicked(true);
    setError(DocumentValidation(selectedData));
    popUpErrors()
    if (error.bankDetailsFile === "" && error.commercialRegisterFile === "") { 
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
      .then(() => error.bankDetailsFile ? message.error(error.bankDetailsFile, 1) : null)
      .then(() => error.commercialRegisterFile ? message.error(error.commercialRegisterFile, 1) : null);
  };

  useEffect(() => {
    if (clicked) {
      setError(DocumentValidation(selectedData));
    }
  });

  return (
    <>
    {contextHolder}
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
            <span className='mr-6 m-2 w-full md:w-2/5 text-xl '>Bank Statement</span>
          </div>

          <div className="py-6 md:p-6 ">
            <span className='mr-6 m-2 w-full md:w-4/12 inline-block'>Bank account details *</span>
            <Upload.Dragger
              multiple
              listType="picture"
              onChange={(e) => {
                setFileState(e);
                handleData(e, "bankDetailsFile")
              }}
            >
              Drag Files Here OR
              <br /><br />
              <Button>Browse</Button>
            </Upload.Dragger>
            <p className='text-red-600 ml-6 md:ml-72'>{error.bankDetailsFile}</p>
          </div>
        </>

        <>
          <div className="py-6 md:p-6 ">
            <span className='mr-6 m-2 w-full md:w-2/5 text-xl '>Commercial Register</span>
          </div>
          <div className="py-6 md:p-6 ">
            <span className='mr-6 m-2 w-full md:w-4/12 inline-block'>Commercial Register details *</span>
            <Upload.Dragger
              multiple
              listType="picture"
              onChange={(e) => {
                setFileState(e);
                handleData(e, "commercialRegisterFile")
              }}
            >
              Drag Files Here OR
              <br /><br />
              <Button>Browse</Button>
            </Upload.Dragger>
            <p className='text-red-600 ml-6 md:ml-72'>{error.commercialRegisterFile}</p>
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

export default Documents;