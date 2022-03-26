import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">My First</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://cc-west-blog-assets.s3.amazonaws.com/uploads/2018/10/blogging-stats.jpg"
        alt="header pic"
      />
    </div>
  );
}