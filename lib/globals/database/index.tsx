import { ServerApiVersion } from "mongodb";


export default {
    DB_NAME:"chat",
    DB_CLIENT_OPTIONS:{
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
        maxPoolSize:15
    }
}