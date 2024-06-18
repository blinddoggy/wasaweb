import { useMemo } from "react";
import PropTypes from "prop-types";

const PhaseContainer = ({
  className = "",
  iMG01621,
  phase1,
  phaseSpacer,
  propTop,
  propLeft,
  propWidth,
}) => {
  const iMG01621IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const phaseSpacerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`h-[440px] rounded-21xl bg-black1 box-border overflow-hidden flex flex-col items-center justify-start relative gap-[40px] max-w-full text-left text-base text-white font-space-grotesk border-[1px] border-solid border-gray-300 ${className}`}
    >
      <img
        className="w-[500px] h-[500px] absolute !m-[0] top-[calc(50%_-_250px)] left-[calc(50%_-_249.5px)] object-cover"
        alt=""
        src={iMG01621}
        style={iMG01621IconStyle}
      />
      <div className="w-[245px] flex flex-col items-start justify-center pt-0 px-0 pb-0 box-border relative gap-[20px] max-w-[76%] z-[1]">
        <h1 className="m-0 relative text-21xl leading-[48px] font-medium font-inherit text-green mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          {phase1}
        </h1>
        <div className="self-stretch relative tracking-[0.02em] leading-[26px] font-light font-archivo">
          Lorem ipsum dolor sit amet, consectetur non lacinia ligula adipiscing
          tincidunt volutpat mattis.
        </div>
        <div className="self-stretch flex flex-col items-start justify-start font-archivo">
          <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/keyboard-arrow-right.svg"
            />
            <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
              Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/keyboard-arrow-right.svg"
            />
            <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
              Maecenas mollis dui mi.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/keyboard-arrow-right.svg"
            />
            <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
              Etiam eget consectetur elit.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/keyboard-arrow-right.svg"
            />
            <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
              Maecenas malesuada diam nisi, eu aliquet enim accumsan quis.
            </div>
          </div>
        </div>
        <b
          className="w-[133px] absolute !m-[0] top-[-60px] right-[0px] text-101xl leading-[120px] inline-block text-[transparent] [-webkit-text-stroke:1px_#14f195] opacity-[0.6] z-[1] mq800:text-29xl mq800:leading-[72px] mq450:text-11xl mq450:leading-[48px]"
          style={phaseSpacerStyle}
        >
          {phaseSpacer}
        </b>
      </div>
    </div>
  );
};

PhaseContainer.propTypes = {
  className: PropTypes.string,
  iMG01621: PropTypes.string,
  phase1: PropTypes.string,
  phaseSpacer: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
};

export default PhaseContainer;
