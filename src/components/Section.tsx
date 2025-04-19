type Props = { title: string; children: React.ReactNode }

export default function Section({ title, children }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold uppercase tracking-wide text-chrome-dark">
        {title}
      </h2>
      <div className="prose prose-invert">{children}</div>
    </section>
  )
}
