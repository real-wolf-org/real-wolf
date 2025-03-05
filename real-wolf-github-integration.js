const client = new window.Statsig.StatsigClient(
    "client-w2FabLCa5ro5bAc72kVvRb7jvqdPhSCS175odiZD8WC",
    { userID: `user-${Math.floor(Math.random() * 1000000)}` }
);

const feature_gate = client.checkGate("github_integration");
const dynamic_config  = client.getDynamicConfig("github_integration_dynamic_config");