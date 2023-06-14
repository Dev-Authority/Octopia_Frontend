import { React, useState } from 'react'
import { UseContextProvider } from '../../Context/StepperContext';
import Stepper from './Stepper';
import StepperControl from './StepperControl';

import BankDetails from './Steps/BankDetails';
import Documents from './Steps/Documents';
import OnlineStore from './Steps/OnlineStore';
import Final from './Steps/Final';
import { Button } from 'antd';
import BackButton from '../BackButton/BackButton';
import { Link } from 'react-router-dom';


const WizardForm = (props) => {

    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Bank Details",
        "Documents",
        "Your Online Store",
        "complete"
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return currentStep !== steps.length && (
                    <BankDetails
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )
            case 2:
                return currentStep !== steps.length && (
                    <Documents
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )
            case 3:
                return currentStep !== steps.length && (
                    <OnlineStore
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )
            case 4:
                return <Final />
            default:
        }
    }

    const handleValidation = () => {
        console.log("hhhhhhhhhhhhhhh")
    }

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <>
            <div className='pl-8 pt-8'>
                <Link  to={"/marketplace"}>
                    <BackButton />
                </Link>
            </div>

            <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl w-11/12 md:w-10/12">

                {/* Stepper */}
                <div className="horizontal container mt-5">
                    <div className="flex items-center justify-center mt-5 text-4xl">
                        <h1>{props.marketplaceName}</h1>
                    </div>
                    <Stepper steps={steps} currentStep={currentStep} />

                    <div className="py-10 ">
                        <UseContextProvider>
                            {displayStep(currentStep)}
                        </UseContextProvider>
                    </div>
                </div>

                {/* navigation button */}
                {/* {currentStep !== steps.length && (
                    <StepperControl
                        handleValidation={handleValidation}
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )} */}
            </div>
        </>
    )
}
export default WizardForm;