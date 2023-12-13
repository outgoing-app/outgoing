const mongodb = require('mongodb');
const mongoose = require('mongoose');
const ObjectId = mongodb.ObjectId;

const userSchema = new mongoose.Schema({
    userId: Number,
    firstname: String,
    lastname: String,
    initials: String
})

const User = mongoose.model('User', userSchema);

const eventSchema = new mongoose.Schema({
    organizerId: Number,
    pending: Boolean,
    status: String,
    colorCode: String,
    title: String,
    start: Date,
    end: Date,
    location: String,
    confirmedUsers: [userSchema],
    pendingUsers: [userSchema],
    pollingOptions: [
        {
            start: Date,
            end: Date,
            count: Number
        }
    ],
    contributors: [userSchema]
})

const Event = mongoose.model('Event', eventSchema);

const groupSchema = new mongoose.Schema({
    name: String,
    memberIds: [Number],
    members: [userSchema],
    list: [String]
})

const Group = mongoose.model('Group', groupSchema)

const addEvent = async (event) => {
    const newEvent = new Event({
        organizerId: event.organizerId,
        pending: event.pending,
        status: event.status,
        colorCode: event.colorCode,
        title: event.title,
        start: event.start,
        end: event.end,
        location: event.location,
        confirmedUsers: event.confirmedUsers,
        pendingUsers: event.pendingUsers,
        pollingOptions: event.pollingOptions,
        contributors: event.contributors
    });
    try {
        const result = await newEvent.save()
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const getEvents = async () => {
    try {
        const events = await Event.find({}, { __v: 0 });
        return events
    } catch (error) {
        throw new Error(error)
    }
}

const deleteEvent = async (id) => {
    try {
        const result = await Event.deleteMany({ _id: new ObjectId(id) })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const addGroup = async (group) => {
    const newGroup = new Group({
        name: group.name,
        memberIds: group.memberIds,
        members: group.members,
        list: group.list
    })
    try {
        const result = await newGroup.save()
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const getGroups = async () => {
    try {
        const groups = await Group.find({}, { __v: 0 });
        return groups
    } catch (error) {
        throw new Error(error)
    }
}

const deleteGroup = async (id) => {
    try {
        const result = await Group.deleteMany({ _id: new ObjectId(id) })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const getUsers = async () => {
    try {
        const groups = await User.find({}, { __v: 0 });
        return groups
    } catch (error) {
        throw new Error(error)
    }
}


module.exports.addEvent = addEvent;
module.exports.getEvents = getEvents;
module.exports.deleteEvent = deleteEvent;
module.exports.addGroup = addGroup;
module.exports.getGroups = getGroups;
module.exports.deleteGroup = deleteGroup;
module.exports.getUsers = getUsers;