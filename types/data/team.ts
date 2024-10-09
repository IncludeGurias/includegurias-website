export interface TeamMember {
  name: string
  job?: string
  imageUrl?: string
  href?: string
}

// usado no all team members component
export interface OldMember {
  name: string
  job?: string
  imageUrl?: string
}

// usado no bolsistas component
export interface ScholarshipMember {
  name: string
  imageUrl?: string
}
