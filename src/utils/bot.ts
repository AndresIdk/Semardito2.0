import TelegramBot from "node-telegram-bot-api";
import * as dotenv from "dotenv";
dotenv.config();
const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token!, {
    polling: true,
});

export default bot

