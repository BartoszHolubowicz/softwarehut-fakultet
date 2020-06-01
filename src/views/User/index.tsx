import React from 'react';
import { useParams } from 'react-router-dom';
import apiService, { IUserProps } from '../../services/api.service';
import './index.scss';

const Comments = () => {
  const [user, setUser] = React.useState<IUserProps | null>(null);
  const { id } = useParams();

  React.useEffect(() => {
    apiService.searchUserById(id).then(resp => {
      if (resp)
        setUser(resp);
    });
  }, []);

  return (
    <div className="user">
      {!!user ?
        <>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <p>Address: {user.address.city}, {user.address.street} {user.address.zipcode}</p>
          <p>Phone number: {user.phone}</p>
          <p>Website: {user.website}</p>
        </>
        :
        <h1>This user couldn't be found</h1>}
    </div>
  );
};

export default Comments;