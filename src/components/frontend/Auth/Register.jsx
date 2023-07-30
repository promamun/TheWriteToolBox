import React from "react";
function Register () {
    return(
        <>
            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row gy-5 row--30">
                        <div className="col-lg-3"/>
                        <div className="col-lg-6">
                            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                <h3 className="title">Register</h3>
                                <form className="max-width-auto" method="POST" action="">
                                    <div className="form-group">
                                        <input name="user_name"
                                               type="text" required/>
                                            <label>Username *</label>
                                            <span className="focus-border"/>

                                    </div>
                                    <div className="form-group">
                                        <input name="email"
                                               type="email"
                                               required
                                        />
                                        <label>Email address *</label>
                                        <span className="focus-border"/>
                                    </div>
                                    <div className="form-group">
                                        <input id="password" type="password"
                                               className="password"
                                               required />

                                            <label>Password *</label>
                                            <span className="focus-border"/>
                                    </div>

                                    <div className="form-group">
                                        <input id="password-confirm" type="password" name="password_confirmation"
                                               required/>
                                            <label>Confirm Password *</label>
                                            <span className="focus-border"/>
                                    </div>

                                    <div className="form-submit-group">
                                        <button type="submit"
                                                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Register</span>
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
export default Register