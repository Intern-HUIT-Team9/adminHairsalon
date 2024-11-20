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

          <Form layout="vertical" style={{ maxWidth: 1300, margin: "0 auto" }}>
            <Title level={4}>Thông tin làm việc</Title>

            {/* Tên đăng nhập */}
            <Form.Item
              label="Tên đăng nhập"
              name="username"
              style={{ width: "100%" }}
            >
              <Input placeholder="Nhập tên đăng nhập" />
            </Form.Item>

            {/* Họ và tên nhân viên */}
            <Form.Item
              label="Họ và tên nhân viên"
              name="employeeName"
              style={{ width: "100%" }}
            >
              <Input placeholder="Nhập họ và tên nhân viên" />
            </Form.Item>

            <Row gutter={16}>
              {/* Khối */}
              <Col span={12}>
                <Form.Item
                  label="Khối"
                  name="division"
                  rules={[{ required: true, message: "Khối là bắt buộc" }]}
                >
                  <Select placeholder="Chọn khối">
                    <Option value="Salon">Salon</Option>
                    {/* Add more options as needed */}
                  </Select>
                </Form.Item>
              </Col>

              {/* Salon */}
              <Col span={12}>
                <Form.Item
                  label="Salon"
                  name="salon"
                  rules={[{ required: true, message: "Salon là bắt buộc" }]}
                >
                  <Select placeholder="Chọn salon">
                    <Option value="382 NT">382 NT</Option>
                    {/* Add more options as needed */}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              {/* Bộ phận */}
              <Col span={12}>
                <Form.Item
                  label="Bộ phận"
                  name="department"
                  rules={[{ required: true, message: "Bộ phận là bắt buộc" }]}
                >
                  <Select placeholder="Chọn bộ phận">
                    <Option value="Stylist">Stylist</Option>
                    {/* Add more options as needed */}
                  </Select>
                </Form.Item>
              </Col>

              {/* ID người quản lý */}
              <Col span={12}>
                <Form.Item
                  label="ID người quản lý trực tiếp"
                  name="managerId"
                  rules={[
                    { required: true, message: "ID quản lý là bắt buộc" },
                  ]}
                >
                  <Input placeholder="Nhập ID quản lý" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              {/* Tên người quản lý */}
              <Col span={12}>
                <Form.Item
                  label="Tên người quản lý trực tiếp"
                  name="managerName"
                  rules={[
                    { required: true, message: "Tên quản lý là bắt buộc" },
                  ]}
                >
                  <Select placeholder="Chọn người quản lý">
                    <Option value="Bùi Thị Hương Ly">Bùi Thị Hương Ly</Option>
                    {/* Add more options as needed */}
                  </Select>
                </Form.Item>
              </Col>

              {/* Bậc kỹ năng */}
              <Col span={12}>
                <Form.Item
                  label="Bậc kỹ năng"
                  name="skillLevel"
                  rules={[
                    { required: true, message: "Bậc kỹ năng là bắt buộc" },
                  ]}
                >
                  <Select placeholder="Chọn bậc kỹ năng">
                    <Option value="Level III">Level III</Option>
                    {/* Add more options as needed */}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            {/* Ngày vào làm việc */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Ngày vào làm việc"
                  name="startDate"
                  rules={[
                    {
                      required: true,
                      message: "Ngày vào làm việc là bắt buộc",
                    },
                  ]}
                >
                  <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
                </Form.Item>
              </Col>

              {/* Ngày tính thâm niên */}
              <Col span={12}>
                <Form.Item
                  label="Ngày tính thâm niên"
                  name="seniorityDate"
                  rules={[
                    {
                      required: true,
                      message: "Ngày tính thâm niên là bắt buộc",
                    },
                  ]}
                >
                  <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            {/* Trạng thái */}
            <Form.Item
              label="Trạng thái"
              name="status"
              rules={[{ required: true, message: "Trạng thái là bắt buộc" }]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="Đang hoạt động">Đang hoạt động</Radio>
                  <Radio value="Nghỉ tạm thời">Nghỉ tạm thời</Radio>
                  <Radio value="Xin nghỉ">Xin nghỉ</Radio>
                  <Radio value="Cho nghỉ">Cho nghỉ</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            {/* Loại mã nhân viên */}
            <Form.Item
              label="Loại mã nhân viên"
              name="employeeCodeType"
              rules={[{ required: true, message: "Loại mã là bắt buộc" }]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="Mã chính">Mã chính</Radio>
                  <Radio value="Mã kiểm nhiệm">Mã kiểm nhiệm</Radio>
                  <Radio value="Mã ảo">Mã ảo</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            {/* Yêu cầu điểm danh */}
            <Form.Item
              label="Yêu cầu điểm danh"
              name="attendanceRequired"
              rules={[
                { required: true, message: "Yêu cầu điểm danh là bắt buộc" },
              ]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="Có">Có</Radio>
                  <Radio value="Không">Không</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            {/* Đánh giá ngoại hình */}
            <Form.Item
              label="Đánh giá ngoại hình"
              name="appearanceRating"
              rules={[
                { required: true, message: "Đánh giá ngoại hình là bắt buộc" },
              ]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="Tốt">Tốt</Radio>
                  <Radio value="Trung bình">Trung bình</Radio>
                  <Radio value="Dưới trung bình">Dưới trung bình</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            {/* Nguồn lao động */}
            <Form.Item label="Nguồn lao động" name="laborSource">
              <Select placeholder="Chọn nguồn lao động">
                {/* Add options as needed */}
              </Select>
            </Form.Item>

            {/* Nút Lưu */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Lưu thông tin
              </Button>
            </Form.Item>
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

          <Form
            layout="vertical"
            style={{
              maxWidth: 600,
              margin: "0 auto",
              backgroundColor: "#f5f5f5",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <Title level={4} style={{ marginBottom: 0 }}>
              <span role="img" aria-label="edit">
                ✏️
              </span>{" "}
              Phân quyền ERP{" "}
              <Text type="danger">(*): Bắt buộc điền thông tin!</Text>
            </Title>

            <Form.Item label="Tên đăng nhập">
              <Input value="huypq" disabled />
            </Form.Item>

            <Form.Item label="Họ và tên">
              <Input value="Phạm Quang Huy" disabled />
            </Form.Item>

            <Form.Item label="Khối">
              <Input value="Văn phòng" disabled />
            </Form.Item>

            <Form.Item label="Bộ phận">
              <Input value="Bộ phận chung" disabled />
            </Form.Item>

            <Form.Item
              label={
                <span style={{ color: "red" }}>*</span> + " Loại tài khoản"
              }
              required
            >
              <Radio.Group defaultValue="employee">
                <Radio value="employee">Tài khoản nhân viên</Radio>
                <Radio value="login">Tài khoản đăng nhập</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Phân quyền">
              <Select
                defaultValue="STAFF"
                style={{ width: "100%" }}
                mode="multiple"
              >
                <Option value="STAFF">STAFF</Option>
                <Option value="ADMIN">ADMIN</Option>
                {/* Add other roles as needed */}
              </Select>
            </Form.Item>

            <Form.Item>
              <Space
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#FFA500",
                    borderColor: "#FFA500",
                    color: "white",
                  }}
                >
                  Đặt lại mật khẩu
                </Button>
                <Button
                  type="primary"
                  style={{ backgroundColor: "#000", borderColor: "#000" }}
                >
                  Hoàn tất
                </Button>
              </Space>
            </Form.Item>
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
