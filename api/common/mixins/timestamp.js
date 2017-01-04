module.exports = (Model, options) => {	
	Model.defineProperty('created', {type: Date});
	Model.defineProperty('modified', {type: Date});

	Model.observe('before save', (ctx, next) => {
		let now = new Date();
		if (ctx.instance) {
			ctx.instance.created = now;
			ctx.instance.modified = now;
		} else {
			ctx.data.modified = now;
		}

		next();
	});
}