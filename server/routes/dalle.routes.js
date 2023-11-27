import express, { response } from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

// Initialize OpenAI directly with the API key
const config = new OpenAI({
    key: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(config)

router.route("/").get((req, res) => {
    res.status(200).json({ message: "hello from DALL.E ROUTES" });
});
 
router.route("/").post(async (req, res) => {
    try {
        const {prompt} = req.body;

        const request = await openai.createImage({
            prompt,
            n: 1,
            size:"1024x1024",
            response_format: "b64_json"
        });

        const image = response.data.data[0].b64_json;
    } catch (error) {
        console.log(error)
        res.status(500).json ({message: "Something went wrong"})
    }
})

export default router;
