
 var routes = {
  '/' : home,
  '/myPost':myPost,
   '/login' : login,
   '/logout' : logout,
   '/reset': reset,
   '/dashboard' : dashboard,
   '/update' : update,
   };
 var rootDiv = document.getElementById('root');
 rootDiv.innerHTML = routes[window.location.pathname]



 
function onNavigate(pathname){
   window.history.pushState(
     {},
     pathname,
     window.location.origin + pathname
   )
   rootDiv.innerHTML = routes[pathname]

   
   
 }
 


 
  

