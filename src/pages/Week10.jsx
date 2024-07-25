import Navbar from "../Navbar";
import Anchors from "../assets/Anchors";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const WEeek10 = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-2 col-xs-12">
          <Anchors />
        </div>
        <div className="col m-2">
          <div className="m-2 border rounded p-2">
            <Typography>
              <Title>Week 10</Title>
              <Paragraph className="par">Upcoming...</Paragraph>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default WEeek10;
