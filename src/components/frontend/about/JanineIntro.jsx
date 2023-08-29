import React from 'react'
import {Link} from "react-router-dom";

export default function JanineIntro() {
  const BgImg = {
    backgroundImage:`url(/assets/image/intro_bg_image.png)`
  }
  return (
    <>
      <div className="rbt-banner-5 height-650 bg_image" style={BgImg}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner text-start">
                <h2 className="title"><span className="text-decoration-underline">Hey There!</span> <span className='theme-gradient'> I'm Janine.</span></h2>
                <p className="description">
                  An entrepreneur, writer, author, and unwavering optimist. The glass is refillable, not half full or half empty.
                  My life’s purpose is to help you Explode Your Expression by improving your communication and clarity and up-leveling your expert status through real story-based, written content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-center mb--40">
                <p>I’m a bit eclectic with a fiery, passionate personality. Kinda a lot of rock ‘n roll mixed with some
                  gospel. I’m a bit of a gypsy soul that always feels outta place, but stands fiercely in who I am.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center row--30">
            <div className="col-lg-6">
              <div className="rbt-testimonial-content tab-content" >
                <div className="tab-pane fade active show"
                     aria-labelledby="testimonial-tab1-tab">
                  <div className="inner">
                    <div className="rating mb--30">
                      <a href="#"><i className="fa fa-star"/></a>
                      <a href="#"><i className="fa fa-star"/></a>
                      <a href="#"><i className="fa fa-star"/></a>
                      <a href="#"><i className="fa fa-star"/></a>
                      <a href="#"><i className="fa fa-star"/></a>
                    </div>
                    <p>Whenever I’m asked what I am most passionate about
                      I simply say, <span className='theme-gradient'>“Words!”</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <img className="w-100 radius-10" src="/assets/image/word.png" alt="Words"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-testimonial-area bg-color-lighter rbt-section-gap overflow-hidden">
        <div className="container">
          <div className="row align-items-center row--30">
            <div className="col-lg-4">
              <div className="content">
                <img className="w-100 radius-10" src="/assets/image/childhood.png" alt="childhood"/>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="rbt-testimonial-content tab-content" >
                <div className="tab-pane fade active show"
                     aria-labelledby="testimonial-tab1-tab">
                  <div >
                    <p className='description'>Due to my childhood experiences, I developed a keen sense of words and how words connect or disconnect people.
                      As a child I was bullied, talked poorly of, and often the source of ridicule. I often stood alone and aloof,
                      watching how people interacted with each other. Many times that interaction was about obedience, discipline,
                      and control – in both kids and adults alike.
                    </p>
                    <p className='description'>
                      What I saw was communication that was about breaking down instead of building up.
                      The idea of nurturing one another was a topic or way of being that hadn’t even been thought of yet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="rbt-testimonial-content tab-content" >
                <div className="tab-pane fade active show"
                     aria-labelledby="testimonial-tab1-tab">
                  <div >
                    <p className='description'>As I got older and studied more and more, I began to learn that words play an extremely
                      important role in our lives. The words we choose, either in anger or love,
                      truly develop a person’s beliefs and personality.
                      Words are energy and power and can evoke love or hate,
                      healing or hurt, safety or harm, humiliation or humility.
                    </p>
                    <p className='description'>
                      With each and every word we choose, we humans either drive connectivity or construct dissension.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content">
                <img className="w-100 radius-10" src="/assets/image/girls_wow.png" alt="childhood"/>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content">
                <img className="w-100 radius-10" src="/assets/image/girls_secret.png" alt="childhood"/>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="rbt-testimonial-content tab-content" >
                <div className="tab-pane fade active show"
                     aria-labelledby="testimonial-tab1-tab">
                  <div >
                    <p className='description'>
                      What I’ve come to understand is that humans were not created to be on opposing sides.
                      We were created to thrive off one another, cultivate relationships, and live abundantly together.
                      We were created to flourish with one another, be supportive, and help each other.
                      We were created to be different, and diverse – that alone is amazing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
        <div className="container">
          <div className="row align-items-center row--30">
            <div className="col-lg-12">
              <div className="rbt-testimonial-content tab-content" >
                <div className="tab-pane fade active show"
                     aria-labelledby="testimonial-tab1-tab">
                  <div className="inner">
                    <div className="rating mb--30">
                      <Link to="#"><i className="fa fa-star"/></Link>
                      <Link to="#"><i className="fa fa-star"/></Link>
                      <Link to="#"><i className="fa fa-star"/></Link>
                      <Link to="#"><i className="fa fa-star"/></Link>
                      <Link to="#"><i className="fa fa-star"/></Link>
                    </div>
                    <p>We, as a society of people that are growing further and further disinterested in one another,
                      need to learn how to develop our communication skills to foster connection, belonging, and community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}