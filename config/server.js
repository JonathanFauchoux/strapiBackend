module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('STRAPI_PORT',`${process.env.PORT}`),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '511cdebba0d21cc8b0cae58dc28fd69f'),
    },
  },
});
