import { useRouter } from "next/router"

const DetailPost = ({ posts }: any) => {

    const { title } = posts[0]
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading</h1>
    }

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
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
        fallback: false
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