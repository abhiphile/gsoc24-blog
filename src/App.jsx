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
          <p>dd</p>
          <p>dd</p>
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
              Welcome to my Blog on Journey with GSoC 2024.
            </Title>
            <Divider />
            <Paragraph className='par'>
              I'm thrilled to announce that my project on Improving and Extending the functionalities of the Control Module have been selected for Google Summer of Code 2024 with SymPy.
              <br />
              This blog will provide a detailed account of my journey with GSoC 2024. I will be sharing my experiences, learnings, and the progress of my project.
              <br />
              You can find the official announcement and the list of selected students <a href='https://summerofcode.withgoogle.com/programs/2024/organizations/sympy' target='_blank'>here.</a>
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
