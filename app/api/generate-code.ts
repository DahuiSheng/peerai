import { generateCode } from "@/utils/genetateCode";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { language, functions } = req.query as { language: string, functions: string[] };
    const code = await generateCode(language, functions);
    res.status(200).json({ code });
}