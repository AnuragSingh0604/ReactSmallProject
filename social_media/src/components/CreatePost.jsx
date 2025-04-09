const CreatePost = () => {
  return (<form className="create-post">
    <div class="mb-3">
      <label htmlFor="userId" class="form-label">UserId </label>
      <input type="text" class="form-control"
        placeholder="userId" />
    </div>
    <div class="mb-3">
      <label htmlFor="title" class="form-label">Post Title</label>
      <input type="text" class="form-control"
        placeholder="How are you feeling today" />
    </div>
    <div class="mb-3">
      <label htmlFor="body" class="form-label">Post Content</label>
      <textarea type="text" class="form-control"
        id="body"
        rows="4"
      />
    </div>


    <button type="submit" class="btn btn-primary">Submit</button>
  </form>);
}
export default CreatePost;