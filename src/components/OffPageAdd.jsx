import * as React from 'react'
import { auth, firestore, db } from '../config/firebase'
import { AddCourseForm } from '../components'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" class="btn btn-secondary-outline btn-outline-secondary" onClick={handleShow}>
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AddCourseForm />
          <button class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded-full bg-red-500" onClick={handleClose}>
            Close
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
        <OffCanvasExample key={0} placement={'start'} name={'Add New Course'} />
    </>
  );
}

function OffPageAdd() {

  return (
    <div className="">
        <Example />
    </div>
  )
}

export default OffPageAdd;
