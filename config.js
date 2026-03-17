const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Draven-cyber/Evo_MD_v1/blob/main/Gemini_Generated_Image_s7lf8hs7lf8hs7lf.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*╔══════════════════════╗
║   🟢 EVO MD ALIVE   ║
╚══════════════════════╝

• Status    : ✅ Connected
• Response  : ⚡ {time}s
• Uptime    : ⏳ {uptime}
• Version   : 📌 2.0.0

📢 Type .menu for commands

 powered by Dark IMA *",
BOT_OWNER: '94771679106',  // Replace with the owner's phone number



};
