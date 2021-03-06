# vue3-use-alert


## Demo


- https://vue3-use-alert-demo.netlify.app/

## Setup


```bash
npm i vue3-use-alert
```

Setup in your `main.js`:

```javascript
import Alert from 'vue3-use-alert'
/*Import the style aswell */
import 'vue3-use-alert/dist/style.css'

/*
then pass Alert to the use method
*/

createApp(App).use(Alert).mount('#app')
```

Add the global component to your `App.vue`:

```vue
<vue3-alert-box/>
<!-- Place the component right above the closing template tag in app.vue(recommended) -->
```

Trigger vue3-alert from any of your `.vue` files:

```javascript
// import useAlert
import {useAlert} from 'vue3-use-alert'

// destructure the openAlert from the useAlert()
const { openAlert } = useAlert()

// call the function and pass the parameters
openAlert({
    message: "string", 
    position: 'string', //optional
    animation: 'string', // optional
    backgroundColor: 'string', //optional
    textColor: 'string', // optional
    autoClose: number || null, // optional
});
```
