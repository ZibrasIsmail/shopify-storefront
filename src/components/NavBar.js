import React, { useContext } from "react";
import { Flex, Icon, Image, Box, Badge } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      backgroundColor="#FFA8E2"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="2rem "
    >
      <Icon
        fill="white"
        cursor="pointer"
        as={MdMenu}
        width={30}
        height={30}
        onClick={() => openMenu()}
      ></Icon>
      <Link to="/">
        <Image
          src="https://images.vexels.com/media/users/3/211711/isolated/lists/42fa4a2860cd2c9b2183d9b97e132d09-bathroom-label-bath-bombs-flat.png"
          weight={100}
          height={100}
        />
      </Link>
      <Box>
        <Icon
          fill="white"
          cursor="pointer"
          as={MdShoppingBasket}
          weight={30}
          height={30}
          onClick={() => openCart()}
        />
        <Badge backgroundColor="#FF38BD" borderRadius="50%">{checkout.lineItems?.length}</Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
