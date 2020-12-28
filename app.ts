import { readFileX, writeFileX } from "./io/create-contract.ts"
import Ask from "https://deno.land/x/ask/mod.ts"

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

const x = await readFileX("ct.txt")
const xs = x
  .replaceAll("[customer]", customer)
  .replaceAll("[date]", date)
  .replaceAll("[freelancer]", freelancer)
  .replaceAll("[services]", services)

await writeFileX("./contract-s.txt", xs)
