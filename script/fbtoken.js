const axios = require('axios');

module.exports.config = {
  name: "fbtoken",
  version: "1.0.",
  hasPermssion: 2,
  credits: "James",
  usePrefix: true,
  description: "EAAD Facebook Token",
  commandCategory: "other",
  usages: "[ uid ] [password]",
  cooldowns: 2,
};
module.exports.run = async ({ api, event, args }) => {
    let { threadID, messageID } = event;
    let username = args[0];
    let password = args[1];
  if(!username || !password) {
api.sendMessage(`Usage: tokenget [ username ] [ password ]`, threadID, messageID);
return;
  }
api.sendMessage("Getting token for user: '${username}', Please wait...", threadID, messageID);

    try {
        const response = await axios.get('https://allinoneapis.onrender.com/api/token', {
          params: {
            username: username,
            password: password,
      
          if (response.data.status) {
          const token = response.data.data.access_token;
          const token2 = response.data.data.access_token_eaad6v7;
          const cookies = response.data.data.cookies;
      
      api.sendMessage(`Token Generated\n\n𝗘𝗔𝗔𝗔𝗔𝗨 𝗧𝗢𝗞𝗘𝗡\n${token}\n\n𝗘𝗔𝗔𝗗6𝗩7 𝗧𝗢𝗞𝗘𝗡\n${token2}\n\n𝗖𝗢𝗢𝗞𝗜𝗘 🍪\n ${cookies}`, threadID, messageID);
      
    } catch (e) {
        return api.sendMessage(`An error ${e}`, threadID, messageID);
    };
    
};
