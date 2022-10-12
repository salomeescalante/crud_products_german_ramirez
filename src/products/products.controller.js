

const  uuid = require('uuid')


const Products = require('../models/products.models')

const getAllProducts =  () => {
    const data =  Products.findAll()
    
    return data
}

// getAllProducts()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

const createProduct = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })

    return newProduct

}

createProduct({
    name: 'Computer',
    category: 'Tecnology',
    price: 2000,
    isAvailable: true
})


//     .then(response => console.log(response))
//     .catch(err => console.log(err))


const getProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id
            
        },
    });
    
    return data 
}

getProductById('64be0297-5a4d-44ab-b334-0bcc052dec2f')
    .then((response) => console.log(response))
    .catch((err) => console.log(err))

{
    Name: "Nuevo producto";
}



const editProduct = async (id, data) => {
    const response = await Product.update(data, {
      where: {
        id: id,
        name: 'TV'
      },
    });
    return response;
  };
  

 
// editpProduct("96bc40e3-e3d6-4ac5-bf50-ba3696e092db", {
//     name: "TV 56 p",
//     price: 1800
// })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const deleteProduct = async (id) => {
    const data = await Products.update(data, {
        where: {
            id: id
            
        }
    })
    return data
        
    
}

module.exports = {
    getAllProducts, 
    getProductById,
    createProduct, 
    editProduct,
    deleteProduct
}