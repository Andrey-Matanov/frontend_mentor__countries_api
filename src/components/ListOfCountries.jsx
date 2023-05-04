import React, { useEffect } from "react";
import countries from "../../data.json";
import Country from "./Country";

const ListOfCountries = () => {
    useEffect(() => {
        console.log(countries);
    }, []);

    return (
        <section className="list_of_countries" style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: 20 }}>
            {countries.map((country) => (
                <Country key={country.alpha3Code} name={country.name} />
            ))}
        </section>
    );
};

export default ListOfCountries;
