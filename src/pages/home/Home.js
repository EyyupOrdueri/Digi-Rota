import React from "react";
import homepage from "../../image/home-page.JPEG";
import misyonumuz from "../../image/misyon-foto.JPEG";
import ajansHayatı from "../../image/ajans-hayatı-foto.JPEG";
import kartalGöz from "../../image/kartal-göz-foto.JPEG";

const Home = () => {
  return (
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
            ajans türlerini kurmaya ve büyütmeye yardımcı olmak için buradayız.
            Geleneksel eğitim, maalesef, modası geçmiş, geçersiz ve aşırı
            pahalı. Online eğitimlerimiz, normal bir üniversite eğitiminin fiyat
            etiketinin 1/100'ü karşılığında geliriniz üzerindeki etkisini 10
            katına çıkartmayı amaçlamaktadır.
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
            Doğru bir ajansın nasıl kurulacağını bilen insan sayısı çok az. İşin
            "içinde" değil "üzerinde" çalışmaya önem veriyoruz.
          </p>

          <p className="text-start">
            Öğrencilerimizin pohpohlanmış 'reklam tacirleri' gibi değil gerçek
            ajans sahipleri gibi hareket etmelerini sağlıyoruz. Sonuç? Doğru
            yapılırsa, bir ajansa sahip olmak inanılmaz derecede kazançlıdır ve
            sandığınızdan çok daha kolay olabilir.
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
  );
};

export default Home;
