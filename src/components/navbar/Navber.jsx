import {
  Box,
  Center,
  Text,
  Image,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { BsFillCartCheckFill } from 'react-icons/bs';
import { RiUser3Fill } from 'react-icons/ri';
// import { AiOutlineUser } from "@react-icons/all-files/fa/FaBeer";
import React from "react";
import "./navbar.css";
import Shop from "./Shop";
import More from "./More";

export default function Navber() {
  return (
    <Box>
      <Box height={"35px"} bg="red" display={"flex"} alignItems={"center"}>
        <Text margin={"auto"} color={"white"}>
          Live the sound 🎵 with the all-new Airdopes 131 PRO. Up for grabs at
          ₹1299. Shop Now!
        </Text>
      </Box>
      <Box
        height={"70px"}
        bg="#212529"
        display={"flex"}
        justifyContent="space-between"
      >
        <Box width="20%" height={"100%"}>
          <Image
            display={"block"}
            ml="auto"
            mr="auto"
            mt={"5%"}
            width={"32%"}
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229"
            alt="logo"
          />
        </Box>

        <Box
          width="45%"
          height={"100%"}
          display={"flex"}
          gap={8}
          alignItems={"center"}
          justifyContent={"flex-end"}
          mr={"5%"}
        >
          <Text
            className="hover-underline-animation"
            color={"white"}
            fontSize={"ig"}
          >
            <Shop/>

          </Text>
          <Text
            className="hover-underline-animation"
            color={"white"}
            fontSize={"ig"}
          >
            Daily Deals
          </Text>
          <Text
            className="hover-underline-animation"
            color={"white"}
            fontSize={"ig"}
          >
            Offer Zone
          </Text>
          <Text
            className="hover-underline-animation"
            color={"white"}
            fontSize={"ig"}
          >
            <More/>
          </Text>
        </Box>


        <Box
          width="35%"
          height={"100%"}
          display={"flex"}
        >
          <Input
            display={"flex"}
            mt="3%"
            w={"50%"}
            bg="white"
            placeholder="Search ..."
            borderTopRightRadius={"0px"}
            borderBottomRightRadius={"0px"}
          />
          <IconButton
            mt="3%"
            bg={"white"}
            borderTopLeftRadius={"0px"}
            borderBottomLeftRadius={"0px"}
            colorScheme="black"
            aria-label="Search database"
            icon={<SearchIcon color={"black"} />}
          />
          <Box h={"100%"} display="flex" justifyContent={"center"} gap={5} alignItems={'center'}>
            <Box ml={"50%"}>
              <IconButton                
                colorScheme="white"
                aria-label="Search database"
                icon={<RiUser3Fill size='70%' />}
              />
            </Box>
            <Box>
              <IconButton
                colorScheme="white"
                aria-label="Search database"
                
                icon={<BsFillCartCheckFill size='70%' />} 
              />
            </Box>
          </Box>
        </Box>

      </Box>
      
    </Box>
  );
}
