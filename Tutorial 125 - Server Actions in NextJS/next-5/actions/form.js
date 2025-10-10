"use server"
import fs from "fs/promises"

export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"))
    await fs.writeFile("sigma-sample.txt", `Name is ${e.get("name")}, Address is ${e.get("add")}`)
}