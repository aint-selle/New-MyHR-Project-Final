import '../stylesheets/login.css';
import '../stylesheets/forgotpassword.css';
import '../stylesheets/aboutmodal.css';
import '../stylesheets/creditmodal.css';
import login_logo from '../images/login_logo.png';
import asticom_logo from '../images/asticom_logo.png';
import creditbulb from '../images/akar-icons_light-bulb.svg';
import aboutlogo from '../images/Document  Align Left 14.svg';
import linear_logo from '../images/solar_password-linear.svg';
// import '../scripts/login_password_script.js';

export default function Login(){
    return(
        <div className='wrapper'>
            <div className='login-first-row'>
                <div className='login-column'>
                    <div className="login-card">
                        <div className="login-card-body">
                            <div className='login-logo-div'>
                                <img className='login-logo' src={login_logo}/>
                            </div>
                            <form method="post" className="login-form">
                                <input type="text" name="username" autoFocus="" autoCapitalize="none" autoComplete="username" required="" id="login-username" placeholder="Username"/>
                                <input type="password" name="password" autoComplete="current-password" required="" id="login-password" placeholder='Password'/>
                                <i className="far fa-eye" id="togglePassword"></i>
                                <div className="remember-forgot-column">
                                    <div className="row remember-forgot-row">
                                        <div className="col remember-column">
                                            <input className="rememberme-form-check-input"  type="checkbox" id="rememberme-checkbox" value="" aria-label="Remember me"/>
                                            <label className="rememberme-label" htmlFor="rememberme-checkbox">Remember me</label>
                                        </div>
                                        <div className="col forgot-column">
                                            <button type="button" className="forgot-password-btn">Forgot password?</button>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="login-btn">Login</button>
                            </form>
                        </div>
                        <div className='powered-by-column'>
                            <label className='powered-by-label'>Powered by:</label>
                        </div>
                        <div className='asticom-logo-column'>
                            <img id='asticom-logo' src={asticom_logo} alt='asticom logo'/>
                        </div>
                        <div className='about-credit-column'>
                            <div className="about-credits-btn-group" role="group" aria-label="...">
                            <button type="button" className="btn btn-primary" id="aboutbtn" data-bs-toggle="modal" data-bs-target="#aboutmodal">About</button>
                                <label className="about-credits-lineseparator">|</label>
                                <button type="button" className="btn btn-primary" id="aboutbtn" data-bs-toggle="modal" data-bs-target="#creditmodal">Credit</button>
                            </div>
                        </div>
                        <div className='copyright-column'>
                            <label className='copyright-label'>Copyright © 2023 myHR. All Rights Reserved</label>
                        </div>
                    </div>
                </div>
            </div>
{/* -----------------------------------------  modals section ----------------------------------------- */}
            <div className="modal fade" id="aboutmodal" tabindex="-1" aria-labelledby="aboutmodalheaderlabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" id="aboutmodaldialog">
                    <div className="modal-content" id="aboutmodalcontent">
                        <div className="modal-header" id="aboutmodalheader">
                            <img src={creditbulb} />
                            <h1 className="modal-title " id="aboutmodalheaderlabel">About</h1>
                            <button type="button" className="btn-close" id="aboutmodalclosebtn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="aboutmodalbody">
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="creditmodal" tabindex="-1" aria-labelledby="creditmodalheaderlabel" aria-hidden="true">
                <div className="modal-dialog" id="credittmodaldialog">
                    <div className="modal-content" id="creditmodalcontent">
                        <div className="modal-header" id="creditmodalheader">
                            <img src={creditbulb} />
                            <h1 className="modal-title" id="creditmodalheaderlabel">Credits</h1>
                            <button type="button" className="btn-close" id="creditmodalclosebtn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="creditmodalbody">
                            <div className="creditdiv1">
                                <h1 className="modal-title" id="creditpositionlabel">Project Management</h1>
                                <div class="row justify-content-between" id="creditrow">
                                    <div class="col-6" id="creditsrowleftcol">Jeric Dimayayac</div>
                                    <div class="col-6" id="creditsrowrightcol">Project Lead</div>
                                </div>
                                <div class="row justify-content-between" id="creditrow">
                                    <div class="col-6" id="creditsrowleftcol">Rodil Ramos</div>
                                    <div class="col-6" id="creditsrowrightcol">Project Manager</div>
                                </div>
                                <div class="row justify-content-between" id="creditrow">
                                    <div class="col-6" id="creditsrowleftcol">Melaine Aure</div>
                                    <div class="col-6" id="creditsrowrightcol">Business Analyst</div>
                                </div>
                            </div>
                            <div className="creditdiv2">
                                <h1 className="modal-title" id="creditpositionlabel">UI/UX Designers</h1>
                                <div class="row justify-content-between" id="creditrow">
                                    <div class="col-6" id="creditsrowleftcol">Merry Joyce Bautista</div>
                                    <div class="col-6" id="creditsrowrightcol">UI/UX Lead</div>
                                </div>
                                <div class="row justify-content-between" id="creditrow">
                                    <div class="col-6" id="creditsrowleftcol">Mark Jude Rosel</div>
                                    <div class="col-6" id="creditsrowrightcol">Senior UI UX Designe</div>
                                </div>
                            </div>
                            <div className="creditdiv3">
                                <h1 className="modal-title" id="creditpositionlabel">Developers</h1>
                                <div class="row justify-content-between" id="creditrow">
                                    <div class="col-6" id="creditsrowleftcol">Mario Castro</div>
                                    <div class="col-6" id="creditsrowrightcol">Tech Lead</div>
                                </div>
                                <div class="row justify-content-between" id="creditrow">
                                    <div class="col-6" id="creditsrowleftcol">Carlo Caranyagan</div>
                                    <div class="col-6" id="creditsrowrightcol">Junior Engineer</div>
                                </div>
                                <div class="row justify-content-between" id="creditrow">
                                    <div class="col-6" id="creditsrowleftcol">Roselle Suarez</div>
                                    <div class="col-6" id="creditsrowrightcol">Junior Engineer</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
{/* -----------------------------------------  End of modals section ----------------------------------------- */}
                
            
        </div>
    )
}
