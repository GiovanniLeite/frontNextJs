import Post from '..';

const post = {
  id: 3,
  attributes: {
    content:
      '# Sic dum rursusque laborent securi spectans levatus\n\n## Nec caput iugulo porrigit\n\nLorem markdownum validoque anum excepto nunc',
    slug: 'academia-top-mais',
    createdAt: '2022-08-19T19:33:29.172Z',
    updatedAt: '2022-12-28T17:57:03.118Z',
    publishedAt: '2022-08-19T19:33:30.072Z',
    title: 'Academia top Mais',
    cover: {
      data: {
        id: 15,
        attributes: {
          name: '_2.png',
          alternativeText: '_2.png',
          caption: '_2.png',
          width: 1920,
          height: 1080,
          formats: {
            large: {
              ext: '.png',
              url: '/images/tests/1666740784814_13889_1_2.png',
              hash: 'large_2_39e32e2911',
              mime: 'image/png',
              name: 'large__2.png',
              path: null,
              size: 8.82,
              width: 1000,
              height: 563,
              provider_metadata: {
                public_id: 'large_2_39e32e2911',
                resource_type: 'image',
              },
            },
            small: {
              ext: '.png',
              url: '/images/tests/1666740784814_13889_1_2.png',
              hash: 'small_2_39e32e2911',
              mime: 'image/png',
              name: 'small__2.png',
              path: null,
              size: 2.5,
              width: 500,
              height: 281,
              provider_metadata: {
                public_id: 'small_2_39e32e2911',
                resource_type: 'image',
              },
            },
            medium: {
              ext: '.png',
              url: '/images/tests/1666740784814_13889_1_2.png',
              hash: 'medium_2_39e32e2911',
              mime: 'image/png',
              name: 'medium__2.png',
              path: null,
              size: 5.18,
              width: 750,
              height: 422,
              provider_metadata: {
                public_id: 'medium_2_39e32e2911',
                resource_type: 'image',
              },
            },
            thumbnail: {
              ext: '.png',
              url: '/images/tests/1666740784814_13889_1_2.png',
              hash: 'thumbnail_2_39e32e2911',
              mime: 'image/png',
              name: 'thumbnail__2.png',
              path: null,
              size: 0.76,
              width: 245,
              height: 138,
              provider_metadata: {
                public_id: 'thumbnail_2_39e32e2911',
                resource_type: 'image',
              },
            },
          },
          hash: '2_39e32e2911',
          ext: '.png',
          mime: 'image/png',
          size: 2.13,
          url: '/images/tests/1666740784814_13889_1.png',
          previewUrl: null,
          provider: 'cloudinary',
          provider_metadata: {
            public_id: '2_39e32e2911',
            resource_type: 'image',
          },
          createdAt: '2022-12-28T17:53:19.351Z',
          updatedAt: '2022-12-28T17:53:19.351Z',
        },
      },
    },
    category: {
      data: {
        id: 2,
        attributes: {
          name: 'JavaScript',
          createdAt: '2022-08-19T19:13:03.468Z',
          updatedAt: '2022-08-19T19:13:04.395Z',
          publishedAt: '2022-08-19T19:13:04.392Z',
        },
      },
    },
    author: {
      data: {
        id: 2,
        attributes: {
          name: 'Giovanni Leite',
          createdAt: '2022-08-19T19:12:27.349Z',
          updatedAt: '2022-08-19T19:12:28.887Z',
          publishedAt: '2022-08-19T19:12:28.882Z',
        },
      },
    },
  },
};

export default {
  title: 'containers/Post',
  component: Post,
};

export const Default = () => (
  <div style={{ backgroundColor: '#fff' }}>
    <Post post={post} />
  </div>
);
