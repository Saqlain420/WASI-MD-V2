//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "luci@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923082990885@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923082990885";
global.sudo = process.env.SUDO || "923082990885";
global.owner = process.env.OWNER_NUMBER || "923082990885";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhsTFp6Z2R1aTZkT0dNYW5hcE00ZjR3a0U4cUVIMzJtQjJvVFFRUGxFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0tKS0lWSmZ1V3h1Y05sSTFHbDd2YVhmMG5lakcwWnhlSHNEcXF5dHFoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QS8zbnRDWTFzbjlXMEFLL0hUSWUxZm5PT2hqZWdjYmVNTktjd0lVbjBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJob1l0b1hzRjJYQnh2OGh3VVdVeWRpWm12RllMM3Jla2krdnBRai9SL0NnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEbmNRcU56V3RLcVhRQ0MzMlFBcS9DT2lFZm40bmliYU5aQlBvV2FWR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZNUjF5akF2dlA4aTVscmVTcEFEeHhDQUMzaFVrMGt3TE1vdDJGeCt3elU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lldEFZd0JZYytTR0JwcC80ZVN0a2xyMlJNU1kxSGF6eXUzSmtMYzBrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1JETW16eEJWOS9RUXBqOXZ3eTkyaXJ4QndZNzNQaklsWFhZNDJHZGcwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9aVnMwdHNnRHpGUFVlY0d6ZFRFWUhnZjNoSU9LMmpyRitjVFBVdnlvMlRmVUVBcVYxMUtDanNnWElsVkpaNy9sUXR3bzVNN1dpWDJDN2FVSGZva0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJ2VncwWHNDRmJIMVFraUVNdTRKamRWQ1hHREJaUFBNWFBTN1VrNjZlTEFzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQUmlwN2pTdVRvYTU4a0YzU3ZrVWl3IiwicGhvbmVJZCI6IjRjOTkxOGY3LWI4OGUtNDVjNC1hMWE2LTVhNzhmNTQ1YzQ1YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2V0pXRHVIMmVNcmlEVmFORi9pck5ZWVdGOXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmREQk9lcjdoU1Z3dngwbTRUQWlvOWV1ajVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJZNEUxQ0MyIiwibWUiOnsiaWQiOiI5MjMwODI5OTA4ODU6NjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qv/CdkYjwnZC28J2bqvCdkLnwnZuv8J2RhSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjZ2dU9JSEVMZW14TFVHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTFpNYXVVSTY0TUZzbDdTMU9QVldmZDh1bHZGVmFnQ28yd1I4K1hTNnNpMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaU5HOHdjYnJoWElwalhvTHV0QnhsU1FSa2JJQnJXeU9QNm1EU0kyMjZUT2p6NG9DKy9aQmtkYnEvYlFJZ0ZsSytDMnVpYUdlWkc3anVCOThCbDg5REE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9Qc0tXUHlWMlUzMkJzcldndWxJMUc0RXI4Rnh1OGN1NFJ4RTBzbFlGSExNbmJoNTVLekphbkx6WTU2VitUeitiRXRoVE9Rb0EvZ2RNMy9OOVRTZ0JBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDgyOTkwODg1OjY3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlMyVEdybENPdURCYkplMHRUajFWbjNmTHBieFZXb0FxTnNFZlBsMHVySXQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4ODA4MzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3lVIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "R0YAL",
  author: process.env.PACK_AUTHER || "LUCIFER",
  packname: process.env.PACK_NAME || "LUCIFER",
  botname: process.env.BOT_NAME || "LUCIFER",
  ownername: process.env.OWNER_NAME || "LUCIFER",
  errorChat: process.env.ERROR_CHAT || "923082990885",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
