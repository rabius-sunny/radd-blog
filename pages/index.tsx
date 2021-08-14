import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PostPagination from '../src/pagination';

export default function Index({ posts }: any) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Next.js and Typescript Starter
        </Typography>
      </Box>
      <PostPagination
        data={posts}
        pageLimit={3}
        dataLimit={6}
      />
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://mbook-backend.herokuapp.com/sharedposts')
  const data = await res.json()
  let posts: any[] = []
  data.map((post: {}) => posts.unshift(post))

  return {
    props: { posts }
  }
}