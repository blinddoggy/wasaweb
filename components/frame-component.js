import LiquidityContainer from "./liquidity-container";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-10 box-border max-w-full text-left text-xl text-gray-200 font-space-grotesk ${className}`}
    >
      <div className="flex-1 rounded-21xl bg-black1 box-border overflow-hidden flex flex-row items-start justify-end py-[117px] px-[115px] relative max-w-full border-[1px] border-solid border-gray-300 mq800:py-[76px] mq800:px-[57px] mq800:box-border mq450:py-[49px] mq450:px-5 mq450:box-border">
        <div className="w-[555px] flex flex-col items-start justify-start gap-[40px] max-w-full z-[1] mq800:gap-[20px]">
          <div className="w-[510px] flex flex-col items-start justify-start max-w-full">
            <b className="self-stretch relative leading-[24px] mq450:text-base mq450:leading-[19px]">
              tokenomics
            </b>
            <h1 className="m-0 relative text-61xl leading-[80px] font-light font-inherit text-purple inline-block max-w-full mq800:text-21xl mq800:leading-[48px] mq450:text-5xl mq450:leading-[32px]">
              tokenomics
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center max-w-full text-13xl text-purple">
            <div className="self-stretch box-border flex flex-col items-start justify-center max-w-full border-b-[1px] border-solid border-purple">
              <LiquidityContainer
                liquidityTitleContainer="60%"
                liquidity="Liquidity"
                remove="/remove.svg"
              />
              <div className="w-[510px] flex flex-row items-start justify-center py-5 px-0 box-border max-w-full text-base text-white font-archivo">
                <div className="flex-1 relative tracking-[0.02em] leading-[26px] font-light inline-block max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse bibendum tincidunt volutpat. Pellentesque mattis
                  turpis neque, non lacinia ligula blandit faucibus.
                </div>
              </div>
            </div>
            <LiquidityContainer
              liquidityTitleContainer="15%"
              liquidity="Marketing"
              remove="/add.svg"
              propBorderBottom="1px solid #9945ff"
              propMinWidth="123px"
              propBackgroundColor="unset"
            />
            <LiquidityContainer
              liquidityTitleContainer="10%"
              liquidity="Ecosystem"
              remove="/add.svg"
              propBorderBottom="1px solid #9945ff"
              propMinWidth="132px"
              propBackgroundColor="unset"
            />
            <LiquidityContainer
              liquidityTitleContainer="10%"
              liquidity="Team"
              remove="/add.svg"
              propBorderBottom="1px solid #9945ff"
              propMinWidth="62px"
              propBackgroundColor="unset"
            />
            <LiquidityContainer
              liquidityTitleContainer="5%"
              liquidity="Advisory"
              remove="/add.svg"
              propBorderBottom="1px solid #9945ff"
              propMinWidth="106px"
              propBackgroundColor="unset"
            />
          </div>
        </div>
        <div className="h-[1616.3px] w-[1440px] absolute !m-[0] bottom-[-466.3px] left-[calc(50%_-_720px)]">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[-280px] max-h-full w-[2000px] object-cover"
            alt=""
            src="/img-0156-1@2x.png"
          />
          <img
            className="absolute top-[350px] left-[-109px] w-[676.3px] h-[909px] object-contain z-[1]"
            alt=""
            src="/group@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
