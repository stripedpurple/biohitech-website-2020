export default async function ({$auth, redirect}) {
  let user = JSON.parse($auth.$state.user);
  if (!!user && !!user.roleNames && (user.roleNames.indexOf('website-admin') > -1 || user.roleNames.indexOf('bht-it') > -1)) {
  }else{
    redirect('/login')
  }
}
