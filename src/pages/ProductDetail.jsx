import { useParams } from "react-router-dom";
import Header from "../components/Navbar/Header";
import { useSelector } from "react-redux";
import Detail from "../components/Products/Detail";

const ProductDetail = () => {
    const { id } = useParams();
    const { product } = useSelector((state) => state.product);
    const foundProduct = product.find((item) => item.id == id);
    if (!foundProduct) {
        return <p>There is no product with this id (developer error).</p>;
    }
    return (
        <div>
            <Header></Header>
            <Detail product={product}></Detail>
        </div>
    );
};

export default ProductDetail;
