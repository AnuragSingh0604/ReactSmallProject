const JobsPage = () => {
  const jobsData = useLoaderData();
  return (
    <div>
      {
        jobsData.map((job) => {
          return <Link>
            <h4>{job.title}</h4></Link>
        })
      }
    </div>
  )
}
export default JobsPage;
export const jobsLoader = async () => {
  const res = await fetch("");
  return res.json;
}