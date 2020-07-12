import React from 'react';

export default class ProfilForm extends React.Component {
    constructor(props) {
        super(props);

        this.inputName = React.createRef();
        this.inputSkill = React.createRef();
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Profile Form</h1>
                    <label>Nama : 
                        <input name="nama" ref={this.inputName} />
                    </label><br/>
                    <label>Input your skill :
                        <input name="skill" ref={this.inputSkill} />
                    </label><br/><br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}