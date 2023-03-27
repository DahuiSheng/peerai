import { Button, Container, Stack } from "@chakra-ui/react";
import { useState } from "react"
import { LanguageSelector } from "./LanguageSelector";
import { FunctionSelector } from "./FunctionSelector";
import { CodePreview } from "./CodePreview";


type ProgramingFormProps = {
    functions: Function[]
    languages: Language[]
}

export const ProgramingForm = ({ functions, languages }: ProgramingFormProps) => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0].id);
    const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);
    const [generatedCode, setGeneratedCode] = useState("");

    const handleLanguageChange = (languageId: string) => {
        setSelectedLanguage(languageId)
    }

    const handleFunctionChange = (functionIds: string[]) => {
        setSelectedFunctions(functionIds)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const code = await generateCode(selectedLanguage, selectedFunctions);
        setGeneratedCode(code)
    }

    return (
        <Container
            maxW = "container.md"
        >
            <form onSubmit={handleSubmit}>
                <Stack
                    spacing={6}
                >
                    <LanguageSelector
                        languages={languages}
                        selectedLanguage={selectedLanguage}
                        onChange={handleLanguageChange}
                    />
                    <FunctionSelector
                        functions={functions}
                        selectedFunctions={selectedFunctions}
                        onChange={handleFunctionChange}
                    />
                    <Button type="submit" colorScheme="purple">
                        Generate code
                    </Button>
                </Stack>
            </form>
            {generatedCode && <CodePreview code={generatedCode} language={selectedLanguage} />}
        </Container>
    )
}