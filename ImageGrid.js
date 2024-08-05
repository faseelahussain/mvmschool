// import { loadGetInitialProps } from "next/dist/shared/lib/utils";
// import useFirestore from "../hooks/useFirestore";
// import { motion } from "framer-motion";

// const ImageGrid = ({ setSelectedImg }) => {
//   const { docs } = useFirestore("images");

//   console.log("............",docs);

//   return (
//     <div className="img-grid">
//       {console.log(docs)}
//       {docs ? (
//         docs.map((doc) =>
//           doc ? (
//             <motion.div
//               className="img-wrap"
//               key={doc.id}
//               layout
//               whileHover={{ opacity: 1 }}
//               s
//               onClick={() => setSelectedImg(doc)}
//             >
//               <motion.div className="img-container">
//                 <motion.img
//                   src={doc.url}

//                   alt="uploaded pic"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1 }}
//                 />
//               </motion.div>
//               <motion.p
//                 className="img-title"
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//               >

//                 {doc.imageTitle}

//               </motion.p>
//             </motion.div>
//           ) : (
//             <h1>Loading</h1>
//           )
//         )
//       ) : (
//         <h1>Loading</h1>
//       )}
//     </div>
//   );
// };

// export default ImageGrid;

// ..............new code format........////////////
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
//import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { Grid } from "@mui/material";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';

