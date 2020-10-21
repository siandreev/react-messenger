import React from "react";
import "./SearchBar.scss"

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e){
        const text = e.target.value.trim();
        this.props.filter(text);
    }

    render() {
        return(
            <div className="search-bar-background">
                <div className="search-bar">
                    <i className="fas fa-search" />
                    <label>
                        <input type="text" onChange={this.onTextChanged} />
                    </label>
                </div>
            </div>
        )
    }
}

export default SearchBar;