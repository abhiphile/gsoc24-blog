import React from 'react'
import Navbar from '../Navbar'
import Anchors from '../assets/Anchors'
import { Divider, Typography } from 'antd';
import Footer from '../assets/Footer';
import { FaCodePullRequest } from 'react-icons/fa6';
const { Title, Paragraph, Text, Link } = Typography;

const Week3 = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-2 col-xs-12">
          <Anchors />
        </div>
        <div className="col m-2">
          <div className="m-2 border rounded p-4">
            <Typography>
              <Title>
                Week 3 : Parallel Interconnection of <code>StateSpace</code> objects.
              </Title>
              <Paragraph className='par'>
                During the third week of my Google Summer of Code (GSOC) journey, In this week I focused on integrating <code>StateSpace</code> with <code>Parallel</code> and <code>MIMOParallel</code> connections.
              </Paragraph>
              <Title>
                Key Enhancements
              </Title>
              <Paragraph className='par'>
                <ul>
                  <li>Added support for combining <code>StateSpace</code> objects in <code>Parallel</code> and <code>MIMOParallel</code> configurations.</li>
                  <li>Ensured compatibility with <code>TransferFunction</code> and <code>TransferFunctionMatrix</code> objects, allowing for mixed-model connections.</li>
                  <li>Enhanced the <code>.doit()</code> method to return an equivalent <code>StateSpace</code> object when involved in such connections.</li>
                </ul>
              </Paragraph>
              <Title>
                Implementation
              </Title>
              <Paragraph className='par'>
                <Paragraph className='par'>To address this gap, I've introduced two new methods in the <code>StateSpace</code> class:</Paragraph>
                <ol>
                  <li><strong>Integration with <code>TransferFunction</code> and <code>TransferFunctionMatrix</code>:</strong></li>
                  <ul>
                    <li>Modified the underlying algorithms to handle <code>StateSpace</code> objects alongside <code>TransferFunction</code> and <code>TransferFunctionMatrix</code> in parallel connections.</li>
                    <li>Developed methods to convert mixed configurations into a unified <code>StateSpace</code> representation.</li>
                  </ul>
                  <li><strong>Enhanced <code>doit()</code> Method:</strong></li>
                  <ul>
                    <li>Improved the <code>.doit()</code> method to automatically convert parallel configurations involving <code>StateSpace</code> objects into a single <code>StateSpace</code> object.</li>
                  </ul>
                </ol>
              </Paragraph>
              <Title>
                Resources Used
              </Title>
              <Paragraph className='par'>
                To ensure the accuracy and robustness of the new methods introduced in the <code>StateSpace</code> class, I utilized various educational resources for testing and validation:
                <ol>
                  <li><strong>Doctest Examples:</strong></li>
                  <ul>
                    <li>Referenced examples from <a href="https://web.mit.edu/2.14/www/Handouts/StateSpaceResponse.pdf">MIT's State Space Response Handout</a> to verify the correctness of state and output vectors.</li>
                  </ul>
                  <li><strong>Unit Tests:</strong></li>
                  <ul>
                    <li>Used resources from <a href="https://lpsa.swarthmore.edu/Transient/TransMethSS.html">Swarthmore College's Transient Response Methods</a> for Test 1, ensuring accurate transient response behavior.</li>
                    <li>Verified functionality with Example 11 from <a href="https://web.mit.edu/2.14/www/Handouts/StateSpaceResponse.pdf">MIT's State Space Response Handout</a> for Test 2, confirming the integration's effectiveness.</li>
                  </ul>
                </ol>
              </Paragraph>
              <Title>
                Pull Requests
              </Title>
              <Paragraph className='par'>
                <a href='https://github.com/sympy/sympy/pull/26718' className='text-success'><FaCodePullRequest /> (Open) Added support of using StateSpace with Parallel and MIMOParallel.</a>
                <div className='gap-3'>
                  <Divider />
                </div>
                Abhishek Kumar
                <br />
                GSoC Contributor
              </Paragraph>
            </Typography>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Week3