'use strict';
var lb = require('loopback');

module.exports = function(Post) {

  Post.observe('after save', (ctx, next) => {
    if (ctx.instance) {
      var data = ctx.instance;

      let Vote = loopback.models.Vote;
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
