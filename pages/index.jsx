import { Image } from 'next/image';
import Link from 'next/link';
import Script from 'next/script'



export default function Home() {
    return (
        <div>
            {/* <!-- Page-wrapper-Start --> */}
            <div className="page_wrapper">

                {/* <!-- Preloader --> */}
                {/* <div id="preloader">
                    <div className="circle-border">
                        <div className="circle-core"></div>
                    </div>
                </div> */}


                {/* <!-- Top Banner Stat--> */}
                <div className="top_home_wraper">

                    {/* <!-- Header Start --> */}
                    <header className="fixed">
                        {/* <!-- container start --> */}
                        <div className="container">
                            {/* <!-- navigation bar --> */}
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                    <img src="/bit1.png" alt="image" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                        <div className="toggle-wrap">
                                            <span className="toggle-bar"></span>
                                        </div>
                                    </span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#protocol">Protocol</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#hiw">How it works</a>
                                        </li>
                                        {/* <!-- secondery menu start --> */}
                                        <li className="nav-item">
                                            <a className="nav-link" href="#team">Team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://docs.google.com/document/d/11qa_KT4dhbrIQHY4ma8zgsYo-t-WwKdQV-Sf-RzHf54/edit?usp=sharing" target="_blank">One-pager</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://cryptosmartnow.io/contact">Contact</a>
                                        </li>

                                        <li class="nav-item">
                                            <Link href="/authenticate" className='nav-link dark_btn' />
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/* <!-- navigation end --> */}
                        </div>
                        {/* <!-- container end --> */}
                    </header>

                    {/* <!-- Banner-Section-Start --> */}
                    <section className="banner_section">
                        <div className="container">
                            <div className="banner_text">
                                <div className="ban_inner_text" data-aos="fade-up" data-aos-duration="1500">
                                    <span>Secured, Easier and Faster</span>
                                    <h1>The savings Protocol of #web3 Finance</h1>
                                    <p>Bitsave Protocol helps you save and earn in Crypto without losing your savings to Crypto Market volatility.
                                    </p>
                                </div>
                                <div className="row container justify-content-center d-flex align-self-center my-2 text-center">
                                    <div className="btn_group col-lg-3 mb-3 text-center">
                                        <a href="https://forms.gle/TgQm8DfRnsiPmpPt6" className="btn btn_main" data-aos="fade-right" data-aos-duration="1500">Join our waitlist <i className="fas fa-scroll"></i></a>
                                    </div>

                                    <div className="btn_group col-lg-3 mb-3 text-center">
                                        <a href="https://youtube.com/playlist?list=PLBVK_AKYV8sPvpV_bihIaAA0b2tsAHU5q" target="_blank" className="btn btn_main" data-aos="fade-right" data-aos-duration="1500">Watch Videos<i className="fas fa-play-circle"></i></a>
                                    </div>
                                </div>

                            </div>
                            <div className="banner_images" data-aos="fade-up" data-aos-duration="1500">
                                <img src="/banner.png" alt="image" className="img-fluid" />
                                <div className="sub_images">
                                    <img className="moving_animation img-fluid" src="/banner1.png" alt="image"  style={{ height: '150px' }} />
                                    <img className="moving_animation img-fluid" src="/banner2.png" alt="image"  style={{ height: '150px' }} />
                                    <img className="moving_animation img-fluid" src="/banner3.png" alt="image"  style={{ height: '150px' }} />
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
                {/* <!-- Top Banner End --> */}

                <section id="protocol">
                    <section className="row_am communication_section trusted_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="communication_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                                        <div className="section_title">
                                            <h2>Users create a savings plan and deposit.</h2>
                                            <p className="text-justify">Bitsave's savings plan creates a child contract under the parent contract, securing deposits to the user's wallet. Hackers cannot access funds unless they have access to the wallet, unlike DeFi pools.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="communication_image" data-aos="fade-in" data-aos-duration="1000">
                                        <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation" src="/banner2.png" alt="image" />
                                        <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation" src="/add.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="row_am communication_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="communication_image" data-aos="fade-in" data-aos-duration="1000">
                                        <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation" src="/int.png" alt="image" />
                                        <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation" src="/banner3.png" alt="image" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="communication_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                                        <div className="section_title">
                                            <h2>Users' Interest</h2>
                                            <p className="text-justify">Bitsave calculates interest using a formula that combines variables and constants, including its own rate formula. Additionally, the protocol has a buy-back mechanism for its native tokens, ensuring their stability and liquidity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="row_am communication_section">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="communication_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                                        <div className="section_title">
                                            <h2>Users' Savings Plans and Fees</h2>
                                            <p className="text-justify">Users are charged a 1-time savings fee on savings plan creation (child contract), every fee is split in a 50:50 ratio, where 1 part goes to a buy-back wallet to buy back the protocol native tokens from any AMM or Dex in the ecosystem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="communication_image" data-aos="fade-in" data-aos-duration="1000">
                                        <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation" src="/savings.png" alt="image" />
                                        <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation" src="/create.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>






                <section className="row_am advance_feature_section" id="hiw">
                    {/* <!-- container start --> */}
                    <div className="container">
                        <div className="advance_feature_inner" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">

                            {/* <!-- Section Title --> */}
                            <div className="section_title" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
                                <h2>How It Works</h2>
                                <p>Bitsave isn't just another product, it's a new value chain, The web 3 space is used to DeFi, and now we're introducing them to SaveFi.</p>
                            </div>
                            {/* <!-- row start --> */}
                            <div className="row">
                                <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="feature_block">
                                        <div className="icon">
                                            <img src="/check.svg" alt="image" />
                                        </div>
                                        <div className="text_info">
                                            <h3>Users typically save in a Fiat-Backed stable coin (We don’t want a Terra Situation😕)</h3>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="feature_block">
                                        <div className="icon">
                                            <img src="/check.svg" alt="image" />
                                        </div>
                                        <div className="text_info">
                                            <h3>Users earn interest in a volatile token, typically the native token of the Bitsave Protocol.</h3>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="feature_block">
                                        <div className="icon">
                                            <img src="/check.svg" alt="image" />
                                        </div>
                                        <div className="text_info">
                                            <h3>Users can create a savings plan and make unlimited deposits.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="feature_block">
                                        <div className="icon">
                                            <img src="/check.svg" alt="image" />
                                        </div>
                                        <div className="text_info">
                                            <h3>Users pay a $1 fee per savings plan they create.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- row end --> */}
                        </div>
                    </div>
                    {/* <!-- container end --> */}
                </section>

                <section className="row_am our_team_section" id="team">
                    <div className="container">
                        <div className="section_title" data-aos="fade-up" data-aos-duration="1500">
                            <h2>Bitsave Team</h2>
                        </div>
                        <div className="team_block">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="team_inner">
                                        <div className="img">
                                            <img src="/karla.jpeg" alt="image" />
                                        </div>
                                        <div className="text">
                                            <h3>Karla Obakpolor</h3>
                                            <span>CEO </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="team_inner">
                                        <div className="img">
                                            <img src="/primidac.jpeg" alt="image" />
                                        </div>
                                        <div className="text">
                                            <h3>Primidac</h3>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="team_inner">
                                        <div className="img">
                                            <img src="/xpan.jpeg" alt="image" />
                                        </div>
                                        <div className="text">
                                            <h3>Xpan Victor</h3>
                                            <span>Lead Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="team_inner">
                                        <div className="img">
                                            <img src="/great.jpeg" alt="image" />
                                        </div>
                                        <div className="text">
                                            <h3>Great Adams</h3>
                                            <span>Web3 Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="team_inner">
                                        <div className="img">
                                            <img src="/royale.jpeg" alt="image" />
                                        </div>
                                        <div className="text">
                                            <h3>Onyeka Ekwemozor</h3>
                                            <span>Marketing Lead</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="team_inner">
                                        <div className="img">
                                            <img src="/abidemi.png" alt="image" />
                                        </div>
                                        <div className="text">
                                            <h3>Abidemi Ademola</h3>
                                            <span>Head of Finance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="need_section" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100" id="whitepaper">
                    <div className="container">
                        <div className="need_block">
                            <div className="need_text">
                                <div className="section_title">
                                    <h2 className="text-capitalize">Bitsave White Paper One Pager</h2>
                                </div>
                            </div>
                            <div className="need_action">
                                <a href="https://docs.google.com/document/d/11qa_KT4dhbrIQHY4ma8zgsYo-t-WwKdQV-Sf-RzHf54/edit?usp=sharing" className="btn">Read</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Footer-Section start --> */}
                <footer>
                    <div className="top_footer" id="contact">
                        <div className="footer_inner">
                            {/* <!-- container start --> */}
                            <div className="container">
                                {/* <!-- row start --> */}
                                <div className="row">
                                    {/* <!-- footer link 1 --> */}
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="abt_side">
                                            <div className="logo"> <img src="/bit1.png" alt="image" /></div>
                                            <p>Bitsave Protocol helps you save in Crypto without losing your savings to Crypto Market volatility.</p>
                                        </div>
                                    </div>

                                    {/* <!-- footer link 2 --> */}
                                    <div className="col-lg-2 col-md-6 col-12">
                                        <div className="links">
                                            <h3>Useful Links</h3>
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="#team">Team</a></li>
                                                <li><a href="https://cryptosmartnow.io/blog">Blog</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- footer link 3 --> */}
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="links">
                                            <h3>Help & Suport</h3>
                                            <ul>
                                                <li><a href="https://cryptosmartnow.io/contact">Contact us</a></li>
                                                <li><a href="#">FAQs</a></li>
                                                <li><a href="#hiw">How it works</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- footer link 4 --> */}

                                </div>
                                {/* <!-- row end --> */}
                            </div>
                            {/* <!-- container end --> */}
                        </div>
                    </div>

                    {/* <!-- last footer --> */}
                    <div className="bottom_footer">
                        {/* <!-- container start --> */}
                        <div className="container">
                            {/* <!-- row start --> */}
                            <div className="row">
                                <div className="col-md-4">
                                    <p>© Copyrights 2023. All rights reserved.</p>
                                </div>
                                <div className="col-md-4">
                                    <ul className="social_media">
                                        <li><a href="https://youtube.com/channel/UC1cIpggpet2ut2KYN6_mV-Q"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="https://twitter.com/cryptosmartnow"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="https://instagram.com/cryptosmartnow_"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/cryptosmartnow"><i className="fab fa-linkedin"></i></a></li>

                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <p className="developer_text">Powered by <a href="https://cryptosmartnow.io" target="blank">CryptoSmart</a></p>
                                </div>
                            </div>
                            {/* <!-- row end --> */}
                        </div>
                        {/* <!-- container end --> */}
                    </div>

                    {/* <!-- go top button --> */}
                    <div className="go_top" id="Gotop">
                        <span><i className="fas fa-arrow-up"></i></span>
                    </div>
                </footer>
                {/* <!-- Footer-Section end --> */}

            </div>
            {/* <!-- Page-wrapper-End --> */}
            <Script src="/js/jquery.min.js" />
            <Script src="/js/bootstrap.min.js" />
            <Script src="/js/main.js" />

        </div >
        
    )
}
