import PropTypes from 'prop-types';

import SearchPage from '../../containers/SearchPage';
import { getAllPosts } from '../../data/posts/getAllPosts';

export default function Search({ data, search }) {
  return <SearchPage posts={data} search={search} />;
}

Search.propTypes = {
  data: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  const search = ctx.params.search;

  const searchQuery = search ? `&filters[title][$containsi]=${search}` : '';
  const urlQuery = `populate=%2A&sort[0]=id:desc${searchQuery}`;
  const { data } = await getAllPosts(urlQuery);

  return {
    props: { data, search },
  };
};
