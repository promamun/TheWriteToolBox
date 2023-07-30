import React  from 'react';
import {Link} from "react-router-dom";

function Style2 ({Title, SubTile}) {
    return (
        <div>
            <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner text-center">
                                <h2 className="title">{Title}</h2>
                                <ul className="page-list">
                                    <li className="rbt-breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li>
                                        <div className="icon-right"><i className="feather-chevron-right"/></div>
                                    </li>
                                    <li className="rbt-breadcrumb-item active">{SubTile}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Style2;