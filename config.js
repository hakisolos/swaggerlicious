//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUptS0tlL3ZhQ1o4SldwaUpta3pvN21SbTRXVTh1SVRCenB3M0NNVUZtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2JaNm9jOEx3RDhTTHRBbUV3N1NpS3JKZ1NRdDJ1eEpSeStyaFFqZUpGVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUHpBcmxETzFpN3VsOGk3clBsQW4zckxUbVE1VEZrQ25Malh5ZzZIa1dVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwV1RxZmo1bkh3bHduTzdXZnFYdDRjVjl4a1A5WDQ0Ym1BSG1YK3NJSzA4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFQVFlzUkFJTCtwQmJBblV6MjQ4dTB2d3MxT3E4UmMrTzQ5VlJpQUFNbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRLc05aTmF3RHZMMjU3K01ndWZsREZYMGNGc25YUjlYd3hKRUZuSnVSV289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09yR3VQU3dOSDZrbEJFNVZIbzhiR3piUzlsb2NKRXlQS01MZ3VLbTQzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXViNmdmZTN5bFFsQVRJMEFRQnV1Z0FpakpNWmdlQk9IZ1owcUxOMG1VQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR2K3NEdWpVY3JzdXloY3RjNmx1dzhsY2JjbVhUTzBnSk96R1dKeFhRWExzVkxtRDJxL3NVVDdEa0xWZ1c2QWpVeXp4dkNOY2tkSWdETUdWdktCbmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJFeVdQNHYvY3RHS3R1NkdnNVpHb1p2QmhULzZ2SnZXWjRHdWJhUHFHd2RrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMzEyMjU2MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyQzUzMkZCMUQ5RTIwM0M3RDA2NDFFQTRERkQ3RDk4OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NjcxNzY5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyTHZfNW1tdFIwYTl4N0xjOWVzcWlnIiwicGhvbmVJZCI6IjRhMmMwMjFjLWZjNjEtNDY3Ny1hZDA2LTI5ZDRjOGRlYWJjOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGLzlIUi9PU0ZSMjA3dXRtSW1xclJxdTBsWFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTg1M1dnaG9iN3hlaE1TSVBtWjNncXAxTytNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRSQTVWUVFCIiwibWUiOnsiaWQiOiIyNjM3MTMxMjI1NjE6NDFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic3dhZ2dlcmxpY2lvdXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTUnZKQUhFSWZYcTdjR0dBOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdLZ0xkV0lXN3pvakpDbTh6T1l6M1Q4ODd4Mm5LZHFNK1hLdi9wZnd5V0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijc4VGxRWERGR1ZId3REK3JsVmlWK0Zuc1M5c3I5M1VZRk9LUkxGd3ZjY3U1R1ZpajVJMnFIWjhNSnkzRVhpRjZtYjZ1Ly9kUVA3cGxHN1J2Wkc3d0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjWGVtU0w3OWJoMWlDOWw5TTloSEtUNmhkamRNMGtlU3FRQ0ZCRjR6Qng0U2dxeTBwdzRKRzdUSkphcmU3T21STFp6cWRPaHdVNlJoUHZJQXV3RENpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxMzEyMjU2MTo0MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZQ29DM1ZpRnU4Nkl5UXB2TXptTTkwL1BPOGRweW5halBseXIvNlg4TWxpIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NjcxNzY1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhScyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
