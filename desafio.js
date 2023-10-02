class ProductManager {
  constructor() {
      this.products = [];
      this.lastProductId = 0;
  }
  addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
          console.error("Todos los campos son obligatorios");
          return;
      }
      const CodigoUnico = !this.products.some(product => product.code === code); 
      if (!CodigoUnico) {
          console.error("El código ya existe en la lista de productos");
          return;
      }
      this.lastProductId += 1;
      this.products.push({
      id: this.lastProductId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      });
      console.log("Producto agregado", {
          id: this.lastProductId,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
      });
  }
  
      getProducts() {
      return this.products;
  }
  
  getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (product) {
          return product;
      } else {
          console.error("No hemos encontrado el producto");
      }
  }
  }
  
  const productManager = new ProductManager();
  productManager.addProduct("Product 1", "Description 1", 29.999, "screen1.jpg", "00", 10);
  productManager.addProduct("Product 2", "Description 2", 34.999, "screen2.jpg", "01", 15);
  productManager.addProduct("Product 3", "Description 3", 79.999, "screen3.jpg", "02", 25);
  productManager.addProduct("Product 4", "Description 4", 123.999, "screen4.jpg", "03", 5);
  
  console.log("Lista de productos", productManager.getProducts());
  
  const product = productManager.getProductById(3);
  if (product) {
  console.log("Producto encontrado", product);
  }