import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { get } from 'lodash';

import { Container } from './styled';

export default function PostGrid({ posts }) {
  const [items, setItems] = useState([]); // current list of items
  const [fullListItems, setFullListItems] = useState([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); // number of pages
  const maxItemsAllowed = 8; // maximum items allowed
  const [currentPage, setCurrentPage] = useState(1); // current page

  useEffect(() => {
    const pagination = (data) => {
      if (data.length > maxItemsAllowed) {
        const a = data.length / maxItemsAllowed;
        setNumberOfPages(Math.ceil(a));
        setFullListItems(data);
        setItems(data.slice(0, maxItemsAllowed));
      } else {
        setNumberOfPages(1);
        setFullListItems([]);
        setItems(data);
      }
    };

    pagination(posts);
    // eslint-disable-next-line
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setItems(fullListItems.slice(0, end));
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <div className="cards">
        {get(items[0], 'attributes.title', false) &&
          items.map((post) => (
            <div className="card" key={post.attributes.slug}>
              <div className="image">
                <Link
                  href="/post/[slug]"
                  as={`/post/${post.attributes.slug}`}
                  title={post.attributes.title}
                >
                  <img
                    src={
                      post.attributes.cover
                        ? post.attributes.cover.data.attributes.formats.small
                            .url
                        : ''
                    }
                    data-testid="coverPost"
                  />
                </Link>
              </div>
              <div className="title">
                <Link
                  href="/post/[slug]"
                  as={`/post/${post.attributes.slug}`}
                  title={post.attributes.title}
                >
                  {post.attributes.title.length > 35
                    ? `${post.attributes.title.slice(0, 35)} ...`
                    : post.attributes.title}
                </Link>
              </div>
            </div>
          ))}
      </div>
      {currentPage < numberOfPages && (
        <button
          type="button"
          onClick={() => handleLoadMore()}
          title="Ver mais posts"
        >
          Veja mais
        </button>
      )}
    </Container>
  );
}

PostGrid.propTypes = {
  posts: PropTypes.array.isRequired,
};
