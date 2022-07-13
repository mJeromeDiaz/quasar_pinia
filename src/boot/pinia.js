import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia'

const pinia = createPinia()
console.log('Pinia was created', pinia)

export default boot(({app}) => {
    app.use(pinia)
});

export { pinia }
