export default async function Page({ params }) {
//   throw new Error("Error aa gaya")
  const { slug } = await params

  let languages = ["python", "java", "js", "cpp", "cs"]
  if (languages.includes(slug)) {
    return <div>My Post: {slug}</div>
  } else {
    return <div>No Post found with title: {slug}</div>
  }
//   return <div>My Post: {slug}</div>
}