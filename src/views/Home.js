import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.numberOfVisited = props.numberOfVisited;
    }
    render() {
        return(
            <div>
                <h1>Hai, Tamu!</h1>
                <p>Bila belum mengisi atau update profil, silahkan buka menu input profil</p>
                <h4>Anda telah mengunjungi page ini sebanyak</h4>
                <h2>{this.numberOfVisited}</h2>
                <h4>Kali</h4>
            </div>
        );
    }
};