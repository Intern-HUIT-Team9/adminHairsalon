import classNames from "classnames/bind";
import { Select, Table } from 'antd';

import styles from './ModalDetailCustomer.module.scss'

const cx = classNames.bind(styles);
const { Option } = Select;

const dataSource = [
    {
        key: '1',
        code: 'DV001',
        serviceName: 'Làm tóc',
        price: '150.000 VNĐ',
        date: '21/10/2024',
        status: 'Hoàn thành',
    },
    {
        key: '2',
        code: 'DV002',
        serviceName: 'Làm tóc',
        price: '150.000 VNĐ',
        date: '21/10/2024',
        status: 'Đã hủy',
    },
    {
        key: '3',
        code: 'DV003',
        serviceName: 'Làm tóc',
        price: '150.000 VNĐ',
        date: '21/10/2024',
        status: 'Đã hủy',
    },
    {
        key: '4',
        code: 'DV004',
        serviceName: 'Làm tóc',
        price: '150.000 VNĐ',
        date: '21/10/2024',
        status: 'Đã hủy',
    },
    {
        key: '4',
        code: 'DV004',
        serviceName: 'Làm tóc',
        price: '150.000 VNĐ',
        date: '21/10/2024',
        status: 'Đã hủy',
    },
    {
        key: '4',
        code: 'DV004',
        serviceName: 'Làm tóc',
        price: '150.000 VNĐ',
        date: '21/10/2024',
        status: 'Đã hủy',
    },
    {
        key: '4',
        code: 'DV004',
        serviceName: 'Làm tóc',
        price: '150.000 VNĐ',
        date: '21/10/2024',
        status: 'Đã hủy',
    },
    {
        key: '4',
        code: 'DV004',
        serviceName: 'Làm tóc',
        price: '150.000 VNĐ',
        date: '21/10/2024',
        status: 'Đã hủy',
    }    
];

const columns = [
    {
        title: 'Mã số',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'serviceName',
        key: 'serviceName',
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Thời gian',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
    },
];


function ModalDetailCustomer() {
    return ( 
        <div className={cx('content-modal')}>
            <div className={cx('title')}>
                <h4>Customer Infomation</h4>
            </div>
            <hr></hr>
            <div className={cx('content')}>

                <div className={cx('avatar')}>
                    <img src="https://picsum.photos/200/300" alt="avt"/>
                </div>
                <div className={cx('main-info')}>
                    <div className={cx('user-name')}>
                        <span>Nguyễn Xuân Bính</span>
                    </div>
                    <div className={cx('type')}>
                        Type:
                        <span>Premium</span>
                    </div>
                    <div className={cx('status')}>
                        Status:
                        <span>Normal</span>
                    </div>
                </div>
                <div className={cx('detail-info')}>
                    <div className={cx('user-code')}>
                        Code:
                        <span>KH001</span>
                    </div>
                    <div className={cx('date')}>
                        Date:
                        <span>1/1/1999</span>
                    </div>
                    <div className={cx('gender')}>
                        Gender:
                        <span>Man</span>
                    </div>
                </div>
                <div className={cx('service-used')}>
                        Total service used:
                        <span>10</span>
                </div>
            </div>
            <div className={cx('service-used')}>
                <div className={cx('filer-services')}>
                   <p> List of servies</p>
                   <div>
                        <label>Name: </label>
                        <Select placeholder="Select name" style={{ width: 200 }}>
                            <Option value="service1">Service 1</Option>
                            <Option value="service2">Service 2</Option>
                            <Option value="service3">Service 3</Option>
                        </Select>
                    </div>
                    <div>
                        <label>Price: </label>
                        <Select placeholder="Select price" style={{ width: 200 }}>
                            <Option value="low">Low</Option>
                            <Option value="medium">Medium</Option>
                            <Option value="high">High</Option>
                        </Select>
                    </div>
                    <div>
                        <label>Time: </label>
                        <Select placeholder="Select time" style={{ width: 200 }}>
                            <Option value="morning">Morning</Option>
                            <Option value="afternoon">Afternoon</Option>
                            <Option value="evening">Evening</Option>
                        </Select>
                    </div>
                    <div>
                        <label>Status: </label>
                        <Select placeholder="Select status" style={{ width: 200 }}>
                            <Option value="active">Active</Option>
                            <Option value="inactive">Inactive</Option>
                            <Option value="pending">Pending</Option>
                        </Select>
                    </div>
                </div>

                {/* table of list */}
                <div className={cx('table-services')}>
                    <Table 
                        dataSource={dataSource} 
                        columns={columns} 
                        pagination={false} 
                        scroll={{ y: 300, x: '100%' }} 
                    />
                </div>
            </div>
        </div>
     );
}

export default ModalDetailCustomer;