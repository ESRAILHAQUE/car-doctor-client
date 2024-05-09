import checkOut from "../../assets/images/checkout/checkout.png";
function AddNewService() {
  const handleNewService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;
    const textHere = form.textHere.value;
    const serviceType = form.serviceType.value;
    const productDesc = form.productDesc.value;
    const orderInfo = {
      serviceName,
      servicePrice,
      textHere,
      serviceType,
      productDesc,
    };
    console.log(orderInfo);
  };
  return (
    <div>
      <div
        className="hero  h-[50vh] mb-10 rounded"
        style={{
          backgroundImage: `url(${checkOut})`,
        }}
      >
        <div className="hero-overlay "></div>
        <div className=" text-neutral-content">
          <div className="max-w-md">
            <h1 className=" text-5xl text-left font-bold">Add New Service</h1>
          </div>
        </div>
      </div>

      {/* form section */}
      <div className="mb-10">
        <div className="hero  bg-base-200 px-16 py-10">
          <div className="card  w-full shadow-2xl bg-base-100 ">
            <form onSubmit={handleNewService}>
              <div className="card-body gap-2 grid grid-cols-1 lg:grid-cols-2 ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Service"
                    className="input input-bordered"
                    required
                    name="serviceName"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Service Price"
                    className="input input-bordered"
                    required
                    name="servicePrice"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Text Here</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Text Here"
                    className="input input-bordered"
                    required
                    name="textHere"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Type</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Service Type"
                    className="input input-bordered"
                    required
                    name="serviceType"
                  />
                </div>
              </div>
              <div className="px-6 mb-3">
                <textarea
                  placeholder="Product Description"
                  className="textarea textarea-bordered textarea-lg w-full "
                  name="productDesc"
                ></textarea>
              </div>
              <div className="mb-6 px-6">
                <input
                  className="btn w-full mx-auto bg-red-600  "
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddNewService;
