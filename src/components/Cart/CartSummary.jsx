import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();

  const total = getCartTotal();

  return (
    <>
      <p className="texto-finalizar">TOTAL A PAGAR:👉 ${total} </p>
      <button className="btn bg-success primary btn-finalizar" onClick={checkout}>
        FINALIZAR COMPRA
      </button>
    </>
  );
};
