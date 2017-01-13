module.exports = (Model, options) => {
	Model.destroyAll = (where, cb) => {
		Model.defineProperty('deleted', {type: Date, default: null});
		return Model.updateAll(where, { 'deleted': new Date() })
					.then(result => (typeof cb === 'function') ? cb(null, result) : result)
					.catch(error => (typeof cb === 'function') ? cb(error) : Promise.reject(error));
	};

	Model.remove = Model.destroyAll;
	Model.deleteAll = Model.destroyAll;

	Model.destroyById = (id, cb) => {
		Model.defineProperty('deleted', {type: Date, default: null});
		return Model.updateAll({ id: id }, { 'deleted': new Date()})
					.then(result => (typeof cb === 'function') ? cb(null, result) : result)
					.catch(error => (typeof cb === 'function') ? cb(error) : Promise.reject(error));
	};

	Model.removeById = Model.destroyById;
	Model.deleteById = Model.destroyById;

	Model.prototype.destroy = (options, cb) => {
		Model.defineProperty('deleted', {type: Date, default: null});
		const callback = (cb === undefined && typeof options === 'function') ? options : cb;

		return this.updateAttributes({ 'deleted': new Date() })
					.then(result => (typeof cb === 'function') ? callback(null, result) : result)
					.catch(error => (typeof cb === 'function') ? callback(error) : Promise.reject(error));
	};

	Model.prototype.remove = Model.prototype.destroy;
	Model.prototype.delete = Model.prototype.destroy;

	// Emulate default scope but with more flexibility.
  const queryNonDeleted = { or: [{'deleted': null}, {'deleted': { exists: false }}] };

	const _findOrCreate = Model.findOrCreate;
	Model.findOrCreate = (query = {}, ...rest) => {
		if (!query.deleted) {
			if (!query.where || Object.keys(query.where).length === 0) {
				query.where = queryNonDeleted;
			} else {
				query.where = { and: [ query.where, queryNonDeleted ] };
			}
		}

		return _findOrCreate.call(Model, query, ...rest);
	};

	const _find = Model.find;
	Model.find = (query = {}, ...rest) => {
		if (!query.deleted) {
			if (!query.where || Object.keys(query.where).length === 0) {
				query.where = queryNonDeleted;
			} else {
				query.where = { and: [ query.where, queryNonDeleted ] };
			}
		}

		return _find.call(Model, query, ...rest);
	};

	const _count = Model.count;
	Model.count = (where = {}, ...rest) => {
		// Because count only receives a 'where', there's nowhere to ask for the deleted entities.
		let whereNotDeleted;
		if (!where || Object.keys(where).length === 0) {
			whereNotDeleted = queryNonDeleted;
		} else {
			whereNotDeleted = { and: [ where, queryNonDeleted ] };
		}
		return _count.call(Model, whereNotDeleted, ...rest);
	};

	const _update = Model.update;
	Model.update = Model.updateAll = (where = {}, ...rest) => {
		// Because update/updateAll only receives a 'where', there's nowhere to ask for the deleted entities.
		let whereNotDeleted;
		if (!where || Object.keys(where).length === 0) {
			whereNotDeleted = queryNonDeleted;
		} else {
			whereNotDeleted = { and: [ where, queryNonDeleted ] };
		}
		return _update.call(Model, whereNotDeleted, ...rest);
	};


	Model.observe('before save', (ctx, next) => {
		Model.defineProperty('deleted', {type: Date, default: null});
		if (ctx.instance) {
			if(!ctx.instance.hasOwnProperty('deleted')) {
				ctx.instance.deleted = null;
			}
		} else {
			if(!ctx.data.hasOwnProperty('deleted')) {
				ctx.data.deleted = null;
			}
		}

		next();
	});
}
