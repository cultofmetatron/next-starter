import React from 'react';

const requireAuthenticated = (Component) => {
  class Wrapper extends React.Component {
    static async getInitialProps({req, res, query}) {
      console.log('biendenidos');
      let props = await super.getInitialProps({req})
      props.session = await NextAuth.init({force: true, req: req})
      let auth = props.auth;

      // If signed in already, instead of displaying message send to callback page
      // which should redirect them to whatever page it normally sends clients to

      if (!auth.isLoggedIn) {
        if (req) {
          res.redirect('/auth/callback');
        } else {
          Router.push('/auth/callback');
        }
      }
      return props;

    }
    render() {
      console.log('rendering authenticated')
      return (
        <div>
          <Component {...this.props} />
        </div>
      );
    }
  }
  return (props) => <Wrapper {...props} />;

}

export default requireAuthenticated