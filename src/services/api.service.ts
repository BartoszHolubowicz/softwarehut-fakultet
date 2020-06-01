import http, { URL } from './utils';

const API = {
  GET_POSTS: () => `${URL}posts`,
  SEARCH_POST_COMMENTS_BY_ID: (id: number) => `${URL}posts/${id}/comments`,
  SEARCH_USER_BY_ID: (id: number) => `${URL}users/${id}`
};

export interface IPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostsProps {
  posts: IPostProps[];
}

export interface ICommentProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentsProps {
  comments: ICommentProps[];
}

interface IUserAddressGeo {
  lat: string;
  lng: string;
}

interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserAddressGeo;
}

interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: IUserCompany;
}

interface IPostsSearchResponse extends Array<IPostProps> {
  Error?: string;
}
interface ICommentsSearchResponse extends Array<ICommentProps> {
  Error?: string;
}
interface IUserSearchResponse extends IUserProps {
  Error?: string;
}

const apiService = {
  getPosts: async () => {
    try {
      const searchResult: IPostsSearchResponse = await http.get(API.GET_POSTS());
      if (searchResult?.Error) {
        console.error(searchResult.Error);
        return null;
      } else {
        const result: IPostsProps = {
          posts: searchResult.map((post) => ({
            id: post.id,
            userId: post.userId,
            title: post.title,
            body: post.body
          }))
        };
        return result;
      }
    } catch (err) {
      console.error(err);
    }
  },
  searchPostCommentsById: async (id: number) => {
    try {
      const searchResult: ICommentsSearchResponse = await http.get(API.SEARCH_POST_COMMENTS_BY_ID(id));
      if (searchResult?.Error) {
        console.error(searchResult.Error);
        return null;
      } else {
        const result: ICommentsProps = {
          comments: searchResult.map((comment) => ({
            id: comment.id,
            postId: comment.postId,
            email: comment.email,
            name: comment.name,
            body: comment.body
          }))
        };
      return result;
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  },
  searchUserById: async (id: number) => {
    try {
      const searchResult: IUserSearchResponse = await http.get(API.SEARCH_USER_BY_ID(id));
      if (searchResult?.Error) {
        console.error(searchResult.Error);
        return null;
      } else {
        const result: IUserProps = searchResult;
        return result;
      }
    } catch (err) {
      console.error(err);
    }
  }
};

export default apiService;