import "./graphics.css";
import { useUsersListenerUpdate } from "../../auth/firebase";
import { ResponsivePie } from "@nivo/pie";

// import { useState } from "react";

const Graphics = () => {
  // const [order, setOrder] = useState("");
  // const [loading, setLoading] = useState(false);

  const users = useUsersListenerUpdate();

  const dataGelir = users.map((user) => {
    const newData = {
      id: user.id,
      label: user.sectorName,
      value: user.remuneration,
    };
    return newData;
  });

  // const handleReklam = (users) => {
  //   if (users.check) {
  //     const newData = {};
  //     newData = {
  //       id: users.id,
  //       label: users.sectorName,
  //       value: users.adsExpense,
  //     };
  //     return newData;
  //   }
  // };

  // const dataReklam = handleReklam();

  const dataReklam = users.map((user) => {
    const newData = {
      id: user.id,
      label: user.sectorName,
      value: user.adsExpense,
    };
    return newData;
  });

  //! Using nivo library

  // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.
  const MyResponsivePieGelir = () => (
    <ResponsivePie
      data={dataGelir}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );

  const MyResponsivePieReklam = () => (
    <ResponsivePie
      data={dataReklam}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <>
      {/* <h3 className="text-center">Aylık Hizmet Bedeline Göre Sıralama</h3>
      <table className="table table-striped" id="monthlyPrice">
        <thead>
          <tr>
            <th scope="col" id="topLeftCorner">
              #
            </th>
            <th scope="col">İsim Soyisim</th>
            <th scope="col">Sektör</th>
            <th scope="col">Aylık Gelir</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            user.check ? (
              <tr>
                <th scope="row">#</th>
                <td>{user.fullName}</td>
                <td>{user.sectorName}</td>
                <td>{user.remuneration}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>

      <h3 className="text-center">Toplam Reklam Giderlerine Göre Sıralama</h3>
      <table className="table table-striped" id="adsExpense">
        <thead>
          <tr>
            <th scope="col" id="topLeftCorner">
              #
            </th>
            <th scope="col">İsim Soyisim</th>
            <th scope="col">Sektör</th>
            <th scope="col">Toplam Reklam Gideri</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            user.check ? (
              <tr>
                <th scope="row">#</th>
                <td>{user.fullName}</td>
                <td>{user.sectorName}</td>
                <td>{user.adsExpense}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table> */}
      <div className="graphics-height">
        <h3 className="text-center">Aylık Hizmet Bedeline Göre Sıralama</h3>

        <MyResponsivePieGelir />
      </div>

      <div className="graphics-height mt-5">
        <h3 className="text-center">Toplam Reklam Giderlerine Göre Sıralama</h3>

        <MyResponsivePieReklam />
      </div>
    </>
  );
};

export default Graphics;
