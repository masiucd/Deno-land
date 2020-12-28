const readFileX = async (file: string) => {
  const contract = Deno.readTextFile(file)
  const fileResponse = await contract
  return fileResponse
}

const writeFileX = async (fileName: string, data: string) => {
  const w = await Deno.writeTextFile(fileName, data)
  console.log("file has been written to file " + fileName)
  return await w
}

export { readFileX, writeFileX }
