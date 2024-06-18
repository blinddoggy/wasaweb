import PhaseContainer from "./phase-container";
import PropTypes from "prop-types";

const RoadmapContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-[133px] box-border max-w-full text-left text-xl text-gray-200 font-space-grotesk mq800:pb-[86px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
          <div className="w-[341px] flex flex-col items-start justify-start max-w-full">
            <b className="relative leading-[24px] inline-block min-w-[86px] mq450:text-base mq450:leading-[19px]">
              roadmap
            </b>
            <h1 className="m-0 self-stretch relative text-61xl leading-[80px] font-light font-inherit text-green mq800:text-21xl mq800:leading-[48px] mq450:text-5xl mq450:leading-[32px]">
              roadmap
            </h1>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(4,_minmax(244px,_1fr))] text-base text-white mq800:grid-cols-[minmax(244px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(244px,_422px))]">
          <PhaseContainer
            iMG01621="/img-0162-1@2x.png"
            phase1="Phase 1"
            phaseSpacer="01"
          />
          <PhaseContainer
            iMG01621="/img-0162-2@2x.png"
            phase1="Phase 2"
            phaseSpacer="02"
            propTop="-30px"
            propLeft="-87px"
            propWidth="unset"
          />
          <PhaseContainer
            iMG01621="/img-0162-3@2x.png"
            phase1="Phase 3"
            phaseSpacer="03"
            propTop="-30px"
            propLeft="-87px"
            propWidth="unset"
          />
          <PhaseContainer
            iMG01621="/img-0162-4@2x.png"
            phase1="Phase 4"
            phaseSpacer="04"
            propTop="-30px"
            propLeft="-87px"
            propWidth="unset"
          />
        </div>
      </div>
    </section>
  );
};

RoadmapContainer.propTypes = {
  className: PropTypes.string,
};

export default RoadmapContainer;
