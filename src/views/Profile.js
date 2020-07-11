import React from 'react';

export default class ProfilForm extends React.Component {
    constructor(props) {
        super(props);

        this.inputName = React.createRef();
    }

    render() {
        return (
            <div>
                <form>
                    <label>Nama : 
                        <input name="nama" ref={this.inputName} />
                    </label>
                </form>
            </div>
        );
    }
}