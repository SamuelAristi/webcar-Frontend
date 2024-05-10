import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Restaurant = React.lazy(() => import('./views/management/restaurants/restaurant/Restaurant'))
const RestaurantForm = React.lazy(() => import('./views/management/restaurants/restaurant/RestaurantForm'))
const RestaurantEditForm = React.lazy(() => import('./views/management/restaurants/restaurant/RestaurantEditForm'))
const Community = React.lazy(() => import('./views/management/communities/community/Community'))
const CommunityForm = React.lazy(() => import('./views/management/communities/community/CommunityForm'))
const CommunityEditForm = React.lazy(() => import('./views/management/communities/community/CommunityEditForm'))
const Customer = React.lazy(() => import('./views/management/customers/customer/Customer'))
const CustomerForm = React.lazy(() => import('./views/management/customers/customer/CustomerForm'))
const CustomerEditForm = React.lazy(() => import('./views/management/customers/customer/CustomerEditForm'))
const Product = React.lazy(() => import('./views/management/customers/product/Product'))
const ProductForm = React.lazy(() => import('./views/management/customers/product/ProductForm'))
const ProductEditForm = React.lazy(() => import('./views/management/customers/product/ProductEditForm'))
const Sale = React.lazy(() => import('./views/management/sales/sale/Sale'))
const SaleForm = React.lazy(() => import('./views/management/sales/sale/SaleForm'))
const SaleEditForm = React.lazy(() => import('./views/management/sales/sale/SaleEditForm'))
const Car = React.lazy(() => import('./views/management/users/car/Car'))
const CarForm = React.lazy(() => import('./views/management/users/car/CarForm'))
const CarEditForm = React.lazy(() => import('./views/management/users/car/CarEditForm'))
const Publication = React.lazy(() => import('./views/management/users/publication/Publication'))
const PublicationForm = React.lazy(() => import('./views/management/users/publication/PublicationForm'))
const PublicationEditForm = React.lazy(() => import('./views/management/users/publication/PublicationEditForm'))
const User = React.lazy(() => import('./views/management/users/user/User'))
const UserForm = React.lazy(() => import('./views/management/users/user/UserForm'))
const UserEditForm = React.lazy(() => import('./views/management/users/user/UserEditForm'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/restaurants', name: 'Restaurants', exact: true },
  { path: '/restaurants/restaurant', name: 'Restaurant', element: Restaurant },
  { path: '/restaurants/restaurantform', name: 'RestaurantForm', element: RestaurantForm },
  { path: '/restaurants/restauranteditform/:restaurantId', name: 'RestaurantEditForm', element: RestaurantEditForm },
  { path: '/communities', name: 'Communities', exact: true },
  { path: '/communities/community', name: 'Community', element: Community },
  { path: '/communities/communityform', name: 'CommunityForm', element: CommunityForm },
  { path: '/communities/communityeditform/:communityId', name: 'CommunityEditForm', element: CommunityEditForm },
  { path: '/customers', name: 'Customers', exact: true },
  { path: '/customers/customer', name: 'Customer', element: Customer },
  { path: '/customers/customerform', name: 'CustomerForm', element: CustomerForm },
  { path: '/customers/customereditform/:restaurantId', name: 'CustomerEditForm', element: CustomerEditForm },
  { path: '/customers/product', name: 'Product', element: Product },
  { path: '/customers/productform', name: 'ProductForm', element: ProductForm },
  { path: '/customers/producteditform/:restaurantId', name: 'ProductEditForm', element: ProductEditForm },
  { path: '/sales', name: 'Sales', exact: true },
  { path: '/sales/sale', name: 'Sale', element: Sale },
  { path: '/sales/saleform', name: 'SaleForm', element: SaleForm },
  { path: '/sales/saleeditform/:restaurantId', name: 'SaleEditForm', element: SaleEditForm },
  { path: '/users', name: 'Users', exact: true },
  { path: '/users/car', name: 'Car', element: Car },
  { path: '/users/carform', name: 'CarForm', element: CarForm },
  { path: '/users/careditform/:restaurantId', name: 'CarEditForm', element: CarEditForm },
  { path: '/users/publication', name: 'Publication', element: Publication },
  { path: '/users/publicationform', name: 'PublicationForm', element: PublicationForm },
  { path: '/users/publicationeditform/:restaurantId', name: 'PublicationEditForm', element: PublicationEditForm },
  { path: '/users/user', name: 'User', element: User },
  { path: '/users/userform', name: 'UserForm', element: UserForm },
  { path: '/users/usereditform/:restaurantId', name: 'UserEditForm', element: UserEditForm }
]

export default routes
