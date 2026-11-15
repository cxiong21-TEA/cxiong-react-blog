/* Referencing useState Video 8.2_useState and 8.6_form_handling from Module 10 */

import React, { useState } from "react";

function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const showAlert = () => {
        alert("Form submitted!");
    };

    return (
    <div className="contact-page">
        <h1>Contact Us</h1>
            <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={showAlert}>Submit</button>
        </div>
    );
}

export default ContactPage;
