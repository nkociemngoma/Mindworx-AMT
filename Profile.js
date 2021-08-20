import React from 'react'

import "../components/Form.css"

const Profile = () => {
    return (
        <div>
            <h2 className="page-header">
                Profile
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                        <div class="row-gutters">
                            <div class="col-xl-12">
                                    <h3 class="mb-2 text-primary">Personal Details</h3>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group1">
                                    <label for="fullName">Full Name</label>
                                    <input type="text" class="form-control" id="fullName" placeholder="Enter full name"/>
                                </div>
                            </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group1">
                                        <label for="eMail">Email</label>
                                        <input type="email" class="form-control" id="eMail" placeholder="Enter email ID"/>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group1">
                                        <label for="phone">Phone</label>
                                        <input type="text" class="form-control" id="phone" placeholder="Enter phone number"/>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group1">
                                        <label for="programme">Programme</label>
                                        <input type="text" class="form-control" id="programme" placeholder="Programme"/>
                                    </div>
                                </div>
                                </div>
                                
                                <div class="row-gutters2">
                                    <div class="col-xl-14 col-lg-14 col-md-14 col-sm-14 col-14">
                                        <h3 class="mt-3 mb-2 text-primary">Address</h3>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group2">
                                            <label for="Street">Street</label>
                                            <input type="name" class="form-control" id="Street" placeholder="Enter Street"/>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group2">
                                            <label for="ciTy">City</label>
                                            <input type="name" class="form-control" id="ciTy" placeholder="Enter City"/>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group2">
                                            <label for="sTate">State</label>
                                            <input type="text" class="form-control" id="sTate" placeholder="Enter State"/>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group2">
                                            <label for="zIp">Zip Code</label>
                                            <input type="text" class="form-control" id="zIp" placeholder="Zip Code"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row-gutters3">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="text-right">
                                            <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
                                            <button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            
        
    )
}

export default Profile