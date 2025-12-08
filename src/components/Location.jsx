import React from "react";

export default function Location() {
    return (
        <div className="location">
            <iframe
                title="Garage Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.3588521764636!2d5.3093394768234745!3d51.57998620539783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6e836da3b3dd7%3A0x5a8289ddd83cce95!2sIndustrieweg%204%2C%205281%20RW%20Boxtel!5e0!3m2!1snl!2snl!4v1764802885603!5m2!1snl!2snl"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}
