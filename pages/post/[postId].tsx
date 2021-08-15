import { Container } from "@material-ui/core"

const DetailPost = ({ posts }: any) => {

    const { title, post } = posts[0]
    return (
        <Container>
            <h1>{title}</h1>
            <p>{post}</p>
        </Container>
    )
}

export default DetailPost

// export async function getStaticPaths() {
//     const res = await fetch('https://mbook-backend.herokuapp.com/sharedposts')
//     const data = await res.json()

//     const paths = data.map((post: any) => {
//         return {
//             params: {
//                 postId: `${post._id}`
//             }
//         }
//     })

//     return {
//         paths,
//         fallback: true
//     }
// }

export async function getServerSideProps(context: any) {
    let { params } = context

    const res = await fetch(`https://mbook-backend.herokuapp.com/sharedpost/${params.postId}`)
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}