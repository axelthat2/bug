import { createApp } from "vue"
import App from "./App.vue"
import Component1 from "./Component1.vue"

const app = createApp(App)
app.component("Component1", Component1)
app.mount("#app")
