// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  baseUrl:"http://ec2-3-137-179-23.us-east-2.compute.amazonaws.com:8087",
  signupUrl : "/home/signup",
  loginUrl : "/home/auth",
  addToCartUrl : "/user/addToCart",
  viewCartUrl : "/user/viewCart",
  updateCartUrl : "/user/updateCart",
  deleteCartUrl: "/user/delCart",
  addAddressUrl : "/user/addAddress",
  viewAddressUrl : "/user/getAddress",
  productsUrl : "/user/getProducts",
  addProductUrl : "/admin/addProduct",
  deleteProductUrl : "/admin/delProduct",
  updateProductUrl : "/admin/updateProducts",
  viewOrderUrl : "/admin/viewOrders",
  updateOrderUrl : "/admin/updateOrder",
  placeOrderUrl : "/user/placeOrder",
  logoutUrl : "/home/logout",
  changeCPUrl:"/home/changePassword",
  sproductsUrl : "/user/getSearchProducts"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error',  // Included with Angular CLI.
