import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan Bootstrap CSS diimpor
import React, { useEffect, useState } from 'react';
import pandawaBeach from '../assets/img/homescreen/pandawa-beach.png';
import '../css/contact.css'; // Pastikan ini mengarah ke file CSS yang benar

const Contact = () => {
    const [background, setBackground] = useState('background1');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackground(prev => {
                const nextBackground = (parseInt(prev.slice(-1), 10) % 5) + 1; // Rotasi dari background1 sampai background5
                return `background${nextBackground}`;
            });
        }, 5000); // Ganti background setiap 5 detik

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`home-screen ${background}`}>
            <header className="header">
                <div className="logo">
                    <span>DESTINA<span>6</span></span>
                </div>
                <nav className="nav-bar">
                    <a href="/">Home</a>
                    <a href="/faq">FAQ</a>
                    <a href="/contact" className='active'><u> Contact </u></a>
                    <a href="/signin">Sign in</a>
                </nav>
            </header>

            <main className="container text-center mt-4">

                <div className='row contact'>
                    <div class="col-6 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <p className='paragraf'><b>CALL US</b><br /> (021)98767121351</p>
                                <p className='paragraf'><b>LOCATION</b><br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                <p className='paragraf'><b>EMAIL</b><br /> destinasix@destina.com</p>
                                <p className='paragraf'><b>BUSSINESS HOURS</b><br /> 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and s</p>
                            </div>
                        </div>
                    </div>
                    <br />


                    <div className="col-6 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5>Contact Us </h5><hr />
                                <div class="form-group mb-4">
                                    <input
                                        type="email" name="email" id="email" class="form-control" placeholder="
                                        NAme" />

                                </div><div class="form-group mb-4">
                                    <input
                                        type="email" name="email" id="email" class="form-control" placeholder="Email" />

                                </div><div class="form-group mb-4">
                                    <input
                                        type="email" name="email" id="email" class="form-control" placeholder="Telphone" />

                                </div>
                                <div class="form-group mb-4">
                                    <input
                                        type="email" name="email" id="email" class="form-control" placeholder="Telphone" />
                                </div>

                                <div class="form-group mb-4">
                                    <input
                                        type="button" name="email" id="email" class="btn btn-outline-secondary" placeholder='Send'/> 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
};

export default Contact;
