import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Bootstrap CSS diimpor
// import React from "react";
import React, { useState } from "react";
import monas from "../../assets/img/destinasi/monas.jpg";
import "../../css/destinations.css"; // Pastikan ini mengarah ke file CSS yang benar

const Destinations = () => {
    const [priceRange, setPriceRange] = useState([0, 10000000]);
    const [filters, setFilters] = useState({
        popular: [],
        facilities: [],
    });

    const handlePriceChange = (e) => {
        setPriceRange([0, parseInt(e.target.value)]);
    };

    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target;
        setFilters((prevFilters) => {
            if (checked) {
                return {
                    ...prevFilters,
                    [name]: [...prevFilters[name], value],
                };
            } else {
                return {
                    ...prevFilters,
                    [name]: prevFilters[name].filter((filter) => filter !== value),
                };
            }
        });
    };

    return (
        <div className="home-screen">
            <header className="header">
                <div className="logo">
                    <span>
                        DESTINA<span>6</span>
                    </span>
                </div>
                <nav className="nav-bar">
                    <a href="/">Home</a>
                    <a href="/faq">FAQ</a>
                    <a href="/contact">Contact</a>
                    <a href="/profile">My Profile</a>
                </nav>
            </header>
            <main className="container mt-4">
                <div className="tab-navigation ">
                    <a href="#" class="btn active">Destinations</a>
                    <a href="/hotelUser">Hotels</a>
                    <a href="/flightUser">Flight</a>
                    <a href="/busUser">Bus</a>
                    <a href="/history" className="btn active">History</a>
                </div>
                <div className="search-form mb-4">
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Search Destination" />
                    <button className="btn btn-dark">SEARCH</button>
                </div>

                <div class="row">
                    <div class="col-3 ">
                        <div class="card">
                            <div class="card-body">
                                <h7><b> Popular Filter </b></h7><br/>
                                <div class="form-check mb-2 mt-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Mountain
                                    </label>
                                </div>

                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Ocean
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-9 destinasi">
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-3">
                                    <img src={monas} class="img-fluid rounded-start" alt="Destinasi Wisata" />
                                </div>
                                <div class="col-md-9">
                                    <div className="card-body ">
                                        <h7><b> Monas (Monumen Nasional) </b></h7> <br />
                                        <small><i class="fa-solid fa-location-dot"></i>Jakarta, Indonesia </small>
                                        <p className="paragraf">The National Monument or what is abbreviated as Monas or Tugu Monas is a 132 meter (433 foot) high memorial monument located right in the middle of Medan Merdeka Square, Central Jakarta. Monas was established to commemorate the resistance and struggle of the Indonesian people in gaining independence from the colonial government of the Dutch Kingdom.<br />
                                        </p>
                                        <a href="/detailDestinationUser" type="button" className="btn btn-outline-primary btn-sm">Explore</a>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-3">
                                    <img src={monas} class="img-fluid rounded-start" alt="Destinasi Wisata" />
                                </div>
                                <div class="col-md-9">
                                    <div className="card-body ">
                                        <h7><b> Taman Mini Indonesia Indah </b></h7> <br />
                                        <small>Jakarta, Indonesia </small>
                                        <p className="paragraf">Spanning over 250 acres, Taman Mini Indonesia Indah is a cultural park designed to represent the diversity of Indonesia. Each province is depicted with its traditional architecture, complete with intricate details. The park features numerous museums such as the Museum Indonesia, showcasing traditional costumes and crafts, and the Keong Emas IMAX theater, which screens educational films. The park also hosts various cultural performances and festivals, making it a vibrant, living museum.<br />
                                        </p>
                                        <a href="#" type="button" className="btn btn-outline-primary btn-sm">Explore</a>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-3">
                                    <img src={monas} class="img-fluid rounded-start" alt="Destinasi Wisata" />
                                </div>
                                <div class="col-md-9">
                                    <div className="card-body ">
                                        <h7><b> Kota Tua </b></h7> <br />
                                        <small>Jakarta, Indonesia </small>
                                        <p className="paragraf">Kota Tua, also known as Old Batavia, transports visitors back to Jakarta's colonial past. The area is rich with Dutch colonial buildings, some of which have been converted into museums. Fatahillah Square is the heart of Kota Tua, where you can visit the Jakarta History Museum, housed in the old city hall. The Wayang Museum displays traditional Indonesian puppetry, while Café Batavia offers a nostalgic dining experience with a view of the square.</p>
                                        <a href="#" type="button" className="btn btn-outline-primary btn-sm">Explore</a>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-3">
                                    <img src={monas} class="img-fluid rounded-start" alt="Destinasi Wisata" />
                                </div>
                                <div class="col-md-9">
                                    <div className="card-body ">
                                        <h7><b> Ancol Dreamland</b></h7> <br />
                                        <small>Jakarta, Indonesia </small>
                                        <p className="paragraf">Ancol Dreamland is Jakarta's premier recreational complex, located along the waterfront. It includes Dunia Fantasi, an amusement park with thrilling rides and attractions themed around various cultures. Sea World offers an impressive aquarium showcasing marine life, while Atlantis Water Adventure features pools and slides for all ages. The Ancol complex also includes art markets, an eco-park, and numerous dining options, making it a perfect family destination.<br />
                                        </p>
                                        <a href="" type="button" className="btn btn-outline-primary btn-sm">Explore</a>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </main>
        </div>
    );
};

export default Destinations;