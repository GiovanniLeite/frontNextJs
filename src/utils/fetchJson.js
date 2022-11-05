export const fetchJson = async (url) => {
  const rawData = await fetch(url);
  const jsonData = await rawData.json();
  return jsonData;
};
