import React from 'react'
import Navbar from '../Navbar'
import Anchors from '../assets/Anchors'
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Week3 = () => {
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
                Week 3
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

export default Week3