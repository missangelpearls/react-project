import React from 'react';
import ReactDOM from 'react-dom';

//var properties = {
 //   backgroundColor: 'lightblue',
//    color: 'white',
//    fontFamily: 'Arial'
//}

// const title = React.createElement(
//     'ul',
//     {id: 'title', className:'header', style: properties},
//     'Hello world!!',
//     React.createElement(
//         'li',
//         {},
//         'Item in 1st list'
//     )
    
    
// )

class Message extends React.Component{
    render(){
        return(
            <div>
                 {/* <h1>Hello Everyone!</h1>  */}
                 <h1 style={{color: this.props.color}}>
                 {this.props.msg}
                 </h1>
                 <p>
                     I'll check in {this.props.mins} minutes.
                 </p>
            </div>
        )
    }
}

ReactDOM.render(
    // <div style={properties}>
    //     <h1 id="heading-element"> Hi How's you? </h1>
    //     <p> Lets test ! </p>
    // </div>,
    <Message color='blue' msg='How are you?' mins={50} />,
    document.getElementById('root')
)