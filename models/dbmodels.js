import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    status: { type: String, enum: ['online', 'offline', 'away'], default: 'offline' },
});

const User = mongoose.model('User', userSchema);
export default User;