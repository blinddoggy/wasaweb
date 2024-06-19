import FrameComponent3 from "../components/frame-component3";
import FeatureImage from "../components/feature-image";
import FrameComponent from "../components/frame-component";
import RoadmapContainer from "../components/roadmap-container";
import RoadmapImage from "../components/roadmap-image";

const Desktop = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-end justify-start pt-5 px-0 pb-0 box-border gap-[80px] opacity-[0.99] leading-[normal] tracking-[normal] mq800:gap-[40px] mq450:gap-[20px]">
      <FrameComponent3 />
      <FeatureImage />
      <header className="self-stretch hidden flex-row items-center justify-between py-7 px-10 box-border max-w-full gap-[20px] text-left text-base text-white font-space-grotesk mq1125:flex-wrap">
        <div className="w-[200px] flex flex-row items-center justify-start py-0 pr-[37px] pl-0 box-border text-29xl">
          <b className="h-[34px] flex-1 relative leading-[48px] uppercase flex items-center mq800:text-[38px] mq800:leading-[38px] mq450:text-[29px] mq450:leading-[29px]">
            wasaa
          </b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[40px] max-w-full mq800:flex-wrap">
          <div className="h-5 relative leading-[20px] font-medium inline-block">
            about
          </div>
          <div className="h-5 relative leading-[20px] font-medium inline-block">
            exchanges
          </div>
          <div className="h-5 relative leading-[20px] font-medium inline-block">
            swap
          </div>
          <div className="h-5 relative leading-[20px] font-medium inline-block">
            tokenomis
          </div>
          <div className="h-5 relative leading-[20px] font-medium inline-block">
            roadmaps
          </div>
          <div className="h-5 relative leading-[20px] font-medium inline-block">
            contact
          </div>
        </div>
        <div className="h-11 w-[200px] flex flex-row items-center justify-end text-dark-grey">
          <div className="self-stretch rounded-25xl bg-white flex flex-row items-center justify-center p-1">
            <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-4">
              <div className="self-stretch relative leading-[16px]">
                Buy Now
              </div>
            </div>
            <div className="h-9 w-9 rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/arrow-outward.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-left text-xl text-gray-200 font-space-grotesk">
        <div className="w-[589px] flex flex-col items-start justify-start max-w-full">
          <b className="w-[510px] relative leading-[24px] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
            swap
          </b>
          <h1 className="m-0 self-stretch relative text-61xl leading-[80px] text-green font-inherit mq800:text-21xl mq800:leading-[48px] mq450:text-5xl mq450:leading-[32px]">
            <span className="font-light">{`buy `}</span>
            <b>{`wasaa `}</b>
            <span className="font-light">on...</span>
          </h1>
        </div>
      </section>
      <section className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-10 box-border min-h-[480px] text-center text-xl text-white font-space-grotesk">
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-0 pl-[82px] relative border-[1px] border-solid border-gray-300 mq450:pl-5 mq450:box-border">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[-1220px] right-[-1540px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] w-[223px] flex flex-col items-end justify-start py-[135px] pr-[83px] pl-0 box-border relative gap-[10px] shrink-0 [debug_commit:0448091] mq450:pt-[88px] mq450:pb-[88px] mq450:box-border">
            <div className="w-[400px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-177px] bg-gray-100 z-[1]" />
            <div className="w-[93px] flex flex-row items-start justify-end py-0 pr-[30px] pl-0 box-border">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/binance-wallet.svg"
              />
            </div>
            <div className="self-stretch relative leading-[40px] font-medium z-[2] mq450:text-base mq450:leading-[32px]">
              Binance
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[-1300px] right-[-1790px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[400px] flex flex-col items-center justify-start py-[135px] px-5 box-border relative gap-[10px] shrink-0 [debug_commit:0448091] max-w-[193%] mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/coinbase.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Coinbase
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] bottom-[-1790px] left-[-1790px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[400px] flex flex-col items-center justify-start py-[135px] px-5 box-border relative gap-[10px] shrink-0 [debug_commit:0448091] max-w-[193%] mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative rounded-3xl overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/metamask.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Metamask
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[-1495px] left-[-1470px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[400px] flex flex-col items-center justify-start py-[135px] px-5 box-border relative gap-[10px] shrink-0 [debug_commit:0448091] max-w-[193%] mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/coin98.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Coin98
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[-1460px] right-[-1660px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[400px] flex flex-col items-center justify-start py-[135px] px-5 box-border relative gap-[10px] shrink-0 [debug_commit:0448091] max-w-[193%] mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/walletconnect.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Wallet Conect
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[calc(50%_-_1000px)] left-[calc(50%_-_1000px)] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[-1790px] left-[-1790px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[237px] flex flex-col items-start justify-start py-[135px] pr-0 pl-[130px] box-border relative gap-[10px] shrink-0 [debug_commit:0448091] mq450:pl-5 mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-[400px] h-full absolute !m-[0] top-[0px] right-[-163px] bottom-[0px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/phantom.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Phantom
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-0 pl-3 relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[-1460px] right-[-1660px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] w-[293px] flex flex-col items-start justify-start py-[135px] px-[23px] box-border relative gap-[10px] shrink-0 [debug_commit:0448091] mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-[400px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-107px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/walletconnect.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Wallet Conect
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[calc(50%_-_1000px)] left-[calc(50%_-_1000px)] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[400px] flex flex-col items-center justify-start py-[135px] px-5 box-border relative gap-[10px] shrink-0 [debug_commit:0448091] max-w-[193%] mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative rounded-3xl overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/brave.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Brave
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[-1790px] left-[-1790px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[400px] flex flex-col items-center justify-start py-[135px] px-5 box-border relative gap-[10px] shrink-0 [debug_commit:0448091] max-w-[193%] mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/phantom.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Phantom
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[-1300px] right-[-1790px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[400px] flex flex-col items-center justify-start py-[135px] px-5 box-border relative gap-[10px] shrink-0 [debug_commit:0448091] max-w-[193%] mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/coinbase.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Coinbase
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] bottom-[-1790px] left-[-1790px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[400px] flex flex-col items-center justify-start py-[135px] px-5 box-border relative gap-[10px] shrink-0 [debug_commit:0448091] max-w-[193%] mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative rounded-3xl overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/metamask.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Metamask
            </div>
          </div>
        </div>
        <div className="h-[210px] w-[210px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[-1495px] left-[-1470px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[397px] flex flex-col items-center justify-start py-[135px] pr-5 pl-[23px] box-border relative gap-[10px] shrink-0 [debug_commit:0448091] max-w-[191%] mq450:pt-[25.67px] mq450:pb-[88px] mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[-3px] bottom-[0px] bg-gray-100 z-[1]" />
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/coin98.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Coin98
            </div>
          </div>
        </div>
        <div className="h-[210px] rounded-21xl box-border overflow-hidden flex flex-row items-start justify-start relative ml-[-5.7px] border-[1px] border-solid border-gray-300">
          <img
            className="h-[2000px] w-[2000px] absolute !m-[0] top-[-1220px] right-[-1540px] object-cover z-[1]"
            alt=""
            src="/textura-11@2x.png"
          />
          <div className="mt-[-95px] ml-[-95px] w-[210px] flex flex-col items-start justify-start py-[135px] pr-[43px] pl-[130px] box-border relative gap-[10px] mq450:pt-[25.67px] mq450:px-5 mq450:pb-[88px] mq450:box-border">
            <div className="w-[400px] h-full absolute !m-[0] top-[0px] right-[-190px] bottom-[0px] bg-gray-100 z-[1]" />
            <div className="w-[37px] flex flex-row items-start justify-start py-0 pr-0 pl-[30px] box-border">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/binance-wallet.svg"
              />
            </div>
            <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
              Binance
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
      <RoadmapContainer />
      <RoadmapImage />
    </div>
  );
};

export default Desktop;
