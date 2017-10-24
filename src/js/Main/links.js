const commonpath = "/";

const links = {
    "home": commonpath,
    "about": commonpath+"about",
    "community": commonpath+"community",
    "getstarted": commonpath+"get-started",
    "external": {
        "activeeon": {
            "home": "https://www.activeeon.com/",
            "contact": "https://www.activeeon.com/about/contact",
            "usecases": {
                "homeoffice": "https://www.activeeon.com/download/activeeon-case-study-homeoffice-uk-visas-application-en.pdf",
                "legalandgeneral": "https://www.activeeon.com/solvencyII",
                "komatsu": "https://www.activeeon.com/download/customer-case-study-iot-underground-surface-mining-operation-workflow-automation.pdf",
                "cnes": "https://www.activeeon.com/azure-poc-in-the-box"
            }
        },
        "try": {
            "home": "https://try.activeeon.com/",
            "studio": "https://try.activeeon.com/studio/",
            "scheduler": "https://try.activeeon.com/scheduler/"
        },
        "blog": {
            "home": "http://blog.activeeon.com/"
        },
        "hub": {
            "home": "http://hub.activeeon.com"
        },
        "repo": {
            "proactive": "http://github.com/ow2-proactive"
        },
        "doc": {
            "home": "https://www.activeeon.com/public_content/documentation/"
        }
    }
};

export default links;