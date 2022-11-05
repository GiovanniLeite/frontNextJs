import PropTypes from 'prop-types';

import { getPost } from '../../data/posts/getPost';
import { getAllPosts } from '../../data/posts/getAllPosts';

import Post from '../../containers/Post';

export default function DynamicPost({ post }) {
  return <Post post={post} />;
}

DynamicPost.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export const getStaticPaths = async () => {
  const { data } = await getAllPosts('populate=%2A&sort[0]=id:desc');

  return {
    paths: data.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { data } = await getPost(ctx.params.slug);
  const post = data.length > 0 ? data[0] : {};

  return {
    props: { post },
  };
};
