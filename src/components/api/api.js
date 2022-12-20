// export const getSingleBlog = async (blogId) => {
//   const response = await fetch(
//     `https://store-app-bd242-default-rtdb.firebaseio.com/blogs/${blogId}.json`
//   );

//   const data = await response.json();

//   if (!response.ok) throw new Error(data.message || "could not fetch Blog.");

//   const loadedData = {
//     id: blogId,
//     ...data,
//   };
//   return loadedData;
// };
