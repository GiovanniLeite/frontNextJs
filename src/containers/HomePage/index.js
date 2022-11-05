import Head from 'next/head';
import PropTypes from 'prop-types';

import { APP_NAME } from '../../config/appConfig';

import MainContainer from '../../components/MainContainer';
import PostGrid from '../../components/PostGrid';

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>{`${APP_NAME} | Home`}</title>
        <meta name="description" content="Home" />
        <meta
          name="keywords"
          content="Página home do projeto exemplo com next do portfólio"
        />
      </Head>
      <MainContainer>
        <PostGrid posts={posts} />
      </MainContainer>
    </>
  );
}

HomePage.propTypes = {
  posts: PropTypes.array.isRequired,
};
