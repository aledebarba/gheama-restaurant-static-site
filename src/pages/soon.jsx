import React from 'react'
import { SubPageHeader } from '../components/subpage-header';
import Layout from '../components/layout';
import { TopNav } from '../components/Nav';
import { Contact } from '../components/Contact';
import { Instagram } from '../components/Instagram';
import { Footer } from '../components/Footer';
import { i18n } from './../data/translations';

const Soon = () => {return(
    <Layout>
        <TopNav/>
        <SubPageHeader src='/redsofa_grayscale.png' alt='woman sitting on red sofa'>
            {/* To change the texts of this section look fot it on ./data/translations.js */}
            <div dangerouslySetInnerHTML={{__html: i18n.commingSoon.en}} />
            <div dangerouslySetInnerHTML={{__html: i18n.ourHistory.en }} />
        </SubPageHeader>
        <Contact/>
        <Instagram/>
        <Footer />
    </Layout>
)}

export default Soon