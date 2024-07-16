import Actions from "./Actions";
import Header from "./Header";
import Overview from "./Overview";
import Photos from "./Photos";
import Seller from "./Seller";
import Title from "./Title";

export default function Base() {
  return (
    <div className="py-5 container">
      <Actions />
      <Photos />
      <div className="grid mt-7 container grid-cols-[1fr_auto] gap-10">
        <div className="">
          <Title />
          <Header />
          <Overview />
        </div>
        <Seller />
      </div>
    </div>
  );
}
