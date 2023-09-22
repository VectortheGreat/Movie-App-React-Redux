const ProductCard = () => {
  const product = {
    name: "Ürün Adı",
    category: "Kategori",
    description: "Ürün açıklaması veya detayları burada yer alabilir.",
    price: 49.99,
    imageUrl: "ürün-resmi-url",
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {product.category}
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {product.name}
            </a>
            <p className="mt-2 text-gray-500">{product.description}</p>
            <div className="mt-2">
              <div className="text-gray-700 font-bold">
                Fiyat: ${product.price}
              </div>
            </div>
            <div className="mt-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
