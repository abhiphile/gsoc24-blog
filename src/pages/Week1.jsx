import React from 'react';
import Navbar from '../Navbar';
import Anchors from '../assets/Anchors';
import { Divider, Typography } from 'antd';
import Footer from '../assets/Footer';
import { FaCodePullRequest } from 'react-icons/fa6';
const { Title, Paragraph } = Typography;

const Week1 = () => {
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
              <Title>Week 1 : The beginning.</Title>
              <Divider />
              <Paragraph className="par">
                When I first received the confirmation that I had been accepted into Google Summer
                of Code (GSoC), I was ecstatic. It felt like a monumental achievement, but little
                did I know the real adventure was just beginning. As I dove into my first week, I
                was met with excitement, challenges, and a sense of accomplishment.
                <Title>Getting Started</Title>
                Shortly after my initial meeting with my mentor, Nikhil Maan, I plunged into my
                first task: working on the series interconnection of state space objects. This was a
                project I had been passionate about for a while, and now I had the opportunity to
                contribute meaningfully to it. My primary challenge was figuring out how to make
                everything work effectively. By the end of Tuesday, I had a clear understanding of
                how to proceed.
                <Title>Coding</Title>
                Integrating my work with the previously implemented classes proved to be quite the
                challenge. Understanding the entire codebase and its intricate workings was no small
                feat. After thoroughly analyzing the existing code, I made some necessary tweaks to
                ensure compatibility without causing other test cases to fail. It was a delicate
                balance, but I was determined to make it work seamlessly.
                <Title>Writing Tests and Creating Pull Requests</Title>
                Now coming to my favourite part of this ! Creating pull Requests
                <br />
                I've created the following pull requests in this week :
                <br />
                <ol>
                  <li>
                    <a href="https://github.com/sympy/sympy/pull/26647" className="text-success">
                      <FaCodePullRequest /> ( Merged ) Refactored the Series and MIMOSeries to
                      support StateSpace connection.
                    </a>
                  </li>
                </ol>
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

export default Week1;
