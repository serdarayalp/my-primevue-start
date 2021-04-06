import {createApp} from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from 'primevue/toastservice';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Dialog from 'primevue/dialog';
import RadioButton from 'primevue/radiobutton';
import Panel from 'primevue/panel';
import Toolbar from 'primevue/toolbar';
import MegaMenu from 'primevue/megamenu';
import Menubar from 'primevue/menubar';


import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"

/*
primevue/resources/themes/bootstrap4-light-blue/theme.css
primevue/resources/themes/bootstrap4-light-purple/theme.css
primevue/resources/themes/bootstrap4-dark-blue/theme.css
primevue/resources/themes/bootstrap4-dark-purple/theme.css
primevue/resources/themes/md-light-indigo/theme.css
primevue/resources/themes/md-light-deeppurple/theme.css
primevue/resources/themes/md-dark-indigo/theme.css
primevue/resources/themes/md-dark-deeppurple/theme.css
primevue/resources/themes/mdc-light-indigo/theme.css
primevue/resources/themes/mdc-light-deeppurple/theme.css
primevue/resources/themes/mdc-dark-indigo/theme.css
primevue/resources/themes/mdc-dark-deeppurple/theme.css
primevue/resources/themes/fluent-light/theme.css
primevue/resources/themes/saga-blue/theme.css
primevue/resources/themes/saga-green/theme.css
primevue/resources/themes/saga-orange/theme.css
primevue/resources/themes/saga-purple/theme.css
primevue/resources/themes/vela-blue/theme.css
primevue/resources/themes/vela-green/theme.css
primevue/resources/themes/vela-orange/theme.css
primevue/resources/themes/vela-purple/theme.css
primevue/resources/themes/arya-blue/theme.css
primevue/resources/themes/arya-green/theme.css
primevue/resources/themes/arya-orange/theme.css
primevue/resources/themes/arya-purple/theme.css
primevue/resources/themes/nova/theme.css
primevue/resources/themes/nova-alt/theme.css
primevue/resources/themes/nova-accent/theme.css
primevue/resources/themes/nova-vue/theme.css
primevue/resources/themes/luna-amber/theme.css
primevue/resources/themes/luna-blue/theme.css
primevue/resources/themes/luna-green/theme.css
primevue/resources/themes/luna-pink/theme.css
primevue/resources/themes/rhea/theme.css
*/

//theme
//import 'primevue/resources/themes/nova/theme.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
//core css
import 'primevue/resources/primevue.min.css'
//icons
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue);
app.use(ToastService);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Dialog', Dialog);
app.component('RadioButton', RadioButton);
app.component('Panel', Panel);
app.component('Toolbar', Toolbar);
app.component('MegaMenu', MegaMenu);
app.component('Menubar', Menubar);

app.mount('#app')
