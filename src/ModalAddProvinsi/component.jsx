import React from 'react'
import {Modal, Button, SelectPicker, Input} from 'rsuite'

const ModalAddProvinsi = ({
    change_name,
    toogle_open,
    name,
    open,
    loading,
    on_save,
    children
}) => {

    return (
        <React.Fragment>
            <div onClick={toogle_open} className="d-inline-block">
                {children}
            </div>
            <Modal backdrop={true} show={open} onHide={toogle_open}>
                <Modal.Header>
                    <Modal.Title>
                        Tambah Provinsi
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input className="w-100" placeholder="Nama Provinsi" value={name} onChange={change_name}/>
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

export default ModalAddProvinsi