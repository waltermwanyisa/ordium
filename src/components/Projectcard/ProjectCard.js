import React from 'react';
import Countdown from 'react-countdown';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBitcoin} from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ project, isWalletConnected, satoshiBalance, handleOpenSendBitcoinModal, connectWallet }) => {
   
    const CountdownRenderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
            return <span>TBA</span>;
        } else {
            return <span>{days}d {hours}h {minutes}m {seconds}s</span>;
        }
    };
    console.log(project)
    const startdate = project.token_sale_starts;
    const enddate = project.token_sale_ends;

    const startDate = new Date(startdate).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC' });
    const endDate = new Date(enddate).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC' });


    const socialData = [
        {
          id: "1",
          link: "https://twitter.com/ordium_io",
          icon: "fab fa-twitter",
        },
        {
          id: "2",
          link: "https://ordium.gitbook.io/ordium/",
          icon: "fas fa-book",
        },
        {
          id: "3",
          link: "https://medium.com/@ordium/about",
          icon: "fab fa-medium",
        },
      ];

    console.log(project)
    console.log(satoshiBalance)

    return (
        <div className="container">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12">
                        {/* Project Card */}
                        <div className="card project-card no-hover">
                            <div className="media row">
                                <img className="card-img-top col-lg-3 col-md-3 col-sm-12 mb-5"
                                 style={{width:"85%"}} src={project.game_image} alt="logo" />
                                <div className="media-body col-lg-9 col-md-9 col-sm-12">
                                    <h4 className="m-0">{project.game_name}</h4>
                                    <div className="countdown-times">
                                        <h6 className="my-2">Registration in:</h6>
                                        <Countdown
                                            date={new Date(project.token_sale_starts)}
                                            renderer={CountdownRenderer}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Project Body */}
                            <div className="card-body">
                                <div className="items">
                                    {/* Single Item */}
                                    <div className="single-item">
                                        <span>Total raised</span>
                                        <span> {project.total_raised}</span>
                                    </div>
                                    {/* Single Item */}
                                    <div className="single-item">
                                        <span>Targeted raised</span>
                                        <span> {project.amount_to_raise}</span>
                                    </div>
                                    {/*Single Item*/}
                                    <div className="single-item">
                                        <span>Participants</span>
                                        <span> {project.participants}</span>
                                    </div>
                                </div>
                                <div className="item-progress">
                                    <div className="progress mt-4 mt-md-5">
                                        <div className="progress-bar" role="progressbar" style={{ width: `${project.progress}%` }}
                                             aria-valuenow={project.progress} aria-valuemin={0}
                                             aria-valuemax={100}>{project.progress}%</div>
                                    </div>
                                    <div className="progress-sale d-flex justify-content-between mt-3">
                                        <span>{project.mecha}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Project Footer */}
                            <div className="project-footer d-flex align-items-center mt-4 mt-md-5">
                                <a className="btn btn-bordered-white btn-smaller"
                                   onClick={isWalletConnected ? handleOpenSendBitcoinModal : connectWallet}>
                                    {isWalletConnected ? 'Invest' : 'Connect Wallet'}
                                </a>
                                {/* Social Share */}
                                <div className="social-share ml-auto">
                                    <ul className="d-flex list-unstyled">
                                        {socialData.map((item, idx) => {
                                            return (
                                                <li key={`sd_${idx}`}>
                                                    <a href={item.link}>
                                                        <i className={item.icon}/>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            {/* Blockchain Icon */}
                            <div className="blockchain-icon">
                                <FontAwesomeIcon icon={faBitcoin} size="2x" style={{color: "#ffffff"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between mt-5 d-flex h-100">
                    <div className="col-12 col-lg-6 d-flex flex-column">
                        <div className="card project-card single-item-content no-hover h-100">
                            <h3 className="m-0">
                                Project Details
                            </h3>
                            <p>
                                <h5>Description</h5>
                                {project.game_description}
                                <h5>Utilities</h5>
                                {project.game_assets}
                            </p>
                            {/* Info Content */}
                            <div className="table-responsive">
                                <table className="table info-content table-borderless table-sm">
                                    <tbody>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0 d-flex flex-column">
                        <div className="card project-card single-item-content no-hover h-100">
                            <h3 className="m-0">
                                Tokenomics
                            </h3>
                            <p></p>
                            {/* Token Content */}
                            <div className="table-responsive">
                                <table className="table token-content table-borderless table-sm">
                                    <tbody>
                                        <tr>
                                            <td>Total Supply</td>
                                            <td>
                                                 50,000,000
                                                {/* {project.amount_to_raise.toLocaleString("en-US")} */}
                                                {/* { project.amount_to_raise.toLocaleString("en-US") } */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Amount for Sale</td>
                                            <td>
                                                {/* ${project.amount_to_raise} */}
                                                30,000,000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sale Price</td>
                                            <td>
                                                TBD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Token Distribution</td>
                                            <td>
                                                Claim option on Official Ordium site
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Start Date</td>
                                            <td>
                                                {/* {startDate} */}
                                                TBD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>End Date</td>
                                            <td>
                                                {/* {endDate} */}
                                                TBD
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;
