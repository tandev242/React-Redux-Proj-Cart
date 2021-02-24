

var initialState = [
    {
    id : 1,
    name : 'Iphone 7 plus',
    image : 'https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/7-plus/thumbs/(600x600)_crop_7_plus_red_800x800.jpg',
    description : 'Sản phẩm hết thời do apple tạo ra',
    price : 500,
    inventory : 10,
    rating : 4
    },
    {
        id : 2,
        name : 'Samsung galaxy s10',
        image : 'https://www.xtmobile.vn/vnt_upload/product/06_2019/thumbs/600_s10plus_trang_800x800_min.jpg',
        description : 'Điện thoại samsung 99%',
        price : 123,
        inventory : 22,
        rating : 2
    },
    {
        id : 3,
        name : 'Xiaomi mi A1',
        image : 'https://cdn.tgdd.vn/Products/Images/42/145443/xiaomi-mi-a1-32gb-vang-dong-300x300.jpg',
        description : 'Sản phẩm hết thời do Xiaomi tạo ra',
        price : 555,
        inventory : 33,
        rating : 5
    }
];

const products = (state = initialState , action) => {
    switch(action.type){
        default : return [...state];
    }
} 
export default products;