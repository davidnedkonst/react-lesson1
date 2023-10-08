import PropTypes from 'prop-types';

function Component({
    title,
    label,
    percent
}) {
    return (
        <div>
            <h3>Title: {title}</h3>
            <div>Label: {label}</div>
            <div>Percentage: {percent}</div>
        </div>)
};

Component.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    percent: PropTypes.number
}

export default Component;