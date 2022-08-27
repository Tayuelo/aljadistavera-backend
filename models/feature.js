const { Schema, model } = require("mongoose");

const FeatureSchema = Schema({
    title: {
        type: String,
        required: [true, 'Title field is mandatory.']
    },
    description: {
        type: String,
        required: [true, 'Description field is mandatory.'],
    },
    img: {
        type: String,
    },
    tags: {
        type: [String]
    },
    company: {
        type: String
    },
    readDuration: {
        type: String
    }
});

FeatureSchema.methods.toJSON = function() {
    const { __v, _id, ...feature } = this.toObject();
    feature.uid = _id;
    return feature;
}

module.exports = model('Feature', FeatureSchema);