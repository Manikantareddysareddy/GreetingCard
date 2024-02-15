import './index.css'

const TabItem = props => {
  const {eachTab, ActiveTab, changeTabItem} = props
  const {imageUrl, buttonText, imageAltText} = eachTab

  const ActiveBtnClassName = buttonText === ActiveTab ? 'ActiveBtn' : ''

  const changeTab = () => {
    changeTabItem(eachTab)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`btnEl ${ActiveBtnClassName}`}
        onClick={changeTab}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
