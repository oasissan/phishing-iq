// src/data/scenarios.js
export const scenarios = [
    {
        id: 1,
        prompt:
            `You receive an email from "IT-Helpdesk@university-support.com" stating
      your mailbox is over quota and you must log in within 24 h or lose access.
      The link text reads "Click here to keep your account".`,
        options: [
            {
                text: "Click the link and sign in immediately.",
                isCorrect: false,
                explanation: "Domain is not the official university domain; urgency is a red flag."
            },
            {
                text: "Ignore the email and report it as phishing.",
                isCorrect: true,
                explanation: "Mismatched sender domain + urgent threat = classic phish."
            }
        ],
        category: "email"
    },

    {
        id: 2,
        prompt:
            `You get a Teams message from your "Dean" asking you to buy gift cards
      for a last-minute conference and send the codes.`,
        options: [
            {
                text: "Buy the cards; the Dean is busy and needs help.",
                isCorrect: false,
                explanation: "Unusual payment request; confirm out-of-band."
            },
            {
                text: "Call the Dean's office to verify before acting.",
                isCorrect: true,
                explanation: "Always verify high-risk requests through another channel."
            }
        ],
        category: "social"
    },

    {
        id: 3,
        prompt:
            `You receive an email from "Financial-Aid@universityadmin.net" with the subject
      "URGENT: Student Loan Forgiveness Program - Action Required in 24 hours".`,
        options: [
            {
                text: "Click the link and provide your student ID and banking details.",
                isCorrect: false,
                explanation: "This email uses urgency tactics and has a suspicious domain that's not your official university domain."
            },
            {
                text: "Contact your university's financial aid office directly through their official website.",
                isCorrect: true,
                explanation: "Always verify financial requests through official channels, especially when urgent deadlines are mentioned."
            }
        ],
        category: "email"
    },

    {
        id: 4,
        prompt:
            `A text message from "Library Services" states: "Your library account is suspended due to overdue materials. Click here to pay fines: bit.ly/lib-acc-verify"`,
        options: [
            {
                text: "Click the shortened URL to check your fines.",
                isCorrect: false,
                explanation: "Shortened URLs (bit.ly, tinyurl, etc.) hide the actual destination and are commonly used in phishing attempts."
            },
            {
                text: "Log in to your library account directly through the official university website.",
                isCorrect: true,
                explanation: "Never click on shortened URLs in unexpected messages; instead access services through bookmarked or manually typed official URLs."
            }
        ],
        category: "sms"
    },

    {
        id: 5,
        prompt:
            `You receive an email attachment named "Scholarship_Award_Document.doc" from "scholarship-committee@gmail.com" with a note to enable macros to view the contents.`,
        options: [
            {
                text: "Open the document and enable macros as instructed.",
                isCorrect: false,
                explanation: "Enabling macros in documents from untrusted sources can execute malicious code on your computer."
            },
            {
                text: "Delete the email and contact the official scholarship office to verify any awards.",
                isCorrect: true,
                explanation: "Official communications about scholarships typically come from institutional emails, not personal accounts like Gmail, and rarely require enabling macros."
            }
        ],
        category: "email"
    },

    {
        id: 6,
        prompt:
            `A LinkedIn message from someone claiming to be an alumnus offers you an exclusive internship opportunity requiring an immediate application fee of $50.`,
        options: [
            {
                text: "Pay the application fee to secure this exclusive opportunity.",
                isCorrect: false,
                explanation: "Legitimate internship opportunities never require upfront payment; this is a scam."
            },
            {
                text: "Decline the offer and report the account to LinkedIn.",
                isCorrect: true,
                explanation: "Application fees for internships are a major red flag; legitimate opportunities are posted through official career services."
            }
        ],
        category: "social"
    },

    {
        id: 7,
        prompt:
            `You get an email from "technical-support@university.onmicrosoft.edu" saying your account has unusual activity and you need to verify your identity by replying with your birth date and student ID.`,
        options: [
            {
                text: "Reply to the email with the requested information to secure your account.",
                isCorrect: false,
                explanation: "Legitimate IT departments will never ask for personal information via email."
            },
            {
                text: "Forward the email to your university's IT security team and delete it.",
                isCorrect: true,
                explanation: "The unusual domain ('onmicrosoft.edu' instead of your university's domain) and request for personal information are clear phishing indicators."
            }
        ],
        category: "email"
    },

    {
        id: 8,
        prompt:
            `While using campus WiFi, a pop-up appears saying "WiFi session expired. Re-authenticate to continue" with fields for your university username and password.`,
        options: [
            {
                text: "Enter your credentials to maintain internet access.",
                isCorrect: false,
                explanation: "Popup authentication requests on already-established WiFi connections are typically fake and designed to steal credentials."
            },
            {
                text: "Close the popup and connect to WiFi through your device's network settings if disconnected.",
                isCorrect: true,
                explanation: "Authentication for WiFi should only happen through your device's secure network settings or the university's official login page."
            }
        ],
        category: "popup"
    },

    {
        id: 9,
        prompt:
            `You receive an email with subject "Your Grade Appeal Approved" from "records@university-registar.com" with a link to "Download Updated Transcript.pdf".`,
        options: [
            {
                text: "Click the link to download your updated transcript.",
                isCorrect: false,
                explanation: "The domain has a misspelling ('registar' instead of 'registrar') - a common phishing tactic."
            },
            {
                text: "Access your transcript directly through the university's official student portal.",
                isCorrect: true,
                explanation: "Misspelled domains and unexpected grade changes should always be verified through official systems."
            }
        ],
        category: "email"
    },

    {
        id: 10,
        prompt:
            `A friend's Instagram account messages you: "Hey! I'm doing a research project and need more responses. Mind voting for me here? [link]"`,
        options: [
            {
                text: "Click the link to help your friend with their research.",
                isCorrect: false,
                explanation: "This is a common Instagram hack pattern where compromised accounts message friends with phishing links."
            },
            {
                text: "Contact your friend through another method to verify they sent this message.",
                isCorrect: true,
                explanation: "Unexpected requests, even from friends' accounts, should be verified through another communication channel."
            }
        ],
        category: "social"
    },

    {
        id: 11,
        prompt:
            `You receive an email from "campus-security@uni-alert.org" warning of suspicious activity in your dorm building and asking you to confirm your room number and key code.`,
        options: [
            {
                text: "Provide the information to help campus security with their investigation.",
                isCorrect: false,
                explanation: "Campus security would never ask for your key code via email, and the domain is not your university's official domain."
            },
            {
                text: "Contact campus security directly through the official emergency number.",
                isCorrect: true,
                explanation: "Security alerts should come from official domains, and sensitive information should never be shared via email."
            }
        ],
        category: "email"
    },

    {
        id: 12,
        prompt:
            `You receive a Microsoft Teams message from "IT Support" asking you to install a "required security update" from an attached file.`,
        options: [
            {
                text: "Download and install the update to ensure your account remains secure.",
                isCorrect: false,
                explanation: "Software updates should come through official channels, not as attachments in chat messages."
            },
            {
                text: "Ignore the message and report it to your IT department.",
                isCorrect: true,
                explanation: "Legitimate updates are deployed through managed IT systems, not through files sent in Teams messages."
            }
        ],
        category: "social"
    }
];
