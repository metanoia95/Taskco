import { defineStore } from "pinia";

let initialized = false


export interface Card {
    id : number
    text : string
    assigners : Assigner[]
}

export interface Column{
    id : number
    text : string
    cards : Card[]
}

export interface Assigner{
    id : number
    name : string
}

export interface KanbanState{
    Columns: Column[]

}

export const useKanbanStore = defineStore('kanban', {
    state: (): KanbanState => ({
        Columns:[],


    }),
    actions:{

        // ** 테스트용 더미 설정
        initBoardIfNeeded(columns: Column[]) {
            if (!initialized) {
              this.Columns = columns
              initialized = true
              console.log("✅ 더미 보드 한 번만 초기화됨")
            }
          },

        //보드 세팅 및 초기화
        setBoard(columns: Column[]){
            this.Columns=columns
        },

        // 컬럼 
        // 1) 컬럼 추가
        addColumn(){
            const newColumn: Column ={
                id:Date.now(), // 임시 ID
                text: '',
                cards:[]
            }
            this.Columns.push(newColumn)
            
        },
        // 2) 컬럼 삭제
        removeColumn(columnId:number){
            this.Columns = this.Columns.filter(col=>col.id !== columnId)
        },
        // 3) 컬럼명 변경
        retextColumn(columnId:number, newText:string ){
            const column = this.Columns.find(col=> col.id === columnId)
            if (column){
                column.text = newText
            }

        },
        // 4) 컬럼 이동 --> vuedraggable 라이브러리를 사용하면 사용 불필요.
        moveColumn(columnId: number, newIndex: number) {
            const index = this.Columns.findIndex(col => col.id === columnId)
            if (index === -1) return
          
            const [movedColumn] = this.Columns.splice(index, 1)
            this.Columns.splice(newIndex, 0, movedColumn)
          },
        
        // 카드 
        // 1) 카드 추가
        addCard(columnId:number){
            const column = this.Columns.find(col=>col.id === columnId)
            if(column){
                const newCard: Card = {
                    id:Date.now(),
                    text: '',
                    assigners:[],
                }
                column.cards.push(newCard)
            }

        },
        // 2) 카드 삭제
        removeCard(columnId:number, cardId : number){
            const column = this.Columns.find(col=>col.id === columnId)
            if(column){
                column.cards = column.cards.filter(c => c.id !==cardId) // 카드id와 일치하지 않는 값만 남기기.
            }
        },
        // 3) 카드명 변경
        reTextCard(columnId:number, cardId : number, newText: string){
            const column = this.Columns.find(col=>col.id === columnId)
            if (column){
                const card =  column.cards.find(c => c.id === cardId)
                if(card){
                    card.text = newText
                }
            }
        },
        // 4) 수행인원 추가 및 삭제
        // 수행인원 추가
        addAssigner(columnId:number, cardId : number, assigner : Assigner ){
            const column = this.Columns.find(col=>col.id === columnId)
            if (column){
                const card =  column.cards.find(c => c.id === cardId)
                if(card){
                    card.assigners.push(assigner)
                }
            }
        },

        // 수행인원 삭제
        removeAssigner(columnId:number, cardId : number, assignerId : number ){
            const column = this.Columns.find(col=>col.id === columnId)
            if (column){
                const card =  column.cards.find(c => c.id === cardId)
                if(card){
                    card.assigners = card.assigners.filter(a => a.id !==assignerId) // id와 일치하지 않는 값만 남기기.
                }
            }
        },

        // 5) 카드 이동 기능
        moveCard(
            fromColumnId:number, // 원래 있던 컬럼
            toColumnId:number, // 이동하는 컬럼
            cardId:number, // 카드 id
            newIndex:number // 카드를 옮기는 컬럼의 인덱스. 핸들러에서 인식해서 가져와야함. 

        ){
            const from = this.Columns.find(c => c.id === fromColumnId)
            const to = this.Columns.find(c => c.id === toColumnId)
            if (!from || !to) return  // 컬럼이 존재하지 않으면 함수 종료
            
            const cardIndex = from.cards.findIndex(c => c.id === cardId) // 기존 컬럼에서 옮기는 카드의 인덱스(위치)를 찾음
            const [movedCard] = from.cards.splice(cardIndex,1) // splice에서 cardIndex는 시작점. 1은 시작점부터 몇 개를 할당. 1이면 1개 삭제.
            // from(원 컬럼)에서 해당 카드의 인덱스값을 기준으로 1개(옮기는 카드)를 삭제하고 해당 카드는 movedCard 변수에 담음. 
            to.cards.splice(newIndex,0,movedCard) 
            // newIndex 위치에, 삭제 없이, movedCard를 집어 넣음.
        }




    }

})
