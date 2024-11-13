import React, { useState } from "react";
import classNames from "classnames/bind";
import dayjs from "dayjs";

import {
  Table,
  Button,
  Input,
  Space,
  Typography,
  Modal,
  Form,
  DatePicker,
  Switch,
  InputNumber,
  Popconfirm,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styles from "./PromotionManagement.module.scss";
const cx = classNames.bind(styles);
const { Title } = Typography;

const PromotionManagement = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPromotion, setEditingPromotion] = useState(null);
  const [promotions, setPromotions] = useState([
    {
      key: "1",
      code: "20thang10",
      description: "Giảm 20% cho dịch vụ cắt tóc",
      isActive: "true",
      usageLimit: 100,
      usedCount: 67,
      expirationDate: "21/10/2024",
    },
    {
      key: "2",
      code: "TET2024",
      description: "Giảm 30% cho tất cả dịch vụ trong dịp Tết",
      isActive: "true",
      usageLimit: 200,
      usedCount: 120,
      expirationDate: "15/01/2024",
    },
    {
      key: "3",
      code: "SUMMER2024",
      description: "Giảm 25% cho dịch vụ chăm sóc tóc mùa hè",
      isActive: "true",
      usageLimit: 150,
      usedCount: 85,
      expirationDate: "30/06/2024",
    },
    {
      key: "4",
      code: "BLACKFRIDAY",
      description: "Giảm 50% cho các dịch vụ chọn lọc trong Black Friday",
      isActive: "false",
      usageLimit: 500,
      usedCount: 500,
      expirationDate: "01/12/2023",
    },
    {
      key: "5",
      code: "NEWYEAR2024",
      description: "Giảm 15% cho dịch vụ cắt tóc trong ngày đầu năm mới",
      isActive: "true",
      usageLimit: 300,
      usedCount: 150,
      expirationDate: "01/01/2024",
    },
    {
      key: "6",
      code: "VIPCUSTOMER",
      description: "Giảm 10% cho khách hàng VIP",
      isActive: "true",
      usageLimit: 50,
      usedCount: 30,
      expirationDate: "31/12/2024",
    },
    {
      key: "7",
      code: "SPRINGSALE",
      description: "Giảm 20% cho dịch vụ tóc trong mùa xuân",
      isActive: "true",
      usageLimit: 120,
      usedCount: 90,
      expirationDate: "31/03/2024",
    },
    {
      key: "8",
      code: "FREESHIP",
      description: "Miễn phí giao hàng cho đơn hàng trên 500.000đ",
      isActive: "false",
      usageLimit: 1000,
      usedCount: 1000,
      expirationDate: "30/11/2023",
    },
    {
      key: "9",
      code: "STUDENT2024",
      description: "Giảm 10% cho sinh viên",
      isActive: "true",
      usageLimit: 200,
      usedCount: 180,
      expirationDate: "31/12/2024",
    },
    {
      key: "10",
      code: "WINTER2024",
      description: "Giảm 15% cho dịch vụ chăm sóc tóc mùa đông",
      isActive: "true",
      usageLimit: 80,
      usedCount: 40,
      expirationDate: "31/12/2024",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const showModal = (promotion = null) => {
    setEditingPromotion(promotion);
    setIsModalVisible(true);
    if (promotion) {
      form.setFieldsValue({
        code: promotion.code,
        description: promotion.description,
        isActive: promotion.isActive === "true",
        usageLimit: promotion.usageLimit,
        expirationDate: promotion.expirationDate
          ? dayjs(promotion.expirationDate, "DD/MM/YYYY")
          : null,
      });
    } else {
      form.resetFields();
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCreateOrUpdate = (values) => {
    if (editingPromotion) {
      const updatedPromotions = promotions.map((promotion) =>
        promotion.key === editingPromotion.key
          ? {
              ...promotion,
              ...values,
              expirationDate: values.expirationDate.format("DD/MM/YYYY"),
              isActive: values.isActive ? "true" : "false",
            }
          : promotion
      );
      setPromotions(updatedPromotions);
    } else {
      const newPromotion = {
        key: (promotions.length + 1).toString(),
        ...values,
        expirationDate: values.expirationDate.format("DD/MM/YYYY"),
        isActive: values.isActive ? "true" : "false",
      };
      setPromotions([...promotions, newPromotion]);
    }
    setIsModalVisible(false);
  };

  const handleDelete = (key) => {
    const filteredPromotions = promotions.filter(
      (promotion) => promotion.key !== key
    );
    setPromotions(filteredPromotions);
  };

  // Search and filter promotions
  const filteredPromotions = promotions.filter(
    (promotion) =>
      promotion.code.toLowerCase().includes(searchText.toLowerCase()) ||
      promotion.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Is Active",
      dataIndex: "isActive",
      key: "isActive",
      sorter: (a, b) =>
        (a.isActive === "true" ? 1 : 0) - (b.isActive === "true" ? 1 : 0),
      render: (text) => (text === "true" ? "Active" : "Inactive"),
    },
    {
      title: "Usage Limit",
      dataIndex: "usageLimit",
      key: "usageLimit",
    },
    {
      title: "Used Count",
      dataIndex: "usedCount",
      key: "usedCount",
    },
    {
      title: "Expiration Date",
      dataIndex: "expirationDate",
      key: "expirationDate",
      sorter: (a, b) => new Date(a.expirationDate) - new Date(b.expirationDate),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => showModal(record)}
            size="small"
            style={{ backgroundColor: "#1890ff", color: "white" }}
          />
          <Popconfirm
            title="Are you sure to delete this promotion?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              size="small"
              style={{ backgroundColor: "#ff4d4f", color: "white" }}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }} className={cx("wrapper")}>
      <Title level={4}>Promotion Management</Title>
      <Space
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Input
          placeholder="Search by code or description"
          prefix={<SearchOutlined />}
          style={{ width: "300px" }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{
            backgroundColor: "#00ff00",
            borderColor: "#00ff00",
            color: "black",
          }}
          onClick={() => showModal()}
        >
          Add New
        </Button>
      </Space>

      <Table
        columns={columns}
        dataSource={filteredPromotions}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        visible={isModalVisible}
        title={editingPromotion ? "Edit Promotion" : "Create New Promotion"}
        okText={editingPromotion ? "Save Changes" : "Create"}
        cancelText="Cancel"
        onCancel={handleCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              handleCreateOrUpdate(values);
            })
            .catch((info) => {
              console.log("Validation Failed:", info);
            });
        }}
      >
        <Form form={form} layout="vertical" name="create_promotion_form">
          <Form.Item
            name="code"
            label="Code"
            rules={[{ required: true, message: "Please enter the code" }]}
          >
            <Input placeholder="Enter promotion code" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please enter the description" },
            ]}
          >
            <Input.TextArea placeholder="Enter promotion description" />
          </Form.Item>

          <Form.Item name="isActive" label="Is Active" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item
            name="usageLimit"
            label="Usage Limit"
            rules={[
              { required: true, message: "Please enter the usage limit" },
            ]}
          >
            <InputNumber
              min={1}
              placeholder="Enter usage limit"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            name="expirationDate"
            label="Expiration Date"
            rules={[
              { required: true, message: "Please select the expiration date" },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PromotionManagement;
