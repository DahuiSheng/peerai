import { Box, Textarea } from "@chakra-ui/react"

type CodePreviewProps = {
    code: string
}

export const CodePreview = ({ code }: CodePreviewProps) => {
    return (
        <Box>
            <Textarea
                value={code}
                placeholder="Generated code will be displayed here"
                readOnly
                resize="none"
                rows={20}
                width="full"
            />
        </Box>
    )
}