/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Col, Row, Spin } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import Footer from "../Footer/Footer";

const Homeu = () => {
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
          </Col>
        </Row>
      <Footer />
    </div>
  );
};

export default Homeu;
