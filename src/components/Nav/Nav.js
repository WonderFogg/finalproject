import React from "react";
import "./Nav.css";


const Nav = () => (
        <div>
                <nav className="Nav-header">
                 <h1 className="Nav-title"></h1>
                             <div className="row">
                                <div className="col-md-4"><p><a href="https://www.wonderfogg.com/sistory/sistorysanfran./">SISTORY</a></p></div>
                                <div className="col-md-4"><p><a href="https://www.wonderfogg.com./">ORLANDO</a></p></div>
                                <div className="col-md-4"><p><a href="https://www.wonderfogg.com/events-2/">EVENTS</a></p></div>

                             </div>
                        <div className="row rowpadding">
                                <div className="col-md-4"id="sistorycov"></div>
                                <div className="col-md-4"id="blacklogo"></div>
                                <div className="col-md-4"id="photoal"></div>
                        </div>
                </nav>
  
        </div>

                                


 	);







export default Nav;