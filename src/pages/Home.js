import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

import { ShopContext } from "../context/shopContext";
import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  console.log(products);

  if (!products) return <div>Loadings...</div>;

  return (
    <Box>
      <Hero />
      <RichText 
        heading="The relaction waiting for"
        text="our bath bombs  huarantee a fun and relaxing"
      />
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign="center"
              // position="absolute"
            >
              <Image src={product.images[0].src} />
              {/* <Text position="absolute" bottom="15%" w="100%" fontWeight="bold"> */}
              <Text>
                {product.title}
              </Text>
              {/* <Text position="absolute" bottom="5%" w="100%" color="gray.500"> */}
              <Text>
                {product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText 
        heading="Treat Yourself!"
      />
      <ImageWithText
        image="https://www.stenders-cosmetics.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/b/bblm010_magnolia_foaming_ball_web.jpg"
        heading="Heading"
        text="Make your bath experience one you are longing for again and again with this handmade bath bomb inspired by the magnificent magnolias. Filled with purifying salt crystals and delicate loofah particles to care for your skin while bathing, it releases heaps of feathery bubbles and leaves your skin gorgeously perfumed with a soft, delicately floral fragrance."
      />
      <ImageWithText
        reverse
        image="https://unicorn.lush.com/media/products/intergalactic_bath_bomb_2021.png"
        heading="Second Heading"
        text="Make your bath experience one you are longing for again and again with this handmade bath bomb inspired by the magnificent magnolias. Filled with purifying salt crystals and delicate loofah particles to care for your skin while bathing, it releases heaps of feathery bubbles and leaves your skin gorgeously perfumed with a soft, delicately floral fragrance."
      />
    </Box>
  );
};

export default Home;
