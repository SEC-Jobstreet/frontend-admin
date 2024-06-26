import { Button, Modal } from "react-bootstrap";

import "./common.css";

function CandidateModal({ isOpen, toggle, data }) {
  return (
    <Modal show={isOpen} onHide={toggle} size="lg" className="candidate-modal">
      <Modal.Header closeButton>Detail</Modal.Header>
      <Modal.Body>
        <div className="modal-body-content">
          <div className="width-50">
            <b>First Name:</b>
            <span>{data.firstName}</span>
          </div>
          <div className="width-50">
            <b>Last Name:</b>
            <span>{data.lastName}</span>
          </div>
          <div className="width-50">
            <b>Age:</b>
            <span>{data.age}</span>
          </div>
          <div className="width-50">
            <b>Gender:</b>
            <span>{data.gender}</span>
          </div>
          <div className="width-50">
            <b>Email:</b>
            <span>{data.email}</span>
          </div>
          <div className="width-50">
            <b>Phone:</b>
            <span>{data.phone}</span>
          </div>
          <div className="width-50">
            <b>Username:</b>
            <span>{data.username}</span>
          </div>
          <div className="width-50">
            <b>Password:</b>
            <span> {data.password}</span>
          </div>
          <div className="width-50">
            <b>Birthday: </b>
            <span>{data.birthDate}</span>
          </div>
          <div className="width-50">
            <b>Blood Group:</b>
            <span>{data.bloodGroup}</span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Click</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CandidateModal;
