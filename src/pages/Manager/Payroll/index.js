import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Payroll.module.scss";
import { Table, Button, Input, Select, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <Button type="link">
            <FontAwesomeIcon icon={faEye} />
          </Button>
          <Button type="link">
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
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
            <Button className={cx("btn")}>Thêm nhân viên</Button>
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
      </div>
    </div>
  );
}

export default Payroll;
