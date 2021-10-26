import React, { Fragment } from 'react';
import About from '../common/About';
import AddNewTask from '../task/AddNewTask';
import Todos from './../task/Todos';
import { Route, Switch } from 'react-router-dom';
import Nav from '../common/Nav';
const App = () => {
    return (
        <Fragment>
            <Nav />
            <h3 className="alert alert-success text-center">برنامه ی روزانه</h3>
            <AddNewTask />
            <div className="d-flex justify-content-center container mt-4 ">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <Switch>
                            <Route path="/" exact component={Todos} />
                            {/* <Route path="/About"  component={About}/> */}
                            <Route
                                path="/About"
                                render={() => (
                                    <About fullName="رضا سلطانمرادی" />
                                )}
                            />
                        </Switch>
                        {/* <Todos />
                        <About/> */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default App;
