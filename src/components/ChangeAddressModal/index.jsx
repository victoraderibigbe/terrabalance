"use client";

import {
  fetchAddresses,
  setDeliveryClick,
  setPickupClick,
} from "@/store/addressSlice";
import { toggleAddressModal } from "@/store/modalSlice";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeAddressModal = () => {
  const dispatch = useDispatch();
  const { isAddressModalOpen } = useSelector((state) => state.modal);
  const { addresses, loading, isSelected, isDeliveryClick, isPickupClick } =
    useSelector((state) => state.address);
  const userId = useSelector((state) => state.auth.userId);

  const handleDeliveryClick = () => {
    dispatch(setDeliveryClick());
  };

  const handlePickupClick = () => {
    dispatch(setPickupClick());
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchAddresses(userId));
    }
  }, [userId, dispatch]);

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
