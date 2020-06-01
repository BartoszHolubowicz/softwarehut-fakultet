import React from 'react';
import { useParams } from 'react-router-dom';
import apiService, { ICommentsProps } from '../../services/api.service';
import './index.scss';
import Comment from '../components/Comment';

const Comments = () => {
  const [comments, setComments] = React.useState<ICommentsProps | null>(null);
  const { id } = useParams();

  React.useEffect(() => {
    apiService.searchPostCommentsById(id).then(resp => {
      if (resp) {
        setComments(resp);
      }
    });
  }, []);

  return (
    <div className="comments">
      {!!comments?.comments.length ?
        comments.comments.map(comment => <Comment key={comment.postId} id={comment.id} name={comment.name} email={comment.email} body={comment.body} />)
        :
        <h1 className="no-comment">No comment...</h1>
      }
    </div>
  );
};

export default Comments;