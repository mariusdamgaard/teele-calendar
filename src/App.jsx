import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Gift, Snowflake } from 'lucide-react'

const poem = [
  [
    'Taani Tibu tries Tinder,',
    'Trawling Tallinn’s tüdruk troupe,',
    'Then... terrific Tuuli turns Tinder-top,',
    'Truly Tinder’s top tüdruk.'
  ],
  [
    'Tons of Tinder talk together,',
    'Topics travelling Tallinn to Tokyo,',
    'Teasing, texting, talking tirelessly,',
    'Till time tells: “Try tête-à-tête!”'
  ],
  [
    'Tuuli travels, travels, travels,',
    'Taani Tibu tries to trust,',
    'Then Tuuli, though terribly travelled,',
    'Thankfully takes time to tête-à-tête.'
  ],
  [
    'Together trekking trails through trees,',
    'Tallinn’s tiniest tower, tremendous treat.',
    'Taani treat? Tragically trapped!',
    'Terrific trigger: tête-à-tête two!'
  ],
  [
    'Tuuli taken to town,',
    'Taani treat, this time transferred,',
    'Then truth: Tuuli turns Teele.',
    'Tibu thinks: terrific transformation!'
  ],
  [
    'Two days tick, Teele time,',
    'Tracking Tallinn’s twisted treats,',
    'Twisted treats? Tragically tough to track!',
    'Then triumph: tasty treats together.'
  ],
  [
    'Teele, Tibu tackle treetops,',
    'Twilight turns treetops tricky.',
    'Teele terminates, Tibu tackles two,',
    'Then together: tea time!'
  ]
]

export default function App() {
  const [open, setOpen] = useState(false)
  const doorNumber = 8

  return (
    <main className="calendar-page">
      <Snowflake className="snowflake snowflake-one" />
      <Snowflake className="snowflake snowflake-two" />

      <div className="calendar-container">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="door"
              className="calendar-door"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ rotateY: -85, opacity: 0 }}
              transition={{ duration: 0.65 }}
              onClick={() => setOpen(true)}
            >
              <div className="door-border" />

              <p className="calendar-name">
                Teele’s Christmas Calendar
              </p>

              <div className="door-number">
                {doorNumber}
              </div>

              <Gift className="gift-icon" />

              <p className="tap-text">
                Tap to open
              </p>
            </motion.button>
          ) : (
            <motion.section
              key="poem"
              className="poem-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <header className="poem-header">
                <p className="door-label">
                  Door {doorNumber}
                </p>

                <h1>
                  Tuuli trehvab Taani Tibu
                </h1>

                <div className="title-line" />
              </header>

              <div className="poem">
                {poem.map((verse, verseIndex) => (
                  <div
                    className="verse"
                    key={verseIndex}
                  >
                    {verse.map((line, lineIndex) => (
                      <p key={lineIndex}>
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <button
                className="close-button"
                onClick={() => setOpen(false)}
              >
                Close door
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
