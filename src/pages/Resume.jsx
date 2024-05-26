import React from 'react'
import Anchors from '../assets/Anchors'
import { Divider, Typography } from 'antd';
import Navbar from '../Navbar'
import Footer from '../assets/Footer';
const { Title, Paragraph, Text, Link } = Typography;

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-2 col-xs-12">
          <Anchors />
        </div>
        <div className="col m-2">
          <div className="m-2 border rounded p-4">
            <Title level={4}>
              My Resume
            </Title>
            <iframe src="https://drive.google.com/file/d/1u3oHT-KgdS-1M_2uMCoe1IgsMHFimZxw/preview" allow="autoplay" width="90%" height="1000"></iframe>
            <Paragraph>
              Link to my <a href='https://drive.google.com/file/d/1u3oHT-KgdS-1M_2uMCoe1IgsMHFimZxw/view'>Resume</a> .
            </Paragraph>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Resume