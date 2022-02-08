const ProductDescription = ({description,blockchain,nftContract}) => {
  return (
    <div className="shadow-xl rounded py-2 px-4 pb-32">
      {/* Description */}
      <div className="h-fit w-fit shadow-xl bg-white px-10 mx-28 lg:mx-48 mt-10 rounded py-5">
        <p className="text-2xl font-bold">Description</p>
        <p className="font-medium mt-4">{description}</p> 
      </div>

      {/* Details */}

    </div>
  );
};

export default ProductDescription;
