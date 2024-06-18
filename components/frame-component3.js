import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-10 box-border max-w-full text-left text-base text-white font-space-grotesk ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch rounded-21xl bg-dark-grey box-border flex flex-row items-center justify-between py-1.5 px-2 top-[0] z-[99] sticky gap-[20px] max-w-full border-[1px] border-solid border-gray-300">
          <div className="flex flex-row items-center justify-start py-0 pr-[17px] pl-5 text-29xl">
            <a className="[text-decoration:none] relative leading-[34px] uppercase font-bold text-[inherit] whitespace-nowrap">
              wasaa
            </a>
          </div>
          <div className="w-[593px] flex flex-row items-start justify-start gap-[40px] max-w-full mq800:gap-[20px] mq1125:hidden">
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[47px]">
              about
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[85px]">
              exchanges
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[41px]">
              swap
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[81px]">
              tokenomis
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[77px]">
              roadmaps
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[62px]">
              contact
            </a>
          </div>
          <div className="w-[200px] flex flex-row items-center justify-end text-dark-grey">
            <div className="rounded-25xl bg-white flex flex-row items-center justify-center p-1">
              <div className="flex flex-row items-center justify-center py-2.5 px-4">
                <a className="[text-decoration:none] relative leading-[16px] text-[inherit] inline-block min-w-[68px] whitespace-nowrap">
                  Buy Now
                </a>
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
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-xl text-dark-grey">
          <div className="flex-1 rounded-21xl bg-black1 box-border overflow-hidden flex flex-col items-start justify-center pt-0 px-0 pb-[0.5px] relative gap-[40px] min-w-[435px] min-h-[800px] max-w-full border-[1px] border-solid border-gray-300 mq800:gap-[20px] mq800:min-w-full">
            <img
              className="w-[1200px] h-[1323.5px] absolute !m-[0] bottom-[0.5px] left-[calc(50%_-_600px)] object-cover"
              alt=""
              src="/img-0161-1@2x.png"
            />
            <div className="w-[510px] flex flex-col items-start justify-start max-w-full z-[1] text-gray-200">
              <b className="self-stretch relative leading-[24px] mq450:text-base mq450:leading-[19px]">
                about
              </b>
              <h1 className="m-0 self-stretch relative text-61xl leading-[80px] text-green font-inherit mq800:text-21xl mq800:leading-[48px] mq450:text-5xl mq450:leading-[32px]">
                <b>wasaa</b>
                <span className="font-medium">{` `}</span>
                <span className="font-light">is the meme-coin</span>
              </h1>
              <h1 className="m-0 self-stretch relative text-101xl leading-[120px] font-bold font-inherit text-[transparent] [-webkit-text-stroke:2px_#14f195] mq800:text-29xl mq800:leading-[72px] mq450:text-11xl mq450:leading-[48px]">
                killer
              </h1>
            </div>
            <div className="w-[510px] relative tracking-[0.02em] leading-[32px] font-light font-archivo text-white inline-block max-w-full z-[1] mq450:text-base mq450:leading-[26px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              convallis urna diam, in gravida neque tempus eget. Phasellus
              rutrum, mi ut aliquet rhoncus, nisl tortor feugiat mauris, ac
              tempus risus erat vitae metus. 
            </div>
            <div className="w-[165px] rounded-25xl bg-green hidden flex-row items-center justify-center p-1 box-border z-[3] text-base">
              <div className="h-9 flex-1 flex flex-row items-center justify-center py-2.5 px-4 box-border">
                <div className="self-stretch flex-1 relative leading-[16px]">
                  How to buy
                </div>
              </div>
              <div className="h-9 w-9 rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrow-outward-1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px] max-w-full z-[1] text-base mq450:flex-wrap">
              <div className="rounded-25xl bg-green flex flex-row items-center justify-center p-1">
                <div className="flex flex-row items-center justify-center py-2.5 px-4">
                  <div className="relative leading-[16px] inline-block min-w-[123px]">
                    0x532f...B142E4
                  </div>
                </div>
                <div className="h-9 w-9 rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 box-border gap-[10px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                    alt=""
                    src="/arrow-outward-1.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/content-copy.svg"
                  />
                </div>
              </div>
              <div className="rounded-25xl bg-dark-grey flex flex-row items-center justify-center py-0.5 px-[3px] text-green border-[1px] border-solid border-green">
                <div className="flex flex-row items-center justify-center py-2.5 px-4">
                  <div className="relative leading-[16px] inline-block min-w-[89px]">
                    How to buy
                  </div>
                </div>
                <div className="h-9 w-9 rounded-17xl bg-green flex flex-row items-start justify-start p-1.5 box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/arrow-outward-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[800px] w-[670px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative max-w-full text-401xl text-[transparent] font-rubik-mono-one border-[1px] border-solid border-gray-300">
            <img
              className="h-[4000px] w-[4000px] absolute !m-[0] top-[-1797px] left-[-1723px] object-cover z-[1]"
              alt=""
              src="/textura-3-1@2x.png"
            />
            <img
              className="h-[2000px] w-[2000px] relative object-cover hidden max-w-full z-[1]"
              alt=""
              src="/textura-11@2x.png"
            />
            <div className="w-[962px] absolute !m-[0] bottom-[-120px] left-[calc(50%_-_481px)] tracking-[-0.13em] leading-[420px] inline-block [-webkit-text-stroke:1px_#fff] opacity-[0.4] shrink-0 z-[2] mq800:text-149xl mq800:leading-[252px] mq450:text-86xl mq450:leading-[168px]">
              888
            </div>
            <div className="mt-[-100px] ml-[-177px] h-[1012px] w-[887px] relative shrink-0 [debug_commit:0448091] max-w-[133%]">
              <div className="absolute top-[-12px] left-[0px] bg-gray-100 w-[1024px] h-[1024px] z-[1]" />
              <img
                className="absolute top-[184.1px] left-[145.9px] w-[732.1px] h-[631px] object-contain z-[3]"
                alt=""
                src="/mask@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
