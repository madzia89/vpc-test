import React, {Component} from 'react';
import Table from './Table'


// make with create react app

// app with table with 3 columns for data fetched from local json
// with button with onClick action alert(`hello ${name} ${surname}`)

// table row have to be functional

class App extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch(`/test.react.data.json`)
            .then(response => response.json())
            .then(users => {

                this.setState({users})

                console.log(users)
            });
    }


    render() {

        return (
            <div>
                <Table
                    users={this.state.users}/>
            </div>
        );
    }
}

export default App;
