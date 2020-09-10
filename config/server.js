//  First generate an environment variable STRAPI_PORT with the port you want strapi to run on.
//ex: set STRAPI_PORT=1337
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT',`${process.env.PORT}`),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '511cdebba0d21cc8b0cae58dc28fd69f'),
    },
  },
});
