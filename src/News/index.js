import React from 'react'
import AutoSizer from "react-virtualized-auto-sizer";
import {
    Table,
    Input,
    Button,
    InputGroup,
    Icon,
    Checkbox,
    ButtonToolbar,
    IconButton,
} from 'rsuite';

const {Column, HeaderCell, Cell} = Table;

const data = [
    {
        "id": 4,
        "title": "News 3",
        "author:": "Aminudin",
        "featured_image": "https://minio-global.archv.id/sembakopublic/icon/beras.png",
        "content": "lorem ipsum dolor dor dor",
        "additional_information": "Keterangan Tambahan",
        "commodity": "Bapoting",
        "created_at": "2020-06-21 10:08:16",
        "status": 1,
        "province": "Sumatra Barat",
        "updated_at": "2020-06-21 17:42:26"
    },
    {
        "id": 2,
        "title": "News dua",
        "author:": "Aminudin",
        "featured_image": "",
        "content": "awkowako dasdnlsamdlsa",
        "additional_information": "",
        "commodity": "Bapoting",
        "created_at": "2020-06-09 15:03:38",
        "status": 1,
        "province": "Sumatra Barat",
        "updated_at": ""
    },
    {
        "id": 1,
        "title": "News satu",
        "author:": "Aminudin",
        "featured_image": "",
        "content": "loremipsum dolor",
        "additional_information": "",
        "commodity": "Bapoting",
        "created_at": "2020-06-09 15:03:38",
        "status": 1,
        "province": "Sumatra Barat",
        "updated_at": ""
    }
]

const News = () => { 

    return (
        <div
            className="p-3"
            style={{
            height: '100%',
            display: 'flex',
            flexFlow: 'column'
        }}>

            <div className="row mb-3">
                <div className="col-4 d-flex">
                    <Checkbox defaultChecked>Not Approved</Checkbox>
                    <Checkbox defaultChecked>Approved</Checkbox>
                </div>
                <div className="col text-right">
                    <Button color="green">
                        <i className={`fa fa-plus mr-2`}></i>
                        Tambah News
                    </Button>
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
                                            wordWrap
                                            affixHeader={1}
                                            // virtualized={true}
                                            height={height}
                                            data={data}>
                                            <Column width={60} align="center">
                                                <HeaderCell>
                                                    <i className="fa fa-sort-asc"></i>Id
                                                </HeaderCell>
                                                <Cell dataKey="id"/>
                                            </Column>

                                            <Column flexGrow={1}>
                                                <HeaderCell className="text-capitalize">title</HeaderCell>
                                                <Cell dataKey="title"/>
                                            </Column>

                                            <Column flexGrow={1}>
                                                <HeaderCell className="text-capitalize">author</HeaderCell>
                                                <Cell dataKey="author"/>
                                            </Column>

                                            <Column flexGrow={1}>
                                                <HeaderCell className="text-capitalize">commodity</HeaderCell>
                                                <Cell dataKey="commodity"/>
                                            </Column>

                                            <Column flexGrow={1}>
                                                <HeaderCell className="text-capitalize">commodity</HeaderCell>
                                                <Cell dataKey="commodity"/>
                                            </Column>

                                            <Column flexGrow={1}>
                                                <HeaderCell className="text-capitalize">province</HeaderCell>
                                                <Cell dataKey="province"/>
                                            </Column>

                                            <Column flexGrow={1}>
                                                <HeaderCell className="text-capitalize">featured_image</HeaderCell>
                                                <Cell>
                                                    {rowData => {
                                                        if ( !rowData.featured_image) { 
                                                            return false
                                                        }

                                                        return (
                                                            <img src={rowData.featured_image}/>
                                                        )
                                                    }}
                                                </Cell>
                                            </Column>

                                            <Column flexGrow={1}>
                                                <HeaderCell className="text-capitalize">content</HeaderCell>
                                                <Cell dataKey="content"/>
                                            </Column>

                                            <Column flexGrow={1}>
                                                <HeaderCell className="text-capitalize">additional_information</HeaderCell>
                                                <Cell dataKey="additional_information"/>
                                            </Column>
                                            
                                            <Column flexGrow={1}>
                                                <HeaderCell className="text-capitalize">status</HeaderCell>
                                                <Cell>
                                                    {rowData => {
                                                        if (rowData.status) { 
                                                            return "Approved"
                                                        }

                                                        return "Not Approved"
                                                    }} 
                                                </Cell>
                                            </Column>

                                            <Column width={110} align="center">
                                                <HeaderCell></HeaderCell>

                                                <Cell>
                                                    {rowData => {
                                                        return (
                                                            <span className="d-flex w-100 justify-content-between px-2 align-items-center">
                                                                <div className={`fa fa-clipboard-check pointer`}/>
                                                                <div className={`fa fa-pen pointer`}/>
                                                                <div className={`fa fa-trash pointer`}/>
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
            <div className="row mt-3">
                <div className="col">
                    <ButtonToolbar>
                        <IconButton icon={<Icon icon="arrow-left" />} placement="left">
                            Back
                        </IconButton>
                        <IconButton icon={<Icon icon="arrow-right" />} placement="right">
                            Next
                        </IconButton>
                    </ButtonToolbar>
                </div>
            </div>
        </div>
    )
}

export default News