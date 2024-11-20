import React, { useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Payroll.module.scss";
import {
  Table,
  Button,
  Input,
  Select,
  Space,
  Form,
  Modal,
  DatePicker,
  Upload,
  message,
  Row,
  Col,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UploadOutlined } from "@ant-design/icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faEye,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const { Search } = Input;
const { Option } = Select;
const cx = classNames.bind(styles);

function Payroll() {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [departmentFilter, setDepartmentFilter] = useState(null);
  const [salonFilter, setSalonFilter] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  // Hàm mở modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Hàm đóng modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Hàm xử lý khi form được submit
  const handleSubmit = (values) => {
    console.log("Received values: ", values);
    setIsModalVisible(false); // Đóng modal sau khi submit thành công
  };
  const columns = [
    { title: "STT", dataIndex: "stt", key: "stt" },
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Họ và tên", dataIndex: "name", key: "name" },
    { title: "Salon", dataIndex: "salon", key: "salon" },
    { title: "Bộ phận", dataIndex: "department", key: "department" },
    { title: "Bậc", dataIndex: "level", key: "level" },
    { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
    { title: "Tài khoản", dataIndex: "account", key: "account" },
    {
      title: "Ngày/Nâng bậc/Thâm niên",
      dataIndex: "seniority",
      key: "seniority",
    },
    {
      title: "Lương cơ bản",
      dataIndex: "basicSalary",
      key: "basicSalary",
      render: (text) => `${text.toLocaleString()} `,
    },
    {
      title: "Thưởng",
      dataIndex: "bonus",
      key: "bonus",
      render: (text) => `${text.toLocaleString()}`,
    },
    {
      title: "Khấu trừ",
      dataIndex: "deduction",
      key: "deduction",
      render: (text) => `${text.toLocaleString()} `,
    },
    {
      title: "Lương",
      dataIndex: "salary",
      key: "salary",
      render: (text, record) => {
        const totalSalary = calculateSalary(record);
        return <span>{totalSalary.toLocaleString()} </span>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Chức năng",
      key: "actions",
      render: () => (
        <>
          <Link to={`/Manager/employees`}>
            <Button type="link">
              <FontAwesomeIcon icon={faEye} />
            </Button>
          </Link>

          {/* Chỉnh sửa - Link đến trang chỉnh sửa */}
          <Link to={`/Manager/employees`}>
            <Button type="link">
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          </Link>
        </>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      stt: "1",
      id: "13221",
      name: "Đinh Phạm Như Huệ",
      salon: "12 LDT",
      department: "Skinner",
      level: "Level C1",
      phone: "0989405065",
      account: "nhu.hue1",
      contract: "",
      seniority: "2",
      basicSalary: 1000000,
      bonus: 200000,
      deduction: 50000,
      status: "active",
    },
    {
      key: "2",
      stt: "2",
      id: "13222",
      name: "Nguyễn Văn Anh",
      salon: "23 ABC",
      department: "Stylist",
      level: "Level B1",
      phone: "0938305065",
      account: "van.anh2",
      contract: "Permanent",
      seniority: "4",
      basicSalary: 1200000,
      bonus: 250000,
      deduction: 60000,
      status: "inactive",
    },
    {
      key: "3",
      stt: "3",
      id: "13223",
      name: "Lê Thị Thuỳ Dương",
      salon: "45 XYZ",
      department: "Colorist",
      level: "Level B2",
      phone: "0945123456",
      account: "thuy.duong3",
      contract: "Temporary",
      seniority: "3",
      basicSalary: 1100000,
      bonus: 150000,
      deduction: 70000,
      status: "active",
    },
    {
      key: "4",
      stt: "4",
      id: "13224",
      name: "Trần Minh Tú",
      salon: "56 QWE",
      department: "Hairdresser",
      level: "Level A",
      phone: "0912345678",
      account: "minh.tu4",
      contract: "Permanent",
      seniority: "5",
      basicSalary: 1300000,
      bonus: 300000,
      deduction: 80000,
      status: "active",
    },
    {
      key: "5",
      stt: "5",
      id: "13225",
      name: "Phan Quang Khải",
      salon: "12 LDT",
      department: "Skinner",
      level: "Level C1",
      phone: "0987654321",
      account: "quang.khai5",
      contract: "",
      seniority: "1",
      basicSalary: 1000000,
      bonus: 220000,
      deduction: 40000,
      status: "inactive",
    },
    {
      key: "6",
      stt: "6",
      id: "13226",
      name: "Nguyễn Thanh Hương",
      salon: "23 ABC",
      department: "Stylist",
      level: "Level B2",
      phone: "0938765432",
      account: "thanh.huong6",
      contract: "Temporary",
      seniority: "2",
      basicSalary: 1150000,
      bonus: 180000,
      deduction: 60000,
      status: "inactive",
    },
    {
      key: "7",
      stt: "7",
      id: "13227",
      name: "Võ Tấn Lực",
      salon: "45 XYZ",
      department: "Colorist",
      level: "Level A",
      phone: "0945876543",
      account: "tan.luc7",
      contract: "Permanent",
      seniority: "4",
      basicSalary: 1400000,
      bonus: 350000,
      deduction: 90000,
      status: "active",
    },
    {
      key: "8",
      stt: "8",
      id: "13228",
      name: "Lê Hoàng Nam",
      salon: "56 QWE",
      department: "Hairdresser",
      level: "Level B1",
      phone: "0919876543",
      account: "hoang.nam8",
      contract: "Permanent",
      seniority: "6",
      basicSalary: 1250000,
      bonus: 250000,
      deduction: 70000,
      status: "active",
    },
    {
      key: "9",
      stt: "9",
      id: "13229",
      name: "Phan Như Quỳnh",
      salon: "12 LDT",
      department: "Skinner",
      level: "Level C1",
      phone: "0981122334",
      account: "nhu.quynh9",
      contract: "Permanent",
      seniority: "3",
      basicSalary: 1200000,
      bonus: 230000,
      deduction: 65000,
      status: "inactive",
    },
    {
      key: "10",
      stt: "10",
      id: "13230",
      name: "Nguyễn Thị Mai",
      salon: "23 ABC",
      department: "Stylist",
      level: "Level B1",
      phone: "0932905678",
      account: "thimai10",
      contract: "Temporary",
      seniority: "2",
      basicSalary: 1150000,
      bonus: 210000,
      deduction: 50000,
      status: "active",
    },
    {
      key: "11",
      stt: "11",
      id: "13231",
      name: "Đào Minh Thư",
      salon: "45 XYZ",
      department: "Colorist",
      level: "Level A",
      phone: "0947654321",
      account: "minh.thu11",
      contract: "Permanent",
      seniority: "5",
      basicSalary: 1350000,
      bonus: 300000,
      deduction: 70000,
      status: "inactive",
    },
    {
      key: "12",
      stt: "12",
      id: "13232",
      name: "Trần Thị Mai Anh",
      salon: "56 QWE",
      department: "Hairdresser",
      level: "Level B2",
      phone: "0912345679",
      account: "thimaianh12",
      contract: "Temporary",
      seniority: "3",
      basicSalary: 1300000,
      bonus: 250000,
      deduction: 80000,
      status: "active",
    },
    {
      key: "13",
      stt: "13",
      id: "13233",
      name: "Phan Thị Thu Lan",
      salon: "12 LDT",
      department: "Skinner",
      level: "Level C1",
      phone: "0988765432",
      account: "thu.lan13",
      contract: "",
      seniority: "6",
      basicSalary: 1250000,
      bonus: 210000,
      deduction: 60000,
      status: "active",
    },
    {
      key: "14",
      stt: "14",
      id: "13234",
      name: "Lê Minh Tuấn",
      salon: "23 ABC",
      department: "Stylist",
      level: "Level B1",
      phone: "0935432167",
      account: "minh.tuan14",
      contract: "Permanent",
      seniority: "4",
      basicSalary: 1200000,
      bonus: 270000,
      deduction: 55000,
      status: "inactive",
    },
    {
      key: "15",
      stt: "15",
      id: "13235",
      name: "Nguyễn Thị Hương Lan",
      salon: "45 XYZ",
      department: "Colorist",
      level: "Level B2",
      phone: "0946543210",
      account: "huonglan15",
      contract: "Permanent",
      seniority: "7",
      basicSalary: 1400000,
      bonus: 310000,
      deduction: 85000,
      status: "active",
    },
  ];

  // Hàm tính lương nhân viên
  const calculateSalary = (employee) => {
    const { basicSalary, bonus, deduction } = employee;
    return basicSalary + bonus - deduction;
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
  };

  const handleLevelChange = (value) => {
    setLevelFilter(value);
  };

  const handleDepartmentChange = (value) => {
    setDepartmentFilter(value);
  };

  const handleSalonChange = (value) => {
    setSalonFilter(value);
  };

  const filteredData = data.filter((item) => {
    const matchesSearchText =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.id.toLowerCase().includes(searchText.toLowerCase()) ||
      item.account.toLowerCase().includes(searchText.toLowerCase());

    const matchesStatus = !statusFilter || item.status === statusFilter;
    const matchesLevel = !levelFilter || item.level === levelFilter;
    const matchesDepartment =
      !departmentFilter ||
      item.department.toLowerCase() === departmentFilter.toLowerCase();
    const matchesSalon =
      !salonFilter || item.salon.toLowerCase() === salonFilter.toLowerCase();

    return (
      matchesSearchText &&
      matchesStatus &&
      matchesLevel &&
      matchesDepartment &&
      matchesSalon
    );
  });

  return (
    <div className={cx("wrapper")}>
      <div className={cx("name-page")}>
        <FontAwesomeIcon className={cx("icon-home")} icon={faHome} />
        <span>Manager > Payroll</span>
      </div>

      <div>
        <h2>Danh sách lương nhân viên</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Space style={{ marginBottom: -5 }}>
            <Search
              placeholder="Họ và tên/ID/Tên đăng nhập"
              style={{ width: 200 }}
              onSearch={handleSearch}
            />
            <Select
              placeholder="Trạng thái làm việc"
              style={{ width: 150 }}
              onChange={handleStatusChange}
              allowClear
            >
              <Option value="active">Đang hoạt động</Option>
              <Option value="inactive">Đã nghỉ</Option>
              <Option value="temporary">Nghỉ tạm thời</Option>
            </Select>

            <Select
              placeholder="Cấp bậc"
              style={{ width: 150 }}
              onChange={handleLevelChange}
              allowClear
            >
              <Option value="Level A">Level A</Option>
              <Option value="Level B1">Level B1</Option>
              <Option value="Level B2">Level B2</Option>
              <Option value="Level C1">Level C1</Option>
            </Select>

            <Select
              placeholder="Bộ phận"
              style={{ width: 150 }}
              onChange={handleDepartmentChange}
              allowClear
            >
              <Option value="Skinner">Skinner</Option>
              <Option value="Stylist">Stylist</Option>
              <Option value="Colorist">Colorist</Option>
              <Option value="Hairdresser">Hairdresser</Option>
            </Select>

            <Select
              placeholder="Salon"
              style={{ width: 150 }}
              onChange={handleSalonChange}
              allowClear
            >
              <Option value="12 LDT">12 LDT</Option>
              <Option value="23 ABC">23 ABC</Option>
              <Option value="45 XYZ">45 XYZ</Option>
              <Option value="56 QWE">56 QWE</Option>
            </Select>
          </Space>

          <Space style={{ marginBottom: -5 }}>
            <Button className={cx("btn")}>Xem dữ liệu</Button>
            <Button className={cx("btn")}>Xuất excel</Button>
            <Button className={cx("btn")} onClick={showModal}>
              Thêm nhân viên
            </Button>
          </Space>

          <Space style={{ marginBottom: 10 }} size="large">
            <span>
              Tổng số nhân viên: <span style={{ color: "red" }}>70</span>
            </span>
            <span>
              Đang hoạt động: <span style={{ color: "red" }}>40</span>
            </span>
            <span>
              Đã nghỉ: <span style={{ color: "red" }}>20</span>
            </span>
            <span>
              Nghỉ tạm thời: <span style={{ color: "red" }}>10</span>
            </span>
          </Space>
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{ pageSize: 5 }}
        />

        <Modal
          title="Thêm nhân viên"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null} // Để footer mặc định không xuất hiện
          width={1000}
        >
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            {/* Tên đăng nhập */}
            <Form.Item
              name="username"
              label="Tên đăng nhập"
              rules={[
                { required: true, message: "Vui lòng nhập tên đăng nhập!" },
              ]}
            >
              <Input />
            </Form.Item>

            {/* Họ và tên */}
            <Form.Item
              name="fullName"
              label="Họ và tên nhân viên"
              rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
            >
              <Input />
            </Form.Item>

            {/* Số CCCD */}
            <Form.Item
              name="idCard"
              label="Số CCCD"
              rules={[{ required: true, message: "Vui lòng nhập số CCCD!" }]}
            >
              <Input />
            </Form.Item>

            {/* Ngày cấp / Nơi cấp */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="issueDate"
                  label="Ngày cấp"
                  rules={[
                    { required: true, message: "Vui lòng chọn ngày cấp!" },
                  ]}
                >
                  <DatePicker format="DD/MM/YYYY" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="issuePlace"
                  label="Nơi cấp"
                  rules={[
                    { required: true, message: "Vui lòng nhập nơi cấp!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/* Ngày sinh / Giới tính */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="dob"
                  label="Ngày sinh"
                  rules={[
                    { required: true, message: "Vui lòng chọn ngày sinh!" },
                  ]}
                >
                  <DatePicker format="DD/MM/YYYY" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="gender"
                  label="Giới tính"
                  rules={[
                    { required: true, message: "Vui lòng chọn giới tính!" },
                  ]}
                >
                  <Select placeholder="Chọn giới tính">
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            {/* Địa chỉ */}
            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
            >
              <Input />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="city"
                  label="Tỉnh/Thành phố"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tỉnh/thành phố!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="district"
                  label="Quận/Huyện"
                  rules={[
                    { required: true, message: "Vui lòng nhập quận/huyện!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/* SĐT / Mail */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label="Số điện thoại"
                  rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: "Vui lòng nhập email!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/* Ảnh */}
            <Form.Item
              name="portrait"
              label="Ảnh chân dung"
              rules={[
                { required: true, message: "Vui lòng tải ảnh chân dung!" },
              ]}
            >
              <Upload action="/upload" listType="picture" maxCount={1}>
                <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
              </Upload>
            </Form.Item>

            {/* Thông tin làm việc */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="workBlock"
                  label="Khối"
                  rules={[{ required: true, message: "Vui lòng chọn khối!" }]}
                >
                  <Select placeholder="Chọn khối nhân sự">
                    <Option value="admin">Quản lý</Option>
                    <Option value="staff">Nhân viên</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="salon"
                  label="Salon"
                  rules={[{ required: true, message: "Vui lòng chọn salon!" }]}
                >
                  <Select placeholder="Chọn salon">
                    <Option value="salon1">Salon 1</Option>
                    <Option value="salon2">Salon 2</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="position"
              label="Bộ phận"
              rules={[{ required: true, message: "Vui lòng chọn bộ phận!" }]}
            >
              <Select placeholder="Chọn bộ phận">
                <Option value="stylist">Stylist</Option>
                <Option value="manager">Quản lý</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="directManager"
              label="Người quản lý trực tiếp"
              rules={[
                { required: true, message: "Vui lòng chọn người quản lý!" },
              ]}
            >
              <Select placeholder="Chọn người quản lý">
                <Option value="manager1">Quản lý 1</Option>
                <Option value="manager2">Quản lý 2</Option>
              </Select>
            </Form.Item>

            {/* Ngày vào làm việc */}
            <Form.Item
              name="startDate"
              label="Ngày vào làm việc"
              rules={[
                { required: true, message: "Vui lòng chọn ngày vào làm việc!" },
              ]}
            >
              <DatePicker format="DD/MM/YYYY" />
            </Form.Item>

            {/* Trạng thái */}
            <Form.Item
              name="status"
              label="Trạng thái"
              rules={[{ required: true, message: "Vui lòng chọn trạng thái!" }]}
            >
              <Select placeholder="Chọn trạng thái">
                <Option value="active">Đang hoạt động</Option>
                <Option value="inactive">Nghỉ tạm thời</Option>
              </Select>
            </Form.Item>

            {/* Phần footer */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Lưu thông tin
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default Payroll;
