import * as React from 'react';
import PostPagination from '../src/pagination';
import { RootContainer } from '../styles/customs/wrappers';

export default function Index({ posts }: any) {
  return (
    <RootContainer>
      <PostPagination
        data={posts}
        pageLimit={3}
        dataLimit={6}
      />
    </RootContainer>
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