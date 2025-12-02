import React from "react";

export default function Location() {
    return (
        <div className="location">
            <iframe
                title="Garage Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.123456789!2d4.895168!3d52.370216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609d7abcd1234%3A0x1234567890abcdef!2sMain%20Street%2012%2C%20Amsterdam!5e0!3m2!1sen!2snl!4v1698683540000!5m2!1sen!2snl"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}
