import { useMemo } from "react";
import PropTypes from "prop-types";

const LiquidityContainer = ({
  className = "",
  liquidityTitleContainer,
  liquidity,
  remove,
  propBorderBottom,
  propMinWidth,
  propBackgroundColor,
}) => {
  const liquidityContainerStyle = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
    };
  }, [propBorderBottom]);

  const liquidityStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-start py-2 px-0 box-border gap-[20px] max-w-full text-left text-13xl text-purple font-space-grotesk ${className}`}
      style={liquidityContainerStyle}
    >
      <b className="h-[22px] w-[81px] relative leading-[40px] inline-block shrink-0 mq800:text-7xl mq800:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
        {liquidityTitleContainer}
      </b>
      <h1
        className="m-0 h-[22px] flex-1 relative text-inherit leading-[40px] font-bold font-inherit inline-block min-w-[107px] max-w-full mq800:text-7xl mq800:leading-[32px] mq450:text-lgi mq450:leading-[24px]"
        style={liquidityStyle}
      >
        {liquidity}
      </h1>
      <div className="h-11 w-11 rounded-25xl box-border flex flex-row items-center justify-center py-1 px-[3px] border-[1px] border-solid border-purple">
        <div
          className="h-9 w-9 rounded-17xl bg-purple flex flex-row items-start justify-start p-1.5 box-border gap-[10px]"
          style={frameDiv1Style}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/arrow-outward.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={remove}
          />
        </div>
      </div>
    </div>
  );
};

LiquidityContainer.propTypes = {
  className: PropTypes.string,
  liquidityTitleContainer: PropTypes.string,
  liquidity: PropTypes.string,
  remove: PropTypes.string,

  /** Style props */
  propBorderBottom: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default LiquidityContainer;
