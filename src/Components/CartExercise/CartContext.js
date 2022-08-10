import React, {createContext, Component} from 'react';

var data;
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>console.log(json))

// console.log(data)

export const GlobalProds = createContext();

class GlobalProdsProvider extends Component {
    state = {data} 

    render() { 
        return (
            <GlobalProds.Provider value={{...this.state}}>
                {this.props.children}    
            </GlobalProds.Provider>
        );
    }
}
 
export default GlobalProdsProvider;

// This works alone but with no ccontext:

// export async function getAllProds(){
//     fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(json=>console.log(json))
// }

// getAllProds()