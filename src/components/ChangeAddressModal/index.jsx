"use client";

import { toggleAddressModal } from "@/store/modalSlice";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeAddressModal = () => {
  const dispatch = useDispatch();
  const { isAddressModalOpen } = useSelector((state) => state.modal);

  const [email, setEmail] = useState("");

  const onCloseModal = () => {
    dispatch(toggleAddressModal());
    setEmail("");
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={isAddressModalOpen} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Delivery Option
            </h3>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChangeAddressModal;
