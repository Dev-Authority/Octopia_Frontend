import { React, useState } from 'react'
import { UseContextProvider } from '../../Context/StepperContext';
import Stepper from './Stepper';
import StepperControl from './StepperControl';

import BankDetails from './Steps/BankDetails';
import Documents from './Steps/Documents';
import OnlineStore from './Steps/OnlineStore';
import Final from './Steps/Final';
import { Button } from 'antd';


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
                return <BankDetails  />
            case 2:
                return <Documents />
            case 3:
                return <OnlineStore />
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
            <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl w-11/12 md:w-10/12">
                {/* Stepper */}
                <div className="horizontal container mt-5">
                    <div className="flex items-center justify-center mt-5 text-4xl">
                        <h1>{props.marketplaceName}</h1>
                    </div>
                    <Stepper steps={steps} currentStep={currentStep} />

                    <div className="py-10 ">
                        <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                    </div>
                </div>
                <Button onClick={handleValidation}>SUBMIT</Button>

                {/* navigation button */}
                {currentStep !== steps.length && (
                    <StepperControl
                        handleValidation={handleValidation}
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )}
            </div>
        </>
    )
}
export default WizardForm;