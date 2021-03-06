const bikesModule = {
  state: {
    bikes: [
      {
        id: 0,
        shopStatus: false,
        removeRequest: false,
        maker: "Suzuki",
        model: "GSXR1000",
        engine: "1000" + "cc",
        bhp: 160 + "bhp",
        type: "Sport",
        year: "2020",
        price: "35000$",
        stock: true,
        image:
          "https://www.motorcyclespecs.co.za/Gallery_M-Z_16/Suzuki-GSX-R1000-19-5.jpg",
      },
      {
        id: 1,
        shopStatus: false,
        removeRequest: false,
        maker: "Suzuki",
        model: "GSXF600",
        engine: "600" + "cc",
        bhp: 87 + "bhp",
        type: "Sport Cruiser",
        year: "1996",
        price: "5000$",
        stock: true,
        image:
          "https://www.motorcyclespecs.co.za/Gallery%20%20A/SUZUKI%20GSX%20600%20F%2088%20%202.jpg",
      },
      {
        id: 2,
        shopStatus: false,
        removeRequest: false,
        maker: "Kawasaki",
        model: "Ninja H2R",
        engine: "1000" + "cc",
        bhp: 240 + "bhp",
        type: "Hyperbike",
        year: "2022",
        price: "55000$",
        stock: false,
        image:
          "https://gomagcdn.ro/domains/motomus.ro/files/product/original/kawasaki-ninja-h2r-21-37264-1450.jpg",
      },
      {
        id: 3,
        shopStatus: false,
        removeRequest: false,
        maker: "BMW",
        model: "1200RS",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "Sport Touring",
        year: "2019",
        price: "23000$",
        stock: true,
        image: "https://www.motostop.eu/productimages/15943/42719.jpg",
      },
      {
        id: 4,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: false,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 5,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: true,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 6,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: true,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 7,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: false,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 8,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: true,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 9,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: true,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 10,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: false,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 11,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: true,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 12,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: true,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 13,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: true,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 14,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: true,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
      {
        id: 15,
        shopStatus: false,
        removeRequest: false,
        maker: "maker",
        model: "model",
        engine: "1000" + "cc",
        bhp: 220 + "bhp",
        type: "type",
        year: "year",
        price: "2000$",
        stock: true,
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/79/47/vintage-motorcycle-logo-template-vector-6187947.jpg",
      },
    ],
  },
  mutations: {
    setBikesShopStatus(state, id) {
      let bike = bikesModule.state.bikes.find((bike) => bike.id === id);
      bike.shopStatus = !bike.shopStatus;
    },
  },
  actions: {},
  getters: {},
  modules: {},
};

export default bikesModule;
