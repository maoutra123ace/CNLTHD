const img = require("../images/data.png");
const img2 = require("../images/Msi.jpg");
const Msi = require("../images/Msi2.jpg");
const dellVostro = require("../images/dellVostro.jpg");
const products = [
  {
    id: 1,
    h2: "dell-vostro",
    title:
      "Laptop Dell Vostro 5502 Core i7-1165G7, Ram 16GB, SSD 512GB, GF MX330 2GB, 15.6 Inch FHD",
    description:
      "Laptop Dell Vostro 5502 là một sản phẩm laptop chuyên về đồ họa - kỹ thuật đến từ thương hiệu Dell nổi tiếng của Mỹ chuyên cho ra mắt người dùng những sản phẩm với nhiều tính năng vượt trội và có độ bền cao. Đây là một sản phẩm Laptop Dell đáng chú ý với thiết kế mỏng nhẹ, đáp ứng nhu cầu di chuyển và làm việc linh hoạt mọi nơi mọi lúc.",
    img: img,
    img2: dellVostro,
    category: "Dell",
    price: "15560000",
    categoryslug: "Dell-vostro",
    rating: 3.5,
  },
  {
    id: 2,
    h2: "dell-vostro",
    title:
      "Laptop Dell Vostro 5502 Core i7-1165G7, Ram 16GB, SSD 512GB, GF MX330 2GB, 15.6 Inch FHD",
    description:
      "Laptop Dell Vostro 5502 là một sản phẩm laptop chuyên về đồ họa - kỹ thuật đến từ thương hiệu Dell nổi tiếng của Mỹ chuyên cho ra mắt người dùng những sản phẩm với nhiều tính năng vượt trội và có độ bền cao. Đây là một sản phẩm Laptop Dell đáng chú ý với thiết kế mỏng nhẹ, đáp ứng nhu cầu di chuyển và làm việc linh hoạt mọi nơi mọi lúc.",
    img: img,
    img2: dellVostro,
    category: "Dell",
    price: "15560000",
    categoryslug: "Dell-vostro",
    rating: 4.44,
  },
  {
    id: 3,
    title:
      "MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám",
    description:
      "MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img: img2,
    img2: Msi,
    category: "MSI",
    price: "17000000",
    categoryslug: "Msi-modern",
    rating: 5,
  },
  {
    id: 4,
    h2: "modern-14",
    title:
      "MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám",
    description:
      "MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img: img2,
    img2: Msi,
    category: "MSI",
    categoryslug: "Msi-modern1",
    price: "17000000",
    rating: 4.44,
  },
  {
    id: 5,
    h2: "modern-14",
    title:
      "MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám",
    description:
      "MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img: img2,
    img2: Msi,
    category: "MSI",
    categoryslug: "Msi-modern",
    price: "17000000",
    rating: 3,
  },
  {
    id: 6,
    h2: "modern-14",
    title:
      "MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám",
    description:
      "MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img: img2,
    img2: Msi,
    category: "MSI",
    categoryslug: "Msi-katana",
    price: "17000000",
    rating: 3.5,
  },
  {
    id: 7,
    h2: "modern-14",
    title:
      "MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám",
    description:
      "MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img: img2,
    img2: Msi,
    category: "MSI",
    categoryslug: "Msi-modern",
    price: "17000000",
  },
  {
    id: 8,
    h2: "modern-14",
    title:
      "MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám",
    description:
      "MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img: img2,
    img2: Msi,
    category: "MSI",
    categoryslug: "Msi-modern",
    price: "17000000",
    rating: 3.5,
  },
];
const proc=() => {
  return products
}
const getALLproducts = () => {
  const value = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(products);
    });
    
  });
  return value;

};

const getProducts = (counts) => {
  const max = products.length - counts;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + counts);
};
const getProductById = (id) => {
  const findId = products.find((e) => {
    return e.id == id;
  });

  return findId;
};

const productsData = {
  proc,
  getALLproducts,
  getProducts,
  getProductById,
};
export default productsData;
