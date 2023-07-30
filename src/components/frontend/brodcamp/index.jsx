import React from "react";

function Index({ bgImg, Title, SubTitle }) {
  return (
    <div>
      <div className="breadcrumb-image-container breadcrumb-style-max-width">
        <div className="breadcrumb-image-wrapper">
          <img src={bgImg} alt="Education Images" />
        </div>
        <div className="breadcrumb-content-top text-center">
          <h1 className="title">{Title}</h1>
          <p className="mb--20">{SubTitle}</p>
          <ul className="page-list">
            <li className="rbt-breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li>
              <div className="icon-right">
                <i className="feather-chevron-right" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
