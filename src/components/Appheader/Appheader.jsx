/* eslint-disable no-unused-vars */
import { Button, Space } from "antd";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { UserOutlined } from "@ant-design/icons";

const AppHeader = () => {
  const { user } = useAuthContext();

  return (
    <Space className="header_space">
      <Button className="header_space_brand" href="/" type="link">
        <CgWebsite size={64} />
      </Button>
      <Space className="auth_buttons">
        {user ? (
          <>
          <Button className="auth_button_login" href="/homeu" type="link">
              HOME
            </Button>
            <Button className="auth_button_login" href="/task" type="link">
              TASK
            </Button>
            <Button className="auth_button_login" href="/about" type="link">
              ABOUT
            </Button>
            <Button className="auth_button_login" href="/profile" type="link" icon={<UserOutlined />}>
            </Button>
          </>
        ) : (
          <>
            <Button className="auth_button_login" href="/Home" type="link">
              HOME
            </Button>
            <Button className="auth_button_login" href="/about" type="link">
              ABOUT
            </Button>
            <Button className="auth_button_login" href="/signin" type="link">
              LOGIN
            </Button>
          </>
        )}
      </Space>
    </Space>
  );
};

export default AppHeader;
