import React from 'react';
import Post from '../components/Post';
import apiService, { IPostsProps } from '../../services/api.service';
import './index.scss';

const Home = () => {
  const [posts, setPosts] = React.useState<IPostsProps | null>(null);

  React.useEffect(() => {
    apiService.getPosts().then(resp => {
      if (resp)
        setPosts(resp);
    });
  }, []);

  return (
    <div className="home">
      {!!posts?.posts.length && 
        posts.posts.map(post => <Post key={post.id} postId={post.id} title={post.title} body={post.body}/>)
      }
    </div>
  );
};

export default Home;