import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, Dropdown} from 'react-bootstrap';

class Buttons extends Component {

    handleSelect = (evt) => {
        this.props.gridSize(evt);
    }
    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <button className="btn btn-light" onClick={this.props.playButton}>Play</button>
                    <button className="btn btn-light" onClick={this.props.pauseButton}>Pause</button>
                    <button className="btn btn-light" onClick={this.props.clear}>Clear</button>
                    <button className="btn btn-light" onClick={this.props.slow}>Slow</button>
                    <button className="btn btn-light" onClick={this.props.fast}>Fast</button>
                    <button className="btn btn-light" onClick={this.props.seed}>Seed</button>
                
                    <DropdownButton
						title="Grid Size"
						id="size-menu"
						onSelect={this.handleSelect}
					>
						<Dropdown.Item eventKey="1">20x10</Dropdown.Item>
						<Dropdown.Item eventKey="2">50x30</Dropdown.Item>
						<Dropdown.Item eventKey="3">70x50</Dropdown.Item>
					</DropdownButton>
                </ButtonToolbar>
            </div>
        );
    }
}

export default Buttons;