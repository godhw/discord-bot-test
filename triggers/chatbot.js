const fetch = require("node-fetch");
const FormData  = require("form-data");

const { api_endpoint } = process.env;

module.exports = {
	keywords: ["everytime"],
	prefixes: ["에타"],
	suffixes: ["//"],

	/**
	 * @description Executes when it is triggered by trigger handler.
	 * @param {Object} message The Message Object of the trigger.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array
	 */

	async execute(message, args) {
		console.log('Request: ', message.toString());
    const formData = new FormData();
    const requestMsg = message.toString().replace("//",'').replace("에타",'');

    formData.append('text', decodeURIComponent(requestMsg));
    formData.append('category', "대학생 잡담방");
    formData.append('length', "200");

		const responseBody = await fetch(api_endpoint, {method : 'POST', body: formData, });
		const responseJson = await responseBody.json();
    const responseText = responseJson[0];

		console.log('Response: ', responseText);
		message.reply({
			content: responseText,
		});
	},
};
