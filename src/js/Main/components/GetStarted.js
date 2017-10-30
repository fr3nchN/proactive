import React from 'react'
import links from "./../links"

const GetStarted = () => (
    <div>
        <div className="jumbotron jumbotron-fluid background-image-getstarted">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-white">
                        <h1 className="display-1">Get Started</h1>
                        <p className="h2">In just 3 steps, submit your first workflow</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2>Step 1: Register and Login</h2>
                    <hr />
                    <p>
                        Go to <a href={links.external.try.home} target="_blank">try.activeeon.com</a> and register.
                    </p>
                    <img className="img-thumbnail mb-4" src="images/tuto/gif-tuto-register.gif" alt="register to proactive" />
                    <p>
                        Once your registration confirmed, just logging by clicking on the <a href={links.external.try.studio} target="_blank">studio icon</a>.
                    </p>
                    <img className="img-thumbnail mb-4" src="images/tuto/gif-tuto-login.gif" alt="login to proactive" />

                    <h2>Step 2: Use some Templates</h2>
                    <hr />
                    <p>
                        Once logged in, just go to the template menu and import the workflow called <em>Distributed Computing</em> with a simple click.
                    </p>
                    <img className="img-thumbnail mb-4" src="images/tuto/gif-tuto-import.gif" alt="import a workflow" />

                    <h2>Step 3: Submit and Visualize</h2>
                    <hr />
                    <p>
                        Then, click on execute and visualize the execution on the <a href={links.external.try.scheduler} target="_blank">scheduler portal</a>.
                    </p>
                    <img className="img-thumbnail mb-4" src="images/tuto/gif-tuto-submit.gif" alt="submit the workflow" />

                    <h2>Step 4: Next Steps</h2>
                    <hr />
                    <p>
                        At this stage, you've succesfully executed your first workflow. Do not hesitate to hang around and go through <a href={links.external.try.home} target="_blank">some tutorials</a>, follow <a href={links.external.blog.home} target="_blank">some blog articles</a> or read <a href={links.external.doc.home} target="_blank">the documentation</a>.
                    </p>
                    <p>
                        For any other enquiry, please, do not hesitate to <a href="mailto:contact@activeeon.com?Subject=[ProActive]%20Request%20for%20information" target="_top">send an email</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default GetStarted;
