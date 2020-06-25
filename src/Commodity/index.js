import React from 'react'
import AutoSizer from "react-virtualized-auto-sizer";
import {
    SelectPicker,
    Table,
    Input,
    Button,
    InputGroup,
    Icon,
    Panel,
    Breadcrumb,
} from 'rsuite';
const {Column, HeaderCell, Cell} = Table;



const Commodity = () => {

    return (
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
    )
}

export default Commodity