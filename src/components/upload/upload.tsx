import React from "react";
import {Upload, Modal} from 'antd';
import {UploadChangeParam, UploadFile} from "antd/lib/upload/interface";
import {UploadStyle} from "./upload.style";

function getBase64(file: any) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);

        reader.onerror = error => reject(error);
    });
}

export interface CustomUploaderProps {
    fileList: any[];
    preview?: string;
    onChange: (files: UploadChangeParam) => void;
    maxFiles: number;
    accept?: string;
    disabled?: boolean;
}

const CustomUploader = (props: CustomUploaderProps) => {
    const [previewVisible, setPreviewVisible] = React.useState(false)
    const [previewImage, setPreviewImage] = React.useState<any>("");
    const [previewTitle, setPreviewTitle] = React.useState("");

    const handlePreview = async (file: any) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    }

    const handleCancel = () => setPreviewVisible(false);

    const uploadHandlers: any = {
        beforeUpload: (file: UploadFile) => {
            props.onChange({fileList: [...props.fileList, file]} as UploadChangeParam)

            return false;
        },
        onChange: (file: UploadChangeParam) => {
            props.onChange(file)

            return false;
        },
        fileList: props.fileList?.map(item => {
            if(typeof item ==="string") {
                return {
                    uid: item,
                    name: "",
                    status: "done",
                    url: item
                }
            }

            return item
        })
    };

    return (
        <UploadStyle>
            <Upload
                listType="picture-card"
                onPreview={handlePreview}
                accept={props.accept || "image/png, image/jpeg, image/jpg"}
                maxCount={props.maxFiles}
                multiple={props.maxFiles > 1}
                disabled={props.disabled}
                {...uploadHandlers}
            >
                {
                    props.fileList?.length >= props.maxFiles ? null : <div>
                        <img src={'/static/assets/images/icons/upload-icon.svg'} alt=""/>
                        <div style={{marginTop: 8}}>
                            <div className="title">Add Picture</div>
                            <div className="description">Max size: 2Mb</div>
                        </div>
                    </div>
                }
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{width: '100%'}} src={previewImage}/>
            </Modal>
        </UploadStyle>
    )
}

export default CustomUploader