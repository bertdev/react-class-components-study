export const  loadPosts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await result.json();
}; 
