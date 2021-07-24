/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
	const embed = new MessageEmbed()
		.setTitle('Lil Blued')
		.setURL('https://discord.com/api/oauth2/authorize?client_id=867788554687741962&permissions=8&scope=bot')
		.setColor('#2f3136')
		.setDescription(`${bot.user.username} is a community made \`open-source\` discord bot by **DashCruft Nation**! DisCruft is a multi-based bot where we are trying to include everything possible.`)
		.setThumbnail(bot.user.displayAvatarURL());
	message.reply({ embed: embed, allowedMentions: { repliedUser: false } });
};

module.exports.config = {
	name: 'invite',
	aliases: ['info'],
	description: 'Invite link and information about our djs bot, DisCruft!',
};
