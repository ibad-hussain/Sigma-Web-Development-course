// Data Fetching, Caching & Revalidation in NextJS

// SSR
    // This is default behavior
// SSG
    // Any content which does not have network calls is a static page by default
// ISR/ISG
    // fetch in NextJS caches response by default.
        // To opt out, use:
            // export const dynamic = 'force dynamic';
    // However there are 2 exceptions when fetch requests are not cached:
        // - Used inside a Server Action
        // - Used inside a Route Handler that uses the POST method

// fetch API in NextJS

// Some imp codes:
    //  const data = await fetch('https://api.vercel.app/blog')
    //  const data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })
    //  const data = await fetch('https://api.vercel.app/blog', { next: { revalidate: 3600 } })
    //  export const dynamic = 'force dynamic';