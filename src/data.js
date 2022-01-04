const data = {
    products: [
        {
            id: 1,
            name: 'Office chair',
            model: 'YF-0326',
            price: 100,
            image: 'https://www.formaideale.rs/fileadmin/user_upload/products/800x600/21027748.jpg'
        },
        {
            id: 2,
            name: 'Office chair',
            model: 'NF-3040',
            price: 80,
            image: 'https://www.formaideale.rs/fileadmin/_processed_/d/5/csm_21001225_17056f3f7c.jpg'
        },
        {
            id: 3,
            name: 'Office chair',
            model: 'CX1228H',
            price: 70,
            image: 'https://www.formaideale.rs/fileadmin/_processed_/2/4/csm_21030892_7cbdc90c86.jpg'
        },
        {
            id: 4,
            name: 'Office chair',
            model: 'CX1118H-M',
            price: 120,
            image: 'https://www.formaideale.rs/fileadmin/_processed_/1/1/csm_21030889_efe037593e.jpg'
        },
        {
            id: 5,
            name: 'Office chair',
            model: 'NF-1398',
            price: 50,
            image: 'https://www.formaideale.rs/fileadmin/_processed_/5/f/csm_21012143_b5c6fe8762.jpg'
        },
    
    ],
    
    idCart: 0,

    cart: [],

    findProduct: function(id){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].id === +id){
                return this.products[i];
            }
        }
    }
}

export default data;
