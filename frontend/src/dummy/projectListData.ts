
export interface ProjectItem {
    p_idx: number
    p_title: string
    role: '팀장' | '팀원'
  }
  
  export const dummyProjectList: ProjectItem[] = [
    {
      p_idx: 1,
      p_title: '프로젝트 A',
      role: '팀장'
    },
    {
      p_idx: 2,
      p_title: '프로젝트 B',
      role: '팀원'
    },
    {
      p_idx: 3,
      p_title: '프로젝트 C',
      role: '팀원'
    },
    {
      p_idx: 4,
      p_title: '프로젝트 D',
      role: '팀장'
    },
    {
      p_idx: 5,
      p_title: '프로젝트 E',
      role: '팀원'
    }
  ]