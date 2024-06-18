import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "", ethereum1, binance }) => {
  return (
    <div
      className={`w-[670px] flex flex-row items-start justify-center gap-[20px] shrink-0 [debug_commit:0448091] max-w-full mt-[-74px] text-left text-41xl text-[transparent] font-space-grotesk mq800:flex-wrap ${className}`}
    >
      <div className="flex-1 rounded-21xl bg-green box-border flex flex-col items-start justify-start py-[38px] pr-5 pl-10 min-w-[272px] max-w-full border-[1px] border-solid border-gray-100">
        <b className="relative leading-[60px] [-webkit-text-stroke:1px_#222] whitespace-nowrap mq800:text-29xl mq800:leading-[48px] mq450:text-17xl mq450:leading-[36px]">
          $0,023
        </b>
        <h1 className="m-0 relative text-21xl leading-[48px] font-medium font-inherit text-dark-grey mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          {ethereum1}
        </h1>
      </div>
      <div className="flex-1 rounded-21xl bg-purple box-border flex flex-col items-start justify-start py-[38px] pr-5 pl-10 min-w-[272px] max-w-full border-[1px] border-solid border-gray-300">
        <b className="relative leading-[60px] [-webkit-text-stroke:1px_#fff] whitespace-nowrap mq800:text-29xl mq800:leading-[48px] mq450:text-17xl mq450:leading-[36px]">
          $0,023
        </b>
        <h1 className="m-0 relative text-21xl leading-[48px] font-medium font-inherit text-white mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          {binance}
        </h1>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  ethereum1: PropTypes.string,
  binance: PropTypes.string,
};

export default FrameComponent1;
