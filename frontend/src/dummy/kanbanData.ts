import type { Column } from '@/stores/kanban.ts'

export const dummyBoard: Column[] = [
  {
    id: 1,
    text: '할 일',
    cards: [
      {
        id: 101,
        text: '기획안 작성',
        assigners: [
          { id: 1, name: '민수' },
          { id: 2, name: '지영' }
        ]
      },
      {
        id: 102,
        text: '디자인 검토',
        assigners: [
          { id: 3, name: '준호' }
        ]
      }
    ]
  },
  {
    id: 2,
    text: '진행 중',
    cards: [
      {
        id: 201,
        text: 'API 명세서 작성',
        assigners: [
          { id: 1, name: '민수' }
        ]
      }
    ]
  },
  {
    id: 3,
    text: '완료',
    cards: [
      {
        id: 301,
        text: '기초 세팅 완료',
        assigners: [
          { id: 4, name: '하은' }
        ]
      }
    ]
  }
]
