import React from 'react';

const UIResponse = (props) => {

        if(props.result.code==='Success'){
            return (
                <div><h3>Success Message </h3>
                {props.result.code} 
                {props.result.status} 
                {props.result.statusMessage}
                </div>
                );
        }else{
            return (
                <div><h3>Error </h3>
                {props.result.code} 
                {props.result.status} 
                {props.result.statusMessage}
                </div>
                );
        }

      
  

}
export default UIResponse ;
