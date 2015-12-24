'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  category: { type: String, required: true},
  menu: { type: String, required: true},
  image: { type: String, required: true},
  active: {type: Boolean, default: 1}
});

export default mongoose.model('Product', ProductSchema);
