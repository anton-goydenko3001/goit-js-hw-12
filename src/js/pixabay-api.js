export const baseUrl = 'https://pixabay.com/api/';
export const privateKey = '45452442-4cc5f4d2a2a90f01a49495506';
export function fetchData(query) {
  return fetch(
    `${baseUrl}?key=${privateKey}&q=${query}&image_type=photo&per_page=150&safesearch=true&orientation=horizontal`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
