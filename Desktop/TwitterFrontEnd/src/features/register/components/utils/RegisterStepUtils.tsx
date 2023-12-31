import { JsxElement } from "typescript"
import { ArrowBackRounded, ClearRounded} from '@mui/icons-material'
import React from "react";

export const displayIcon = (step:number):JSX.Element =>{

    switch(step){
       
        case 1:
            return <ClearRounded sx={{fontSize:25}} />;
        
        case 2:
            return <ArrowBackRounded sx={{fontSize:25}} />;

        case 3:
            return <ArrowBackRounded sx={{fontSize:25}} />;
            
        case 4:
            return <></>;
        
        case 5:
            return <ArrowBackRounded sx={{fontSize:25}} />;

        case 6:
            return <></>;
            
        default:
            return <></>;    
    }

} 

export const iconClass = (step:number):string=>{
    if(step === 4 || step === 6){
        return "reg-step-counter-btn-disabled";
    }
    return "reg-step-counter-btn"
}