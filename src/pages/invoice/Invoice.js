import "./invoice.css";
import { useCallback, useState } from "react";
import { addUser } from "../../auth/firebase";

const Invoice = () => {
  const [sectorName, setSectorName] = useState("");
  const [remuneration, setRemuneration] = useState("");
  const [adsExpense, setAdsExpense] = useState("");
  const [extraDoc, setExtraDoc] = useState("");
  const [agency, setAgency] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      addUser(sectorName, remuneration, adsExpense);

      setSectorName("");
      setRemuneration("");
      setAdsExpense("");
      setExtraDoc("");
      setAgency("");
    },
    [sectorName, remuneration, adsExpense]
  );

  console.log(extraDoc);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <div className="row justify-content-start mt-md-2">
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
        </div> */}

        <div className="form-group col-md-4">
          <label htmlFor="sectorName">Sector Name</label>
          <input
            type="text"
            value={sectorName}
            className="form-control"
            id="sectorName"
            placeholder="In which sector does the company you serve operate in?"
            onChange={(e) => {
              setSectorName(e.target.value);
            }}
            required
          />
        </div>

        <div>
          <div className="form-group col-md-4">
            <label htmlFor="serviceFee">Remuneration</label>
            <input
              value={remuneration}
              type="number"
              className="form-control"
              id="serviceFee"
              placeholder="Your service fee per month $"
              onChange={(e) => {
                setRemuneration(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="adsExpense">Total ads expense</label>
            <input
              value={adsExpense}
              type="number"
              className="form-control"
              id="adsExpense"
              placeholder="Total advertisement expense you have spent $"
              onChange={(e) => {
                setAdsExpense(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="form-check m-md-3">
          <input
            value={agency}
            className="form-check-input"
            type="checkbox"
            id="havingAgency"
            onClick={() => {
              agency ? setAgency(false) : setAgency(true);
            }}
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
            value={extraDoc}
            type="file"
            className="custom-file-input m-md-4"
            id="customFile"
            onChange={(e) => {
              setExtraDoc(e.target.value);
            }}
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
