import "./FullBlogPost.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { getSingleBlog } from "../api/api";

const FullBlogPost = () => {
  const [blogData, setBlogData] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.blogId);
  const { blogId } = params;

  useEffect(() => {
    const getSingleBlog = async (blogId) => {
      const response = await fetch(
        `https://store-app-bd242-default-rtdb.firebaseio.com/blogs/${blogId}.json`
      );

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "could not fetch Blog.");

      const loadedData = {
        id: blogId,
        ...data,
      };
      console.log(loadedData);
      setBlogData(loadedData);
    };
    getSingleBlog(blogId);
  }, [blogId]);

  const navigateHandler = () => {
    navigate("/blog");
  };

  return (
    <section>
      <ul className="blogdataUl">
        <button onClick={navigateHandler}>Go back</button>
        <li key={blogData.id}>
          <h1>{blogData.title}</h1>
          <div>
            {" "}
            <img alt={blogData.title} src={blogData.image} />
            <div className="text">
              <p>{blogData.text}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default FullBlogPost;
