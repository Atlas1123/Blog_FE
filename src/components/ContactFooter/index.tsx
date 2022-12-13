import React from "react";
import "./contact.footer.css";
import sendMessageBtn from "../../assets/images/send.svg";
import { Button } from "@chakra-ui/react";

const ContactFooterComponent: React.FC = () => {
    return (
        <>
            <div className="contact-footer">
                <div className="page-container">
                    <div className="contact-main">
                        <div className="text">
                            <h2>Newsletter SubScribe</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                        </div>
                        <div className="contact">
                            <input type="email" className="contact-input" placeholder="Enter your Email!"></input>
                            <button type="button" className="contact-submit-btn"><img src={ sendMessageBtn }></img></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactFooterComponent;