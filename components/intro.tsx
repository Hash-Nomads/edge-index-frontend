import { Carousel } from "antd";
import { FunctionComponent } from "react";

const Intro: FunctionComponent = () => {
  return (
    <Carousel autoplay className="mb-16">
      <div className="h-40 bg-gray-800">
        <h3 className="text-white text-5xl h-full grid place-content-center">Welcome to Edge Protocol</h3>
      </div>
      <div className="h-40 bg-gray-800">
        <h3 className="text-white text-5xl h-full grid place-content-center">We are the #1 ETF lending platform</h3>
      </div>
      <div className="h-40 bg-gray-800">
        <h3 className="text-white text-5xl h-full grid place-content-center">Let's GO!</h3>
      </div>
    </Carousel>
  );
};

export default Intro;
