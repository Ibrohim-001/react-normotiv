function BuyButton({ children }: any) {
  return (
    <>
      <button className="py-4 px-12 font-medium border rounded border-gray-300">
        {children}
      </button>
    </>
  );
}

export default BuyButton;
