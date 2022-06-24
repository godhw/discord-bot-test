const fetch = require("node-fetch");
const FormData  = require("form-data");

const { api_endpoint } = process.env;

module.exports = {
	keywords: ["everytime"],
	prefixes: ["에타"],
	suffixes: ["?"],

	/**
	 * @description Executes when it is triggered by trigger handler.
	 * @param {Object} message The Message Object of the trigger.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array
	 */

	async execute(message, args) {
		console.log('Request: ', message.toString());
    const formData = new FormData();
    formData.append('text', encodeURIComponent(message.toString()));
    formData.append('category', "대학생 잡담방");
    formData.append('length', "200");

		const responseBody = await fetch(api_endpoint, {method : 'POST', body: formData, });
		const responseJson = await responseBody.json();
    const responseP = await responseJson[0];
    const responseText = await encodeURIComponent(responseP);

		console.log('Response: ', responseText);
		message.reply({
			content: responseText,
		});
	},
};
