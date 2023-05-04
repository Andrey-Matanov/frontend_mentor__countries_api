import React from "react";
import Header from "./components/Header";
import ListOfCountries from "./components/ListOfCountries";

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="filters_section">
                    <input type="text" placeholder="Search for a country..." />
                    <select defaultValue="">
                        <option value="" disabled hidden>
                            Filter by region
                        </option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                    </select>
                </section>

                <ListOfCountries />
            </main>
        </div>
    );
};

export default App;
