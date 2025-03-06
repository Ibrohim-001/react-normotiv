function Input({ children }: any) {
  return (
    <>
      <div className="flex flex-col">
        <label className="text-[#908d8d] mb-2">
          {children}
          <span className="text-[#DB4444]">*</span>
        </label>
        <input
          type="text"
          className="w-[470px] bg-[#F5F5F5] h-[50px] rounded px-2"
        />
      </div>
    </>
  );
}

export default Input;
