import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimals={2} decimal="." prefix="Rs "></CountUp>
    </div>
  );
};

export default AnimatedCounter;
