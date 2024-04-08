import React from 'react'
import {Box, Container, Stack} from '@chakra-ui/react';
import {Image} from '@chakra-ui/react';
import {Heading} from '@chakra-ui/react';
import {Text} from '@chakra-ui/react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";
import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
import img5 from "../assests/5.png";

const headingOptions={
    pos:"absolute",
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:'4',
    size:'4xl'
}
const Home = () => {
  return <Box >

<MyCarousel/>
<Container maxW={'container.xl'} minH={'100vh'} p='16'>
<Heading textTransform={"uppercase"} py="2" w="fit-content"  borderBottom={"2px solid"} m={"auto"}>
  Services 
</Heading>
<Stack
h="full"
p={'4'}
alignItems={'center'}
direction={['column','row']}
>
<Image src={img5} height={['40','400']}filter={'hue-rotate(-130deg)'}/>
<Text letterSpacing={"widest"} lineHeight={"190%"} p={['4','16'] } textAlign={"center"}>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore libero fuga veritatis quo, dolorum recusandae ipsum reprehenderit, magnam, expedita maxime tempora pariatur ex. Vel, commodi? Quae quaerat repellendus vel quidem ex nostrum veritatis nam, debitis laborum architecto ratione dicta, minus voluptatem reprehenderit! Doloremque mollitia dolore, voluptatum ea incidunt officia deserunt nostrum fugiat praesentium nesciunt quibusdam explicabo, voluptatibus consequuntur totam hic in autem tempora vitae, commodi minima magni at dicta. Dolorem asperiores incidunt, assumenda earum nemo soluta deserunt voluptatum esse ratione minus, ullam quo et impedit. Ducimus nemo in exercitationem, vel, repellendus perferendis debitis, fugiat at repudiandae itaque quas quis. Eum!
</Text>
</Stack>
</Container>
  </Box>
  
};
const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false}
    showArrows={false}>
        <Box w="full" h={'100vh'}>
        <Image src={img1}/>
        <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}> Watch the future</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
        <Image src={img2}/>
        <Heading bgColor={"whiteAlpha.800"} color={'black'}{...headingOptions}>Future is gaming</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
        <Image src={img3}/>
        <Heading bgColor={"whiteAlpha.600"} color={'black'}{...headingOptions}>Gaming is console</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
        <Image src={img4}/>
        <Heading bgColor={"whiteAlpha.600"} color={'black'}{...headingOptions}>Night life is cool</Heading>
        </Box>
    </Carousel>
)

export default Home;