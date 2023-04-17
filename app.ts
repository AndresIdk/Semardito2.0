import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import createError from "http-errors";
import toContabilidad from "./src/routes/contabilidad";
import toAsistencia from "./src/routes/asistencia";
// import * as dotenv from "dotenv";
import bot from "./src/utils/bot";
// dotenv.config();

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Ubicación del archivo de hoja de cálculo
// const archivoContabilidad = path.join(
//   process.cwd(),
//   "documents",
//   "contabilidad.xlsx"
// );

// const archivoAsistencia = path.join(
//   process.cwd(),
//   "documents",
//   "asistencia.xlsx"
// );

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "Bienvenido al bot de Semard. Tenga en cuenta que su uso es exclusivo para el grupo de Semard. Si desea conocer los comandos disponibles, por favor, escriba /help"
  );

});

// Controlador de contabilidad
require('./src/controllers/contabilidad_control_bot')
// Controlador de asistencia
require('./src/controllers/asistencia_control_bot')


app.listen(3000, () => {
  console.log("Server started on port 3000");
});

export default app;
