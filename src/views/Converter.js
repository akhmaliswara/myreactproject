import React from 'react';

function toRadian(degree) {
    return (degree * Math.PI / 180);
}

function toDegree(radian) {
    return (radian * 180 / Math.PI);
}

function tryConvert(angle, convert) {
    const input = parseFloat(angle);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class AngleInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onAngleChange(e.target.value);
    }

    render() {
        const angle = this.props.angle;
        const scaleNames = this.props.scaleNames;
        return (
        <label>
            <p>Enter angle in {scaleNames}: </p>
            <input value={angle}
                    onChange={this.handleChange} />
        </label>
        );
    }
}

export default class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadianChange = this.handleRadianChange.bind(this);
        this.handleDegreeChange = this.handleDegreeChange.bind(this);
        this.state = {angle: '', scaleNames: 'degree'};
    }

    handleDegreeChange(angle) {
        this.setState({scaleNames: 'degree', angle});
    }

    handleRadianChange(angle) {
        this.setState({scaleNames: 'radian', angle});
    }

    render() {
        const scaleNames = this.state.scaleNames;
        const angle = this.state.angle;
        const radian = scaleNames === 'degree' ? tryConvert(angle, toRadian) : angle;
        const degree = scaleNames === 'radian' ? tryConvert(angle, toDegree) : angle;

        return (
        <div>
            <AngleInput
            scaleNames="radian"
            angle={radian}
            onAngleChange={this.handleRadianChange} />
            <AngleInput
            scaleNames="degree"
            angle={degree}
            onAngleChange={this.handleDegreeChange} />
        </div>
        );
    }
}