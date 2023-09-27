import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String, 
    role: {
        type: String,
        enum: ['Player', 'Fan'],
        default: 'Player'
    }
}, {
    timestamps: true,
})

const UserModel = mongoose.models.User ||mongoose.model("User", userSchema)

export default UserModel