import React from 'react'

const Test = React.forwardRef((props , ref) => {
    console.log(ref)
    return (
        <div>
             <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea ref = {ref} onChange ={(e)=> {props.onChange(e)}} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    )
});

export default Test;
