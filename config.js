const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_46_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDUzLFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMixcbiAgICAgICAgODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4LFxuICAgICAgICA5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNVhwbEtOQzR4Mkxrc2F4UUlzL3k5SDJNVUdPSUMxYWZVQUY0VVlVK1V4az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT3gyVENHTkdRS3FzSkRHX0hWdkR2d1wiLFxuICBcInBob25lSWRcIjogXCJiZjc0YTlhYy1iNzViLTQ3NzctYTMzMC0yYzViMzZhYWJmOWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMTgyLFxuICAgICAgNTQsXG4gICAgICAxMzMsXG4gICAgICAyMjQsXG4gICAgICA3OCxcbiAgICAgIDE2NSxcbiAgICAgIDI0NyxcbiAgICAgIDM1LFxuICAgICAgMjksXG4gICAgICAxNzMsXG4gICAgICAxNDgsXG4gICAgICA2OSxcbiAgICAgIDE5MCxcbiAgICAgIDY1LFxuICAgICAgMjgsXG4gICAgICAxMzksXG4gICAgICA1MSxcbiAgICAgIDI1MCxcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDYyLFxuICAgICAgMjQyLFxuICAgICAgMjIyLFxuICAgICAgMjYsXG4gICAgICAxNzUsXG4gICAgICA0NCxcbiAgICAgIDE1MixcbiAgICAgIDE0LFxuICAgICAgODksXG4gICAgICAxMzEsXG4gICAgICAxNjcsXG4gICAgICA5NyxcbiAgICAgIDE2LFxuICAgICAgMTcyLFxuICAgICAgMjM5LFxuICAgICAgMjI5LFxuICAgICAgMTQ4LFxuICAgICAgMjM1LFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1dLVlJXS0RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3OTc0OTEyOTo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc0MDQ0OTUxNzY5MTM4OjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XY3lmMENFTEtlL3JjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic1Rrd2Zsd3Y1V2VMODVNSjhRODY5MWY3TXZMMEpNeHBRam1tZU5ZMkFCTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmemNtclVDaXZxMWdiWnBrSDQ2ZUtFUHRCUEN2YnJJY053T1l2WFVsQTE1cjRLbUZHSW5rQTlMTXE4ZFpyY2gwN3RsUnc3TzNyb2JENktEUE1UWlhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJNXR6Sks1dHZXdWEvU2tWS1JTOXpmRno4WVBXdG01dDVTVmVOTmp0T2FCdHdlZTZ5VWkxcFBPRE1xVklnSE02ZVFLMFJrUlNKaW81WitWOXdsakRBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzk3NDkxMjk6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MDI0Mzc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkZKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCRkouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4VEdIZS9ZekJmbDlJbnRvb3hQZFpraUlLWVJ2WFZXUjdQZWJDMXRtTjFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwMDIxNDYyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4MDI0Mzc5MTEyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
