import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0c] text-[#f0f0f0]">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <div className="mt-8 space-y-8 text-neutral-300">
          <section className="space-y-2">
            <p>Last updated February 5, 2026</p>
            <p>DIGETO – Private Limited</p>
            <p>RCS Paris No. 829 724 764</p>
            <p>Head Office: 8 bis Rue Abel, 75012 Paris, France</p>
            <p>Email: contact@digeto.io</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">1. Introduction</h2>
            <p>Welcome to DIGETO – Private Limited ("DIGETO," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our services, platforms, and solutions designed to support international business expansion (the "Services").</p>
            <p>By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you must not use our Services.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">2. Eligibility</h2>
            <p>By using the Services, you confirm that you:</p>
            <p>Are at least 18 years old (or the age of majority in your jurisdiction).</p>
            <p>Have the legal authority to enter into these Terms.</p>
            <p>Will comply with all applicable laws and regulations.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">3. Scope of Services</h2>
            <p>DIGETO provides international expansion solutions, which may include:</p>
            <p>Market entry consulting and advisory services.</p>
            <p>Business setup, compliance, and registration support.</p>
            <p>Digital tools, platforms, and resources for managing cross-border operations.</p>
            <p>We may update, modify, or discontinue certain aspects of the Services at any time without prior notice.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <p>Provide accurate, complete, and updated information when required.</p>
            <p>Maintain the confidentiality of any account credentials.</p>
            <p>Use the Services only for lawful business purposes.</p>
            <p>Not engage in activities that disrupt, damage, or misuse our systems or networks.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">5. Fees and Payments</h2>
            <p>Certain Services may require payment of fees. By purchasing or subscribing, you agree to pay all applicable fees in accordance with our pricing and billing terms. All payments are non-refundable unless otherwise stated.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">6. Intellectual Property</h2>
            <p>All content, trademarks, designs, software, and materials provided through the Services are owned or licensed by DIGETO and protected under intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Services for business purposes only.</p>
            <p>You may not copy, distribute, modify, reverse engineer, or exploit any part of the Services without our prior written consent.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">7. Data Protection & Privacy</h2>
            <p>DIGETO respects your privacy. Our collection and use of personal data are governed by our Privacy Policy, which is incorporated into these Terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">8. Third-Party Services</h2>
            <p>Our Services may integrate or provide access to third-party platforms, providers, or services. DIGETO is not responsible for the availability, accuracy, or conduct of third-party services and disclaims liability for any damages arising from their use.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <p>DIGETO shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, revenues, or business opportunities.</p>
            <p>Our total liability for any claims related to the Services shall not exceed the amount paid by you to DIGETO in the preceding 12 months.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">10. Indemnification</h2>
            <p>You agree to indemnify and hold harmless DIGETO, its directors, employees, and affiliates from any claims, liabilities, damages, or expenses arising out of your misuse of the Services or violation of these Terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">11. Termination</h2>
            <p>We may suspend or terminate your access to the Services at any time if you breach these Terms, misuse the Services, or as required by law.</p>
            <p>Upon termination, your right to use the Services ceases immediately, but obligations related to payment, intellectual property, indemnification, and limitation of liability shall survive.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">12. Governing Law & Jurisdiction</h2>
            <p>These Terms are governed by and construed in accordance with the laws of France. Any disputes shall be subject to the exclusive jurisdiction of the courts of Paris, France.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">13. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Any changes will be posted on our website with the "Last Updated" date. Continued use of the Services after changes indicates your acceptance of the updated Terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-medium text-[#f0f0f0]">14. Contact</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>DIGETO – Private Limited</p>
            <p>8 bis Rue Abel, 75012 Paris, France</p>
            <p>Email: contact@digeto.io</p>
          </section>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
