import { ThemeProvider } from '@styles/minimal/theme-provider'
import { SandboxResponseAreaTub } from './types/Sandbox/index'

function ResponseAreaInputWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

// wrap the components with the necessary providers; only in the sandbox
class WrappedSandboxResponseAreaTub extends SandboxResponseAreaTub {
  constructor() {
    super()

    if (!this.responseType) {
      console.error('SandboxResponseAreaTub must have a responseType set')
    }

    const originalInput = this.InputComponent
    const originalWizard = this.WizardComponent

    this.InputComponent = props => (
      <ResponseAreaInputWrapper>
        {originalInput(props)}
      </ResponseAreaInputWrapper>
    )

    this.WizardComponent = props => (
      <ResponseAreaInputWrapper>
        {originalWizard(props)}
      </ResponseAreaInputWrapper>
    )
  }
}

export default WrappedSandboxResponseAreaTub
