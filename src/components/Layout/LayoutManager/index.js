import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Dropdown } from "antd";
import classNames from "classnames/bind";
import style from "./LayoutManager.module.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const colorOptions = [
  { name: "#F4CED9", value: "#F4CED9" },
  { name: "#551c3b", value: "#551c3b" },
  { name: "#3e2069", value: "#3e2069" },
  { name: "#13a8a8", value: "#13a8a8" },
  { name: "#0B698B", value: "#0B698B" },
  { name: "#9CD3D8", value: "#9CD3D8" },
];

const getTextColor = (backgroundColor) => {
  const darkColors = ["#113536", "#0B698B", "#551c3b", "#3e2069"];
  return darkColors.includes(backgroundColor) ? "#fff" : "#000";
};

function LayoutManager({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#F4CED9");
  const [selectedKey, setSelectedKey] = useState(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleMenuItemClick = (key) => {
    setSelectedKey(key);
  };

  const textColor = getTextColor(selectedColor);

  const handleMenuItemClickWithNavigation = (key) => {
    handleMenuItemClick(key);
    if (key === "1") {
      navigate("/dashboard");
    }
  };

  return (
    <Layout className={cx("wrapper")}>
      <Sider
        className={cx("wrapper-sider")}
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: selectedColor }}
      >
        <div className={cx("logo")}>
          <img src="https://picsum.photos/200/300" alt="logo" />
          {!collapsed && <span>Name shop</span>}
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: selectedColor }}
          popupStyle={{ backgroundColor: selectedColor }}
        >
          <Menu.Item
            key="1"
            icon={<DashboardOutlined />}
            className={cx("custom-menu-item", {
              selected: selectedKey === "1",
            })}
            onClick={() => handleMenuItemClickWithNavigation("1")}
            style={{ color: textColor }}
          >
            Payroll
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<UnorderedListOutlined style={{ color: textColor }} />}
            title={<span style={{ color: textColor }}>Account</span>}
            popupStyle={{ backgroundColor: selectedColor }}
            style={{ backgroundColor: collapsed ? selectedColor : undefined }}
          >
            <Menu.Item
              key="2"
              className={cx("custom-menu-item", {
                selected: selectedKey === "2",
                collapsed: collapsed,
              })}
              onClick={() => handleMenuItemClick("3")}
              style={{ color: collapsed ? "#000" : textColor }}
            >
              Manager
            </Menu.Item>
            <Menu.Item
              key="3"
              className={cx("custom-menu-item", {
                selected: selectedKey === "3",
              })}
              onClick={() => handleMenuItemClick("4")}
              style={{ color: collapsed ? "#000" : textColor }}
            >
              Staff
            </Menu.Item>
            <Menu.Item
              key="4"
              className={cx("custom-menu-item", {
                selected: selectedKey === "4",
              })}
              onClick={() => handleMenuItemClick("5")}
              style={{ color: collapsed ? "#000" : textColor }}
            >
              <FontAwesomeIcon icon={faScissors} />
              Stylist
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key="5"
            icon={<UserOutlined />}
            className={cx("custom-menu-item", {
              selected: selectedKey === "5",
            })}
            onClick={() => handleMenuItemClick("6")}
            style={{ color: textColor }}
          >
            Customer
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<TeamOutlined />}
            className={cx("custom-menu-item", {
              selected: selectedKey === "6",
            })}
            onClick={() => handleMenuItemClick("7")}
            style={{ color: textColor }}
          >
            Services
          </Menu.Item>
          <Menu.Item
            key="7"
            icon={<UnorderedListOutlined />}
            className={cx("custom-menu-item", {
              selected: selectedKey === "7",
            })}
            onClick={() => handleMenuItemClick("8")}
            style={{ color: textColor }}
          >
            Role
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ padding: 0, backgroundColor: selectedColor }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            className={cx("btn-OutLined")}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Dropdown
            overlay={
              <Menu>
                {colorOptions.map((option) => (
                  <Menu.Item
                    key={option.value}
                    onClick={() => handleColorChange(option.value)}
                  >
                    <div
                      style={{
                        backgroundColor: option.value,
                        padding: "8px",
                        color: "#fff",
                      }}
                    >
                      {option.name}
                    </div>
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <Button
              style={{
                backgroundColor: selectedColor,
                color: textColor,
                border: "2px solid #fff",
              }}
            >
              Select color theme
            </Button>
          </Dropdown>
        </Header>
        <Content
          className={cx("content")}
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutManager;
