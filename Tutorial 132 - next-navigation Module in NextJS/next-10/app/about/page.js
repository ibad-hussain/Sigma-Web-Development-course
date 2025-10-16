"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/dashboard')
        }, 2000);
    }, [])

    return (
        <div>
            I am About
            <div>
                <button type="button" onClick={() => router.push('/dashboard')}>
                    Dashboard
                </button>
            </div>
        </div>
    )
}

export default page
