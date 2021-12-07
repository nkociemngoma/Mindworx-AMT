import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function UserProfile() {
	return (
		<div class='container bootstrap snippets bootdey'>
			<div className='row'>
				<div class='profile-nav col-md-3'>
					<div class='panel'>
						<div class='user-heading round'>
						<img
								src='https://inclusiveafrica.org/api/wp-content/uploads/2020/07/20200707_223810.jpg'
								alt=''
							/>

							<h1>Princess Thembisile Sibanda</h1>
						</div>

						<ul class='nav nav-pills nav-stacked'>
						<li>
								<Link to='/#' className='anchor'>
									<i class='fa fa-edit'></i> View Profile
									<span class='label label-warning pull-centre r-activity'>
									
									</span>
								</Link>
							</li>
								<li>
								<Link to='/#' className='anchor'>
									<i class='fa fa-edit'></i> Update Profile
									<span class='label label-warning pull-centre r-activity'>
								
									</span>
								</Link>
							</li>
							<li>
								<Link to='/#' className='anchor'>
									<i class='fa fa-edit'></i> Upload profile picture
									<span class='label label-warning pull-centre r-activity'>
									
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div class='profile-info col-md-9'>
					<div class='panel'>
						<div class='bio-graph-heading'>Asset User Profile</div>
						<div class='panel-body bio-graph-info'>
							<h1>Personal information</h1>
							<div class='row'>
								<div class='bio-row'>
									<p>
										<span>Asset User </span>: Princess Thembisile Sibanda
									</p>
								</div>
								<div class='bio-row'>
									<p>
										<span>Email </span>: mathembis73@gmail.com
									</p>
								</div>
								<div class='bio-row'>
									<p>
										<span>Mobile Number </span>: 060 796 8515
									</p>
								</div>
								<div class='bio-row'>
									<p>
										<span>Address </span>: Matsulu B, Nelspruit, Mpumalanga
									</p>
								</div>
								<div class='bio-row'>
									<p>
										<span>Next of kin </span>: Khethiwe Sibanda
									</p>
								</div>
								<div class='bio-row'>
									<p>
										<span>Qualification </span>: BA Psychology
									</p>
								</div>
								<div class='bio-row'>
									<p>
										<span>Role </span>: Learner
									</p>
								</div>
								<div class='bio-row'>
									<p>
										<span>Skills </span>: Front end developer
									</p>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div class='row'>
							<div class='col-md-6'>
								<div class='panel'>
									<div class='panel-body'>
										<div class='bio-chart'>
										</div>
										<div class='bio-desk'>
											<h4 style={{ color: 'rgb(76, 197, 205)' }}>Asset Details</h4>
											<p>Asset Name : Laptop</p>
											<p>Brand : Lenovo</p>
											<p>Serial no : 8364489-EA</p>
											<p>Asset ID : A1078</p>
											<p>Color : Black</p>
											<p>Model : ThinkPad T470s</p>
											<p>Specs : 1TB Hard Drive Capacity,Windows 10</p>

										</div>
									</div>
								</div>
							</div>
                            
							<div class='col-md-6'>
								<div class='panel'>
									<div class='panel-body'>
										<div class='bio-chart'>

										</div>
										<div class='bio-desk'>
										<h4 class='red'>Additional information</h4>
											<p>Issued by : Nkocie Mngoma</p>
											<p>Issue date : 22 April 2021</p>
											<p>Return date : 30 March 2022</p>
											<p>Program : Software developer</p>
											<p>Company : Mindworx</p>
											<p>Start date : 04 May 2021</p>
											<p>End date : 31 March 2021</p>
										
								<Link to='/#' className='anchor'>
									<i class='fa fa-edit'></i> 
									<span class='label label-warning pull-right r-activity'>
									Cancel
									</span>
								</Link>
								<Link to='/#' className='anchor'>
									<i class='fa fa-edit'></i> 
									<span class='label label-warning pull-left r-activity'>
									Save and submit
									</span>
								</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
