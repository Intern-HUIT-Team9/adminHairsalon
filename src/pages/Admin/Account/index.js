import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import { Breadcrumb, Layout, Menu, Button, Dropdown, message, Table, Space, Modal, Form, Input } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUserTie, faUser, faCut, faSearch, faEye, faPen, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import styles from './Account.module.scss';
import { ExclamationCircleFilled } from '@ant-design/icons';
const { confirm } = Modal;


const cx = classNames.bind(styles);
const { Header, Content } = Layout;

// Tạo mảng `items` với các nhãn và icon tùy chỉnh
const items = [
  { 
    key: '1', 
    label: (
      <>
        <FontAwesomeIcon icon={faUserTie} style={{ marginRight: 8 }} />
        Manager
      </>
    ),
    breadcrumb: 'Manager'
  },
  { 
    key: '2', 
    label: (
      <>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />
        Staff
      </>
    ),
    breadcrumb: 'Staff'
  },
  { 
    key: '3', 
    label: (
      <>
        <FontAwesomeIcon icon={faCut} style={{ marginRight: 8 }} />
        Stylist
      </>
    ),
    breadcrumb: 'Stylist'
  },
];

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const itemsfilter = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4th menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items: itemsfilter,
  onClick: handleMenuClick,
};

// Mock data for the table
const dataSource = [
  { key: '1', avatar: 'https://picsum.photos/50/50', name: 'John Doe', username: 'John123', email: 'john@example.com', phone: '0123456789', role: 'Manager', status: 'Active', createAt: '2024-01-01' },
  { key: '2', avatar: 'https://picsum.photos/50/50', name: 'Jane Doe1', username: 'Jane456', email: 'jane@example.com', phone: '0987654321', role: 'Staff', status: 'Inactive', createAt: '2024-02-01' },
  { key: '3', avatar: 'https://picsum.photos/50/50', name: 'John Doe', username: 'John123', email: 'john@example.com', phone: '0123456789', role: 'Manager', status: 'Active', createAt: '2024-01-01' },
  { key: '4', avatar: 'https://picsum.photos/50/50', name: 'Jane Doe1', username: 'Jane456', email: 'jane@example.com', phone: '0987654321', role: 'Staff', status: 'Inactive', createAt: '2024-02-01' },
  { key: '5', avatar: 'https://picsum.photos/50/50', name: 'John Doe', username: 'John123', email: 'john@example.com', phone: '0123456789', role: 'Manager', status: 'Active', createAt: '2024-01-01' },
  { key: '6', avatar: 'https://picsum.photos/50/50', name: 'Jane Doe1', username: 'Jane456', email: 'jane@example.com', phone: '0987654321', role: 'Staff', status: 'Inactive', createAt: '2024-02-01' },
];



