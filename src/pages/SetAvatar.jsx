/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Await, useNavigate } from "react-router-dom";
import styled from "styled-components";
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";
import { Buffer } from "buffer";
export default function SetAvatar() {
    const api = "https://api.multiavatar.com/bc9e38228fdc61c5e8";
    const navigate = useNavigate();
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const setProfilePicture = async () => {
        if(selectedAvatar === undefined) {
            toast.error("Please select an awatar", toastOptions);
        } else {
            const user = await JSON.parse(localStorage.getItem("chat-app-user"));
            const {data} = await axios.post(`${setAvatarRoute}/${user._id}`, {
                image: avatars[selectedAvatar],
            });
          if (data.isSet) {
            user.isAvatarImageSet = true;
            user.avatarImage = data.image;
            localStorage.setItem("chat-app-user",JSON.stringify(user));
            navigate ("/");
          }
          else {
            toast.error("It looks like there was an error setting the avatar. Please try again.", toastOptions);
          }
        }
    };
    useEffect(() => {
        (async () => {
         const data = [];
         for (let i = 0; i < 4; i++) {
            const image = await axios.get(
                `${api}/${Math.round(Math.random()*1000)}`
            );
            const buffer = new Buffer(image.data);
            data.push(buffer.toString("base64"));
         }
         setAvatars(data);
         setIsLoading(false);
        })();
    }, []);
    return (
    <>
    {
        isLoading ? <Container>
            <img src={loader} alt="loader" className="loader" />
        </Container> : (

        <Container>
            <div className="title-container">
                <h1>Pick an avatar as your profile picture:</h1>
            </div>
            <div className="avatars">{
                avatars.map((avatar, index) => {
                    return (
                        <div
                           key = {index}
                           className={`avatar ${
                               selectedAvatar === index ? "selected" : ""
                           }`}
                        >
                            <img
                            src={`data:image/svg+xml;base64,${avatar}`}
                            alt="avatar"
                            onClick={() => setSelectedAvatar(index)}
                        />
                        </div>
                    );
                })}
            </div>
            <button className="submit-btn" onClick={setProfilePicture}>
                Set as Profile Picture</button>
        </Container>
        )}
        <ToastContainer />
    </>
    );
}
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: -8px;
gap: 3rem;
background-color: #181818;
height: 100vh;
width: 100vw;
.loader {
    max-inline-size: 50%;
}
.title-container {
    h1 {
        color: #1DB158;
    }
}
.avatars {
    display: flex;
    gap: 2rem;
    .avatar {
        border: 0.4rem solid transparent;
        padding: 0.4rem;
        border-radius: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s ease-in-out;
        img {
            height: 6rem;
        }
    }
    .selected {
        border: 0.4rem solid #1DB158;
    }
}
.submit-btn {
    background-color: #3D684D;
    color: #DDDDDD;
    padding: 1rem;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 0.5rem;
    color: #DDDDDD;
    transition: 0.5s ease-in-out;
    &:hover {
        background-color: #1DB158;
    }
}
`;
