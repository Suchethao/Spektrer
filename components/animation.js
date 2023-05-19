import { motion } from "framer-motion";

const Glasses = () => {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];

  const frameVariants = {
    start: {
      rotate: 0,
      scale: 1,
      borderRadius: "50%",
      boxShadow: "none",
    },
    end: {
      rotate: 180,
      scale: 1.2,
      borderRadius: "0%",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      transition: {
        duration: 1,
        yoyo: Infinity,
      },
    },
  };

  return (
    <div style={{ position: "relative", width: "200px", height: "200px" }}>
      <motion.div
        style={{
          position: "absolute",
          top: "25px",
          left: "35px",
          width: "130px",
          height: "120px",
          backgroundColor: "#fff",
          borderRadius: "50% 50% 0 0",
          transform: "rotate(-45deg)",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "35px",
          left: "40px",
          width: "120px",
          height: "100px",
          backgroundColor: "#000",
          borderRadius: "50% 50% 0 0",
          transform: "rotate(-45deg)",
        }}
      />
      <motion.div
        variants={frameVariants}
        initial="start"
        animate="end"
        style={{
          position: "absolute",
          top: "75px",
          left: "70px",
          width: "60px",
          height: "40px",
          backgroundColor: colors[0],
        }}
      />
      <motion.div
        variants={frameVariants}
        initial="start"
        animate="end"
        style={{
          position: "absolute",
          top: "75px",
          left: "125px",
          width: "60px",
          height: "40px",
          backgroundColor: colors[1],
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "110px",
          left: "80px",
          width: "80px",
          height: "5px",
          backgroundColor: colors[2],
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "110px",
          left: "40px",
          width: "5px",
          height: "35px",
          backgroundColor: colors[3],
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "110px",
          right: "40px",
          width: "5px",
          height: "35px",
          backgroundColor: colors[4],
        }}
      />
    </div>
  );
};

export default Glasses;


//Option of cool animation
// import { Box } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// export default function Glasses() {
//   const variants = {
//     rotate: {
//       rotate: 360,
//       transition: { duration: 2, repeat: Infinity, repeatType: 'loop' },
//     },
//     color: {
//       backgroundColor: ['#000', '#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'],
//       transition: { duration: 2, repeat: Infinity, repeatType: 'loop' },
//     },
//   };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
//       <motion.div
//         animate={['rotate', 'color']}
//         variants={variants}
//         style={{
//           width: '200px',
//           height: '70px',
//           backgroundColor: 'black',
//           borderRadius: '20px 20px 0 0',
//           position: 'relative',
//         }}
//       >
//         <Box
//           w="50px"
//           h="50px"
//           border="5px solid white"
//           borderRadius="50%"
//           position="absolute"
//           left="50%"
//           top="-20px"
//           transform="translateX(-50%)"
//         />
//       </motion.div>
//     </Box>
//   );
// }