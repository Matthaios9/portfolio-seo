'use client'
import Modal from "../app/components/Modal"
import { primaryColors, backgroundColors } from "./data"
import PrimaryColor from "./PrimaryColor"
import BackgroundColor from './BackgroundColor';
import themeStyles from './theme.module.css'

const Theme = () => {
  return (
    <Modal className={themeStyles.theme__modal}>
        <h3>Customize Your Theme</h3>
        <small>Change the primary and background color to your preference.</small>
        <div className={themeStyles.theme__primary_wrapper}>
            <h5>Primary Color</h5>
            <div className={themeStyles.theme__primary_colors}>
                {
                    primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className}/>)
                }
            </div>
        </div>
        <div className={themeStyles.theme__background_wrapper}>
            <h5>Background Color</h5>
            <div className={themeStyles.theme__background_colors}>
                {
                    backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                }
            </div>
        </div>
    </Modal>
  )
}

export default Theme