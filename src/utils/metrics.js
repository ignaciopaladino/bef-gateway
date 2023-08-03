const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const { saveMetricsConsume } = require("../services/metrics");

const parsedDataMetrics = (metric) => {
  const datetime = moment().format("YYYY-MM-DDTHH:mm:ssZ");
  const { consumer, requestId, query } = metric;
  return {
    entity: "sauron_monitor",
    id: `bef-${uuidv4()}-${datetime}`,
    metrics: {
      application: {
        name: "bef-gateway",
        section: "/api/query",
        client_id: "1777789065476539",
      },
      user: {
        kraken_roles: [
          "SHPBO_BUSINESS",
          "SHPBO_CX_ACCESS",
          "SHPBO_INVOICES",
          "SHPBO_LIMITED_ACCESS",
          "SHPBO_SHIPPING",
        ],
        ldap: "csanso",
      },
      event: {
        name: "bef",
        created_date: datetime,
        response: 'Ok',
        request: consumer || "unknown",
      },
      event_detail: {
        payload: query,
      },
      application_context: [
        {
          key: "request-id",
          value: requestId || uuidv4(),
        },
      ],
    },
  };
};

const saveMetric = (req) => {
  const { body } = req;
  const { operationName, query } = body;
  if(!operationName) {
    try {
      const consumer = req.header("x-auth-app");
      const requestId = req.header("x-request-id");
      const metric = parsedDataMetrics({
        consumer,
        requestId,
        query,
      });
      saveMetricsConsume(metric).then((res) => {
        const { data } = res;
        if (!data) {
          const { status, statusText, data } = res?.response || {};
          console.log("*ERROR*", "Failed to save metric: [", status, " - ", statusText, " - ", data, "]");
        }
      });
    } catch (err) {
      console.log("*ERROR*", "Failed to save metric: [", err?.message, "]");
    }
  }
};

const validateApplication = (req) => {
  const consumer = req.header("x-auth-app");
  const requestId = req.header("x-request-id");
  if (!consumer || !requestId) {
    console.log(
      "*ERROR*",
      "No consumer and trace heades: [",
      JSON.stringify(req.headers),
      "]"
    );
    throw new Error('You must include headers "x-auth-app" and "x-request-id"');
  }
};

module.exports = {
  validateApplication,
  saveMetric,
};
