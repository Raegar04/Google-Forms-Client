export interface Form {
    id: string
    title: string
    description: string
    holderId: string
  }

  export interface Question {
    id: string
    description: string
    formId: string
  }
  
  export interface UserForm {
    id: string
    userId: string
    formId:string
  }