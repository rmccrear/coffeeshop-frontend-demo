import PropTypes from 'prop-types';


// daisyui loader component
export default function Loading({isLoading}) {
  return (
    <div className={isLoading ? 'block' : 'hidden'}>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};