// App.js
import React, { Children } from 'react';
import Navbar from './Navbar';
import Anchors from './assets/Anchors';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;
import { Timeline } from "antd";


const App = () => {
  const items = [
    {
      children: (
        <>
          <h3 className="text-success">Community Building Period.</h3>
        </>
      ),
      color: 'green',
    },
    {
      children: (
        <>
          <h3 className='text-primary'>Phase 1</h3>
          <p>Adding Series, Parallel and Feedback Interconnection between two StateSpace classes.</p>
        </>),
      color: 'blue'
    },
    {
      children: (
        <>
          <h3 className="text-primary">Phase 2</h3>
          <p>Adding a symbolic solver to find the solution of the state vector x by using ODE Module.</p>
          <p>Adding a method to get6 the output vector of a given StateSpace object.</p>
          <p>Adding problems related to StateSpace class.</p>
        </>
      ),
      color: 'blue'
    },
    {
      children: (
        <>
          <h3 className="text-primary">Phase 3</h3>
          <p>Adding PID Controller to the control Module.</p>
          <p>Implementing a bandwidth function for TransferFunction class.</p>
        </>
      ),
      color: 'blue'
    },
    {
      children: (
        <>
          <h3 className="text-primary">Phase 4</h3>
          <p>This step will primarily refactor older control plots to use symbolic methods rather than numerical ones. Control system plots like Pole Zero, Step Response, Impulse Response, Ramp Response, Bode Magnitude, and Bode Phase use numerical methods to plot the output.
          </p>
          <p>Add newer plots in the control_plots file, such as Root Locus, Nichols, and Nyquist plots.
          </p>
        </>),
      color: 'blue'
    },
    {
      children: (
        <>
          <h3 className='text-danger'>End of GSoC coding period.</h3>
        </>
      ),
      color: 'red'
    }
  ];
  return <>
    <Navbar />
    <div className="row">
      <div className="col-md-2 col-xs-12">
        <Anchors />
      </div>
      <div className="col m-2">
        <div className="my-3 border rounded p-5">
          <Typography>
            <Title>
              Welcome to My Journey with GSoC 2024!
            </Title>
            <Divider />
            <Paragraph className='par'>
              Hello, dear readers!
              <br />
              I'm beyond excited to share some incredible news with you all my project on "Improving and Extending the Functionalities of the Control Module" has been selected for Google Summer of Code 2024, and I’ll be working with the SymPy repository.
              This blog will be your front-row seat to my GSoC adventure. From the highs to the challenges, I’ll be documenting every step of this thrilling journey. You'll get an insider’s view of my experiences, the lessons I learn, and the progress I make on my project.
              <br />
              Expect to find regular updates and detailed insights. Whether you’re a fellow GSoC participant, a programming enthusiast, or just curious about what GSoC entails, there’s something here for you.
              Feel free to check out the official announcement and the complete list of selected students <a href="https://summerofcode.withgoogle.com/programs/2024/organizations/sympy">here.</a>
              <br />
              Stay tuned, and let’s make this journey unforgettable!
              <br />
              <p className="font-weight-bold">Abhishek Kumar</p>
              <Divider />
              <Title level={2}>Project Details</Title>
            </Paragraph>
          </Typography>
          <Timeline items={items} />
          <Typography>
            <Paragraph>More details on the project can be found on my proposal for this project <a href="https://docs.google.com/document/d/1dmm7goYEyVcVkXrpwJm84yp6BmwfKrLB9rntZDA7R8g/edit?usp=sharing">here.</a></Paragraph>
          </Typography>
          <hr />
        </div>
      </div>
    </div>
  </>;
};

export default App;
