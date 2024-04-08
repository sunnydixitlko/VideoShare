import React from 'react'
import {Box, HStack, Heading, Stack, VStack,Button,Input,Text} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return(
  <Box bg={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
<Stack direction={['column','row']}> 
<VStack alignItems={"stretch"} w={'full'} color={'white'}>
    <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]}>
        Subscribe to get updates
    </Heading>
    <HStack borderBottom={'2px solid white'}>
        <Input placeholder='Enter Email Here....' border={'none'} borderRadius={"none"} outline="none"
        focusBorderColor='none'/> 
        <Button p={'0'}
        colorScheme='purple'
        variant={"ghost"}
        borderRadius={'0 20px 20px 0'}
        >
<AiOutlineSend size={20}/>
        </Button>
    </HStack>
</VStack>
<VStack width={"full"}
borderLeft={["none","1px solid white"]}
borderRight={["none","1px solid white"]}
>
    <Heading  textTransform={"uppercase"} textAlign={"center"}>
        Video Hub
    </Heading>
    <Text>All rights received</Text>
</VStack>
<VStack width={"full"}>
<Heading size={"md"}>Social Media</Heading>
<Button variant={"link"} colorScheme={"white"}>
    <a target={"blank"} href="http://youtube.com">You tube</a>
</Button>
<Button variant={"link"} colorScheme={"white"}>
    <a target={"blank"} href="http://instagram.com">Instagram</a>
</Button>
<Button variant={"link"} colorScheme={"white"}>
    <a target ={"blank"}href="http://github.com">Github</a>
</Button>
</VStack>
</Stack>
  </Box>
  );
};

export default Footer;