import { Checkbox, CheckboxGroup, FormControl, FormLabel, VStack } from "@chakra-ui/react"


type FunctionSelectorProps = {
    functions: Function[]
    selectedFunctions: string[]
    onChange: (selectedFunctions: string[]) => void
}

export const FunctionSelector = ({
    functions,
    selectedFunctions,
    onChange,
}: FunctionSelectorProps) => {
    return (
        <VStack align="left">
            <FormControl>
                <FormLabel
                    fontWeight="bold"
                >
                    Select functions to include in your code:
                </FormLabel>
                <CheckboxGroup
                    colorScheme="purple"
                    value={selectedFunctions}
                    onChange={(values) => onChange(values.map((value) => value.toString()))}
                >
                    {functions.map((func) => (
                        <Checkbox
                            key={func.id}
                            value={functions.id}
                        >
                            {func.label}
                        </Checkbox>
                    ))}
                </CheckboxGroup>
            </FormControl>
        </VStack>
    )
}