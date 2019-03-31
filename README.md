# Usage

```
import * as React from "react"; //typescript
import { FetchContext } from "@jbuschke/react-fetch-context";

function SomeComponent(){
    const fetch = React.useContext(FetchContext)

    return  (<button onClick={() => fetch("my-api").then(response => console.log(response)) }>
                load some data
            </button>);
}

function customizedFetch(path, init){
    // customize init (or even path)
    // for example get cookie or authorization value
    // and set init.headers.Authorization
    // ...
    const customizedInit = { ...init };
    return fetch(path, customizedInit);
}

function MyApp(){
    return (<FetchContext.Provider value={customizedFetch}>
                <SomeComponent />
            </FetchContext.Provider>);
}

```

# Installation

`npm install @jbuschke/react-fetch-context`

# Should I use the library?

This "library" exposes `fetch` as a React Context. The implementation is stupidly simple:

```
export const FetchContext = React.createContext(fetch);
```

If you just develop a single application you should actualy not bring in this library as a dependency. Just implement it yourself or use some other technique to fetch data in your app.

If you are developing several modules, that need to use fetch, this library might be helpful to you. The modules purpose is probably to provide meaningful payloads, but they probably should not care about some headers (for example Authorization), and they would not have a single purpose.

Reacts Context Api allows us to invert the dependency.
