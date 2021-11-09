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
    <div className="row my-4">
                    <div className="col-1">
                    <h5 className="border-bottom border-4 pb-3 border-primary">Completed</h5>
                    </div>
                    <div className="col-7 ps-4">
                    <h5 className="border-bottom border-4 pb-3 border-primary">Notes</h5>
                    </div>
                    <div className="col-2 d-flex justify-content-evenly">
                    <h5 className="border-bottom ms-4  mx-4 border-4 pb-3 border-primary">Edit</h5>
                    <h5 className="border-bottom border-4 mx-2 pb-3 border-primary">Delete</h5>
                </div>
                <div className="col-2 d-flex justify-content-center   ">
                    <h5 className="border-bottom border-4 d-inline pb-3 border-primary">Check</h5>
                    </div>
                </div>
        {props.resultedArray.map((element,index)=>{
            return (
               <div className="row my-3 align-items-center" key={`h_${index}`}>
     <div className="col-1 text-center ">
     <input type="checkbox" checked={element.completed} onChange={()=>{props.handleClickCheck(element)}}/>
        </div> 
        <div className="col-7 ">
            <ul className="" style={{listStyle:"none",margin:"unset"}}>
            <li style={{
              textDecoration: element.completed ? 'line-through': '',
            }} > <span className="me-4 ms-4 fs-5 fw-bold" style={{textTransform:"capitalize"}}>{element.id+"."} {element.note} </span></li>
            </ul>
        </div>
        <div className="col-2  d-flex justify-content-evenly fs-5">
            <span  onClick={()=>{props.editNote(element,index)}} style = {{cursor:"pointer"}}>
        <i className="bi text-primary bi-pencil-square"></i>
        </span>
        <span  onClick={()=>{props.deleteNote(element.id)}} style = {{cursor:"pointer"}}>
        <i className="bi text-danger bi-trash-fill"></i>
        </span>
        </div>
        <div className="col-2 justify-content-center d-flex ms-auto">
        <input type="checkbox" checked={element.isWantToDelete} onChange={()=>{props.handleClickCheckDelete(element)}}/>
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