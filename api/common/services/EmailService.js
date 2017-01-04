'use strict';

let async = require('async');
let _ = require('lodash');
var mandrill = require('mandrill-api/mandrill');

let mandrillConfig = require('../config')('mandrill');
var mandrill_client = new mandrill.Mandrill(mandrillConfig.apiKey);

let createRecipients = (recipients) => {
	return new Promise((resolve, reject) => {
		let returnRecipients = [];
		async.eachLimit(recipients, 1, (recipient, next) => {
			if (!recipient.email) {
				return next("Recipient must have an email (createRecipients)");
			}

			let recipientObject = {
				email: recipient.email,
				type: "to"
			};

			if (recipient.firstName && recipient.firstName) {
				recipientObject.name = recipient.firstName + ' ' + recipient.lastName;
			}

			returnRecipients.push(recipientObject);
			next();
		}, err => {
			if (err) {
				return reject(err);
			}

			resolve(returnRecipients);
		});
	});
};

let createVars = (recipients, customVars = []) => {
	return new Promise((resolve, reject) => {
		let vars = [];
		async.eachLimit(recipients, 1, (recipient, next) => {
			if (!recipient.email) {
				return next("Recipient must have an email (createVars)");
			}

			let userVars = [];

			if (recipient.firstName) {
				userVars.push({
					name: "FNAME",
					content: recipient.firstName
				});
			}
			if (recipient.lastName) {
				userVars.push({
					name: "LNAME",
					content: recipient.lastName
				});
			}
			if (recipient.email) {
				userVars.push({
					name: "EMAIL",
					content: recipient.email
				});
			}
			if (recipient.phoneNumber) {
				userVars.push({
					name: "PHONENUMBER",
					content: recipient.phoneNumber
				});
			}
			if (recipient.birthDate) {
				userVars.push({
					name: "BIRTHDATE",
					content: recipient.birthDate
				});
			}

			customVars = _.map(Object.keys(customVars), (key) => {
				return {
					name: key.toUpperCase(),
					content: customVars[key]
				};
			});

			vars.push({
				rcpt: recipient.email,
				vars: _.merge(userVars, customVars)
			});
			next();
		}, err => {
			if (err) {
				return reject(err);
			}

			resolve(vars);
		});
	});
}


// How to use:
//
// User.find({
//   where: {
//     email: 'jurien@superbuddy.nl'
//   }
// }, (err, users) => {
//   if(err) {
//     return console.log("err with user", err);
//   }

//   EmailService
//   .sendTemplate('nieuwe-klant', "Welkom bij SuperBuddy!", users)
//   .then(result => console.log(result), err => console.log("An error occured: ", err));
// });
//
// or
//
// EmailService
// .sendTemplate('nieuwe-klant', "Welkom bij SuperBuddy!", users, { foo: 'bar' })
// .then(result => console.log(result), err => console.log("An error occured: ", err));
module.exports = {
	createRecipients: createRecipients,
	createVars: createVars,

	sendTemplate: (template, subject, users = [], customVars = {}, attachments = [], merge_language = "mailchimp", template_content = [], async = true) => {
		return new Promise((resolve, reject) => {
			let message = {
				subject: subject,
				from_email: mandrillConfig.from,
				from_name: mandrillConfig.name,
				to: [],
				attachments: attachments,
				merge: true,
				merge_language: merge_language,
				merge_vars: []
			};

			createRecipients(users)
				.then(to => {
					message.to = to;

					createVars(users, customVars)
						.then(vars => {
							message.merge_vars = vars;

							mandrill_client
								.messages
								.sendTemplate({
										template_name: template,
										template_content: template_content,
										message: message,
										async: async
									},
									result => resolve(result),
									err => reject(err));
						});
				}, err => reject(err));
		});
	}
}
