import React from 'react'
import {Modal, Button, SelectPicker, Input} from 'rsuite'

const ModalAddSector = ({
    toogle_open,
    open,
    on_open,
    on_approved,
    on_not_approved,
    data,
    children,
    loading,
}) => {

    return (
        <React.Fragment>
            <div onClick={on_open.bind(this, data)} className="d-inline-block">
                {children}
            </div>
            <Modal backdrop={true} show={open} onHide={toogle_open} size={"sm"}>
                <Modal.Header>
                    <Modal.Title>
                        Approve News
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <Button onClick={on_approved} className="mr-3" loading={loading}>
                        Approve
                    </Button>
                    <Button onClick={on_not_approved} loading={loading}>
                        Not Approve
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button appearance="subtle" onClick={toogle_open}>
                        Batal
                    </Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment>

    )
}

export default ModalAddSector