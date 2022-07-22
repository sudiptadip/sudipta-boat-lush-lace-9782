import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Image,
  Text,
  Grid,
  Button,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import './navbar.css'
export default function Shop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <Menu isOpen={isOpen}>
    //   <Text
    //     onMouseEnter={onOpen}
    //     onMouseLeave={onClose}
    //   >
    //     Shop {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    //   </Text>
    //   <MenuList  onMouseEnter={onOpen} onMouseLeave={onClose}>
    //     <Grid templateColumns='repeat(4, 1fr)' gap={6}>

    //     <MenuItem>
    //       <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_540x.png?v=1612338251" />
    //     </MenuItem>

    //     </Grid>
    //   </MenuList>
    // </Menu>

    <Popover isLazy isOpen={isOpen}>
      <PopoverTrigger>
        <Text onMouseEnter={onOpen} onMouseLeave={onClose}>
          Shop {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Text>
      </PopoverTrigger>
      <PopoverContent
        mt={"10px"}
        width='-moz-fit-content'
        bg={"#212529"}
        borderColor='red'
        border={'0px solid red'}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <PopoverBody width="1450px">
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>

            <Box width={"280px"}>
              <Image  className="SPI"   src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_540x.png?v=1612338251" />
            </Box>
            <Box width={"280px"}>
              <Image  className="SPI"  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387" />
            </Box>
            <Box width={"280px"}>
              <Image  className="SPI"  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_720x.jpg?v=1648546494" />
            </Box>
            <Box width={"280px"}>
              <Image  className="SPI"  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_540x.png?v=1612338356" />
            </Box>
            <Box width={"280px"}>
              <Image  className="SPI"  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_540x.png?v=1612338436" />
            </Box>
            <Box width={"280px"}>
              <Image  className="SPI"  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_540x.png?v=1622452897" />
            </Box>
            <Box width={"280px"}>
              <Image className="SPI"   src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_720x.jpg?v=1648545875" />
            </Box>
            <Box width={"280px"}>
              <Image  className="SPI"  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_720x.png?v=1615033153" />
            </Box>
            <Box width={"280px"}>
              <Image  className="SPI"  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_540x.png?v=1612338560" />
            </Box>
            <Box width={"280px"}>
              <Image  className="SPI"  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_720x.png?v=1624859990" />
            </Box>
            <Box width={"280px"}>
              <Image  className="SPI"  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_720x.png?v=1624859990" />
            </Box>
            
            


          </Grid>
        
        
        
        </PopoverBody>

      </PopoverContent>
    </Popover>
  );
}
