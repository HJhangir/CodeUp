import React, { useRef } from 'react'

// img
import signin from '../img/ArrowRight.svg'
import img_head from '../img/Frame.svg'
import shieldCheck from '../img/ShieldCheck.svg'
import cursor from '../img/Cursor.svg'
import dollar from '../img/CurrencyDollarSimple.svg'
import unsplash from '../img/unsplash_p6YWrjhmjhM.svg'

// icone
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'


const HomePage = () => {
    const overlayMenuRef = useRef()
    const barsBtnRef = useRef()
    const openOverley = e => {
        const kliklenenElemen = e.target
        if (kliklenenElemen.classList.contains('fa-bars')) {
            overlayMenuRef.current.classList.add('active')
        }

    }

    const xmarkBtnRef = useRef()
    const closeOverley = e => {
        const kliklenenElemen = e.target

        if (kliklenenElemen.classList.contains('fa-xmark')) {
            overlayMenuRef.current.classList.remove('active')
        }
    }

    return (

        <div className="container">
            <div className="overlay" ref={overlayMenuRef}>
                <AiOutlineClose className='fa-xmark' ref={xmarkBtnRef} onClick={closeOverley} />
                <a href="##">Home</a>
                <a href="##">About us</a>
                <a href="##">Partners</a>
                <a href="##">Contact</a>
            </div>
            <div className="header">
                <div className="logo">
                    <h3>CodeUp</h3>
                </div>

                <div className="nav">
                    <a href="##">Home</a>
                    <a href="##">About us</a>
                    <a href="##">Partners</a>
                    <a href="##">Contact</a>
                </div>
                <div className="signin">
                    <img src={signin} alt="" className="s" />
                    <a href="##" className="d"> Sign In</a>
                    <i className="fa-solid fa-bars"><FaBars className='fa-bars' ref={barsBtnRef} onClick={openOverley} /></i>

                </div>

            </div>

            <div className="header_border">
                <div></div>
            </div>

            <div className="before_header">
                <div className="before_header_button">
                    <h2>Join CodeUp now and take advantage of all
                        the features!</h2>
                    <div className="btn_head">
                        <p><span><a href="##">Sart now</a></span></p>
                        <a href="##">Learn More</a>
                    </div>

                </div>
                <div className="before_header_imgg">
                    <img src={img_head} alt="" />

                </div>

            </div>

            <div className="whatiscodeup">
                <div className="left">
                    <h1>What is CodeUP?</h1>
                    <p>CodeUP projecy helps people in Azerbaijan and Globaly learn better by doing more fun, practical
                        exercises, that is, by applying what they have learned to projects, instead of learning Programming
                        or
                        IT in a boring way. </p>

                    <div className="btn_head">
                        <p><span><a href="##">Join now!</a></span></p>
                    </div>
                </div>
                <div className="right_first">

                    <div className="first_right">
                        <div className="teaching">

                            <div className="text text_st">
                                <p>Teaching</p>
                                <p>CodeUp teachers programming to its users in the best ways and is always with you.</p>
                            </div>
                        </div>
                        <div className="contact">

                            <div className="text text_st">
                                <p>7/24 Contact</p>
                                <p>You can contact our professional trainers and team anytime and give feedback</p>
                            </div>
                        </div>
                        <div className="profile">

                            <div className="text text_st">
                                <p>Profile</p>
                                <p>You can share your projects, htlp other users and chat on your profile. </p>
                            </div>
                        </div>
                    </div>

                    <div className="second_right">
                        <div className="safety">
                            <div className="icone">
                                <img src={shieldCheck} alt="" />
                            </div>
                            <div className="text">
                                <p>Safety</p>
                                <p>Our platform is developerd according to igh security standarts. </p>
                            </div>
                        </div>
                        <div className="one_click">
                            <div className="icone">
                                <img src={cursor} alt="" />
                            </div>
                            <div className="text">
                                <p>One Click</p>
                                <p>Register with one click and enjoy the benefits of CodeUp. </p>
                            </div>
                        </div>
                        <div className="pricing">
                            <div className="icone">
                                <img src={dollar} alt="" />
                            </div>
                            <div className="text">
                                <p>Pricing</p>
                                <p>Enjoy many features for free. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bottom_whatiscodeup">
                <div className="safety">
                    <div className="icone">
                        <img src={shieldCheck} alt="" />
                    </div>
                    <div className="text">
                        <p>Safety</p>
                        <p>Our platform is developerd according to igh security standarts. </p>
                    </div>
                </div>
                <div className="one_click">
                    <div className="icone">
                        <img src={cursor} alt="" />
                    </div>
                    <div className="text">
                        <p>One Click</p>
                        <p>Register with one click and enjoy the benefits of CodeUp. </p>
                    </div>
                </div>
                <div className="pricing">
                    <div className="icone">
                        <img src={dollar} alt="" />
                    </div>
                    <div className="text">
                        <p>Pricing</p>
                        <p>Enjoy many features for free. </p>
                    </div>
                </div>
            </div>

            <div className="arrangeDemo">
                <div className="demoall">
                    <div className="demotxt">
                        <p>Arrange a demo</p>
                        <p>We would be happy to arrange an online
                            presentation or “real world” demonstration
                            of our products and services.</p>
                        <div className="btn_head btn_respo">
                            <p><span><a href="##">Arrange a Demo</a></span></p>
                        </div>
                    </div>

                    <div className="demoimg">
                        <img src={unsplash} alt="" />
                    </div>
                </div>
            </div>




            <footer>
                <div className="footer">



                    <div className="footer_">
                        <div className="footer_link">
                            <div className="one_link">
                                <div className="home styles">
                                    <p>Home</p>
                                    <a href="##">What is CodeUp?</a>
                                    <a href="##">Selection</a>
                                    <a href="##">Register</a>
                                </div>
                                <div className="aboutUs styles">
                                    <p>About us</p>
                                    <a href="##">Why are we?</a>
                                    <a href="##">Mission & Vision</a>
                                    <a href="##">Team</a>
                                </div>
                            </div>
                            <div className="second_link">
                                <div className="partners styles">
                                    <p>Partners</p>
                                    <a href="##">Partners</a>
                                    <a href="##">Projes</a>
                                </div>
                                <div className="Contact styles">
                                    <p>Contact</p>
                                    <a href="##">Phone</a>
                                    <a href="##">Location</a>
                                </div>
                            </div>
                        </div>
                        <div className="inp">
                            <p>Subscribe to our Newsletter</p>
                            <form action="">
                                <input type="email" placeholder=" Enter your email" />
                                <button>Subscribe</button>
                            </form>
                        </div>

                    </div>

                    <div className="copyrightAndIcone">
                        <div className="copyright">
                            <p>&#169;Copyright codeup@2022</p>
                        </div>
                        <div className="icone_SM">
                            <a href="##"><i className="fa-brands fa-facebook"><BsFacebook /></i></a>
                            <a href="##"><i className="fa-brands fa-twitter"><FaTwitter /></i></a>
                            <a href="##"><i className="fa-brands fa-instagram"><AiOutlineInstagram /></i></a>
                            <a href="##"><i className="fa-brands fa-linkedin"><AiFillLinkedin /></i></a>
                        </div>
                    </div>




















                </div>
            </footer>


        </div>


    )
}

export default HomePage