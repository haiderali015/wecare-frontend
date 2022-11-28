import React from 'react'

const Patientregister = () => {
  return (
    <div className="mainform" >

        <section className="signup" data-aos="zoom-in" data-aos-delay="100">
            <img src="images/signup-bg.jpg" alt=""/> 
            <div className="container">
            <h1 style={{textAlign:"center"}}>Patient signup form</h1>
                <div className="signup-content">
                    <form method="POST" id="signup-form" className="signup-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label for="first_name">First name</label>
                                <input type="text" className="form-input" name="first_name" id="first_name" />
                            </div>
                            <div className="form-group">
                                <label for="last_name">Last name</label>
                                <input type="text" className="form-input" name="last_name" id="last_name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group form-icon">
                                <label for="birth_date">Birth date</label>
                                <input type="text" className="form-input" name="birth_date" id="birth_date" placeholder="MM-DD-YYYY" />
                            </div>
                            <div className="form-radio">
                                <label for="gender">Gender</label>
                                <div className="form-flex">
                                    <input type="radio" name="gender" value="male" id="male" checked="checked" />
                                    <label for="male">Male</label>
    
                                    <input type="radio" name="gender" value="female" id="female" />
                                    <label for="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="phone_number">Phone number</label>
                            <input type="number" className="form-input" name="phone_number" id="phone_number" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-input" name="password" id="password"/>
                            </div>
                            <div className="form-group">
                                <label for="re_password">Repeat your password</label>
                                <input type="password" className="form-input" name="re_password" id="re_password"/>
                            </div>
                        </div>
                        <div className="form-text">
                            <a href="#" className="add-info-link"><i className="zmdi zmdi-chevron-right"></i>Additional info</a>
                            <div className="add_info">
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-input" name="email" id="email"/>
                                </div>
                                <div className="form-group">
                                    <label for="country">Country</label>
                                    <div className="select-list">
                                        <select name="country" id="country" required>
                                            <option value="US">United State</option>
                                            <option value="UK">English</option>
                                            <option value="VN">Viet Nam</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="city">City</label>
                                    <div className="select-list">
                                        <select name="city" id="city" required>
                                            <option value="NY">NewYork</option>
                                            <option value="IC">IceLand</option>
                                            <option value="canada">Canada</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="submit" id="submit" className="form-submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </div>
      
  )
}

export default Patientregister