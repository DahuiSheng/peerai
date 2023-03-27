import { languages } from '@/data/languages'
import { Function } from '../types/Function'
import { Language } from '../types/Language'
import { functions } from '@/data/functions'

const generateJavaScriptCode = (functions: string[]) => {
  let code = ''

  if (functions.includes('form')) {
    code += `function handleSubmit(event) {\n  event.preventDefault();\n  // TODO: handle form submission\n}\n\n`
  }

  if (functions.includes('list')) {
    code += `const items = [\n  // TODO: fetch list items\n];\n\n`
    code += `function ListItem({ item }) {\n  return (\n    <li>{item}</li>\n  );\n}\n\n`
    code += `function List() {\n  return (\n    <ul>\n      {items.map((item) => (\n        <ListItem key={item} item={item} />\n      ))}\n    </ul>\n  );\n}\n\n`
  }

  if (functions.includes('table')) {
    code += `const data = [\n  // TODO: fetch table data\n];\n\n`
    code += `function TableHeader() {\n  return (\n    <thead>\n      <tr>\n        <th>Column 1</th>\n        <th>Column 2</th>\n        <th>Column 3</th>\n      </tr>\n    </thead>\n  );\n}\n\n`
    code += `function TableRow({ rowData }) {\n  return (\n    <tr>\n      <td>{rowData.column1}</td>\n      <td>{rowData.column2}</td>\n      <td>{rowData.column3}</td>\n    </tr>\n  );\n}\n\n`
    code += `function Table() {\n  return (\n    <table>\n      <TableHeader />\n      <tbody>\n        {data.map((rowData) => (\n          <TableRow key={rowData.id} rowData={rowData} />\n        ))}\n      </tbody>\n    </table>\n  );\n}\n\n`
  }

  return code
}

const generateTypeScriptCode = (functions: string[]) => {
  let code = ''

  if (functions.includes('form')) {
    code += `function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n  event.preventDefault();\n  // TODO: handle form submission\n}\n\n`
  }

  if (functions.includes('list')) {
    code += `const items: string[] = [\n  // TODO: fetch list items\n];\n\n`
    code += `type ListItemProps = {\n  item: string\n}\n\n`
    code += `function ListItem({ item }: ListItemProps) {\n  return (\n    <li>{item}</li>\n  );\n}\n\n`
    code += `function List() {\n  return (\n    <ul>\n      {items.map((item) => (\n        <ListItem key={item} item={item} />\n      ))}\n    </ul>\n  );\n}\n\n`
  }

  if (functions.includes('table')) {
    code += `  // TODO: fetch table data\n];\n\n`
    code += `type TableHeaderProps = {\n  columns: string[]\n}\n\n`
    code += `function TableHeader({ columns }: TableHeaderProps) {\n  return (\n    <thead>\n      <tr>\n        {columns.map((column) => (\n          <th key={column}>{column}</th>\n        ))}\n      </tr>\n    </thead>\n  );\n}\n\n`
    code += `type TableRowProps = {\n  rowData: TableRowData\n}\n\n`
    code += `function TableRow({ rowData }: TableRowProps) {\n  return (\n    <tr>\n      <td>{rowData.column1}</td>\n      <td>{rowData.column2}</td>\n      <td>{rowData.column3}</td>\n    </tr>\n  );\n}\n\n`
    code += `type TableProps = {\n  data: TableRowData[]\n}\n\n`
    code += `function Table({ data }: TableProps) {\n  const columns = ['Column 1', 'Column 2', 'Column 3'];\n  return (\n    <table>\n      <TableHeader columns={columns} />\n      <tbody>\n        {data.map((rowData) => (\n          <TableRow key={rowData.id} rowData={rowData} />\n        ))}\n      </tbody>\n    </table>\n  );\n}\n\n`
  }

  return code
}

export const generateCode = async (languageId: string, functionIds: string[]): Promise<string> => {
  const language = languages.find((lang) => lang.id === languageId)
  if (!language) {
    throw new Error(`Language ${languageId} not found.`)
  }

  const selectedFunctions = functions.filter((func) => functionIds.includes(func.id))
  let code = ''
  if (language.id === 'javascript') {
    code = generateJavaScriptCode(selectedFunctions.map((func) => func.id))
  } else if (language.id === 'typescript') {
    code = generateTypeScriptCode(selectedFunctions.map((func) => func.id))
  } else {
    throw new Error(`Language ${languageId} not supported.`)
  }

  return code
}
