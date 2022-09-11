import React from "react";
import useAuth from "../hooks/useAuth";
import { signInWithGoogle } from "../lib/firebase";
import axios from "axios";

const Home = () => {
    const currentUser = useAuth();

    const loginHandler = async () => {
        try {
            await signInWithGoogle().then((result) => {
                const userData = {
                    name: result.user.displayName,
                    email: result.user.email,
                };
                axios
                    .post("/api/send-user", {
                        ...userData,
                    })
                    .then((res) =>
                        res.data.response === "Already Exists"
                            ? alert("User Already Exists")
                            : alert("New user Added")
                    )
                    .catch((err) => alert(err));
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div style={{ padding: "5%" }}>
            <button onClick={loginHandler}>Login</button>
        </div>
    );
};

export default Home;
