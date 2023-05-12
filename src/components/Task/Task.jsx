/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Card, Col, Form, Input, message, Row, Spin, Table } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { getToken } from "../../helpers";

const Task = () => {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();

  const [formValues, setFormValues] = useState({
    title_username: user?.title_username,
    description_username: user?.description_username,
    date_username: user?.date_username,
  });  

  const handleTaskUpdate = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
  
      setUser(responseData);
      setFormValues({
        title_username: responseData?.title_username,
        description_username: responseData?.description_username,
        date_username: responseData?.date_username,
      });
      message.success("Data saved successfully!");
    } catch (error) {
      console.error(error);
      message.error("Did not saved!");
    } finally {
      setLoading(false);
    }
  };
  
  if (isLoading) {
    return <Spin size="large" />;
  }

  const columns = [
    {
      title: "Task Date",
      dataIndex: "date_username",
    },
    {
      title: "Task Title",
      dataIndex: "title_username",
    },
    {
      title: "Task Description",
      dataIndex: "description_username",
    },
  ];

  const dataSource = [
    {
      key: "1",
      date_username: user?.date_username,
      title_username: user?.title_username,
      description_username: user?.description_username,
    },
  ];

  return (
    <Card className="profile_page_card">
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        bordered
      />
      <Form
        layout="vertical"
        initialValues={{
          title_username: user?.title_username,
          description_username: user?.description_username,
          date_username: user?.date_username,
        }}
        onFinish={handleTaskUpdate}
      >
        <Row gutter={[16, 16]}>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Task Date"
              name="date_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input type="date" placeholder="Task Date" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Task Title"
              name="title_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Task Title" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Task Description"
              name="description_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Task Description" />
            </Form.Item>
          </Col>
        </Row>
        <Button
          className="profile_save_btn"
          htmlType="submit"
          type="primary"
          size="large"
        >
          {loading ? (
            <>
              <Spin size="small" /> Saving
            </>
          ) : (
            "Save"
          )}
        </Button>
      </Form>
    </Card>
  );
};

export default Task