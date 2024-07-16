export default function Customer() {
  const datas = [
    ["Total Sales", 66180],
    ["Total Agents", 825],
    ["Available Properties", 12430],
    ["Sales This Year", 450],
  ];
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 container3 py-10 justify-between">
        {datas.map((data, key) => (
          <div key={key} className="space-y-2 text-center">
            <p className="font-semibold  text-2xl lg:text-3xl">{data[1].toLocaleString()}</p>
            <p>{data[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
