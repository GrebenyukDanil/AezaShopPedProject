export interface IproductList{
    id: number;
    productName: string;
    productPrice: number;
    productPhoto: string;
    productPhotoAlt: string;
    productDescription: string;
    buyCount: number;
    inStock: boolean;
    type: string;
    action: boolean;
    onSale: boolean;
    salePrice?: number;
}
export let productListPerem:IproductList[] = [
    {
        id: 1,
        productName: "футболка #1",
        productPrice: 1216,
        productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
        productPhotoAlt: "alt",
        productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
        buyCount: 23,
        inStock: true,
        type: "tShirt",
        action: false,
        onSale: true,
        salePrice: 1000
    },
        {
            id: 2,
            productName: "футболка #2",
            productPrice: 1512,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 56,
            inStock: false,
            type: "tShirt",
            action: true,
            onSale: true,
            salePrice: 1000
        },
        {
            id: 3,
            productName: "футболка #3",
            productPrice: 1001,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 51,
            inStock: true,
            type: "tShirt",
            action: false,
            onSale: false,
        },
        {
            id: 4,
            productName: "Носки #1",
            productPrice: 1612,
            productPhoto: "https://mensocks.ru/upload/iblock/b9c/b9c4c7234789c39f747e9cd1ac5dd3ef.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 52,
            inStock: false,
            type: "socks",
            action: true,
            onSale: true,
            salePrice: 1000
        },
        {
            id: 5,
            productName: "Носки  #2",
            productPrice: 1125,
            productPhoto: "https://mensocks.ru/upload/iblock/b9c/b9c4c7234789c39f747e9cd1ac5dd3ef.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 15,
            inStock: true,
            type: "socks",
            action: false,
            onSale: true,
            salePrice: 1000
        },
        {
            id: 6,
            productName: "обувь #1",
            productPrice: 1016,
            productPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6j7t-hCbaDX573nwaIICoPzvDVmDlpX_OxQ&usqp=CAU",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 5,
            inStock: true,
            type: "shoes",
            action: true,
            onSale: false,
        },
        {
            id: 7,
            productName: "обувь #2",
            productPrice: 1243,
            productPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6j7t-hCbaDX573nwaIICoPzvDVmDlpX_OxQ&usqp=CAU",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 25,
            inStock: true,
            type: "shoes",
            action: false,
            onSale: true,
            salePrice: 1000
        },
        {
            id: 8,
            productName: "штаны #1",
            productPrice: 895,
            productPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAZMpO64zUZTYdDpfxjshxJJO-u86-ol4hgeUwtoC_V9hWgRUn8tjZdssN2JBTTNx0zc&usqp=CAU",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 55,
            inStock: false,
            type: "pants",
            action: true,
            onSale: false,
        },
        {
            id: 9,
            productName: "штаны #2",
            productPrice: 2312,
            productPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAZMpO64zUZTYdDpfxjshxJJO-u86-ol4hgeUwtoC_V9hWgRUn8tjZdssN2JBTTNx0zc&usqp=CAU",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 33,
            inStock: true,
            type: "pants",
            action: false,
            onSale: true,
            salePrice: 1000
        }
]