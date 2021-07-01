import { NextSeo } from 'next-seo';
import {Box, Heading} from "@chakra-ui/react"


export default function Montek(props) {

    return (
    <>
    <NextSeo 
        title="Montek Lc"
        description="Montek Lc. Montec Lc used for. montek lc tablet uses, montek lc kid, montek lc use, montek lc kid syrup"
        canonical="https://www.boostinglink.com/dental/best_dental_tirupati/"
        openGraph={{
          url: 'https://www.boostinglink.com/dental/best_dental_tirupati/',
          title: 'Best Dental Hospital in Tirupati',
          description: 'Montek Lc ',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            
          ],
          site_name: 'Boosting Link',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
    
    
    />

    <Box bg="bg2"
   w={["15rem", "20rem", "25em", "30rem"]}
   h="20rem"
   marginX={["10rem", "20rem", "25rem", "30rem"]}
   marginY={["5rem", "6rem", "8em", "10rem"]}
  //  marginLeft={["5rem", "10rem", "20rem", "25rem"]}
   padding="1rem"
   textAlign="center"
   borderRadius="1rem"
   borderBottomColor="bg3"
   boxShadow="1rem 2rem bg1">
       <Heading>Best Dental Hospital in Tirupati</Heading>

       <p>

       Regular visits to dentist are recommended. Dentists identifies any problem in the teeth and gum. </p><p>

       <a target="_blank" href="https://NewglobalDental.com/" rel="noopener noreferrer">Best Dental Clinic </a> 
       has dentists who will assess any damage to oral and gum tissues and prepares a relative treatment planning.
       </p>



    </Box>
    


    </>
    )
}