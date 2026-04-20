import { user_model } from "./api/models/@user";
export const test_user = async () => {
    try {
        const user = new user_model({
            first_name: "John",
            last_name: "Doe",
            email_id: "john@exmample.com",
            mobile_no: "+12345679890",
            gender: "male",
            user_name: "johndoem134",
            password: "5666"
        });
        await user.save();
        console.log("user created");

    } catch (Error) {
        console.log("Failed to create", Error);

    }

}

