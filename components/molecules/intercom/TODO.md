# Todo

- [ ] Intercom should update based on the logged in user details
- [ ] Move this to a service folder

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

