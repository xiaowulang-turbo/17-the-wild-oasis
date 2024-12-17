import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModal(!isOpenModal)}>
        {isOpenModal ? "Hide Form" : "Add new cabin"}
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}
