export type FileType = 'File' | 'Directory'

export type File = {
  name: string
  type: FileType
  value: string
  language: string
  children?: File[]
}

export type DocumentSourceRoot = {
  id: string
  entry: string
  dependencnies: []
  files: File[]
}
