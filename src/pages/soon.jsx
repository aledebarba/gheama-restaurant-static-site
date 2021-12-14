import React from 'react'
import { SubPageHeader } from '../components/subpage-header';
import Layout from '../components/layout';
import { TopNav } from '../components/Nav';
import { Contact } from '../components/Contact';
import { Instagram } from '../components/Instagram';
import { Footer } from '../components/Footer';

const Soon = () => {return(
    <Layout>
        <TopNav/>
        <SubPageHeader src='/redsofa_grayscale.png' alt='woman sitting on red sofa'>
            <h1>This page is coming soon</h1>
            <h3>Please note that this site is still under construction and all the content are not available yet.</h3>
            <p>What was a dream for many, Irina made into reality: upon completing her internship, she started working for the Italian company “Società Italia”, combining more than twenty brands in the fashion industry. “Società Italia” was later replaced by “Share Diaries”, while Milan turned into Monaco. She pursued her career in Digital Marketing and established connections with the most famous representatives of the fashion and film industry as well as sports. Her main job was to communicate with the investors. Two years later, she founded her own company with partners, seeking out innovative ideas and projects to this day, connecting individuals and companies, and helping them find an investor.
No matter what she does, there has always been time left to mull over new ideas and projects – and that applies to the present times: according to Irina, she has recently taken on another international level initiative and promises that in the near future we will be the first she shares the updates with.  
Now it is time for “Gheama”, the first-ever Georgian restaurant in Italy, which will be so much more than just a restaurant.
Irina combined the restaurant and lounge concepts, founding the company “Gheama” back in 2019. Irina’s business partners are her restaurateur spouse Riccardo de Vicar, and her longtime friend Tony Tudino. Tudino has been Irina’s business partner for years. His name is associated with investments in over 17 successful, globally established businesses and companies in 6 countries around the world, with offices in Monaco and Dubai. The annual revenue of these businesses exceeds 1 billion euros. Tony Tudino is also the co-founder and the president of Global Equity.</p>
        </SubPageHeader>
        <Contact/>
        <Instagram/>
        <Footer />
    </Layout>
)}

export default Soon