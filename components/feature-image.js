import FrameComponent2 from "./frame-component2";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const FeatureImage = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-221xl text-[transparent] font-space-grotesk ${className}`}
    >
      <div className="h-[900px] w-[1440px] bg-black1 overflow-hidden shrink-0 flex flex-col items-start justify-start relative max-w-full mq1350:h-auto">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden z-[0]"
          alt=""
          src="/img-0165-1@2x.png"
        />
        <img
          className="w-[1800px] h-[1289.1px] absolute !m-[0] top-[-322px] left-[calc(50%_-_900px)] object-cover"
          alt=""
          src="/img-0164-1@2x.png"
        />
        <div className="mt-[-50px] ml-[-257px] w-[1955px] flex flex-row items-start justify-start py-0 pr-[258px] pl-[297px] box-border gap-[138px] opacity-[0.2] shrink-0 [debug_commit:0448091] max-w-[136%] z-[1] mq800:gap-[34px] mq800:pl-[74px] mq800:pr-16 mq800:box-border mq450:gap-[17px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap mq1350:gap-[69px] mq1350:pl-[148px] mq1350:pr-[129px] mq1350:box-border">
          <div className="flex-1 flex flex-col items-start justify-start pt-[94px] px-0 pb-0 box-border min-w-[487px] max-w-full mq1125:pt-[61px] mq1125:box-border mq1125:min-w-full mq450:pt-10 mq450:box-border">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <b className="w-[375px] absolute !m-[0] top-[-94px] left-[-99.5px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <b className="w-[375px] absolute !m-[0] top-[-94px] right-[79.5px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <b className="w-[375px] absolute !m-[0] top-[114px] left-[-297px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <b className="w-[375px] absolute !m-[0] top-[114px] right-[-118px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <b className="w-[375px] absolute !m-[0] top-[calc(50%_-_84px)] left-[-99.5px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <b className="w-[375px] absolute !m-[0] bottom-[114px] left-[-297px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <b className="w-[375px] absolute !m-[0] right-[-118px] bottom-[114px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <b className="w-[375px] absolute !m-[0] bottom-[-94px] left-[-99.5px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <b className="w-[375px] absolute !m-[0] right-[79.5px] bottom-[-94px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <div className="flex-1 flex flex-col items-start justify-start max-w-full z-[2]">
                <FrameComponent2 solana1="Solana" bitcoin="Bitcoin" />
                <div className="w-[571px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-74px]">
                  <b className="w-[375px] relative tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] shrink-0 [debug_commit:0448091] max-w-full mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                    888
                  </b>
                </div>
                <FrameComponent1 ethereum1="Ethereum" binance="Binance" />
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[236px] box-border max-w-full mt-[-74px] mq800:pl-[118px] mq800:box-border mq450:pl-5 mq450:box-border">
                  <b className="w-[375px] relative tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] shrink-0 [debug_commit:0448091] max-w-full mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                    888
                  </b>
                </div>
                <FrameComponent2
                  solana1="Ethereum"
                  bitcoin="Raydium"
                  propMarginTop="-74px"
                />
                <div className="w-[571px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-74px]">
                  <b className="w-[375px] relative tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] shrink-0 [debug_commit:0448091] max-w-full mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                    888
                  </b>
                </div>
                <FrameComponent1 ethereum1="Notcoin" binance="Ultiverse" />
              </div>
            </div>
          </div>
          <div className="w-[512px] flex flex-col items-start justify-start py-0 px-0 box-border gap-[40px] min-w-[512px] max-w-full mq1125:min-w-full mq450:gap-[20px] mq1350:flex-1">
            <div className="flex flex-row items-start justify-start relative max-w-full">
              <b className="w-[375px] absolute !m-[0] top-[0px] left-[-197.5px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <div className="w-[512px] flex flex-row items-start justify-start py-0 pr-0 pl-[197px] box-border max-w-full mq800:pl-[98px] mq800:box-border mq450:pl-5 mq450:box-border">
                <b className="w-[375px] relative tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] max-w-[120%] shrink-0 mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                  888
                </b>
              </div>
            </div>
            <div className="w-[770px] flex flex-row items-start justify-start gap-[20px] max-w-[151%] shrink-0 mq1125:flex-wrap">
              <div className="flex-1 flex flex-row items-start justify-start relative min-w-[244px] max-w-full">
                <b className="flex-1 relative tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] max-w-full mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                  888
                </b>
                <b className="w-[555px] absolute !m-[0] right-[-97px] bottom-[4px] text-xl leading-[24px] inline-block text-gray-200 z-[2] mq450:text-base mq450:leading-[19px]">
                  exchange
                </b>
              </div>
              <b className="flex-1 relative tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[244px] max-w-full mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
            </div>
            <div className="flex flex-row items-start justify-start relative max-w-full">
              <b className="w-[375px] absolute !m-[0] top-[0px] left-[-197.5px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <div className="w-[512px] flex flex-row items-start justify-start py-0 pr-0 pl-[197px] box-border max-w-full mq800:pl-[98px] mq800:box-border mq450:pl-5 mq450:box-border">
                <b className="w-[375px] relative tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] max-w-[120%] shrink-0 mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                  888
                </b>
              </div>
              <h1 className="!m-[0] w-[555px] absolute top-[-44px] left-[-83px] text-61xl leading-[80px] text-green inline-block z-[2] font-inherit mq800:text-21xl mq800:leading-[48px] mq450:text-5xl mq450:leading-[32px]">
                <span className="font-light">{`buy `}</span>
                <b>wasaa</b>
              </h1>
              <div className="w-[555px] absolute !m-[0] bottom-[-68px] left-[-83px] text-xl tracking-[0.02em] leading-[32px] font-light font-archivo text-white inline-block z-[2] mq450:text-base mq450:leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas mollis dui mi, sed varius lacus rutrum at. Etiam eget
                consectetur elit. Ut nunc sem, tincidunt id turpis sit amet,
                vulputate sollicitudin quam. Integer quis commodo odio. Maecenas
                malesuada diam nisi, eu aliquet enim quis. 
              </div>
            </div>
            <div className="w-[770px] flex flex-row items-start justify-start gap-[20px] max-w-[151%] shrink-0 mq1125:flex-wrap">
              <b className="flex-1 relative tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[244px] max-w-full mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <b className="flex-1 relative tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[244px] max-w-full mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
            </div>
            <div className="flex flex-row items-start justify-start relative max-w-full">
              <b className="w-[375px] absolute !m-[0] top-[0px] left-[-197.5px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                888
              </b>
              <div className="w-[512px] flex flex-row items-start justify-start py-0 pr-0 pl-[197px] box-border max-w-full mq800:pl-[98px] mq800:box-border mq450:pl-5 mq450:box-border">
                <b className="w-[375px] relative tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] max-w-[120%] shrink-0 mq800:text-77xl mq800:leading-[101px] mq450:text-41xl mq450:leading-[67px]">
                  888
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeatureImage.propTypes = {
  className: PropTypes.string,
};

export default FeatureImage;
