import React, {Component} from 'react';

class JaninFbStory extends Component {
    render() {
        return (
            <div>
                <div className="rbt-about-area bg-color-white rbt-section-gap" id="about">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <div className="inner">
                                    <div className="section-title text-start">
                                        <span className="subtitle bg-primary-opacity">Read Janine's Story</span>
                                        <h2 className="title">Join our collaborative?.</h2>
                                        <p className="description mt--20">
                                            Join our collaborative of exploding expressionists making connections all
                                            over the world. Our Facebook group is for entrepreneurs and authors who want
                                            to “Explode Their Expressions.” Get access to hours of FREE training,
                                            motivation, and inspiration to explode your Confidence, Clarity, and
                                            Publicity through
                                        </p>
                                        <div className="read-more-btn mt--40">
                                            <a className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
                                               href="/janine-history">
                                                <span data-text="Janine's Story">Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 rbt-cat-box-1 order-lg-2">
                                <div className="content">
                                    <a href="#" target="_blank">
                                        <img src="assets/images/about/fbgroup.png"
                                             alt="About Images"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JaninFbStory;