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
    },
    {
        id: 13,
        prompt: `You receive an email from “Payroll Services via DocuSign”
      <payroll-doc@docusignmail.com> saying:
      “Your 2nd-quarter pay adjustment is ready. Review and sign the
      attached Payroll Summary.pdf”.  
      The blue “REVIEW DOCUMENT” button links to docusign-securepayroll.com.`,
        options: [
            {
                text:
                    "Click REVIEW DOCUMENT, sign in with your credentials, and complete the envelope.",
                isCorrect: false,
                explanation:
                    "The URL is **not** the official *docusign.net* domain; DocuSign-themed payroll phish are common. Verify with HR first.",
            },
            {
                text: "Report the email as phishing and call HR to confirm.",
                isCorrect: true,
                explanation:
                    "Always confirm DocuSign envelopes about payroll with HR and ensure links end in *docusign.net*.",
            },
        ],
        category: "email",
    },

    {
        id: 14,
        prompt: `An email from “Zoom <no-reply@zoomcommunications.com>” says:
      “Your scheduled class meeting has been **canceled**. Sign in to reschedule.”  
      The hyperlink text shows zoom.us but actually points to
      *zoom-signin.authuser.ru*.`,
        options: [
            {
                text: "Click the link to sign in and reschedule the class.",
                isCorrect: false,
                explanation:
                    "Hover reveals a Russian-hosted domain. Fake Zoom cancellations are a popular lure—open Zoom directly instead.",
            },
            {
                text: "Open the Zoom desktop app to check the meeting status instead.",
                isCorrect: true,
                explanation:
                    "Access Zoom through the official app or zoom.us—not via unsolicited email links.",
            },
        ],
        category: "email",
    },

    {
        id: 15,
        prompt: `Your phone beeps repeatedly with Microsoft Authenticator push requests:  
      “Approve sign-in?  Location: Nigeria • App: University Portal”.  
      You are not signing in, but the prompts keep coming every few seconds.`,
        options: [
            {
                text: "Tap **APPROVE** to stop the notifications.",
                isCorrect: false,
                explanation:
                    "Attackers are using MFA “push-fatigue” to trick you—approving grants them access.",
            },
            {
                text: "Tap **DENY**, then immediately change your password and notify IT.",
                isCorrect: true,
                explanation:
                    "Denying unexpected pushes and alerting IT thwarts MFA-fatigue attacks.",
            },
        ],
        category: "mfa",
    },

    {
        id: 16,
        prompt: `You get an email from “Campus Portal”
      <support@login.university.edu.security-update.com> telling you to confirm
      your credentials due to a “new zero-trust policy”.  
      The link points to
      https://**login.university.edu.security-update.com**/auth.`,
        options: [
            {
                text: "Follow the link and log in to comply with policy.",
                isCorrect: false,
                explanation:
                    "Everything before the first **/** is the domain—the real domain here is *security-update.com*, not *university.edu* (subdomain spoof).",
            },
            {
                text: "Delete the email and navigate to the portal via your usual bookmark.",
                isCorrect: true,
                explanation:
                    "Sub-domain tricks are sophisticated phish; always check the actual registered domain.",
            },
        ],
        category: "email",
    },

    {
        id: 17,
        prompt: `A text message from a number saved as “Dean (Temp)” says:  
      “Stuck in a board meeting—need 6 × $100 Amazon eGift cards for student
      awards. Email images of codes ASAP. –Dr. Smith”.`,
        options: [
            {
                text: "Purchase the cards and email the codes to help the dean.",
                isCorrect: false,
                explanation:
                    "Gift-card scams impersonating executives use urgency and secrecy—classic fraud pattern.",
            },
            {
                text: "Call the dean’s office and verify before spending any money.",
                isCorrect: true,
                explanation:
                    "Always verify unexpected gift-card requests via an official number.",
            },
        ],
        category: "sms",
    },

    {
        id: 18,
        prompt: `You receive an email from "IT-Support@youruniversity.edu" with the subject:
      "Scheduled Maintenance: Email Services Will Be Offline Tonight 11 PM - 3 AM EST".
      The email explains routine server maintenance and includes a link to the IT status page
      at https://status.youruniversity.edu for updates.`,
        options: [
            {
                text: "Click the link to check the status page for more details.",
                isCorrect: true,
                explanation: "This appears to be a legitimate IT maintenance notification - official domain, realistic timing, and appropriate status page link."
            },
            {
                text: "Ignore the email as it's likely a phishing attempt.",
                isCorrect: false,
                explanation: "This is actually a legitimate maintenance notification. The official university domain and realistic maintenance window are good indicators."
            }
        ],
        category: "email"
    },

    {
        id: 19,
        prompt: `You get a text from "UNIVERSITY ALERT" (official campus alert system):
      "Emergency: Shelter in place due to police activity near campus. Stay indoors until further notice.
      More info: youruniversity.edu/emergency-alerts"`,
        options: [
            {
                text: "Follow the instructions and shelter in place immediately.",
                isCorrect: true,
                explanation: "This is a legitimate emergency alert. Official emergency notifications should be taken seriously and followed immediately."
            },
            {
                text: "Ignore it - it's probably a fake emergency alert scam.",
                isCorrect: false,
                explanation: "This appears to be a real emergency alert from your university's official system. Emergency alerts should never be ignored."
            }
        ],
        category: "sms"
    }, {
        id: 20,
        prompt: `You receive an email from "Financial Aid Office <finaid@youruniversity.edu>":
      "Your FAFSA verification documents are missing. Please submit by Friday to avoid
      delays in your aid disbursement. Upload at: youruniversity.edu/financial-aid/submit"`,
        options: [
            {
                text: "Go to the official financial aid portal to check what documents are needed.",
                isCorrect: true,
                explanation: "This appears legitimate - official domain, realistic request, but always verify through the official portal."
            },
            {
                text: "Delete the email as it's a financial aid phishing scam.",
                isCorrect: false,
                explanation: "This looks like a legitimate request from your university's financial aid office. The official domain and realistic content suggest it's real."
            }
        ],
        category: "email"
    },

    {
        id: 21,
        prompt: `You get an email from "Library Services <library@youruniversity.edu>":
      "Reminder: Your book 'Advanced Calculus' is due tomorrow. Renew online at
      youruniversity.edu/library or return to avoid fines."`,
        options: [
            {
                text: "Check your library account directly to verify and renew if needed.",
                isCorrect: true,
                explanation: "This appears to be a legitimate library reminder from the official domain. Always verify through your account."
            },
            {
                text: "Ignore it - library reminder emails are often phishing attempts.",
                isCorrect: false,
                explanation: "This seems to be a genuine library reminder. The official domain and specific book title suggest legitimacy."
            }
        ],
        category: "email"
    },

    {
        id: 22,
        prompt: `You receive an email from "IT-Helpdesk@university-portal.com" stating:
      "Your account will be suspended in 24 hours due to suspicious activity.
      Verify your identity immediately: Click here to secure your account now!"`,
        options: [
            {
                text: "Click the link immediately to prevent account suspension.",
                isCorrect: false,
                explanation: "This is phishing! The domain 'university-portal.com' is not your official university domain, and the urgent threat is a red flag."
            },
            {
                text: "Report as phishing - the domain and urgency tactics are suspicious.",
                isCorrect: true,
                explanation: "Correct! The fake domain and high-pressure urgency are classic phishing indicators."
            }
        ],
        category: "email"
    },

    {
        id: 23,
        prompt: `Your professor emails from their official university account:
      "Class canceled today due to illness. Please review Chapter 12 for next week.
      Assignment due date extended to Monday. Email me with any questions."`,
        options: [
            {
                text: "Note the cancellation and plan to review the assigned chapter.",
                isCorrect: true,
                explanation: "This is a legitimate email from your professor's official account with realistic class-related content."
            },
            {
                text: "Verify with classmates - this could be a compromised account.",
                isCorrect: false,
                explanation: "While verification is generally good practice, this appears to be a normal class communication from the official account."
            }
        ],
        category: "email"
    },

    {
        id: 24,
        prompt: `You get a Teams message from someone with your dean's name and photo:
      "Urgent: Need you to purchase 5 Apple gift cards ($200 each) for faculty appreciation gifts.
      I'm in meetings all day. Please send photos of the cards to this chat. Will reimburse ASAP!"`,
        options: [
            {
                text: "Buy the gift cards to help with faculty appreciation.",
                isCorrect: false,
                explanation: "This is a scam! Even with the right name/photo, gift card requests are red flags. Accounts can be compromised or spoofed."
            },
            {
                text: "Call the dean's office directly to verify this unusual request.",
                isCorrect: true,
                explanation: "Always verify unusual financial requests through official channels, even if the message appears to be from someone you know."
            }
        ],
        category: "social"
    },

    {
        id: 25,
        prompt: `You receive an email from "Student Records <registrar@youruniversity.edu>":
      "Your graduation application has been approved! Your diploma will be mailed to
      your address on file. Ceremony details will be sent separately."`,
        options: [
            {
                text: "Celebrate and check your student portal to confirm graduation status.",
                isCorrect: true,
                explanation: "This appears to be a legitimate graduation confirmation from the official registrar's office."
            },
            {
                text: "Delete it - graduation scams are common around commencement time.",
                isCorrect: false,
                explanation: "This looks like a genuine communication from your university's registrar about graduation approval."
            }
        ],
        category: "email"
    },

    {
        id: 26,
        prompt: `You get a calendar invitation from "IT Security Team <itsecurity@youruniversity.edu>":
      "Mandatory Cybersecurity Training - All Students Must Attend
      Tuesday 2:00 PM - Room 101 Computer Center
      Failure to attend will result in account suspension."`,
        options: [
            {
                text: "Accept the invitation and plan to attend the training.",
                isCorrect: false,
                explanation: "Be cautious! While the domain looks official, the threat of 'account suspension' for missing training is unusual. Verify with IT first."
            },
            {
                text: "Contact IT directly to verify this mandatory training requirement.",
                isCorrect: true,
                explanation: "The threatening language about account suspension is suspicious. Always verify unexpected mandatory meetings with the department."
            }
        ],
        category: "email"
    },

    {
        id: 27,
        prompt: `Your bank sends you a text message:
      "ALERT: Your account ending in 1234 has been locked due to suspicious activity.
      Please call 1-800-YOURBANK immediately to restore access. Reply STOP to opt out."`,
        options: [
            {
                text: "Call the number provided to resolve the account issue quickly.",
                isCorrect: false,
                explanation: "Don't call the number in the text! Use the official number on your bank card or website. Scammers often use fake numbers."
            },
            {
                text: "Call your bank using the number on your debit card to verify.",
                isCorrect: true,
                explanation: "Always use official contact methods from your bank statements or cards, not numbers provided in unexpected messages."
            }
        ],
        category: "sms"
    },

    {
        id: 28,
        prompt: `You receive a LinkedIn message from "Sarah Johnson - Campus Recruiter at TechCorp":
      "Hi! I saw your profile and think you'd be perfect for our summer internship program.
      We're hiring 50 students this year. Are you interested in learning more?"`,
        options: [
            {
                text: "Reply expressing interest and ask for more details about the internship.",
                isCorrect: true,
                explanation: "This appears to be a legitimate recruiting message. No red flags like upfront payments or suspicious requests."
            },
            {
                text: "Ignore it - all LinkedIn recruiting messages are scams.",
                isCorrect: false,
                explanation: "This seems like a normal recruiting outreach. Not all LinkedIn messages are scams - many are legitimate opportunities."
            }
        ],
        category: "social"
    },

    {
        id: 29,
        prompt: `You get an email from "Microsoft Security <security-noreply@microsoft.com>":
      "We detected a sign-in attempt from an unrecognized device in Russia.
      If this wasn't you, secure your account immediately: aka.ms/SecurityCheckup"`,
        options: [
            {
                text: "Click the link to secure your account right away.",
                isCorrect: false,
                explanation: "Don't click! While this looks like Microsoft, go directly to account.microsoft.com to check security. The 'aka.ms' link could be fake."
            },
            {
                text: "Go directly to account.microsoft.com to check your security settings.",
                isCorrect: true,
                explanation: "Always access Microsoft account security through the official website, not through links in emails, even if they look legitimate."
            }
        ],
        category: "email"
    },

    {
        id: 30,
        prompt: `Your university's official app sends a push notification:
      "New grade posted for MATH 301. Tap to view your updated transcript
      and current GPA in the student portal."`,
        options: [
            {
                text: "Tap the notification to check your new grade.",
                isCorrect: true,
                explanation: "This appears to be a legitimate notification from your university's official mobile app about grade updates."
            },
            {
                text: "Don't tap - grade notifications are often phishing attempts.",
                isCorrect: false,
                explanation: "This seems to be a genuine notification from your university's official app. Push notifications from official apps are typically safe."
            }
        ],
        category: "popup"
    }
];
