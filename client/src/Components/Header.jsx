import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <section className="header">
                <h1>Weather For you <span role="img" aria-label={"umbrella"}>☂️</span></h1>
                <span className="annotation">(Mongo Express React Node)</span>
            </section>
        );
    }
}

export default Header;