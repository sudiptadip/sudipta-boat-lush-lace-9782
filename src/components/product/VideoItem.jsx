
import { Box } from '@chakra-ui/react'
import React from 'react'
import Video from './Video'

export default function VideoItem() {
    let arr = [
        {
            name: 'boAt Airdopes 141',
            title: 'WIRELESS EARBUDS',
            price: '4,490',
            dis_price: '1,499',
            vid_url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_FfXPPuT9SCQLJn37agEu2_card_thumbnail.mp4?v=11263625270727142314',
        },
        {
            name: 'boAt Storm Pro',
            title: 'Smart Watch',
            price: '6,990',
            dis_price: '2,999',
            vid_url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_Z0-RLJlUCNvOBH3jAQq0V_card_thumbnail.mp4?v=17400666481025471640',
        },
        {
            name: 'boAt Airdopes 141',
            title: 'WIRELESS EARBUDS',
            price: '4,490',
            dis_price: '1,499',
            vid_url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_J5jruxliHDOaP6CargKes_card_thumbnail.mp4?v=7823576618366193591',
        },
        {
            name: 'boAt Rockerz 450',
            title: 'BLUETOOTH HEADPHONES',
            price: '3,990',
            dis_price: '1,299',
            vid_url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_TfTmvwmD0FlcxKDUtLTGE_card_thumbnail.mp4?v=756950886930560398',
        },
        {
            name: 'boAt Watch Xtend‌',
            title: 'SMART WATCHES',
            price: '7,990',
            dis_price: '3,499',
            vid_url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_KA4RPukHqJ4Oa3h0nmL2Y_1200.mp4?v=17831385345416535416',
        },
    ]
  return (
    <Box bg={"#212529"} display={"flex"}>
        <Box display={"flex"} margin={'auto'} mt={'100px'} gap={4}>

            {
                arr.map((el)=>(
                    <Video 
                    name={el.name}
                    title={el.title}
                    price={el.price}
                    d_price={el.dis_price}
                    v_url={el.vid_url}
                    />
                ))
            }

        </Box>
    </Box>
  )
}
