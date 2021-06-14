import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Switch, Route, Link } from "react-router-dom";
import Login from './login';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        }
    
    }

    async handleDelete(id) {
        try {
            await fetch(`http://localhost:5500/user/${id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            });
            alert(`User Delted Successfully`);
            this.loadData();
        } 
        catch (error) {
            console.log(error);
        }
    }
    

    render() {
        return (
            <div>
                
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {`Name: Bhavesh Kothari`}
                            {this.state.user}
                        </Card.Title>
                        <Card.Title>
                            {`Username: bhavesh.kothari`}
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Button onClick={this.handleDelete}>Delete User</Button>
                <Button variant="dark" size="lg" block>
                    <Link to={"/sign-in"}>Logout</Link>
                </Button>
                <Switch>
                    <Route path="/sign-in" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default Dashboard;