const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongoose_Delete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);



const Schema = mongoose.Schema;

const Course = new Schema(
  {
    _id: {type: Number, } ,  
    name: { type: String, required: true, },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true, },
    lever: { type: String},
    slug: { type: String, slug: 'name', unique: true },
}, 
{
  _id: false,
  timestamps: true,
});

// Add plugins
mongoose.plugin(slug);

Course.plugin(AutoIncrement);
Course.plugin(mongoose_Delete, { 
  deletedAt : true ,
  overrideMethods: 'all' ,
});

module.exports = mongoose.model('Course', Course);