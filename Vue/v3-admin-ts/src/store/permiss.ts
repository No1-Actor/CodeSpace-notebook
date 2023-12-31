// store 提供数据 router 提供角色数据
import { defineStore } from 'pinia'
interface  ObjectList  {
    [key:string]: string[]
}
// 不同角色的权限
export const usePermissStore = defineStore('permiss', () => {
    return {
        // 角色列表
        roleList: <ObjectList> { // <>泛型
            admin: ['1', '2', '3', '4'],
            user:['1'], // 403
        }
    }
})

