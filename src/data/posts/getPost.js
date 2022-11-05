import { API_POSTS_URL } from '../../config/appConfig';
import { fetchJson } from '../../utils/fetchJson';
import { markdownToHtml } from '../../utils/markdownToHtml';

export const getPost = async (slug) => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${API_POSTS_URL}?populate=%2A&filters[slug][$eq]=${slugString}`;
  const posts = await fetchJson(url);

  if (!posts.data.length) return posts;

  const finalContent = await markdownToHtml(posts.data[0].attributes.content);
  posts.data[0].attributes.content = finalContent;

  return posts;
};
