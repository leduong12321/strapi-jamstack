module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '555632609428d1aaa8bb230698f2e0cd'),
  },
});
