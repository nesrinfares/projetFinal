import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
function Prodedit({ el }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    name: el?.name,
    image: el?.image,
    catégori: el?.catégori,
    type: el?.type,
    gender: el?.gender,
    prix: el?.prix,
    description: el?.description,
    details: el?.details,
    images: el?.images,
  });
  return (
    <div>
      {" "}
      <>
        <Button variant="primary" onClick={handleShow}>
          edit
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name product</Form.Label>
                <Form.Control type="text" placeholder={el?.name} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>image product</Form.Label>
                <Form.Control type="text" placeholder={el?.image} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category product</Form.Label>
                <Form.Control type="text" placeholder={el?.catégori} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>price product</Form.Label>
                <Form.Control type="text" placeholder={el?.prix} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>description product</Form.Label>
                <Form.Control type="text" placeholder={el?.description} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Prodedit;
