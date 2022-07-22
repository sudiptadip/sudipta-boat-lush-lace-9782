import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer/Footer";
import Show_1 from "../components/last_upper_part/Show_1";
import Navber from "../components/navbar/Navber";
import Best_seller from "../components/product/Best_seller";
import Today_Deals from "../components/product/Deals_of _the_day";
import Early_acess from "../components/product/Early_acess";
import Trending_Wireless from "../components/product/Trending_Wireless";
import VideoItem from "../components/product/VideoItem";
import Slidebar from "../components/slidebar/Slidebar";

export default function Home() {
  return (
    <Box>
      <Navber />
      <Slidebar />
      <Best_seller/>
      <Today_Deals/>
      <Early_acess/>
      <VideoItem/>
      <Trending_Wireless/>
      <Show_1/>
      <Footer/>
    </Box>
  );
}
