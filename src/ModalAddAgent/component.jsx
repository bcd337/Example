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
                        Tambah Agent
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        Provinsi: {provinsi_name}
                    </div>
                    <div className="mb-3">
                        Sector: {sector_name}
                    </div>
                    <Input className="w-100" placeholder="Nama Agent" value={name} onChange={change_name}/>
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