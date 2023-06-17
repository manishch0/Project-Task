import { Button, Modal } from "antd";
import React, { useState } from "react";

function ModalTest() {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleOpen = () => {
    setModal(false);
  };
  const handleClose = () => {
    setModal(false);
  };
  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal
        open={modal}
        onOk={handleOpen}
        onCancel={handleClose}
        // footer={null}
        okButtonProps={{
          children: "Custom OK",
        }}
        cancelButtonProps={{
          children: "Custom cancel",
        }}
        okText="set"
        cancelText="re-Set"
      >
        Hello Your Modal Is Open
      </Modal>
    </div>
  );
}

export default ModalTest;
