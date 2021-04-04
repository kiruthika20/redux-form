import React from 'react';

const Input=({
    placeholder="First Name",
    input,
    meta,
    name,
    disabled,
    allowPattern=null
    })=>{
        console.log(meta);
        const onChange=(event)=>{
            if(allowPattern){
                const rejection= new RegExp(allowPattern)
                if(!rejection.test(event.target.value)){
                    event.target.value=input.value 
                }
                
            }input.onChange(event)
        }
    
  if(disabled){
    return <div>{input.disabled}</div>
  } else {
    return (
        <>
      <input value={input.value} onChange={onChange} placeholder={placeholder}/>
      {meta.submitFailed && <span>{meta.error}</span>}
      </>
    )
  }
}
export default Input;