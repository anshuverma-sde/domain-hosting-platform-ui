"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function LegalPage() {
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
              <CardTitle className="text-3xl text-center">Legal Information</CardTitle>
              <p className="text-center text-muted-foreground">Important legal notices and policies</p>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h2>Company Information</h2>
                <p>
                  DomainHost Pro is a registered trademark of DomainHost Pro LLC, a Delaware limited liability company.
                  <br />
                  Business Address: 123 Tech Street, Digital City, DC 12345
                  <br />
                  Phone: 1-800-123-4567
                  <br />
                  Email: legal@domainhostpro.com
                </p>

                <h2>ICANN Accreditation</h2>
                <p>
                  DomainHost Pro is an ICANN-accredited domain registrar. We comply with all ICANN policies and
                  procedures for domain registration and management.
                </p>

                <h2>Dispute Resolution</h2>
                <p>
                  Any disputes arising from the use of our services will be resolved through binding arbitration in
                  accordance with the rules of the American Arbitration Association.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and software, is the property of
                  DomainHost Pro or its licensors and is protected by copyright and trademark laws.
                </p>

                <h2>Compliance</h2>
                <p>
                  We comply with all applicable laws and regulations, including GDPR, CCPA, and other privacy
                  legislation. We are committed to protecting your rights and privacy.
                </p>

                <h2>Contact Legal Department</h2>
                <p>
                  For legal inquiries, please contact our legal department at legal@domainhostpro.com or call
                  1-800-123-4567.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
