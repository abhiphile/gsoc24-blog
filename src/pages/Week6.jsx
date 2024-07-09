import React from 'react'
import Navbar from '../Navbar'
import Anchors from '../assets/Anchors'
import { Divider, Image, Typography } from 'antd';
import Footer from '../assets/Footer';
import { FaCodePullRequest } from 'react-icons/fa6';
const { Title, Paragraph } = Typography;

const Week5 = () => {
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
                Week 5: Added PIDController class to control module and a method to calculate the bandwidth of <code>TransferFunction</code>.
              </Title>
              <Paragraph className='par'>
                During the fifth week of my Google Summer of Code (GSoC) journey, I introduced significant enhancements to the control module in SymPy. This week’s work included the addition of a new class for PID controllers and a method to compute the bandwidth of transfer functions.
                <p>PID Controller:</p>
                <Image></Image>
                <code>PIDController</code> is a class designed to facilitate the creation and manipulation of PID controllers, which are essential components in control systems. The parameters for the PID controller include:
                <ul>
                  <li><code>kp</code>: Proportional gain (defaults to 0 if not provided).</li>
                  <li><code>ki</code>: Integral gain (defaults to 0 if not provided).</li>
                  <li><code>kd</code>: Derivative gain (defaults to 0 if not provided).</li>
                  <li><code>tf</code>: Derivative filter time constant (defaults to 0 if not provided).</li>
                  <li><code>var</code>: The complex frequency variable (defaults to <code>s</code> if not provided).</li>
                </ul>
                <p>Bandwidth Calculation:</p>
                A new method, <code>bandwidth</code>, has been added to the <code>TransferFunction</code> class. This method calculates the bandwidth of a given transfer function, providing a valuable tool for analyzing the frequency response of control systems.
              </Paragraph>
              <Title>
                Implementation
              </Title>
              <Paragraph className='par'>
                <h2>Enhancements in the Control Module</h2>
                <p>The following features were implemented and tested:</p>
                <ul>
                  <li>
                    <strong>PIDController Class:</strong>
                    <ul>
                      <li>Introduced to allow for the creation of PID controllers with customizable parameters.</li>
                      <li>Supports proportional, integral, and derivative gains, as well as a derivative filter time constant.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Bandwidth Calculation:</strong>
                    <ul>
                      <li>Added <code>bandwidth</code> method to the <code>TransferFunction</code> class.</li>
                      <li>Enables the calculation of the bandwidth of transfer functions, aiding in the analysis of control systems.</li>
                    </ul>
                  </li>
                </ul>
                <p>These enhancements are aimed at improving the functionality and analysis capabilities of the control module in SymPy, making it more robust and user-friendly.</p>
              </Paragraph>
              <Title>
                Pull Requests
              </Title>
              <Paragraph className='par'>
                <a href='https://github.com/sympy/sympy/pull/26781' className='text-success'><FaCodePullRequest /> (Open) Added PIDController class to control module and a method to calculate the bandwidth of TransferFunction.</a>
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

export default Week5