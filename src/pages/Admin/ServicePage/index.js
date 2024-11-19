import { useState } from "react";
import classNames from "classnames/bind";
import { Modal, Form, Input, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "~/components/ServiceCard";

import style from './ServicePage.module.scss';

const cx = classNames.bind(style);

function ServicePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const handleAddService = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSave = () => {
        form.validateFields()
            .then((values) => {
                console.log("New service added:", values);
                // Handle saving the service (e.g., API request to add the service)
                setIsModalOpen(false);
            })
            .catch((info) => {
                console.error("Validation Failed:", info);
            });
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-form')}>
                <div className={cx('input-container')}>
                    <input placeholder="Search..." />
                    <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                </div>

                <div className={cx('btn-add')}>
                    <button onClick={handleAddService}>+Add new service</button>
                </div>
            </div>
            <div className={cx('service-form')}>
                <div className={cx('list-service')}>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>

            {/* Ant Design Modal */}
            <Modal
                title="Add New Service"
                open={isModalOpen}
                onOk={handleSave}
                onCancel={handleCancel}
                okText="Save"
                cancelText="Cancel"
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="serviceName"
                        label="Service Name"
                        rules={[{ required: true, message: "Please enter the service name" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true, message: "Please enter the price" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="image"
                        label="Service Image"
                        valuePropName="fileList"
                        getValueFromEvent={(e) => e.fileList}
                        rules={[{ required: true, message: "Please upload an image" }]}
                    >
                        <Upload
                            listType="picture-card"
                            maxCount={1}
                            beforeUpload={() => false} // Prevent automatic upload
                        >
                            {uploadButton}
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default ServicePage;
