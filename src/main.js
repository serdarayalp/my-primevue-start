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

/*
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"
*/

//theme
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

app.mount('#app')
