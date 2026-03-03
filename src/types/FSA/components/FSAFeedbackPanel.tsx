import React from 'react'

import {
  CheckPhase,
  type FSAFeedback,
} from '../type'

interface FSAFeedbackPanelProps {
  feedback: FSAFeedback |  null
  phase: CheckPhase
}

export function FSAFeedbackPanel({
  feedback,
  phase,
}: FSAFeedbackPanelProps) {


  if (!feedback) {
    return (
      <div style={{ opacity: 0.6, fontStyle: 'italic' }}>
        {phase === CheckPhase.PreviewError
          ? 'Preview errors found'
          : 'No feedback yet'}
      </div>
    )
  }

  const safeFeedback = feedback

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {
        safeFeedback.errors.length != 0 ?
        <div
          style={{
            padding: 10,
            borderRadius: 6,
            background: '#f5f7fa',
            fontWeight: 600,
          }}
        >
          {
            phase == CheckPhase.PreviewError ? "Errors in Preview" : "Errors in Evaluation"
          }
        </div>
        : null
      }
      {/* ================= Summary ================= */}
      {safeFeedback.summary && (
        <div
          style={{
            padding: 10,
            borderRadius: 6,
            background: '#f5f7fa',
            fontWeight: 600,
          }}
        >
          {safeFeedback.summary}
        </div>
      )}

      {/* ================= Errors ================= */}
      {safeFeedback.errors.length > 0 && (
        <FeedbackSection
          title={
            phase === CheckPhase.PreviewError
              ? 'Preview Errors'
              : 'Errors'
          }
          items={safeFeedback.errors}
          accent="#d32f2f"
        />
      )}

      {/* ================= Warnings ================= */}
      {safeFeedback.warnings.length > 0 && (
        <FeedbackSection
          title="Warnings"
          items={safeFeedback.warnings}
          accent="#ed6c02"
        />
      )}

      {/* ================= Structural Info ================= */}
      {safeFeedback.structural && (
        <Section title="Structure">
          <KV label="Deterministic" value={bool(safeFeedback.structural.is_deterministic)} />
          <KV label="Complete" value={bool(safeFeedback.structural.is_complete)} />
          <KV label="States" value={safeFeedback.structural.num_states} />
          <KV label="Transitions" value={safeFeedback.structural.num_transitions} />

          {safeFeedback.structural.unreachable_states.length > 0 && (
            <KV
              label="Unreachable states"
              value={safeFeedback.structural.unreachable_states.join(', ')}
            />
          )}

          {safeFeedback.structural.dead_states.length > 0 && (
            <KV
              label="Dead states"
              value={safeFeedback.structural.dead_states.join(', ')}
            />
          )}
        </Section>
      )}

      {/* ================= Language ================= */}
      {safeFeedback.language && (
        <Section title="Language">
          <KV
            label="Equivalent"
            value={bool(safeFeedback.language.are_equivalent)}
          />

          {!safeFeedback.language.are_equivalent &&
            safeFeedback.language.counterexample && (
              <KV
                label="Counterexample"
                value={`${safeFeedback.language.counterexample} (${safeFeedback.language.counterexample_type})`}
              />
            )}
        </Section>
      )}

      {/* ================= Test Results ================= */}
      {safeFeedback.test_results.length > 0 && (
        <Section title="Tests">
          {safeFeedback.test_results.map((t, i) => (
            <div
              key={i}
              style={{
                padding: '6px 8px',
                borderRadius: 4,
                background: t.passed ? '#e8f5e9' : '#ffebee',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
              }}
            >
              <span>{JSON.stringify(t.input)}</span>
              <span>{t.passed ? '✓' : '✗'}</span>
            </div>
          ))}
        </Section>
      )}

      {/* ================= Hints ================= */}
      {safeFeedback.hints.length > 0 && (
        <Section title="Hints">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {safeFeedback.hints.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  )
}

/* ===========================
   Helper components
=========================== */

function FeedbackSection({
  title,
  items,
  accent,
}: {
  title: string
  items: any[]
  accent: string
}) {
  return (
    <Section title={title}>
      <div
        style={{
          maxHeight: 200, // adjust as needed
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          paddingRight: 4, // prevents scrollbar from overlapping content
        }}
      >
        {items.map((e, i) => (
          <div
            key={i}
            style={{
              borderLeft: `4px solid ${accent}`,
              padding: '6px 8px',
              background: '#fafafa',
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <div style={{ fontWeight: 600 }}>{e.message}</div>

            <div style={{ fontSize: 12, opacity: 0.7 }}>
              {e.code} · {e.severity}
            </div>

            {e.suggestion && (
              <div style={{ fontSize: 13, fontStyle: 'italic' }}>
                💡 {e.suggestion}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}


function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div
        style={{
          fontWeight: 700,
          fontSize: 14,
          textTransform: 'uppercase',
          opacity: 0.7,
        }}
      >
        {title}
      </div>
      {children}
    </div>
  )
}

function KV({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <strong>{label}:</strong>
      <span>{value}</span>
    </div>
  )
}

function bool(v: boolean) {
  return v ? 'Yes' : 'No'
}
