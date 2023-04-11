import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Upload } from 'antd';

const Documents = () => {
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
            <span className='mr-6 m-2 w-full md:w-2/5 text-xl '>Bank Statement</span>
          </div>

          <div className="py-6 md:p-6 ">
            <span className='mr-6 m-2 w-full md:w-4/12 inline-block'>Bank account details *</span>
            <Upload.Dragger
              multiple
              listType="picture"
            >
              Drag Files Here OR
              <br /><br />
              <Button>Browse</Button>
            </Upload.Dragger>
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
            >
              Drag Files Here OR
              <br /><br />
              <Button>Browse</Button>
            </Upload.Dragger>
          </div>
        </>

      </div>
    </>
  )
}

export default Documents;