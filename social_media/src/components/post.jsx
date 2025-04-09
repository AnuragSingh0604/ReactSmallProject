import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList)
  return (<div className="card post-card" style={{ width: "25rem" }}>

    <div className="card-body">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
        <MdDeleteForever ></MdDeleteForever>

      </span>

      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
      {
        post.tags.map((tag) => (<span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
        ))
      }

      <span className="badge rounded-pill text-bg-info reaction">{post.reaction}</span>

    </div>
  </div>);
}
export default Post;