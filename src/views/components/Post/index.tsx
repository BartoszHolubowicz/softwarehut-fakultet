import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface IProps {
  postId: number;
  title: string;
  body: string;
}

const Post = ({ postId, title, body }: IProps) => {
  return (
    <div className="post">
      <h1>
        <Link to={`/posts/${postId}/comments`}>{title}</Link>
      </h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;