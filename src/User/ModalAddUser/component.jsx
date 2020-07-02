import React from 'react'
import {
    Modal, Button, Input, InputPicker, FormGroup, DatePicker, ControlLabel, Form, AutoComplete,
    Row,Col,Grid,
} from 'rsuite'


class ModalAddUser extends React.Component{
    componentDidMount() {        
        const { 
            get_province_data,
        } = this.props
        
        get_province_data()
    }
    render(){
        const { 
            //action
            change_name,
            change_email,
            change_phone,
            change_password,
            change_re_password,
            change_pob,change_dob, change_role,
            change_province_id,change_sector_id,
            toogle_open,
            on_save,
            
            //value
            name,
            email,
            phone,
            password,
            re_password,
            pob,
            dob,
            user_role_data,
            province_id,
            sector_id,
            provinces_data,
            sectors_data,

            open,
            loading,
            children
        } = this.props

        return(
            <React.Fragment>
                <div onClick={toogle_open} className="d-inline-block">
                    {children}
                </div>
                <Modal backdrop={true} show={open} onHide={toogle_open} size={'lg'}>
                    <Modal.Header>
                        <Modal.Title>
                            Tambah User
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Grid fluid>
                            <Row className="show-grid">
                                <Form fluid>
                                    <Col xs={10}>
                                        <FormGroup controlId="">
                                            <ControlLabel>Nama Lengkap: </ControlLabel>
                                            <Input className="w-100" placeholder="Nama Lengkap" value={name} onChange={change_name}/>
                                        </FormGroup>
    
                                        <FormGroup controlId="">
                                            <ControlLabel>Email: </ControlLabel>
                                            <Input className="w-100" placeholder="Email" value={email} onChange={change_email} type="email" />
                                        </FormGroup>
    
                                        <FormGroup controlId="">
                                            <ControlLabel>No Telp:</ControlLabel>
                                            <Input className="w-100" placeholder="No Telp" value={phone} onChange={change_phone}/>
                                        </FormGroup>
    
                                        <FormGroup controlId="">
                                            <ControlLabel>Password:</ControlLabel>
                                            <Input className="w-100" placeholder="Password" value={password} onChange={change_password}/>
                                        </FormGroup>
    
                                        <FormGroup controlId="">
                                            <ControlLabel>Re-Password:</ControlLabel>
                                            <Input className="w-100" placeholder="Re Password" value={re_password} onChange={change_re_password}/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={10} mdOffset={2}>
                                        <FormGroup controlId="">
                                            <ControlLabel>User Role:</ControlLabel>
                                            <InputPicker
                                                data={user_role_data}
                                                onChange={change_role}
                                                menuClassName='rs-picker-menu'
                                            />
                                        </FormGroup>
    
                                        <FormGroup controlId="">
                                            <ControlLabel>Tempat Lahir:</ControlLabel>
                                            <Input className="w-100" placeholder="tempat lahir" value={pob} onChange={change_pob}/>
                                        </FormGroup>
    
                                        <FormGroup controlId="">
                                            <ControlLabel>Tanggal Lahir:</ControlLabel>
                                            <DatePicker
                                                oneTap
                                                menuClassName='rs-picker-menu'
                                                appearance="default"
                                                placeholder="Pilih Tanggal"
                                                style={{ width: 280 }}
                                                onChange={change_dob}
                                            />
                                        </FormGroup>
    
                                        <FormGroup controlId="">
                                            <ControlLabel>Propinsi:</ControlLabel>
                                            <InputPicker
                                                menuClassName='rs-picker-menu'
                                                loading={loading} data={provinces_data} onChange={change_province_id} labelKey="name"
                                                valueKey="id" style={{ width: 224 }}
                                            />
                                        </FormGroup>
    
                                        <FormGroup controlId="">
                                            <ControlLabel>Polres:</ControlLabel>
                                            <InputPicker
                                                menuClassName='rs-picker-menu'
                                                loading={loading}
                                                data={sectors_data} placeholder="polres"
                                                onChange={change_sector_id} labelKey="name" valueKey="id" style={{ width: 224 }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Form>
                            </Row>                        
                        </Grid>
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
}

export default ModalAddUser