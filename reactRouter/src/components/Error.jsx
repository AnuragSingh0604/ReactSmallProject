import { useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h3>An error occurred.</h3>
      <p>{error.message}</p>
      <button onClick={() => navigate('/')}>Go to homepage</button>
    </div>
  )
}
export default Error;