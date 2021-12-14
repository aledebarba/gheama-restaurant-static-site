import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = props => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content='Gheama is a Georgian restaurant in Milan'/>
                <title>Gheama Restaurant</title>
            </Helmet>
            {props.children}
        </>
    )
}

export default Layout