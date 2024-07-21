import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeProduct, changeAmount } from "../app/productSlice";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/index";

function Cart() {
  const dispatch = useDispatch();
  const { products, price, amount } = useSelector((state) => state.products);
  if (products.length === 0) {
    return (
      <div className="align-element flex flex-col items-center gap-5 p-4 min-h-screen bg-base-300">
        <h1 className="text-2xl font-medium text-center">
          Savatda hozircha mahsulot yo'q
        </h1>
        <p className="text-center">Bosh sahifadagi to'plamlardan boshlang</p>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
      </div>
    );
  } else {
    return (
      <div className="align-element overflow-x-auto p-4  min-h-screen">
        <table className="table-auto w-full max-w-5xl ml-auto mr-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Name/Category</th>
              <th className="p-2">Mathod</th>
              <th className="p-2">Amount</th>
              <th className="p-2"> Price</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-2">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.imageUrl} alt={product.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.title}</div>
                      <div className="text-sm opacity-50">
                        {product.category}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="p-2">
                  <span className=" line-clamp-3">
                    {product.description.substring(0, 100)}...
                  </span>
                </td>
                <td className="p-2 min-w-28">
                  <div className="flex items-center justify-center gap-2 ">
                    <button
                      onClick={() =>
                        dispatch(
                          changeAmount({
                            type: "increment",
                            id: product.id,
                          })
                        )
                      }
                      className="btn-sm"
                    >
                      +
                    </button>
                    <h3>{product.amount}</h3>
                    <button
                      onClick={() => {
                        if (product.amount === 1) {
                          dispatch(removeProduct(product.id));
                        } else {
                          dispatch(
                            changeAmount({
                              type: "decrement",
                              id: product.id,
                            })
                          );
                        }
                      }}
                      disabled={product.amount === 0}
                      className="btn-sm"
                    >
                      -
                    </button>
                  </div>
                </td>
                <td className="p-2 min-w-28">
                  <h1 className="text-xl w-5">
                    {formatPrice(product.price * product.amount)}
                  </h1>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => dispatch(removeProduct(product.id))}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <th className="p-2">Name/Category</th>
              <th className="p-2">Mathod</th>
              <th className="p-2 font-semibold min-w-28">
                <span> Total:</span>
                {amount}
              </th>
              <th className="p-2 flex flex-col min-w-28 font-semibold">
                <span className=" "> Total Price:</span>
                {formatPrice(price)}
              </th>
              <th className="p-2"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Cart;
