export default async function Page({ params }) {
    //   console.log(params)
    const { slug } = await params
    // console.log(slug)
    return <div>I am about page, check console</div>
}