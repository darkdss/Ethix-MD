//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZuRTRPcEhDZER0enhxUVhlYXRFWC9WS3BsREZ2ZnBYRkMzNWZlTGExTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWNZNFljemtsbWFBbTFRWUEwQjRtc291RWhLZ2ZPS3ZYRnE0ZzJXUTNnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUGE3bU9ZTktoWktQRFpQa21JN0l4ZUwydkFwU3VrV3ZmWWg3ZVBuOTNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSUFkQlBrYnVSNTJ5ZXpKRE1JZlF0d3ZDRXZNN0NiUTF5L05zRmUwT3pzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGZUVWMGNaR28zZ1B0ZERiZUZIVHdXOFh4L2tDblJFZDhkT1UyTjZBMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxEOFIvekxDSEw0dzljOFdoYUFxdWJGL1dlaGhQeVA5RTIyWWdGUXVKa009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01LeTYwWEJrT0N1eWdSN29FRzFhN1lBa0pGY0JHWFllRENXT09oeUZYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXovcytwZkkwQmR3L1FKN1RPYmxaeis1WlZ3b2lOOEhwZXo5ZVhlY1NYND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMOTljcVBuZ2F6QXRMeWVvQlkrbkZaOFdHZHYwTEIzR0pzcXhMOG9xSHlCRE5pU08yTFp0TEh6aEhFbm1QeEJFSDQ1dXE0ZjE0RUY0MlhlYmRsaWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiIrS3pBZEJVNGZFSU9xZVdQaW84QVFNdzFFV0ZaVTA0Z3FJUjlkZTNpUHhjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrTm0wVHhsbVMzYXlrYWhubnNjcjdBIiwicGhvbmVJZCI6IjIyNzVjMDk0LWNhNDUtNDhiZS1hNjRkLTBhNzg0NWY3YzNkYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Qjd3bHJuSW05N0g5endhYlJxTkMyV2tQSkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGVTMjM1d29FSXRJNzFFVkdZMURMVjFhalNRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlTTVBZOERNIiwibWUiOnsiaWQiOiI5NDc3MzgyNDI2NjoyMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxu8JKNmSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSytlcDZFSEVJekgzTFlHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT1ZCb25XVHNnMUY5Q1BjaEZoc2hXT1NPQmZyUjgzTWJDclN0NVB1aTVHOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoibnRsTytwZHNRakJWQ0ZZaFdDV2FPK0tpb1QxNnhRdnVWSCs5VUppMzUrRTBreVp2aVNiZVFIeitaVmV6RlpXY2RuMG5BTXJ0Zy9jSHRETm9md0lJQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjBRQTR2M1krNnowWWY2UTVYN2lqd0MvcTJVbWRpdk5wZlE4V1NZQkFWR3lWRVRDUFU3NUowcVI3SVdId2pJKzNDOHRuYWl4KytnRGpZNzJETVRFR2hRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzM4MjQyNjY6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGxRYUoxazdJTlJmUWozSVJZYklWamtqZ1g2MGZOekd3cTByZVQ3b3VSdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTM3NTM4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEbmgifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