const ImageGrid = ({ setSelectedImg }) => {
  const [clickedImage, setClickedImage] = useState();

  console.log("////////////////", clickedImage);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const docs = [
    {
      title: "Environment Day",
      imageUrl: "/Asset/image18.jpg",
      children: [
        {
          image: "/Asset/image12.jpg",
          title: "Title1",
        },
        {
          image: "/Asset/image13.jpg",
          title: "Title1",
        },
        {
          image: "/Asset/image14.jpg",
          title: "Title1",
        },
        {
          image: "/Asset/image18-1.jpg",
          title: "Title1",
        },
        {
          image: "/Asset/image18-2.jpg",
          title: "Title1",
        },
        {
          image: "/Asset/image18-3.jpg",
          title: "Title1",
        },
        {
          image: "/Asset/image18-4.jpg",
          title: "Title1",
        },
        {
          image: "/Asset/image18-5.jpg",
          title: "Title5",
        },

        
        {
          image: "/Asset/image18-8.jpg",
          title: "Title5",
        },
        {
          image: "/Asset/image18-9.jpg",
          title: "Title5",
        },
      ],
    },

   

    {
      title: "1ST DAY OF SCHOOL",
      imageUrl: "/Asset/image19.jpg",
      children: [
        {
          image: "/Asset/image19-1.jpg",
          title: "Title1",
        },
        {
          image: "/Asset/image19-2.jpg",
          title: "Title1",
        },
        {
          image: "/Asset/image19-3.jpg",
          title: "Title1",
        },
       
      
      ],
    },
    {
      title: "KG",
      imageUrl: "/Asset/image1.jpg",
      children: [
        {
          image: "/Asset/image11.jpg",
          title: "Title1",
        },
      
      ],
    },
    {
      title: "hand over the memento to students",
      imageUrl: "/Asset/image2.jpg",
      children: [
        {
          image: "/Asset/image3.jpg",
          title: "Title2",
        },
        {
          image: "/Asset/image4.jpg",
          title: "Title2",
        },
        {
          image: "/Asset/image5.jpg",
          title: "Title2",
        },
       
        {
          image: "/Asset/image7.jpg",
          title: "Title2",
        },
      ],
    },
   

    {
      title: "Group photo with MVM Hero's",
      imageUrl: "/Asset/image6.jpg",
      children: [
        {
          image: "/Asset/image4.jpg",
          title: "Title4",
        },
        
      ],
    },

    {
      title: "presentation for winners",
      imageUrl: "/Asset/image7.jpg",
      children: [
        {
          image: "/Asset/image7-1.jpg",
          title: "Title4",
        },
        {
          image: "/Asset/image7-2.jpg",
          title: "Title4",
        },
        {
          image: "/Asset/image7-3.jpg",
          title: "Title4",
        },
        {
          image: "/Asset/image7-4.jpg",
          title: "Title4",
        },
        {
          image: "/Asset/image7-5.jpg",
          title: "Title4",
        },
        {
          image: "/Asset/image7-6.jpg",
          title: "Title4",
        },
        {
          image: "/Asset/image7-7.jpg",
          title: "Title4",
        },
      ],
    },


    {
      title: "Appreciate The Children's In Front Of Their Parents",
      imageUrl: "/Asset/image8.jpg",
      children: [
        {
          image: "/Asset/image8.jpg",
          title: "Title4",
        },
      
        
      ],
    },

   
    {
      title: "CELEBRATION",
      imageUrl: "/Asset/image9.jpg",
      children: [
        {
          image: "/Asset/image9.jpg",
          title: "Title4",
        },
        
        
      ],
    },
    // {
    //   title: "celebration",
    //   imageUrl: "/Asset/image9.jpg",
    // },

    {
      title: "JUST A SNAP WITH A+ WINNERS",
      imageUrl: "/Asset/image10.jpg",
      children: [
        {
          image: "/Asset/image10.jpg",
          title: "Title4",
        },
        
        
      ],
    },
    

    {
      title: "SCHOOL STURCTURE",
      imageUrl: "/Asset/image15.jpg",
      children: [
        {
          image: "/Asset/image16.jpg",
          title: "Title4",
        },
        {
          image: "/Asset/image17.jpg",
          title: "Title4",
        },
        
      ],
    },
    {
      title: "INAGURATION",
      imageUrl: "/Asset/image20.jpg",
      children: [
        {
          image: "/Asset/image20.jpg",
          title: "Title4",
        },
        
      ],
    },
    
  ];

  console.log("............", docs);

  const selectedImages = docs?.filter((data, index) => index === clickedImage)
    ? docs?.filter((data, index) => index === clickedImage)[0]?.children
    : "";

  console.log("clickedImage", selectedImages);

  return (
    <div className="img-grid">
      {console.log(docs)}
      {docs ? (
        docs.map((doc, index) =>
          doc ? (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              s
              // onClick={() => setSelectedImg(doc)}
              onClick={() => {
                setClickedImage(index);
                setShow(true);
              }}
            >
              <motion.div className="img-container">
                <motion.img
                  // src={doc.url}
                  src={doc.imageUrl}
                  //  src='/Asset/images2.jpg'

                  alt="uploaded pic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </motion.div>
              <motion.p
                className="img-title"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {/* //TITLE */}
                {/* {doc.imageTitle} */}
                {/* // NEWTitle */}
                {doc.title}
              </motion.p>
            </motion.div>
          ) : (
            <h1>Loading</h1>
          )
        )
      ) : (
        <h1>Loading</h1>
      )}

      <>
        <Grid container justifyContent="center" alignItems="center" sx={{}}>
          <div   className="App">
            
            <Modal  show={show} onHide={handleClose} centered size="xl">
              <Modal.Body style={{background:'black'}}>
                <Grid
                  container
                  sx={{
                    bgcolor: "",
                    height: 400,
                    overflowX: "hidden",
                    overflowY: "auto",
                    justifyContent: "space-around",
                  }}
                >
                  {selectedImages?.map((data, index) => (
                    <Grid
                      container
                      xs={5}
                      sm={5}
                      lg={3.5}
                      sx={{
                        height: { xs: 100, lg: 200, md: 200, sm: 100 },
                        bgcolor: "",
                        mt: { xs: 5, sm: 5, md: 10, lg: 10 },
                      }}
                    >
                      <Grid src={data?.image} component="img" />
                    </Grid>
                  ))}
                </Grid>
              </Modal.Body>
            </Modal>
          </div>
        </Grid>
      </>
    </div>
  );
};

export default ImageGrid;
