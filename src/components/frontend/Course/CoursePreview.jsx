import React, { useEffect, useState } from "react";
import axios from "../../../helper/axios";
import message from "../../../helper/message";
import { Link, useLocation, useNavigate } from "react-router-dom";
import config from "../../../helper/config";
import ReactPlayer from "react-player";
import qs from "query-string";
import "./course.css";

export default function CoursePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = qs.parse(location.search);
  const id = queryParams["id"];
  let sec_pos = queryParams["sec_pos"];
  let vdo_pos = queryParams["vdo_pos"];

  const [loading, setLoading] = useState(false);
  const [, setCourse] = useState({});
  const [allSection, setAllSections] = useState([]);
  const [isCollapsed, setCollapsed] = useState([]);

  const [url, setUrl] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`/course/${id}`)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          let { course, sections } = res.data;
          setCourse(course);
          setAllSections(sections);
          let arr = new Array(sections.length).fill(false);

          if (sections.length > 0) {
            arr[sec_pos] = true;
          }
          setCollapsed([...arr]);

          let { videos } = sections[sec_pos];

          getReadingDocumentUrl(videos[vdo_pos]?._id);
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("Something Went Wrong!!!");
      });
  }, [id]);

  const getReadingDocumentUrl = (id) => {
    setLoading(true);

    axios
      .get(`/get-view-video-url/${id}`, config)
      .then((res) => {
        if (res.data.success) {
          setUrl(res.data.url);
        } else {
          message.error(res.data.message);
          setUrl(null);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("Something Went Wrong!!!");
      });
  };

  const playNext = () => {
    const allVideosLen = allSection[sec_pos]?.videos?.length;
    const totalSectionLen = allSection?.length;

    // CHECK NEXT VIDEO AVAILABLE OR NOT

    if (allVideosLen - 1 == vdo_pos) {
      // NOT AVAILABLE SO CHANGE SECTION

      // CHECK NEXT SECTION AVAILABLE OR NOT

      if (totalSectionLen - 1 == sec_pos) {
        // NOT AVAILABLE
        sec_pos = 0;
      } else {
        sec_pos = Number(sec_pos) + 1;
      }
      vdo_pos = 0;
    } else {
      vdo_pos = Number(vdo_pos) + 1;
    }

    navigate({
      pathname: "/course-preview",
      search: `?id=${id}&sec_pos=${sec_pos}&vdo_pos=${vdo_pos}`,
    });

    let { videos } = allSection[sec_pos];

    getReadingDocumentUrl(videos[vdo_pos]?._id);

    isCollapsed[sec_pos] = true;

    setCollapsed([...isCollapsed]);
  };

  const playPrevious = () => {
    const allVideosLen = allSection[sec_pos]?.videos?.length;
    const totalSectionLen = allSection?.length;

    // CHECK PREVIOUS VIDEO AVAILABLE OR NOT

    if (vdo_pos === "0") {
      // NOT AVAILABLE SO CHANGE SECTION

      // CHECK PREVIOUS SECTION AVAILABLE OR NOT

      if (sec_pos === "0") {
        // NOT AVAILABLE
        sec_pos = totalSectionLen - 1;
      } else {
        sec_pos = Number(sec_pos) - 1;
      }
      vdo_pos = allVideosLen - 1;
    } else {
      vdo_pos = Number(vdo_pos) - 1;
    }

    navigate({
      pathname: "/course-preview",
      search: `?id=${id}&sec_pos=${sec_pos}&vdo_pos=${vdo_pos}`,
    });

    let { videos } = allSection[sec_pos];

    getReadingDocumentUrl(videos[vdo_pos]?._id);

    isCollapsed[sec_pos] = true;

    setCollapsed([...isCollapsed]);
  };

  return (
    <div className="rbt-lesson-area bg-color-white">
      <div className="rbt-lesson-content-wrapper">
        <div className="rbt-lesson-leftsidebar">
          <div className="rbt-course-feature-inner rbt-search-activation">
            <div className="section-title">
              <h4 className="rbt-title-style-3">Course Content</h4>
            </div>

            {/* <div className="lesson-search-wrapper">
              <form action="#" className="rbt-search-style-1">
                <input
                  className="rbt-search-active"
                  type="text"
                  placeholder="Search Lesson"
                />
                <button className="search-btn disabled">
                  <i className="feather-search"></i>
                </button>
              </form>
            </div>

            <hr className="mt--10" /> */}

            <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion">
              <div className="accordion" id="accordionExampleb2">
                {allSection.map((section, key) => {
                  return (
                    <div key={key} className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id={`heading_${key}`}
                      >
                        <button
                          className={`accordion-button ${
                            isCollapsed[key] ? "" : "collapsed"
                          } `}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse_${key}`}
                          aria-expanded="true"
                          aria-controls={`collapse_${key}`}
                          onClick={() => {
                            let arr = [...isCollapsed];
                            arr[key] = !arr[key];
                            setCollapsed([...arr]);
                          }}
                        >
                          {section.sec_title}
                          <span className="rbt-badge-5 ml--10">1/2</span>
                        </button>
                      </h2>

                      <div
                        id={`collapse_${key}`}
                        className={`accordion-collapse collapse ${
                          isCollapsed[key] ? "show" : ""
                        }`}
                        aria-labelledby={`heading_${key}`}
                      >
                        <div className="accordion-body card-body">
                          <ul className="rbt-course-main-content liststyle">
                            {section.videos.map((content, c_key) => {
                              return (
                                <li key={c_key}>
                                  <Link
                                    className={`${
                                      key == sec_pos && c_key == vdo_pos
                                        ? "playing"
                                        : ""
                                    }   `}
                                    to={`/course-preview?id=${id}&sec_pos=${key}&vdo_pos=${c_key}`}
                                    onClick={() => {
                                      getReadingDocumentUrl(content._id);
                                    }}
                                  >
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />
                                      <span className="text">
                                        {content.asset_title || "Demo Title"}
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="min-lable">
                                        {content.duration}
                                      </span>
                                      <span className="rbt-check unread">
                                        <i className="feather-circle "></i>
                                      </span>

                                      {/* TODO:READING COMPLETE */}

                                      {/* <span className="rbt-check">
                                <i className="feather-check"></i>
                              </span> */}
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
          <div className="lesson-top-bar">
            <div className="lesson-top-left">
              <div className="rbt-lesson-toggle">
                <button
                  className="lesson-toggle-active btn-round-white-opacity"
                  title="Toggle Sidebar"
                >
                  <i className="feather-arrow-left" />
                </button>
              </div>
              <h5>The Complete Histudy 2023: From Zero to Expert!</h5>
            </div>
            <div className="lesson-top-right">
              <div className="rbt-btn-close">
                <a
                  href="course-details.html"
                  title="Go Back to Course"
                  className="rbt-round-btn"
                >
                  <i className="feather-x" />
                </a>
              </div>
            </div>
          </div>
          <div className="inner">
            <div className="plyr__video-embed rbtplayer">
              <ReactPlayer
                url={url}
                width="640"
                height="360"
                controls
                onEnded={playNext}
                playing={true}
              />
            </div>
            <div className="content">
              <div className="section-title">
                <h4>About Lesson</h4>
                <p>
                  Let us analyze the greatest hits of the past and learn what
                  makes these tracks so special.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-color-extra2 ptb--15 overflow-hidden">
            <div className="rbt-button-group">
              <button
                className="rbt-btn icon-hover icon-hover-left btn-md bg-primary-opacity"
                onClick={playPrevious}
              >
                <span className="btn-icon">
                  <i className="feather-arrow-left" />
                </span>
                Previous
              </button>

              <button className="rbt-btn icon-hover btn-md" onClick={playNext}>
                Next
                <span className="btn-icon">
                  <i className="feather-arrow-right" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
