import PropTypes from 'prop-types';
import Component from './Component'

function ComponentList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <Component
                        title={item.id}
                        label={item.label}
                        percent={item.percentage} />
                </li>))
            }
        </ul>
    )
};

ComponentList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string
    }))
}

export default ComponentList;