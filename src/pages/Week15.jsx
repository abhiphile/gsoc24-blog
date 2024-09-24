import { Divider, Image, Typography } from 'antd';
import { FaCodePullRequest } from 'react-icons/fa6';
import Navbar from '../Navbar';
import Anchors from '../assets/Anchors';
import Footer from '../assets/Footer';
const { Title, Paragraph } = Typography;
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Week15 = () => {
  const code1 = `
  def nichols_plot_expr(system):
    """Function to get the expression for Nichols plot."""
    s = system.var
    w = Dummy('w', real=True)
    sys_expr = system.to_expr()
    H_jw = sys_expr.subs(s, I*w)
    mag_expr = Abs(H_jw)
    mag_dB_expr = 20*log(mag_expr, 10)
    phase_expr = arg(H_jw)
    phase_deg_expr = deg(phase_expr)
    return mag_dB_expr, phase_deg_expr, w
`;
  const code2 = `
  def nichols_plot(system, initial_omega=0.01, final_omega=100, show=True, color='b', **kwargs):
    _check_system(system)
    magnitude_dB_expr, phase_deg_expr, w = nichols_plot_expr(system)
    w_values = [(w, initial_omega, final_omega)]
    p = plot_parametric(
        (phase_deg_expr, magnitude_dB_expr),
        *w_values,
        show=False,
        line_color=color,
        title=f'Nichols Plot of {latex(system)}$',
        xlabel='Phase [deg]',
        ylabel='Magnitude [dB]',
        size=(6,5),
        kwargs=kwargs)
    if show:
        p.show()
        return
`;
const [readmeContent, setReadmeContent] = useState("");
useEffect(() => {
  // Fetch the raw content of the README.md file
  fetch(
    "https://raw.githubusercontent.com/abhiphile/GSoC-2024-SymPy-Final-Report/refs/heads/main/README.md"
  )
    .then((response) => response.text())
    .then((data) => setReadmeContent(data))
    .catch((error) => console.error("Error fetching README:", error));
}, []);

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
              <Title>Week 15: Added Nichols plot to control [Last Week]</Title>
              <Paragraph className="par">
                Due to recent travel and commitments related to college placements, I was unable to
                complete all the expected work within the given timeframe. After discussing this
                with my mentor, he suggested that I request an extension. I also feel that an
                extension would allow me to complete the remaining work without added stress, so I
                would like to request a 4-week extension to ensure I can deliver quality results.
                <Divider/>
                This week, I focused on developing a Python function to generate Nichols plot for
                continuous-time Single-Input Single-Output (SISO) Linear Time-Invariant (LTI)
                systems. A Nichols Chart is a graphical representation used to analyze and design
                feedback control systems by depicting stability and frequency responses. The chart
                works by transforming complex frequency responses into a simpler gain phase plane,
                making it easier to analyze system behavior.
                <br />
                The <code>nichols_plot</code> function I developed takes a transfer function and
                generates the plot over a specified frequency range.
                <br />
                One of the challenges I encountered was ensuring that the function could handle a
                wide range of systems and accurately plot the frequency response. By using the
                plot_parametric function, I was able to plot phase and magnitude plot easily. Below
                is my implemented code.
                <Divider />
                <code>nichols_plot_expr</code>
                <pre>{code1}</pre>
                <code>nichols_plot</code>
                <pre>{code2}</pre>
                <Title level={3}>Nichols plot Example</Title>
                <div className="container overflow-hidden font-italic text-center align-items-center justify-content-center flex-column">
                  <Image
                    src="https://github-production-user-asset-6210df.s3.amazonaws.com/140839576/367624983-e494972c-4dc6-4685-9a78-01cb157bd5ca.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240924%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240924T104752Z&X-Amz-Expires=300&X-Amz-Signature=d7d8ecda9c6c94cd76fcc6c3491e202e3ecca8859e8b57d5d87e9d72d90eee8e&X-Amz-SignedHeaders=host"
                    height={500}
                    width={550}
                    className="text-center flex-column d-flex justify-content-center"
                  />
                  <div className="font-italic text-center">Fig - Nichols plot of 1.5 / (s^2 + 14s + 40.02) </div>
                </div>
              </Paragraph>
              <Title level={1}>The Final Report</Title>
              <div className="border rounded p-3 m-2 text-md border-success">
              <ReactMarkdown children={readmeContent}/>
              </div>
              
              <Title>Pull Requests</Title>
              <Paragraph className="par">
                <a href="https://raw.githubusercontent.com/abhiphile/gsoc24-blog/refs/heads/main/public/nichols.png" className="text-success">
                  <FaCodePullRequest /> (Open) Added nichols_plot to control plots.
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
