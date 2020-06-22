import React from 'react'
import {Modal, Button, SelectPicker, Input} from 'rsuite'

const ModalAddAgent = ({
    change_name,
    toogle_open,
    name,
    open,
    provinsi_name,
    sector_name,
    loading,
    on_save,
    on_open,
    data,
    children,
}) => {

    return (
        <React.Fragment>
            <div onClick={on_open.bind(this, data)} className="d-inline-block">
                {children}
            </div>
            <Modal backdrop={true} show={open} onHide={toogle_open}>
                <Modal.Header>
                    <Modal.Title>
                        Tambah News
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Input className="w-100" placeholder="Title" value={title} onChange={change_title}/>
                    <Input className="w-100" placeholder="Commodity" value={Commodity} onChange={change_commodity}/>
                    <Input className="w-100" placeholder="Province" value={Province} onChange={change_province}/>
                    <Input className="w-100" placeholder="Featured Image" value={image} onChange={change_image}/>
                    <Input className="w-100" placeholder="Content" value={content} onChange={change_content}/>
                    <Input className="w-100" placeholder="Additional inf" value={additional} onChange={change_additional}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button appearance="primary" loading={loading} onClick={on_save}>
                        Simpan
                    </Button>
                    <Button appearance="subtle" onClick={toogle_open}>
                        Batal
                    </Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment>

    )
}

export default ModalAddAgent