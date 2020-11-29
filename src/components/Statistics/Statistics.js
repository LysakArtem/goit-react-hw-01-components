import PropTypes from 'prop-types';
import StatisticItem from './../StatisticItem/StatisticItem';
export default function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map((stat) => (
          <li className="item" key={stat.id}>
            <StatisticItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