function Account() {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [selectedItem, setSelectedItem] = useState('manager'); 
    const [isEditing, setIsEditing] = useState(false);
    const [editableAccount, setEditableAccount] = useState({ ...selectedAccount });

    const roleOptions = ['Manager', 'Staff', 'Stylist'];
    const statusOptions = ['Active', 'Inactive'];
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newAccount, setNewAccount] = useState({
      name: '',
      username: '',
      email: '',
      phone: '',
      role: 'Manager', // Mặc định là Manager
      status: 'Active', // Mặc định là Active
    });

    // Hàm hiển thị modal
    const showModal = () => {
      setIsModalVisible(true);
    };

    // Hàm đóng modal
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    // Hàm xử lý khi nhấn Save
    const handleSave = () => {
      console.log('New Account:', newAccount);
      setIsModalVisible(false);
    };


    // Hàm xử lý khi nhấn nút Edit/Save
    const handleEditToggle = () => {
      if (isEditing) {
        // Nếu đang chỉnh sửa và nhấn "Save", thực hiện logic lưu dữ liệu
        console.log('Data saved:', editableAccount);
      }
      // Đảo ngược trạng thái chỉnh sửa
      setIsEditing(!isEditing);
    };

    // Hàm xử lý thay đổi giá trị của input
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditableAccount((prev) => ({ ...prev, [name]: value }));
    };



    useEffect(() => {
      if (dataSource.length > 0) {
        setSelectedAccount(dataSource[0]);
      }
    }, []);

  const showDeleteConfirm = () => {
    confirm({
      title: 'Do you want to delete this account?',
      icon: <ExclamationCircleFilled />,
      content: 'All account information will be lost',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  // Hàm xử lý khi bấm vào mục Menu
  const handleMenuClick = (e) => {
    const selected = items.find(item => item.key === e.key);
    setSelectedItem(selected ? selected.breadcrumb : 'manager');
  };
// Column configuration for Ant Design Table
  const columns = [
    { title: 'Avatar', dataIndex: 'avatar', key: 'avatar', render: (text) => <img src={text} alt="avatar" style={{ width: 40, height: 40, borderRadius: '50%' }} />, },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'CreateAt', dataIndex: 'createAt', key: 'createAt' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button 
            icon={<FontAwesomeIcon icon={faEye} />} 
            type="link" 
            onClick={() => handleView(record)}
          >
            View detail
          </Button>
        </Space>
      ),
    },
  ];

  
  const handleView = (record) => {
    console.log('View record:', record);
    // Cập nhật state với thông tin chi tiết của tài khoản được chọn
    setSelectedAccount(record);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('name-page')}>
        <FontAwesomeIcon className={cx('icon-home')} icon={faUsers} />
        <span>Account management page</span>
      </div>

      <div className={cx('wrapper-content')}>
        <Layout>
          <Header className={cx('header-content')}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              items={items}
              onClick={handleMenuClick}
              style={{ flex: 1, minWidth: 100 }}
            />
          </Header>
          <Content className={cx('content__form')}>
            <div className={cx('content__form-left')}>
              <div className={cx('content__action')}>
                <div className={cx('breadcrumb')}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Account</Breadcrumb.Item>
                    <Breadcrumb.Item>{selectedItem}</Breadcrumb.Item>
                  </Breadcrumb>
                </div>

                <form className={cx('form-search')}>
                  <input type="text" placeholder="search account ..." />
                  <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                </form>

                <div className={cx('btn-addnew')}>
                  <button onClick={showModal}>+ Add New</button>
                </div>

                <Modal
                  title="Add New Account"
                  visible={isModalVisible}
                  onCancel={handleCancel}
                  footer={[
                    <Button key="back" onClick={handleCancel}>
                      Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleSave}>
                      Save
                    </Button>,
                  ]}
                >
                  <Form>
                    <Form.Item label="Name">
                      <Input
                        name="name"
                        value={newAccount.name}
                        onChange={handleInputChange}
                        placeholder="Enter name"
                      />
                    </Form.Item>
                    <Form.Item label="Username">
                      <Input
                        name="username"
                        value={newAccount.username}
                        onChange={handleInputChange}
                        placeholder="Enter username"
                      />
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input
                        name="email"
                        value={newAccount.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                      />
                    </Form.Item>
                    <Form.Item label="Phone">
                      <Input
                        name="phone"
                        value={newAccount.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                      />
                    </Form.Item>
                    <Form.Item label="Role">
                      <select
                        name="role"
                        value={newAccount.role}
                        onChange={handleInputChange}
                      >
                        <option value="Manager">Manager</option>
                        <option value="Staff">Staff</option>
                        <option value="Stylist">Stylist</option>
                      </select>
                    </Form.Item>
                    <Form.Item label="Status">
                      <select
                        name="status"
                        value={newAccount.status}
                        onChange={handleInputChange}
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </Form.Item>
                  </Form>
                </Modal>
              </div>

              <div className={cx('content__filter')}>
                <h3>Filter:</h3>
                <div className={cx('filter-name')}>
                  <label>Name: </label>
                  <Dropdown menu={menuProps}>
                    <Button>
                      Button <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>

                <div className={cx('filter-name')}>
                  <label>Status: </label>
                  <Dropdown menu={menuProps}>
                    <Button>
                      Button <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
              </div>

              <div className={cx('list-account')}>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  rowKey="key"
                  pagination={false}
                  scroll={{ y: 350 }}
                />
              </div>
            </div>

            <div className={cx('content__form-right')}>
              <div className={cx('card__infor')}>
                <div className={cx('title')}><h3>Account Detail</h3></div>
                <hr />

                {/* Info */}
                {selectedAccount && (
                  <div className={cx('infor')}>
                    <div className={cx('avt-name')}>
                      <div className={cx('avt')}>
                        <img src={selectedAccount.avatar} alt="avatar" />
                      </div>
                      <div className={cx('name')}>
                        <h4>{selectedAccount.name}</h4>
                        <span>{selectedAccount.role}</span>
                      </div>
                    </div>

                    <div className={cx('info-detail')}>
                      <label>Username: </label>
                      <input type="text" value={selectedAccount.username} readOnly className={cx('detail-input')}/>
                    </div>
                    <div className={cx('info-detail')}>
                      <label>Email: </label>
                      <input type="text" value={selectedAccount.email} readOnly className={cx('detail-input')}/>
                    </div>
                    <div className={cx('info-detail')}>
                      <label>Phone: </label>
                      <input type="text" value={selectedAccount.phone} readOnly className={cx('detail-input')}/>
                    </div>
                    <div className={cx('info-detail')}>
                      <label>Role: </label>
                      {isEditing ? (
                        <select
                          name="role"
                          value={editableAccount.role}
                          onChange={handleInputChange}
                          className={cx('detail-input')}
                        >
                          {roleOptions.map((role, index) => (
                            <option key={index} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          name="role"
                          value={editableAccount.role}
                          readOnly={!isEditing}
                          onChange={handleInputChange}
                          className={cx('detail-input')}
                        />
                      )}
                    </div>

                    <div className={cx('info-detail')}>
                      <label>Status: </label>
                      {isEditing ? (
                        <select
                          name="status"
                          value={editableAccount.status}
                          onChange={handleInputChange}
                          className={cx('detail-input')}
                        >
                          {statusOptions.map((status, index) => (
                            <option key={index} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          name="status"
                          value={editableAccount.status}
                          readOnly={!isEditing}
                          onChange={handleInputChange}
                          className={cx('detail-input')}
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* Action */}
                <div className={cx('card-action')}>
                 
                <button className={cx('btn__edit')} onClick={handleEditToggle}>
                  <FontAwesomeIcon className={cx('icon-btn')} icon={isEditing ? faSave : faPen} />
                  {isEditing ? 'Save' : 'Edit'}
                </button>
                 
                  <Button className={cx('btn_delete')} onClick={showDeleteConfirm}>
                    <FontAwesomeIcon className={cx('icon-btn')} icon={faTrash} />
                    Delete
                  </Button>
               
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default Account
