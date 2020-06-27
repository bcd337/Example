import React, {Component} from 'react'
import AutoSizer from "react-virtualized-auto-sizer";
import {
    Table,
    Input,
    ButtonToolbar,
    Button,
    InputGroup,
    Icon,
    Panel,
    Breadcrumb,
    Modal,
} from 'rsuite';

import ModalAddCommodity from './ModalAddCommodity'


const {Column, HeaderCell, Cell} = Table;

class Commodity extends Component{
    componentDidMount() { 
        const { 
            get_data,
        } = this.props
        
        get_data()
    }
    render(){
        const { 
            on_delete_confirm,
            on_delete_modal_togle,
            on_delete,

            commodity_loading,
            data,
            detail,
            modal_delete_is_open,
        } = this.props        
        
        return(
            <>
                <div
                    className="p-3"
                    style={{
                    height: '100%',
                    display: 'flex',
                    flexFlow: 'column'
                }}>
                    <div className="row mb-3">
                        <div className="col font-weight-bold">
                            Managemen Komoditi
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Breadcrumb className="p-0">
                                <Breadcrumb.Item >Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item >Input Data</Breadcrumb.Item>
                                <Breadcrumb.Item >Managemen Komoditi</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div
                        style={{
                        display: 'flex',
                        flexFlow: 'column',
                        flex: '1 1 auto'
                    }}>
                        <div className="row h-100">
                            <div className="col-6 flex-grow-1 h-100">
                                <Panel bordered className="h-100 d-flex align-items-stretch child-w-100" >
                                    <div className="d-flex flex-column h-100" >
                                        <div className="d-flex align-items-center">
                                            <div className="font-weight-bold text-nowrap pr-3"> 
                                                Kategori Komoditi
                                            </div>
                                            <div className="px-3">
                                                <InputGroup >
                                                    <Input />
                                                    <InputGroup.Addon>
                                                        <Icon icon="search" />
                                                    </InputGroup.Addon>
                                                </InputGroup>
                                            </div>
                                            <div>
                                                <ModalAddCommodity>
                                                    <Button color="yellow"  >
                                                        <Icon icon="pencil-square"  /> Tambah
                                                    </Button>
                                                </ModalAddCommodity>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <AutoSizer disableWidth>
                                                {({height}) => (
                                                    <Table
                                                        loading={commodity_loading}
                                                        affixHeader={1}
                                                        virtualized={true}
                                                        height={height}
                                                        data={data}
                                                        rowHeight={80}
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
                                                            <HeaderCell className="text-capitalize">Nama</HeaderCell>
                                                            <Cell dataKey="name"/>
                                                        </Column>
        
                                                        <Column flexGrow={1} verticalAlign="middle">
                                                            <HeaderCell className="text-capitalize">Foto</HeaderCell>
                                                            <Cell>
                                                                {data => {
                                                                    if ( !data.icon) { 
                                                                        return false
                                                                    }

                                                                    return (
                                                                        <img src={data.icon}/>
                                                                    )
                                                                }}
                                                            </Cell>
                                                        </Column>
        
                                                        <Column flexGrow={1} verticalAlign="middle">
                                                            <HeaderCell className="text-capitalize">Tipe</HeaderCell>
                                                            <Cell dataKey="type"/>
                                                        </Column>
        
                                                        <Column flexGrow={1} verticalAlign="middle">
                                                            <HeaderCell className="text-capitalize">Aksi</HeaderCell>
                                                            <Cell className="pr-2">
                                                                {
                                                                    rowData => {
                                                                        return (
                                                                            <>
                                                                                <ButtonToolbar  className="mb-1">
                                                                                    <Button color="yellow" size="xs" className="text-dark" block>Ubah</Button>
                                                                                </ButtonToolbar>
                                                                                <ButtonToolbar  >
                                                                                    <Button
                                                                                        color="red" size="xs" block
                                                                                        onClick={
                                                                                            ()=>on_delete_confirm(rowData)
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
                                </Panel>
                            </div>
                            <div className="col-6 flex-grow-1">
                                <div className="d-flex h-100 flex-column">
                                    <Panel bordered className="h-100 d-flex align-items-stretch child-w-100" >
                                        <div className="d-flex flex-column h-100 flex-grow-1" >
                                            <div className="d-flex align-items-center">
                                                <div className="font-weight-bold text-nowrap pr-3"> 
                                                    Sub Kategori Komoditi
                                                </div>
                                                <div className="flex-grow-1 px-3">
                                                    <InputGroup >
                                                        <Input />
                                                        <InputGroup.Addon>
                                                            <Icon icon="search" />
                                                        </InputGroup.Addon>
                                                    </InputGroup>
                                                </div>
                                                <div>
                                                    <Button color="yellow"  >
                                                        <Icon icon="pencil-square"  /> Tambah
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <AutoSizer disableWidth>
                                                    {({height}) => (
                                                        <Table
                                                            loading={false}
                                                            affixHeader={1}
                                                            virtualized={true}
                                                            height={height}
                                                            data={[]}>
                                                            <Column width={60} align="center">
                                                                <HeaderCell>
                                                                    <i className="fa fa-sort-asc"></i>No
                                                                </HeaderCell>
                                                                <Cell dataKey="no"/>
                                                            </Column>
        
                                                            <Column flexGrow={1}>
                                                                <HeaderCell className="text-capitalize">Name</HeaderCell>
                                                                <Cell>
                                                                    {
                                                                        rowData => {
                                                                            return(
                                                                                <a href="#">
                                                                                    {rowData.id}
                                                                                </a>
                                                                            )
                                                                        }
                                                                    }
                                                                </Cell>
                                                            </Column>
        
                                                            <Column flexGrow={1}>
                                                                <HeaderCell className="text-capitalize">Photo</HeaderCell>
                                                                <Cell dataKey="photo"/>
                                                            </Column>
        
                                                            <Column flexGrow={1}>
                                                                <HeaderCell className="text-capitalize">Type</HeaderCell>
                                                                <Cell dataKey="type"/>
                                                            </Column>
        
                                                            <Column flexGrow={1}>
                                                                <HeaderCell className="text-capitalize">Action</HeaderCell>
                                                                <Cell dataKey="action"/>
                                                            </Column>
        
                                                        </Table>
                                                    )}
                                                </AutoSizer>
                                            </div>
                                        </div>
                                    </Panel>
        
                                    <Panel bordered className="h-100 d-flex align-items-stretch child-w-100" >
                                        <div className="d-flex flex-column h-100 flex-grow-1" >
                                            <div className="d-flex align-items-center">
                                                <div className="font-weight-bold text-nowrap pr-3"> 
                                                    Sub Kategori Komoditi
                                                </div>
                                                <div className="flex-grow-1 px-3">
                                                    <InputGroup >
                                                        <Input />
                                                        <InputGroup.Addon>
                                                            <Icon icon="search" />
                                                        </InputGroup.Addon>
                                                    </InputGroup>
                                                </div>
                                                <div>
                                                    <Button color="yellow"  >
                                                        <Icon icon="pencil-square"  /> Tambah
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <AutoSizer disableWidth>
                                                    {({height}) => (
                                                        <Table
                                                            loading={false}
                                                            affixHeader={1}
                                                            virtualized={true}
                                                            height={height}
                                                            data={[]}>
                                                            <Column width={60} align="center">
                                                                <HeaderCell>
                                                                    <i className="fa fa-sort-asc"></i>No
                                                                </HeaderCell>
                                                                <Cell dataKey="no"/>
                                                            </Column>
        
                                                            <Column flexGrow={1}>
                                                                <HeaderCell className="text-capitalize">Name</HeaderCell>
                                                                <Cell dataKey="name"/>
                                                            </Column>
        
                                                            <Column flexGrow={1}>
                                                                <HeaderCell className="text-capitalize">Photo</HeaderCell>
                                                                <Cell dataKey="photo"/>
                                                            </Column>
        
                                                            <Column flexGrow={1}>
                                                                <HeaderCell className="text-capitalize">Type</HeaderCell>
                                                                <Cell dataKey="type"/>
                                                            </Column>
        
                                                            <Column flexGrow={1}>
                                                                <HeaderCell className="text-capitalize">Action</HeaderCell>
                                                                <Cell dataKey="action"/>
                                                            </Column>
        
                                                        </Table>
                                                    )}
                                                </AutoSizer>
                                            </div>
                                        </div>
                                    </Panel>
        
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={modal_delete_is_open} onHide={on_delete_modal_togle}>
                    <Modal.Header>
                        <Modal.Title>
                            Hapus Komodity Konfirmasi
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            {detail.id}
                        </p>
                        <p>
                            {detail.name}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button appearance="primary" onClick={on_delete}>
                            Simpan
                        </Button>
                        <Button appearance="subtle" onClick={on_delete_modal_togle}>
                            Batal
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Commodity