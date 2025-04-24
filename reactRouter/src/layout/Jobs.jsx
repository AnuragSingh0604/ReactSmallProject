import { Outlet } from "react-router-dom";

const Jobs = () => {
  return (
    <div>
      <h2>Job Openings</h2>
      <p>List of current job opening in our compnay</p>
      <Outlet />
    </div>
  )
}
export default Jobs;