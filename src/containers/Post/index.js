import Head from 'next/head';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import { APP_NAME } from '../../config/appConfig';

import MainContainer from '../../components/MainContainer';
import { Container } from './styled';

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{`${APP_NAME} | ${get(post, 'attributes.slug', '')}`}</title>
        <meta name="description" content="Home" />
        <meta
          name="keywords"
          content="Acompanhe as últimas notícias e vídeos, além de tudo sobre esportes e entretenimento. Conheça o conteúdo e os serviços do "
        />
        <meta
          name="keywords"
          content="noticias, videos, esportes, entretenimento, diversao, fotos"
        />
      </Head>
      <MainContainer>
        <Container>
          <div className="title">
            <h2>{get(post, 'attributes.title', '')}</h2>
          </div>
          <div className="content">
            {get(post, 'attributes.cover', false) && (
              <div className="cover">
                <img
                  src={get(post, 'attributes.cover.data.attributes.url', '')}
                  title={get(
                    post,
                    'attributes.cover.data.attributes.alternativeText',
                    '',
                  )}
                />
                <p>
                  {get(
                    post,
                    'attributes.cover.data.attributes.alternativeText',
                    '',
                  )}
                </p>
              </div>
            )}

            <article>
              <div
                dangerouslySetInnerHTML={{
                  __html: get(post, 'attributes.content', ''),
                }}
              />
            </article>
          </div>
        </Container>
      </MainContainer>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({}).isRequired,
};
