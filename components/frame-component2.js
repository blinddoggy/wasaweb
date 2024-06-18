import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  solana1,
  bitcoin,
  propMarginTop,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end max-w-full text-left text-41xl text-[transparent] font-space-grotesk ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[670px] flex flex-row items-start justify-start gap-[20px] shrink-0 [debug_commit:0448091] max-w-full mq800:flex-wrap">
        <div className="flex-1 rounded-21xl bg-purple box-border flex flex-col items-start justify-start py-[38px] pr-5 pl-10 min-w-[272px] max-w-full border-[1px] border-solid border-gray-300">
          <b className="relative leading-[60px] [-webkit-text-stroke:1px_#fff] whitespace-nowrap mq800:text-29xl mq800:leading-[48px] mq450:text-17xl mq450:leading-[36px]">
            $0,023
          </b>
          <h1 className="m-0 relative text-21xl leading-[48px] font-medium font-inherit text-white mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
            {solana1}
          </h1>
        </div>
        <div className="flex-1 rounded-21xl bg-green box-border flex flex-col items-start justify-start py-[38px] pr-5 pl-10 min-w-[272px] max-w-full border-[1px] border-solid border-gray-100">
          <b className="relative leading-[60px] [-webkit-text-stroke:1px_#222] whitespace-nowrap mq800:text-29xl mq800:leading-[48px] mq450:text-17xl mq450:leading-[36px]">
            $0,023
          </b>
          <h1 className="m-0 relative text-21xl leading-[48px] font-medium font-inherit text-dark-grey mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
            {bitcoin}
          </h1>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  solana1: PropTypes.string,
  bitcoin: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
};

export default FrameComponent2;
