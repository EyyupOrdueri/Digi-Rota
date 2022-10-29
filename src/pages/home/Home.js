import React from "react";
import homepage from "../../image/home-page.JPEG";
import misyonumuz from "../../image/misyon-foto.JPEG";
import ajansHayatı from "../../image/ajans-hayatı-foto.JPEG";
import kartalGöz from "../../image/kartal-göz-foto.JPEG";
import { useUsersListenerUpdate } from "../../auth/firebase";
import { ResponsiveBar } from "@nivo/bar";

const Home = () => {
  const users = useUsersListenerUpdate();

  //? calculate toplamReklamGideri
  const handleReklam = (ads) => {
    return ads.check === true;
  };
  let toplamReklamGideriDegeri = 0;
  const toplamReklamGideriArray = users.filter(handleReklam);

  const toplamReklamGideriArray2 = toplamReklamGideriArray.map((user) => {
    return user.adsExpense;
  });

  for (let i = 0; i < toplamReklamGideriArray2.length; i++) {
    toplamReklamGideriDegeri =
      toplamReklamGideriDegeri + parseInt(toplamReklamGideriArray2[i]);
  }

  //? calculate toplamHizmetGideri
  const handleHizmet = (rem) => {
    return rem.check === true;
  };
  let toplamHizmetGideriDegeri = 0;
  const toplamHizmetGideriArray = users.filter(handleHizmet);

  const toplamHizmetGideriArray2 = toplamHizmetGideriArray.map((user) => {
    return user.remuneration;
  });

  for (let i = 0; i < toplamHizmetGideriArray2.length; i++) {
    toplamHizmetGideriDegeri =
      toplamHizmetGideriDegeri + parseInt(toplamHizmetGideriArray2[i]);
  }

  //! grafik için data oluşturma
  // const dataBar = users.map((user) => {
  //   const newData = {
  //     id: user.id,
  //     country: user.fullName,
  //     adsExpense: user.adsExpense,
  //     remuneration: user.remuneration,
  //   };
  //   return newData;
  // });

  const handleData = (data) => {
    return data.check === true;
  };
  const dataBar0 = users.filter(handleData);

  const dataBar = dataBar0.map((user) => {
    const newData = {
      id: user.id,
      country: user.fullName,
      adsExpense: user.adsExpense,
      remuneration: user.remuneration,
    };
    return newData;
  });

  //! make sure parent container have a defined height when using
  //! responsive component, otherwise height will be 0 and
  //! no chart will be rendered.
  //! website examples showcase many properties,
  //! you'll often use just a few of them.
  const MyResponsiveBar = () => (
    <ResponsiveBar
      data={dataBar}
      keys={["adsExpense", "remuneration"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <>
      <div className="graphics-height mt-5">
        <h3 className="text-center">Toplam Reklam Giderlerine Göre Sıralama</h3>

        <MyResponsiveBar />
      </div>
      <div className="graphics d-flex justify-content-around mt-4 ">
        <div>
          <div className="totalAds border border-secondary">
            <h6>Toplamda reklamlara harcanan para</h6>
            <p>{toplamReklamGideriDegeri}</p>
          </div>
        </div>
        <div>
          <div className="totalIncome border border-secondary">
            <h6>Bir ayda elde edilen toplam hizmet bedeli</h6>
            <p>{toplamHizmetGideriDegeri}</p>
          </div>
        </div>
      </div>

      <div className="text-center ">
        <div>
          <img src={homepage} alt="homepage" className="mainPageImg" />
        </div>

        <div className="d-md-flex gap-2 p-3">
          <img src={misyonumuz} alt="homepage" className="mainPageImg" />

          <div>
            <h2 className="pb-4">Misyonumuz</h2>

            <p className="text-start">
              Öğrencilerimize dünyanın gördüğü en iyi çevrimiçi iş programlarını
              sunarak eğitim sisteminde reform yapma misyonundayız. Nokta. Yeni
              ajans türlerini kurmaya ve büyütmeye yardımcı olmak için
              buradayız. Geleneksel eğitim, maalesef, modası geçmiş, geçersiz ve
              aşırı pahalı. Online eğitimlerimiz, normal bir üniversite
              eğitiminin fiyat etiketinin 1/100'ü karşılığında geliriniz
              üzerindeki etkisini 10 katına çıkartmayı amaçlamaktadır.
            </p>
          </div>
        </div>

        <div className="d-md-flex gap-2 p-3">
          <img src={ajansHayatı} alt="homepage" className="mainPageImg" />

          <div>
            <h2 className="pb-4">Ajans Hayatı</h2>

            <p className="text-start">
              Sıfır iş deneyimine sahip yeni başlayanların kendi ajanslarını
              başlatmalarına ve "aşırı" karlı seviyelere çıkartmalarına yardımcı
              oluyoruz. Ayrıca 6 Figürlü ajansların 7 Figür'e ölçeklenmesine
              yardımcı oluyoruz.
            </p>

            <p className="text-start">
              Doğru bir ajansın nasıl kurulacağını bilen insan sayısı çok az.
              İşin "içinde" değil "üzerinde" çalışmaya önem veriyoruz.
            </p>

            <p className="text-start">
              Öğrencilerimizin pohpohlanmış 'reklam tacirleri' gibi değil gerçek
              ajans sahipleri gibi hareket etmelerini sağlıyoruz. Sonuç? Doğru
              yapılırsa, bir ajansa sahip olmak inanılmaz derecede kazançlıdır
              ve sandığınızdan çok daha kolay olabilir.
            </p>
          </div>
        </div>

        <div className="d-md-flex gap-2 p-3">
          <img src={kartalGöz} alt="homepage" className="mainPageImg" />

          <div>
            <h2 className="pb-4">Kartal-Göz</h2>

            <p className="text-start">
              Tek bir beceride ustalaşmanın başarıya götüreceğine inanmıyoruz.
            </p>

            <p className="text-start">
              Yüzlerce müşteriden sonra, başarının taktik savaşları ile olduğu
              kadar zihinsel savaşla da ilgili olduğunu biliyoruz. Burada
              gördüğünüz tüm programlar gerçek 'Girişimciler' yetiştirmek için
              tasarlandı. "Kartal Gözü" olan girişimciler.
            </p>

            <p className="text-start">
              ✓ Öğrencilerimize sadece nasıl satış yapılacağını değil, inanılmaz
              bir takımın nasıl kurulacağını öğretiyoruz.
            </p>
            <p className="text-start">
              ✓ Öğrencilerimize nakit akışını nasıl yöneteceklerini, metin
              yazarlığını, ücretli trafiği, muhasebeyi ve daha fazlasını nasıl
              anlayacaklarını öğretiyoruz.
            </p>
            <p className="text-start">
              ✓ Hile yapan değil, gerçek becerilere sahip gerçek 'Girişimciler'
              inşa ediyoruz.
            </p>
            <p className="text-start">
              ✓ Son olarak - program dahilinde zihniyet, yapı ve alışkanlıkların
              nasıl yönetileceğini öğretiyoruz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
