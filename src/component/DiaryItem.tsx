import React, { useState } from "react";
import Modal from "./Modal";

export default function DiaryItem(props: any) {
  let [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div onClick={showModal}>
      <h5>{props.title}</h5>
      <h5>{props.content}</h5>
      {isModalOpen === true ? <Modal /> : null}
    </div>
  );
}
