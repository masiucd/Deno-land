const text = Deno.readTextFile("./data.json")

text.then(res => {
  console.log(res)
})
