// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://1be400de6c46a903c34a7d5da78a99cc@o4510080816381952.ingest.us.sentry.io/4510080821559296",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [Sentry.mongoIntegration()],
});