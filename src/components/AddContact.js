import React, { Component } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Formik } from "formik";
import * as Yup from "yup";

export default class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactSchema: Yup.object().shape({
        email: Yup.string().email("Invalid email")
      })
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <SideBar />
        <div className="tm-main uk-section uk-section-default">
          <div className="uk-container uk-container-small">
            <div className="tm-sidebar-right">
              <div data-uk-grid>
                <div className="uk-width-1-1">
                  <div className="uk-card uk-card-default">
                    <div className="uk-card-header">
                      <div
                        className="uk-grid-small uk-flex-middle"
                        data-uk-grid
                      >
                        <div className="uk-width-expand">
                          <h3 className="uk-card-title uk-margin-remove-bottom">
                            Add New Contact
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="uk-card-body">
                      <Formik
                        initialValues={{
                          name: "",
                          phone: "",
                          email: ""
                        }}
                        validationSchema={this.state.contactSchema}
                        onSubmit={values => {
                          console.log(values);
                        }}
                      >
                        {({ errors, touched }) => (
                          <form className="uk-form-stacked ">
                            <div className="uk-margin">
                              <label
                                className="uk-form-label"
                                data-for="form-stacked-text"
                              >
                                Name
                              </label>
                              <div className="uk-form-controls">
                                <input
                                  className="uk-input"
                                  id="form-stacked-text"
                                  type="text"
                                  placeholder="Enter Full Name..."
                                />
                              </div>
                            </div>

                            <div className="uk-margin">
                              <label
                                className="uk-form-label"
                                data-for="form-stacked-text"
                              >
                                Phone Number
                                <div className="pull-right">
                                  <span data-uk-icon="icon: plus" />
                                </div>
                              </label>

                              <div className="uk-form-controls">
                                <input
                                  className="uk-input"
                                  id="form-stacked-text"
                                  type="tel"
                                  placeholder="Enter Mobile Number..."
                                />
                              </div>
                              <div className="uk-form-controls">
                                <div className="pull-right">
                                  <span data-uk-icon="icon: close" />
                                </div>
                                <input
                                  className="uk-input"
                                  id="form-stacked-text"
                                  type="tel"
                                  placeholder="Enter Mobile Number..."
                                />
                              </div>
                            </div>

                            <div className="uk-margin">
                              <label
                                className="uk-form-label"
                                data-for="form-stacked-text"
                              >
                                Email
                                <div className="pull-right">
                                  <span data-uk-icon="icon: plus" />
                                </div>
                              </label>
                              <div className="uk-form-controls">
                                <input
                                  className="uk-input"
                                  id="form-stacked-text"
                                  type="email"
                                  placeholder="Enter Email..."
                                />
                              </div>
                              <div className="uk-form-controls">
                                <div className="pull-right">
                                  <span data-uk-icon="icon: close" />
                                </div>
                                <input
                                  className="uk-input"
                                  id="form-stacked-text"
                                  type="tel"
                                  placeholder="Enter Email..."
                                />
                              </div>
                            </div>

                            <div className="uk-margin">
                              <button className="uk-button uk-button-secondary">
                                Save
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
