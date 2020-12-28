import { Ask } from "../packages/index.ts"

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

const ask = new Ask()

const answers = await ask.prompt([
  {
    name: "customer",
    type: "input",
    message: "Customer Name:",
  },
  {
    name: "freelancer",
    type: "input",
    message: "Freelancer:",
  },
  {
    name: "services",
    type: "input",
    message: "Services:",
  },
  {
    name: "date",
    type: "input",
    message: "Date:",
  },
])

const { customer, freelancer, services, date } = answers

const init = async () => {
  const x = await readFileX("ct.txt")
  const xs = x
    .replaceAll("[customer]", customer)
    .replaceAll("[date]", date)
    .replaceAll("[freelancer]", freelancer)
    .replaceAll("[services]", services)

  await writeFileX("./contract-s.txt", xs)
}

if (Deno.args[0] === "run") {
  init()
}
