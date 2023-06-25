import React from "react";

function Work(){

  return (
    <section className="work-area" style={{marginTop:"-12em"}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-end mb-4">
              <div className="intro-content">
                <span className="intro-text">Roadmap</span>
                {/* <h3 className="mt-3 mb-0">{dataState.heading}</h3> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-6 col-md-4 item">
              {/* Phase 1: Genesis */}
              <div className="single-work">
                <h4>Phase 1: Genesis</h4>
                <p>
                  <ul>
                    <li>Launch of Ordium</li>
                    <li>Introduction of $ORUM Tokenomics</li>
                    <li>Initiation of Community Building Activities</li>
                    <li>Formation of Strategic Partnerships</li>
                    <li>Distribution of $ORUM Tokens</li>
                  </ul>
                </p>
              </div>
              {/* /Phase 1: Genesis */}
            </div>
            <div className="col-12 col-sm-6 col-md-4 item">
              {/* Phase 2: Expansion */}
              <div className="single-work">
                <h4>Phase 2: Expansion</h4>
                <p>
                  <ul>
                    <li>Implementing $ORUM Buyback and Burning</li>
                    <li>Introducing Community SHO Voting</li>
                    <li>Launching the Incubator Program</li>
                    <li>$ORUM Incentive Airdrop & Ambassador Program</li>
                  </ul>
                </p>
              </div>
              {/* /Phase 2: Expansion */}
            </div>
            <div className="col-12 col-sm-6 col-md-4 item">
              {/* Phase 3: Evolution */}
              <div className="single-work">
                <h4>Phase 3: Evolution</h4>
                <p>
                  <ul>
                    <li>Start development Governance Program</li>
                    <li>Introducing Ordium staking & Rewards</li>
                    <li>Recap of the past Phases and Future Goals</li>
                  </ul>
                </p>
              </div>
              {/* /Phase 3: Evolution */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Work;