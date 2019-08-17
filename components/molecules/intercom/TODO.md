# Todo

## General

- [ ] Intercom should update based on the logged in user details - seee extract below
- [ ] Move this to a service folder

## Story

- [ ] This does not function at the moment

//   componentWillReceiveProps(nextProps) {
//     const {
//       appID,
//       ...otherProps,
//     } = nextProps;

//     if (!canUseDOM) return;

//     window.intercomSettings = { ...otherProps, app_id: appID };

//     if (window.Intercom) {
//       if (this.loggedIn(this.props) && !this.loggedIn(nextProps)) {
//         // Shutdown and boot each time the user logs out to clear conversations
//         window.Intercom('shutdown');
//         window.Intercom('boot', otherProps);
//       } else {
//         window.Intercom('update', otherProps);
//       }
//     }
//   }

//   loggedIn(props) {
//     return props.email || props.user_id;
//   }

