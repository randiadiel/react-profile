import React from 'react';
import {Link} from "react-router-dom";
import ReactWOW from "react-wow";
import {AiOutlineArrowLeft} from "react-icons/all";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './BnccPage.css';

function BnccPage(props) {
    return (
        <>
            <div className={"bncc-page"}>
                <ReactWOW animation={"fadeIn"}>
                    <div className={"container"}>
                        <Link to={"/"}>
                            <AiOutlineArrowLeft className="navbar-icon text-link back-icon"/>
                        </Link>
                        <div>
                            <h1 className={"m-0 text-center"}>Chief Product Officer</h1>
                            <h5 className={"text-center"}>at Bina Nusantara Computer Club</h5>
                        </div>
                        <div className={"row pb-5"}>
                            <div className={"col-md-4 px-3"}>
                                <div className={"card-image-container px-4"}>
                                    <img className={"img-fluid card-image"}
                                         src={"https://www.bncc.net/assets/img/products/logo-Fave Solution.png"}
                                         alt={"Favesolution Logo"}/>
                                </div>
                                <h3 className={"text-center"}>Favesolution</h3>
                                <p>
                                    Favesolution is a professional software house that accept any website, mobile, or
                                    desktop
                                    apps development. Rapid technology development provides us a wide array of IT
                                    solution;
                                    we
                                    choose one best suited for each and every project we handle.
                                </p>
                                <br/>
                                <ul>
                                    <li>Income increased 68,67% from the previous year.</li>
                                    <li>
                                        Implement new technologies (Electron.js) so we do not need to maintain too many
                                        tech
                                        stack(in this case java swing). Because there are
                                        no permanent programmer here in our organizations. In order to keep accepting
                                        desktop apps project we must hands on the tech stack to our successor.
                                    </li>
                                    <li>Be the scrum master every project we made.</li>
                                </ul>
                            </div>
                            <div className={"col-md-4 px-3"}>
                                <div className={"card-image-container px-4"}>
                                    <img className={"img-fluid card-image"}
                                         src={"https://www.bncc.net/assets/img/products/logo-FILE MAGZ.png"}
                                         alt={"Filemagz Logo"}/>
                                </div>
                                <h3 className={"text-center"}>Filemagz</h3>
                                <p>
                                    FILE is an online media that discusses technology trends, the lives of young people,
                                    and
                                    also business trends such as startups that are developing in Indonesia and the
                                    world.
                                    FILE
                                    aspires to always publish various kinds of content that are interesting,
                                    informative,
                                    and
                                    useful for the community, especially for young people in Indonesia. <a
                                    href={"https://www.filemagz.com"} className={"text-link"}>Filemagz</a>
                                </p>
                                <br/>
                                <ul>
                                    <li>Income increased 65% from the previous year.</li>
                                    <li>Views increased 62,86% from the previous year.</li>
                                    <li>Has 17 article reached the first page in google for certain keyword in 1 year.
                                    </li>
                                    <li>Make monthly meeting system to plan the content.</li>
                                    <li>Fix the ads system on filemagz.com.</li>
                                </ul>
                            </div>
                            <div className={"col-md-4 px-3"}>
                                <div className={"card-image-container px-4"}>
                                    <img className={"img-fluid card-image"}
                                         src={"https://www.bncc.net/assets/img/products/logo-BNCC LnT.png"}
                                         alt={"Learning & Training Logo"}/>
                                </div>
                                <h3 className={"text-center"}>Learning & Training</h3>
                                <p>
                                    BNCC LnT provides members with various IT courses that relates with the industry.
                                    Members
                                    can then choose to learn one of the available courses. The end goal of LnT is to
                                    provide
                                    members with skill and knowledge that can be used in their professional life in the
                                    future.
                                </p>
                                <br/>
                                <ul>
                                    <li>Rapidly adapt from offline to online learning system in 1 month.</li>
                                    <li>All of our instructor volunteer is teaching until the end of the period.
                                        Increased
                                        50% from previous year.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"community-link"}>See BNCC Website <a href={"https://www.bncc.net"} className={"text-link"} target={"_blank"} rel={"noopener noreferrer"}>here</a>.</div>
                    </div>
                </ReactWOW>
            </div>
        </>
    );
}

export default BnccPage;
