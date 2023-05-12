/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Col, Row, Spin } from "antd";
import { useAuthContext } from "../../context/AuthContext";

const About = () => {
  const { isLoading } = useAuthContext();

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <Card className="profile_page_card">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <p style={{ fontSize: '110%' }}>
            <b>Miss Minutes</b> is a task manager website that provides a fast and simple way to manage your tasks and stay organized. It is designed to be easy to use and requires no installation or download. Miss Minutes is accessible from any device with an internet connection, making it a convenient tool for people on the go. One of the key features of Miss Minutes is its simplicity, which makes the website more convenient for all users.
          </p>
        </Col>
      </Row>
    </Card>
  );
};

export default About;
