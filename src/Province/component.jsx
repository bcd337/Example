import React from 'react'
import AutoSizer from "react-virtualized-auto-sizer";
import {
    Table,
    Input,
    Button,
    InputGroup,
    Icon,
    Alert,
    Breadcrumb,
} from 'rsuite';
import ModalAddProvinsi from '../ModalAddProvinsi'
import ModalModifyProvinsi from '../ModalModifyProvinsi'
import Confirm from '../Confirm'
const {Column, HeaderCell, Cell} = Table;


function delete_provinsi(id) { 
    Alert.success("Provinsi has been delete")
}

const Province = ({
    on_modify,
    data,
    province_list,
    on_detail,
    type,
    get_data,
    child,
}) => {

    return (
        <div
            className="p-3"
            style={{
            height: '100%',
            display: 'flex',
            flexFlow: 'column'
        }}>
            <ModalModifyProvinsi/>

            {province_list.length>0&&
                <React.Fragment>
                    <Breadcrumb className="p-0">
                        {province_list.map((value) => (
                            <Breadcrumb.Item>{value.name}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <div className="row mb-3">
                        <div className="col font-weight-bold text-capitalize">
                            {type}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            {province_list[province_list.length-1].name}
                        </div>
                    </div>
                </React.Fragment>
                
            }

            <div className="row mb-3">
                <div className="col-4">
                    <InputGroup>
                        <Input placeholder={`Nama ${child}`}/>
                        <InputGroup.Button>
                            <Icon icon="search"/>
                        </InputGroup.Button>
                    </InputGroup>
                </div>
                <div className="col text-right">
                    <ModalAddProvinsi>
                        <Button color="green">
                            <i className={`fa fa-plus mr-2`}></i>
                            Tambah Data
                        </Button>
                    </ModalAddProvinsi>
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
                                            affixHeader={1}
                                            virtualized={true}
                                            height={height}
                                            data={data}>
                                            <Column width={60} align="center">
                                                <HeaderCell>
                                                    <i className="fa fa-sort-asc"></i>Id
                                                </HeaderCell>
                                                <Cell dataKey="id"/>
                                            </Column>

                                            <Column flexGrow={1}>
                                                <HeaderCell className="text-capitalize">{child}</HeaderCell>
                                                <Cell dataKey="name"/>
                                            </Column>

                                            <Column width={110} align="center">
                                                <HeaderCell></HeaderCell>

                                                <Cell>
                                                    {rowData => {
                                                        return (
                                                            <span className="d-flex w-100 justify-content-between px-2 align-items-center">
                                                                <div className={`fa fa-eye`} onClick={on_detail.bind(this,rowData)}/>
                                                                <div className={`fa fa-edit`} onClick={on_modify.bind(this,rowData)}/>
                                                                <Confirm onOk={delete_provinsi.bind(this, rowData.id)} message={"Are you sure?"}>
                                                                    <div className={`fa fa-trash`}/>
                                                                </Confirm>
                                                            </span>
                                                        );
                                                    }}
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
        </div>
    )
}

export default Province