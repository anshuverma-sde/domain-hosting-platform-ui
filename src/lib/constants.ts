export const SITE_CONFIG = {
  name: "DomainHost Pro",
  description: "Register domains and get reliable web hosting services",
  url: "https://domainhostpro.com",
  ogImage: "https://domainhostpro.com/og.jpg",
  links: {
    twitter: "https://twitter.com/domainhostpro",
    github: "https://github.com/domainhostpro",
  },
}

export const DOMAIN_EXTENSIONS = [
  { extension: ".com", price: 12.99, popular: true },
  { extension: ".net", price: 14.99, popular: false },
  { extension: ".org", price: 12.99, popular: false },
  { extension: ".io", price: 39.99, popular: true },
  { extension: ".co", price: 24.99, popular: false },
  { extension: ".app", price: 15.99, popular: false },
  { extension: ".dev", price: 15.99, popular: false },
]

export const HOSTING_FEATURES = {
  shared: ["SSD Storage", "Free SSL Certificate", "24/7 Support", "99.9% Uptime", "Email Accounts", "Website Builder"],
  vps: ["Full Root Access", "SSD Storage", "DDoS Protection", "24/7 Support", "99.9% Uptime", "Dedicated Resources"],
  dedicated: [
    "Full Server Control",
    "Enterprise SSD",
    "Advanced DDoS Protection",
    "24/7 Priority Support",
    "99.99% Uptime",
    "Dedicated Hardware",
  ],
}

export const SUPPORT_CHANNELS = [
  {
    name: "Live Chat",
    availability: "24/7",
    responseTime: "< 2 minutes",
    description: "Get instant help from our support team",
  },
  {
    name: "Phone Support",
    availability: "24/7",
    responseTime: "< 5 minutes",
    description: "Speak directly with our technical experts",
  },
  {
    name: "Email Support",
    availability: "24/7",
    responseTime: "< 2 hours",
    description: "Send detailed questions and get comprehensive answers",
  },
]
