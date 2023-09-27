import React,{useState,useEffect} from 'react'
import { Checkbox } from '../../../../components/Checkbox/Checkbox'
import { DropDown } from '../../../../components/DropDown/DropDown'
import ValidatedTextInput from '../../../../components/ValidatedInput/ValidatedTextInput'
import { countryCodeDropDown } from '../utils/RegisterModalUtil'
import { validatePhone } from '../../../../services/Validators'
import { StyledNextButton } from '../RegisterNextButton/RegisterNextButton'

export const RegisterFormFour:React.FC = () => {

   const [phoneCode,setPhoneCode] = useState<string>("+1")
   const [phoneNumber,setPhoneNumber] = useState<string>("");
   const [validNumber,setValidNumber] = useState<boolean>(true);

   const changeCode = (e:React.ChangeEvent<HTMLSelectElement>) => {
      setPhoneCode(e.target.value.split(" ")[0]);
   }

   const changePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
   }

   useEffect(() => {
      console.log(phoneCode,phoneNumber);
      if(phoneNumber){
         setValidNumber(validatePhone(phoneNumber));
      }
   },[phoneCode,phoneNumber])

  return (
     <div className='reg-step-four-container'>
        <div className='reg-step-four-content'>
            <h1>Add a phone number</h1>
            <p>Enter the phone number you would like to associate with your Fwitter account.You won't get a verification code sent here.</p>
            <div className='reg-step-four-inputs'>
               <DropDown
                  content={countryCodeDropDown}
                  change={changeCode}
                  label= {"Country Code"}
                  defaultValue={"United States +1"}
               />
               <ValidatedTextInput 
                   valid={true}
                   name={"phoneNumber"}
                   label={"Your Phone Number"}
                   changeValue={changePhoneNumber}
               />
               {validNumber ? <></> : <p className='reg-step-four-invalid'>Please enter a valid 10 digit number</p>}
            </div>
            <div className='reg-step-four-check-group'>
               <p>Let people who have your phone number find and connect with you on Fwitter.<span 
               className='reg-step-four-link'>Learn more </span>.</p>
               <Checkbox/>
            </div>
            <div className='reg-step-four-check-group'>
               <p>Let Fwitter use your phone number to personalize our services, including ads (if permitted by your Ads preferences).if you don't enable 
                  this,Fwitter will still use your phone numbers for purposes including account security,spam,fraud,and abuse prevention.<span 
                  className='reg-step-four-link'>See our Privacy Policy for more information. </span>
               </p>
               <Checkbox/>
            </div>
            <StyledNextButton
               disabled={(phoneNumber && validNumber) ? false:true}
               color={'black'}
               active={(phoneNumber && validNumber) ? true:false}
               onClick={()=>console.log("update phone on db")}          
            >UpdateNumber</StyledNextButton>

        </div>
      
     </div>
  )
}


