import React from "react";
import useFirestore from "../hooks/useFirestore";
import {motion} from 'framer-motion'

function ImageGrid({setSelectedImg , email}) {
  const { docs } = useFirestore(`${email}`);
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{opacity:1 , scale: 1.05}}
          onClick={() => setSelectedImg(doc.url)}>
            <motion.img src={doc.url} alt={doc.name} 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1}}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
