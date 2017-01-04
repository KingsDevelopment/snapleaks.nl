module.exports = (Model, options) => {
	Model.observe('access', function filterEmailQueryField(ctx, next){
		if (ctx.query.where !== undefined && ctx.query.where.email !== undefined) {
			ctx.query.where.email = ctx.query.where.email.toLowerCase();
		}

		next();
	});

	Model.observe('before save', (ctx, next) => {
		if (ctx.instance !== undefined && ctx.instance.email !== undefined){
			ctx.instance.email = ctx.instance.email.toLowerCase();
		}
		else if (ctx.data.email !== undefined) {
			ctx.data.email = ctx.data.email.toLowerCase();
		}

		next();
	});
}
