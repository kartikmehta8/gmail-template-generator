import React from "react";
import noman from "./noman.jpg";
import arrow from "./arrow-down.svg";
import print from "./print.svg";
import unfold from "./unfold.svg";
import wind from "./window.svg";
import star from "./star.svg";
import more from "./more.svg";
import reply from "./reply.svg";
import forward from "./forward.svg";

const Gmails = ({ gmails, deleteGmail }) => {
    const gmailList = gmails.length ? (
        gmails.map((gmail) => {
            return (
                <div>
                    <div
                        className="container border border-dark p-5 mt-5"
                        key={gmail.id}
                    >
                        <span>
                            <div className="row">
                                <div className="col-9">
                                    <span className="fs-4 text-start ms-5 ps-5">
                                        &nbsp; {gmail.subject}
                                    </span>{" "}
                                    &nbsp;
                                    <span class="badge bg-secondary text-start">
                                        {" "}
                                        Inbox{" "}
                                    </span>
                                </div>
                                <div className="col-3">
                                    <p className="ms-1 ps-2 p-3 ">
                                        <div className="text-secondary text-end ms-5 ps-5">
                                            <img src={unfold} alt="#"></img>{" "}
                                            &nbsp;
                                            <img src={print} alt="#"></img>{" "}
                                            &nbsp;
                                            <img src={wind} alt="#"></img>
                                        </div>
                                    </p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-1">
                                        <img
                                            src={noman}
                                            alt="#"
                                            className="img-fluid"
                                            height="85px"
                                            width="85px"
                                        ></img>
                                    </div>
                                    <div className="col-11">
                                        <p className="row">
                                            <div className="col-5">
                                                <span className="text-uppercase fw-bold">
                                                    &nbsp;{gmail.name}
                                                </span>
                                                &nbsp;
                                                <span className="text-secondary">
                                                    &#60;{gmail.email}&#62;
                                                </span>{" "}
                                            </div>
                                            <div className="col-7 text-end">
                                                <span className="text-secondary">
                                                    {Date()
                                                        .toString()
                                                        .slice(0, 28)}{" "}
                                                    &nbsp; &nbsp; &nbsp;{" "}
                                                    <img
                                                        src={star}
                                                        alt="#"
                                                    ></img>{" "}
                                                    &nbsp;
                                                    <img
                                                        src={reply}
                                                        alt="#"
                                                    ></img>{" "}
                                                    &nbsp;
                                                    <img
                                                        src={more}
                                                        alt="#"
                                                    ></img>
                                                </span>
                                            </div>
                                        </p>
                                        <p className="text-secondary">
                                            {" "}
                                            &nbsp;to {gmail.sendto}
                                            <img src={arrow} alt="#"></img>
                                        </p>
                                        <div>{gmail.content}</div>
                                        <br></br>
                                        <br></br>
                                        <button
                                            type="button"
                                            class="btn btn-outline-secondary btn-sm"
                                        >
                                            <img src={reply} alt="#"></img>{" "}
                                            Reply
                                        </button>
                                        &nbsp; &nbsp;
                                        <button
                                            type="button"
                                            class="btn btn-outline-secondary btn-sm"
                                        >
                                            <img src={forward} alt="#"></img>{" "}
                                            Forward
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="row text-end">
                        <button
                            className="btn btn-danger mt-2"
                            onClick={() => {
                                deleteGmail(gmail.id);
                            }}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            );
        })
    ) : (
        <div className="border border-danger fs-2 p-4 fw-bold mt-5 text-center">
            <div class>A Great Power Comes With A Great Responsibility!</div>
        </div>
    );
    return <div className="gmails container">{gmailList}</div>;
};

export default Gmails;
