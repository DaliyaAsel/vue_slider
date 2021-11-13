export default {
    state: {
        shopList: [{
                id: 1,
                title: 'Nike Red',
                descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
                img: require('../assets/shop-img/1.png'),
                gallery: [{  //для слайдера
                    name: 'Nike boots first',
                    img: require('../assets/shop-img/1.png'),
                }, {
                    name: 'Nike boots Second',
                    img: require('../assets/shop-img/2.png'),
                }, {
                    name: 'Nike boots Third',
                    img: require('../assets/shop-img/3.png'),
                }]
            },
            {
                id: 2,
                title: 'Nike Default',
                descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
                img: require('../assets/shop-img/4.png'),
                gallery: [{  //для слайдера
                    name: 'Nike boots first',
                    img: require('../assets/shop-img/4.png'),
                }, {
                    name: 'Nike boots Second',
                    img: require('../assets/shop-img/5.png'),
                }, {
                    name: 'Nike boots Third',
                    img: require('../assets/shop-img/6.png'),
                }]
            }, {
                id: 3,
                title: 'Nike Green',
                descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
                img: require('../assets/shop-img/7.png'),
                gallery: [{  //для слайдера
                    name: 'Nike boots first',
                    img: require('../assets/shop-img/7.png'),
                }, {
                    name: 'Nike boots Second',
                    img: require('../assets/shop-img/8.png'),
                }, {
                    name: 'Nike boots Third',
                    img: require('../assets/shop-img/9.png'),
                }]
            }, {
                id: 4,
                title: 'Nike Street',
                descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
                img: require('../assets/shop-img/10.png'),
                gallery: [{  //для слайдера
                    name: 'Nike boots first',
                    img: require('../assets/shop-img/10.png'),
                }, {
                    name: 'Nike boots Second',
                    img: require('../assets/shop-img/11.png'),
                }]
            }
        ]
    },
    mutations: {

    },
    actions: {},
    getters: {
        getShopList(state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id)
        }
    }
}