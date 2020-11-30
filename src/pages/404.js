import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <Link to="/">
            Return home (
            <span role="img" aria-label="a small illustration of a home">
                🏡
            </span>
            )
        </Link>
    </Layout>
)

export default NotFoundPage
