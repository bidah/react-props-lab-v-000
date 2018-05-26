import React from 'react';

class Spaceship extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>velocidad: {this.props.speed}</p>
                <p>tiene cohetes?: {this.props.hasRockets}</p>
                <ul>
                    <li>Colores:</li>
                    {
                        this.props.colors.map(color => <li> {color} </li>)
                    }
                </ul>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}

export default Spaceship