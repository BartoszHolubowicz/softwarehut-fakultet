import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface IProps {
  id: number;
  name: string;
  email: string;
  body: string;
}

const Comment = ({ id, name, email, body }: IProps) => {
  return (
    <div className="comment">
      <h1>
        <Link to={`/users/${id}`}>{name}</Link>
      </h1>
      <h2>{email}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Comment;