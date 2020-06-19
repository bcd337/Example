import React from 'react'
import AutoSizer from "react-virtualized-auto-sizer";
import {SelectPicker, Table, Input, Button} from 'rsuite';
const {Column, HeaderCell, Cell, Pagination} = Table;

const data = [
    {
        id: 1,
        value: "Sumatera Utara"
    }, {
        id: 2,
        value: "Sumatera Barat"
    }, {
        id: 3,
        value: "Riau"
    }, {
        id: 4,
        value: "Sumatera Selatan"
    }
]

const Provinsi = () => {

    return (
        <div
            className="p-3"
            style={{
            height: '100%',
            display: 'flex',
            flexFlow: 'column'
        }}>
            <div className="row mb-3">
                <div className="col-4" >
                    <Input placeholder={"Nama Provinsi"}/>
                </div>
                <div className="col">
                    <Button color={"blue"}>Cari</Button>
                </div>
                <div className="col text-right">
                    <Button color={"red"}><i className={`fa fa-plus`}></i> Tambah Data</Button>
                </div>
            </div>
            <div style={{
            display: 'flex',
            flexFlow: 'column',
            flex: '1 1 auto',
            }}
            >
            <div className="row h-100">
                <div className="col-12">
                    <div
                        className="p-0 col-12 h-100"
                        style={{
                        border: '1px solid #e5e5ea'
                    }}>
                        <div className="w-100 h-100">
                            <AutoSizer disableWidth>
                                {({height, width}) => (
                                    <Table
                                        affixHeader={1}
                                        virtualized={true}
                                        height={height}
                                        data={[
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data,
                                        ...data
                                    ]}>
                                        <Column width={60} align="center">
                                            <HeaderCell>
                                                <i className="fa fa-sort-asc"></i>Id
                                            </HeaderCell>
                                            <Cell dataKey="id"/>
                                        </Column>

                                        <Column flexGrow={1}>
                                            <HeaderCell>Provinsi</HeaderCell>
                                            <Cell dataKey="value"/>
                                        </Column>

                                        <Column width={60} align="center">
                                            <HeaderCell></HeaderCell>

                                            <Cell>
                                                {rowData => {
                                                    function handleAction() {
                                                        alert(`id:${rowData.id}`);
                                                    }
                                                    return (
                                                        <span>
                                                            <div className={`fa fa-edit`} onClick={handleAction}/> 
                                                            <div className={`fa fa-trash`} onClick={handleAction}/>
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

export default Provinsi