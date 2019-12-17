import "../style.css";
import { Content } from "../data";

function Home() {
  return (
    <div className="flex flex-row flex-wrap w-full text-white text-lg">
      {Content.map(data => {
        return (
          <div className="flex w-full lg:w-1/2 p-6 lg:p-10 justify-center items-center">
            <img src={data.icon} className="w-10 h-10 mr-4 lg:mr-8" />
            <div className="flex-1">
              <div className="text-orange-500">{data.title}</div>
              <div>{data.discription}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
