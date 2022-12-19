import "./BlogSection.css";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Fashion 1",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leonie-hanne-wearing-a-brown-leather-coat-a-yellow-pullover-news-photo-1641373541.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula facilisis efficitur. Vivamus et arcu non libero vestibulum aliquam. Donec suscipit odio vitae ullamcorper bibendum. In vitae ligula porta, euismod est quis, efficitur libero. Pellentesque dictum at neque vel pretium. Phasellus pulvinar, libero fringilla euismod sollicitudin, nisi ex pretium enim, eget tempus ipsum orci ut dolor. Vestibulum lacinia pulvinar fringilla. Vivamus orci urna, mollis lobortis malesuada id, faucibus ut diam. Donec elementum dolor sed ante posuere, in egestas nulla aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et convallis lorem, nec rutrum metus. Nunc lacinia, felis non facilisis solli",
  },
  {
    id: "m2",
    title: "Fashion 1",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leonie-hanne-wearing-a-brown-leather-coat-a-yellow-pullover-news-photo-1641373541.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula facilisis efficitur. Vivamus et arcu non libero vestibulum aliquam. Donec suscipit odio vitae ullamcorper bibendum. In vitae ligula porta, euismod est quis, efficitur libero. Pellentesque dictum at neque vel pretium. Phasellus pulvinar, libero fringilla euismod sollicitudin, nisi ex pretium enim, eget tempus ipsum orci ut dolor. Vestibulum lacinia pulvinar fringilla. Vivamus orci urna, mollis lobortis malesuada id, faucibus ut diam. Donec elementum dolor sed ante posuere, in egestas nulla aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et convallis lorem, nec rutrum metus. Nunc lacinia, felis non facilisis solli",
  },
];
const BlogSection = () => {
  return (
    <section>
      <ul className="blogUl">
        {DUMMY_DATA.map((data) => {
          return (
            <li key={data.id}>
              <h1>{data.title}</h1>
              <div className="split">
                {" "}
                <img alt={data.title} src={data.image} />
                <div className="text">
                  <p>{data.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BlogSection;
