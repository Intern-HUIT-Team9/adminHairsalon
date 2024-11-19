import { useState } from "react";
import classNames from "classnames/bind";
import { Modal, Form, Input, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import style from "./ServiceCard.module.scss";

const cx = classNames.bind(style);

function ServiceCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [imageUrl, setImageUrl] = useState("https://picsum.photos/200/300");

    const handleEdit = () => {
        setIsModalOpen(true);
        form.setFieldsValue({
            serviceName: "Cắt - duỗi - nhuộm",
            price: "Giá từ 100k",
        });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSave = () => {
        form.validateFields()
            .then((values) => {
                console.log("Updated values:", values);
                // Update image if a new one is uploaded
                if (values.image) {
                    const file = values.image.file.originFileObj;
                    const imageUrl = URL.createObjectURL(file);
                    setImageUrl(imageUrl);
                }
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
        <div className={cx("wrapper")}>
            <div className={cx("card-img")}>
                <img src={imageUrl} alt="Service" />
            </div>
            <div className={cx("card-infor")}>
                <h4 className={cx("service-name")}>Cắt - duỗi - nhuộm</h4>
                <span>Giá từ 100k</span>
            </div>
            <div className={cx("card-button")}>
                <button onClick={handleEdit}>Edit</button>
            </div>

            {/* Ant Design Modal */}
            <Modal
                title="Edit Service Information"
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

export default ServiceCard;
