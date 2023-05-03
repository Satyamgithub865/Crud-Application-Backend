import mongoose from 'mongoose';
import User from '../model/userModel.js'

export const addUser = async (request, response) => {
    const user = request.body;
    
    try {
        const newUser = new User(user);
        await newUser.save();
        return response.status(200).json(newUser);
    } catch (error) {
        return response.status(400).json({ msg: error.message });
    }
}

export const getAllUsers = async (request, response) => {
    try {
        const users = await User.find({});
        return response.status(200).json(users);
    } catch (error) {
        return response.status(400).json({ msg: error.message })
    }
}

export const editUser = async (request, response) => {
    try {
        const user = request.body;
        const newEditedUser = new User(user);

        await User.findByIdAndUpdate(request.params.id, {$set: newEditedUser});
        return response.status(200).json({ msg: 'user updated successfully' });
    } catch (error) {
        return response.status(400).json({ msg: 'Error while updating the user' });
    }
}

export const getUser = async (request, response) => {
    try {
        const user = await User.findById(request.params.id);

        if(!user) {
            return response.status(400).json({ msg: 'Ooops user not found' });
        }

        return response.status(200).json(user);
    } catch (error) {
        return response.status(400).json({ msg: 'Ooops user not found' });
    }
}

export const deleteUser = async (request, response) => {
    try {
        const user = User.findById(request.params.id);
        if(!user) {
            return response.status(400).json({ msg: 'User not found' });
        }

        await User.findByIdAndDelete(request.params.id);
        return response.status(200).json({ msg: 'User deleted successfully' });
    } catch (error) {
        return response.status(400).json({ msg: 'User not found' });
    }
}
