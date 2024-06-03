/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

export default function Contacts({contacts, currentUser, changeChat}) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
 
  useEffect(()=>{
    if(currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  },[currentUser]);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
  <>
    {currentUserImage && currentUserImage && (
      <Container>
        <div className="brand">
          <h3>dude</h3>
          <img src={Logo} alt="logo" />
        </div>
        <div className="contacts">
          {contacts.map((contact, index)=> {
              return (
              <div
                className={`contact ${
                  index === currentSelected ? "selected" : ""
                }`}
                key={index}
                onClick={()=>changeCurrentChat(index, contact)}
              >
                <div className="avatar">
                  <img 
                    src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                    alt="avatar-contact" 
                  />
                </div>
                <div className="username">
                  <h3>{contact.username}</h3>
                </div>
              </div>
              );
            })}
        </div>
        <div className="current-user">
          <div className="avatar">
            <img 
            src={`data:image/svg+xml;base64,${currentUserImage}`}
            alt="avatar-user" 
            />
          </div>
          <div className="username">
              <h2>{currentUserName}</h2>
          </div>
        </div>
      </Container>
    )}
  </>
  );
}
const Container = styled.div`
display: grid;
grid-template-raws: 20% 75% 5%;
overflow: hidden;
background-color: #181818;
.brand {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  img {
    height: 1.7rem;
  }
  h3 {
    color: #1DB158;
    text-transform: uppercase;
  }
}
.contacts {
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 0.5rem;
  &::-webkit-scrollbar {
    width: 0.4rem;
    &-thumb {
      background-color: #282828;
      width: 0.3rem;
      border-radius: 2rem;
    }
  }
  .contact {
    background-color: #282828;
    min-height: 5rem;
    width: 90%;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 0.4rem;
    gap: 1rem;
    align-items: center;
    display: flex;
    transition: 0.5s ease-in-out;
    .avatar {
      img {
        height: 3rem;
      }
    }
    .username {
      h3 {
        color: #1DB158;
      }
    }
  }
  .selected {
    background-color: #3D684D;
    .username {
      h3 {
        color: white;
      }
    } 
  }
}

.current-user {
  background-color: #1DB158;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .avatar {
    img {
      height: 3rem;
    }
  }
  .username {
    h2 {
      color: white;
    }
  }
  
}
`;
/*
@media screen and (min-width:720px) and (max-width:1080px); {
    gap: 0.5rem;
    .username {
      h2 {
       font-size: 2rem;
      }
    }
  }
  */