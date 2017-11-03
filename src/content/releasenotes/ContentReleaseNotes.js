import links from "./../../js/Main/links"

const ContentReleaseNotes = [
    {
        "version": "7.30",
        "date": new Date("2017-10-01"),
        "communityitems": [
            "Centralize all workflows in a single place",
            "Nodes Recovery",
            "Reorganised The Studio Menu",
        ],
        "enterpriseitems": [
            "Secure catalog by user groups",
            "Job permissions per user groups",
            "Fully configure Proactive in WAS",
            "MAAS integration in the Connector-iaas",
            "Scheduler-aware-rm-policy",
            "Added new workflows for anomaly detection on log files, and updated Image Analysis workflows for object segmentation in images"
        ]
    },
    {
        "version": "7.29",
        "date": new Date("2017-08-11"),
        "communityitems": [
            "Display of project names in scheduling portal",
            "New security policy to give permission on job based on the user group",
            "Generic Information & Documentation in Studio",
            "Editable Job Description, and an better display when activated",
            "Bug fixes"
        ],
        "enterpriseitems": [
            "New Generic catalog with full workflows revision functionality",
            "Workflow-catalog: bucket creation",
            "Job planner",
            "Documentation url for machine learning workflows",
        ]
    },
    {
        "version": "7.27",
        "date": new Date("2017-05-16"),
        "communityitems": [
            "Perl script engine",
            "Models and quality checks for workflow variables at job submission",
            "Native scheduler node source infrastructure policy",
        ],
        "enterpriseitems": [
            "New user portal: Cloud Automation workflows",
            "Job planner new service",
            "Restart and fix an in-error task an unlimited number of times",
            "Extended Azure connector with Azure Stack integration",
            "DevOps: workflow synchronization (import/export) between schedulers environments (dev, test, prod)",
        ]
    },
    {
        "version": "7.25",
        "date": new Date("2017-03-15"),
        "communityitems": [
            "New LDAP query task, available in Studio predefined tasks",
            "Remote visualization task: see example in Studio template",
            "Resource management: new node locking and node unlocking features",
            "Declarative rule based model for workflow variables",
            "File Trigger: new tasks for file event monitoring and job triggering (new file, new directory, file change, etc.)"
        ],
        "enterpriseitems": [
            "Email validation and notification with LDAP connection users, groups, projects",
            "Workflow Studio catalog with many new features",
            "Agile, DevOps: Workflow sync between schedulers Dev, Test, Prod, etc. with import/export",
            "Advanced task termination control for Bash and Python",
        ]
    },
    {
        "version": "7.23",
        "date": new Date("2017-01-10"),
        "communityitems": [
            "New powerful GraphQL data-fetching API: get read access to scheduling information from your ProActive Scheduler in an easy and efficient manner",
            "Generic info interface upgraded with job variable and task variable definition features to improve user experience",
        ],
        "enterpriseitems": [
            "New chaining of workflows added in the Control menu: \"SubmitJobNoWait\": submit a Job from the current one, and proceed to the next task without waiting for its completion (asynchronous submission); and \"SubmitJobAndWait\": submit a Job from the current one, then wait for its completion before proceeding to the next task (synchronous submission)."
        ]
    }
];

export default ContentReleaseNotes;