import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = props => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content='Gheama is a Georgian restaurant in Milan'/>
                <meta name="keywords" content="Gheama, Restaurant, Georgian Cuisine"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Gheama Restaurant</title>
            </Helmet>
            {props.children}
        </>
    )
}

export default Layout