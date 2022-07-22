import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { IoMdStar, IoIosStarHalf } from "react-icons/io"; // IoIosStarHalf

export default function Video(props) {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <Box bg={"#212529"}>
      <Box w={"250px"} h={"560px"}>
        <Box w={"100%"} h={"75%"}>
          <video
            style={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
            controls
            loop
            ref={videoEl}
          >
            <source src={props.v_url} type="video/mp4" />
          </video>
        </Box>
        <Box bg={"white"} h={"25%"} borderBottomRightRadius = "10px"
              borderBottomLeftRadius ="10px">
          <Box display={"flex"} justifyContent="center">
            <Text mt={"10px"} fontSize={"lg"} fontWeight={700}>
              {props.name}
            </Text>
          </Box>

          <Box display={"flex"} justifyContent="center">
            <Text mb={"10px"} fontSize={"sm"}>
              {props.title}
            </Text>
          </Box>

          <Box
            mt={"10px"}
            margin={"auto"}
            w={"80%"}
            border={"1px solid gray"}
          ></Box>

          <Box display={"flex"} mt={"10px"} ml={"10px"} justifyContent="center">
            <Box display={"flex"} mt={"3px"}>
              <IoMdStar style={{ color: "red" }} />
              <IoMdStar style={{ color: "red" }} />
              <IoMdStar style={{ color: "red" }} />
              <IoMdStar style={{ color: "red" }} />
              <IoIosStarHalf style={{ color: "red" }} />
            </Box>
            <Box ml={"7px"}>
              <Text fontWeight={500} fontSize={"sm"}>
                {" "}
                (411)
              </Text>
            </Box>
          </Box>

          <Box display={"flex"} gap={5} mt={"10px"} justifyContent={"center"}>
            <Box>
              <Text
                color={"red"}
                ml={"13px"}
                fontSize={"lg"}
                fontWeight={"bold"}
              >
                ₹ {props.d_price}
              </Text>
            </Box>
            <Box>
              <Text fontSize={"lg"} fontWeight={"bold"} as="del">
                ₹ {props.price}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
