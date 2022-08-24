const { Schema, model } = require("mongoose");

const ProjectsSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name field is mandatory.']
    },
    description: {
        type: String,
        required: [true, 'Description field is mandatory.'],
    },
    img: {
        type: String,
    },
    stack: {
        type: [String]
    },
    company: {
        type: String
    },
    duration: {
        type: String
    }
});

ProjectsSchema.methods.toJSON = function() {
    const { __v, _id, ...project } = this.toObject();
    project.uid = _id;
    return project;
}

module.exports = model('Project', ProjectsSchema);