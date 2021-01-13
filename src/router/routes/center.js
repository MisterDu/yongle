import Center from '@/views/Center/Index.vue'
import Login from '@/views/Center/Login.vue'
import Order from '@/views/Center/Order.vue'
import Address from '@/views/Center/Address.vue'
import AddressEdit from '@/views/Center/AddressEdit.vue'
var center = [
    { path: '/center',component: Center,},
    { path: '/login', component: Login },
    { path: '/order', component: Order },
    { path: '/address', component: Address },
    { path: '/addressedit', component: AddressEdit}
]
export default center