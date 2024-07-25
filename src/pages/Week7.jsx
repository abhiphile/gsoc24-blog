import { Divider, Image, Typography } from "antd";
import { FaCodePullRequest } from "react-icons/fa6";
import Navbar from "../Navbar";
import Anchors from "../assets/Anchors";
import Footer from "../assets/Footer";
const { Title, Paragraph } = Typography;

const Week7 = () => {
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
                Week 7 & 8: Separation of PRs for PIDController and Bandwidth
                Calculation
              </Title>
              <Paragraph className="par">
                Unfortunately, I was not able to contribute as much as I had
                hoped during Week 7 and Week 8 due to some personal reasons.
                However, I have continued to plan and prepare for the next
                stages of my project. My focus for the upcoming weeks includes
                working on Feedback interconnection and plots. During the
                seventh and eighth weeks of my Google Summer of Code (GSoC)
                journey, I focused on refining and separating my previous work
                into two distinct pull requests (PRs). This effort aimed to
                improve the clarity and manageability of the enhancements I made
                to the control module in SymPy.
              </Paragraph>
              <Title>Separation into Two PRs</Title>
              <Paragraph className="par">
                Initially, I had combined the introduction of the{" "}
                <code>PIDController</code> class and the <code>bandwidth</code>{" "}
                method into a single PR. However, to facilitate a smoother
                review process and enhance the maintainability of the code, I
                decided to split these into two separate PRs:
                <ul>
                  <li>
                    <strong>PR for PIDController:</strong> This PR focuses
                    solely on the introduction of the <code>PIDController</code>{" "}
                    class, which is designed to facilitate the creation and
                    manipulation of PID controllers. The parameters for the PID
                    controller include:
                    <ul>
                      <li>
                        <code>kp</code>: Proportional gain (defaults to 0 if not
                        provided).
                      </li>
                      <li>
                        <code>ki</code>: Integral gain (defaults to 0 if not
                        provided).
                      </li>
                      <li>
                        <code>kd</code>: Derivative gain (defaults to 0 if not
                        provided).
                      </li>
                      <li>
                        <code>tf</code>: Derivative filter time constant
                        (defaults to 0 if not provided).
                      </li>
                      <li>
                        <code>var</code>: The complex frequency variable
                        (defaults to <code>s</code> if not provided).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>PR for Bandwidth Calculation:</strong> This PR is
                    dedicated to the addition of the <code>bandwidth</code>{" "}
                    method to the <code>TransferFunction</code> class. This
                    method calculates the bandwidth of a given transfer
                    function, providing a valuable tool for analyzing the
                    frequency response of control systems.
                  </li>
                </ul>
              </Paragraph>
              <Title>Pull Requests</Title>
              <Paragraph className="par">
                <a
                  href="https://github.com/sympy/sympy/pull/26781"
                  className="text-success"
                >
                  <FaCodePullRequest /> (Open) Added PIDController class to
                  control module.
                </a>
                <br />
                <a
                  href="https://github.com/sympy/sympy/pull/26836"
                  className="text-success"
                >
                  <FaCodePullRequest /> (Open) Added method to calculate the
                  bandwidth of TransferFunction.
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

export default Week7;
