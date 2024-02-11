import './index.css'

const Tabs = props => {
  const {language, isActive, changeLanguage} = props
  const {id, buttonText} = language

  const onClickTabItem = () => {
    changeLanguage(id)
  }

  const buttonClass = isActive ? 'activeButton' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${buttonClass}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
