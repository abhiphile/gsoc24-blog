import React from 'react';
import Navbar from '../Navbar';
import Anchors from '../assets/Anchors';
import { Divider, Typography } from 'antd';
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
                Week 5: Added tests to test the use of symbolic matrices in <code>StateSpace</code>{' '}
                methods.
              </Title>
              <Paragraph className="par">
                During the fifth week of my Google Summer of Code (GSoC) journey, I focused on
                expanding the test suite for the symbolic capabilities of the{' '}
                <code>StateSpace</code> methods. This week’s work involved adding comprehensive
                tests to ensure the correct handling and functionality of symbolic matrices within
                these methods.
              </Paragraph>
              <Title>Implementation</Title>
              <Paragraph className="par">
                <h2>Enhancing Test Coverage for State Space Methods</h2>
                <p>
                  The following <code>StateSpace</code> methods were tested using symbolic matrices:
                </p>
                <ul>
                  <li>
                    <code>num_inputs</code>
                  </li>
                  <li>
                    <code>num_outputs</code>
                  </li>
                  <li>
                    <code>num_states</code>
                  </li>
                  <li>
                    <code>state_matrix</code>
                  </li>
                  <li>
                    <code>output_matrix</code>
                  </li>
                  <li>
                    <code>input_matrix</code>
                  </li>
                  <li>
                    <code>feedforward_matrix</code>
                  </li>
                  <li>
                    <code>observablity_matrix()</code>
                  </li>
                  <li>
                    <code>observable_subspace()</code>
                  </li>
                  <li>
                    <code>controllability_matrix()</code>
                  </li>
                  <li>
                    <code>controllable_subspace()</code>
                  </li>
                  <li>
                    <code>append()</code>
                  </li>
                  <li>
                    <code>_eval_rewrite_as_TransferFunction()</code>
                  </li>
                </ul>
                <p>
                  These tests ensure that the <code>StateSpace</code> methods handle symbolic
                  matrices accurately and efficiently, contributing to the robustness of the
                  symbolic computation capabilities in SymPy.
                </p>
              </Paragraph>
              <Title>Pull Requests</Title>
              <Paragraph className="par">
                <a href="https://github.com/sympy/sympy/pull/26758" className="text-success">
                  <FaCodePullRequest /> (Merged) Added tests using symbolic matrices in StateSpace.
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

export default Week5;
