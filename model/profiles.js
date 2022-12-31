import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const profileSchema = new Schema({
  id: String,
  name: String,
  date_of_birth: Date,
  gender: String,
  location: String,
  sports: [String],
  about: String,
  interests: String,
  createdAt: Date,
  updatedAt: Date
});

const ProfilesModel = model('Profiles', profileSchema);
export default ProfilesModel;