import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import commonService from "../Services/CommonService";
import Alert from "./Alert";
import Spinner from "./Spinner";

export default class Login extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			alertHeading: '',
			alertMessage: '',
			alert: false,
			spinner: false,
			loginSchema: Yup.object().shape({
				email: Yup.string()
					.email('Invalid email')
					.required('Required'),
				password: Yup.string()
					.min(8, 'Password must have atleast 8 characters')
					.matches(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/, { message: 'Password must include a UPPER CASE, NUMBER, SPECIAL CHARACTER', excludeEmptyString: true })
					.required('Required'),
			})
		}


	}

	alert(show, alertContents) {
		if (show)
			this.setState({
				alert: true,
				alertHeading: alertContents.status,
				alertMessage: alertContents.error
			})
	}

	spinner(show) {
		this.setState({
			spinner: show
		})
	}

	handleSubmit = (values, {
		props = this.props,
		setSubmitting
	}) => {

		//process form submission here
		//done submitting, set submitting to false
		setSubmitting(false);
		return;
	}

	render() {
		return (
			<React.Fragment>
				{this.state.spinner && <Spinner />}
				{this.state.alert && <Alert headingContent={this.state.alertHeading} messageContent={this.state.alertMessage}/>}
				<div className="tm-main uk-section uk-section-default">
					<div className="uk-container uk-container-small">
						<div className="tm-sidebar-right">
							<div data-uk-grid>
								<div className="uk-width-1-1">
									<div className="uk-card uk-card-default">
										<div className="uk-card-header">
											<div className="uk-grid-small uk-flex-middle" data-uk-grid>
												<div className="uk-width-expand">
													<h2 className="uk-margin-remove-bottom uk-text-center">
														Login
                      </h2>
												</div>
											</div>
										</div>
										<div className="uk-card-body">
											<Formik
												initialValues={{ email: '', password: '' }}
												validationSchema={this.state.loginSchema}
												onSubmit={(values, { setSubmitting }) => {
													this.spinner(true);
													this.setState(() => ({
														email: values.email,
														password: values.password
													}))
													setSubmitting(false);
													commonService.postData(values).then(loginData => {
														localStorage.setItem('userData', JSON.stringify(loginData));
														this.spinner(false)
														this.props.history.push('/home')
													}).catch(error => {
														this.spinner(false)
														this.alert(true, error)
													});
												}}
											>
												{({
													values,
													errors,
													touched,
													handleChange,
													handleBlur,
													handleSubmit,
													isSubmitting,
													/* and other goodies */
												}) => (
														<form onSubmit={handleSubmit} className="uk-form-stacked">
															<div className="uk-margin">
																<label className="uk-form-label"
																>Email
                      </label>
																<div className="uk-form-controls">
																	<input className="uk-input uk-form-large"
																		type="email"
																		name="email"
																		onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.email}
																	/>
																</div>
															</div>
															{errors.email && touched.email && errors.email && <span className="uk-alert-danger">&#42;{errors.email && touched.email && errors.email}</span>}
															<div className="uk-margin">
																<label className="uk-form-label"
																>Password
                      </label>
																<div className="uk-form-controls">
																	<input className="uk-input uk-form-large"
																		type="password"
																		name="password"
																		onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.password}
																	/>
																</div>
															</div>
															{errors.password && touched.password && errors.password && <span className="uk-alert-danger">&#42;{errors.password && touched.password && errors.password}</span>}
															<button type="submit" disabled={isSubmitting} className="uk-button uk-button-secondary uk-width-1-1  uk-margin-top">
																Submit
          </button>
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
			</React.Fragment >
		);
	}
}