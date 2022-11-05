import { API_POSTS_URL } from '../../config/appConfig';
import { fetchJson } from '../../utils/fetchJson';

export const getAllPosts = async (query = '') => {
  const url = `${API_POSTS_URL}?&${query}`;
  const posts = await fetchJson(url);
  return posts;
};
