"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function PrivacyPage() {
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
              <CardTitle className="text-3xl text-center">Privacy Policy</CardTitle>
              <p className="text-center text-muted-foreground">Last updated: December 10, 2024</p>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h2>1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, make a
                  purchase, or contact us for support. This may include:
                </p>
                <ul>
                  <li>Name, email address, and contact information</li>
                  <li>Billing and payment information</li>
                  <li>Domain registration details</li>
                  <li>Support communications</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2>3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties except as
                  described in this policy. We may share information:
                </p>
                <ul>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                  <li>In connection with a business transfer</li>
                </ul>

                <h2>4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure.
                </p>

                <h2>5. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can
                  control cookie settings through your browser preferences.
                </p>

                <h2>6. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services and comply with
                  legal obligations. Domain registration data may be retained for longer periods as required by ICANN
                  policies.
                </p>

                <h2>7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>

                <h2>8. International Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place for such transfers.
                </p>

                <h2>9. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13. We do not knowingly collect personal information
                  from children under 13.
                </p>

                <h2>10. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the "Last updated" date.
                </p>

                <h2>11. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@domainhostpro.com
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
