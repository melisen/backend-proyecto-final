const dotenv = require("dotenv");
if (process.env.MODE != "production") {
  dotenv.config();
}

const MODE = process.env.MODE;
const DATABASEURL = process.env.DATABASEURL;
const PORT = process.env.PORT;
let HOST = "0.0.0.0";
let PERSISTENCIA = process.argv[2];
PERSISTENCIAUSUARIOS = "MONGO";
const ADMINMAIL = process.env.ADMINMAIL;
const ADMINWHATSAPP = process.env.ADMINWHATSAPP;
const NUMSANDBOX = process.env.NUMSANDBOX;
const TIEMPOEXPIR = process.env.TIEMPOEXPIR;
const TRANSPORTERUSER = process.env.TRANSPORTERUSER;
const TRANSPORTERAUTH = process.env.TRANSPORTERAUTH;
const ACCOUNTSIDTWILIO = process.env.ACCOUNTSIDTWILIO;
const AUTHTOKENTWILIO = process.env.AUTHTOKENTWILIO;

module.exports = {
  MODE,
  DATABASEURL,
  PORT,
  HOST,
  PERSISTENCIA,
  PERSISTENCIAUSUARIOS,
  ADMINMAIL,
  ACCOUNTSIDTWILIO,
  AUTHTOKENTWILIO,
  ADMINWHATSAPP,
  NUMSANDBOX,
  TIEMPOEXPIR,
  TRANSPORTERUSER,
  TRANSPORTERAUTH,
};
