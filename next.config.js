const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          IDP_DOMAIN: '*insert values',
          USER_POOL_ID: '*insert values',
          USER_POOL_CLIENT_ID: '*insert values',
          REDIRECT_SIGN_IN: '*insert values',
          REDIRECT_SIGN_OUT: '*insert values',
          AUTH_COOKIE_DOMAIN: '*insert values',
        },
      };
    default:
      return {
        // environment varibales for production
        env: {
          IDP_DOMAIN: '*insert values',
          USER_POOL_ID: '*insert values',
          USER_POOL_CLIENT_ID: '*insert values',
          REDIRECT_SIGN_IN: '*insert values',
          REDIRECT_SIGN_OUT: '*insert values',
          AUTH_COOKIE_DOMAIN: '*insert values',
        },
      };
  }
};