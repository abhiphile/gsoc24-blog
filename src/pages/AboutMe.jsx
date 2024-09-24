import React from 'react';
import Navbar from '../Navbar';
import Anchors from '../assets/Anchors';
import { Divider, Typography, Image } from 'antd';
import Footer from '../assets/Footer';
const { Title, Paragraph, Text, Link } = Typography;

const AboutMe = () => {
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
              <Title>About Me</Title>
              <Divider />
              <Paragraph className="par">
                Hello there! I’m Abhishek Kumar, a third-year student at the National Institute of
                Technology, Delhi, pursuing a B.Tech. in Electronics and Communication Engineering
                with a minor in Artificial Intelligence and Machine Learning.
              </Paragraph>
              <Title>The Academic Odyssey</Title>
              <Divider />
              <Paragraph className="par">
                My academic journey at NIT Delhi has been nothing short of exhilarating. Over the
                past three years, I've immersed myself in a wide array of subjects, from Advanced
                Calculus and Linear Algebra to Control Theory and Signals & Systems. These courses
                have not only deepened my understanding of physics and mathematics but also
                sharpened my skills in problem-solving and programming.
                <br />
                My earliest encounter with programming was back in the 8th grade when I stumbled
                upon a Python book online. Intrigued, I taught myself the basics and soon found
                myself creating simple games. This early fascination blossomed into a full-fledged
                passion once I entered college. Alongside my friends, I delved into coding
                challenges on various platforms.
              </Paragraph>
              <div className="container overflow-hidden font-italic text-center align-items-center justify-content-center flex-column">
                <Image
                  src="https://qph.cf2.quoracdn.net/main-qimg-117330dced8608d341e13dc03c0a7e56"
                  height={500}
                  width={550}
                  className="text-center flex-column d-flex justify-content-center"
                />
                <div className="font-italic text-center">
                  Fig - Image of NIT Delhi Admin Building.
                </div>
              </div>

              <Title>Hobbies and Personal Interests</Title>
              <Divider />
              <Paragraph className="par">
                When I’m not buried in textbooks or coding, you’ll often find me indulging in my
                favorite hobbies. I love playing chess and badminton – two games that offer both
                strategic and physical challenges. Music is another passion of mine, providing a
                perfect escape from the rigors of academic life. Additionally, I enjoy sketching and
                reading, activities that allow me to express my creativity and unwind.
              </Paragraph>

              <Title>Looking Ahead</Title>
              <Divider />
              <Paragraph className="par">
                As I continue my journey at NIT Delhi, I’m excited about the endless possibilities
                the future holds. The blend of technical knowledge and creative interests I've
                cultivated so far has prepared me for a dynamic career in electronics,
                communication, and artificial intelligence. I look forward to contributing to these
                fields and making a meaningful impact.
                <br />
                Thanks for joining me on this journey – stay tuned for more updates from my
                adventures in engineering and beyond!
              </Paragraph>
            </Typography>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutMe;
