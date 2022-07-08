import AlertBox from './components/AlertBox.vue'
import { ref } from 'vue'


export default{
    install: (app, options) => {
        app.component('vue3-alert-box', AlertBox)
    }
}

const alertSetting = {
    active: ref(false),
    message: ref(''),
    position: ref(''),
    animation: ref(''),
    backgroundColor: ref(''),
    textColor: ref(''),
    autoClose: ref(null)
}

export const useAlert = () => {
    let timeOut;
    const openAlert = (passedObj) => {
        passedObj.message ? alertSetting.message.value = passedObj.message : alertSetting.message.value = 'no message passed'
        passedObj.position ? alertSetting.position.value = passedObj.position : alertSetting.position.value = 'topRight'
        passedObj.animation ? alertSetting.animation.value = passedObj.animation : alertSetting.animation.value = 'slideY'
        passedObj.backgroundColor ? alertSetting.backgroundColor.value = passedObj.backgroundColor : alertSetting.backgroundColor.value = 'rgb(108, 165, 208)'
        passedObj.textColor ? alertSetting.textColor.value = passedObj.textColor : alertSetting.textColor.value = 'green'
        alertSetting.active.value = true

        // auto close
        if(passedObj.autoClose) {
            alertSetting.autoClose.value = passedObj.autoClose
            timeOut = setTimeout(() => {
                closeAlert()
            }, alertSetting.autoClose.value);
        }
        
    }

    const closeAlert = () => {
        alertSetting.active.value = false
        alertSetting.message.value = ''
        clearTimeout(timeOut)
    }

    return {...alertSetting, openAlert, closeAlert}
}