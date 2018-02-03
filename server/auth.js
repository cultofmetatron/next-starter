const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const routes = (server) = {
// Configure Passport to use Auth0
  const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_SECRET,
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
  server.use(passport.initialize());
  server.use(passport.session());

}