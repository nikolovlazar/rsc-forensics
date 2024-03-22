// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://b089d6afde828ba95773747803963964@o4506044970565632.ingest.us.sentry.io/4506933974663168",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  profilesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',

  integrations: [nodeProfilingIntegration()],
});
