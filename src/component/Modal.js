import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

const Modale = ({ setArr, arr }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("No Name");
  const [rate, setRate] = useState(1);
  const [imgUrl, setImgUrl] = useState(
    "https://images.pexels.com/photos/6447220/pexels-photo-6447220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeRate = (e) => {
    e.target.value > 5
      ? setRate(5)
      : e.target.value < 1
      ? setRate(1)
      : setRate(e.target.value);
  };
  const handleChangeUrl = (e) => {
    setImgUrl(e.target.value);
  };
  const reset = () => {
    setRate(1);
    setImgUrl(
      "https://images.pexels.com/photos/6447220/pexels-photo-6447220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    );
  };
  const handelClickAdd = () => {
    name !== "No Name"
      ? setArr([...arr, { Name: name, rate: rate, Img: imgUrl }])
      : reset();
  };
  const handelClickSave = () => {
    handleClose();
    handelClickAdd();
    reset();
  };

  return (
    <div className="back">
      <samp className="AddBtn" onClick={handleShow}>
        [+]
      </samp>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Movie adding</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Input">
          <input placeholder="Movie Name" onChange={handleChangeName}></input>
          <input placeholder="Movie Rate" onChange={handleChangeRate}></input>
          <input placeholder="MoviePic URL" onChange={handleChangeUrl}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelClickSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modale;