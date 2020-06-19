import React from 'react'
import {Modal, Button, Icon} from 'rsuite';

class Confirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.close = this
            .close
            .bind(this);
        this.open = this
            .open
            .bind(this);
        this.oke = this
            .oke
            .bind(this)
    }
    close() {
        this.setState({show: false});
    }
    open() {
        this.setState({show: true});
    }
    oke() {
        this.close()
        this.props.onOk()
    }

    render() {
        const { 
            message,
            children,
        } = this.props

        return (
            <React.Fragment>
                <div onClick={this.open} className="pointer">
                    {children}
                </div>
                
                <Modal backdrop="static" show={this.state.show} onHide={this.close} size="xs">
                    <Modal.Body>
                        <Icon
                            className="mr-2"
                            icon="remind"
                            style={{
                            color: '#ffb300',
                            fontSize: 24
                        }}/>
                        {message}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.oke} appearance="primary">
                            Ok
                        </Button>
                        <Button onClick={this.close} appearance="subtle">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Confirm