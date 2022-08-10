// export async function getAllProds() {

//     fetch('https://fakestoreapi.com/products')  
//     .then((response) => response.text())
//     .then((responseText) => {
//         console.log(JSON.parse(responseText));
//     })
//     .catch((error) => {
//         console.log("reset client error-------",error);
//         return [];
//    });
    
// }

export async function getAllProds(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
}

getAllProds()