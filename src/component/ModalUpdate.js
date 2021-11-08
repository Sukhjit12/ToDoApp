import React from 'react';
import { Modal,Button} from "react-bootstrap";
const ModalUpdate = React.forwardRef((props , ref) => {
    return (
        <>
          <Modal show={props.isUpdateShow} onHide={()=>{props.closeButtonUpdateButton()}}>
            <Modal.Header closeButton>
              <Modal.Title>Updating Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit = {(e)=>{props.updateSubmitButton(e)}}>
            <div className="mb-3">
       <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.headingModal}</label>
        <input ref ={ref} className="form-control" value={props.updateValue} onChange={(e)=>props.UpdateinputVal(e)} id="exampleFormControlTextarea1" rows="3"></input>
      </div>
      </form>
            </Modal.Body>
            <Modal.Footer className = "justify-content-center">
            <Button variant="primary" onClick = {()=>{props.updateNote()}}>
              Update Note
            </Button>
            </Modal.Footer>
          </Modal>
        </>
    )
});

export default ModalUpdate
