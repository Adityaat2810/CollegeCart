import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository{

    constructor(){
        super(User)
    }

    async getByEmail(email){
        try {
            const response = await User.findOne({email}).lean();
            return response;
        } catch (error) {
                console.log("There is error in User Repository");
        }
    }

    async getAll(){
        try {
            const response = await User.find({}).populate( {path : 'user'}).populate({path :'likeable'});
            return response;
        } catch (error) {
            console.log("There is error in User Repository");
        }
    }


}

export default UserRepository;