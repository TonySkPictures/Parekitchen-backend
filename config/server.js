module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    security: {
      hsts: {
        enabled: true,
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
      },
      xframe: {
        enabled: true,
        value: 'DENY',
      },
      xss: {
        enabled: true,
      },
      csp: {
        enabled: true,
        policy: ["default-src 'self'", "script-src 'self' 'unsafe-eval'", "style-src 'self' 'unsafe-inline'"],
      },
    },
  },
});
