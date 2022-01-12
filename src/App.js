import React, { Component } from "react";
import Gmails from "./Gmail";
import AddGmail from "./AddGmail";

class App extends Component {
    state = {
        gmails: [
            {
                id: 1,
                name: "example name",
                subject: "Subject Here!",
                email: "example@example.com",
                sendto: "example.example",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
        ],
    };

    addGmail = (gmail) => {
        gmail.id = Math.random();
        let gmails = [...this.state.gmails, gmail];
        this.setState({ gmails: gmails });
    };

    deleteGmail = (id) => {
        const gmails = this.state.gmails.filter((gmail) => {
            return gmail.id !== id;
        });
        this.setState({ gmails: gmails });
    };

    render() {
        return (
            <div className="App" id="fadeshow1">
                <h1 className="bg-danger bg-gradient p-3 text-center text-dark font-monospace">
                    Gmail Template Generator
                </h1>
                <Gmails
                    gmails={this.state.gmails}
                    deleteGmail={this.deleteGmail}
                />
                <AddGmail addGmail={this.addGmail} />
            </div>
        );
    }
}

export default App;
