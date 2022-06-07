import cn from "./Overview.module.scss";

const Overview = ({ data }) => {
  return (
    <div className={cn.overview}>
      {data.positions.map((position, index) => (
        <div key={index} className={cn.positions}>
          <strong>{position.label}:</strong>
          <span className={cn.right}>{position.value}</span>
        </div>
      ))}
      <div className={cn.divider} />
      <div className={cn.result}>
        <strong>{data.result.label}:</strong>
        <span className={cn.right}>{data.result.value}</span>
      </div>
    </div>
  );
};

export default Overview;
