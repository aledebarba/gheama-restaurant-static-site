import React from 'react'
import { SubPageHeader } from '../components/subpage-header';
import Layout from '../components/layout';
import { TopNav } from '../components/Nav';
import { Contact } from '../components/Contact';
import { Instagram } from '../components/Instagram';
import { Footer } from '../components/Footer';
import { i18n } from './../data/translations';

const About = () => {return(
    <Layout>
        <TopNav/>
        <SubPageHeader src='/redsofa_grayscale.png' alt='woman sitting on red sofa'>
            {/* if you want to change the html or text of this section, look into ./data/translations.js */}
            <div dangerouslySetInnerHTML={{__html: i18n.aboutUs.en }} />
        </SubPageHeader>
        <Contact/>
        <Instagram/>
        <Footer />
    </Layout>
)}

export default About