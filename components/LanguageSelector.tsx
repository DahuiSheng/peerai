import { Language } from "@/types/Language"
import { FormControl, FormLabel, Radio, RadioGroup, VStack } from "@chakra-ui/react"

type LanguageSelectorProps = {
    languages: Language[]
    selectedLanguage: string
    onChange: (selectedLanguage: string) => void
}

export const LanguageSelector = ({
    languages,
    selectedLanguage,
    onChange,
}: LanguageSelectorProps) => {
    return (
        <VStack
            align="left"
        >
            <FormControl>
                <FormLabel
                    fontWeight="bold"
                    htmlFor="languages"
                >
                    Select a programing language
                </FormLabel>
                <RadioGroup
                    colorScheme="purple"
                    id="language"
                    value={selectedLanguage}
                    onChange={(value) => onChange(value.toString())}
                >
                    {languages.map((lang) => (
                        <Radio
                            key={lang.id}
                            value={lang.id}
                        >
                            {lang.label}
                        </Radio>
                    ))}
                </RadioGroup>
            </FormControl>
        </VStack>
    )
}