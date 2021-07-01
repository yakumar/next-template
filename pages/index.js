import Head from 'next/head'
import Image from 'next/image'
import {Box, Heading} from "@chakra-ui/react"
import cheerio from "cheerio"
// import styles from '../styles/Home.module.css'
import axios from "axios"
import Link from "next/link"

export default function Home(props) {
  console.log("getting props", props)
  return (
   <Box bg="bg2"
  //  w={["15rem", "20rem", "25rem", "30rem"]}
  //  h="auto"
   marginX={["2rem", "4rem", "6rem", "8rem"]}
   marginY={["1rem", "2rem", "3rem", "4rem"]}
  //  marginLeft={["5rem", "10rem", "20rem", "25rem"]}
   padding="1rem"
   textAlign="center"
   borderRadius="1rem"
   borderBottomColor="bg3"
   boxShadow="1rem 2rem bg1">
     <Heading as="h2">Boost ur links</Heading>

     {/* <Heading as="h5">{props.title.slice(8, 13)}</Heading> */}

     <Link href="/medications/montek_lc">
          <a>MonteK</a>
        </Link>
        <Link href="/dental/best_dental_tirupati">
          <a>Dental Hospital Tirupati</a>
        </Link>





   </Box>
  )
}


// export async function getStaticProps() {
//   const { data } = await axios.get('https://www.goodreturns.in/gold-rates/kerala.html')
//   const $ = cheerio.load(data)
//   const title = $('#current-price').text()
//   const lastScraped = new Date().toISOString()
//   return {
//     props: { title, lastScraped },
//     revalidate: 10,
//   }
// }