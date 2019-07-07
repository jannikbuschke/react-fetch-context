import * as React from "react";

type Fetch = <T>(input: RequestInfo, init?: RequestInit, additionalInfo?: T) => Promise<Response>;

export const FetchContext = React.createContext<Fetch>(fetch);
