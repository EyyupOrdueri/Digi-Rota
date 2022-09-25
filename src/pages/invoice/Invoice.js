import "./invoice.css";

const Invoice = () => {
  return (
    <>
      <form>
        <div className="row justify-content-start mt-md-2">
          <div className="form-group col-md-5">
            <label htmlFor="invoiceName">Name</label>
            <input
              type="text"
              className="form-control"
              id="invoiceName"
              placeholder="Name"
            />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="invoiceSurname">Surname</label>
            <input
              type="text"
              className="form-control"
              id="invoiceSurname"
              placeholder="Surname"
            />
          </div>

          <div className="form-group col-md-5">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              placeholder="Company name you serve"
            />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="sectorName">Sector Name</label>
            <input
              type="text"
              className="form-control"
              id="sectorName"
              placeholder="In which sector does the company you serve operate in?"
            />
          </div>
        </div>

        <div>
          <div className="form-group col-md-4">
            <label htmlFor="serviceFee">Remuneration</label>
            <input
              type="number"
              className="form-control"
              id="serviceFee"
              placeholder="Your service fee per month $"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="adsExpense">Total ads expense</label>
            <input
              type="number"
              className="form-control"
              id="adsExpense"
              placeholder="Total advertisement expense you have spent $"
            />
          </div>
        </div>

        <div className="form-check m-md-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="havingAgency"
          />
          <label className="form-check-label" htmlFor="havingAgency">
            I have a digital marketing agency.
          </label>
        </div>

        <div>
          <label className="custom-file-label" htmlFor="customFile">
            Add your invoice file here 👉
          </label>
          <input
            type="file"
            className="custom-file-input m-md-4"
            id="customFile"
          />
        </div>
        <div className="text-center submit-btn">
          <button type="submit" className="btn btn-primary">
            Create Invoice
          </button>
        </div>
      </form>
    </>
  );
};

export default Invoice;
