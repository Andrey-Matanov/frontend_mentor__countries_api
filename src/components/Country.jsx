import React from "react";
import PropTypes from "prop-types";

const Country = ({ name }) => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <p>{name}</p>
        </div>
    );
};

Country.propTypes = {
    name: PropTypes.string,
};

export default Country;
