import React from 'react';
import CustomButton from "./CustomButton"

const AiPicker = ( {prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
      className="aipicker-textare" 
      placeholder='Enter a prompt'
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)} 
      rows={5}
      />
      <div className='flex flex-wrap gap-10'>
        { generatingImg ? (
          <CustomButton 
          type="outline"
          title="Ask AI..."
          customStyle="text-xs"
          />
        ) : (
          <>
          <CustomButton 
          type="outline"
          title="AI Logo"
          handleClick={()=> handleSubmit("logo")}
          customStyle="text-xs"
          />
          <CustomButton 
          type="filled"
          title="AI Full"
          handleClick={()=> handleSubmit("full")}
          customStyle="text-xs"
          />
          </>
        )}
      </div>
    </div>
  )
}

export default AiPicker