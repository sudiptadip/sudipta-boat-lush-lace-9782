import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdStar } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Text, Image, dis_price, price, you_save, } from "@chakra-ui/react";

export default function Single_product(props) {
  let {name,imag,imag2} = props
  
return (
<Box w={"100%"} h={"100%"} bg={"#e3e3e3"} borderRadius={"13px"}>

  <Box w={"100%"} h={"55%"}>
    <Image
      w={"100%"}
      h={"100%"}
      src={imag}
      onMouseOver={e => e.currentTarget.src = imag2}
      onMouseOut={(e) => e.currentTarget.src = imag}
    />
  </Box>

  <Box
    w={"95%"}
    h={"43%"}
    bg={"white"}
    margin={"auto"}
    borderRadius={"12px"}
  >
    <Box
      w={"100%"}
      h={"30px"}
      display={"flex"}
      ml={"13px"}
      alignItems={"end"}
    >
      <Text mr={'20px'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}  display={"block"} fontWeight={"bold"}>
        {name}
      </Text>
    </Box>
    <Box display={"flex"} mt={"6px"} ml={"13px"} mb={"10px"}>
      <IoMdStar style={{ color: "red" }} />
      <Text fontSize={"xs"} ml={"10px"}>
        {" "}
        4.8 | 1116 reviews
      </Text>
    </Box>

    <Box
      margin={"auto"}
      mb={"10px"}
      border={"0.01px solid #D0D6D6"}
      width={"90%"}
    ></Box>

    <Box display={"flex"} gap={5}>
      <Box>
        <Text
          color={"red"}
          ml={"13px"}
          fontSize={"md"}
          fontWeight={"bold"}
        >
         ₹ {props.dis_price}
        </Text>
      </Box>
      <Box>
        <Text fontSize={"md"} fontWeight={"bold"} as="del">
        ₹ {props.price}
        </Text>
      </Box>
    </Box>

    <Box>
      <Text marginBottom={"10px"} fontSize={"xs"} ml={"13px"}>
       {props.you_save}
      </Text>
    </Box>

    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      borderRadius={"6px"}
      margin={"auto"}
      height={"20%"}
      width={"90%"}
      bg={props.clr}
      color={"white"}
    >
      <Text fontWeight={'bold'}>{props.ct}</Text>
    </Box>
  </Box>
</Box>



  );
}


