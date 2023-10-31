import { useState, useRef } from 'react'
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

export const SignUp = () => {
    const { setUserName, userName, setFormSubmitted } = useGlobalContext();
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        postcode: '',
    });
    const checkboxRef = useRef();
    let isValid = true;

    // update state as form changes, (also clears values on refocus after error)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        const input = e.target;
        input.style.border = '';
        input.placeholder = '';
        input.classList.remove('placeholder-red');
    };

    // useless scroll thats included from button to actual form
    const handleScroll = () => {
        const elementToScrollTo = document.querySelector('.details')
        if (elementToScrollTo) {
            elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // the privacy policy dropdown info
    const handleDropdown = () => {
        setDropdownVisible(!dropdownVisible)
        const chevron = document.getElementById('chevron')
        chevron.classList.toggle('rotate')
    }

    // all the validation logic for the form
    const handleSubmit = (e) => {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const postcodeInput = document.getElementById('postcode');
        const termsContainer = document.querySelector('.terms-agree-container');
        e.preventDefault();

        const { email } = formData;

        // Validate email
        if (!validateEmail(email)) {
            error(emailInput, '*Please enter a valid email address');
            emailInput.value = '';
            isValid = false;
        } else {
            emailInput.style.border = '2px solid green';
        }

        // Validate postcode
        const postcodeRegex = /^\d{4}$/;
        if (!postcodeRegex.test(formData.postcode)) {
            error(postcodeInput, '*Please provide a valid postcode (e.g., 1234)');
            postcodeInput.value = '';
            isValid = false;
        } else {
            postcodeInput.style.border = '2px solid green';
        }

        // Validate password
        if (passwordInput.value.length < 8) {
            error(passwordInput, '*Password must be at least 8 characters');
            passwordInput.value = '';
            isValid = false;
        } else {
            passwordInput.style.border = '2px solid green';
        }

        // Check for empty fields
        const emptyMessage = '*Please fill out the field'
        checkEmptyInput(emailInput, formData.email, emptyMessage);
        checkEmptyInput(passwordInput, formData.password, emptyMessage);
        checkEmptyInput(firstNameInput, formData.firstName, emptyMessage);
        checkEmptyInput(lastNameInput, formData.lastName, emptyMessage);
        checkEmptyInput(postcodeInput, formData.postcode, emptyMessage);

        // Make sure checkbox is checked
        if (!checkboxRef.current.checked) {
            termsContainer.style.border = '1px solid red';
            isValid = false;
        } else {
            termsContainer.style.border = 'none';
        }

        if (isValid) {
            console.log(formData.firstName);
            setFormSubmitted(true)
            setUserName(formData.firstName);
            setModalVisible(true)
            localStorage.setItem("user", JSON.stringify(formData.firstName));
            localStorage.setItem("existingUser", JSON.stringify(true))
        }
    };

    // stop propogation with empty values
    function checkEmptyInput(inputElement, inputValue, errorMessage) {
        if (inputValue === '') {
            error(inputElement, errorMessage);
            isValid = false;
        }
    }

    // check email against regExp
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    // Styling for an error
    const error = (input, message) => {
        input.style.border = '2px solid red'
        input.placeholder = message
        input.classList.add('placeholder-red');
    }

    return (
        <main className="signup-page">
            <section className="info">
                <div className="registration-box">
                    <div className="box-header">
                        <p>- Selected -</p>
                    </div>
                    <div className="box-main">
                        <h2>Registration</h2>
                        <img src="../../public/assets/registration.webp" alt="registration form clipart" />
                        <button className="primary-btn" onClick={() => handleScroll()}>Sign up for more</button>
                        <div className="tick-boxes">
                            <div>
                                <svg stroke="#4fcc01" fill="#4fcc01" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                                <p>Comment on articles</p>
                            </div>
                            <div>
                                <svg stroke="#4fcc01" fill="#4fcc01" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                                <p>Enter competitions</p>
                            </div>
                            <div>
                                <svg stroke="#4fcc01" fill="#4fcc01" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                                <p>Unlimited stories on iOS and Android apps</p>
                            </div>
                            <div>
                                <svg stroke="#4fcc01" fill="#4fcc01" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                                <p>Play all the In The Know quizzes</p>
                            </div>
                        </div>
                        <p>*Read the fine print</p>
                    </div>
                </div>
                <p>Check our FAQs</p>
            </section>

            <section className="details">
                <div className='duplicate-container'>
                    <div className="registration-box duplicate-box">
                        <div className="box-header">
                            <p>Your Selection</p>
                        </div>
                        <div className="box-main">
                            <h2>Registration</h2>
                            <img src="../../public/assets/registration.webp" alt="registration form clipart" />
                            <div className='totals'>
                                <p>Today's total</p>
                                <p>$0</p>
                            </div>
                        </div>
                    </div>
                    <div className='terms'>
                        <p>Important Information</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>

                <div>
                    <div className="form">
                        <h2>Enter your details</h2>
                        <p>You may already have an account with <span>us</span>.</p>
                        <p>Register with your existing account <span>here</span>.</p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    id='email'
                                    placeholder='Email'
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    id='password'
                                    placeholder='Password (min 8 characters)'
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    minLength="8"
                                />
                            </div>
                            <div className="name">
                                <div>
                                    <input
                                        id='firstName'
                                        placeholder='First Name'
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        id='lastName'
                                        placeholder='Last Name'
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    id='postcode'
                                    placeholder='Postcode'
                                    type="number"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleChange}
                                />
                            </div>
                        </form>

                        <div className="signup-fineprint">
                            <p>This site is protected by reCAPTCHA and the Google ,<a href='https://policies.google.com/privacy'>Privacy Policy</a> and <a href='https://policies.google.com/terms'>Terms of Service</a> apply.</p>

                            <div className="terms-agree-container">
                                <input id='checkbox' type="checkbox" ref={checkboxRef} />
                                <p>I have read and agree to the <a href='https://policies.google.com/privacy'>Privacy Policy</a>, <a href='https://policies.google.com/terms'>Terms and Conditions</a> and agree that News Pty Limited and any of its related companies can contact me with special offers and marketing.</p>
                            </div>

                            <div className="privacy-container">
                                <div className="privacy-title" onClick={() => handleDropdown()}>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>

                                    <p>About our Privacy Policy</p>
                                    <svg id='chevron' stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
                                </div>
                                {dropdownVisible && <div className="privacy-dropdown">
                                    <p>Our Privacy Policy includes important information about our collection, use and disclosure of your personal information (including to provide you with targeted advertising based on your online activities). It explains that if you do not provide us with information we have requested from you, we may not be able to provide you with the goods and services you require. It also explains how you can access or seek correction of your personal information, how you can complain about a breach of the Australian Privacy Principles and how we will deal with a complaint of that nature.</p>
                                </div>}
                            </div>
                        </div>
                        <button onClick={handleSubmit} type='submit' className="primary-btn">Complete Registration</button>
                    </div>
                </div>
            </section>

            {modalVisible && <div className='modal'>
                <img src="../../public/assets/logo.webp" alt="day old news logo" />
                <h2>Congratulations {userName}</h2>
                <p>You have succesfully signed up!</p>
                <Link to='/'><button onClick={() => setModalVisible(false)} className='primary-btn'>Home</button></Link>
            </div>}
        </main>
    )
}
