import { createContext, useReducer } from "react";
const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => { },
  deletePost: () => { },

}
export const PostList = createContext(
  DEFAULT_CONTEXT
);
const postListReducer = (currPostList, action) => {
  return currPostList;
}
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
  const addPost = () => {

  }
  const deletePost = () => {

  }
  return <PostList.Provider value={{ postList, addPost, deletePost }}>
    {children}
  </PostList.Provider>
};
const DEFAULT_POST_LIST = [{
  id: "1",
  title: "Going to Mumbai",
  body: "Hi Friends,I am going to Mumbai for my vacation. Hope to enjoy a lot. Peace out.",
  reaction: 2,
  userId: "user01",
  tags: ["vacation", "Mumbai", "Enjoying"],
}, {
  id: "2",
  title: "Pass Ho Gye bhai",
  body: "4 sall ki masti k baad bhi ho gye hain pass.Hard to believe.",
  reaction: 15,
  userId: "user02",
  tags: ["Graduating", "Unbelievable", "Enjoying"],

}]
export default PostListProvider;