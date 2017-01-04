'use strict';

var _ = require('lodash');
var gravatar = require('gravatar');
var models = loopback.models;

var crypto = require('crypto');
var assert = require('assert');
var moment = require('moment');

var Email = require('../services/EmailService');

module.exports = (User) => {
	User.observe('before save', (ctx, next) => {
		if (ctx.isNewInstance) {
			var data = ctx.instance;

			if (!data.avatar && data.email) {
				var email = data.email;
				var avatar = gravatar.url(email, {
					s: 500
				});

				if (avatar) {
					ctx.instance.avatar = avatar;
				}
			}

			next();
		} else {
			next();
		}
	});

	User.fbToUser = (provider, profile, options) => {
		// Let's create a user for that
		var profileEmail = profile.emails && profile.emails[0] && profile.emails[0].value;
		var generatedEmail = (profile.username || profile.id) + '@loopback.' + (profile.provider || provider) + '.com';
		var email = profileEmail ? profileEmail : generatedEmail;
		var username = provider + '.' + (profile.username || profile.id);
		var password = generatePassword('password');

		var userObj = {
			username: username,
			password: password,
		};

		if(profile.photos && profile.photos[0] && profile.photos[0].value) {
			userObj.avatar = profile.photos[0].value;
		}

		if(profile.name) {
			userObj.firstName = profile.name.givenName,
			userObj.lastName = (profile.name.middleName ? profile.name.middleName + ' ' : '') + profile.name.familyName;
		}

		if(profile._json && profile._json.birthday) {
			let birthday = moment(profile._json.birthday);
			userObj.birthDate = birthday;
		}

		if (email) {
			userObj.email = email;
		}

		return userObj;
	}

	let generatePassword = (hmacKey, algorithm, encoding) => {
		assert(hmacKey, 'hmacKey key is required');
		algorithm = algorithm || 'sha1';
		encoding = encoding || 'hex';
		var hmac = crypto.createHmac(algorithm, hmacKey);
		var buf = crypto.randomBytes(32);
		hmac.update(buf);
		var key = hmac.digest(encoding);
		return key;
	};

};
