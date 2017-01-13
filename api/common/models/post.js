'use strict';
var lb = require('loopback');

module.exports = function(Post) {
  let Vote = loopback.models.Vote;

  Post.observe('after save', (ctx, next) => {
    if (ctx.instance) {
      var data = ctx.instance;

      Vote.create({
        ownerId: data.ownerId,
        postId: data.id
      })
      .then(vote => {
          next();
      }, err => next(err));
    } else {
      next();
    }
  });

};
