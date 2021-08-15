import Head from "next/head"
import ReactHtmlParser from 'react-html-parser'
import { Container } from "@material-ui/core"
import { useRouter } from "next/router"
import { useState } from "react"
import { Heading } from "../../styles/customs/wrappers"
import { BanglaTypo } from "../../styles/customs/typo"

const DetailPost = ({ posts }: any) => {

    const [size, setSize] = useState(16)
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading</h1>
    } else {

        const { title, exerpt, post, image } = posts[0]

        return (
            <>
                <Head>
                    <title>{`${title} | Radd Blog`}</title>
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={exerpt} />
                    <meta property="og:image" content={image} />
                    <meta property="og:url" content="radd-blog.vercel.app" />
                    <meta property="twitter:title" content={title} />
                    <meta property="twitter:description" content={exerpt} />
                    <meta property="twitter:image" content={image} />
                    <meta property="twitter:card" content="radd-blog.vercel.app" />
                </Head>

                <div>
                    <div>
                        <div style={{ textAlign: 'center' }}>
                            <img style={{ maxWidth: '100%' }} src={image} alt="post image" />
                        </div>
                    </div>

                    <Heading>
                        <div style={{ padding: '0 15px' }}><h3 style={{ fontFamily: 'kalpurush' }}>{title}</h3></div>
                    </Heading>

                    <div style={{ marginBottom: '20px', marginLeft: '10px' }} className="fontSize">
                        <p>
                            <button onClick={() => setIsOpen(!isOpen)}>font size &nabla; </button>
                        </p>
                        <div style={{ display: isOpen ? 'block' : 'none', margin: '10px 0' }}>
                            <button onClick={() => setSize(size + 2)}>+</button>
                            <span style={{ padding: '0 5px', color: 'darkcyan' }}>{size}</span>
                            <button onClick={() => setSize(size - 2)}> -</button>
                        </div>
                    </div>

                    <Container>
                        <BanglaTypo style={{ whiteSpace: "pre-line" }} variant="body2" >
                            <p style={{ fontSize: `${size}px` }}>{ReactHtmlParser(post)}</p>
                        </BanglaTypo>
                    </Container>
                </div>
            </>
        )
    }
}

export default DetailPost

export async function getStaticPaths() {
    const res = await fetch('https://mbook-backend.herokuapp.com/sharedposts')
    const data = await res.json()

    const paths = data.map((post: any) => {
        return {
            params: {
                postId: `${post._id}`
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context: any) {
    let { params } = context

    const res = await fetch(`https://mbook-backend.herokuapp.com/sharedpost/${params.postId}`)
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}