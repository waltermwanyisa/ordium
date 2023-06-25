import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Alert/Alert";

const initData = {
  btn: "Submit My Project",
  notice:
    "We will review your submissions within 48 hours. If your game potentially fits our platform, we will contact you through your provided email address or on Telegram to arrange a call.",
};

function Apply() {
  const [formData, setFormData] = useState({
    fullname: "",
    project_email: "",
    telegram_handle: "",
    referred: "",
    token_name: "",
    token_image: "",
    is_token_circulation: "",
    eta_tge: "",
    project_description: "",
    team_size: "",
    team_members: "",
    token_utilities: "",
    token_demand_drivers: "",
    is_product_launched: "",
    supporting_documents: "",
    social_links: "",
  });

  const resetForm = () => {

    setFormData({
      fullname: "",
      project_email: "",
      telegram_handle: "",
      referred: "",
      token_name: "",
      token_image: "",
      is_token_circulation: "",
      eta_tge: "",
      project_description: "",
      team_size: "",
      team_members: "",
      token_utilities: "",
      token_demand_drivers: "",
      is_product_launched: "",
      supporting_documents: "",
      social_links: "",
    });
    
  };

  const [initDataState, setInitDataState] = useState(initData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setInitDataState(initData);
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((formData) => ({ ...formData, [id]: value }));
  };

  // ${process.env.REACT_APP_BASE_URL}

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/apply`,
        formData
      );
      console.log(response.data); // log the response from the server
      setFormSubmitted(true); // set formSubmitted state to true
      // <Alert message="Your project details have been submitted. The Ordium Team
      // will review your project and contact you as soon as possible." />
      // toast.success("Your project details have been submitted. The Ordium Team will review your project and contact you as soon as possible.", {
      //   onClose: () => navigate("/") // Navigate to the root page after the toast is closed
      // });
    } catch (error) {
      console.log(error); // log any errors
      toast.error(
        "There was an error submitting your project. Please try again later."
      );
    }
  };

  return (
    <div className="container">
      <section className="apply-area">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="apply-form card p-4">
              <ToastContainer />
              <form onSubmit={handleSubmit}>
                <h4>
                  Please fill in this form to apply for a listing on Ordium.io
                </h4>
                <span className="d-inline-block">
                  Please be aware that we may receive a large volume of
                  applications, therefore, please keep your answer concisely,
                  and we appreciate your patience and cooperation. While we
                  endeavor to process them as quickly as possible.
                  <br />
                  <br />
                  <br />
                </span>

                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    className="form-control"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    required
                  />
                  <small className="form-text mt-2">
                    Please provide your full name
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="project_email">Contact email</label>
                  <input
                    type="email"
                    id="project_email"
                    className="form-control"
                    value={formData.project_email}
                    onChange={handleInputChange}
                    required
                  />
                  <small className="form-text mt-2">
                    Please provide your project email
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="telegram_handle">Telegram handle</label>
                  <input
                    type="text"
                    id="telegram_handle"
                    className="form-control"
                    value={formData.telegram_handle}
                    onChange={handleInputChange}
                    required
                  />
                  <small className="form-text mt-2">
                    Please provide your Telegram Handle
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="referred">
                    Who introduced you to apply for Ordium listing ?
                  </label>
                  <input
                    type="text"
                    id="referred"
                    className="form-control"
                    value={formData.referred}
                    onChange={handleInputChange}
                    required
                  />
                  <small className="form-text mt-2">
                    Tell us who referred you to apply for Ordium listing ?
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="token_name">Token Name</label>
                  <input
                    type="text"
                    id="token_name"
                    className="form-control"
                    value={formData.token_name}
                    onChange={handleInputChange}
                    required
                  />
                  <small className="form-text mt-2">
                    Please provide the token name of your project
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="token_image">
                    Token Symbol URL in format you provide us with
                  </label>
                  <input
                    type="text"
                    id="token_image"
                    className="form-control"
                    value={formData.token_image}
                    onChange={handleInputChange}
                    required
                  />
                  <small className="form-text mt-2">Your Token Image URL</small>
                </div>

                <div className="form-group">
                  <label htmlFor="is_token_circulation">
                    Is the token in circulation?
                  </label>
                  <select
                    id="is_token_circulation"
                    className="form-control"
                    value={formData.is_token_circulation}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="eta_tge">What is the ETA of TGE?</label>
                  <input
                    type="text"
                    id="eta_tge"
                    className="form-control"
                    value={formData.eta_tge}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="project_description">
                    What is the project doing - in one sentence.
                  </label>
                  <input
                    type="text"
                    id="project_description"
                    className="form-control"
                    value={formData.project_description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="team_size">
                    What’s the size of the team?
                  </label>
                  <input
                    type="number"
                    id="team_size"
                    className="form-control"
                    value={formData.team_size}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="team_members">
                    Who are the founders and core members? (at least 3 members,
                    and include experiences with linkedin link or brief
                    experience if applicable)
                  </label>
                  <textarea
                    id="team_members"
                    className="form-control"
                    value={formData.team_members}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="token_utilities">
                    Please describe the utilities of your token.
                  </label>
                  <textarea
                    id="token_utilities"
                    className="form-control"
                    value={formData.token_utilities}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="token_demand_drivers">
                    What are the major drivers of demand for the token? or any
                    strong value accrual?
                  </label>
                  <textarea
                    id="token_demand_drivers"
                    className="form-control"
                    value={formData.token_demand_drivers}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="is_product_launched">
                    Is the product (or BETA) launched already?
                  </label>
                  <input
                    type="text"
                    id="is_product_launched"
                    className="form-control"
                    value={formData.is_product_launched}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="supporting_documents">
                    Supporting documents URL
                  </label>
                  <input
                    type="text"
                    id="supporting_documents"
                    value={formData.supporting_documents}
                    className="form-control"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="social_links">
                    Please provide a link(s) to your Official social pages.
                  </label>
                  <input
                    type="text"
                    id="social_links"
                    className="form-control"
                    value={formData.social_links}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <span className="d-inline-block">{initDataState.notice}</span>
                <button type="submit" className="btn btn-primary mt-4">
                  {initDataState.btn} <i className="icon-login ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {formSubmitted && (
        <div>
          <Modal
            message="Your project details have been submitted. The Ordium Team will review your project and contact you as soon as possible."
            onClose={() => {
              setFormSubmitted(false);
              resetForm();
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Apply;
