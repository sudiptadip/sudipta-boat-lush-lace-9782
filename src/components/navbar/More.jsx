import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Image,
  Text,
  MenuDivider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import './navbar.css'
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function More() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    //   <Menu isOpen={isOpen} bg='black'>
    //     <Text
    //       onMouseEnter={onOpen}
    //       onMouseLeave={onClose}
    //     >
    //       More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    //     </Text>
    //     <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} bg='black'>

    //       <MenuItem>Menu Item 2</MenuItem>
    //       <MenuItem>Menu Item 3</MenuItem>

    //     </MenuList>
    //   </Menu>

    <Popover isOpen={isOpen} >
      <PopoverTrigger >
        <Text onMouseEnter={onOpen} onMouseLeave={onClose}>
          More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Text>
      </PopoverTrigger>
      <PopoverContent
        mt={"10px"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        bg="#212529"
        color="white"
        border={'0px solid black' }
      >
        <PopoverArrow bg="#212529" color={'#212529'}  /> 

        <PopoverBody>
          <Text ml={"25px"} mb={"5px"} className={'moreText'}>Gifting</Text>
          <Text ml={"25px"}mb={"5px"}className={'moreText'}>Do What Flotes Your Boat</Text>
          <Text ml={"25px"}mb={"5px"}className={'moreText'}>Blogs</Text>
          <Text ml={"25px"}mb={"5px"}className={'moreText'}>Meet The BoAtheads</Text>
          <Text ml={"25px"}mb={"5px"}className={'moreText'}>Corporet Orders</Text>
          <Text ml={"25px"}mb={"5px"}className={'moreText'}>Earn Rs. 100</Text>
          <Text ml={"25px"}mb={"5px"}className={'moreText'}>Careers</Text>
          <Text ml={"25px"}mb={"10px"}className={'moreText'}>Sosal Responsibility</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
