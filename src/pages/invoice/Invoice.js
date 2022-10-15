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

        <div className="form-group col-md-6">
          <label htmlFor="sectorName">Sektör İsmi</label>
          <input
            type="text"
            value={sectorName}
            className="form-control"
            id="sectorName"
            placeholder="Hizmet verdiğiniz firma hangi sektörde faaliyet gösteriyor?"
            onChange={(e) => {
              setSectorName(e.target.value);
            }}
            required
          />
        </div>

        <div>
          <div className="form-group col-md-6">
            <label htmlFor="serviceFee">Aylık Gelir</label>
            <input
              value={remuneration}
              type="number"
              className="form-control"
              id="serviceFee"
              placeholder="Aldığınız aylık hizmet bedelini giriniz. (TL olarak)"
              onChange={(e) => {
                setRemuneration(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="adsExpense">Toplam Reklam Gideri</label>
            <input
              value={adsExpense}
              type="number"
              className="form-control"
              id="adsExpense"
              placeholder="Harcadığınız toplam reklam giderini giriniz. (TL olarak)"
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
            Dijital pazarlama ajansım var.
          </label>
        </div>

        <div>
          <label className="custom-file-label" htmlFor="customFile">
            Fatura ile ilgili belgenizi buradan ekleyiniz 👉
          </label>
          <input
            value={extraDoc}
            type="file"
            className="custom-file-input m-md-6"
            id="customFile"
            onChange={(e) => {
              setExtraDoc(e.target.value);
            }}
          />
        </div>
        <div className="text-center submit-btn">
          <button type="submit" className="btn btn-primary">
            Fatura Oluştur
          </button>
        </div>
      </form>
    </>
  );
};

export default Invoice;
