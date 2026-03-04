import React from 'react'

import { FSAConfig } from '../type'

interface ConfigPanelProps {
  config: FSAConfig
  setConfig: (config: FSAConfig) => void
  onClose: () => void
  classes: Record<string, string>
}

export default function ConfigPanel({
  config,
  setConfig,
  onClose,
  classes,
}: ConfigPanelProps) {
  return (
    <div className={classes.sideModal}>
      <div className={classes.sideModalHeader}>
        <span>Evaluation Settings</span>
        <span className={classes.closeButton} onClick={onClose}>
          ✕
        </span>
      </div>

      <div className={classes.sideModalBody}>
        {/* evaluation_mode */}
        <div className={classes.field}>
          <label>Evaluation Mode</label>
          <select
            className={classes.inputField}
            value={config.evaluation_mode ?? ''}
            onChange={(e) =>
              setConfig({ ...config, evaluation_mode: e.target.value as FSAConfig['evaluation_mode'] })
            }
          >
            <option value="">Select mode</option>
            <option value="strict">Strict</option>
            <option value="lenient">Lenient</option>
            <option value="partial">Partial</option>
          </select>
        </div>

        {/* expected_type */}
        <div className={classes.field}>
          <label>Expected Type</label>
          <select
            className={classes.inputField}
            value={config.expected_type ?? ''}
            onChange={(e) =>
              setConfig({ ...config, expected_type: e.target.value as FSAConfig['expected_type'] })
            }
          >
            <option value="">Select type</option>
            <option value="DFA">DFA</option>
            <option value="NFA">NFA</option>
            <option value="any">Any</option>
          </select>
        </div>

        {/* feedback_verbosity */}
        <div className={classes.field}>
          <label>Feedback Verbosity</label>
          <select
            className={classes.inputField}
            value={config.feedback_verbosity ?? ''}
            onChange={(e) =>
              setConfig({ ...config, feedback_verbosity: e.target.value as FSAConfig['feedback_verbosity'] })
            }
          >
            <option value="">Select verbosity</option>
            <option value="minimal">Minimal</option>
            <option value="standard">Standard</option>
            <option value="detailed">Detailed</option>
          </select>
        </div>

        {/* check_minimality */}
        <div className={classes.field}>
          <label>
            <input
              type="checkbox"
              checked={config.check_minimality ?? false}
              onChange={(e) =>
                setConfig({ ...config, check_minimality: e.target.checked })
              }
            />
            Check Minimality
          </label>
        </div>

        {/* check_completeness */}
        <div className={classes.field}>
          <label>
            <input
              type="checkbox"
              checked={config.check_completeness ?? false}
              onChange={(e) =>
                setConfig({ ...config, check_completeness: e.target.checked })
              }
            />
            Check Completeness
          </label>
        </div>

        {/* highlight_errors */}
        <div className={classes.field}>
          <label>
            <input
              type="checkbox"
              checked={config.highlight_errors ?? false}
              onChange={(e) =>
                setConfig({ ...config, highlight_errors: e.target.checked })
              }
            />
            Highlight Errors
          </label>
        </div>

        <button
          className={classes.addButton}
          onClick={() => setConfig({})} // reset all to empty/default
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  )
}
