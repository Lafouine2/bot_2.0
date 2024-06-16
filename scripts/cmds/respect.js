 module.exports = {  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: "AceGun x Samir Œ",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },
 
  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);
 
      const permission = ["100070660243587"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "Sorry, uniquement 𝕃𝕠𝕣𝕕 𝔽𝕠𝕦𝕚𝕟𝕚 peut utiliser cette commande. ",
          event.threadID,
          event.messageID
        );
      }
 
      const threadID = event.threadID;
      const adminID = event.senderID;
 
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);
 
      api.sendMessage(
        `À partir d'aujourd'hui vous êtes administrateur du groupe  !`,
        threadID
      );
    } catch (error) {
      console.error("Lord je ne fais pas parti des admin pour vous y intégrer toute mes excuses 😭 :", error);
      api.sendMessage(" 😫 Désolé 𝗙𝗼𝘂𝗶𝗻𝗶 veillez réessayer", event.threadID);
    }
  },
};
