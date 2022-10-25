import { Box, Button, FormControl, FormLabel, Heading, HStack, Img, Input, Stack, Text } from "@chakra-ui/react";

import phone from "../assets/piggy.png"


export const Home = () => {
    return (
        <Box className="App" h='90vh' bgColor='#F0EFED'>            
            <HStack h='100%' justifyContent='space-around' alignItems='center'>
                <Stack gap='5' maxW='2xl' px='5' py='10' borderRadius='20px'>
                    <Heading fontSize='6xl' color='#000'>Begin to Plan Your Way Out Of SAPA today  </Heading>
                    <Text>MakSavings help you save money and receive the money at a specified date</Text>
                    <Button bg='#2D6866' border='2px solid #2D6866' color='#fff' alignSelf='start'>Get Started</Button>
                </Stack>
                <Box className="">
                    <img src={phone} alt="Logo" width='250' />;
                </Box>

            </HStack>
        </Box>
    );
}
