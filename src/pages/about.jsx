import React from 'react'
import { SubPageHeader } from '../components/subpage-header';
import Layout from '../components/layout';
import { TopNav } from '../components/Nav';
import { Contact } from '../components/Contact';
import { Instagram } from '../components/Instagram';
import { Footer } from '../components/Footer';

const About = () => {return(
    <Layout>
        <TopNav/>
        <SubPageHeader src='/redsofa_grayscale.png' alt='woman sitting on red sofa'>
            <h1>Short Notes</h1>
            <h3>Velit amet gravida nisi lacus. Ut platea diam id etiam nisl diam pretium quisque. Integer duis purus ut nisl aliquet cum id gravida sagittis. Mattis pretium eget non diam duis. Arcu volutpat arcu sed vitae. Tristique nisi nisi viverra sit pharetra sem etiam.</h3>
            <p>Ante fermentum pulvinar nulla amet ut sed. Aenean est ut ac sit semper in nunc. Vitae risus pretium velit urna, egestas aliquet montes, leo non. Purus, consectetur imperdiet pretium nibh euismod faucibus pulvinar. Quis quisque adipiscing mus sollicitudin. In sem pharetra ut sagittis, nisl non sit id fermentum. Non tincidunt in scelerisque consequat integer cursus quis. Aliquam pellentesque turpis dis eget aliquam ante vulputate. Nibh ut ut quis id ac. Condimentum malesuada ultrices vel id.
Odio est nec dui amet in suscipit dui. Fermentum, lobortis auctor diam cursus. Sit massa nec luctus tellus aliquet risus vel vitae mauris. Ornare eu sit elit sit tempor volutpat non bibendum. Turpis nisl, aliquam sit consequat feugiat urna. Vel vestibulum viverra elementum elementum sem purus. Integer tellus vel, turpis viverra orci amet. Tortor, ante mattis viverra mi. Varius eleifend ac pretium, ut sed senectus vestibulum et eu. Posuere massa id massa praesent. Viverra vitae vestibulum nibh diam diam, venenatis amet nec netus. Hac tristique sed tellus vitae, adipiscing blandit enim nulla. In urna congue porta a odio pharetra mauris scelerisque. Senectus etiam nisl eget sem. Quis id ridiculus ut facilisi.
Velit amet gravida nisi lacus. Ut platea diam id etiam nisl diam pretium quisque. Integer duis purus ut nisl aliquet cum id gravida sagittis. Mattis pretium eget non diam duis. Arcu volutpat arcu sed vitae. Tristique nisi nisi viverra sit pharetra sem etiam. Cursus cursus in id tempor</p>
        </SubPageHeader>
        <Contact/>
        <Instagram/>
        <Footer />
    </Layout>
)}

export default About