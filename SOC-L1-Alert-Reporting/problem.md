### Alert Funnel
1. What is the process of passing suspicious alerts to an L2 analyst for review?\
   **Alert Escalation**
2. What is the process of formally describing alert details and findings?\
   **Alert Reporting**

### Reporting Guide
1. According to the [SOC dashboard (opens in new tab)](https://static-labs.tryhackme.cloud/apps/socl1-alertreporting/), which user email leaked the sensitive document?\
   **m.boslan@tryhackme.thm**
2. Looking at the new alerts, who is the "sender" of the suspicious, likely phishing email?\
   **support@microsoft.com**
3. Open the phishing alert, read its details, and try to understand the activity.
Using the Five Ws template, what flag did you receive after writing a good report?
Note: Do not change the status yet, fill in the Analyst Comment and click Save.\
   **THM{nice_attempt_faking_microsoft_support}**

### Escalation Guide
1. Who is your current L2 in the SOC dashboard (opens in new tab) that you can assign (escalate) the alerts to?\
   **E.Fleming**
2. What flag did you receive after correctly escalating the alert from the previous task to L2?\
Note: If you correctly escalated the alert earlier, just edit the alert and click "Save" again.\
   **THM{good_job_escalating_your_first_alert}**
3. Now, investigate the second new alert in the queue and provide a detailed alert comment.
Then, decide if you need to escalate this alert and move on according to the process.
After you finish your triage, you should receive a flag, which is your answer!
   **THM{looks_like_webshell_via_old_exchange}**
