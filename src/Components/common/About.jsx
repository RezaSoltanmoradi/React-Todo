import React from 'react';
import { BsWrench } from 'react-icons/bs';
const About = ({fullName}) => {
    return (
        <div className="card col-12 p-0">
            <div className="card-header bg-dark text-white h4 text-center">
                درباره من
            </div>
            <div className="card-body text-center">
                <p className="card-text h5 ">  {fullName} هستم</p>
                <h5 className="card-title">
                    با مهارت های زیر تا حدودی اشنا هستم <BsWrench />
                </h5>
                <div className="d-flex justify-content-center bg-dark text-white flex-wrap align-items-center col-12 m-2">
                    <div
                        class="progress col-12 w-25 m-2"
                        style={{ height: '30px', fontSize: '15px' }}
                    >
                        <div
                            class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                            aria-valuemax="100"
                            style={{ width: '75%' }}
                        >
                            75%
                        </div>
                    </div>
                    <span className="h5">javascript</span>
                    <div
                        class="progress col-12 w-25 m-2"
                        style={{ height: '30px', fontSize: '15px' }}
                    >
                        <div
                            class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                            aria-valuemax="100"
                            style={{ width: '40%' }}
                        >
                            40%
                        </div>
                    </div>
                    <span className="h5">react.js</span>
                    <div
                        class="progress col-12 w-25 m-2"
                        style={{ height: '30px', fontSize: '15px' }}
                    >
                        <div
                            class="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            style={{ width: '80%' }}
                        >
                            80%
                        </div>
                    </div>
                    <span className="h5">bootstrap</span>
                    <div
                        class="progress col-12 w-25 m-2"
                        style={{ height: '30px', fontSize: '15px' }}
                    >
                        <div
                            class="progress-bar bg-info progress-bar-striped progress-bar-animated"
                            aria-valuemax="100"
                            style={{ width: '90%' }}
                        >
                            90%
                        </div>
                    </div>
                    <span className="h5">html</span>
                    <div
                        class="progress col-12 w-25 m-2"
                        style={{ height: '30px', fontSize: '15px' }}
                    >
                        <div
                            class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                            aria-valuemax="100"
                            style={{ width: '70%' }}
                        >
                            70%
                        </div>
                    </div>
                    <span className="h5">css</span>
                    <div
                        class="progress col-12 w-25 m-2"
                        style={{ height: '30px', fontSize: '15px' }}
                    >
                        <div
                            class="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                            aria-valuemax="100"
                            style={{ width: '80%' }}
                        >
                            80%
                        </div>
                    </div>
                    <span className="h5">responsive</span>
                </div>
            </div>
            <i className="card-footer text-center h5 bg-info  mb-0 text-white">
                برای تماس :09195416561
            </i>
        </div>
    );
};
export default About;
