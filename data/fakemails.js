const mails = [
  {
    "id": 1,
    "from": {
      "name": "Sarah Johnson",
      "email": "sarah.johnson@example.com"
    },
    "subject": "Exciting News!",
    "body": "Hi there,\n\nWe have some exciting news to share with you! Our new product line is now available. Explore our website to discover the latest collection and avail exclusive launch offers.\n\nHappy shopping!\n\nBest regards,\nSarah"
  },
  {
    "id": 2,
    "from": {
      "name": "Jason Lee",
      "email": "jason.lee@example.com"
    },
    "subject": "Upcoming Event: Tech Expo 2023",
    "body": "Dear tech enthusiasts,\n\nWe're thrilled to announce Tech Expo 2023, the biggest tech event of the year. Join us at the convention center from 10th to 12th August to witness groundbreaking innovations and network with industry experts.\n\nRegister now to secure your spot!\n\nBest regards,\nJason"
  },
  {
    "id": 3,
    "from": {
      "name": "Emily Adams",
      "email": "emily.adams@example.com"
    },
    "subject": "Important Update: Account Security",
    "body": "Dear customer,\n\nYour account security is our top priority. We have implemented additional security measures to protect your data. Please log in to your account and update your password to ensure a secure experience."
  },
  {
    "id": 4,
    "from": {
      "name": "David Williams",
      "email": "david.williams@example.com"
    },
    "subject": "Exclusive Deal for You!",
    "body": "Hi,\n\nAs a valued customer, we are pleased to offer you an exclusive discount on your next purchase. Use code 'VALUED10' at checkout and get 10% off on your order.\n\nHurry, this offer expires on August 31st.\n\nBest regards,\nDavid"
  },
  {
    "id": 5,
    "from": {
      "name": "Lucy Brown",
      "email": "lucy.brown@example.com"
    },
    "subject": "Congratulations!",
    "body": "Dear [Recipient Name],\n\nCongratulations on your recent achievement! Your hard work and dedication have paid off. We are proud to have you as part of our team.\n\nKeep up the fantastic work!\n\nBest regards,\nLucy"
  },
  {
    "id": 6,
    "from": {
      "name": "Michael Anderson",
      "email": "michael.anderson@example.com"
    },
    "subject": "Welcome to Our Community",
    "body": "Dear [Username],\n\nWelcome to our community! We're excited to have you on board. Explore our platform and connect with like-minded individuals who share your interests.\n\nIf you have any questions, don't hesitate to reach out to us.\n\nBest regards,\nMichael"
  },
  {
    "id": 7,
    "from": {
      "name": "Emma White",
      "email": "emma.white@example.com"
    },
    "subject": "Feedback Request",
    "body": "Hi [Customer Name],\n\nWe value your opinion. Please take a moment to share your feedback on your recent purchase. Your insights help us improve our products and services.\n\nThank you for being a part of our journey!\n\nBest regards,\nEmma"
  },
  {
    "id": 8,
    "from": {
      "name": "Mark Davis",
      "email": "mark.davis@example.com"
    },
    "subject": "Reminder: Upcoming Webinar",
    "body": "Dear [Participant Name],\n\nThis is a friendly reminder about the upcoming webinar on 'Mastering React: Tips and Tricks.' The event is scheduled for [Date and Time].\n\nDon't forget to mark your calendar and join us for an insightful session.\n\nBest regards,\nMark"
  },
  {
    "id": 9,
    "from": {
      "name": "Olivia Martinez",
      "email": "olivia.martinez@example.com"
    },
    "subject": "Vacation Photos",
    "body": "Hi [Friend's Name],\n\nI hope you're doing well. I wanted to share some photos from my recent vacation. Check them out and let's catch up soon!\n\nBest regards,\nOlivia"
  },
  {
    "id": 10,
    "from": {
      "name": "Ryan Scott",
      "email": "ryan.scott@example.com"
    },
    "subject": "Special Discount Inside",
    "body": "Hey there,\n\nWe have a surprise for you! Open this email to reveal a special discount code just for you. Don't miss out on this fantastic deal.\n\nHappy shopping!\n\nBest regards,\nRyan"
  },
  {
    "id": 11,
    "from": {
      "name": "Sophia Baker",
      "email": "sophia.baker@example.com"
    },
    "subject": "Happy Birthday!",
    "body": "Dear [Friend's Name],\n\nWishing you a day filled with joy and laughter on your birthday. May all your dreams come true this year.\n\nBest regards,\nSophia"
  },
  {
    "id": 12,
    "from": {
      "name": "Adam Turner",
      "email": "adam.turner@example.com"
    },
    "subject": "Important Announcement",
    "body": "Dear all,\n\nWe have an important announcement to make. Please attend the meeting scheduled for [Date and Time] to learn more.\n\nBest regards,\nAdam"
  },
  {
    "id": 13,
    "from": {
      "name": "Lily Mitchell",
      "email": "lily.mitchell@example.com"
    },
    "subject": "Your Subscription Renewal",
    "body": "Dear [Customer Name],\n\nYour subscription is due for renewal on [Renewal Date]. To continue enjoying our premium services, please make the payment before the due date.\n\nBest regards,\nLily"
  },
  {
    "id": 14,
    "from": {
      "name": "Daniel Turner",
      "email": "daniel.turner@example.com"
    },
    "subject": "Upcoming Workshop: Photography Basics",
    "body": "Hi there,\n\nInterested in photography? Join our upcoming workshop on 'Photography Basics' to enhance your skills and learn from experts in the field.\n\nLimited seats available. Register now!\n\nBest regards,\nDaniel"
  },
 
{
  "id": 17,
  "from": {
    "name": "Ella Turner",
    "email": "ella.turner@example.com"
  },
  "subject": "Special Offer for Subscribers",
  "body": "Hi [Subscriber Name],\n\nAs a token of appreciation for being a loyal subscriber, we have a special offer just for you. Use code 'SUBSCRIBE15' and get 15% off on your next purchase.\n\nThank you for your continued support!\n\nBest regards,\nElla"
},
{
  "id": 18,
  "from": {
    "name": "James Mitchell",
    "email": "james.mitchell@example.com"
  },
  "subject": "Important: Account Security Alert",
  "body": "Dear [Customer Name],\n\nWe detected unusual activity on your account. To ensure the security of your data, we have temporarily disabled access. Please click the link below to verify your identity and reactivate your account.\n\n[Verification Link]\n\nIf you have not initiated this action, please contact our support team immediately.\n\nBest regards,\nJames"
},
{
  "id": 19,
  "from": {
    "name": "Eva Clark",
    "email": "eva.clark@example.com"
  },
  "subject": "Thank You for Your Donation",
  "body": "Dear [Donor Name],\n\nOn behalf of our organization, we want to express our heartfelt gratitude for your generous donation. Your support helps us make a positive impact on the lives of those in need.\n\nThank you for being a part of our mission.\n\nBest regards,\nEva"
},
{
  "id": 20,
  "from": {
    "name": "Lucas Turner",
    "email": "lucas.turner@example.com"
  },
  "subject": "Invitation to Team Building Event",
  "body": "Hi team,\n\nWe're excited to invite you to our upcoming team-building event at [Location] on [Date]. Get ready for a day filled with fun activities, team challenges, and team bonding.\n\nLet's make this event a memorable one!\n\nBest regards,\nLucas"
},
{
  "id": 21,
  "from": {
    "name": "Mia Martinez",
    "email": "mia.martinez@example.com"
  },
  "subject": "Your Free Trial Ends Soon",
  "body": "Dear [Customer Name],\n\nWe hope you've been enjoying your free trial. It's about to end on [End Date]. If you wish to continue using our service, please subscribe to one of our plans to avoid any interruption.\n\nThank you for trying us out!\n\nBest regards,\nMia"
},
{
  "id": 22,
  "from": {
    "name": "Noah Wilson",
    "email": "noah.wilson@example.com"
  },
  "subject": "Holiday Sale: Up to 50% Off",
  "body": "Hi there,\n\nThe holiday season is here, and so is our biggest sale of the year! Get up to 50% off on selected products. Treat yourself or find the perfect gift for your loved ones.\n\nHappy holidays!\n\nBest regards,\nNoah"
},
{
  "id": 23,
  "from": {
    "name": "Emma Turner",
    "email": "emma.turner@example.com"
  },
  "subject": "Monthly Newsletter",
  "body": "Dear subscriber,\n\nIt's that time of the month again! Check out our latest newsletter for exciting updates, new products, and exclusive offers.\n\nThank you for subscribing!\n\nBest regards,\nEmma"
},
{
  "id": 24,
  "from": {
    "name": "Alexander Scott",
    "email": "alexander.scott@example.com"
  },
  "subject": "Reminder: Parent-Teacher Meeting",
  "body": "Dear [Parent/Guardian Name],\n\nThis is a friendly reminder about the parent-teacher meeting scheduled for [Date and Time]. We look forward to discussing your child's progress.\n\nSee you soon!\n\nBest regards,\nAlexander"
},
{
  "id": 25,
  "from": {
    "name": "Olivia Turner",
    "email": "olivia.turner@example.com"
  },
  "subject": "Join Our Online Book Club",
  "body": "Hi book lover,\n\nWe invite you to join our online book club, where you can connect with fellow readers and engage in exciting book discussions.\n\nLet's embark on a literary journey together!\n\nBest regards,\nOlivia"
},
{
  "id": 26,
  "from": {
    "name": "Liam Davis",
    "email": "liam.davis@example.com"
  },
  "subject": "Important Update: New Office Address",
  "body": "Dear all,\n\nWe have some exciting news to share! Our company has moved to a new office located at [New Address]. Please update your records accordingly.\n\nBest regards,\nLiam"
},
{
  "id": 27,
  "from": {
    "name": "Aria Johnson",
    "email": "aria.johnson@example.com"
  },
  "subject": "Reminder: Annual Performance Review",
  "body": "Dear [Employee Name],\n\nThis is a reminder that your annual performance review is scheduled for [Date and Time]. Come prepared to discuss your accomplishments and set goals for the upcoming year.\n\nBest regards,\nAria"
},
{
  "id": 28,
  "from": {
    "name": "Leo Garcia",
    "email": "leo.garcia@example.com"
  },
  "subject": "Winter Collection Preview",
  "body": "Hi fashionista,\n\nGet ready for the winter season with our exclusive winter collection preview. Be the first to explore the latest trends and stay stylish all winter long.\n\nBest regards,\nLeo"
},
{
  "id": 29,
  "from": {
    "name": "Mila Brown",
    "email": "mila.brown@example.com"
  },
  "subject": "Congratulations on Your New Home",
  "body": "Dear [Friend's Name],\n\nCongratulations on your new home! Wishing you all the best as you settle in and create beautiful memories in your new space.\n\nCheers to new beginnings!\n\nBest regards,\nMila"
},
{
  "id": 31,
  "from": {
    "name": "Scarlett Adams",
    "email": "scarlett.adams@example.com"
  },
  "subject": "Important: Renew Your Membership",
  "body": "Dear [Member Name],\n\nYour membership is expiring soon. Don't miss out on exclusive benefits and offers. Renew your membership today to continue enjoying all our services.\n\nBest regards,\nScarlett"
},
{
  "id": 32,
  "from": {
    "name": "Henry Johnson",
    "email": "henry.johnson@example.com"
  },
  "subject": "Join Our Fitness Challenge",
  "body": "Hi there,\n\nReady to take your fitness journey to the next level? Join our 30-day fitness challenge and achieve your fitness goals with the support of our expert trainers.\n\nLet's get fit together!\n\nBest regards,\nHenry"
},
{
  "id": 33,
  "from": {
    "name": "Violet Wilson",
    "email": "violet.wilson@example.com"
  },
  "subject": "Invitation: Art Exhibition",
  "body": "Dear art lover,\n\nWe cordially invite you to our upcoming art exhibition featuring the works of talented local artists. Join us on [Date] to appreciate the beauty of art.\n\nBest regards,\nViolet"
},
{
  "id": 34,
  "from": {
    "name": "Lucas Turner",
    "email": "lucas.turner@example.com"
  },
  "subject": "Congratulations on Your Promotion",
  "body": "Dear [Recipient Name],\n\nCongratulations on your well-deserved promotion! Your hard work and dedication have paid off. Here's to your continued success.\n\nBest regards,\nLucas"
},
{
  "id": 35,
  "from": {
    "name": "Stella Mitchell",
    "email": "stella.mitchell@example.com"
  },
  "subject": "Don't Miss Our Live Webinar",
  "body": "Hi there,\n\nWe have an exciting live webinar coming up on [Topic]. Join us on [Date and Time] for an engaging session with industry experts.\n\nSecure your spot now!\n\nBest regards,\nStella"
},
{
  "id": 36,
  "from": {
    "name": "Jacob Green",
    "email": "jacob.green@example.com"
  },
  "subject": "Reminder: Bill Payment Due",
  "body": "Dear [Customer Name],\n\nThis is a reminder that your bill payment of [Amount] is due on [Due Date]. Please make the payment to avoid any late fees.\n\nBest regards,\nJacob"
},
{
  "id": 37,
  "from": {
    "name": "Eva Turner",
    "email": "eva.turner@example.com"
  },
  "subject": "Upcoming Concert: Save the Date",
  "body": "Hi music enthusiast,\n\nMark your calendar for an unforgettable night of music at our upcoming concert on [Date]. Get ready for a musical extravaganza!\n\nBest regards,\nEva"
},
{
  "id": 38,
  "from": {
    "name": "William Scott",
    "email": "william.scott@example.com"
  },
  "subject": "Happy Anniversary!",
  "body": "Dear [Couple's Names],\n\nWishing you both a very happy anniversary! May your love continue to grow stronger with each passing year.\n\nBest regards,\nWilliam"
},
{
  "id": 39,
  "from": {
    "name": "Grace Turner",
    "email": "grace.turner@example.com"
  },
  "subject": "Welcome to Our Online Store",
  "body": "Dear [Customer Name],\n\nWelcome to our online store! Discover a wide range of products and enjoy a seamless shopping experience.\n\nHappy shopping!\n\nBest regards,\nGrace"
},
{
  "id": 40,
  "from": {
    "name": "Lucas Martinez",
    "email": "lucas.martinez@example.com"
  },
  "subject": "Feedback Survey",
  "body": "Hi [Customer Name],\n\nWe value your opinion. Please take a moment to complete our feedback survey and help us improve our services.\n\nThank you for your valuable input!\n\nBest regards,\nLucas"
},
{
  "id": 41,
  "from": {
    "name": "Scarlett Adams",
    "email": "scarlett.adams@example.com"
  },
  "subject": "Holiday Greetings",
  "body": "Dear [Recipient Name],\n\nSending warm holiday greetings your way. May this festive season be filled with joy, love, and laughter.\n\nBest regards,\nScarlett"
},
{
  "id": 42,
  "from": {
    "name": "Ethan Turner",
    "email": "ethan.turner@example.com"
  },
  "subject": "Invitation to Charity Gala",
  "body": "Dear [Recipient Name],\n\nWe request the pleasure of your company at our charity gala on [Date]. Together, we can make a difference in the lives of those in need.\n\nBest regards,\nEthan"
},
{
  "id": 43,
  "from": {
    "name": "Ava Green",
    "email": "ava.green@example.com"
  },
  "subject": "Get Ready for Our Summer Sale",
  "body": "Hi there,\n\nSummer is here, and so is our much-awaited summer sale! Get ready for massive discounts on your favorite products.\n\nHappy shopping!\n\nBest regards,\nAva"
},
{
  "id": 44,
  "from": {
    "name": "Oliver Brown",
    "email": "oliver.brown@example.com"
  },
  "subject": "Important Update: New Terms of Service",
  "body": "Dear [Customer Name],\n\nWe have updated our terms of service to provide you with better service and protection. Please review the new terms and conditions.\n\nBest regards,\nOliver"
},
{
  "id": 45,
  "from": {
    "name": "Sophia Turner",
    "email": "sophia.turner@example.com"
  },
  "subject": "Welcome to Our Team",
  "body": "Dear [New Team Member],\n\nWe're excited to welcome you to our team! We believe you'll be a great addition and contribute to our collective success.\n\nBest regards,\nSophia"
},
{
  "id": 46,
  "from": {
    "name": "James Wilson",
    "email": "james.wilson@example.com"
  },
  "subject": "Last Chance: Limited Stock",
  "body": "Hi there,\n\nThis is your last chance to grab our best-selling item. We have limited stock remaining, so act fast!\n\nBest regards,\nJames"
}
];

 



  module.exports = mails;