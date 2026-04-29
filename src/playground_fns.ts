import { user_model } from "./api/models/@user";
import { journal_model } from "./api/models/@journal/journal";

export const test_journal = async () => {
    try {
        const user = await user_model.findOne();
        if (!user) throw new Error("No user found in DB — create a user first.");

        const journal = await journal_model.create({
            title: "Test Journal Entry",
            content: "This is a test journal entry created from the playground to verify the journal model is working correctly.",
            description: "Playground test",
            journal_type: "personal",
            mood: "happy",
            location: "Home",
            photos: [],
            tags: ["test", "playground"],
            date: new Date().toISOString().split("T")[0],
            time: new Date().toTimeString().split(" ")[0],
            is_favorite: false,
            user_id: user._id,
        });

        console.log("✅ Journal created:", JSON.stringify(journal.toObject(), null, 2));
    } catch (error) {
        console.error("❌ Failed to create journal:", error);
    }
};

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

