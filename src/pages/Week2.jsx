import React from 'react';
import Navbar from '../Navbar';
import Anchors from '../assets/Anchors';
import { Divider, Typography } from 'antd';
import Footer from '../assets/Footer';
import { FaCodePullRequest } from 'react-icons/fa6';
const { Title, Paragraph, Text, Link } = Typography;

const Week2 = () => {
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
                Week 2 : Enhancing SymPy’s <code>StateSpace</code> Class
              </Title>
              <Paragraph className="par">
                Hello everyone! As part of my Google Summer of Code (GSoC) journey, I'm thrilled to
                share the progress of my Week 2 project. I've been working on enhancing the
                StateSpace class in SymPy by adding methods to calculate state and output vectors.
                This new functionality aims to streamline the process of solving state-space
                equations using SymPy's powerful ODE module. Let me walk you through what I've
                accomplished so far and how it can benefit users working with control systems.
              </Paragraph>
              <Title>The Challenge</Title>
              <Paragraph className="par">
                While the <code>StateSpace</code> class is a robust tool, it previously lacked
                built-in methods to directly compute state and output vectors.
              </Paragraph>
              <Title>My Contribution</Title>
              <Paragraph className="par">
                <Paragraph className="par">
                  To address this gap, I've introduced two new methods in the{' '}
                  <code>StateSpace</code> class:
                </Paragraph>
                <ol>
                  <li>
                    <strong>State Vector Calculation:</strong> The state vector is a solution to the
                    differential equation <code>ẋ = Ax + Bu</code>, where <code>A</code> and{' '}
                    <code>B</code> are matrices representing the system dynamics and input
                    influence, respectively. By leveraging the <code>linodesolve()</code> function
                    from SymPy’s ODE module, I implemented a method to solve this equation
                    efficiently.
                  </li>
                  <li>
                    <strong>Output Vector Calculation:</strong> The output vector is derived from
                    the equation <code>y = Cx + Du</code>, where <code>C</code> and <code>D</code>{' '}
                    are matrices that map the state and input vectors to the output. The new method
                    utilizes the previously computed state vector to calculate the output vector
                    seamlessly.
                  </li>
                </ol>
              </Paragraph>
              <Title>Pull Requests</Title>
              <Paragraph className="par">
                <a href="https://github.com/sympy/sympy/pull/26685" className="text-success">
                  <FaCodePullRequest /> ( Merged ) Added methods to StateSpace class to calculate
                  state and output vectors.
                </a>
                <div className="gap-3">
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
  );
};

export default Week2;
