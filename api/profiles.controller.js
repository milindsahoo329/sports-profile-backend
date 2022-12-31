import ProfilesDAO from "../dao/profilesDAO.js";


export default class ProfilesController {

    static async apiGetProfileById(req, res, next) {

        try {

            let id = req.params.id || {};
            let profile = await ProfilesDAO.getProfileById(id);

            if (!profile) {
                res.status(404).json({ error: "not found" });
                return;
            }

            res.json(profile);

        } catch (e) {
            console.log(`API, ${e}`);
            res.status(500).json({ error: e });
        }

    }

    static async apiAllProfiles(req, res, next) {

        try {

            let profiles = await ProfilesDAO.getAllProfiles();

            if (!profiles) {
                res.status(404).json({ error: "not found" });
                return;
            }

            res.json(profiles);

        } catch (e) {
            console.log(`API, ${e}`);
            res.status(500).json({ error: e });
        }

    }

    static async apiCreateProfile(req, res, next) {

        try {

            const ProfilesResponse = await ProfilesDAO.createProfile(req.body);

            if (ProfilesResponse == "false") {
                res.status(500).json({ error });
            }


            res.json({ 
                status: "success",
                id: ProfilesResponse
            });

        } catch (e) {
            res.status(500).json({ error: e.message });
        }

    }

    static async apiUpdateProfile(req, res, next) {

        try {

            const ProfilesResponse = await ProfilesDAO.updateProfile(req.body);

            const { err } = ProfilesResponse;

            if (err) {
                res.status(500).json({ error });
            }
            
            res.json({ 
                status: "success",
                id: ProfilesResponse
            });

        } catch (e) {
            res.status(500).json({ error: e.message });
        }

    }

}
