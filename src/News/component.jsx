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
} from 'rsuite'
import ModalNewsApprove from '../ModalNewsApprove'

const {Column, HeaderCell, Cell} = Table;


class News extends React.Component {
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
            data,
            page,
            max,
            get_data,
            loading,
            on_open_approve,
            filter_approve,
            filter_not_approve,
            change_filter_approve,
            change_filter_not_approve,
        } = this.props

        return (
            <div
                className="p-3"
                style={{
                height: '100%',
                display: 'flex',
                flexFlow: 'column'
            }}>

                <ModalNewsApprove />

                <div className="row mb-3">
                    <div className="col-4 d-flex">
                        <Checkbox checked={filter_approve} onChange={change_filter_approve}>Approved</Checkbox>
                        <Checkbox checked={filter_not_approve} onChange={change_filter_not_approve}>Not Approved</Checkbox>
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
                                                loading={loading}
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

                                                <Column width={80} align="center">
                                                    <HeaderCell></HeaderCell>

                                                    <Cell>
                                                        {rowData => {
                                                            return (
                                                                <span className="d-flex w-100 justify-content-between px-2 align-items-center">
                                                                    <div className={`fa fa-clipboard-check pointer`} onClick={on_open_approve.bind(this, rowData, get_data)}/>
                                                                    <div className={`fa fa-pen pointer`}/>
                                                                    {/* <div className={`fa fa-trash pointer`}/> */}
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
                            <IconButton icon={<Icon icon="arrow-left" />} placement="left" onClick={get_data.bind(this, page-1)} disabled={page==1}>
                                Back
                            </IconButton>
                            <IconButton icon={<Icon icon="arrow-right" />} placement="right" onClick={get_data.bind(this, page+1)} disabled={data.length < max}>
                                Next
                            </IconButton>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        )
    }
}

export default News