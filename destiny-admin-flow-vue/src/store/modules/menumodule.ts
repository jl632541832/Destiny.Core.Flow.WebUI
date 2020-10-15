import { IMenuRouter } from '@/domain/entity/menudto/MenuRouterDto';
import defaultConsts from '@/shared/config/terminalconst';
import store from "@/store"
import {
    VuexModule,
    Module,
    Mutation,
    Action,
    getModule
  } from "vuex-module-decorators";
export interface IMenuRouerStore
{
    menus:string 
}

/**
 * 菜单模块
 */
@Module({dynamic:true,store,name:"menu"})
class MenuRouerStore extends VuexModule implements IMenuRouerStore{
    menus: string=localStorage.getItem(defaultConsts.menu)||"";
    /**
     * 
     * @param _menus 属性
     */
    @Mutation
    private SET_MENUS(_menus:Array<IMenuRouter>)
    {
        let _menuString=JSON.stringify(_menus);
        localStorage.setItem(defaultConsts.menu,_menuString)
    }
    /**
     * 写入值
     */
    @Action
    public SetMenus(_menus:Array<IMenuRouter>) {
        this.SET_MENUS(_menus)
    }
}

export const MenuModule =getModule(MenuRouerStore);//获取模块


