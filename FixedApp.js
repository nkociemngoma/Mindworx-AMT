import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function FixedApp() {
	return (
		<div class='container bootstrap snippets bootdey'>
			<div className='row'>
				<div class='profile-nav col-md-3'>
					<div class='panel'>
						<div class='user-heading round'>
						<img
								src='https://www.wootware.co.za/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/p/r/pr_2018_5_2_10_20_0_748_05__.jpg'
								alt=''
							/>

							<h1>Laptop: Lenovo</h1>
						</div>

						<ul class='nav nav-pills nav-stacked'>
							<li class='active'>
								<Link to='/#' className='anchor'>
									<i class='fa fa-user'></i> Asset
								</Link>
							</li>
							<li>
								<Link to='/#' className='anchor'>
									<i class='fa fa-calendar'></i> Recent Activity
									<span class='label label-warning pull-right r-activity'>
										9
									</span>
								</Link>
							</li>
							<li>
								<Link to='/#' className='anchor'>
									<i class='fa fa-edit'></i> Edit Profile
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div class='profile-info col-md-9'>
					<div class='panel'>
						<div class='bio-graph-heading'>Mindworx Asset</div>
						<div class='panel-body bio-graph-info'>
							<h1>Asset Details</h1>
							<div class='row'>
								<div class='bio-row'>
									<p>
										<span>Asset Name </span>: Laptop
									</p>
								</div>
								<div class='bio-row'>
									<p>
										<span>Brand Name </span>: Lenovo
									</p>
								</div>
								<div class='bio-row'>
									<p>
										<span>Serial Number </span>: 816853-EA
									</p>
								</div>
								<div class='bio-row'>
									<p>
										<span>Asset Specs </span>: 1TB Hard Drive Capacity,Windows
										10
									</p>
								</div>
							</div>
							<h1>Asset User Details</h1>
							<div class='row'>
								<div class='bio-row'>
									<p>
										<span>Asset User </span>: Princess Sibanda
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
										<h4 style={{ color: 'rgb(203, 164, 219)' }}>Features</h4>
											<p>Memory Capacity : 4GB RAM</p>
											<p>Windows (OS) : WINDOWS 10</p>
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
											<h4 style={{ color: 'rgb(76, 197, 205)' }}>Asset Tag</h4>
											<p>ID : A1078</p>
											<p>Model : ThinkPad T470s</p>
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
										<h4 class='red'>Mindworx IT Department</h4>
											<p>Issued by : Nkocie Mngoma</p>
											<p>Issue date : 22 April 2021</p>
											<p>Return date : 30 March 2022</p>
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
											<h4 style={{ color: 'rgb(150, 190, 75)' }}>Additional information</h4>
											<p>W x D x H: 336.6 x 232.5 x 19.95 (mm)</p>
											<p>Color : Black</p>
											<p>Weight : 1.6 kg </p>
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

export default FixedApp;
