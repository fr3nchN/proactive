const commonpath = "/proactive/";
// const commonpath = "/";

const links = {
    "home": commonpath,
    "about": commonpath+"about",
    "community": commonpath+"community",
    "getstarted": commonpath+"get-started",
    "releasenotes": commonpath+"release-notes",
    "programming": commonpath+"programming",
    "external": {
        "activeeon": {
            "home": "https://www.activeeon.com/",
            "contact": "https://www.activeeon.com/about/contact",
            "customers": "https://www.activeeon.com/about/customers",
            "events": "https://www.activeeon.com/about/news-events",
            "usecases": {
                "homeoffice": "https://www.activeeon.com/download/activeeon-case-study-homeoffice-uk-visas-application-en.pdf",
                "legalandgeneral": "https://www.activeeon.com/solvencyII",
                "komatsu": "https://www.activeeon.com/download/customer-case-study-iot-underground-surface-mining-operation-workflow-automation.pdf",
                "cnes": "https://www.activeeon.com/azure-poc-in-the-box"
            },
            "product": {
                "workflowsscheduling": "https://www.activeeon.com/workflows-scheduling",
                "bigdata": "https://www.activeeon.com/big-data-automation",
                "cloudautomation": "https://www.activeeon.com/cloud-automation",
                "programming": "https://www.activeeon.com/about/resources#datasheets"
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
            "proactive": "http://github.com/ow2-proactive",
            "bugtracker": "https://github.com/ow2-proactive/scheduling/issues"
        },
        "doc": {
            "home": "https://www.activeeon.com/public_content/documentation/"
        },
        "ow2" :{
            "proactive": "https://projects.ow2.org/bin/view/proactive/"
        }
    }
};

export default links;