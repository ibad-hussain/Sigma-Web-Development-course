"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    const params = useParams()
    return (
        <div>
            I am blogpost with params: {params.slug}
        </div>
    )
}

export default page
