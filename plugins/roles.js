export default (context, inject) => {
  let userRoles  = !!context.$auth.$state.user ? JSON.parse(context.$auth.$state.user).roleNames : false;
  const role = {
    hasAny: (roles) =>{
      if (!userRoles) return false;
      if (typeof roles === "string") roles = roles.split(',');
      for (let roleName of userRoles){
        if (userRoles.indexOf(roleName) > -1) return true
      }
      return false
    },
    hasRole: (role) => !!userRoles ? (userRoles.indexOf(role) > -1) : false
  };
  inject('role', role);
  context.$role = role;
}
