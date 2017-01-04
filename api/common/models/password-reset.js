'use strict';

let moment = require('moment');
let Email = require('../services/EmailService');

module.exports = function(Passwordreset) {
	Passwordreset.requestToken = (email) => {
		return new Promise((resolve, reject) => {
			let User = loopback.models.User;
			let text = false;
			let mail = true;

			User.findOne({
				where: {
					email: email
				}
			}, (err, user) => {
				if(err) {
					return reject(err);
				}

				if(!user) {
					return reject("User not found.");
				}

				let token = ("" + Math.random()).substring(2,7);
				let expireTime = moment().add(12, 'hours');

				Passwordreset.create({
					userId: user.id,
					token: parseInt(token),
					expireTime: expireTime
				}, (err, requested) => {
						Email
						.sendTemplate('wachtwoord-vergeten', "Wachtwoord vergeten", [user], { reseturl: 'http://superbuddy.local/wachtwoord-vergeten/' + token, token: token })
						.then(result => resolve({status: true}), err => reject(err));
				});
			});
		});
	};

	Passwordreset.checkToken = (token) => {
		return new Promise((resolve, reject) => {
			Passwordreset
			.findOne({
				where: {
					token: token
				}
			}, (err, reset) => {
				if(err) {
					return reject(err);
				}

				if(!reset) {
					return reject("Token not found.");
				}

				if(reset.used) {
					return resolve({status: false, used: true});
				}

				let expireTime = moment(reset.expireTime);
				let difference = expireTime.diff(moment.now(), 'seconds');

				if(difference < 0) {
					return resolve({status: false, expired: true});
				}

				return resolve({status: true});
			});
		});
	};

	Passwordreset.updatePassword = (token, password) => {
		return new Promise((resolve, reject) => {
			Passwordreset
			.findOne({
				where: {
					token: token
				},
				include: ['user']
			}, (err, reset) => {
				if(err) {
					return reject(err);
				}

				if(!reset) {
					return reject("Token not found.");
				}

				if(reset.used) {
					return resolve({status: false, used: true});
				}

				let expireTime = moment(reset.expireTime);
				let difference = expireTime.diff(moment.now(), 'seconds');

				if(difference < 0) {
					return resolve({status: false, expired: true});
				}

				reset.updateAttribute('used', true);
				reset.user.update({password: password}, (err, user) => {
					if(err) {
						return reject(err);
					}

					return resolve({status: true});
				});
			});
		});
	};

	Passwordreset.remoteMethod(
		'requestToken',
		{
			http: {path: '/request-token', verb: 'post'},
			accepts: [
				{arg: 'email', type: 'string', required: true }
	 		],
			returns: {arg: 'status', type: 'object', root: true}
		}
	);

	Passwordreset.remoteMethod(
		'checkToken',
		{
			http: {path: '/check-token', verb: 'get'},
			accepts: [
				{arg: 'token', type: 'number', required: true }
	 		],
			returns: {arg: 'status', type: 'object', root: true}
		}
	);

	Passwordreset.remoteMethod(
		'updatePassword',
		{
			http: {path: '/update-password', verb: 'post'},
			accepts: [
				{arg: 'token', type: 'number', required: true },
				{arg: 'password', type: 'string', required: true }
	 		],
			returns: {arg: 'status', type: 'object', root: true}
		}
	);
};
