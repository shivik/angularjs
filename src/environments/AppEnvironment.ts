
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
            },
            "revoketoken": {
                "type": "POST",
                "route": "revoketoken",
                "authentication": true
            },
            "updatemappings": {
                "type": "POST",
                "route": "updatemappings",
                "authentication": true
            },
            "fetchbyid": {
                "type": "POST",
                "route": "fetchbyid",
                "authentication": true
            },
            "autocomplete": {
                "type": "POST",
                "route": "autocomplete",
                "authentication": true
            },
            "recentsearches": {
                "type": "POST",
                "route": "recentsearches",
                "authentication": true
            },
            "topsearches": {
                "type": "POST",
                "route": "topsearches",
                "authentication": true
            }
        }
    }
}
