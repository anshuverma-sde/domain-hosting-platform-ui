"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Terms of Service</CardTitle>
              <p className="text-center text-muted-foreground">Last updated: December 10, 2024</p>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using DomainHost Pro services, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>

                <h2>2. Service Description</h2>
                <p>
                  DomainHost Pro provides domain registration, web hosting, and related services. We reserve the right
                  to modify or discontinue any service at any time without notice.
                </p>

                <h2>3. Account Registration</h2>
                <p>
                  You must provide accurate and complete information when creating an account. You are responsible for
                  maintaining the confidentiality of your account credentials and for all activities that occur under
                  your account.
                </p>

                <h2>4. Payment Terms</h2>
                <p>
                  Payment is due in advance for all services. We accept major credit cards and other payment methods as
                  specified on our website. Failure to pay may result in service suspension or termination.
                </p>

                <h2>5. Refund Policy</h2>
                <p>
                  We offer a 30-day money-back guarantee for hosting services. Domain registrations are non-refundable
                  except as required by law. Refund requests must be submitted within the specified timeframe.
                </p>

                <h2>6. Acceptable Use Policy</h2>
                <p>
                  You agree not to use our services for any unlawful purpose or in any way that could damage, disable,
                  overburden, or impair our servers or networks. Prohibited activities include but are not limited to:
                </p>
                <ul>
                  <li>Sending spam or unsolicited emails</li>
                  <li>Hosting illegal content</li>
                  <li>Attempting to gain unauthorized access to other systems</li>
                  <li>Distributing malware or viruses</li>
                </ul>

                <h2>7. Service Level Agreement</h2>
                <p>
                  We strive to maintain 99.9% uptime for our hosting services. In the event of extended downtime, you
                  may be eligible for service credits as outlined in our SLA.
                </p>

                <h2>8. Limitation of Liability</h2>
                <p>
                  DomainHost Pro shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
                  losses.
                </p>

                <h2>9. Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our
                  services, to understand our practices.
                </p>

                <h2>10. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of significant changes
                  via email or through our website. Continued use of our services constitutes acceptance of the modified
                  terms.
                </p>

                <h2>11. Termination</h2>
                <p>
                  Either party may terminate this agreement at any time. Upon termination, your access to our services
                  will cease, and any outstanding fees will become immediately due and payable.
                </p>

                <h2>12. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                  <br />
                  Email: legal@domainhostpro.com
                  <br />
                  Phone: 1-800-123-4567
                  <br />
                  Address: 123 Tech Street, Digital City, DC 12345
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
