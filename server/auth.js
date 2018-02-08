const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const routes = (router) => {
// Configure Passport to use Auth0
  const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      return done(null, profile);
    }
  );

  passport.use(strategy);

  // This can be used to keep a smaller payload
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  // ...
  router.use(passport.initialize());
  router.use(passport.session());


  const authHandler = (req, res) => {
    res.redirect('/');
  }

  const env = process.env;
  // Perform the login
  router.get(
    '/login',
    passport.authenticate('auth0', {
      clientID: env.AUTH0_CLIENT_ID,
      domain: env.AUTH0_DOMAIN,
      redirectUri: env.AUTH0_CALLBACK_URL,
      audience: `https://${process.env.AUTH0_DOMAIN}/userinfo`,
      responseType: 'code',
      scope: 'openid'
    }),
    authHandler
  );

  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  router.get(
    '/auth/callback',
    passport.authenticate('auth0', {
      failureRedirect: '/'
    }),
    function(req, res) {
      res.redirect(req.session.returnTo || '/dashboard');
    }
  );

}

module.exports = routes;