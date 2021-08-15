import Head from 'next/head'
import { useRouter } from "next/router"
import { CircularProgress, Container, Grid } from "@material-ui/core"
import axios from "axios"
import { useState, useEffect } from "react"
import PostPagination from '../../src/pagination'

const Categorized = () => {

    const router = useRouter()
    const { tag } = router.query
    type S = any[]

    const [posts, setPosts] = useState<S>([])
    let alignedPost: any[] = []
    posts.map(post => alignedPost.unshift(post))

    useEffect(() => {
        axios.get(`https://mbook-backend.herokuapp.com/tag/${tag}`)
            .then(data => setPosts(data.data))
            .catch(err => console.log(err.message))
    }, [tag])

    return (
        <>

            <Head>
                <title>{`Posts of ${" " + tag}`}</title>
            </Head>

            <main>
                <Container style={{ minHeight: '100vh' }}>
                    <Grid container>
                        {
                            !posts.length && <div style={{ margin: '100px auto' }}><CircularProgress /></div>
                        }
                        {posts.length &&
                            <div>
                                <h1 style={{ fontFamily: 'kalpurush', color: '#556cd6' }}>Got {posts.length} posts for <span style={{ color: '#ff3d00' }}>{tag}</span> </h1> <hr />
                                <PostPagination
                                    data={alignedPost}
                                    pageLimit={3}
                                    dataLimit={6}
                                />
                            </div>
                        }
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Categorized