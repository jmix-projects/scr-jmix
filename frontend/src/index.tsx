import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { ComponentPreviews } from "./dev/previews";
import { useDevLogin } from "./dev/hooks";
import { DevSupport } from "@haulmont/react-ide-toolbox";
// import registerServiceWorker from './registerServiceWorker';
import { JmixAppProvider } from "@haulmont/jmix-react-core";
import { I18nProvider } from "@haulmont/jmix-react-ui";
import { initializeApp } from "@haulmont/jmix-rest";
import { JMIX_REST_URL, REST_CLIENT_ID, REST_CLIENT_SECRET } from "./config";
import "mobx-react-lite/batchingForReactDom";
import metadata from "./jmix/metadata.json";
import "antd/dist/antd.min.css";
import "@haulmont/jmix-react-ui/dist/index.min.css";
import "./index.css";
import { antdLocaleMapping, messagesMapping } from "./i18n/i18nMappings";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./graphql/graphql";

export const jmixREST = initializeApp({
  name: "",
  apiUrl: JMIX_REST_URL,
  restClientId: REST_CLIENT_ID,
  restClientSecret: REST_CLIENT_SECRET,
  storage: window.localStorage,
  defaultLocale: "en"
});

const client = createApolloClient();

ReactDOM.render(
  <JmixAppProvider
    jmixREST={jmixREST}
    config={{
      appName: "",
      clientId: REST_CLIENT_ID, // TODO Rename once we remove REST
      secret: REST_CLIENT_SECRET,
      locale: "en"
    }}
    metadata={metadata}
  >
    <ApolloProvider client={client}>
      <I18nProvider
        messagesMapping={messagesMapping}
        antdLocaleMapping={antdLocaleMapping}
      >
        <DevSupport
          ComponentPreviews={<ComponentPreviews />}
          useInitialHook={useDevLogin}
        >
          <App />
        </DevSupport>
      </I18nProvider>
    </ApolloProvider>
  </JmixAppProvider>,
  document.getElementById("root") as HTMLElement
);
// registerServiceWorker();
