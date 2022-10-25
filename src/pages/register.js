import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Radio, RadioGroup, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import {FcGoogle} from "react-icons/fc"
export const Register = () => {
    return (
        <Box className="App" h='90vh'  bgColor='#fff'>
            <HStack h='100%' alignItems='center' w='100%' justifyContent='space-between'  >
                <Flex flexDirection='column' alignItems='center' w='40vw'>
                <Heading mb='5' textAlign='center' fontWeight='medium'>Contribution</Heading>

                <SimpleGrid columns={1} spacing='20px' w='70%'>
                    <Button bg='white' border='1px solid #EAEFF4'gap='2' _hover={{bgColor:'white'}}><FcGoogle size='24'/> Log in with Google</Button>
                    <HStack>

                   
                    <FormControl isRequired >
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' />
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' />
                    </FormControl>
                    </HStack>
                    <FormControl isRequired >
                        <FormLabel>Phone number</FormLabel>
                        <Input placeholder='Phone number' />
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel>Address</FormLabel>
                        <Input placeholder='Address' />
                    </FormControl>
                    <FormControl >
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup defaultValue='male'>
                            <Stack spacing={4} direction='row'>
                                <Radio value='male'>Male</Radio>
                                <Radio value='female'>Female</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                <Button color='white' w='full' bg='#2D6866'>Save</Button>

                </SimpleGrid>
                </Flex>
                <Box w="60vw" h='90vh' bg='#2D6866'>
                 
                </Box>

            </HStack>
        </Box>
    );
}

