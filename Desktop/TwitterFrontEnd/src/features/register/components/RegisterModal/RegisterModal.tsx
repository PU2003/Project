import React,{useState} from 'react';
import { Modal } from '../../../../components/Modal/Modal';
import "./RegisterModal.css";
import {RegistrationStepCounter} from '../RegistrationStepCounter/RegistrationStepCounter'
import {determineModalContent} from "../utils/RegisterModalUtil"
import { useDispatch,useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/Store';
import { decrementStep } from '../../../../redux/slice/RegisterSlice';

export const RegisterModal:React.FC = () => {

  const state = useSelector((state:RootState) => state.register);
  const dispatch:AppDispatch = useDispatch();

  const stepButtonClicked = () =>{
     dispatch(decrementStep());
  }


  return (

        <Modal>
           <div className='register-container'>
              <RegistrationStepCounter step = {state.step} ChangeStep={stepButtonClicked }/> 
              <div className='register-modal-content'>
              {determineModalContent(state.step)}
              </div>                                                         { /*Swap components based on the steps */}
           </div>
        </Modal>
      
    
  )
}