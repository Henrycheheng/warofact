import { App } from 'vue'

/**
 * @param app
 */
const registerComponents: any[] = []
export function setupCustomComponents(app: App) {
  registerComponents.forEach((component) => {
    app.component(component.name, component)
  })
}
