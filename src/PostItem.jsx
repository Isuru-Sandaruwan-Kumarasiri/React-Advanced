import React from "react";

function PostItem({
  postID,
  title,
  description,
  authorID,
  thumbnail,
  category,
}) {
  const showDescription =
    description.length > 145 ? description.substr(0, 145) + "..." : description;
  const showtitle = title.length > 145 ? title.substr(0, 145) + "..." : title;
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post__content">
        <h3>{showtitle}</h3>

        <p>{showDescription}</p>
        <div className="post__footer">
          <button className="btn category">{category}</button>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
