import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   //optional for column grouping

import Toast from "primevue/toast";
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App)
app.use(PrimeVue);
app.use(ToastService);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);

app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);

app.mount('#app')
