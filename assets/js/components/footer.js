const $2 = (e) => { return document.querySelector(e); }

const footer_component = `
<div class="wrapper">
            <div class="footer-grid container">
                <div class="">
                    <h4>
                        <strong>Contact US</strong>
                    </h4>
                    <ul class="footer-list-link">
                        <li>
                            <a class="hyperlink" href="https://www.facebook.com/CvSUELITS">
                                <i class="ri-facebook-circle-fill"></i>
                                <span>CVSU Elite League of Information Technology Students </span>
                            </a>
                        </li>
                        <li>
                            <a class="hyperlink">
                                <i class="ri-mail-line"></i>
                                <span>elits.cvsu@gmail.com</span>
                            </a>
                        </li>

                        <li>
                        <a class="hyperlink">
                            <i class="ri-phone-fill"></i>
                            <span>+63 912 345 6789</span>
                        </a>
                    </li>
                </div>
                <div class="footer-list-link">
                    <h4>
                        <strong>Quick Links</strong>
                    </h4>
                    <li>
                        <i class="ri-file-list-line"></i>
                        <a href="https://myportal.cvsu.edu.ph">Student Portal</a>
                    </li>
                    <li>
                        <i class="ri-account-box-line"></i>
                        <a href="https://registrar.cvsu.edu.ph">List of Enrolled Students</a>
                    </li>
                </div>

                <div class="footer-list-link">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Credits</li>
                    <li>Copyright</li>
                </div>

            </div>
            <div class="copyright">
                <hr>
                    <small class="footer-copyright">© 2024 Elite League of Information Technology Students. All rights reserved. </small>
            </div>
    `

$2('.footer').innerHTML = footer_component;