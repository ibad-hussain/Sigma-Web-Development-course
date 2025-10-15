import React from 'react'

const page = () => {
  return (
    <div>
      I am Admin Login
    </div>
  )
}

export default page

export async function generateMetadata ({params}) {
  return {
    title: "Login | Facebook",
  }
}
