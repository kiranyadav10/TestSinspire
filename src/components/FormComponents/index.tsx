const index = (register:any) => {
  return (
    <>
      <input {...register("firstName")} />
    </>
  );
};

export default index;
