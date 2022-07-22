import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiTwotoneThunderbolt } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Text, Image, border } from "@chakra-ui/react";
import Single_product from "./Single_product";
import { useEffect } from "react";

export default function Today_Deals() {
const [data,setdata] = useState([])

function collectdata(){

  fetch('https://boat-api-sudipta.herokuapp.com/product_data?_page=1&_limit=8')
  .then((res)=> res.json())
  .then((res2)=> setdata(res2))

}

useEffect(()=>{
  collectdata()
},[])

    
  return (
    <Box mt={"0px"} bg={"#212529"} >
    <Box display={'flex'} justifyContent={'center'}>
      <Text
        color={"white"}
        textAlign={"center"}
        fontSize={"4xl"}
        fontWeight={"bold"}
        mb={"25px"}
        mt={"50px"}
      >
    
        Deals Of The Day
      </Text>
    </Box>

    <Box alignItems={'center'} justifyContent={'center'} display={'flex'} mb={"50px"} margin={'auto'} borderRadius={'10px'} w={"40%"} h={'40px'} bg='#FBC50A'>
    <AiTwotoneThunderbolt  style={{fontSize: '30px', }} /> 
      <Text fontWeight={'600'} fontSize={'lg'}>  Dealy Deals    Ending in 2 Days  Hurry!...  </Text>
    </Box>


      <Swiper
        style={{ height: "400px",  width: "90%",marginTop: '50px'}}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

{
  data.map((el)=>(

    <SwiperSlide >
    <Single_product 
    name={el.name}
    imag={el.image_1}
    imag2={el.image_2_c}
    dis_price={el.discount_Price}
    price={el.total_Price}
    you_save = {`You Save: ${el.total_save}`}
    clr={'#FBC50A'}
    ct={'Add to cart'}
    />
</SwiperSlide>

  ))
}


      </Swiper>
    </Box>
  );
}