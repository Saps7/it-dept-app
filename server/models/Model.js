const mongoose = require('mongoose');


const NoteSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: [true, 'Please add some text']
    },
    description: {
        
        type: String,
        required: [true, 'Please add some text']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const AssignmentSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: [true, 'Please add some text']
    },
    description: {
        
        type: String,
        required: [true, 'Please add some text']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deadline: {
        type: String,
        required: [true, 'Please give deadline']
    }
});

const NoticeSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: [true, 'Please add some text']
    },
    description: {
        
        type: String,
        required: [true, 'Please add some text']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const SubjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add some text']
    },
    description: {
        
        type: String,
        required: [true, 'Please add some text']
    },
    assignments: [AssignmentSchema],
    notes: [NoteSchema],
    notices: [NoticeSchema]
});

module.exports = mongoose.model("Subject", SubjectSchema);