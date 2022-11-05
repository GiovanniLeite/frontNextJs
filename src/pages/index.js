import PropTypes from 'prop-types';

import HomePage from '../containers/HomePage';
import { getAllPosts } from '../data/posts/getAllPosts';

export default function Home({ data }) {
  return <HomePage posts={data} />;
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
};

export const getStaticProps = async () => {
  const { data } = await getAllPosts('populate=%2A&sort[0]=id:desc');

  return {
    props: { data },
  };
};
