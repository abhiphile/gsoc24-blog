import React from 'react'
import Navbar from '../Navbar'
import Anchors from '../assets/Anchors'
import { Divider, Typography } from 'antd';
import Footer from '../assets/Footer';
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
                Week 2
              </Title>
              <Paragraph className='par'>
                This is par
              </Paragraph>
            </Typography>
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Week2