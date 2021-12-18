import Link from 'next/link'
import Image from 'next/image'
import { Flex,Box,Text,Button } from '@chakra-ui/react'

const Banner=({purpose,title1,title2,desc1,desc2,buttonText, linkName,
imageUrl})=>(
<Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" >
 {purpose}
 <Image src={imageUrl} width={500} height={300} alt='banner'></Image>
 <Box p={5}>
 <Text color="gray.500" fontSize="sm" fontWeight="medium">
 {purpose}
 </Text>
 <Text color="gray.500" fontSize="sm" fontWeight="medium">
 {title1}<br/> {title2}
 </Text>
 <Text color="gray.500" fontSize="sm" fontWeight="medium">
 {desc1}<br/>{desc2}
 </Text>
 <Button fontSize="xl" bg="blue.300" color="white">
 <Link href={linkName}>{buttonText}</Link>
 </Button>
 </Box>

</Flex>
)
export default function Home() {
  return (
    <div className="">
      
      <Banner purpose={'RENT A HOME'}
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartment, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose-for-rent"
      imageUrl="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
      ></Banner>
      <Banner purpose={'BUY A HOME'}
      title1="find Buy your Own home"
      title2="Dream home"
      desc1="Explore Apartment, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose-for-rent"
      imageUrl="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
      ></Banner>
    </div>
  )
}
