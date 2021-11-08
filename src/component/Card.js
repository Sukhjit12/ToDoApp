import React from "react";

const Card = (props)=>{
    const {resultedArray} = props;
  return(
<>
 {/* //  ============== Modal ============== */}

 <div className="container">
 <hr/>
 <section>
<h2 className="my-4  fw-bolder">{ resultedArray.length===0 ? "No Notes Present Please click Add button To Add  Notes :" :  "Your Notes Here" }</h2>
<b className = "my-4 py-4 fs-5">{props.subHeading}</b>
    <div className="container ">
        {props.resultedArray.map((element,index)=>{
            return (
               <div className="row my-3 align-items-center" key={`h_${index}`}>
  <div className="col-1 text-center">
  <input type="checkbox" checked={element.completed} onChange={()=>{props.handleClickCheck(element)}}/>
        </div> 
        <div className="col-8">
            <ul className="" style={{listStyle:"none",margin:"unset"}}>
            {/* <li style={{
              textDecoration: element.completed ? 'line-through': '',
            }} > <span className="me-4 ms-4 fs-5 fw-bold">{element.id+"."}</span> <strong className="fs-5">{element.note}</strong></li> */}
            <li style={{
              textDecoration: element.completed ? 'line-through': '',
            }} > <span className="me-4 ms-4 fs-5 fw-bold">{element.id+"."} {element.note} </span></li>
            </ul>
        </div>
        <div className="col-2 fs-5">
            <span className="mx-3" onClick={()=>{props.editNote(element,index)}} style = {{cursor:"pointer"}}>
        <i className="bi bi-pencil-square"></i>
        </span>
        <span className="mx-4 fs-5" onClick={()=>{props.deleteNote(element.id)}} style = {{cursor:"pointer"}}>
        <i className="bi bi-trash-fill"></i>
        </span>
        </div>
        <hr className="mt-2"/>
        </div>
);
        })}
      
    </div>
</section>
 </div>



</>

  );





}

export default Card;