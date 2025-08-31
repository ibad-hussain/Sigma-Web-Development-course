let r = Number(Math.floor(Math.random() * 7) + 1 + "000");
console.log(r);

alert("Javascript is Loaded");

async function displayMessage(msg) {
  let r = Number(Math.floor(Math.random() * 7) + 1 + "000");
  console.log(r);

  let h = document.createElement("h3");
  h.classList.add("big");

  let p1 = await new Promise((res, rej) => {
    setTimeout(() => {
      res(msg);
    }, r);
  })
  .then((val) => {
    h.innerText = val;
    document.body.appendChild(h);
  })

    for (let i = 0; i < 3; i++) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        let t = document.createTextNode(".");
        h.appendChild(t);
    }    
}
async function main() {
  await displayMessage("Initializing Hacking");
  console.log("done");
  await displayMessage("Reading your Files");
  console.log("done");
  await displayMessage("Sending all passwords and personal files to server");
  console.log("done");
  await displayMessage("Cleaning up");
  console.log("done");
}

main();