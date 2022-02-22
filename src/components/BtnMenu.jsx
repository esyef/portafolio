import PropTypes from "prop-types"

const BtnMenu = ({ children, ariaType, onClick, ...props }) => {
  return (
    <a aria-expanded={ariaType} {...props} onClick={onClick}>
      {children}
    </a>
  )
}

export default BtnMenu

BtnMenu.propTypes = {
  children: PropTypes.element.isRequired,
}
