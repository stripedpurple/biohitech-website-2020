export default async function ({$auth, redirect}) {
  let user = JSON.parse($auth.$state.user) || null;
  if (!!user && !!user.roleNames && (user.roleNames.indexOf('website-editor') > -1 || user.roleNames.indexOf('bht-employee') > -1)) {
  } else {
    redirect('/login')
  }
}
