import React from 'react'
import {Button} from "react-bootstrap";

const AddButton = (props) => {
    return (
        <div className = "d-flex my-4 justify-content-between mx-4" > 
        <form className="d-flex">
      <input className="form-control me-2" onChange={(e)=>{props.Search(e)}} type="search" placeholder="Search" aria-label="Search"/>
    </form>
        <Button className="d-block" variant="primary" onClick={()=>{props.isModalhidden()}}>
         Add Note
        </Button>
        </div>
    )
}


export default AddButton
