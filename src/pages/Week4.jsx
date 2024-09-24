import React from 'react';
import Navbar from '../Navbar';
import Anchors from '../assets/Anchors';
import { Divider, Typography } from 'antd';
import Footer from '../assets/Footer';
import { FaCodePullRequest } from 'react-icons/fa6';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
const { Title, Paragraph } = Typography;

const Week4 = () => {
  const stateEquation = `\\dot{x}(t) = A x(t) + B u(t)`;
  const outputEquation = `y(t) = C x(t) + D u(t)`;
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
                Week 4 : Adding support of symbolic matrices to <code>dsolve()</code> in{' '}
                <code>StateSpace</code>.
              </Title>
              <Paragraph className="par">
                During the fourth week of my Google Summer of Code (GSOC) journey, In this week I
                worked on finding symbolic solutions of StateSpace equations.
                <p>State Equation:</p>
                <BlockMath math={stateEquation} />
                <p>Output Equation:</p>
                <BlockMath math={outputEquation} />
              </Paragraph>
              <Title>Implementation</Title>
              <Paragraph className="par">
                <h2>Solving State Space Equations in SymPy</h2>
                <p>
                  The <code>dsolve</code> method in SymPy solves state space equations of the form:
                </p>

                <BlockMath math={outputEquation} />
                <p>
                  Here's a step-by-step breakdown of the <code>dsolve</code> method:
                </p>
                <ul>
                  <li>
                    <strong>Validate Input Parameters:</strong>
                    <ul>
                      <li>
                        Check if <code>var</code> is a Symbol.
                      </li>
                      <li>
                        Set default <code>initial_conditions</code> and <code>input_vector</code> if
                        not provided.
                      </li>
                      <li>
                        Validate the dimensions of <code>initial_conditions</code> and{' '}
                        <code>input_vector</code>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Solve the State Equation:</strong>
                    <ul>
                      <li>
                        Use <code>linodesolve</code> to solve the state equation{' '}
                        <InlineMath math={outputEquation} />.
                      </li>
                      <li>Convert the solution to a matrix form.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Apply Initial Conditions:</strong>
                    <ul>
                      <li>
                        Evaluate the solution at <code>t = 0</code>.
                      </li>
                      <li>
                        Identify and solve for the dummy symbols representing initial conditions.
                      </li>
                      <li>Replace dummy symbols in the solution with solved values.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Compute Output Vector:</strong>
                    <ul>
                      <li>
                        Compute the output vector <code>y</code> using the state vector solution and
                        the input vector.
                      </li>
                    </ul>
                  </li>
                </ul>
                <p>
                  This method ensures accurate solutions to state space problems, handling symbolic
                  matrices efficiently.
                </p>
              </Paragraph>
              <Title>Pull Requests</Title>
              <Paragraph className="par">
                <a href="https://github.com/sympy/sympy/pull/26736" className="text-success">
                  <FaCodePullRequest /> (Merged) Changed the output_vector to dsolve and added
                  support of symbolic matrices.
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

export default Week4;
