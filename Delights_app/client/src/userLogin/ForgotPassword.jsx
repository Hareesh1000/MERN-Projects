import React from 'react'
import '../assets/CSS/style_forgotpwd.css'
import fpImage from '../assets/Images/password-image.png'
import { Link } from 'react-router-dom'

function ForgotPassword() {

    function sendAlert() {
        alert(`Password is sent to your regsitered Email Id`);
        window.location.href = '/';
    }
    return (
        <div>
            <div class="hero_section3">

                <div class="password_page">
                    <div class="password_image">
                        <img src={fpImage} alt="Login Image" />
                    </div>


                    <div class="forgot_password">
                        <div class="signup_text"><h2>Forgot password</h2></div>
                        <p> Provide your email and we will send you a link to reset your password.</p>

                        <div class="form_section">
                            <input type="mail" name="mail" id="mail" />
                            <label for="pasmailsword">Enter your email</label>
                        </div>

                        <div class="reset">
                            {/* <a href="#" id="reset_password"> Reset your password </a>
                            <a href="index.html"> Go Back </a> */}
                            <Link onClick={sendAlert} id="reset_password" > Reset your password</Link>
                            <Link to='/signin' className='goBack'> Go Back</Link>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default ForgotPassword