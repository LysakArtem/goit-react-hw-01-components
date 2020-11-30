import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatisticItem from './../StatisticItem/StatisticItem';
export default function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li className={s.item} key={stat.id}>
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
