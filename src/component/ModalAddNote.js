import React,{forwardRef} from "react";
import { Modal,Button} from "react-bootstrap";
const  ModalAddNote = forwardRef((props,ref) => {
    return (
      <>
        <Modal show={props.isShowAddBtn} onHide={()=>{props.closeButtonAddButton()}}>
          <Modal.Header closeButton>
            <Modal.Title>Add Note Here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit = {(e)=>{props.SubmitAddBtn(e)}}>
          <div className="mb-3">
     <label htmlFor="exampleFormControlTextarea1" className="form-label">Add Note</label>
      <input ref ={ref} className="form-control" value={props.AddNotevalue} onChange={(e)=>props.addNoteinputVal(e)} id="exampleFormControlTextarea1" rows="3"></input>
    </div>
    </form>
          </Modal.Body>
          <Modal.Footer className = "justify-content-center">
            <Button variant="primary"  onClick = {()=>{props.addNote()}}>
              Add Note
            </Button>
          </Modal.Footer>
        </Modal>
        
      </>
    );
  });


export default ModalAddNote;