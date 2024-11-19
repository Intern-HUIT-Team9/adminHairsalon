import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import { Breadcrumb, Layout, Menu, Button, Dropdown, message, Table, Space, Modal } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUserTie, faUser, faCut, faSearch, faEye, faPen, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import { ExclamationCircleFilled } from '@ant-design/icons';
import styles from './Customer.module.scss';
import ModalDetailCustomer from '~/components/ModalDetailCustomer';

const { confirm } = Modal;
const cx = classNames.bind(styles);
const { Header, Content } = Layout;

// Tạo mảng `items` với các nhãn và icon tùy chỉnh


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



function Customer() {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [selectedItem, setSelectedItem] = useState('manager'); 
    const [isEditing, setIsEditing] = useState(false);
    const [editableAccount, setEditableAccount] = useState({ ...selectedAccount });
    const [modalDetailOpen, setModalDetailOpen] = useState(false);

    const statusOptions = ['Active', 'Inactive'];

    const handleEditToggle = () => {
      if (isEditing) {
        console.log('Data saved:', editableAccount);
      }
      setIsEditing(!isEditing);
    };

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
        <span>Customer management page</span>
      </div>

      <div className={cx('wrapper-content')}>
        <Layout>
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

                <button className={cx('btn__viewDetail')}onClick={() => setModalDetailOpen(true)}>
                  <FontAwesomeIcon className={cx('icon-btn')} icon={faEye} />
                  view detail
                </button>
                 
                <button className={cx('btn__edit')} onClick={handleEditToggle}>
                  <FontAwesomeIcon className={cx('icon-btn')} icon={isEditing ? faSave : faPen} />
                  {isEditing ? 'Save' : 'Edit'}
                </button>
                 
                  <Button className={cx('btn_delete')} onClick={showDeleteConfirm}>
                    <FontAwesomeIcon className={cx('icon-btn')} icon={faTrash} />
                    Delete
                  </Button>
               
                </div>

                <Modal
                    centered
                    open={modalDetailOpen}
                    onOk={() => setModalDetailOpen(false)}
                    onCancel={() => setModalDetailOpen(false)}
                    width={1000}
                    footer ={null}
                >
                    <ModalDetailCustomer/>

                </Modal>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default Customer;
