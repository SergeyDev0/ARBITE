import React from "react";
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);

  return (
    <>
      <Header />
      <main className="main">
        
      </main>
      <Footer />
    </>
  )
};

export default Product;
