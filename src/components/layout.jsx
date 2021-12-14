import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = props => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content='Gheama is a Georgian restaurant in Milan'/>
                <title>Gheama Restaurant</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </Helmet>
            {props.children}
        </>
    )
}

export default Layout