import React from 'react'
import {
    Modal, Button, Loader, InputGroup, Input,
    Whisper, Tooltip
} from 'rsuite'

import Moment from 'moment'

class ModalDetailUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tr_modal_height:"40px",
            td_modal_width:"150px",
            is_show_password:false,
        };
    }

    render(){
        const tooltip = (
            <Tooltip>
              Tampilkan Password?
            </Tooltip>
        );

        const { 
            //action
            toogle_open,
            
            //value
            detail_user,
            open,
            loading,
            children
        } = this.props

        return(
            <React.Fragment>
                <div onClick={toogle_open} className="d-inline-block">
                    {children}
                </div>
                <Modal backdrop={true} show={open} onHide={toogle_open} size={'sm'}>
                    <Modal.Header>
                        <Modal.Title>
                            Detail User
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            {
                                loading ? (
                                    <div style={{ textAlign: 'center' }}>
                                        <Loader size="md" />
                                    </div>
                                ) : (
                                    <table>
                                        <tbody>
                                            <tr height={this.state.tr_modal_height}>
                                                <td width={this.state.td_modal_width}>Nama User</td>
                                                <td>: &nbsp;</td>
                                                <td>{detail_user.name}</td>
                                            </tr>
                                            <tr height={this.state.tr_modal_height}>
                                                <td>Phone</td>
                                                <td>: </td>
                                                <td>{detail_user.phone}</td>
                                            </tr>
                                            <tr height={this.state.tr_modal_height}>
                                                <td>Email</td>
                                                <td>: </td>
                                                <td>{detail_user.email}</td>
                                            </tr>
                                            <tr height={this.state.tr_modal_height}>
                                                <td>Tempat Taggal Lahir</td>
                                                <td>: </td>
                                                <td>{detail_user.pob}, {Moment(detail_user.dob).format('DD MMMM YYYY')}</td>
                                            </tr>
                                            <tr height={this.state.tr_modal_height}>
                                                <td>Propinsi</td>
                                                <td>: </td>
                                                <td>{detail_user.province_name}</td>
                                            </tr>
                                            <tr height={this.state.tr_modal_height}>
                                                <td>Polres</td>
                                                <td>: </td>
                                                <td>{detail_user.sector_name}</td>
                                            </tr>
                                            <tr height={this.state.tr_modal_height}>
                                                <td>Tanggal dibuat</td>
                                                <td>: </td>
                                                <td>{Moment(detail_user.created_at).format('DD MMMM YYYY')}{}</td>
                                            </tr>
                                            <tr height={this.state.tr_modal_height}>
                                                <td>Password</td>
                                                <td>: </td>
                                                <td>
                                                    <InputGroup>
                                                        <Input
                                                            value={(this.state.is_show_password)?detail_user.password_text:"******"}
                                                        />
                                                        <InputGroup.Addon
                                                            style={{cursor: "pointer"}}
                                                            onClick={()=>this.setState({is_show_password:!this.state.is_show_password})}
                                                        >
                                                            <Whisper placement="top" trigger="hover" speaker={tooltip}>
                                                                <i className="fa fa-eye"></i>
                                                            </Whisper>
                                                        </InputGroup.Addon>
                                                    </InputGroup>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                )
                            }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button appearance="primary" onClick={toogle_open}>
                            Selesai
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default ModalDetailUser