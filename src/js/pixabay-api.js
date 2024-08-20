import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const privateKey = '45452442-4cc5f4d2a2a90f01a49495506';

export async function fetchData(query, page, perPage) {
  const response = await axios.get(baseUrl, {
    params: {
      key: privateKey,
      q: query,
      image_type: 'photo',
      per_page: perPage,
      page: page,
      safesearch: true,
      orientation: 'horizontal',
    },
  });
  return response.data;
}
