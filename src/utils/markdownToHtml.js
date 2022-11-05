import remark from 'remark';
import remarkHtml from 'remark-html';

export const markdownToHtml = async (content) => {
  const data = await remark().use(remarkHtml).process(content);
  return String(data.contents);
};
