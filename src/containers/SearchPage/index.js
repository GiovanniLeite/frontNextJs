import Head from 'next/head';
import PropTypes from 'prop-types';

import { APP_NAME } from '../../config/appConfig';

import MainContainer from '../../components/MainContainer';
import { Container } from './styled';
import PostGrid from '../../components/PostGrid';

export default function SearchPage({ posts, search }) {
  return (
    <>
      <Head>
        <title>{`${APP_NAME} | Busca`}</title>
        <meta name="description" content="Página de buscas" />
        <meta name="keywords" content="Página onde buscamos o post" />
      </Head>
      <MainContainer>
        <Container>
          <h2>{`Você procurou por: ${search}`}</h2>
          <PostGrid posts={posts} />
        </Container>
      </MainContainer>
    </>
  );
}

SearchPage.propTypes = {
  posts: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
};
