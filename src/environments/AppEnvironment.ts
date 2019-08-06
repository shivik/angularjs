
export const AppEnvironment = {
    "environment": {
        "server": {
            "url": "localhost:3000/",
            "scheme": "http",
            "certpath": ""
        },
        "endpoints": {
            "info": {
                "type": "GET",
                "route": "info",
                "authentication": false
            },
            "search": {
                "type": "POST",
                "route": "search",
                "authentication": true
            },
            "msearch": {
                "type": "POST",
                "route": "msearch",
                "authentication": true
            },
            "generateAuthenticationToken": {
                "type": "POST",
                "route": "generateAuthenticationToken",
                "authentication": true
            }
        }
    }
}