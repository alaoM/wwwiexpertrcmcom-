export interface ServiceInfo {
  slug: string;
  title: string;
  sectionTitle: string;
  iconName: string;
  shortDesc: string;
  features: string[];
  paragraphs: string[];
}

export const servicesData: ServiceInfo[] = [
  {
    slug: 'iclaim',
    title: 'iClaim',
    sectionTitle: 'Focus on Patients, Not Paperwork',
    iconName: 'FileSignature',
    shortDesc: '“No headache” billing service that still gives you full control of your patient records.',
    features: [
      'Faster Reimbursement',
      'Lower Claims Rejections',
      'Denial Management',
      '24/7 Web-Based Access',
      'HL7 / HIPAA Compliant',
      'Online Scheduler',
      'Real-Time Reporting',
      'Integrated Clearinghouse'
    ],
    paragraphs: [
      'If you’re excited by the prospect of a “no headache” billing service that still gives you full control of your patient records, we’ve got the solution you’re looking for.',
      'How our iClaim billing service benefits you:',
      'Get your claims paid fast – Because most of our claims are paid on first submission, you’ll get the funds more quickly. Also, our billing service has one of the lowest rejection rates in the industry, so you’ll have fewer unpaid claims.',
      'Real-time access – iClaim is web-based, so you have 24/7 access to your data from any computer with an internet connection. That means you can view the real-time status of every aspect of your billing cycle anytime, anywhere.',
      'Better reporting for better decisions – With iClaim, you can access hundreds of reports in real-time with the touch of a button. That gives you ultimate control, and the data you need to make the right decisions for your practice.',
      'So free yourself and your staff to focus on patient care, and let us and iClaim handle the rest.'
    ]
  },
  {
    slug: 'virtualcare',
    title: 'VirtualCare',
    sectionTitle: 'Using Technology to Connect People For Better Outcomes',
    iconName: 'Laptop',
    shortDesc: 'Visit with patients over the web securely. Reduce costs and expand your reach. Runs on any internet connected device.',
    features: [
      'TeleHealth',
      'Chronic Care Management',
      'Improve Patient Engagement with Remote Monitoring',
      'Expand Access to Care and Reach More Patients',
      'Improve Clinical Workflows',
      'Increase Practice Efficiency',
      'Increase Practice Revenue',
      'Improve Patient Satisfaction',
      'Reduce Overhead',
      'Reduce Patient No Shows'
    ],
    paragraphs: [
      'VirtualCare - A Virtual Solution That Seamlessly Connects Doctors, Patients & Loved Ones',
      'VirtualCare is a comprehensive virtual care solution capable of serving organizations and people anywhere. It links local professions to facilitate the flow of information, consultation and referrals, elevating the level of care in your entire community. Hospitals can refer non-critical patients to practitioners and out of the emergency room. Almost all facilities can expand reach to under-served populations very cost-efficiently. Our system also works well for Chronic Care Management and Remote Patient Monitoring. Can be used with EMRx or used as standalone service.'
    ]
  },
  {
    slug: 'emrx',
    title: 'EMRx',
    sectionTitle: 'Reduce Paper, Streamline Patient Encounters',
    iconName: 'Activity',
    shortDesc: 'Customized solution that will parallel the current workflow of your practice.',
    features: [
      'Streamlined Patient Encounters',
      'Easy-to-Use, Intuitive Interface',
      'Minimal Startup Time',
      '24/7 Web-Based Access',
      'ePrescribing',
      'Built-in Labs Interface',
      'HL7, HIPAA, CCHIT Certified'
    ],
    paragraphs: [
      'Choosing an electronic medical records solution can be a frustrating process. You’d like to take advantage of current incentives, but don’t want to get stuck with a system that ignores your unique office workflow.',
      'Well, with EMRx you can not only cash in on early adoption incentives, you can also implement a customized solution that will parallel the current workflow of your practice.',
      'Here’s why EMRx is the right system for you:',
      'Simple solutions for complex workflows – EMRx was designed by physicians and is fully customizable to match your workflow. From the appointment book to chart completion, e-prescription, and billing – there’s only a single screen to navigate.',
      'Fast patient encounters – Physicians who use EMRx spend an average of 2 minutes documenting each patient encounter. Spend less time documenting and more time caring for patients.',
      'Implementation & Training – The EMRx customized implementation plan allows for comprehensive training while reducing the disruption in office workflow. You get training on your time and on your terms.',
      'It’s the right time, and EMRx is the right system for you.'
    ]
  },
  {
    slug: 'choicepay',
    title: 'ChoicePay',
    sectionTitle: 'More Payment Options, More Revenue',
    iconName: 'CreditCard',
    shortDesc: 'Calculate, process, and collect your patient payments quickly and cost-effectively.',
    features: [
      'Reduce Patient Bad Debt',
      'Get Paid Faster',
      'Reduce Costs',
      'Increase Patient Satisfaction',
      'HL7 Compatible',
      'HIPAA & PCI Compliant',
      'Patient Payment Portal'
    ],
    paragraphs: [
      'According to the AMA and several other recent studies, it’s getting harder and harder to collect money from patients. Well, not anymore.',
      'Introducing ChoicePay.',
      'ChoicePay is a web-based software system designed to calculate, process, and collect your patient payments quickly and cost-effectively. Our system is HIPAA and PCI compliant and designed to simplify and accelerate the revenue cycle process.',
      'The ChoicePay system contains everything you need to calculate the patient’s out-of-pocket costs, secure payment information, schedule payments, and automate recurring payment plans. The software is comprised of several distinct modules that, when combined, offer one of the most intelligent and comprehensive patient payment solutions.'
    ]
  },
  {
    slug: 'autocard',
    title: 'AutoCard',
    sectionTitle: 'Stay Connected, Increase Appointments',
    iconName: 'Send',
    shortDesc: 'Send postcards, greeting cards, and even brochures to your current patient database.',
    features: [
      'Automated Campaigns',
      'Increase Patient Satisfaction',
      'No Hassles, Big Results',
      'Improve Patient Retention',
      'Increase Appointments',
      'Improve Cash Flow'
    ],
    paragraphs: [
      'When was the last time you sent a thank you card or checkup reminder to your patient base? We’ve found that most doctor’s offices simply don’t have time to manage ongoing marketing efforts to valuable patients.',
      'We’ve got the solution.',
      'Our AutoCard marketing service will allow you to send personalized postcards, greeting cards, and even brochures to your current patient database. We can even design campaigns that automatically send cards at regular intervals throughout the year.',
      'You can increase appointments and build upon the valuable relationships you have with your patients. We will set up campaigns based on your needs with a wide variety of options: flu shot reminders, back-to-school physicals, yearly checkup reminders, and even follow-up cards to ensure your patients continue to choose you for their healthcare needs.',
      'Set your marketing on autopilot, and let our AutoCard service increase patient satisfaction and improve your bottom line.'
    ]
  },
  {
    slug: 'quickcollect',
    title: 'QuickCollect',
    sectionTitle: 'Recover Lost Profit, Reduce Collection Costs',
    iconName: 'Coins',
    shortDesc: 'Gently engages with your indebted clients before a more direct approach is required.',
    features: [
      'Twice the Average Recovery Rate',
      'Fully Automated Process',
      'Low Cost, Not a Collection Agency',
      'You Maintain Control',
      'Detailed Reporting',
      'Increased Client Retention'
    ],
    paragraphs: [
      'Managing receivables is often the last item on the “to do” list, but neglect of timely follow-up on past due accounts is one of the biggest factors in out-of-control receivables. Instead of waiting until an account is non-collectible and turning it over to a costly traditional collection agency, why not try a proactive solution?',
      'With QuickCollect, we target a past due account before it gets deep into the “debt spiral”. We use a time-tested, automated recovery process that gently engages with your indebted clients before a more direct approach is required. That means you recover more accounts, more quickly, and with much less risk to your valuable client relationships.',
      'You maintain complete control of the process with detailed daily reporting through the web-based QuickCollect system, and direct contact once your client initiates repayment. Preserve your customers’ goodwill and reclaim the profit that is rightfully yours.'
    ]
  },
  {
    slug: 'auditguard',
    title: 'AuditGuard',
    sectionTitle: 'Guard Profits, Reduce Errors',
    iconName: 'FileSearch',
    shortDesc: 'Thorough review of your coding, billing, and reimbursement processes.',
    features: [
      'Protect Against Audits',
      'Identify Charting Errors',
      'Stop Under Billing',
      'Improve Reimbursement',
      'Detailed Reports',
      'Personal, Expert Review',
      'Implement Corrective Actions'
    ],
    paragraphs: [
      'Wouldn’t it be great if you had the ability to maintain the highest level of compliance while actually increasing your reimbursement rates?',
      'You can with our comprehensive AuditGuard service.',
      'With AuditGuard, our certified coders will provide a thorough review of your coding, billing, and reimbursement processes. We can identify areas of risk for your practice and even provide training for documentation techniques that could improve your workflow.',
      'Once the audit is performed, you’ll be given a detailed report and a consultation with an AuditGuard specialist. We go beyond a simple error report and actually recommend corrective actions. We can even provide the support and training to implement AuditGuard solutions.'
    ]
  },
  {
    slug: 'coderite',
    title: 'CodeRite',
    sectionTitle: 'Improve Your Reimbursement Rates Up To 30%',
    iconName: 'Calculator',
    shortDesc: 'Make sure you’re getting the maximum reimbursement for every patient encounter.',
    features: [
      'On Average, 15% Improvement',
      'Stop Under Billing',
      'Improve Documentation',
      'Real-Time Reports',
      'Works Within Your Workflow',
      'Certified Coding Specialists',
      '24 Hour Turnaround'
    ],
    paragraphs: [
      'It’s not always as simple as choosing the right codes for each patient encounter. More importantly, you need to use the best codes that can correctly balance revenue optimization with steadfast compliance.',
      'Stop the guesswork, and start increasing your revenue with our CodeRite review service.',
      'With CodeRite, a certified coding specialist will personally review each and every claim to make sure you’re getting the maximum reimbursement for every patient encounter.',
      'Most coding reviews are returned within 24 hours and results are available in the real-time reporting system, or delivered securely into your current practice management system.',
      'Seamless. Designed to fit your workflow. Personal attention that will fully optimize your reimbursement process.'
    ]
  },
  {
    slug: 'compliancyguard',
    title: 'CompliancyGuard',
    sectionTitle: 'Simple HIPAA Compliance, Guaranteed',
    iconName: 'ShieldCheck',
    shortDesc: 'Compliance tracking solution that satisfies HIPAA, HITECH Risk Assessment, and Omnibus Compliance.',
    features: [
      '100% Audit Guarantee',
      'HIPAA, HITECH, Omnibus, GLB, PCI',
      'Security & Privacy Risk Assessment',
      'Incident Management',
      'Policy & Procedure, Training',
      'Cloud-based System',
      'Training & Attestation Tracking',
      'HIPAA Hotline',
      'Dedicated Compliance Coach'
    ],
    paragraphs: [
      'CompliancyGuard is a simple and cost-effective compliance tracking solution that satisfies HIPAA, HITECH Risk Assessment, and Omnibus Compliance. It is a total solution approach to compliance utilizing a three-step methodology. This process reduces complexity and provides solutions for all of your compliancy needs using our proprietary, cloud-based system. Use our proprietary Achieve, Illustrate, and Maintain methodology and experienced Compliance Coach support to address the entire set of healthcare compliance regulations.',
      'Achieve – Work with a HIPAA coach to: Self-audit, identify deficiencies (Gaps), and correct the Gaps (Remediate) with built in Training, and Policy & Procedure templates.',
      'Illustrate – Be prepared to show Auditors, Covered Entities, and Business Associates your total compliance plan and due diligence with extensive reporting, tracking, and attestation tools.',
      'Maintain – Compliance does not end. It is an ongoing process to review vendors, employee training and incident tracking.'
    ]
  },
  {
    slug: 'dentimax',
    title: 'DentiMax',
    sectionTitle: 'Increase Practice Revenue, Improve Patient Satisfaction',
    iconName: 'Sparkles',
    shortDesc: 'Practice management software that helps you optimize efficiency, productivity and patient care.',
    features: [
      'Secure, online software',
      'Integrated patient texting',
      'E-prescribing capability',
      'Complete paperless functionality',
      'Electronic patient insurance verification',
      'Intuitive appointment book',
      'X-Rays/Imaging'
    ],
    paragraphs: [
      'DentiMax - A Dental Billing & EHR Solution',
      'Our dental practice management software flows just like your dental office. From checking in a new patient, to viewing x-rays while treatment planning, to scheduling additional patient visits, DentiMax mirrors your practice’s actual workflow. Plus, the software is packed full of easy-to-use but powerful features like electronic prescription writing and “live” patient insurance status updates.',
      'DentiMax helps you optimize efficiency, productivity and patient care. There’s simply no other practice management software like it!'
    ]
  },
  {
    slug: 'credentialsnow',
    title: 'CredentialsNOW',
    sectionTitle: 'Healthcare Credentialing Solved',
    iconName: 'Award',
    shortDesc: 'Healthcare organizations of every size realize that CredentialsNOW is the most economical and efficient way to solve their credentialing needs.',
    features: [
      'Credentialing – Primary Source Verification & Payer Enrollment',
      'Applications Management',
      'Ongoing Maintenance',
      'Cloud-Based Software for Real-Time Updates and Reports'
    ],
    paragraphs: [
      'Healthcare organizations of every size realize that CredentialsNOW is the most economical and efficient way to solve their credentialing needs. We have the training, expertise, and commitment it takes to keep a complex process moving forward at all times.',
      'Provider credentialing and payer enrollment are jobs for experts. It’s hard even for large healthcare organizations to maintain the level of vigilance and professionalism that CredentialsNOW delivers to all of our clients, all of the time. Find out how we can save you time, money, and anxiety by scheduling your appointment now.'
    ]
  },
  {
    slug: 'doctible',
    title: 'Doctible',
    sectionTitle: 'Engage With Patients Through Text Messaging & Campaigns',
    iconName: 'MessageSquare',
    shortDesc: 'Best-in-class patient communication platform offering texting, feedback, and engagement tools.',
    features: [
      'Reputation Management',
      'Secure Texting',
      'Appointment Reminders',
      'Marketing Campaigns',
      'Virtual Waiting Rooms',
      'Email Campaigns',
      'Website Messenger',
      'Much more!'
    ],
    paragraphs: [
      'Doctible’s platform offers best-in-class patient communication tools. Practices can enhance patient experience and satisfaction. Doctible is not limited to medical practices only. There are tools for dental, optometry, physical therapy, chiropractic, and more.'
    ]
  },
  {
    slug: 'cost-reduction-consulting',
    title: 'Cost Reduction Consulting',
    sectionTitle: 'Save MONEY Without Sacrificing Service',
    iconName: 'TrendingDown',
    shortDesc: 'Risk-free auditing that identifies cost savings in shipping, telecom, waste, utilities, and more.',
    features: [
      'Telecom',
      'Shipping',
      'Waste Management',
      'e-Signatures',
      'Utilities',
      'Fuel',
      'and More'
    ],
    paragraphs: [
      'Are you paying too much for your business services? Integrity RCM LLC can help!',
      'Save MONEY Without Sacrificing Service Our model is risk-free, and our only compensation is a share of the savings we identify for you – money you are already spending with vendors. We realize these savings by implementing cost-effective solutions and cost-recovery measures for you.',
      'Save TIME Without Increasing Your Payroll We augment the efforts of your existing staff without adding payroll costs. There are no other fees for our service except for a share of the recovered money.',
      'Benefit From Our KNOWLEDGE and Experience As the largest independent cost reduction consulting company in North America, we have extensive research and analysis capabilities. Our growing network of cost reduction professionals, and our specialized analysis tools and databases, means our expertise is second-to-none.',
      'Gain a Sense of SECURITY Through Our Objectivity We are completely objective in assessing your current and future business needs, with no ties to any service provider. You can be confident you are getting the best advice to help you make the right decisions.',
      'Numbers speak: We have produced over $360 million in documented savings for more than 25,000 clients across North America.'
    ]
  }
];
