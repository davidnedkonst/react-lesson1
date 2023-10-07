import PropTypes from 'prop-types';

function Component({
    title,
    label,
    percent
}) {
    return (
        <div>
            <h2>{title}</h2>
            <div>{label}</div>
            <div>{percent}</div>
        </div>)
};

Component.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    percent: PropTypes.number
}

export default Component;