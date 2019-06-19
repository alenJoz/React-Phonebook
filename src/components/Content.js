import React from 'react';
import Avatar from '../images/avatar.jpg'

const Content = () => {
	return (
		<React.Fragment>
			<div className="tm-main uk-section uk-section-default">
				<div className="uk-container uk-container-small">
					<div className="tm-sidebar-right">
						<div data-uk-grid>
							<div className="uk-width-1-1">
								<div className="uk-card uk-card-default">
									<div className="uk-card-header">
										<div className="uk-grid-small uk-flex-middle" data-uk-grid>
											<div className="uk-width-auto">
												<img
													className="uk-border-circle"
													width="40"
													height="40"
													src={Avatar}
												/>
											</div>
											<div className="uk-width-expand">
												<h3 className="uk-card-title uk-margin-remove-bottom">
													Anna Alex
                      </h3>
												<p className="uk-text-meta uk-margin-remove-top">
													<time data-datetime="2016-04-01T19:00">April 01, 2016</time>
												</p>
											</div>
											<div className="position-right">
												<a href="" data-uk-icon="icon: pencil"></a>
											</div>
										</div>
									</div>
									<div className="uk-card-body">
										<div className="uk-margin">
											<h4>Phone Numbers</h4>
											<ul className="uk-list uk-list-large uk-list-divider">
												<li>
													<span data-uk-icon="icon: receiver"></span> 9496567453
                      </li>
												<li>
													<span data-uk-icon="icon: receiver"></span> 9496567453
                      </li>
												<li>
													<span data-uk-icon="icon: receiver"></span> 9496567453
                      </li>
											</ul>
										</div>
										<div className="uk-margin">
											<h4>Emails</h4>
											<ul className="uk-list uk-list-large uk-list-divider">
												<li>
													<span data-uk-icon="icon: mail"></span> test@test.com
                      </li>
												<li>
													<span data-uk-icon="icon: mail"></span> test@gmail.com
                      </li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Content;