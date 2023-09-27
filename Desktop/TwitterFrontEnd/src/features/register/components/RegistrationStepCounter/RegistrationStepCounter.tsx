import React from 'react';
import { displayIcon,iconClass } from '../utils/RegisterStepUtils';
import "./RegistrationStepCounter.css";

interface RegisterStepProps{
    step:number;
    ChangeStep():void;
}

export const RegistrationStepCounter:React.FC<RegisterStepProps> = ({step,ChangeStep}) => {
  return (
    <div className='reg-step-counter-container'>
        <div className={iconClass(step)} onClick={ChangeStep}>
            {displayIcon(step)}
        </div>
        <span className='reg-step-number'> Step {step} of 6</span>
    </div>
  )
}