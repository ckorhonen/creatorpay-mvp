export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>CreatorPay MVP</h1>
      <h2>Payment Consolidation for Creators</h2>
      
      <section style={{ marginTop: '2rem' }}>
        <h3>The Problem</h3>
        <p>
          Content creators earn income from multiple platforms - YouTube, Patreon, 
          Twitch, Ko-fi, OnlyFans, Substack, and more. Tracking payments across 
          these platforms is time-consuming and makes financial planning difficult.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>The Solution</h3>
        <ul>
          <li><strong>Unified Dashboard:</strong> View all income streams in one place</li>
          <li><strong>Payment Tracking:</strong> Real-time synchronization</li>
          <li><strong>Financial Insights:</strong> Understand revenue trends</li>
          <li><strong>Tax Preparation:</strong> Simplified reporting</li>
          <li><strong>Growth Analytics:</strong> Identify profitable platforms</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Get Started</h3>
        <p>
          This is an MVP in active development. Check the README for setup instructions.
        </p>
      </section>
    </main>
  )
}
