import { Box } from "@chakra-ui/react";
import React from "react";
import Navber from "../components/navbar/Navber";
import Best_seller from "../components/product/Best_seller";
import Today_Deals from "../components/product/Deals_of _the_day";
import Early_acess from "../components/product/Early_acess";
import Video from "../components/product/Video";
import Slidebar from "../components/slidebar/Slidebar";

export default function Home() {
  return (
    <Box>
      <Navber />
      <Slidebar />
      <Best_seller/>
      <Today_Deals/>
      <Early_acess/>
      <Video/>
    </Box>
  );
}
