// fs module

// fs.writeFile()       // main thread is not blocked, the function will be scheduled and the next line will run
// fs.writeFileSync()   // main thread (flow of program) is blocked, the function will run and then the next line will execute

// fs.readFile()
// fs.appendFile()

// In the 'main-promises.js' file, we used 'await' without async function because we can use that as we are in a module

// We can import/require fs/promises module in ESM amd CJS like:
    // ESM -->  import fs from "fs/promises"
    // CJS -->  const fs = require('fs/promises')

// Some path module methods
    // path.extname()
    // path.dirname()
    // path.basename()
    // path.join()