import { Box } from "@chakra-ui/react";
import React from "react";
import Navber from "../components/navbar/Navber";
import Slidebar from "../components/slidebar/Slidebar";

export default function Home() {
  return (
    <Box>
      <Navber />
      <Slidebar />
    </Box>
  );
}
