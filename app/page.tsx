"use client"

import { ProgrammingForm } from "@/components/ProgrammingForm"
import { ChakraProvider } from "@chakra-ui/react"

const functions: Function[] = [
  {
    id: "form",
    label: "Form",
  },
  {
    id: "list",
    label: "List",
  }
  {
    id: "table",
    label: "Table",
  },
]

const languages: Language[] = [
  {
    id: "javascript",
    label: "JavaScript",
  },
  {
    id: "typescript",
    label: "TypeScript",
  }
]

const HomePage = () => {
  return (
    <ChakraProvider theme={theme}>
      <ProgrammingForm functions={functions} languages={languages} />
    </ChakraProvider>
  )
}

export default HomePage;