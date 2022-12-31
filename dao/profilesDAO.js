import ProfilesModel from '../model/profiles.js';

export default class ProfilesDAO {

    static async getProfileById(id) {
        try {

            return ProfilesModel.findOne({id: 1});

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
                name: requestBody.name, id: randomId
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
            const update = { name: requestBody.name };

            // `doc` is the document _before_ `update` was applied
            let doc = await ProfilesModel.findOneAndUpdate(filter, update);

            return requestBody.id;
 
        } catch (e) {

            console.error(`Something went wrong in updateProfiles: ${e}`);
            throw e;

        }

    }



};