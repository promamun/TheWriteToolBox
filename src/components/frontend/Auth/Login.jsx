import React from "react";
function Login (){
    return(
        <>
            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row gy-5 row--30">
                        <div className="col-lg-3"/>
                        <div className="col-lg-6">
                            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                <h3 className="title">Login</h3>
                                <form className="max-width-auto" method="POST" action="">
                                    <div className="form-group">
                                        <input id="email" type="email"
                                               name="email" required/>
                                            <label>Email *</label>
                                    </div>
                                    <div className="form-group">
                                        <input id="password" type="password"
                                                name="password"
                                               required/>
                                            <label>Password *</label>
                                            <span className="focus-border"/>
                                    </div>

                                    <div className="row mb--30">
                                        <div className="col-lg-6">
                                            <div className="rbt-checkbox">
                                                <input type="checkbox" name="remember" id="remember"
                                                    />
                                                    <label htmlFor="remember">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="rbt-lost-password text-end">
                                                <a className="rbt-btn-link" href="">
                                                    Forgot Your Password
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-submit-group">
                                        <button type="submit"
                                                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Log In</span>
                                    <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                    <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                    </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login