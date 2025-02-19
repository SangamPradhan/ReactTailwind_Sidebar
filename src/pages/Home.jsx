import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Ensure correct import
import Layout from "../Layout/Layout";

const Home = () => {
  // Create a ref for the element where Typed.js will be applied
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["Sangam Pradhan", "Software Engineer", "React Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    // Clean up the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Layout>
      <motion.div>
        <h1>
          I am <span ref={typedRef}/> 
        </h1>
      </motion.div>
    </Layout>
  );
};

export default Home;
