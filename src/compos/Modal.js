import React from "react";
import Modalinfo from "./ModalInfo";
import { motion } from "framer-motion";

function Modal({ selectedImg, setSelectedImg }) {
  const handleClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* backdrop */}
      {/* <div className="Modaldiv"> */}
      <motion.img
        src={selectedImg}
        alt="Enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      {/* initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }} */}
      <div className="Modaldiv1"> Hello World</div>
      {/*</div>
       */}
    </motion.div>
  );
}

export default Modal;
