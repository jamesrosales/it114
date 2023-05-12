import React from "react";
import { Col, Row, Spin, Typography } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  const { isLoading } = useAuthContext();

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <div>
        <Row gutter={[16, 16]}>
          <Col span={24} style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "600%" }}>
              <b>MISS MINUTES</b>
            </h1>
            <h1 style={{ fontSize: "150%" }}>THE FASTEST AND SIMPLEST</h1>
            <h1 style={{ fontSize: "150%" }}>TASK MANAGER WEBSITE</h1>
            <Typography.Paragraph className="form_help_text">
              New to Miss Minutes? <Link to="/signup">Sign Up</Link>
            </Typography.Paragraph>
          </Col>
        </Row>
      <Footer />
    </div>
  );
};

export default Home;
