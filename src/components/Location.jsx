import React from "react";

export default function Location() {
    return (
        <div className="location">
            <iframe
                title="Garage Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.345365479292!2d5.309620076823497!3d51.580233405379786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6e836decc6599%3A0xfbd734708ad1acdb!2sIndustrieweg%204A%2C%205281%20RW%20Boxtel!5e0!3m2!1sru!2snl!4v1764783719078!5m2!1sru!2snl"
                width="100%"
                height="300"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}
