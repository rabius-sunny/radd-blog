import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from "react"
import axios from "axios"
import { Container } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress'
import classes from '../../styles/tags.module.css'

const Tags = () => {

    const [posts, setPosts] = useState([])
    let allTags: any[] = []

    useEffect(() => {
        axios.get('https://mbook-backend.herokuapp.com/sharedposts')
            .then((data: any) => setPosts(data.data))
            .catch((err: any) => console.log(err.message))
    }, [])

    posts.map((post: any) => allTags.push(post.tag))
    let tags = allTags.filter((c, index) => allTags.indexOf(c) === index)

    return <>

        <Head>
            <title>Category | Radd Blog</title>
            <meta property="og:title" content="Category | Radd Blog" />
            <meta property="og:description" content="Get Categorized posts by their tags. " />
            <meta property="og:url" content="radd-blog.vercel.app" />
            <meta property="twitter:title" content="Category | Radd Blog" />
            <meta property="twitter:description" content="Get Categorized posts by their tags. " />
            <meta property="twitter:card" content="radd-blog.vercel.app/tags" />
        </Head>

        <Container style={{ height: '100vh' }}>
            <div className={classes.tagContainer}>
                <h1>Get Posts by their tag</h1>
                <div className={classes.tags}>
                    {
                        !allTags.length && <CircularProgress style={{ color: 'darkcyan' }} />
                    }
                    {
                        tags.map(tag => (
                            <Link href={`/tags/${tag}`} passHref>
                                <span className={classes.tag}>
                                    {tag}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </Container>
    </>
}

export default Tags