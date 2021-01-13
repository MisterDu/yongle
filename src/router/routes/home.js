import homes from '@/views/Home/home'
import Recommend from '@/views/Home/recommend'
import Venue from '@/views/Home/venue'
var Home = {
    path: '/home',
    component: homes,
    children: [
        { path: 'recommend', component: Recommend },
        { path: 'venue', component: Venue }
    ]
}
export default Home