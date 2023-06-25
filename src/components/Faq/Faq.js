import React, { useState, useEffect } from 'react';

const initData = {
    sub_heading: "FAQ",
    heading: "Frequently Asked Questions",
    content: ""
}

const data = [
    {
        id: "1",
        btnClass: "btn d-block text-left w-100 py-4",
        target: "#collapseOne",
        quote: "What is Ordium?",
        contentId: "collapseOne",
        contentClass: "collapse show",
        content: "Ordium is the first community-driven launchpad empowering BRC-20 & Oridinal projects and providing safety to early stage investors."
    },
    {
        id: "2",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseTwo",
        quote: "How can I participate in IDOs on Ordium?",
        contentId: "collapseTwo",
        contentClass: "collapse",
        content: "We will be sharing the $ORUM IDO date very soon, so make sure to keep a close eye on our socials to stay informed."
    },
    {
        id: "3",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseThree",
        quote: "What is the $ORUM token?",
        contentId: "collapseThree",
        contentClass: "collapse",
        content: "$ORUM, the native utility token of the Ordium platform, is issued on BRC-20. It is used for governance, IDO access, and other platform advantages. IDO participation will soon be able via our official website."
    },
    {
        id: "4",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFour",
        quote: "How does Ordium assure project quality?",
        contentId: "collapseFour",
        contentClass: "collapse",
        content: "Ordium maintains a unique selection process where our team of professionals carries out extensive due diligence on each project. Our stringent quality standards ensure that only the most credible, high-potential projects are selected, guaranteeing the best possible results for our community."
    },
    {
        id: "5",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFive",
        quote: "Can I submit my project to Ordium?",
        contentId: "collapseFive",
        contentClass: "collapse",
        content: "Absolutely, we encourage innovation and welcome all promising projects. Submit your project proposal through our  application form, and our team will review it promptly."
    },
    {
        id: "6",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseSix",
        quote: "How can I stay updated on Ordium news and events?",
        contentId: "collapseSix",
        contentClass: "collapse",
        content: "Join us on our official social media channels, such as Twitter and Medium. We regularly post updates and announcements about the Orium’s developments and upcoming projects."
    },
    {
        id: "7",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseSeven",
        quote: "How does Ordium engage with its community?",
        contentId: "collapseSeven",
        contentClass: "collapse",
        content: "At Ordium, we plan on fostering our active through AMA sessions, prompt responses to queries, and frequent updates on our social media platforms. Your feedback is valuable to us, and we encourage active participation from all our users."
    },
    {
        id: "8",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseEight",
        quote: "How does Ordium's incentive program work?",
        contentId: "collapseEight",
        contentClass: "collapse",
        content: "Ordium offers a rich incentive program for its community members. Depending on your level of engagement, which includes early adoption, consistent platform use, and high-volume trading, you can enjoy benefits like exclusive airdrops, and priority access to upcoming launches."
    },

]

function Faq() {

    const [initDataState, setInitDataState] = useState(initData);
    const [dataState, setDataState] = useState(data);

    useEffect(() => {
        setInitDataState(initData);
        setDataState(data);
    }, []);

    return (
        <section className="faq-area pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-7">
                        {/* Intro */}
                        <div className="intro text-center">
                            <div className="intro-content">
                                <span className="intro-text">{initDataState.sub_heading}</span>
                                <h3 className="mt-3 mb-0">{initDataState.heading}</h3>
                                <p>{initDataState.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        {/* FAQ Content */}
                        <div className="faq-content">
                            {/* Gameon Accordion */}
                            <div className="accordion" id="gameon-accordion">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-10">
                                        {/* Single Accordion Item */}
                                        {dataState.map((item) => (
                                            <div key={item.id} className="single-accordion-item p-3">
                                                {/* Card Header */}
                                                <div className="card-header bg-inherit border-0 p-0">
                                                    <h2 className="m-0">
                                                        <button
                                                            className={item.btnClass}
                                                            type="button"
                                                            data-toggle="collapse"
                                                            data-target={item.target}
                                                        >
                                                            {item.quote}
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div
                                                    id={item.contentId}
                                                    className={item.contentClass}
                                                    data-parent="#gameon-accordion"
                                                >
                                                    {/* Card Body */}
                                                    <div className="card-body py-3">{item.content}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;