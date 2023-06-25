import {Link} from "react-router-dom";

function Disclaimer() {

  return (
    <section className="work-area" style={{ marginTop: "-4em" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-end mb-4">
              <div className="intro-content">
                <span className="intro-text">Disclaimer</span>
                <h3 className="mt-3 mb-0"></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 item">
            {/* Single Work */}
            <div className="single-work">
              {/* <h4></h4> */}
              <p style={{ textAlign: "justify" }}>
                This web page and any other contents published on this website shall not constitute 
                investment advice, financial advice, trading advice, or any other kind of advice, and
                you should not treat any of the website's content as such. You alone assume the sole
                responsibility of evaluating the merits and risks associated with using any information 
                or other content on this website before making any decisions based on such information. 
                You understand that the crypto market is characterised by high volatility, and you 
                should be aware of the concrete possibility of losing the entirety of the funds 
                you allocated in the crypto market. You should refrain from using funds you can't 
                afford to lose when purchasing cryptocurrencies and other digital tokens.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="col-12 col-sm-12 col-md-12 text-center pt-5 mt-5">
            <div className="button-group">
              <Link className="btn btn-bordered active smooth-anchor" to="/projects">
                <i className="icon-rocket mr-2" />
                Join $ORUM IDO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;