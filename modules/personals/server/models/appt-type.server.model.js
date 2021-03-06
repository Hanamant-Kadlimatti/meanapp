var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApptTypeSchema = new Schema({
    description: {
        type: String,
        default: '',
        required: 'Please fill the procedure',
        trim: true
    },
    duration: {
        type: Number
    },
    price: {
        type: Number
    },
    appttypeid: {
        type: Schema.ObjectId,
        ref: 'ApptTypeId'
    }
});

mongoose.model('ApptType', ApptTypeSchema);