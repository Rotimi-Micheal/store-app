import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogSection.css";

const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(
        "https://store-app-bd242-default-rtdb.firebaseio.com/blogs.json"
      );
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      console.log(data);

      const loadedData = [];

      for (const keys in data) {
        loadedData.push({
          id: keys,
          title: data[keys].title,
          snippet: data[keys].snippet,
          text: data[keys].text,
          image: data[keys].image,
        });
      }
      setBlogData(loadedData);
      console.log(loadedData);
    };
    fetchBlog();
  }, []);

  return (
    <section>
      <ul className="blogUl">
        {blogData.map((data) => {
          return (
            <li key={data.id}>
              <Link to={`${data.id}`}>
                <h1>{data.title}</h1>
                <div className="split">
                  {" "}
                  <img alt={data.title} src={data.image} />
                  <div className="text">
                    <p>{data.snippet}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BlogSection;
