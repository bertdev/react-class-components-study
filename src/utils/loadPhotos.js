export const loadPhotos = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/photos");
  return result.json();
};
