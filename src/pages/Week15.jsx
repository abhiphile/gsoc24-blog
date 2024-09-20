import { Divider, Image, Typography } from "antd";
import { FaCodePullRequest } from "react-icons/fa6";
import Navbar from "../Navbar";
import Anchors from "../assets/Anchors";
import Footer from "../assets/Footer";
const { Title, Paragraph } = Typography;

const Week15 = () => {
const code1 = `
  
`
const code2 = `

`
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
                Week 11-12: Adding example problems related to StateSpace
              </Title>
              <Paragraph className="par">
                This week, I focused on developing a Python function to generate Nyquist plots for continuous-time Single-Input Single-Output (SISO) Linear Time-Invariant (LTI) systems. A Nyquist plot is a powerful tool used in control theory to assess the stability of a system.
                <br/>
                The nyquist_plot function I developed takes a transfer function and generates the Nyquist plot over a specified frequency range. I included customization options for the plot's color, grid visibility, and whether or not to display the plot immediately.
                <br/>
                One of the challenges I encountered was ensuring that the function could handle a wide range of systems and accurately plot the frequency response. By using the plot_parametric function, I was able to plot the real and imaginary components of the system's response, along with its mirror image, to create a comprehensive Nyquist plot.
                <br/>
                This function will be a useful tool for anyone working with control systems, as it provides a visual representation of the system's stability across a range of frequencies.
                <br/>
                Next week, I plan to work on adding problems related to <code>StateSpace</code> and <code>PIDController.</code>
                I've used the helper function <code>_get_nyquist_expr()</code> and used it to make the nyquist plot.
                <pre>{code1}</pre>
                <code>nyquist_plot function</code>
                <pre>{code2}</pre>

              </Paragraph>
              <Title>Pull Requests</Title>
              <Paragraph className="par">
                <a
                  href="https://github.com/sympy/sympy/pull/26928"
                  className="text-success"
                >
                  <FaCodePullRequest /> (Draft) Added nyquist plot to control plots.
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

export default Week15;
