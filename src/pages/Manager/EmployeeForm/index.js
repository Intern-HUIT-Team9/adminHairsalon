import React from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Button,
  Divider,
  Tabs,
  Row,
  Col,
  Typography,
  Space,
  Table,
} from "antd";

const { Option } = Select;
const { TabPane } = Tabs;
const { Title, Text } = Typography;

const EmployeeForm = () => {
  return (
    <div
      style={{
        maxWidth: 1300,
        margin: "0 auto",
        padding: "30px",
        borderRadius: "8px",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: "20px" }}>
        THÔNG TIN NHÂN SỰ
      </Title>

      <Tabs defaultActiveKey="1" centered style={{ marginBottom: "30px" }}>
        <TabPane tab="Thông tin làm việc" key="1">
          <Divider orientation="left">
            <Text strong style={{ fontSize: "16px" }}>
              Thông tin làm việc
            </Text>
          </Divider>

          <Form layout="vertical">
            <Row gutter={16}>
              {/* Nội dung chi tiết "Thông tin làm việc" */}
              <Col span={12}>
                <Form.Item
                  label="Tên đăng nhập"
                  name="username"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên đăng nhập" },
                  ]}
                >
                  <Input placeholder="Tên đăng nhập" />
                </Form.Item>
              </Col>
              {/* Thêm các trường khác theo yêu cầu của bạn */}
            </Row>
          </Form>
        </TabPane>

        <TabPane tab="Thông tin nhân viên" key="2">
          <Divider orientation="left">
            <Text strong style={{ fontSize: "16px" }}>
              Thông tin nhân viên
            </Text>
          </Divider>

          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Tên đăng nhập"
                  name="username"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên đăng nhập" },
                  ]}
                >
                  <Input placeholder="Tên đăng nhập" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Họ và tên nhân viên"
                  name="fullname"
                  rules={[
                    { required: true, message: "Vui lòng nhập họ và tên" },
                  ]}
                >
                  <Input placeholder="Họ và tên nhân viên" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Khối"
                  name="block"
                  rules={[{ required: true, message: "Vui lòng chọn khối" }]}
                >
                  <Select placeholder="Chọn khối">
                    <Option value="salon">Salon</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Salon"
                  name="salon"
                  rules={[{ required: true, message: "Vui lòng chọn salon" }]}
                >
                  <Select placeholder="Chọn salon">
                    <Option value="382nt">382 NT</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Bộ phận"
                  name="department"
                  rules={[{ required: true, message: "Vui lòng chọn bộ phận" }]}
                >
                  <Select placeholder="Chọn bộ phận">
                    <Option value="stylist">Stylist</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="ID người quản lý trực tiếp"
                  name="managerId"
                  rules={[
                    { required: true, message: "Vui lòng nhập ID quản lý" },
                  ]}
                >
                  <Input placeholder="ID quản lý" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Tên người quản lý trực tiếp"
                  name="managerName"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên quản lý" },
                  ]}
                >
                  <Input placeholder="Tên quản lý" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Bậc kỹ năng"
                  name="skillLevel"
                  rules={[
                    { required: true, message: "Vui lòng chọn bậc kỹ năng" },
                  ]}
                >
                  <Select placeholder="Chọn bậc kỹ năng">
                    <Option value="level3">Level III</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Ngày vào làm việc"
                  name="startDate"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn ngày vào làm việc",
                    },
                  ]}
                >
                  <DatePicker
                    placeholder="Chọn ngày"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Ngày tính thâm niên"
                  name="seniorityDate"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn ngày tính thâm niên",
                    },
                  ]}
                >
                  <DatePicker
                    placeholder="Chọn ngày"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Trạng thái"
              name="status"
              rules={[{ required: true }]}
            >
              <Radio.Group style={{ width: "100%" }}>
                <Space direction="horizontal">
                  <Radio value="active">Đang hoạt động</Radio>
                  <Radio value="temporaryLeave">Nghỉ tạm thời</Radio>
                  <Radio value="requestLeave">Xin nghỉ</Radio>
                  <Radio value="resigned">Cho nghỉ</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Loại mã nhân viên"
              name="employeeCodeType"
              rules={[{ required: true }]}
            >
              <Radio.Group style={{ width: "100%" }}>
                <Space direction="horizontal">
                  <Radio value="mainCode">Mã chính</Radio>
                  <Radio value="controlCode">Mã kiểm nhiệm</Radio>
                  <Radio value="uniformCode">Mã áo</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Yêu cầu điểm danh"
              name="attendanceRequirement"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value="yes">Có</Radio>
                <Radio value="no">Không</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Đánh giá ngoại hình"
              name="appearanceRating"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Space direction="horizontal">
                  <Radio value="good">Tốt</Radio>
                  <Radio value="average">Trung bình</Radio>
                  <Radio value="belowAverage">Dưới trung bình</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Nguồn lao động" name="laborSource">
              <Select placeholder="Chọn nguồn lao động"></Select>
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                Hoàn tất
              </Button>
            </Form.Item>
          </Form>
        </TabPane>

        <TabPane tab="Phân quyền" key="3">
          <Divider orientation="left">
            <Text strong style={{ fontSize: "16px" }}>
              Phân quyền
            </Text>
          </Divider>

          {/* Nội dung chi tiết "Phân quyền" */}
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Vai trò" name="role">
                  <Select placeholder="Chọn vai trò">
                    <Option value="admin">Quản trị viên</Option>
                    <Option value="manager">Quản lý</Option>
                    <Option value="staff">Nhân viên</Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* Thêm các trường khác theo yêu cầu của bạn */}
            </Row>
          </Form>
        </TabPane>

        <TabPane tab="Lịch sử" key="4">
          <Divider orientation="left">
            <Text strong style={{ fontSize: "16px" }}>
              Lịch sử hoạt động
            </Text>
          </Divider>

          {/* Bảng lịch sử hoạt động */}
          <Table
            dataSource={[
              {
                key: "1",
                action: "Đăng nhập hệ thống",
                date: "01/01/2023",
                status: "Thành công",
              },
              {
                key: "2",
                action: "Cập nhật thông tin",
                date: "02/01/2023",
                status: "Thành công",
              },
              {
                key: "31",
                action: "Đăng nhập hệ thống",
                date: "01/01/2023",
                status: "Thành công",
              },
              {
                key: "32",
                action: "Cập nhật thông tin",
                date: "02/01/2023",
                status: "Thành công",
              },
              {
                key: "41",
                action: "Đăng nhập hệ thống",
                date: "01/01/2023",
                status: "Thành công",
              },
              {
                key: "42",
                action: "Cập nhật thông tin",
                date: "02/01/2023",
                status: "Thành công",
              },
              {
                key: "431",
                action: "Đăng nhập hệ thống",
                date: "01/01/2023",
                status: "Thành công",
              },
              {
                key: "432",
                action: "Cập nhật thông tin",
                date: "02/01/2023",
                status: "Thành công",
              },
            ]}
            columns={[
              { title: "Hành động", dataIndex: "action", key: "action" },
              { title: "Ngày", dataIndex: "date", key: "date" },
              { title: "Trạng thái", dataIndex: "status", key: "status" },
            ]}
            pagination={{ pageSize: 5 }}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default EmployeeForm;
