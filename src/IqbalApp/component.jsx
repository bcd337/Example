import React from 'react'
import {
    Table
} from 'rsuite'
const { Column, HeaderCell, Cell } = Table;

class IqbalApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() { 
        const { 
            get_data,
        } = this.props
        
        get_data()
    }

    render(){
        const { 
            data,
            loading
        } = this.props
        
        return(
            <div className="h-100vh w-100vw">
                <Table
                    loading={loading}
                    height={400}
                    data={data}
                    onRowClick={data => {
                    }}
                >
                    <Column width={300}>
                        <HeaderCell>First Name</HeaderCell>
                        <Cell dataKey="first_name" />
                    </Column>
                    <Column width={300}>
                        <HeaderCell>Last Name</HeaderCell>
                        <Cell dataKey="last_name" />
                    </Column>
                </Table>
            </div>
        );
    }
}

export default IqbalApp;