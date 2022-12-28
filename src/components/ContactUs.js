import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import "./HomePage.css";

const ContactUs = () => {
    return (
        <div className='aboutimage'>
            <div className='contactcontents'>
                <section className="mb-4">

                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                       <br/> a matter of hours to help you.</p>

                    <div className="row">

                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                <div className="row">

                                    <div className="col-md-12">
                                        <div className="md-form mb-12">
                                            <input type="text" id="name" name="name" class="form-control" />
                                            <label for="name" class="">Your name</label>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="md-form mb-12">
                                            <input type="text" id="email" name="email" class="form-control" />
                                            <label for="email" class="">Your email</label>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control" />
                                            <label for="subject" class="">Subject</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                            <label for="message">Your message</label>
                                        </div>

                                    </div>
                                </div>

                            </form>

                            <div class="d-grid gap-2">
                                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                            </div>
                            <div className="status"></div>
                        </div>

                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><PlaceIcon />
                                    <p>LAhore,Pak</p>
                                </li>

                                <li><SettingsPhoneIcon />
                                    <p>090078601</p>
                                </li>

                                <li><MarkunreadIcon />
                                    <p>contact@WeCare.com</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default ContactUs