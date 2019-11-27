import React from 'react';

class FlexContainer extends React.Component {
   render() {
    return (
        <div className="d-flex flex-sm-row flex-column container-style">
            {this.props.children}
        </div>
        );
   }
}
export default FlexContainer;
