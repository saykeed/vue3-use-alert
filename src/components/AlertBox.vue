
<template>
    <transition :name="`${position}-${animation}`">
        <div :class="`alertBox ${position}`" :style="{background: backgroundColor, color: textColor}" v-if="active">
            <p class="alertText">{{message}}</p>
            <span @click="closeAlertBox"><img src="../asset/close.svg" alt=""></span>
        </div>
    </transition>
    <!-- 
        :style="{background: color}"
     -->
</template>

<script>
import {useAlert} from '../index.js' 

export default {
    setup () {
        const { active, message, position, animation, closeAlert, backgroundColor, textColor } = useAlert()

        const closeAlertBox = () => {
            closeAlert()
        }

      return { active, message, closeAlertBox, position, animation, backgroundColor, textColor}  
    }
    
}
</script>

<style scoped>
   

    div.alertBox{
        position: fixed;
        width: 80%;
        max-width: 300px;
        min-height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem 1rem;
        border-radius: 5px;
        z-index: 999999999999;
    }

    p.alertText{
        font-size: 0.8rem;
    }

    div.topRight{
        top: 1rem;
        right: 1rem;
    }

    div.bottomRight{
        bottom: 1rem;
        right: 1rem;
    }

    div.topLeft{
        left: 1rem;
        top: 1rem;
    }

    div.bottomLeft{
        left: 1rem;
        bottom: 1rem;
    }

    div.topCenter{
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
    }

    div.bottomCenter{
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
    }

    span{
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        font-size: 0.8rem;
        cursor: pointer;
    }


    /* top right animation */
    .topRight-slideX-enter-from, .topRight-slideX-leave-to{
        opacity: 0;
        transform: translateX(200px);
    }

    .topRight-slideX-enter-active, .topRight-slideX-leave-active{
        transition: all 0.6s ease-in-out;
    }

    .topRight-slideY-enter-from, .topRight-slideY-leave-to{
        opacity: 0;
        transform: translateY(-100px);
    }

    .topRight-slideY-enter-active, .topRight-slideY-leave-active{
        transition: all 0.6s ease-in-out;
    }



    /* top left animation */
    .topLeft-slideX-enter-from, .topLeft-slideX-leave-to{
        opacity: 0;
        transform: translateX(-200px);
    }

    .topLeft-slideX-enter-active, .topLeft-slideX-leave-active{
        transition: all 0.6s ease-in-out;
    }

    .topLeft-slideY-enter-from, .topLeft-slideY-leave-to{
        opacity: 0;
        transform: translateY(-100px);
    }

    .topLeft-slideY-enter-active, .topLeft-slideY-leave-active{
        transition: all 0.6s ease-in-out;
    }

    /* bottom right animation */
    .bottomRight-slideX-enter-from, .bottomRight-slideX-leave-to{
        opacity: 0;
        transform: translateX(200px);
    }

    .bottomRight-slideX-enter-active, .bottomRight-slideX-leave-active{
        transition: all 0.6s ease-in-out;
    }

    .bottomRight-slideY-enter-from, .bottomRight-slideY-leave-to{
        opacity: 0;
        transform: translateY(100px);
    }

    .bottomRight-slideY-enter-active, .bottomRight-slideY-leave-active{
        transition: all 0.6s ease-in-out;
    }



    /* bottom left animation */
    .bottomLeft-slideX-enter-from, .bottomLeft-slideX-leave-to{
        opacity: 0;
        transform: translateX(-200px);
    }

    .bottomLeft-slideX-enter-active, .bottomLeft-slideX-leave-active{
        transition: all 0.6s ease-in-out;
    }

    .bottomLeft-slideY-enter-from, .bottomLeft-slideY-leave-to{
        opacity: 0;
        transform: translateY(100px);
    }

    .bottomLeft-slideY-enter-active, .bottomLeft-slideY-leave-active{
        transition: all 0.6s ease-in-out;
    }

    /* top center animation */
    .topCenter-slideX-enter-from, .topCenter-slideX-leave-to{
        opacity: 0;
    }

    .topCenter-slideX-enter-active, .topCenter-slideX-leave-active{
        transition: all 0.6s ease-in-out;
    }

    .topCenter-slideY-enter-from, .topCenter-slideY-leave-to{
        opacity: 0;
    }

    .topCenter-slideY-enter-active, .topCenter-slideY-leave-active{
        transition: all 0.6s ease-in-out;
    }

    /* bottom center animation */
    .bottomCenter-slideX-enter-from, .bottomCenter-slideX-leave-to{
        opacity: 0;
    }

    .bottomCenter-slideX-enter-active, .bottomCenter-slideX-leave-active{
        transition: all 0.6s ease-in-out;
    }

    .bottomCenter-slideY-enter-from, .bottomCenter-slideY-leave-to{
        opacity: 0;
    }

    .bottomCenter-slideY-enter-active, .bottomCenter-slideY-leave-active{
        transition: all 0.6s ease-in-out;
    }
</style>