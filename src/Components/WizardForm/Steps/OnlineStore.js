import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Upload } from 'antd';

const OnlineStore = () => {
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
            >
              Drag Files Here OR
              <br /><br />
              <Button>Browse</Button>
            </Upload.Dragger>
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

export default OnlineStore;