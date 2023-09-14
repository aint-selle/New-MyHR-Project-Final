import '../stylesheets/login.css';
import '../stylesheets/forgotpassword.css';
import '../stylesheets/aboutmodal.css';
import '../stylesheets/creditmodal.css';
import login_logo from '../images/login_logo.png';
import asticom_logo from '../images/asticom_logo.png';
import creditbulb from '../images/akar-icons_light-bulb.svg';
import linear_logo from '../images/solar_password-linear.svg';
import alldone_logo from '../images/ph_seal-check.svg';
import { useNavigate } from 'react-router-dom';
// import '../scripts/login_password_script.js';

export default function Login(){
    
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/Dashboard');
    };

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
                                {/* <i className="far fa-eye" id="togglePassword"></i> */}
                                <div className="remember-forgot-column">
                                    <div className="row remember-forgot-row">
                                        <div className="col remember-column">
                                            <input className="rememberme-form-check-input"  type="checkbox" id="rememberme-checkbox" value="" aria-label="Remember me"/>
                                            <label className="rememberme-label" htmlFor="rememberme-checkbox">Remember me</label>
                                        </div>
                                        <div className="col forgot-column">
                                            <button type="button" className="forgot-password-btn" data-bs-toggle="modal" data-bs-target="#forgotpasswordmodal" >Forgot password?</button>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="login-btn" onClick={handleButtonClick}>Login</button>
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
            <div className="modal fade" id="forgotpasswordmodal" tabindex="-1" aria-labelledby="forgotpasswordmodalheaderlabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" id="forgotpasswordmodaldialog">
                    <div className="modal-content" id="forgotpasswordmodalcontent">
                        <div className="modal-header" id="forgotpasswordmodalheader">
                            <img src={linear_logo} />
                            <h1 className="modal-title " id="forgotpasswordmodalheaderlabel">Forgot Password</h1>
                            <button type="button" className="btn-close" id="forgotpasswordmodalclosebtn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="forgotpasswordmodalbody">
                            <h3 className="please-confirm-label">Please confirm your Employee ID to proceed.</h3>
                            <h3 className="enter-empid-label">Enter your Employee ID</h3>
                            <input type="text" name="employeeid" autoFocus="" autoCapitalize="none" autoComplete="employeeid" required="" id="forgotpassword-employeeid" placeholder="Enter Employee ID"/>
                            <h3 className="enter-emailaddress-label">Enter your Email Address</h3>
                            <input type="text" name="username" autoFocus="" autoCapitalize="none" autoComplete="username" required="" id="forgotpassword-emailaddress" placeholder="Username"/>

                        </div>
                        <div class="modal-footer" id="forgotpasswordmodalfooter">
                            <button type="button" class="btn btn-primary" id="forgotpasswordconfirmdetailsbtn" data-bs-toggle="modal" data-bs-target="#confirmationsucess">Confirm Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="confirmationsucess" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="confirmationsucessLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" id="confirmationsucessmodaldialog">
                    <div class="modal-content" id="confirmationsucessmodalcontent">
                        <div class="modal-header" id="confirmationsucessmodalheader">
                            <img className='alldone-logo' src={alldone_logo}/>
                            <h1 class="modal-title" id="confirmationsucessLabel">All Done!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="confirmationsucesscloseabove"></button>
                        </div>
                        <div class="modal-body" id="confirmationsucessbody">
                            <p className="confirmationparagraph">Temporary password has been sent to your email address.</p>
                        </div>
                        <div class="modal-footer" id="confirmationsucessfooter">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="confirmationsucessclosebottom">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="confirmationerror" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="confirmationerrorLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" id="confirmationerrormodaldialog">
                    <div class="modal-content" id="confirmationerrormodalcontent">
                        <div class="modal-header" id="confirmationerrormodalheader">
                            <h1 class="modal-title" id="confirmationerrorLabel">Error</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="confirmationerrorcloseabove"></button>
                        </div>
                        <div class="modal-body" id="confirmationerrorbody">
                            <p className="confirmationerrorparagraph1">An error occured while saving the data.</p>
                            <p className="confirmationerrorparagraph2">Please try again later.</p>
                        </div>
                        <div class="modal-footer" id="confirmationerrorfooter">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="confirmationerrorclosebottom">Okay</button>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <div class="col-6" id="creditsrowrightcol">Product Owner</div>
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
