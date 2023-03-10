import ProfilesModel from '../model/profiles.js';

export default class ProfilesDAO {

    static async getProfileById(id) {
        try {

            return ProfilesModel.findOne({id: id});

        } catch (e) {
            console.error(`Something went wrong in getProfileById: ${e}`);
            throw e;
        }
    }

    static async getAllProfiles() {

        try {

            return ProfilesModel.find();  

        } catch (e) {

            console.error(`Something went wrong in getAllProfiles: ${e}`);
            throw e;

        }

    }

    static async createProfile(requestBody) {

        try {

            let randomId = (Math.random() + 1).toString(36).substring(7) + Date.now();;

            var profile = new ProfilesModel({ 
                name: requestBody.name, 
                id: randomId,
                date_of_birth: requestBody.dob,
                location: requestBody.location,
                about: requestBody.about == undefined ? "" : requestBody.about,
                interests: requestBody.interests == undefined ? "" : requestBody.interests,
                team: requestBody.team,
                gender: requestBody.gender
            });

            await profile.save((err, profile) => {
                if (err) { 
                    console.error(err);
                    return "false";
                }
            });

            return randomId;
 

        } catch (e) {

            console.error(`Something went wrong in createProfiles: ${e}`);
            throw e;

        }

    }

    static async updateProfile(requestBody) {

        try {

            const filter = { id: requestBody.id };
            const update = { 
                name: requestBody.name,
                date_of_birth: requestBody.dob,
                location: requestBody.location,
                about: requestBody.about == undefined ? "" : requestBody.about,
                interests: requestBody.interests == undefined ? "" : requestBody.interests,
                team: requestBody.team,
                gender: requestBody.gender
            };

            // `doc` is the document _before_ `update` was applied
            let doc = await ProfilesModel.findOneAndUpdate(filter, update);

            return requestBody.id;
 
        } catch (e) {

            console.error(`Something went wrong in updateProfiles: ${e}`);
            throw e;

        }

    }



};