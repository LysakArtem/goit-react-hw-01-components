import PropTypes from 'prop-types';
export default function StatisticItem({ label, percentage }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
