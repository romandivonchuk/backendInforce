require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const fs = require('fs');

connectDB();


let shoes = [
    
        {
            id: 1,
            imageUrl: 'D:/curseReactRedux/test/testInforce/kasandra.jpg',
            name: 'Kasandra',
            count: 4,
            description: 'is simply dummy text of the printing and typesetting industry.',
            
            size: {
                width: 200,
                height: 200
            },
            weight: '200g',
            comments: [{
                id: 1,
                productId: 1,
                description: 'There are many variations of passages of Lorem Ipsum available',
                date: new Date(),
            }, {
                id: 2,
                productId: 1,
                description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
                date: new Date(),
            }]
        },
        {
            id: 2,
            imageUrl: 'D:/curseReactRedux/test/testInforce/1.jpg',
            name: 'Slippers',
            count: 4,
            description: 'is simply dummy text of the printing and typesetting industry.',
            
            size: {
                width: 200,
                height: 200
            },
            weight: '300g',
            comments: [{
                id: 1,
                productId: 2,
                description: 'There are many variations of passages of Lorem Ipsum available',
                date: new Date(),
            }, {
                id: 2,
                productId: 2,
                description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
                date: new Date(),
            }]
        },
        {
            id: 3,
            imageUrl: 'D:/curseReactRedux/test/testInforce/2.jpg',
            name: 'DB',
            count: 2,
            description: 'is simply dummy text of the printing and typesetting industry.',
            
            size: {
                width: 200,
                height: 200
            },
            weight: '300g',
            comments: [{
                id: 1,
                productId: 3,
                description: 'There are many variations of passages of Lorem Ipsum available',
                date: new Date(),
            }, {
                id: 2,
                productId: 3,
                description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
                date: new Date(),
            }]
        },
        {
            id: 4,
            imageUrl: 'D:/curseReactRedux/test/testInforce/3.jpg',
            name: 'ABC',
            count: 2,
            description: 'is simply dummy text of the printing and typesetting industry.',
            
            size: {
                width: 200,
                height: 200
            },
            weight: '300g',
            comments: [{
                id: 1,
                productId: 4,
                description: 'There are many variations of passages of Lorem Ipsum available',
                date: new Date(),
            }, {
                id: 2,
                productId: 4,
                description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
                date: new Date(),
            }]
        },
    
]

function converted(array) {

    let encodImgArray = array.map((obj) => {


        let img = fs.readFileSync(obj.imageUrl)
        obj.imageUrl = `data:image/jpeg;base64,${img.toString('base64')}`
        return obj

    })

    return encodImgArray

}

shoes = converted(shoes)


const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(shoes)
        console.log('Data import success')
        process.exit()
    } catch (error) {
        console.error('error with data import', error)
        process.exit(1)
    }
};

importData();