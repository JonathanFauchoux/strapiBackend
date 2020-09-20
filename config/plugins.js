module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendmail',
    settings: {
      defaultFrom: 'jonathan.fauchoux@gmail.com',
      defaultReplyTo: 'jonathan.fauchoux@gmail.com',
    },
  },
  // ...
});