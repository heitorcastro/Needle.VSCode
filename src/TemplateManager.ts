class TemplateManager {
    fileTemplatePath: string;
    projectTemplatePath: string;
  
    constructor(fileTemplatePath: string, projectTemplatePath: string) {
      this.fileTemplatePath = fileTemplatePath;
      this.projectTemplatePath = projectTemplatePath;
    }
  
    greet() {
      return "Hello, " + this.fileTemplatePath;
    }
  }