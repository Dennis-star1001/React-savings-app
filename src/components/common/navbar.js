import { Box, Divider, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <Box bgColor='blackAlpha.800' py='5' h='10vh'>

            <HStack justifyContent='space-around' className="navbar">

                <Text color='white'>MakSavings</Text>

                <HStack spacing='10' color='white' className="links">

                    <Link to="/">Home</Link>

                    <Link to="#" >About</Link>
                    <Link to="#" >Blog</Link>
                   {/* <Divider orientation="vertical" /> */}
                        <Link to="#" >Sign In</Link>
                        <Link to="./register" >Sign Up</Link>
                   

                </HStack>

            </HStack>
        </Box>
    )
}