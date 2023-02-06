module.exports = {
	name: `Darkskittlz`,
	description: "This is the DarkskittlzBot! I am adding more and more commands, so let me know if there's anything you'd be interested in seeing!",
	execute(message) {
		message.channel.send(`Server: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nVersion: ${version}`);
	},
};