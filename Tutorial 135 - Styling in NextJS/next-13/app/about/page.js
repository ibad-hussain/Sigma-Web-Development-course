"use client"
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="container">
        I am about container 1

        {/* <style jsx global>{` */}
        <style jsx>{`
            .container {
                background-color: red;
                color: white;
            }
        `}</style>
      </div>

      <div className="container">
        I am about container 2
      </div>
    </div>
  )
}

export default page
