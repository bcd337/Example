import React from 'react'
import {Modal, Button, Input} from 'rsuite'

const ModalAddCommodity = ({
    //action
    change_name,
    change_commodity_type,
    toogle_open,
    //value
    name,
    comodity_type,
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
                        Tambah Komodity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="">Nama Komoditi</label>
                    <Input className="w-100" placeholder="Nama Komoditi" value={name} onChange={change_name}/>
                    <label htmlFor="">Tipe Komoditi</label>
                    <Input className="w-100" placeholder="Tipe" value={comodity_type} onChange={change_commodity_type}/>
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

export default ModalAddCommodity