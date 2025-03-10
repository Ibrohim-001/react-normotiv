function Input() {
  return (
    <>
      <input
        type="text"
        placeholder="Your Name *"
        className="py-[13px] pl-4 w-[235px] bg-[#F5F5F5] rounded"
      />
      <div className="flex flex-col gap-2">
        <label>First Name</label>
        <input
          type="text"
          placeholder="Md"
          className="py-[13px] pl-4 w-[330px] bg-[#F5F5F5] rounded"
        />
      </div>
    </>
  );
}

export default Input;
