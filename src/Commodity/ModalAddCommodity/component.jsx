import React from 'react'
import {
    Modal, Button, Input, FormGroup,
    Radio, RadioGroup,
} from 'rsuite'

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
                    <FormGroup controlId="radioList">
                        <label htmlFor="">Nama Komoditi:</label>
                        <Input className="w-100" placeholder="Nama Komoditi" value={name} onChange={change_name}/>
                    </FormGroup>

                    <FormGroup controlId="radioList">
                        <label htmlFor="radioList">Tipe Komoditi:</label>
                        <RadioGroup name="radioList" onChange={change_commodity_type} checked={comodity_type} inline>
                            <Radio value="1" >Sembako</Radio>
                            <Radio value="2" >Bapoting</Radio>
                        </RadioGroup>
                    </FormGroup>
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