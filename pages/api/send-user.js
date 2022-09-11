import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const users = db.collection("users");
    const userEmail = req.body.email;
    const userExist = await users.find({ email: userEmail }).limit(1).toArray();

    if (userExist.length === 0) {
        await users.insertOne(req.body);
        res.status(200).json({ response: "Success" });
    } else {
        res.status(200).json({ response: "Already Exists" });
    }
}
