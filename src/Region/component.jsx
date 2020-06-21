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
import ModalAddSector from '../ModalAddSector'
import ModalAddAgent from '../ModalAddAgent'
import ModalAddAgentChild from '../ModalAddAgentChild'

import Confirm from '../Confirm'
const {Column, HeaderCell, Cell} = Table;


function delete_provinsi(id) { 
    Alert.success("Provinsi has been delete")
}

class Region extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() { 
        const { 
            get_data,
            reset,
        } = this.props

        reset()
        get_data()
    }


    render() {
        const { 
            on_modify,
            data,
            region_list,
            on_detail,
            type,
            child,
            slice_region_list,
            loading,
        } = this.props

        return (
            <div
                className="p-3"
                style={{
                height: '100%',
                display: 'flex',
                flexFlow: 'column'
            }}>
                <ModalModifyProvinsi/>

                {region_list.length>0&&
                    <React.Fragment>
                        <Breadcrumb className="p-0">
                            <Breadcrumb.Item onClick={slice_region_list.bind(this, slice_region_list.length - 1)}>Home</Breadcrumb.Item>
                            {region_list.map((value, index) => {
                                return (
                                    <Breadcrumb.Item onClick={slice_region_list.bind(this, index)} key={`${index}_${value.name}`}>{value.name}</Breadcrumb.Item>
                                )
                            })}
                        </Breadcrumb>
                        <div className="row mb-3">
                            <div className="col font-weight-bold text-capitalize">
                                {type}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                {region_list[region_list.length-1].name}
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
                        {region_list.length == 0 && 
                            <ModalAddProvinsi>
                                <Button color="green">
                                    <i className={`fa fa-plus mr-2`}></i>
                                    Tambah Provinsi
                                </Button>
                            </ModalAddProvinsi>
                        }
                        
                        {region_list.length == 1 && 
                            <ModalAddSector data={{
                                provinsi_id: region_list[0].id, 
                                provinsi_name: region_list[0].name
                            }}>
                                <Button color="green">
                                    <i className={`fa fa-plus mr-2`}></i>
                                    Tambah Sector
                                </Button>
                            </ModalAddSector>
                        }

                        {region_list.length == 2 && 
                            <ModalAddAgent data={{
                                provinsi_id: region_list[0].id, 
                                provinsi_name: region_list[0].name,
                                sector_id: region_list[1].id, 
                                sector_name: region_list[1].name
                            }}>
                                <Button color="green">
                                    <i className={`fa fa-plus mr-2`}></i>
                                    Tambah Agent
                                </Button>
                            </ModalAddAgent>
                        }

                        {region_list.length == 3 && 
                            <ModalAddAgentChild data={{
                                provinsi_id: region_list[0].id, 
                                provinsi_name: region_list[0].name,
                                sector_id: region_list[1].id, 
                                sector_name: region_list[1].name,
                                agent_id: region_list[2].id, 
                                agent_name: region_list[2].name,
                            }}>
                                <Button color="green">
                                    <i className={`fa fa-plus mr-2`}></i>
                                    Tambah Agent Child
                                </Button>
                            </ModalAddAgentChild>
                        }

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
                                                loading={loading}
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
                                                                    <div className={`fa fa-eye pointer`} onClick={on_detail.bind(this,rowData)}/>
                                                                    {region_list.length == 0 && 
                                                                        <div className={`fa fa-edit pointer`} onClick={on_modify.bind(this,rowData)}/>
                                                                    }
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
}

export default Region