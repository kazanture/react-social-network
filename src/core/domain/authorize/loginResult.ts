import { BaseDomain } from 'core/domain/common'

export class LoginUser extends BaseDomain{

    constructor(uid: string){
        super()

        this._uid = uid
    }
    
    /**
     * User identifier
     * 
     * @type {string}
     * @memberof LoginUser
     */
    
    private _uid : string
    public get uid() : string {
        return this._uid
    }

    

}