import React from 'react';

const requireAuthenticated = (component) => {
  class Wrapper extends React.Component {
    static async getInitialProps({req, res, query}) {
      let props = await super.getInitialProps({req})
      //props.session = await NextAuth.init({force: true, req: req})
      let auth = props.auth;
      // If signed in already, instead of displaying message send to callback page
      // which should redirect them to whatever page it normally sends clients to
      if (!auth.isLoggedIn) {
        if (req) {
          res.redirect('/auth/callback')
        } else {
          Router.push('/auth/callback')
        }
      }
      return props;
    }
    render() {
      return (<component {...props} />);
    }
  }
  return Wrapper;

}