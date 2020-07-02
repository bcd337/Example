import React, {Component} from 'react'
import AutoSizer from "react-virtualized-auto-sizer";
import {
    Table,
    Input,
    Button,
    InputGroup,
    Icon,
    ButtonToolbar, Modal, Pagination,
} from 'rsuite';
import Moment from 'moment';

import ModalAddUser from './ModalAddUser'
import ModalDetailUser from './ModalDetailUser'

const {Column, HeaderCell, Cell} = Table;

class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modal_delete_is_open:false,
            detail:{},
            tr_modal_height:"40px",
            td_modal_width:"150px",
            is_show_password:false,
        };
    }    

    componentDidMount() {        
        const { 
            get_data,
        } = this.props
        
        get_data()
    }
    render(){
        const { 
            // action
            get_data,
            on_delete,
            show_detail,

            // value
            data_loading,
            data,
            page,
            total_pages,
        } = this.props
        return(
            <div
                className="p-3"
                style={{
                height: '100%',
                display: 'flex',
                flexFlow: 'column'
            }}>
                <div className="row mb-3">
                    <div className="col-4">
                        <InputGroup disabled>
                            <Input placeholder="Cari User"/>
                            <InputGroup.Button>
                                <Icon icon="search"/>
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                    <div className="col text-right">
                        <ModalAddUser>
                            <Button color="green">
                                <i className={`fa fa-plus mr-2`}></i>
                                Tambah User Baru
                            </Button>
                        </ModalAddUser>
                    </div>
                </div>
                <div
                    style={{
                    display: 'flex',
                    flexFlow: 'column',
                    flex: '1 1 auto'
                }}>
                    <div className="row h-100">
                        <div className="col-12">
                            <div
                                className="p-0 col-12 h-100"
                                style={{
                                border: '1px solid #e5e5ea'
                            }}>
                                <div className="w-100 h-100">
                                    <AutoSizer disableWidth>
                                        {({height}) => (
                                            <Table
                                                loading={data_loading}
                                                affixHeader={1}
                                                virtualized={true}
                                                height={height}
                                                rowHeight={70}
                                                data={data}
                                            >
                                                <Column width={60} align="center" verticalAlign="middle">
                                                    <HeaderCell>
                                                        <i className="fa fa-sort-asc"></i>No
                                                    </HeaderCell>
                                                    <Cell>
                                                        {
                                                            (_, index) => { 
                                                                return index+1
                                                            }
                                                        } 
                                                    </Cell>
                                                </Column>

                                                <Column flexGrow={1} verticalAlign="middle">
                                                    <HeaderCell className="text-capitalize">Nama User</HeaderCell>
                                                    <Cell dataKey="name"/>
                                                </Column>

                                                <Column flexGrow={1} verticalAlign="middle">
                                                    <HeaderCell className="text-capitalize">Propinsi</HeaderCell>
                                                    <Cell dataKey="province_name"/>
                                                </Column>

                                                <Column flexGrow={1} verticalAlign="middle">
                                                    <HeaderCell className="text-capitalize">Polres</HeaderCell>
                                                    <Cell dataKey="sector_name"/>
                                                </Column>

                                                <Column flexGrow={1} verticalAlign="middle">
                                                    <HeaderCell className="text-capitalize">No Telp</HeaderCell>
                                                    <Cell dataKey="phone"/>
                                                </Column>

                                                <Column flexGrow={1} verticalAlign="middle">
                                                    <HeaderCell className="text-capitalize">Email</HeaderCell>
                                                    <Cell dataKey="email"/>
                                                </Column>
                                                        
                                                <Column width={110} align="center" verticalAlign="middle">
                                                    <HeaderCell className="text-capitalize">Aksi</HeaderCell>                        
                                                    <Cell className="pr-2">
                                                        {
                                                            rowData => {
                                                                return (
                                                                    <>
                                                                        <ButtonToolbar  className="mb-1">
                                                                            <Button color="yellow" 
                                                                                size="xs" 
                                                                                className="text-dark" block
                                                                                onClick={()=>show_detail(rowData.id)}
                                                                            >
                                                                                Detail
                                                                            </Button>
                                                                                
                                                                        </ButtonToolbar>
                                                                        <ButtonToolbar >
                                                                            <Button
                                                                                color="red" size="xs" block
                                                                                onClick={
                                                                                    ()=>this.setState({
                                                                                        modal_delete_is_open: !this.state.modal_delete_is_open,
                                                                                        detail:rowData
                                                                                    })
                                                                                }
                                                                            >
                                                                                Hapus
                                                                            </Button>
                                                                        </ButtonToolbar>                                                                                
                                                                    </>
                                                                );
                                                            }
                                                        }
                                                    </Cell>
                                                </Column>
                                            </Table>
                                        )}
                                    </AutoSizer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-3">
                    <Pagination
                        prev
                        last
                        next
                        first
                        size="md"
                        pages={total_pages}
                        activePage={page}
                        onSelect={(value)=>get_data(value)}
                    />
                </div>

                <Modal
                    show={this.state.modal_delete_is_open}
                    onHide={this.state.on_delete_modal_togle}
                    onHide={
                        ()=>this.setState({
                            modal_delete_is_open: !this.state.modal_delete_is_open
                        })
                    }
                >
                    <Modal.Header>
                        <Modal.Title>
                            Apakah Anda Yakin Menghapus User?
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table>
                            <tbody>
                                <tr height={this.state.tr_modal_height}>
                                    <td width={this.state.td_modal_width}>Nama User</td>
                                    <td>: &nbsp;</td>
                                    <td>{this.state.detail.name}</td>
                                </tr>
                                <tr height={this.state.tr_modal_height}>
                                    <td>Phone</td>
                                    <td>: </td>
                                    <td>{this.state.detail.phone}</td>
                                </tr>
                                <tr height={this.state.tr_modal_height}>
                                    <td>Email</td>
                                    <td>: </td>
                                    <td>{this.state.detail.email}</td>
                                </tr>
                                <tr height={this.state.tr_modal_height}>
                                    <td>Tempat Taggal Lahir</td>
                                    <td>: </td>
                                    <td>{this.state.detail.pob}, {Moment(this.state.detail.dob).format('DD MMMM YYYY')}</td>
                                </tr>
                                <tr height={this.state.tr_modal_height}>
                                    <td>Propinsi</td>
                                    <td>: </td>
                                    <td>{this.state.detail.province_name}</td>
                                </tr>
                                <tr height={this.state.tr_modal_height}>
                                    <td>Polres</td>
                                    <td>: </td>
                                    <td>{this.state.detail.sector_name}</td>
                                </tr>
                                <tr height={this.state.tr_modal_height}>
                                    <td>Tanggal dibuat</td>
                                    <td>: </td>
                                    <td>{Moment(this.state.detail.created_at).format('DD MMMM YYYY')}{}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button appearance="primary"
                            onClick={()=>{
                                on_delete(this.state.detail.id)
                                this.setState({
                                    modal_delete_is_open: !this.state.modal_delete_is_open
                                })
                            }}
                            color="red"
                        >
                            Hapus
                        </Button>
                        <Button
                            appearance="subtle"
                            onClick={
                                ()=>this.setState({
                                    modal_delete_is_open: !this.state.modal_delete_is_open
                                })
                            }
                        >
                            Batal
                        </Button>
                    </Modal.Footer>
                </Modal>
                <ModalDetailUser />
            </div>
        );
    }
}

export default User