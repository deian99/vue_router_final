const equipmentModule = {
  state: {
    equipments: [
      {
        id: 1,
        shopStatus: false,
        removeRequest: false,
        maker: "AlpineStars",
        model: "DFB200",
        size: "L",
        color: "black",
        image:
          "https://gomagcdn.ro/domains/bikermag.ro/files/product/original/geaca-moto-piele-textil-alpinestars-sp-x-1622833.jpg",
        price: "200.00$",
        stock: false,
      },
      {
        id: 2,
        shopStatus: false,
        removeRequest: false,
        maker: "AlpineStars",
        model: "HDGF800X",
        size: "M",
        color: "white",
        image:
          "https://scutermag.ro/wp-content/uploads/2019/12/Geaca-Moto-sport-Alpinestars-ATEM-V3-culoare-negru-alb-dimensiune-48-1.jpg",
        price: "150.00$",
        stock: true,
      },
      {
        id: 3,
        shopStatus: false,
        removeRequest: false,
        maker: "Dainese",
        model: "XVSC100F",
        size: "S",
        color: "red & blue",
        image:
          "https://static.moto24.ro/images/eshop/products/list/dainese-geaca-moto-textila-ranch-tex-black-iris-lava-red-light-blu-2022.jpg",
        price: "100.00$",
        stock: false,
      },
      {
        id: 4,
        shopStatus: false,
        removeRequest: false,
        maker: "Dainese",
        model: "XHSC300M",
        size: "XL",
        color: "black & white",
        image:
          "https://gomagcdn.ro/domains/motomus.ro/files/product/original/geaca-piele-dainese-super-speed-3-black-white-white-marime-44-16213-984007.png",
        price: "250.00$",
        stock: true,
      },
      {
        id: 5,
        shopStatus: false,
        removeRequest: false,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "$$$$$",
        stock: true,
      },
      {
        id: 6,
        shopStatus: false,
        removeRequest: false,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "$$$$$",
        stock: false,
      },
      {
        id: 7,
        shopStatus: false,
        removeRequest: false,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "$$$$$",
        stock: false,
      },
      {
        id: 8,
        shopStatus: false,
        removeRequest: false,
        maker: "AlpineStars",
        model: "DFB200",
        size: "L",
        color: "black",
        price: "200.00$",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        stock: false,
      },
      {
        id: 9,
        shopStatus: false,
        removeRequest: false,
        maker: "AlpineStars",
        model: "HDGF800X",
        size: "M",
        color: "white",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "150.00$",
        stock: true,
      },
      {
        id: 10,
        shopStatus: false,
        removeRequest: false,
        maker: "Dainese",
        model: "XVSC100F",
        size: "S",
        color: "red & blue",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "100.00$",
        stock: false,
      },
      {
        id: 11,
        shopStatus: false,
        removeRequest: false,
        maker: "Dainese",
        model: "XHSC300M",
        size: "XL",
        color: "black & white",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "250.00$",
        stock: true,
      },
      {
        id: 12,
        shopStatus: false,
        removeRequest: false,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "$$$$$",
        stock: true,
      },
      {
        id: 13,
        shopStatus: false,
        removeRequest: false,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "$$$$$",
        stock: false,
      },
      {
        id: 14,
        shopStatus: false,
        removeRequest: false,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "$$$$$",
        stock: false,
      },
      {
        id: 15,
        shopStatus: false,
        removeRequest: false,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "$$$$$",
        stock: false,
      },
      {
        id: 16,
        shopStatus: false,
        removeRequest: false,
        maker: "Model",
        model: "ABCDEF",
        size: "XL",
        color: "black & white",
        image:
          "https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvWkk4ZTNkYUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: "$$$$$",
        stock: false,
      },
    ],
  },
  mutations: {
    setEquipShopStatus(state, id) {
      let equipment = equipmentModule.state.equipments.find(
        (equipment) => equipment.id === id
      );
      console.log(equipment)
      equipment.shopStatus = !equipment.shopStatus;

    },
    setEquipRemoveStatus(state, id) {
      let equipment = equipmentModule.state.equipments.find(
        (equipment) => equipment.id === id
      );
      equipment.removeRequest = !equipment.removeRequest;
    }
  },
  actions: {},
  getters: {},
  modules: {},
};

export default equipmentModule;
